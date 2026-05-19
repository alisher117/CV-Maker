import ProgressBar from '@/components/ui/ProgressBar';

import StepIndicator from './StepIndicator';

export interface WizardStep {
  id: string;
  label: string;
  optional?: boolean;
  completed?: boolean;
  current?: boolean;
}

export const DEFAULT_WIZARD_STEPS: WizardStep[] = [
  { id: 'personal', label: 'Personal info', completed: true, current: true },
  { id: 'education', label: 'Education', completed: true },
  { id: 'certifications', label: 'Certifications', optional: true },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Work experience' },
  { id: 'review', label: 'Review & download' },
];

export interface ProgressSidebarProps {
  steps?: WizardStep[];
}

export default function ProgressSidebar({ steps = DEFAULT_WIZARD_STEPS }: ProgressSidebarProps) {
  const total = steps.length;
  const completedCount = steps.filter((s) => s.completed).length;
  const currentIndex = steps.findIndex((s) => s.current);
  const positionLabel = currentIndex >= 0 ? currentIndex + 1 : completedCount;

  return (
    <nav
      aria-label="Wizard progress"
      className="flex w-full max-w-[260px] flex-col gap-6 px-6 py-6"
    >
      <div className="flex flex-col gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
          Your progress <span aria-hidden="true">·</span>{' '}
          <span className="text-gray-900">
            {positionLabel}/{total}
          </span>
        </p>
        <ProgressBar
          value={positionLabel}
          max={total}
          label={`Step ${positionLabel} of ${total}`}
        />
      </div>

      <ol className="flex flex-col gap-4" role="list">
        {steps.map((step, i) => (
          <StepIndicator
            key={step.id}
            index={i + 1}
            label={step.label}
            completed={step.completed}
            current={step.current}
            optional={step.optional}
          />
        ))}
      </ol>
    </nav>
  );
}
