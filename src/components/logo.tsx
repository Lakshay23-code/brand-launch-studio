// The Shelfkar logo: a dropper bottle, a cream tub and a leaf on one shelf,
// for the skincare, wellness and Ayurvedic brands we launch.
// The mark is drawn on a 64 x 64 grid so it stays sharp from favicon size up.

type MarkProps = {
  className?: string;
  // "solid": white products on an indigo tile (default)
  // "reversed": indigo products on a white tile, for dark backgrounds
  tone?: "solid" | "reversed";
  title?: string;
};

export function LogoMark({ className, tone = "solid", title }: MarkProps) {
  const tile = tone === "solid" ? "#141C3F" : "#FFFFFF";
  const ink = tone === "solid" ? "#FFFFFF" : "#141C3F";
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <rect width="64" height="64" rx="15" fill={tile} />
      {/* dropper bottle */}
      <rect x="15" y="12" width="5" height="9" rx="2.5" fill={ink} />
      <rect x="13" y="19" width="9" height="5" rx="1.5" fill={ink} />
      <rect x="10" y="23" width="15" height="24" rx="4" fill={ink} />
      {/* cream tub */}
      <rect x="28" y="31" width="17" height="5" rx="2" fill={ink} />
      <rect x="29" y="35" width="15" height="12" rx="3.5" fill={ink} />
      <rect x="29" y="39" width="15" height="3" fill={tile} />
      {/* leaf */}
      <path d="M54 47c-7 0-9.5-7-7.5-16 6.5 2 9.5 8.5 7.5 16z" fill={ink} />
      {/* shelf */}
      <rect x="7" y="47" width="50" height="5" rx="2.5" fill="#E8A13A" />
    </svg>
  );
}

export function Logo({ className = "", reversed = false }: { className?: string; reversed?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-8 shrink-0" tone={reversed ? "reversed" : "solid"} />
      <span
        className={`font-display text-[1.4rem] font-extrabold leading-none tracking-[-0.03em] ${
          reversed ? "text-white" : "text-ink"
        }`}
      >
        shelfkar
      </span>
    </span>
  );
}
