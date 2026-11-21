import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'gold' | 'blue' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = ''
}) => {
  const variants: Record<NonNullable<BadgeProps['variant']>, string> = {
    default:
      'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]',
    gold: 'bg-[var(--accent-gold-soft)] text-[var(--accent-gold)] border border-[var(--accent-gold)]/30',
    blue: 'bg-sky-500/10 text-sky-600 dark:text-sky-300 border border-sky-500/25',
    outline:
      'bg-transparent text-[var(--text-secondary)] border border-[var(--border-strong)]'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[11px] font-medium tracking-tight ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
