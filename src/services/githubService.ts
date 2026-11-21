import { siteConfig } from '../config/site';
import {
  FALLBACK_GITHUB_REPOS,
  FALLBACK_GITHUB_USER,
  PROJECT_OVERRIDES
} from '../data/projects';
import {
  EnrichedProject,
  GitHubDataSource,
  GitHubPortfolioPayload,
  GitHubRepo,
  GitHubUser,
  LanguageStat,
  ProjectCategory
} from '../types/portfolio';
import { formatRepoDisplayName, getLanguageColor } from '../utils/formatters';

interface CachedGitHubPayload {
  user: GitHubUser;
  repos: GitHubRepo[];
  fetchedAt: string;
}

function inferCategory(repo: GitHubRepo): ProjectCategory {
  const nameLower = repo.name.toLowerCase();
  const descLower = (repo.description ?? '').toLowerCase();
  if (
    repo.language === 'Python' ||
    nameLower.includes('sitrak') ||
    nameLower.includes('sikapta') ||
    nameLower.includes('tani') ||
    descLower.includes('vision') ||
    descLower.includes('ai')
  ) {
    return 'AI & Computer Vision';
  }
  if (
    nameLower.includes('backend') ||
    nameLower.includes('modul17') ||
    nameLower.includes('modul_17') ||
    nameLower.includes('modul18') ||
    descLower.includes('security')
  ) {
    return 'Backend & Security';
  }
  if (
    nameLower.includes('modul') ||
    nameLower.includes('exercise') ||
    nameLower.includes('unittest')
  ) {
    return 'Engineering Case Study';
  }
  return 'Full-Stack Web';
}

function inferTechStack(repo: GitHubRepo): string[] {
  const stack: string[] = [];
  if (repo.language) stack.push(repo.language);
  const nameLower = repo.name.toLowerCase();
  if (nameLower.includes('backend') || nameLower.includes('rest-api')) {
    stack.push('Node.js', 'Express.js', 'PostgreSQL');
  } else if (nameLower.includes('modul13') || nameLower.includes('pers')) {
    stack.push('ReactJS');
  }
  if (repo.topics?.length) {
    for (const topic of repo.topics.slice(0, 4)) {
      if (!stack.includes(topic)) stack.push(topic);
    }
  }
  return stack.length > 0 ? stack : ['Software Engineering'];
}

export function enrichRepositories(repos: GitHubRepo[]): EnrichedProject[] {
  return repos
    .map((repo): EnrichedProject => {
      const override = PROJECT_OVERRIDES[repo.name];
      if (override) {
        return {
          ...repo,
          title: override.title,
          tagline: override.tagline,
          resolvedDescription: override.description,
          architectureSummary: override.architectureSummary,
          category: override.category,
          techStack: override.techStack,
          highlights: override.highlights,
          featured: Boolean(override.featured),
          priority: override.priority ?? 50,
          thumbnailVariant: override.thumbnailVariant ?? 'default',
          customThumbnailUrl: override.customThumbnailUrl,
          companionRepos: override.companionRepos ?? [],
          hideFromPrimaryFeed: Boolean(override.hideFromPrimaryFeed),
          publicSafeNote: override.publicSafeNote,
          hasCustomOverride: true
        };
      }

      const category = inferCategory(repo);
      const fallbackDesc =
        repo.description?.trim() ||
        `Public ${repo.language ?? 'software'} repository maintained under @${siteConfig.github.username} (${repo.fork ? 'forked learning repository' : 'project codebase'}).`;

      return {
        ...repo,
        title: formatRepoDisplayName(repo.name),
        tagline: `${repo.language ?? 'Codebase'} • ${category}`,
        resolvedDescription: fallbackDesc,
        category,
        techStack: inferTechStack(repo),
        highlights: [],
        featured: false,
        priority: repo.fork ? 5 : 20,
        thumbnailVariant: 'default',
        companionRepos: [],
        hideFromPrimaryFeed: false,
        hasCustomOverride: false
      };
    })
    .sort((a, b) => {
      if (b.priority !== a.priority) return b.priority - a.priority;
      return new Date(b.pushed_at || b.updated_at).getTime() -
        new Date(a.pushed_at || a.updated_at).getTime();
    });
}

export function computeLanguageStats(repos: GitHubRepo[]): LanguageStat[] {
  const counts = new Map<string, number>();
  let total = 0;

  for (const repo of repos) {
    if (repo.fork) continue;
    const lang = repo.language || 'Other';
    counts.set(lang, (counts.get(lang) ?? 0) + 1);
    total += 1;
  }

  if (total === 0) return [];

  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([language, repoCount]) => ({
      language,
      repoCount,
      percentage: Math.round((repoCount / total) * 100),
      color: getLanguageColor(language)
    }));
}

function readCache(): CachedGitHubPayload | null {
  try {
    const raw = localStorage.getItem(siteConfig.github.cacheKey);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachedGitHubPayload;
    if (!parsed?.user || !Array.isArray(parsed?.repos) || !parsed.fetchedAt) {
      return null;
    }
    const age = Date.now() - new Date(parsed.fetchedAt).getTime();
    if (age > siteConfig.github.cacheTtlMs) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function writeCache(payload: CachedGitHubPayload): void {
  try {
    localStorage.setItem(siteConfig.github.cacheKey, JSON.stringify(payload));
  } catch {
    // Ignore storage quota or restricted context errors
  }
}

async function fetchPaginatedRepos(username: string): Promise<GitHubRepo[]> {
  const collected: GitHubRepo[] = [];
  let page = 1;
  const perPage = 100;

  while (page <= 5) {
    const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}&page=${page}`;
    const response = await fetch(url, {
      headers: {
        Accept: 'application/vnd.github+json'
      }
    });

    if (!response.ok) {
      const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining');
      const error = new Error(`GitHub API HTTP ${response.status}`);
      (error as Error & { rateLimited?: boolean }).rateLimited =
        response.status === 403 ||
        response.status === 429 ||
        rateLimitRemaining === '0';
      throw error;
    }

    const batch = (await response.json()) as GitHubRepo[];
    collected.push(...batch);
    if (batch.length < perPage) break;
    page += 1;
  }

  return collected;
}

function buildPayload(
  user: GitHubUser,
  repos: GitHubRepo[],
  source: GitHubDataSource,
  fetchedAt: string,
  rateLimited = false,
  errorMessage?: string
): GitHubPortfolioPayload {
  return {
    user,
    repos: enrichRepositories(repos),
    languageStats: computeLanguageStats(repos),
    source,
    fetchedAt,
    rateLimited,
    errorMessage
  };
}

export async function fetchGitHubPortfolio(
  forceRefresh = false
): Promise<GitHubPortfolioPayload> {
  if (!forceRefresh) {
    const cached = readCache();
    if (cached) {
      return buildPayload(cached.user, cached.repos, 'cache', cached.fetchedAt);
    }
  }

  try {
    const [userRes, repos] = await Promise.all([
      fetch(siteConfig.github.userApiUrl, {
        headers: { Accept: 'application/vnd.github+json' }
      }),
      fetchPaginatedRepos(siteConfig.github.username)
    ]);

    if (!userRes.ok) {
      const rateLimited = userRes.status === 403 || userRes.status === 429;
      const err = new Error(`GitHub User API HTTP ${userRes.status}`);
      (err as Error & { rateLimited?: boolean }).rateLimited = rateLimited;
      throw err;
    }

    const user = (await userRes.json()) as GitHubUser;
    const fetchedAt = new Date().toISOString();
    writeCache({ user, repos, fetchedAt });

    return buildPayload(user, repos, 'live', fetchedAt);
  } catch (err) {
    const rateLimited = Boolean(
      (err as Error & { rateLimited?: boolean })?.rateLimited
    );
    const message =
      err instanceof Error ? err.message : 'Unable to reach GitHub API';

    // Prefer stale cache if available before falling back to verified static snapshot
    try {
      const staleRaw = localStorage.getItem(siteConfig.github.cacheKey);
      if (staleRaw) {
        const stale = JSON.parse(staleRaw) as CachedGitHubPayload;
        if (stale?.user && Array.isArray(stale?.repos)) {
          return buildPayload(
            stale.user,
            stale.repos,
            'cache',
            stale.fetchedAt,
            rateLimited,
            message
          );
        }
      }
    } catch {
      // Ignore storage error
    }

    return buildPayload(
      FALLBACK_GITHUB_USER,
      FALLBACK_GITHUB_REPOS,
      'fallback',
      FALLBACK_GITHUB_USER.updated_at,
      rateLimited,
      message
    );
  }
}
