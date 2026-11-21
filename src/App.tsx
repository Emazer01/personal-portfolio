import React from 'react';
import { MotionConfig } from 'framer-motion';
import { PageLayout } from './components/layout/PageLayout';
import { GitHubTelemetryPanel } from './components/projects/GitHubTelemetryPanel';
import { useGitHubData } from './hooks/useGitHubData';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useTheme } from './hooks/useTheme';
import { AboutSection } from './sections/About/AboutSection';
import { CertificationsSection } from './sections/Certifications/CertificationsSection';
import { ContactSection } from './sections/Contact/ContactSection';
import { EducationSection } from './sections/Education/EducationSection';
import { ExperienceSection } from './sections/Experience/ExperienceSection';
import { HeroSection } from './sections/Hero/HeroSection';
import { ProjectsSection } from './sections/Projects/ProjectsSection';
import { SkillsSection } from './sections/Skills/SkillsSection';
import { profileData } from './data/profile';

const SECTION_IDS = [
  'hero',
  'about',
  'education',
  'experience',
  'skills',
  'projects',
  'github',
  'certifications',
  'contact'
];

export const App: React.FC = () => {
  const { preference, resolvedDark, toggleTheme, setThemePreference } =
    useTheme();
  const github = useGitHubData();
  const activeSection = useScrollSpy(SECTION_IDS);

  const resolvedAvatar = github.user.avatar_url || profileData.avatarUrl;

  return (
    <MotionConfig reducedMotion="user">
      <PageLayout
        activeSection={activeSection}
        preference={preference}
        resolvedDark={resolvedDark}
        onToggleTheme={toggleTheme}
        onSelectPreference={setThemePreference}
      >
        <HeroSection
          avatarUrl={resolvedAvatar}
          repoCount={github.user.public_repos}
        />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection repos={github.repos} />
        <GitHubTelemetryPanel
          user={github.user}
          repos={github.repos}
          languageStats={github.languageStats}
          source={github.source}
          fetchedAt={github.fetchedAt}
          loading={github.loading}
          refreshing={github.refreshing}
          rateLimited={github.rateLimited}
          onRefresh={github.refresh}
        />
        <CertificationsSection />
        <ContactSection />
      </PageLayout>
    </MotionConfig>
  );
};

export default App;
