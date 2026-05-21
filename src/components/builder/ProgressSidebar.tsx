'use client';

import { motion } from 'framer-motion';

import ProgressBar from '@/components/ui/ProgressBar';

import StepIndicator from './StepIndicator';
import { WIZARD_STEPS } from './steps';

export interface WizardStep {
  id: string;
  label: string;
  optional?: boolean;
  completed?: boolean;
  current?: boolean;
}

export const DEFAULT_WIZARD_STEPS = WIZARD_STEPS;

export interface ProgressSidebarProps {
  steps?: WizardStep[];
}

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function ProgressSidebar({ steps = WIZARD_STEPS }: ProgressSidebarProps) {
  const total = steps.length;
  const completedCount = steps.filter((s) => s.completed).length;
  const currentIndex = steps.findIndex((s) => s.current);
  const positionLabel = currentIndex >= 0 ? currentIndex + 1 : completedCount;

  return (
    <nav
      aria-label="Wizard progress"
      className="flex w-[300px] min-w-[300px] flex-col gap-6 px-7 py-6"
    >
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Your progress <span aria-hidden="true">·</span>{' '}
          <motion.span
            key={positionLabel}
            className="inline-block text-gray-900"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {positionLabel}/{total}
          </motion.span>
        </p>
        <ProgressBar
          value={positionLabel}
          max={total}
          label={`Step ${positionLabel} of ${total}`}
        />
      </div>

      <motion.ol
        className="flex flex-col gap-4"
        role="list"
        aria-label="Wizard steps"
        variants={listVariants}
        initial="hidden"
        animate="show"
      >
        {steps.map((step, i) => (
          <StepIndicator
            key={step.id}
            variants={itemVariants}
            index={i + 1}
            label={step.label}
            completed={step.completed}
            current={step.current}
            optional={step.optional}
          />
        ))}
      </motion.ol>
    </nav>
  );
}
