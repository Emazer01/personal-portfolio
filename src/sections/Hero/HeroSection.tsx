import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  MapPin
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { siteConfig } from '../../config/site';
import { profileData } from '../../data/profile';
import { SystemsNetworkCanvas } from './SystemsNetworkCanvas';

interface HeroSectionProps {
  avatarUrl: string;
  repoCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  avatarUrl,
  repoCount
}) => {
  return (
    <section
      id="hero"
      tabIndex={-1}
      className="relative overflow-hidden py-16 outline-none sm:py-24 lg:py-28"
    >
      {/* Subtle top ambient radial highlight */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(214,181,109,0.22) 0%, rgba(56,189,248,0.12) 45%, transparent 72%)'
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Left Editorial Column */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-7"
        >
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-gold)]/35 bg-[var(--accent-gold-soft)] px-3 py-1 font-mono text-[11px] font-medium tracking-wider text-[var(--accent-gold)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-gold)]" aria-hidden="true" />
              SOFTWARE • INFRASTRUCTURE • NETWORKING • AI
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1 font-mono text-[11px] text-[var(--text-secondary)]">
              <MapPin className="h-3 w-3 text-[var(--accent-blue)]" aria-hidden="true" />
              {profileData.location}
            </span>
          </div>

          <p className="font-mono text-sm font-medium tracking-wide text-[var(--text-secondary)]">
            {profileData.name}
          </p>

          <h1 className="font-editorial mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            Building Ideas Into{' '}
            <span className="bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-blue)] bg-clip-text text-transparent">
              Digital Solutions.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            {profileData.supportingDescription}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--text-secondary)]">
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-[var(--accent-gold)]" aria-hidden="true" />
              <span>
                {profileData.degree} &mdash;{' '}
                <strong className="font-medium text-[var(--text-primary)]">
                  {profileData.almaMater}
                </strong>
              </span>
            </span>
          </div>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#projects" variant="primary" size="lg">
              View My Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>

            <Button
              href={profileData.cvPath}
              download={profileData.cvFileName}
              variant="secondary"
              size="lg"
            >
              <Download className="h-4 w-4 text-[var(--accent-gold)]" aria-hidden="true" />
              Download CV
            </Button>

            <div className="flex items-center gap-2 sm:ml-2">
              <a
                href={siteConfig.github.profileUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Gary Ferdinand Wahyudi on GitHub"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-gold)]/60"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <a
                href={siteConfig.linkedin.url}
                target="_blank"
                rel="noreferrer"
                aria-label="Gary Ferdinand Wahyudi on LinkedIn"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-blue)]/60"
              >
                <Linkedin className="h-4 w-4 text-[var(--accent-blue)]" aria-hidden="true" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Key Quantitative Snapshot */}
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-[var(--border-subtle)] pt-6">
            <div>
              <div className="font-editorial text-2xl font-bold text-[var(--text-primary)]">
                {repoCount}
              </div>
              <div className="mt-0.5 font-mono text-[11px] text-[var(--text-secondary)]">
                Public Repositories
              </div>
            </div>
            <div>
              <div className="font-editorial text-2xl font-bold text-[var(--text-primary)]">
                3+
              </div>
              <div className="mt-0.5 font-mono text-[11px] text-[var(--text-secondary)]">
                AI &amp; CV Systems
              </div>
            </div>
            <div>
              <div className="font-editorial text-2xl font-bold text-[var(--text-primary)]">
                Full-Stack
              </div>
              <div className="mt-0.5 font-mono text-[11px] text-[var(--text-secondary)]">
                Infra &amp; Network Ready
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Visual Systems Column */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5"
        >
          <SystemsNetworkCanvas avatarUrl={avatarUrl} />
        </motion.div>
      </div>
    </section>
  );
};
