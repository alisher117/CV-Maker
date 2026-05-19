import Link from 'next/link';

export interface HeaderProps {
  fileName?: string;
}

export default function Header({ fileName = 'Untitled resume' }: HeaderProps) {
  return (
    <header
      role="banner"
      className="flex h-16 w-full items-center gap-3 border-b border-gray-200 bg-white px-6"
    >
      <Link
        href="/"
        aria-label="CV Maker — go to home"
        className="flex items-center gap-2 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
      >
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-md bg-red-700 text-[11px] font-bold tracking-wide text-white"
        >
          CV
        </span>
        <span className="text-[15px] font-semibold text-gray-900">CV Maker</span>
      </Link>

      <span aria-hidden="true" className="text-gray-300">
        |
      </span>

      <span
        className="truncate text-sm text-gray-500"
        title={fileName}
        aria-label={`Current resume: ${fileName}`}
      >
        {fileName}
      </span>
    </header>
  );
}
