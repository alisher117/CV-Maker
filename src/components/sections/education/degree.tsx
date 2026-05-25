'use client';

interface DegreeProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Degree({ value, onChange }: DegreeProps) {
  return (
    <div>
      <label htmlFor="degree">Degree</label>
      <input
        id="degree"
        type="text"
        name="degree"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        placeholder="---"
        title="E.g BSC Computer Science"
      />
      <p className="mt-2 text-xs text-gray-600">E.g BSC Computer Science</p>
    </div>
  );
}
