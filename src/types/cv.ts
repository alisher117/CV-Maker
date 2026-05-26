import type { EducationEntry } from '@/types/education';

export interface CVExperience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface CVData {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  summary?: string;
  education: EducationEntry[];
  experience: CVExperience[];
  skills: string[];
}
