import React, { useMemo, useState } from 'react';
import { FolderSearch } from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { FeaturedProjectCard } from '../../components/projects/FeaturedProjectCard';
import {
  ProjectFilterBar,
  RepoSortOption,
  RepoViewMode
} from '../../components/projects/ProjectFilterBar';
import { RepositoryCard } from '../../components/projects/RepositoryCard';
import { EnrichedProject } from '../../types/portfolio';

interface ProjectsSectionProps {
  repos: EnrichedProject[];
}

const FILTER_OPTIONS = [
  'All',
  'AI & Computer Vision',
  'Full-Stack Web',
  'Backend & Security',
  'TypeScript',
  'Python',
  'JavaScript',
  'PostgreSQL'
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ repos }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [sortBy, setSortBy] = useState<RepoSortOption>('priority');
  const [viewMode, setViewMode] = useState<RepoViewMode>('primary');

  const featuredProjects = useMemo(
    () => repos.filter((repo) => repo.featured),
    [repos]
  );

  const filteredRepos = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const matches = repos.filter((repo) => {
      if (viewMode === 'primary' && (repo.hideFromPrimaryFeed || repo.fork)) {
        return false;
      }

      if (selectedFilter !== 'All') {
        const matchesCategory = repo.category === selectedFilter;
        const matchesLanguage =
          (repo.language ?? '').toLowerCase() === selectedFilter.toLowerCase();
        const matchesStack = repo.techStack.some(
          (tech) => tech.toLowerCase().includes(selectedFilter.toLowerCase())
        );

        if (!matchesCategory && !matchesLanguage && !matchesStack) {
          return false;
        }
      }

      if (query) {
        const searchable = [
          repo.title,
          repo.name,
          repo.tagline,
          repo.resolvedDescription,
          repo.category,
          repo.language ?? '',
          ...repo.techStack,
          ...(repo.topics ?? [])
        ]
          .join(' ')
          .toLowerCase();

        if (!searchable.includes(query)) {
          return false;
        }
      }

      return true;
    });

    return [...matches].sort((a, b) => {
      if (sortBy === 'name') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'updated') {
        return (
          new Date(b.pushed_at || b.updated_at).getTime() -
          new Date(a.pushed_at || a.updated_at).getTime()
        );
      }
      if (sortBy === 'stars') {
        const scoreA = a.stargazers_count * 10 + a.forks_count;
        const scoreB = b.stargazers_count * 10 + b.forks_count;
        if (scoreB !== scoreA) return scoreB - scoreA;
      }
      if (b.priority !== a.priority) return b.priority - a.priority;
      return (
        new Date(b.pushed_at || b.updated_at).getTime() -
        new Date(a.pushed_at || a.updated_at).getTime()
      );
    });
  }, [repos, searchQuery, selectedFilter, sortBy, viewMode]);

  return (
    <section
      id="projects"
      tabIndex={-1}
      className="border-t border-[var(--border-subtle)] py-20 outline-none"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="05 / PROJECTS SHOWCASE"
          title="Featured Systems & Engineering Works"
          description="Selected full-stack platforms and computer vision systems retrieved from GitHub (@Emazer01) and enriched with public-safe architectural summaries."
        />

        {/* Featured Systems Grid */}
        <div className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent-gold)]">
              Featured Systems ({featuredProjects.length})
            </h3>
            <span className="font-mono text-[11px] text-[var(--text-secondary)]">
              Multi-service &amp; AI architectures
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div
                key={project.name}
                className={
                  index === 0 && featuredProjects.length % 2 === 1
                    ? 'lg:col-span-2'
                    : ''
                }
              >
                <FeaturedProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Repository Directory */}
        <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-primary)]">
              Explore All Public Repositories
            </h3>
            <span className="font-mono text-[11px] text-[var(--text-secondary)]">
              Search, filter by technology, or switch between primary systems and all 25 repositories
            </span>
          </div>

          <ProjectFilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedFilter={selectedFilter}
            onSelectFilter={setSelectedFilter}
            filterOptions={FILTER_OPTIONS}
            sortBy={sortBy}
            onSortChange={setSortBy}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            totalMatching={filteredRepos.length}
          />

          {filteredRepos.length === 0 ? (
            <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--bg-surface)] px-6 py-14 text-center">
              <FolderSearch
                className="h-9 w-9 text-[var(--text-secondary)]"
                aria-hidden="true"
              />
              <h4 className="mt-3 font-editorial text-base font-semibold text-[var(--text-primary)]">
                No matching repositories found
              </h4>
              <p className="mt-1 max-w-md text-xs text-[var(--text-secondary)]">
                Try clearing the search term, selecting &ldquo;All&rdquo;, or switching to &ldquo;All Public Repos&rdquo; to inspect every repository under @Emazer01.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilter('All');
                  setViewMode('all');
                }}
                className="mt-4 rounded-lg border border-[var(--accent-gold)]/50 bg-[var(--accent-gold-soft)] px-3.5 py-1.5 font-mono text-xs font-medium text-[var(--accent-gold)]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRepos.map((repo) => (
                <RepositoryCard key={repo.name} repo={repo} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
