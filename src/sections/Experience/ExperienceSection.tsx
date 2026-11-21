import React from 'react';
import { Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { experienceData } from '../../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      tabIndex={-1}
      className="border-t border-[var(--border-subtle)] py-20 outline-none"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Professional Background"
          title="Service & Engineering Experience"
          description="Military officer service combined with practical full-stack software development, network infrastructure, and applied AI engineering."
        />

        <div className="space-y-6">
          {experienceData.map((item) => (
            <Card key={item.id} className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[var(--accent-gold)]">
                    <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.employmentType}
                  </span>
                  <h3 className="mt-1.5 font-editorial text-xl font-bold text-[var(--text-primary)]">
                    {item.position}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-[var(--accent-blue)]">
                    {item.organization}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-1.5 text-xs text-[var(--text-secondary)] sm:items-end">
                  <span className="inline-flex items-center gap-1.5 font-mono">
                    <Calendar className="h-3.5 w-3.5 text-[var(--accent-gold)]" aria-hidden="true" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono">
                    <MapPin className="h-3.5 w-3.5 text-[var(--accent-blue)]" aria-hidden="true" />
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                {item.description}
              </p>

              <div className="mt-5 grid gap-6 border-t border-[var(--border-subtle)] pt-5 lg:grid-cols-2">
                <div>
                  <h4 className="mb-2.5 font-mono text-[11px] uppercase tracking-wider text-[var(--text-primary)]">
                    Key Duties &amp; Focus
                  </h4>
                  <ul className="space-y-2">
                    {item.responsibilities.map((resp) => (
                      <li
                        key={resp}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[var(--text-secondary)]"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-blue)]"
                          aria-hidden="true"
                        />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2.5 font-mono text-[11px] uppercase tracking-wider text-[var(--text-primary)]">
                    Outcomes &amp; Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {item.achievements.map((ach) => (
                      <li
                        key={ach}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[var(--text-secondary)]"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-gold)]"
                          aria-hidden="true"
                        />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[var(--border-subtle)] pt-4">
                {item.technologies.map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
