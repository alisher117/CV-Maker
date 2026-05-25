'use client';

import type { EducationEntry } from '@/types/education';
import { formatEducationPeriod } from '@/types/education';

interface EducationCardProps {
  entry: EducationEntry;
  isEditing: boolean;
  onEdit: () => void;
  onRemove: () => void;
}

export default function EducationCard({
  entry,
  isEditing,
  onEdit,
  onRemove,
}: EducationCardProps) {
  return (
    <section
      className={`education-card ${isEditing ? 'border-[var(--brand)] ring-1 ring-[var(--brand)]/20' : ''}`}
    >
      <div className="min-w-0 flex-1">
        <p className="font-bold">{entry.degree}</p>
        <p className="text-sm">{entry.university}</p>
        <div className="flex gap-2 text-xs text-gray-600">
          {entry.location ? <p>{entry.location}</p> : null}
          {entry.location ? <p> • </p> : null}
          <p>{formatEducationPeriod(entry.startDate, entry.endDate)}</p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <button type="button" className="edit_btn" onClick={onEdit} aria-pressed={isEditing}>
          {isEditing ? 'Editing' : 'Edit'}
        </button>
        <button
          type="button"
          className="cancel-btn !w-auto px-4 text-sm"
          onClick={onRemove}
          aria-label={`Remove ${entry.degree}`}
        >
          Remove
        </button>
      </div>
    </section>
  );
}
