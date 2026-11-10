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
        <div style={{ fontSize: 34, fontWeight: 700, color: "#e8a13a" }}>{site.name}</div>
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
