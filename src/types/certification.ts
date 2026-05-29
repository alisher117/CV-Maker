export interface CertificationEntry {
  id: string;
  name: string;
  provider: string;
  activeTill: string;
  fileName: string;
}

export interface CertificationFormValues {
  name: string;
  provider: string;
  activeTill: string;
  fileName: string;
}

export const EMPTY_CERTIFICATION_FORM: CertificationFormValues = {
  name: '',
  provider: '',
  activeTill: '',
  fileName: '',
};

export function entryToFormValues(entry: CertificationEntry): CertificationFormValues {
  return {
    name: entry.name,
    provider: entry.provider,
    activeTill: entry.activeTill,
    fileName: entry.fileName,
  };
}

export function formatCertificationDetails(entry: CertificationEntry): string {
  const parts = [entry.provider];
  if (entry.activeTill.trim()) {
    parts.push(`Active till ${entry.activeTill}`);
  }
  if (entry.fileName.trim()) {
    parts.push(entry.fileName);
  }
  return parts.join(' • ');
}
