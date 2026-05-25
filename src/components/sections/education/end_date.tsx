'use client';

interface EndDateProps {
  value: string;
  onChange: (value: string) => void;
}

export default function EndDate({ value, onChange }: EndDateProps) {
  return (
    <div>
      <label htmlFor="end_date">End Date</label>
      <input
        id="end_date"
        type="text"
        name="end_date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="---"
        title="MM.YYYY"
      />
    </div>
  );
}
