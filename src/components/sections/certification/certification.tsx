'use client';

/**
 * Certifications step — весь UI и логика в одном файле.
 * Паттерн как Education: пустой список → форма → Save через «+ Add another certificate».
 * Типы: @/types/certification | Стили: globals.css (.certifi-*)
 */

import { useCallback, useRef, useState } from 'react';

import CheckIcon from '@/components/ui/CheckIcon';
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

/** Обязательные поля перед сохранением (файл опционален). */
function isFormValid(values: CertificationFormValues): boolean {
  return Boolean(values.name.trim() && values.provider.trim() && values.activeTill.trim());
}

// --- Subcomponents: поля формы (2×2 grid) ---

interface CertifiFieldProps {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

/** Текстовый инпут: зелёная рамка + галочка, когда заполнен. */
function CertifiField({ id, label, value, placeholder, onChange }: CertifiFieldProps) {
  const isValid = value.trim().length > 0;

  return (
    <div className="certifi-field">
      <label htmlFor={id}>{label}</label>
      <div className="certifi-input-wrap">
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={isValid ? 'certifi-input-valid' : undefined}
        />
        {isValid ? <CheckIcon className="certifi-check" /> : null}
      </div>
    </div>
  );
}

interface CertifiFileFieldProps {
  value: string;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/** PDF/PNG: dashed-блок той же высоты (48px), что и остальные инпуты. */
function CertifiFileField({ value, fileInputRef, onFileChange }: CertifiFileFieldProps) {
  const hasFile = value.trim().length > 0;

  return (
    <div className="certifi-field">
      <span className="certifi-field-label">Import file</span>
      <button
        type="button"
        className={`certifi-file-upload ${hasFile ? 'certifi-file-upload-valid' : ''}`}
        onClick={() => fileInputRef.current?.click()}
      >
        {hasFile ? (
          <span className="certifi-file-upload-name">{value}</span>
        ) : (
          <>
            <span className="certifi-file-upload-title">Import file</span>
            <span className="certifi-file-upload-hint">(png/pdf) &gt; 10 MB</span>
          </>
        )}
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".png,.pdf,image/png,application/pdf"
        className="sr-only"
        onChange={onFileChange}
        tabIndex={-1}
      />
    </div>
  );
}

// --- Subcomponent: карточка сохранённой записи ---

interface CertificationCardProps {
  entry: CertificationEntry;
  isEditing: boolean;
  onEdit: () => void;
  onRemove: () => void;
}

function CertificationCard({ entry, isEditing, onEdit, onRemove }: CertificationCardProps) {
  return (
    <section
      className={`certifi-cards ${isEditing ? 'border-[var(--brand)] ring-1 ring-[var(--brand)]/20' : ''}`}
    >
      <div>
        <p className="certifi-star">★</p>
      </div>
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-base font-bold">{entry.name}</p>
        <p className="text-sm text-gray-700">{formatCertificationDetails(entry)}</p>
      </div>
      <div className="flex shrink-0 flex-col items-center justify-center gap-2">
        <button type="button" className="edit_btn" onClick={onEdit} aria-pressed={isEditing}>
          {isEditing ? 'Editing' : 'Edit'}
        </button>
        <button
          type="button"
          className="cancel-btn !w-auto px-4 text-sm"
          onClick={onRemove}
          aria-label={`Remove ${entry.name}`}
        >
          Remove
        </button>
      </div>
    </section>
  );
}

// --- Main: state + handlers + разметка страницы ---

export default function Certification() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // entries — сохранённые сертификаты (изначально пусто, без моков)
  const [entries, setEntries] = useState<CertificationEntry[]>([]);
  // editingId — какая карточка сейчас редактируется в форме внизу (null = новая запись)
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<CertificationFormValues>(EMPTY_CERTIFICATION_FORM);

  const handleFormChange = useCallback((field: keyof CertificationFormValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    handleFormChange('fileName', file?.name ?? '');
  }, [handleFormChange]);

  const resetForm = useCallback(() => {
    setEditingId(null);
    setFormValues(EMPTY_CERTIFICATION_FORM);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }, []);

  /** Edit: подставить данные карточки в форму. */
  const handleEdit = useCallback((entry: CertificationEntry) => {
    setEditingId(entry.id);
    setFormValues(entryToFormValues(entry));
  }, []);

  const handleRemove = useCallback(
    (id: string) => {
      setEntries((prev) => prev.filter((entry) => entry.id !== id));
      if (editingId === id) resetForm();
    },
    [editingId, resetForm],
  );

  /** «+ Add another certificate» — добавить новую или обновить редактируемую. */
  const handleAddAnother = useCallback(() => {
    if (!isFormValid(formValues)) return;

    const payload = {
      name: formValues.name.trim(),
      provider: formValues.provider.trim(),
      activeTill: formValues.activeTill.trim(),
      fileName: formValues.fileName.trim(),
    };

    if (editingId) {
      setEntries((prev) =>
        prev.map((entry) => (entry.id === editingId ? { ...entry, ...payload } : entry)),
      );
    } else {
      setEntries((prev) => [{ id: createEntryId(), ...payload }, ...prev]);
    }

    resetForm();
  }, [editingId, formValues, resetForm]);

  return (
    <>
      {/* Заголовок секции */}
      <section className="certifi-info">
        <h2>Certifications</h2>
      </section>

      {/* Список уже добавленных сертификатов */}
      {entries.map((entry) => (
        <CertificationCard
          key={entry.id}
          entry={entry}
          isEditing={editingId === entry.id}
          onEdit={() => handleEdit(entry)}
          onRemove={() => handleRemove(entry.id)}
        />
      ))}

      {/* Форма: Certificate name | Provider / Active till | Import file */}
      <form className="certifi-form" onSubmit={(e) => e.preventDefault()}>
        <div className="certifi-form-grid">
          <CertifiField
            id="certificate_name"
            label="Certificate name"
            value={formValues.name}
            placeholder="Name"
            onChange={(value) => handleFormChange('name', value)}
          />
          <CertifiField
            id="provider"
            label="Provider"
            value={formValues.provider}
            placeholder="Dave"
            onChange={(value) => handleFormChange('provider', value)}
          />
          <CertifiField
            id="active_till"
            label="Active till"
            value={formValues.activeTill}
            placeholder="april 2029"
            onChange={(value) => handleFormChange('activeTill', value)}
          />
          <CertifiFileField
            value={formValues.fileName}
            fileInputRef={fileInputRef}
            onFileChange={handleFileChange}
          />
        </div>
      </form>

      {/* Сохранить запись и очистить форму */}
      <button type="button" className="certifi-add-btn" onClick={handleAddAnother}>
        + Add another certificate
      </button>
    </>
  );
}
