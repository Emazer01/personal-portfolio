import React from 'react';
import { ArrowUpDown, Search, X } from 'lucide-react';

export type RepoSortOption = 'priority' | 'updated' | 'name' | 'stars';
export type RepoViewMode = 'primary' | 'all';

interface ProjectFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedFilter: string;
  onSelectFilter: (filter: string) => void;
  filterOptions: string[];
  sortBy: RepoSortOption;
  onSortChange: (sort: RepoSortOption) => void;
  viewMode: RepoViewMode;
  onViewModeChange: (mode: RepoViewMode) => void;
  totalMatching: number;
}

export const ProjectFilterBar: React.FC<ProjectFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedFilter,
  onSelectFilter,
  filterOptions,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  totalMatching
}) => {
  return (
    <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-secondary)]"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search repositories by title, stack (YOLO, PostgreSQL, React)..."
            aria-label="Search GitHub repositories"
            className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] py-2 pl-9 pr-9 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/70 focus:border-[var(--accent-gold)] focus:outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Clear search query"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div
            className="inline-flex rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-1"
            role="group"
            aria-label="Repository scope"
          >
            <button
              type="button"
              onClick={() => onViewModeChange('primary')}
              className={`rounded-md px-3 py-1.5 font-mono text-xs transition-colors ${
                viewMode === 'primary'
                  ? 'bg-[var(--accent-gold-soft)] font-semibold text-[var(--accent-gold)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Primary Systems
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange('all')}
              className={`rounded-md px-3 py-1.5 font-mono text-xs transition-colors ${
                viewMode === 'all'
                  ? 'bg-[var(--accent-gold-soft)] font-semibold text-[var(--accent-gold)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              All Public Repos
            </button>
          </div>

          <div className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3 py-1.5">
            <ArrowUpDown className="h-3.5 w-3.5 text-[var(--text-secondary)]" aria-hidden="true" />
            <label htmlFor="repo-sort" className="sr-only">
              Sort repositories
            </label>
            <select
              id="repo-sort"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as RepoSortOption)}
              className="bg-transparent font-mono text-xs text-[var(--text-primary)] focus:outline-none"
            >
              <option value="priority" className="bg-[var(--bg-surface)]">
                Sort: Curated Priority
              </option>
              <option value="updated" className="bg-[var(--bg-surface)]">
                Sort: Recently Updated
              </option>
              <option value="name" className="bg-[var(--bg-surface)]">
                Sort: Name (A–Z)
              </option>
              <option value="stars" className="bg-[var(--bg-surface)]">
                Sort: Stars &amp; Forks
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-3.5">
        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by technology or category">
          {filterOptions.map((option) => {
            const active = selectedFilter === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => onSelectFilter(option)}
                className={`rounded-md px-2.5 py-1 font-mono text-[11px] transition-colors ${
                  active
                    ? 'border border-[var(--accent-gold)]/50 bg-[var(--accent-gold-soft)] font-semibold text-[var(--accent-gold)]'
                    : 'border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        <span className="font-mono text-[11px] text-[var(--text-secondary)]">
          Showing {totalMatching} {totalMatching === 1 ? 'repository' : 'repositories'}
        </span>
      </div>
    </div>
  );
};
