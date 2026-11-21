import React from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { ThemePreference } from '../../types/portfolio';

interface ThemeToggleProps {
  preference: ThemePreference;
  resolvedDark: boolean;
  onToggle: () => void;
  onSelectPreference?: (pref: ThemePreference) => void;
  showSystemReset?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  preference,
  resolvedDark,
  onToggle,
  onSelectPreference,
  showSystemReset = false
}) => {
  return (
    <div className="inline-flex items-center gap-1">
      <button
        type="button"
        onClick={onToggle}
        aria-label={
          resolvedDark ? 'Switch to light theme' : 'Switch to dark theme'
        }
        title={resolvedDark ? 'Switch to light theme' : 'Switch to dark theme'}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-gold)]/60 hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)]"
      >
        {resolvedDark ? (
          <Sun className="h-4 w-4 text-gold" aria-hidden="true" />
        ) : (
          <Moon className="h-4 w-4 text-navy-900" aria-hidden="true" />
        )}
        <span className="sr-only">
          {resolvedDark ? 'Switch to light theme' : 'Switch to dark theme'}
        </span>
      </button>
      {showSystemReset && onSelectPreference && preference !== 'light dark' && (
        <button
          type="button"
          onClick={() => onSelectPreference('light dark')}
          title="Follow OS system theme"
          aria-label="Follow OS system theme"
          className="inline-flex h-9 items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2 font-mono text-[11px] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        >
          <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="hidden sm:inline">Auto</span>
        </button>
      )}
    </div>
  );
};
