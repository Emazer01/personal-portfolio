import React, { useState } from 'react';
import {
  Code2,
  Cpu,
  Database,
  HardDrive,
  Layout,
  Network,
  Server,
  Wrench
} from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { skillCategories } from '../../data/skills';
import { SkillCategory } from '../../types/portfolio';

const ICON_MAP: Record<SkillCategory['iconKey'], React.ComponentType<{ className?: string }>> = {
  code: Code2,
  layout: Layout,
  server: Server,
  database: Database,
  cpu: Cpu,
  'hard-drive': HardDrive,
  network: Network,
  wrench: Wrench
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section
      id="skills"
      tabIndex={-1}
      className="border-t border-[var(--border-subtle)] py-20 outline-none"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technical Expertise"
          title="Engineering Stack & Infrastructure Matrix"
          description="Capabilities organized across eight core technical disciplines—grounded in implemented systems rather than arbitrary percentages."
        />

        {/* Category Filter Pills */}
        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter technical skill categories"
        >
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`rounded-lg px-3 py-1.5 font-mono text-xs transition-colors ${
              activeCategory === 'all'
                ? 'border border-[var(--accent-gold)]/50 bg-[var(--accent-gold-soft)] font-semibold text-[var(--accent-gold)]'
                : 'border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            All Disciplines (8)
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-lg px-3 py-1.5 font-mono text-xs transition-colors ${
                activeCategory === cat.id
                  ? 'border border-[var(--accent-gold)]/50 bg-[var(--accent-gold-soft)] font-semibold text-[var(--accent-gold)]'
                  : 'border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((category) => {
            const Icon = ICON_MAP[category.iconKey];
            const accentClass =
              category.accent === 'gold'
                ? 'text-[var(--accent-gold)]'
                : 'text-[var(--accent-blue)]';

            return (
              <Card key={category.id} className="flex flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[11px] tracking-wider text-[var(--text-secondary)]">
                      {category.code}
                    </div>
                    <h3 className="mt-1 font-editorial text-lg font-bold text-[var(--text-primary)]">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)]">
                    <Icon className={`h-5 w-5 ${accentClass}`} aria-hidden="true" />
                  </div>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                  {category.summary}
                </p>

                <div className="mt-5 space-y-2.5 border-t border-[var(--border-subtle)] pt-4">
                  {category.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col justify-between gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 sm:flex-row sm:items-center"
                    >
                      <div className="min-w-0">
                        <div className="font-editorial text-sm font-semibold text-[var(--text-primary)]">
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-[var(--text-secondary)]">
                          {skill.context}
                        </div>
                      </div>
                      {skill.tier && (
                        <Badge
                          variant={
                            skill.tier === 'Core Stack'
                              ? 'gold'
                              : skill.tier === 'Applied'
                                ? 'blue'
                                : 'outline'
                          }
                          className="w-fit shrink-0"
                        >
                          {skill.tier}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
