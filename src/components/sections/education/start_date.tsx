'use client';

interface StartDateProps {
  value: string;
  onChange: (value: string) => void;
}

export default function StartDate({ value, onChange }: StartDateProps) {
  return (
    <div>
      <label htmlFor="start_date">Start Date</label>
      <input
        id="start_date"
        type="text"
        name="start_date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="---"
        title="MM.YYYY"
      />
    </div>
  );
}
