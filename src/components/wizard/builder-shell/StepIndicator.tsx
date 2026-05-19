import CheckIcon from '@/components/ui/CheckIcon';

export interface StepIndicatorProps {
  index: number;
  label: string;
  completed?: boolean;
  current?: boolean;
  optional?: boolean;
}

export default function StepIndicator({
  index,
  label,
  completed = false,
  current = false,
  optional = false,
}: StepIndicatorProps) {
  const badgeClasses = current
    ? 'bg-red-700 text-white border-red-700'
    : completed
      ? 'bg-white text-red-700 border-red-300'
      : 'bg-white text-gray-400 border-gray-300';

  const labelClasses = current
    ? 'text-red-700 font-semibold'
    : completed
      ? 'text-rose-400 font-medium'
      : 'text-gray-500';

  return (
    <li aria-current={current ? 'step' : undefined} className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${badgeClasses}`}
      >
        {completed ? <CheckIcon className="h-3.5 w-3.5" /> : index}
      </span>

      <span className="flex flex-col leading-tight">
        <span className={`text-sm ${labelClasses}`}>{label}</span>
        {optional ? <span className="text-[11px] text-gray-400">Optional</span> : null}
      </span>
    </li>
  );
}
