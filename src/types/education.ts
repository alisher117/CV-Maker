export interface EducationEntry {
  id: string;
  degree: string;
  university: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface EducationFormValues {
  university: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export const EMPTY_EDUCATION_FORM: EducationFormValues = {
  university: '',
  degree: '',
  startDate: '',
  endDate: '',
};

export function entryToFormValues(entry: EducationEntry): EducationFormValues {
  return {
    university: entry.university,
    degree: entry.degree,
    startDate: entry.startDate,
    endDate: entry.endDate,
  };
}

export function formatEducationPeriod(startDate: string, endDate: string): string {
  return `${startDate} - ${endDate}`;
}
