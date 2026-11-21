import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  rightSlot?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  rightSlot
}) => {
  return (
    <div className="mb-10 flex flex-col justify-between gap-6 border-b border-[var(--border-subtle)] pb-6 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <div className="mb-3 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent-blue)]">
          <span className="inline-block h-0.5 w-6 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-gold)]" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="font-editorial text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            {description}
          </p>
        )}
      </div>
      {rightSlot && <div className="shrink-0">{rightSlot}</div>}
    </div>
  );
};
