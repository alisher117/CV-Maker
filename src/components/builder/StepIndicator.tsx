'use client';

import { AnimatePresence, motion, type Variants } from 'framer-motion';

import CheckIcon from '@/components/ui/CheckIcon';
import { NAVIGABLE_STEPS } from './steps';

export interface StepIndicatorProps {
  index: number;
  stepId: string;
  label: string;
  completed?: boolean;
  current?: boolean;
  optional?: boolean;
  variants?: Variants;
  onSelect?: (stepId: string) => void;
}

const badgeTransition = { duration: 0.35, ease: [0.4, 0, 0.2, 1] as const };
const labelTransition = { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const };

export default function StepIndicator({
  index,
  stepId,
  label,
  completed = false,
  current = false,
  optional = false,
  variants,
  onSelect,
}: StepIndicatorProps) {
  const isActive = current;
  const isDone = completed && !current;
  const isNavigable = NAVIGABLE_STEPS.includes(stepId as (typeof NAVIGABLE_STEPS)[number]);

  const content = (
    <>
      <motion.span
        layout
        aria-hidden="true"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold"
        initial={false}
        animate={{
          backgroundColor: isActive ? '#A6192E' : isDone ? '#ffffff' : '#ffffff',
          borderColor: isActive ? '#A6192E' : isDone ? '#FECACA' : '#D1D5DB',
          color: isActive ? '#ffffff' : isDone ? '#A6192E' : '#9CA3AF',
          scale: isActive ? 1.05 : 1,
        }}
        transition={badgeTransition}
      >
        <AnimatePresence mode="wait" initial={false}>
          {completed ? (
            <motion.span
              key="check"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center justify-center"
            >
              <CheckIcon className="h-3.5 w-3.5" />
            </motion.span>
          ) : (
            <motion.span
              key="index"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              {index}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5">
        <motion.span
          className="truncate text-[15px] leading-snug"
          initial={false}
          animate={{
            color: isActive ? '#A6192E' : isDone ? '#FB7185' : '#6B7280',
            fontWeight: isActive ? 600 : isDone ? 500 : 400,
          }}
          transition={labelTransition}
        >
          {label}
        </motion.span>
        <AnimatePresence initial={false}>
          {optional ? (
            <motion.span
              key="optional"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[11px] leading-none text-gray-400"
            >
              Optional
            </motion.span>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );

  if (onSelect && isNavigable) {
    return (
      <motion.li
        layout
        variants={variants}
        aria-current={current ? 'step' : undefined}
        initial={variants ? 'hidden' : false}
        animate={variants ? 'show' : { opacity: 1 }}
        transition={{ layout: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } }}
      >
        <button
          type="button"
          onClick={() => onSelect(stepId)}
          className="flex min-h-10 w-full cursor-pointer items-center gap-3.5 rounded-md text-left hover:bg-gray-50"
        >
          {content}
        </button>
      </motion.li>
    );
  }

  return (
    <motion.li
      layout
      variants={variants}
      aria-current={current ? 'step' : undefined}
      className="flex min-h-10 items-center gap-3.5"
      initial={variants ? 'hidden' : false}
      animate={variants ? 'show' : { opacity: 1 }}
      transition={{ layout: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } }}
    >
      {content}
    </motion.li>
  );
}
