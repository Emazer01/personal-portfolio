import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { certificationsData } from '../../data/certifications';

const CATEGORY_TABS = [
  'All',
  'Academic Achievement',
  'Training Program',
  'Certification',
  'Technical Achievement'
] as const;

export const CertificationsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'cert-unhan-commissioning': true
  });

  const filtered =
    selectedCategory === 'All'
      ? certificationsData
      : certificationsData.filter((item) => item.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="certifications"
      tabIndex={-1}
      className="border-t border-[var(--border-subtle)] py-20 outline-none"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Qualifications & Training"
          title="Academic Milestones, Training & Credentials"
          description="Formal defense university formation, networking and infrastructure training, full-stack security coursework, and applied AI engineering achievements."
        />

        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter qualifications and training"
        >
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setSelectedCategory(tab)}
              className={`rounded-lg px-3 py-1.5 font-mono text-xs transition-colors ${
                selectedCategory === tab
                  ? 'border border-[var(--accent-gold)]/50 bg-[var(--accent-gold-soft)] font-semibold text-[var(--accent-gold)]'
                  : 'border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((item) => {
            const isOpen = Boolean(expandedIds[item.id]);

            return (
              <Card key={item.id} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleExpand(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left transition-colors hover:bg-[var(--bg-elevated)]/40 sm:p-6"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="blue">{item.category}</Badge>
                      <span className="font-mono text-[11px] text-[var(--text-secondary)]">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="mt-2.5 flex items-center gap-2 font-editorial text-lg font-bold text-[var(--text-primary)]">
                      <Award
                        className="h-4 w-4 shrink-0 text-[var(--accent-gold)]"
                        aria-hidden="true"
                      />
                      <span>{item.title}</span>
                    </h3>
                    <p className="mt-1 text-xs text-[var(--text-secondary)]">
                      {item.issuer}
                    </p>
                  </div>

                  <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-secondary)]">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]/50 px-5 py-4 sm:px-6">
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      {item.summary}
                    </p>
                    {item.highlights.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {item.highlights.map((hl) => (
                          <li
                            key={hl}
                            className="flex items-start gap-2 text-xs text-[var(--text-secondary)]"
                          >
                            <span
                              className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-gold)]"
                              aria-hidden="true"
                            />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.credentialUrl && (
                      <a
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-[var(--accent-blue)] hover:underline"
                      >
                        Verify Credential
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
