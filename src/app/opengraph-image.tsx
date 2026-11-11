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
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="15" fill="#FFFFFF" />
            <rect x="23" y="13" width="18" height="7" rx="2.5" fill="#141C3F" />
            <rect x="18" y="19" width="28" height="28" rx="7" fill="#141C3F" />
            <rect x="18" y="28" width="28" height="9" fill="#E8A13A" />
            <rect x="9" y="47" width="46" height="5" rx="2.5" fill="#E8A13A" />
          </svg>
          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>shelfkar</div>
        </div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, maxWidth: 980 }}>
          Your own supplement or skincare brand, on the shelf in 60 days.
        </div>
        <div style={{ fontSize: 28, color: "#dde3ec" }}>
          Verified manufacturers, compliant labels, packaging, website and marketing
        </div>
      </div>
    ),
    size,
  );
}
