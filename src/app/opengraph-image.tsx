import { ImageResponse } from "next/og";
import { site } from "@/site.config";

export const alt = `${site.name}: launch your nutraceutical or skincare brand`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The image shown when the site is shared on WhatsApp, LinkedIn, Facebook and X.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#141c3f",
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 18 }}>
          <svg width="76" height="64" viewBox="4 7 56 47">
            <rect x="12.75" y="8" width="4.5" height="8" rx="2.25" fill="#FFFFFF" />
            <rect x="11" y="15" width="8" height="5" rx="1.5" fill="#FFFFFF" />
            <path d="M12 21H18C20.5 21 22 22.8 22 25.5V46C22 48.2 20.2 50 18 50H12C9.8 50 8 48.2 8 46V25.5C8 22.8 9.5 21 12 21Z" fill="#FFFFFF" />
            <rect x="25.5" y="34" width="17" height="5" rx="2" fill="#FFFFFF" />
            <path d="M26.5 40H41.5V46.5C41.5 48.4 39.9 50 38 50H30C28.1 50 26.5 48.4 26.5 46.5Z" fill="#FFFFFF" />
            <path d="M48.5 50C44.5 42 47 30 58 23C60.5 35 57 46 48.5 50Z" fill="#FFFFFF" />
            <path d="M49.5 48.5C51.5 41 53.8 33.5 57 26.5" fill="none" stroke="#141c3f" strokeWidth="1.4" strokeLinecap="round" />
            <rect x="4" y="50" width="56" height="4" rx="2" fill="#E8A13A" />
          </svg>
          <div style={{ fontSize: 50, fontWeight: 700, letterSpacing: -1.2, lineHeight: 0.8 }}>shelfkar</div>
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>
          Launch your own supplement or skincare brand in 60 days
        </div>
        <div style={{ fontSize: 28, color: "#dde3ec" }}>
          Verified manufacturers, compliant labels, packaging, website and marketing
        </div>
      </div>
    ),
    size,
  );
}
