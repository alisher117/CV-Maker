'use client';

interface NextBtnProps {
  onClick?: () => void;
  disabled?: boolean;
}

export default function NextBtn({ onClick, disabled }: NextBtnProps) {
  return (
    <button type="button" className="next-btn" onClick={onClick} disabled={disabled}>
      Next →
    </button>
  );
}
