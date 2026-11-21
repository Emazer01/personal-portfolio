import React, { useEffect } from 'react';
import { Download, ExternalLink, X } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { profileData } from '../../data/profile';

interface MobileMenuProps {
  open: boolean;
  activeSection: string;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  open,
  activeSection,
  onClose
}) => {
  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="fixed inset-y-0 right-0 flex w-full max-w-xs flex-col border-l border-[var(--border-subtle)] bg-[var(--bg-primary)] p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--accent-gold)]/40 bg-[var(--bg-surface)] font-mono text-xs font-semibold text-[var(--accent-gold)]">
              {profileData.monogram}
            </span>
            <span className="font-editorial text-sm font-semibold text-[var(--text-primary)]">
              Navigation
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <nav className="mt-6 flex flex-1 flex-col gap-1.5" aria-label="Mobile sections">
          {siteConfig.navigation.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                aria-current={isActive ? 'true' : 'false'}
                className={`flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[var(--accent-gold-soft)] text-[var(--accent-gold)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]'
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-[11px] opacity-60">
                  {item.href}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="mt-6 flex flex-col gap-2.5 border-t border-[var(--border-subtle)] pt-5">
          <a
            href={profileData.cvPath}
            download={profileData.cvFileName}
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-light"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
          </a>
          <div className="grid grid-cols-2 gap-2">
            <a
              href={siteConfig.github.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2 text-xs font-medium text-[var(--text-primary)]"
            >
              GitHub
              <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2 text-xs font-medium text-[var(--text-primary)]"
            >
              LinkedIn
              <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
