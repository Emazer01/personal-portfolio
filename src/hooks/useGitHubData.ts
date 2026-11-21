import { useCallback, useEffect, useState } from 'react';
import {
  FALLBACK_GITHUB_REPOS,
  FALLBACK_GITHUB_USER
} from '../data/projects';
import {
  computeLanguageStats,
  enrichRepositories,
  fetchGitHubPortfolio
} from '../services/githubService';
import { GitHubPortfolioPayload } from '../types/portfolio';

const INITIAL_PAYLOAD: GitHubPortfolioPayload = {
  user: FALLBACK_GITHUB_USER,
  repos: enrichRepositories(FALLBACK_GITHUB_REPOS),
  languageStats: computeLanguageStats(FALLBACK_GITHUB_REPOS),
  source: 'fallback',
  fetchedAt: FALLBACK_GITHUB_USER.updated_at,
  rateLimited: false
};

export function useGitHubData() {
  const [data, setData] = useState<GitHubPortfolioPayload>(INITIAL_PAYLOAD);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const load = useCallback(async (force = false) => {
    if (force) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    const payload = await fetchGitHubPortfolio(force);
    setData(payload);
    setLoading(false);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    void load(false);
  }, [load]);

  const refresh = useCallback(() => {
    void load(true);
  }, [load]);

  return {
    ...data,
    loading,
    refreshing,
    refresh
  };
}
