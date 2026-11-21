import React, { useState } from 'react';
import { BookOpen, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { EditableBadge } from '../../components/common/EditableBadge';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { educationData } from '../../data/education';

export const EducationSection: React.FC = () => {
  const [showTemplateItems, setShowTemplateItems] = useState(true);

  const visibleItems = showTemplateItems
    ? educationData
    : educationData.filter((item) => !item.isEditableTemplate);

  return (
    <section
      id="education"
      tabIndex={-1}
      className="border-t border-[var(--border-subtle)] py-20 outline-none"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="02 / EDUCATION"
          title="Academic Foundation"
          description="Formal computer science education and structured technical learning paths. Dates and honors are cleanly configurable."
          rightSlot={
            <button
              type="button"
              onClick={() => setShowTemplateItems((prev) => !prev)}
              className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1.5 font-mono text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {showTemplateItems ? 'Hide Editable Slot' : 'Show Editable Slot'}
            </button>
          }
        />

        <div className="relative space-y-6 before:absolute before:bottom-6 before:left-5 before:top-6 before:hidden before:w-px before:bg-[var(--border-strong)] md:before:block">
          {visibleItems.map((edu) => (
            <div key={edu.id} className="relative md:pl-14">
              {/* Timeline marker */}
              <div
                className="absolute left-2.5 top-6 hidden h-5 w-5 items-center justify-center rounded-full border border-[var(--accent-gold)] bg-[var(--bg-primary)] md:flex"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-[var(--accent-gold)]" />
              </div>

              <Card className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[var(--accent-gold)]">
                        <GraduationCap className="h-4 w-4" aria-hidden="true" />
                        {edu.degree}
                      </span>
                      {edu.isEditableTemplate && (
                        <EditableBadge label="Editable Training Slot" />
                      )}
                    </div>
                    <h3 className="mt-1.5 font-editorial text-xl font-bold text-[var(--text-primary)]">
                      {edu.institution}
                    </h3>
                    <p className="mt-0.5 text-sm text-[var(--text-secondary)]">
                      {edu.fieldOfStudy}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-1.5 text-xs text-[var(--text-secondary)] sm:items-end">
                    <span className="inline-flex items-center gap-1.5 font-mono">
                      <Calendar className="h-3.5 w-3.5 text-[var(--accent-gold)]" aria-hidden="true" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono">
                      <MapPin className="h-3.5 w-3.5 text-[var(--accent-blue)]" aria-hidden="true" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {edu.description}
                </p>

                <div className="mt-5 grid gap-5 border-t border-[var(--border-subtle)] pt-5 md:grid-cols-2">
                  <div>
                    <div className="mb-2.5 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--text-primary)]">
                      <BookOpen className="h-3.5 w-3.5 text-[var(--accent-blue)]" aria-hidden="true" />
                      Relevant Coursework &amp; Focus
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <Badge key={course} variant="default">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-2.5 font-mono text-[11px] uppercase tracking-wider text-[var(--text-primary)]">
                      Key Outcomes &amp; Notes
                    </div>
                    <ul className="space-y-1.5">
                      {edu.achievements.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs leading-relaxed text-[var(--text-secondary)]"
                        >
                          <span
                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-gold)]"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
