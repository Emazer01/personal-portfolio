import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]/50 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold tracking-wider text-[var(--accent-gold)]">
              {profileData.monogram}
            </span>
            <span className="text-sm font-semibold text-[var(--text-primary)]">
              {profileData.name}
            </span>
          </div>
          <p className="mt-1.5 text-xs text-[var(--text-secondary)]">
            {profileData.degree} &bull; {profileData.almaMater} &bull;{' '}
            {profileData.location}
          </p>
          <p className="mt-1 font-mono text-[11px] text-[var(--text-secondary)]/80">
            &copy; {year} {profileData.name}. Built with React, TypeScript &amp; Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.github.profileUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-gold)]/60 hover:text-[var(--text-primary)]"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={siteConfig.linkedin.url}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-gold)]/60 hover:text-[var(--text-primary)]"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#hero"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 font-mono text-xs text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-gold)]/60 hover:text-[var(--text-primary)]"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            Top
          </a>
        </div>
      </div>
    </footer>
  );
};
