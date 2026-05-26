'use client';

interface BackBtnProps {
  onClick?: () => void;
  disabled?: boolean;
}

export default function BackBtn({ onClick, disabled }: BackBtnProps) {
  return (
    <button type="button" className="back-btn" onClick={onClick} disabled={disabled}>
      Back ←
    </button>
  );
}
