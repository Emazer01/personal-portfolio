import React from 'react';
import { ScrollProgress } from '../common/ScrollProgress';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { ThemePreference } from '../../types/portfolio';

interface PageLayoutProps {
  activeSection: string;
  preference: ThemePreference;
  resolvedDark: boolean;
  onToggleTheme: () => void;
  onSelectPreference: (pref: ThemePreference) => void;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  activeSection,
  preference,
  resolvedDark,
  onToggleTheme,
  onSelectPreference,
  children
}) => {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-950"
      >
        Skip to main content
      </a>

      <ScrollProgress />

      <Navbar
        activeSection={activeSection}
        preference={preference}
        resolvedDark={resolvedDark}
        onToggleTheme={onToggleTheme}
        onSelectPreference={onSelectPreference}
      />

      <main id="main-content">{children}</main>

      <Footer />
    </div>
  );
};
