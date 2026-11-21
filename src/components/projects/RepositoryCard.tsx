import React from 'react';
import { ExternalLink, FolderGit2, GitFork, Globe, Star } from 'lucide-react';
import { EnrichedProject } from '../../types/portfolio';
import { formatShortDate, getLanguageColor } from '../../utils/formatters';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

interface RepositoryCardProps {
  repo: EnrichedProject;
}

export const RepositoryCard: React.FC<RepositoryCardProps> = ({ repo }) => {
  const liveUrl =
    repo.homepage && repo.homepage.trim()
      ? repo.homepage.startsWith('http')
        ? repo.homepage
        : `https://${repo.homepage}`
      : null;

  return (
    <Card interactive className="flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <FolderGit2
            className="h-4 w-4 shrink-0 text-[var(--accent-gold)]"
            aria-hidden="true"
          />
          <h4 className="truncate font-editorial text-base font-semibold text-[var(--text-primary)]">
            {repo.title}
          </h4>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {repo.featured && <Badge variant="gold">Featured</Badge>}
          {repo.fork && <Badge variant="outline">Fork</Badge>}
        </div>
      </div>

      <div className="mt-1 font-mono text-[11px] text-[var(--text-secondary)]">
        {repo.full_name}
      </div>

      <p className="mt-3 line-clamp-3 flex-1 text-xs leading-relaxed text-[var(--text-secondary)]">
        {repo.resolvedDescription}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {repo.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-secondary)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 border-t border-[var(--border-subtle)] pt-3.5 text-[11px] text-[var(--text-secondary)]">
        <div className="flex items-center gap-3 font-mono">
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: getLanguageColor(repo.language) }}
              aria-hidden="true"
            />
            {repo.language ?? 'Docs/Config'}
          </span>

          {repo.stargazers_count > 0 && (
            <span className="inline-flex items-center gap-1">
              <Star className="h-3 w-3 text-[var(--accent-gold)]" aria-hidden="true" />
              {repo.stargazers_count}
            </span>
          )}

          {repo.forks_count > 0 && (
            <span className="inline-flex items-center gap-1">
              <GitFork className="h-3 w-3" aria-hidden="true" />
              {repo.forks_count}
            </span>
          )}

          <span>{formatShortDate(repo.pushed_at || repo.updated_at)}</span>
        </div>

        <div className="flex items-center gap-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Live demo for ${repo.name}`}
              title="Open deployed preview"
              className="inline-flex items-center gap-1 text-[var(--accent-blue)] hover:underline"
            >
              <Globe className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${repo.name} on GitHub`}
            className="inline-flex items-center gap-1 font-mono font-medium text-[var(--text-primary)] hover:text-[var(--accent-gold)]"
          >
            Repo
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </Card>
  );
};
