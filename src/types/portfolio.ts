export type ThemePreference = 'dark' | 'light' | 'light dark';

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  platform: 'github' | 'linkedin' | 'email';
}

export interface CorePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface WorkingPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface ProfileData {
  name: string;
  shortName: string;
  monogram: string;
  roleTitle: string;
  headline: string;
  supportingDescription: string;
  location: string;
  almaMater: string;
  degree: string;
  avatarUrl: string;
  fallbackAvatarUrl: string;
  cvPath: string;
  cvFileName: string;
  aboutSummary: string[];
  philosophyQuote: string;
  focusAreas: string[];
  corePillars: CorePillar[];
  workingPrinciples: WorkingPrinciple[];
  socialLinks: SocialLink[];
}

export interface EducationItem {
  id: string;
  institution: string;
  shortInstitution?: string;
  degree: string;
  fieldOfStudy: string;
  location: string;
  period: string;
  isPlaceholderPeriod?: boolean;
  description: string;
  coursework: string[];
  achievements: string[];
  isEditableTemplate?: boolean;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  position: string;
  employmentType: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  isEditableTemplate?: boolean;
}

export interface SkillItem {
  name: string;
  context: string;
  tier?: 'Core Stack' | 'Applied' | 'Familiar';
}

export interface SkillCategory {
  id: string;
  title: string;
  code: string;
  summary: string;
  iconKey:
    | 'code'
    | 'layout'
    | 'server'
    | 'database'
    | 'cpu'
    | 'hard-drive'
    | 'network'
    | 'wrench';
  accent: 'gold' | 'blue';
  items: SkillItem[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category:
    | 'Certification'
    | 'Training Program'
    | 'Course'
    | 'Technical Achievement'
    | 'Academic Achievement';
  period: string;
  credentialId?: string;
  credentialUrl?: string;
  summary: string;
  highlights: string[];
  isEditablePlaceholder?: boolean;
}

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string;
  location: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubRepo {
  id?: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  created_at: string;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
  default_branch?: string;
}

export interface CompanionRepo {
  name: string;
  role: string;
  url: string;
  language: string;
}

export type ProjectCategory =
  | 'AI & Computer Vision'
  | 'Full-Stack Web'
  | 'Backend & Security'
  | 'Engineering Case Study';

export type ThumbnailVariant =
  | 'sitrak'
  | 'sikapta'
  | 'tanicek'
  | 'jaga'
  | 'tunkin'
  | 'default';

export interface ProjectOverride {
  repoName: string;
  title: string;
  tagline: string;
  description: string;
  architectureSummary?: string;
  category: ProjectCategory;
  techStack: string[];
  highlights: string[];
  featured?: boolean;
  priority?: number;
  thumbnailVariant?: ThumbnailVariant;
  customThumbnailUrl?: string;
  companionRepos?: CompanionRepo[];
  hideFromPrimaryFeed?: boolean;
  publicSafeNote?: string;
}

export interface EnrichedProject extends GitHubRepo {
  title: string;
  tagline: string;
  resolvedDescription: string;
  architectureSummary?: string;
  category: ProjectCategory;
  techStack: string[];
  highlights: string[];
  featured: boolean;
  priority: number;
  thumbnailVariant: ThumbnailVariant;
  customThumbnailUrl?: string;
  companionRepos: CompanionRepo[];
  hideFromPrimaryFeed: boolean;
  publicSafeNote?: string;
  hasCustomOverride: boolean;
}

export type GitHubDataSource = 'live' | 'cache' | 'fallback';

export interface LanguageStat {
  language: string;
  repoCount: number;
  percentage: number;
  color: string;
}

export interface GitHubPortfolioPayload {
  user: GitHubUser;
  repos: EnrichedProject[];
  languageStats: LanguageStat[];
  source: GitHubDataSource;
  fetchedAt: string;
  rateLimited: boolean;
  errorMessage?: string;
}
