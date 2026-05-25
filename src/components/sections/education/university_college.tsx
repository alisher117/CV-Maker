'use client';

interface UniversityOrCollegeProps {
  value: string;
  onChange: (value: string) => void;
}

export default function UniversityOrCollege({ value, onChange }: UniversityOrCollegeProps) {
  return (
    <div>
      <label htmlFor="university_or_college">University or College</label>
      <input
        id="university_or_college"
        type="text"
        name="university_or_college"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        placeholder="---"
        title="Start typing we'll suggest matches."
      />
      <p className="mt-2 text-xs text-gray-600">Start typing we&apos;ll suggest matches.</p>
    </div>
  );
}
