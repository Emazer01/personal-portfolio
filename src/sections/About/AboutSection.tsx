import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Layers, Quote } from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { profileData } from '../../data/profile';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      tabIndex={-1}
      className="border-t border-[var(--border-subtle)] py-20 outline-none"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About"
          title="Leadership Discipline & Technical Engineering"
          description="An overview of my background as an Indonesian Air Force Officer and Computer Science graduate combining leadership with hands-on systems engineering."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Editorial Biography & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            className="space-y-5 lg:col-span-7"
          >
            <div className="space-y-4 text-base leading-relaxed text-[var(--text-secondary)]">
              {profileData.aboutSummary.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0 ? 'text-lg font-medium text-[var(--text-primary)]' : ''
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="rounded-xl border-l-2 border-[var(--accent-gold)] bg-[var(--bg-surface)] p-5">
              <div className="flex items-start gap-3">
                <Quote
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent-gold)]"
                  aria-hidden="true"
                />
                <p className="font-editorial text-sm font-medium italic leading-relaxed text-[var(--text-primary)] sm:text-base">
                  &ldquo;{profileData.philosophyQuote}&rdquo;
                </p>
              </div>
            </blockquote>

            <div>
              <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                <Compass className="h-3.5 w-3.5 text-[var(--accent-gold)]" aria-hidden="true" />
                Core Domains of Interest
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.focusAreas.map((area) => (
                  <Badge key={area} variant="outline">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Engineering Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="space-y-4 lg:col-span-5"
          >
            {profileData.corePillars.map((pillar) => (
              <Card key={pillar.id} className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-editorial text-base font-bold text-[var(--text-primary)]">
                    {pillar.title}
                  </h3>
                  <Layers
                    className="h-4 w-4 shrink-0 text-[var(--accent-gold)]"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-1 font-mono text-[11px] text-[var(--accent-blue)]">
                  {pillar.subtitle}
                </div>
                <p className="mt-2.5 text-xs leading-relaxed text-[var(--text-secondary)]">
                  {pillar.description}
                </p>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Working Principles */}
        <div className="mt-14">
          <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-secondary)]">
            Working Principles &amp; Professional Values
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {profileData.workingPrinciples.map((principle) => (
              <Card key={principle.number} className="p-4">
                <div className="font-mono text-xs font-semibold text-[var(--accent-gold)]">
                  {principle.number}
                </div>
                <h4 className="mt-2 font-editorial text-sm font-bold text-[var(--text-primary)]">
                  {principle.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
