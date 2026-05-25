'use client';

interface CancelBtnProps {
  onClick: () => void;
}

export default function CancelBtn({ onClick }: CancelBtnProps) {
  return (
    <button type="button" className="cancel-btn" onClick={onClick}>
      Cancel
    </button>
  );
}
