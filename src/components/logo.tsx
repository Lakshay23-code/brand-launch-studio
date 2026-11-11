// The Shelfkar logo: a product standing on a shelf.
// The mark is drawn on a 64 x 64 grid so it stays sharp from favicon size up.

type MarkProps = {
  className?: string;
  // "solid": white jar on an indigo tile (default)
  // "reversed": indigo jar on a white tile, for dark backgrounds
  tone?: "solid" | "reversed";
  title?: string;
};

export function LogoMark({ className, tone = "solid", title }: MarkProps) {
  const tile = tone === "solid" ? "#141C3F" : "#FFFFFF";
  const jar = tone === "solid" ? "#FFFFFF" : "#141C3F";
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <rect width="64" height="64" rx="15" fill={tile} />
      {/* lid */}
      <rect x="23" y="13" width="18" height="7" rx="2.5" fill={jar} />
      {/* jar */}
      <rect x="18" y="19" width="28" height="28" rx="7" fill={jar} />
      {/* label band */}
      <rect x="18" y="28" width="28" height="9" fill="#E8A13A" />
      {/* shelf */}
      <rect x="9" y="47" width="46" height="5" rx="2.5" fill="#E8A13A" />
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
