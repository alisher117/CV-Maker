'use client';

/**
 * Certifications step — UI и логика в одном файле (макет Figma).
 * Список карточек сверху → форма «ADD A NEW CERTIFICATION» → Cancel / Save Entry.
 * Типы: @/types/certification | Стили: globals.css (.certifi-*)
 */

import { useCallback, useState } from 'react';

import CancelBtn from '@/components/sections/education/cancel';
import SaveEntryBtn from '@/components/sections/education/save_entry_btn';
import type { CertificationEntry, CertificationFormValues } from '@/types/certification';
import {
  EMPTY_CERTIFICATION_FORM,
  entryToFormValues,
  formatCertificationDetails,
} from '@/types/certification';

// --- Helpers ---

function createEntryId(): string {
  return `cert-${crypto.randomUUID()}`;
}

function isFormValid(values: CertificationFormValues): boolean {
  return Boolean(
    values.name.trim() && values.issuingOrganization.trim() && values.issueDate.trim(),
  );
}

// --- Subcomponents ---

interface CertifiFieldProps {
  id: string;
  label: string;
  value: string;
  hint?: string;
  dateFormat?: string;
  onChange: (value: string) => void;
}

function CertifiField({ id, label, value, hint, dateFormat, onChange }: CertifiFieldProps) {
  return (
    <div className="certifi-field">
      <label htmlFor={id}>{label}</label>
      <div className={`certifi-input-wrap ${dateFormat ? 'certifi-input-wrap--date' : ''}`}>
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="---"
        />
        {dateFormat ? <span className="certifi-date-format">{dateFormat}</span> : null}
      </div>
      {hint ? <p className="certifi-field-hint">{hint}</p> : null}
    </div>
  );
}

interface CertificationCardProps {
  entry: CertificationEntry;
  isEditing: boolean;
  onEdit: () => void;
}

function CertificationCard({ entry, isEditing, onEdit }: CertificationCardProps) {
  return (
    <section
      className={`certifi-cards ${isEditing ? 'border-[var(--brand)] ring-1 ring-[var(--brand)]/20' : ''}`}
    >
      <div>
        <p className="certifi-star">★</p>
      </div>
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-base font-bold">{entry.name}</p>
        {entry.verified ? (
          <p className="certifi-verified mb-1">✓ VERIFIED</p>
        ) : null}
        <p className="mb-1 text-sm">{entry.issuingOrganization}</p>
        <p className="text-sm text-gray-700">{formatCertificationDetails(entry)}</p>
      </div>
      <div className="m-auto shrink-0">
        <button type="button" className="edit_btn" onClick={onEdit} aria-pressed={isEditing}>
          {isEditing ? 'Editing' : 'Edit'}
        </button>
      </div>
    </section>
  );
}

// --- Main ---

export default function Certification() {
  const [entries, setEntries] = useState<CertificationEntry[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<CertificationFormValues>(EMPTY_CERTIFICATION_FORM);

  const handleFormChange = useCallback((field: keyof CertificationFormValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setEditingId(null);
    setFormValues(EMPTY_CERTIFICATION_FORM);
  }, []);

  const handleEdit = useCallback((entry: CertificationEntry) => {
    setEditingId(entry.id);
    setFormValues(entryToFormValues(entry));
  }, []);

  const handleSave = useCallback(() => {
    if (!isFormValid(formValues)) return;

    const payload = {
      name: formValues.name.trim(),
      issuingOrganization: formValues.issuingOrganization.trim(),
      issueDate: formValues.issueDate.trim(),
      expiryDate: formValues.expiryDate.trim(),
      credentialId: formValues.credentialId.trim(),
      credentialUrl: formValues.credentialUrl.trim(),
    };

    if (editingId) {
      setEntries((prev) =>
        prev.map((entry) =>
          entry.id === editingId ? { ...entry, ...payload } : entry,
        ),
      );
    } else {
      setEntries((prev) => [{ id: createEntryId(), verified: false, ...payload }, ...prev]);
    }

    resetForm();
  }, [editingId, formValues, resetForm]);

  return (
    <>
      {/* Заголовок + OPTIONAL + описание */}
      <section className="certifi-info">
        <div className="certifi-info-heading">
          <h2>Certifications</h2>
          <span className="certifi-optional-badge">OPTIONAL</span>
        </div>
        <p>
          Courses, licenses, professional credentials, language tests. List the most recent
          first — skip if none.
        </p>
      </section>

      {/* Сохранённые сертификаты */}
      {entries.map((entry) => (
        <CertificationCard
          key={entry.id}
          entry={entry}
          isEditing={editingId === entry.id}
          onEdit={() => handleEdit(entry)}
        />
      ))}

      <p className="certifi-form-section-label">
        {editingId ? 'EDIT CERTIFICATION' : 'ADD A NEW CERTIFICATION'}
      </p>

      {/* Форма по макету */}
      <form className="certifi-form" onSubmit={(e) => e.preventDefault()}>
        <div className="certifi-form-grid">
          <CertifiField
            id="certification_name"
            label="Certification name"
            value={formValues.name}
            hint="e.g. AWS Solutions Architect."
            onChange={(value) => handleFormChange('name', value)}
          />
          <CertifiField
            id="issuing_organization"
            label="Issuing organisation"
            value={formValues.issuingOrganization}
            hint="Start typing — we'll suggest."
            onChange={(value) => handleFormChange('issuingOrganization', value)}
          />
          <CertifiField
            id="issue_date"
            label="Issue date"
            value={formValues.issueDate}
            dateFormat="MM / YYYY"
            onChange={(value) => handleFormChange('issueDate', value)}
          />
          <CertifiField
            id="expiry_date"
            label="Expiry date • Optional"
            value={formValues.expiryDate}
            dateFormat="MM / YYYY"
            onChange={(value) => handleFormChange('expiryDate', value)}
          />
          <CertifiField
            id="credential_id"
            label="Credential ID • Optional"
            value={formValues.credentialId}
            onChange={(value) => handleFormChange('credentialId', value)}
          />
          <CertifiField
            id="credential_url"
            label="Credential URL • Optional"
            value={formValues.credentialUrl}
            onChange={(value) => handleFormChange('credentialUrl', value)}
          />
        </div>
      </form>

      <section className="mt-10 mb-10 flex justify-end gap-2">
        <CancelBtn onClick={resetForm} />
        <SaveEntryBtn onClick={handleSave} label={editingId ? 'Update Entry' : 'Save Entry'} />
      </section>
    </>
  );
}
