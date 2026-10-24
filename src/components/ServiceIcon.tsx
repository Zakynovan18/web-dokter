const ACCENT = "#fbb08c";

function Syringe() {
  return (
    <>
      <g transform="rotate(45 24 24)">
        <path d="M24 4v8" />
        <rect
          x="18"
          y="12"
          width="12"
          height="20"
          rx="2"
          fill="currentColor"
          fillOpacity="0.12"
        />
        <path d="M18 18h4M18 23h4M18 28h4" />
        <path d="M14 32h20" />
        <path d="M24 32v7" />
        <path d="M19 39h10" />
      </g>
      <path d="M9 9v6M6 12h6" stroke={ACCENT} />
    </>
  );
}

function Growth() {
  return (
    <>
      <circle cx="16" cy="11" r="5" fill="currentColor" fillOpacity="0.12" />
      <path
        d="M10 42V27a6 6 0 0 1 12 0v15"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M16 33v9" />
      <rect x="33" y="5" width="8" height="37" rx="2" />
      <path d="M33 12h4M33 19h3M33 26h4M33 33h3" />
      <path d="M6 42h36" />
      <path d="M27 24V10M23.5 13.5 27 10l3.5 3.5" stroke={ACCENT} />
    </>
  );
}

function Apple() {
  return (
    <>
      <path
        d="M24 16c-3-4-13-3-13 7 0 9 5 18 10 18 1.5 0 2-.8 3-.8s1.5.8 3 .8c5 0 10-9 10-18 0-10-10-11-13-7z"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M24 16c0-4 1.5-7 4-9" />
      <path
        d="M28 7c-4-1.5-8 0-9 4 4 1.5 8 0 9-4z"
        stroke={ACCENT}
        fill={ACCENT}
        fillOpacity="0.35"
      />
      <path d="M16 25c0-3 1.5-5 4-6" strokeOpacity="0.5" />
    </>
  );
}

function Stethoscope() {
  return (
    <>
      <g transform="scale(2)" strokeWidth="1">
        <path d="M11 2v2" />
        <path d="M5 2v2" />
        <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
        <path d="M8 15a6 6 0 0 0 12 0v-3" />
      </g>
      <circle
        cx="40"
        cy="20"
        r="4"
        stroke={ACCENT}
        fill={ACCENT}
        fillOpacity="0.35"
      />
    </>
  );
}

// ikon cadangan untuk layanan yang belum punya ikon khusus
function Cross() {
  return (
    <>
      <rect
        x="8"
        y="8"
        width="32"
        height="32"
        rx="10"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M24 16v16M16 24h16" stroke={ACCENT} />
    </>
  );
}

const icons: Record<string, () => React.JSX.Element> = {
  imunisasi: Syringe,
  "tumbuh-kembang": Growth,
  "konsultasi-gizi": Apple,
  "pemeriksaan-umum": Stethoscope,
};

export default function ServiceIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Icon = icons[slug] ?? Cross;

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <Icon />
    </svg>
  );
}