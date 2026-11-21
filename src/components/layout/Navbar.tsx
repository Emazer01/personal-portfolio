import React, { useState } from 'react';
import { Download, Menu } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { profileData } from '../../data/profile';
import { ThemePreference } from '../../types/portfolio';
import { ThemeToggle } from '../common/ThemeToggle';
import { MobileMenu } from '../navigation/MobileMenu';

interface NavbarProps {
  activeSection: string;
  preference: ThemePreference;
  resolvedDark: boolean;
  onToggleTheme: () => void;
  onSelectPreference: (pref: ThemePreference) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  preference,
  resolvedDark,
  onToggleTheme,
  onSelectPreference
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#hero"
            className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] rounded-lg"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--accent-blue)]/40 bg-[var(--bg-surface)] transition-colors group-hover:border-[var(--accent-gold)]">
              <svg
                viewBox="0 0 36 36"
                className="h-6 w-6"
                fill="none"
                aria-hidden="true"
              >
                <path d="M3 15L14 18.5L12 20.8L5 19L3 15Z" fill="var(--accent-gold)" />
                <path d="M33 15L22 18.5L24 20.8L31 19L33 15Z" fill="var(--accent-gold)" />
                <path
                  d="M18 7L23 11V20.5C23 24.8 18 29 18 29C18 29 13 24.8 13 20.5V11L18 7Z"
                  fill="var(--bg-elevated)"
                  stroke="var(--accent-gold)"
                  strokeWidth="1.4"
                />
                <polygon
                  points="18,12 19.3,15.6 23,15.8 20.1,18 21.1,21.6 18,19.5 14.9,21.6 15.9,18 13,15.8 16.7,15.6"
                  fill="var(--accent-blue)"
                />
              </svg>
            </span>
            <div className="hidden sm:block">
              <div className="font-editorial text-sm font-semibold leading-none text-[var(--text-primary)]">
                {profileData.name}
              </div>
              <div className="mt-1 font-mono text-[10px] tracking-wide text-[var(--accent-blue)]">
                TNI ANGKATAN UDARA &bull; S.Kom.
              </div>
            </div>
          </a>

          <nav
            className="primary-nav hidden items-center gap-1 lg:flex"
            aria-label="Primary Navigation"
          >
            {siteConfig.navigation.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'true' : 'false'}
                  className={`border-b-2 border-transparent px-3 py-2 text-xs font-medium transition-colors hover:text-[var(--text-primary)] ${
                    isActive
                      ? 'target-current text-[var(--accent-gold)]'
                      : 'text-[var(--text-secondary)]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profileData.cvPath}
              download={profileData.cvFileName}
              className="hidden items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-gold)]/60 sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5 text-[var(--accent-gold)]" aria-hidden="true" />
              CV
            </a>

            <ThemeToggle
              preference={preference}
              resolvedDark={resolvedDark}
              onToggle={onToggleTheme}
              onSelectPreference={onSelectPreference}
              showSystemReset
            />

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-label="Open navigation menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] lg:hidden"
            >
              <Menu className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        activeSection={activeSection}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
};
