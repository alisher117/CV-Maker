export interface CertificationEntry {
  id: string;
  name: string;
  issuingOrganization: string;
  issueDate: string;
  expiryDate: string;
  credentialId: string;
  credentialUrl: string;
  verified?: boolean;
}

export interface CertificationFormValues {
  name: string;
  issuingOrganization: string;
  issueDate: string;
  expiryDate: string;
  credentialId: string;
  credentialUrl: string;
}

export const EMPTY_CERTIFICATION_FORM: CertificationFormValues = {
  name: '',
  issuingOrganization: '',
  issueDate: '',
  expiryDate: '',
  credentialId: '',
  credentialUrl: '',
};

export function entryToFormValues(entry: CertificationEntry): CertificationFormValues {
  return {
    name: entry.name,
    issuingOrganization: entry.issuingOrganization,
    issueDate: entry.issueDate,
    expiryDate: entry.expiryDate,
    credentialId: entry.credentialId,
    credentialUrl: entry.credentialUrl,
  };
}

export function formatCertificationDetails(entry: CertificationEntry): string {
  const parts: string[] = [`Issued ${entry.issueDate}`];
  parts.push(entry.expiryDate.trim() ? entry.expiryDate : 'No expiry');
  if (entry.credentialId.trim()) {
    parts.push(`Credential ID ${entry.credentialId}`);
  }
  return parts.join(' • ');
}
