export function formatShortDate(dateString: string): string {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric'
  }).format(date);
}

export function formatFullDate(dateString: string): string {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

export function formatRepoDisplayName(name: string): string {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#38BDF8',
  JavaScript: '#D6B56D',
  Python: '#34D399',
  HTML: '#FB923C',
  CSS: '#818CF8',
  Dockerfile: '#60A5FA',
  Shell: '#94A3B8',
  Other: '#9AA9BC'
};

export function getLanguageColor(language: string | null): string {
  if (!language) return LANGUAGE_COLORS.Other;
  return LANGUAGE_COLORS[language] ?? LANGUAGE_COLORS.Other;
}
