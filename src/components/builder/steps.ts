import type { WizardStep } from './ProgressSidebar';

const BASE_STEPS: Omit<WizardStep, 'completed' | 'current'>[] = [
  { id: 'personal', label: 'Personal Info' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications', optional: true },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'review', label: 'Review & download' },
];

export type BuilderStepId = 'personal' | 'education' | 'certifications';

export const NAVIGABLE_STEPS: BuilderStepId[] = ['personal', 'education', 'certifications'];

export function getStepsForActiveStep(activeId: string): WizardStep[] {
  const activeIndex = BASE_STEPS.findIndex((s) => s.id === activeId);

  return BASE_STEPS.map((step, index) => ({
    ...step,
    completed: index < activeIndex,
    current: step.id === activeId,
  }));
}

export const PERSONAL_STEPS = getStepsForActiveStep('personal');
export const EDUCATION_STEPS = getStepsForActiveStep('education');
export const CERTIFICATIONS_STEPS = getStepsForActiveStep('certifications');
