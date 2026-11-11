// The Shelfkar logo: a dropper bottle, a cream tub and a leaf standing on one
// shelf, for the skincare, wellness and Ayurvedic brands we launch.
// Drawn on a 64-unit grid; the tight viewBox below crops it to the artwork.

const SAFFRON = "#E8A13A";

type MarkProps = {
  className?: string;
  // "ink": indigo artwork for light backgrounds (default)
  // "white": white artwork for dark backgrounds
  tone?: "ink" | "white";
  title?: string;
};

export function MarkArtwork({ color, cutout }: { color: string; cutout: string }) {
  return (
    <>
      {/* dropper bottle */}
      <rect x="12.75" y="8" width="4.5" height="8" rx="2.25" fill={color} />
      <rect x="11" y="15" width="8" height="5" rx="1.5" fill={color} />
      <path
        d="M12 21H18C20.5 21 22 22.8 22 25.5V46C22 48.2 20.2 50 18 50H12C9.8 50 8 48.2 8 46V25.5C8 22.8 9.5 21 12 21Z"
        fill={color}
      />
      {/* cream tub */}
      <rect x="25.5" y="34" width="17" height="5" rx="2" fill={color} />
      <path d="M26.5 40H41.5V46.5C41.5 48.4 39.9 50 38 50H30C28.1 50 26.5 48.4 26.5 46.5Z" fill={color} />
      {/* leaf */}
      <path d="M48.5 50C44.5 42 47 30 58 23C60.5 35 57 46 48.5 50Z" fill={color} />
      <path
        d="M49.5 48.5C51.5 41 53.8 33.5 57 26.5"
        fill="none"
        stroke={cutout}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* shelf */}
      <rect x="4" y="50" width="56" height="4" rx="2" fill={SAFFRON} />
    </>
  );
}

export function LogoMark({ className, tone = "ink", title }: MarkProps) {
  const color = tone === "ink" ? "#141C3F" : "#FFFFFF";
  // The leaf's vein is drawn in the background colour.
  const cutout = tone === "ink" ? "#F5F6F8" : "#141C3F";
  return (
    <svg
      viewBox="4 7 56 47"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <MarkArtwork color={color} cutout={cutout} />
    </svg>
  );
}

export function Logo({ className = "", reversed = false }: { className?: string; reversed?: boolean }) {
  return (
    <span className={`inline-flex items-end gap-2.5 ${className}`}>
      <LogoMark className="h-[34px] w-auto shrink-0" tone={reversed ? "white" : "ink"} />
      <span
        className={`font-display text-[1.6rem] font-bold leading-[0.8] tracking-[-0.025em] ${
          reversed ? "text-white" : "text-ink"
        }`}
      >
        shelfkar
      </span>
    </span>
  );
}
