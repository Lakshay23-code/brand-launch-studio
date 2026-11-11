import Image from "next/image";
import type { ReactNode } from "react";

// Shows a real photo when one is set in src/site.config.ts, otherwise the
// illustration passed as `fallback`. The box keeps the same shape either way.
export function PhotoSlot({
  src,
  alt,
  fallback,
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
}: {
  src: string | null;
  alt: string;
  fallback: ReactNode;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        fallback
      )}
    </div>
  );
}
