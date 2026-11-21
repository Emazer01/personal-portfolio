import React from 'react';
import { PencilLine } from 'lucide-react';

interface EditableBadgeProps {
  label?: string;
}

export const EditableBadge: React.FC<EditableBadgeProps> = ({
  label = 'Editable Profile Slot'
}) => {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/35 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[11px] text-amber-600 dark:text-amber-300">
      <PencilLine className="h-3 w-3" aria-hidden="true" />
      {label}
    </span>
  );
};
