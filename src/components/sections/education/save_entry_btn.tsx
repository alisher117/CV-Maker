'use client';

interface SaveEntryBtnProps {
  onClick: () => void;
  label?: string;
}

export default function SaveEntryBtn({ onClick, label = 'Save Entry' }: SaveEntryBtnProps) {
  return (
    <button type="button" className="save-entry-btn" onClick={onClick}>
      {label}
    </button>
  );
}
