'use client';

import { useCallback, useState } from 'react';

import { SAMPLE_EDUCATION_ENTRIES } from '@/data/education-sample';
import type { EducationEntry, EducationFormValues } from '@/types/education';
import { EMPTY_EDUCATION_FORM, entryToFormValues } from '@/types/education';

import CancelBtn from './cancel';
import EducationCard from './education_card';
import EducationForm from './education_form';
import EducationHeader from './education_header';
import SaveEntryBtn from './save_entry_btn';

function createEntryId(): string {
  return `edu-${crypto.randomUUID()}`;
}

function isFormValid(values: EducationFormValues): boolean {
  return Boolean(
    values.university.trim() &&
      values.degree.trim() &&
      values.startDate.trim() &&
      values.endDate.trim(),
  );
}

interface EducationProps {
  entries?: EducationEntry[];
  onEntriesChange?: (entries: EducationEntry[]) => void;
}

export default function Education({
  entries: controlledEntries,
  onEntriesChange,
}: EducationProps) {
  const [internalEntries, setInternalEntries] =
    useState<EducationEntry[]>(SAMPLE_EDUCATION_ENTRIES);

  const entries = controlledEntries ?? internalEntries;
  const setEntries = onEntriesChange ?? setInternalEntries;

  const [editingId, setEditingId] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<EducationFormValues>(EMPTY_EDUCATION_FORM);

  const handleFormChange = useCallback((field: keyof EducationFormValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setEditingId(null);
    setFormValues(EMPTY_EDUCATION_FORM);
  }, []);

  const handleEdit = useCallback((entry: EducationEntry) => {
    setEditingId(entry.id);
    setFormValues(entryToFormValues(entry));
  }, []);

  const handleRemove = useCallback(
    (id: string) => {
      setEntries(entries.filter((entry) => entry.id !== id));
      if (editingId === id) resetForm();
    },
    [editingId, entries, resetForm, setEntries],
  );

  const handleCancel = useCallback(() => {
    resetForm();
  }, [resetForm]);

  const handleSave = useCallback(() => {
    if (!isFormValid(formValues)) return;

    const payload = {
      degree: formValues.degree.trim(),
      university: formValues.university.trim(),
      startDate: formValues.startDate.trim(),
      endDate: formValues.endDate.trim(),
    };

    if (editingId) {
      setEntries(
        entries.map((entry) =>
          entry.id === editingId ? { ...entry, ...payload } : entry,
        ),
      );
    } else {
      setEntries([
        {
          id: createEntryId(),
          location: '',
          ...payload,
        },
        ...entries,
      ]);
    }

    resetForm();
  }, [editingId, entries, formValues, resetForm, setEntries]);

  return (
    <>
      <EducationHeader />

      {entries.length === 0 ? (
        <p className="text-sm text-gray-500">No education entries yet. Add one below.</p>
      ) : (
        entries.map((entry) => (
          <EducationCard
            key={entry.id}
            entry={entry}
            isEditing={editingId === entry.id}
            onEdit={() => handleEdit(entry)}
            onRemove={() => handleRemove(entry.id)}
          />
        ))
      )}

      <p className="mt-10 mb-5 text-xs font-bold text-gray-600">
        {editingId ? 'EDIT ENTRY' : 'ADD A NEW ENTRY'}
      </p>

      <EducationForm values={formValues} onChange={handleFormChange} />

      <section className="mt-10 mb-10 flex justify-end gap-2">
        <CancelBtn onClick={handleCancel} />
        <SaveEntryBtn onClick={handleSave} label={editingId ? 'Update Entry' : 'Save Entry'} />
      </section>
    </>
  );
}
