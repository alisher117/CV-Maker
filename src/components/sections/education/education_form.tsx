"use client"

import Degree from "./degree"
import EndDate from "./end_date"
import StartDate from "./start_date"
import UniversityOrCollege from "./university_college"

export default function EducationForm() {
  return (
    <form className="education-form">
      <div className="form-row">
        <UniversityOrCollege />
        <Degree />
      </div>

      <div className="form-row">
        <StartDate />
        <EndDate />
      </div>
    </form>
  );
}