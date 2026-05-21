import Image from 'next/image';
import Link from 'next/link';

export interface HeaderProps {
  logoSrc?: string;
  logoAlt?: string;
}

export default function Header({ logoSrc = '/logo.svg', logoAlt = 'FIRCASPIAN' }: HeaderProps) {
  return (
    <header
      role="banner"
      className="flex h-[72px] w-full items-center border-b border-gray-200 bg-white px-6"
    >
      <div className="flex min-w-0 flex-1 items-center gap-5">
        <Link
          href="/"
          aria-label="Go to home"
          className="shrink-0 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
        >
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={200}
            height={48}
            priority
            className="h-10 w-auto max-w-[200px] object-contain object-left sm:h-12 sm:max-w-[240px]"
          />
        </Link>

        <span aria-hidden="true" className="h-6 w-px shrink-0 bg-gray-200" />

        <div className="flex min-w-0 items-center gap-2.5">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-red-700 text-[11px] font-bold tracking-wide text-white"
          >
            CV
          </span>
          <span className="truncate text-[15px] font-semibold tracking-tight text-gray-900">
            CV Maker
          </span>
        </div>
      </div>
    </header>
  );
}
