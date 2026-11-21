import { useCallback, useEffect, useState } from 'react';
import { ThemePreference } from '../types/portfolio';

const STORAGE_KEY = 'color-scheme';

function getSystemDark(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return true;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function getStoredPreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'light dark') {
      return stored;
    }
  } catch {
    // Ignore storage restriction
  }
  // Dark Mode is the site default when no user preference has been stored
  return 'dark';
}

function applyScheme(preference: ThemePreference): boolean {
  const isDark =
    preference === 'dark' || (preference === 'light dark' && getSystemDark());

  if (typeof document !== 'undefined') {
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.setAttribute('content', preference);
    }
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('light', !isDark);
  }

  return isDark;
}

export function useTheme() {
  const [preference, setPreference] = useState<ThemePreference>(() =>
    getStoredPreference()
  );
  const [resolvedDark, setResolvedDark] = useState<boolean>(() =>
    applyScheme(getStoredPreference())
  );

  const updatePreference = useCallback((next: ThemePreference) => {
    setPreference(next);
    setResolvedDark(applyScheme(next));
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage restriction
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const next: ThemePreference = resolvedDark ? 'light' : 'dark';
    updatePreference(next);
  }, [resolvedDark, updatePreference]);

  useEffect(() => {
    setResolvedDark(applyScheme(preference));
  }, [preference]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaChange = () => {
      if (preference === 'light dark') {
        setResolvedDark(applyScheme('light dark'));
      }
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        const next = getStoredPreference();
        setPreference(next);
        setResolvedDark(applyScheme(next));
      }
    };

    media.addEventListener('change', handleMediaChange);
    window.addEventListener('storage', handleStorage);
    return () => {
      media.removeEventListener('change', handleMediaChange);
      window.removeEventListener('storage', handleStorage);
    };
  }, [preference]);

  return {
    preference,
    resolvedDark,
    toggleTheme,
    setThemePreference: updatePreference
  };
}
