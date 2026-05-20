import type { WizardStep } from './ProgressSidebar';

export const WIZARD_STEPS: WizardStep[] = [
  { id: 'personal', label: 'Personal Info', completed: true, current: true },
  { id: 'education', label: 'Education', completed: true },
  { id: 'certifications', label: 'Certifications', optional: true },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'review', label: 'Review & download' },
];
