export interface ProgressBarProps {
    value: number;
  max: number;
  label?: string;
}

export default function ProgressBar({ value, max, label = 'Progress' }: ProgressBarProps) {
  const safeMax = max > 0 ? max : 1;
  const safeValue = Math.min(Math.max(value, 0), safeMax);
  const percent = Math.round((safeValue / safeMax) * 100);

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={safeValue}
      aria-valuetext={`${safeValue} of ${safeMax}`}
      className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200"
    >
      <div className="h-full rounded-full bg-red-700" style={{ width: `${percent}%` }} />
    </div>
  );
}
