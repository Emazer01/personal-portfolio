import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  MapPin,
  Plane
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
      className="relative overflow-hidden py-16 outline-none sm:py-24"
    >
      {/* Air Force horizon radar glow */}
      <div
        className="pointer-events-none absolute -top-28 left-1/2 h-[440px] w-[860px] -translate-x-1/2 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(56,189,248,0.24) 0%, rgba(214,181,109,0.14) 48%, transparent 74%)'
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Left Formal Officer Column */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7"
        >
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-md border border-[var(--accent-blue)]/40 bg-[var(--accent-blue-soft)] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--accent-blue)]">
              <Plane className="h-3.5 w-3.5 text-[var(--accent-gold)]" aria-hidden="true" />
              Indonesian Air Force Officer &bull; TNI AU
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1 font-mono text-[11px] text-[var(--text-secondary)]">
              <MapPin className="h-3 w-3 text-[var(--accent-gold)]" aria-hidden="true" />
              {profileData.location}
            </span>
          </div>

          <p className="font-mono text-sm font-medium tracking-wide text-[var(--accent-gold)]">
            {profileData.name}, S.Kom.
          </p>

          <h1 className="font-editorial mt-3 text-4xl font-bold leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.25rem]">
            Building Ideas Into{' '}
            <span className="bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)] bg-clip-text text-transparent">
              Digital Solutions.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            {profileData.supportingDescription}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--text-secondary)]">
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
              View Engineering Projects
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
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-blue)]/60"
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

          {/* Air Force & Technical Readiness Summary */}
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-[var(--border-subtle)] pt-6">
            <div>
              <div className="font-editorial text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                TNI AU
              </div>
              <div className="mt-0.5 font-mono text-[11px] text-[var(--text-secondary)]">
                Commissioned Officer
              </div>
            </div>
            <div>
              <div className="font-editorial text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                Unhan RI
              </div>
              <div className="mt-0.5 font-mono text-[11px] text-[var(--text-secondary)]">
                Informatics (S.Kom.)
              </div>
            </div>
            <div>
              <div className="font-editorial text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                {repoCount} Repos
              </div>
              <div className="mt-0.5 font-mono text-[11px] text-[var(--text-secondary)]">
                Systems &amp; AI Projects
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Air Force Avionics & Radar HUD Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="lg:col-span-5"
        >
          <SystemsNetworkCanvas avatarUrl={avatarUrl} />
        </motion.div>
      </div>
    </section>
  );
};
