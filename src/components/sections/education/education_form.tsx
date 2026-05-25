'use client';

import type { EducationFormValues } from '@/types/education';

import Degree from './degree';
import EndDate from './end_date';
import StartDate from './start_date';
import UniversityOrCollege from './university_college';

interface EducationFormProps {
  values: EducationFormValues;
  onChange: (field: keyof EducationFormValues, value: string) => void;
}

export default function EducationForm({ values, onChange }: EducationFormProps) {
  return (
    <form className="education-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-row">
        <UniversityOrCollege
          value={values.university}
          onChange={(value) => onChange('university', value)}
        />
        <Degree value={values.degree} onChange={(value) => onChange('degree', value)} />
      </div>

      <div className="form-row">
        <StartDate
          value={values.startDate}
          onChange={(value) => onChange('startDate', value)}
        />
        <EndDate value={values.endDate} onChange={(value) => onChange('endDate', value)} />
      </div>
    </form>
  );
}
