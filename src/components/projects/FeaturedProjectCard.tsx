import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  GitBranch,
  GitFork,
  Layers,
  ShieldCheck,
  Star
} from 'lucide-react';
import { EnrichedProject } from '../../types/portfolio';
import { formatShortDate, getLanguageColor } from '../../utils/formatters';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { ProjectThumbnail } from './ProjectThumbnail';

interface FeaturedProjectCardProps {
  project: EnrichedProject;
  index: number;
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  project,
  index
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      interactive
      className="group flex h-full flex-col overflow-hidden p-5 sm:p-6"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="gold">
            System 0{index + 1}
          </Badge>
          <Badge variant="blue">{project.category}</Badge>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs text-[var(--text-secondary)]">
          {project.language && (
            <span className="inline-flex items-center gap-1.5">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: getLanguageColor(project.language) }}
                aria-hidden="true"
              />
              {project.language}
            </span>
          )}
          {project.stargazers_count > 0 && (
            <span className="inline-flex items-center gap-1">
              <Star className="h-3.5 w-3.5 text-[var(--accent-gold)]" aria-hidden="true" />
              {project.stargazers_count}
            </span>
          )}
          {project.forks_count > 0 && (
            <span className="inline-flex items-center gap-1">
              <GitFork className="h-3.5 w-3.5" aria-hidden="true" />
              {project.forks_count}
            </span>
          )}
        </div>
      </div>

      <ProjectThumbnail
        variant={project.thumbnailVariant}
        title={project.title}
        customUrl={project.customThumbnailUrl}
      />

      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="font-editorial text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-xs text-[var(--accent-gold)]">
          {project.tagline}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          {project.resolvedDescription}
        </p>

        {project.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5 border-t border-[var(--border-subtle)] pt-4">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs leading-relaxed text-[var(--text-secondary)]"
              >
                <span
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-gold)]"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-secondary)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.architectureSummary || project.companionRepos.length > 0) && (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[var(--accent-blue)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] rounded"
            >
              <Layers className="h-3.5 w-3.5" aria-hidden="true" />
              {expanded ? 'Hide System Architecture' : 'Inspect System Architecture'}
              {expanded ? (
                <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </button>

            {expanded && (
              <div className="mt-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-3.5 text-xs">
                {project.architectureSummary && (
                  <p className="leading-relaxed text-[var(--text-secondary)]">
                    <strong className="font-mono text-[var(--text-primary)]">
                      Architecture:{' '}
                    </strong>
                    {project.architectureSummary}
                  </p>
                )}

                {project.companionRepos.length > 0 && (
                  <div className="mt-3 space-y-1.5 border-t border-[var(--border-subtle)] pt-2.5">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
                      Ecosystem Repositories
                    </div>
                    {project.companionRepos.map((repo) => (
                      <a
                        key={repo.name}
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between gap-2 rounded px-2 py-1 transition-colors hover:bg-[var(--bg-surface)]"
                      >
                        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-primary)]">
                          <GitBranch className="h-3 w-3 text-[var(--accent-gold)]" aria-hidden="true" />
                          {repo.name}
                        </span>
                        <span className="truncate text-[11px] text-[var(--text-secondary)]">
                          {repo.role}
                        </span>
                      </a>
                    ))}
                  </div>
                )}

                {project.publicSafeNote && (
                  <p className="mt-2.5 flex items-center gap-1.5 font-mono text-[10px] text-[var(--text-secondary)]/80">
                    <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[var(--accent-gold)]" aria-hidden="true" />
                    {project.publicSafeNote}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-4 text-xs">
          <span className="font-mono text-[11px] text-[var(--text-secondary)]">
            Updated {formatShortDate(project.pushed_at || project.updated_at)}
          </span>

          <div className="flex items-center gap-2">
            {project.homepage && project.homepage.startsWith('http') && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-md border border-[var(--border-subtle)] px-2.5 py-1.5 font-mono text-[11px] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-blue)]"
              >
                Live Demo
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            )}
            <a
              href={project.html_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-[var(--bg-elevated)] px-3 py-1.5 font-mono text-[11px] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]"
            >
              View on GitHub
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};
