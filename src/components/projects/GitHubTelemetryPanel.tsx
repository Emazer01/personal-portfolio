import React from 'react';
import {
  Activity,
  ExternalLink,
  FolderGit2,
  GitFork,
  RefreshCw,
  Star
} from 'lucide-react';
import {
  EnrichedProject,
  GitHubDataSource,
  GitHubUser,
  LanguageStat
} from '../../types/portfolio';
import { formatFullDate } from '../../utils/formatters';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

interface GitHubTelemetryPanelProps {
  user: GitHubUser;
  repos: EnrichedProject[];
  languageStats: LanguageStat[];
  source: GitHubDataSource;
  fetchedAt: string;
  loading: boolean;
  refreshing: boolean;
  rateLimited: boolean;
  onRefresh: () => void;
}

export const GitHubTelemetryPanel: React.FC<GitHubTelemetryPanelProps> = ({
  user,
  repos,
  languageStats,
  source,
  fetchedAt,
  loading,
  refreshing,
  rateLimited,
  onRefresh
}) => {
  const nonForkCount = repos.filter((r) => !r.fork).length;
  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
  const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0);

  const sourceLabel =
    source === 'live'
      ? 'Live GitHub API'
      : source === 'cache'
        ? 'Cached API Snapshot'
        : rateLimited
          ? 'Rate-Limit Fallback Snapshot'
          : 'Verified Offline Snapshot';

  const latestPushed = repos[0];

  return (
    <section
      id="github"
      tabIndex={-1}
      className="border-t border-[var(--border-subtle)] py-20 outline-none"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="06 / GITHUB INTEGRATION"
          title="Open Source & Repository Telemetry"
          description="Live public profile metrics, top programming languages, and cached API synchronization for @Emazer01 with resilient offline fallbacks."
          rightSlot={
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant={source === 'live' ? 'blue' : 'gold'}>
                <Activity className="h-3 w-3" aria-hidden="true" />
                {loading ? 'Syncing GitHub API...' : sourceLabel}
              </Badge>
              <button
                type="button"
                onClick={onRefresh}
                disabled={refreshing}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1.5 font-mono text-xs text-[var(--text-primary)] transition-colors hover:border-[var(--accent-gold)] disabled:opacity-50"
              >
                <RefreshCw
                  className={`h-3.5 w-3.5 ${refreshing ? 'animate-spin' : ''}`}
                  aria-hidden="true"
                />
                Refresh
              </button>
            </div>
          }
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Profile Summary Card */}
          <Card className="flex flex-col justify-between p-6 lg:col-span-5">
            <div>
              <div className="flex items-center gap-4">
                <img
                  src={user.avatar_url}
                  alt={`${user.login} GitHub avatar`}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="h-16 w-16 rounded-xl border border-[var(--border-strong)] object-cover"
                />
                <div>
                  <div className="font-editorial text-lg font-bold text-[var(--text-primary)]">
                    {user.name || 'Gary Ferdinand Wahyudi'}
                  </div>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-[var(--accent-gold)] hover:underline"
                  >
                    @{user.login}
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <div className="mt-1 font-mono text-[11px] text-[var(--text-secondary)]">
                    Member since {new Date(user.created_at).getFullYear()}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-3">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-secondary)]">
                    <FolderGit2 className="h-3.5 w-3.5 text-[var(--accent-gold)]" aria-hidden="true" />
                    Public Repos
                  </div>
                  <div className="mt-1 font-editorial text-2xl font-bold text-[var(--text-primary)]">
                    {user.public_repos}
                  </div>
                  <div className="font-mono text-[10px] text-[var(--text-secondary)]">
                    {nonForkCount} original
                  </div>
                </div>

                <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-3">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-secondary)]">
                    <Star className="h-3.5 w-3.5 text-[var(--accent-gold)]" aria-hidden="true" />
                    Stars
                  </div>
                  <div className="mt-1 font-editorial text-2xl font-bold text-[var(--text-primary)]">
                    {totalStars}
                  </div>
                  <div className="font-mono text-[10px] text-[var(--text-secondary)]">
                    Across repos
                  </div>
                </div>

                <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-3">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-secondary)]">
                    <GitFork className="h-3.5 w-3.5 text-[var(--accent-blue)]" aria-hidden="true" />
                    Forks
                  </div>
                  <div className="mt-1 font-editorial text-2xl font-bold text-[var(--text-primary)]">
                    {totalForks}
                  </div>
                  <div className="font-mono text-[10px] text-[var(--text-secondary)]">
                    Community
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-subtle)] pt-4 font-mono text-[11px] text-[var(--text-secondary)]">
              <span>Synced: {formatFullDate(fetchedAt)}</span>
              <a
                href={`${user.html_url}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[var(--text-primary)] hover:text-[var(--accent-gold)]"
              >
                Browse All on GitHub
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </Card>

          {/* Language Distribution & Highlighted Activity */}
          <Card className="flex flex-col justify-between p-6 lg:col-span-7">
            <div>
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-editorial text-lg font-semibold text-[var(--text-primary)]">
                  Primary Language Distribution
                </h3>
                <span className="font-mono text-[11px] text-[var(--text-secondary)]">
                  Original repositories ({nonForkCount})
                </span>
              </div>

              {/* Stacked language bar */}
              <div
                className="mt-4 flex h-3 w-full overflow-hidden rounded-full bg-[var(--bg-primary)]"
                role="img"
                aria-label="Programming language breakdown bar"
              >
                {languageStats.map((stat) => (
                  <div
                    key={stat.language}
                    style={{
                      width: `${Math.max(stat.percentage, 3)}%`,
                      backgroundColor: stat.color
                    }}
                    title={`${stat.language}: ${stat.repoCount} repos (${stat.percentage}%)`}
                  />
                ))}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {languageStats.map((stat) => (
                  <div
                    key={stat.language}
                    className="flex items-center justify-between rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: stat.color }}
                        aria-hidden="true"
                      />
                      <span className="font-mono text-xs font-medium text-[var(--text-primary)]">
                        {stat.language}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[var(--text-secondary)]">
                      {stat.repoCount} repos &middot; {stat.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {latestPushed && (
              <div className="mt-6 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent-gold)]">
                    Latest Active Ecosystem
                  </span>
                  <span className="font-mono text-[11px] text-[var(--text-secondary)]">
                    Last push: {formatFullDate(latestPushed.pushed_at)}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="font-editorial text-sm font-semibold text-[var(--text-primary)]">
                      {latestPushed.title}
                    </span>
                    <span className="ml-2 font-mono text-xs text-[var(--text-secondary)]">
                      ({latestPushed.full_name})
                    </span>
                  </div>
                  <a
                    href={latestPushed.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-[var(--accent-blue)] hover:underline"
                  >
                    Inspect Repo
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
