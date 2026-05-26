'use client';

interface SkipBtnProps {
  onClick?: () => void;
  disabled?: boolean;
}

export default function SkipBtn({ onClick, disabled }: SkipBtnProps) {
  return (
    <button type="button" className="skip-btn" onClick={onClick} disabled={disabled}>
      Skip for now
    </button>
  );
}
