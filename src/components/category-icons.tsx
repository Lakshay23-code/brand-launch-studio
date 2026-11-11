// Small icons for the three product categories, drawn in the same style as the logo.

const INK = "#2E2321";
const ROSE = "#D8A7A1";

export function CapsuleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <g transform="rotate(-45 20 20)">
        <path d="M20 13h-6a7 7 0 0 0 0 14h6z" fill={INK} />
        <path d="M20.8 13h5.2a7 7 0 0 1 0 14h-5.2z" fill={ROSE} />
      </g>
    </svg>
  );
}

export function TubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="8" y="12" width="24" height="7" rx="2.5" fill={INK} />
      <path d="M9.5 20.5h21v8a4 4 0 0 1-4 4h-13a4 4 0 0 1-4-4z" fill={INK} />
      <rect x="9.5" y="24" width="21" height="3.5" fill={ROSE} />
    </svg>
  );
}

export function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M11 33c-5-10 0-21 20-26 3 15-3 25-20 26z" fill={INK} />
      <path d="M12 31.5C17 24 22 17.5 29 10" fill="none" stroke={ROSE} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
