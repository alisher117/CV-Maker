'use client';

import { motion } from 'framer-motion';

export interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
}

export default function ProgressBar({ value, max, label = 'Progress' }: ProgressBarProps) {
  const safeMax = max > 0 ? max : 1;
  const safeValue = Math.min(Math.max(value, 0), safeMax);
  const percent = Math.round((safeValue / safeMax) * 100);

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={safeValue}
      aria-valuetext={`${safeValue} of ${safeMax}`}
      className="h-2 w-full overflow-hidden rounded-full bg-gray-200"
    >
      <motion.div
        className="h-full origin-left rounded-full bg-red-700"
        initial={false}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
      />
    </div>
  );
}
