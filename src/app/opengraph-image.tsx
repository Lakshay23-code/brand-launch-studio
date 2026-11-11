import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/site.config";

export const alt = `${site.name}: launch your nutraceutical or skincare brand`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COCOA = "#2E2321";
const ROSE = "#D8A7A1";

// The image shown when the site is shared on WhatsApp, LinkedIn, Facebook and X.
export default async function OpengraphImage() {
  const fraunces = await readFile(join(process.cwd(), "src/fonts/fraunces-latin-500-normal.woff"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FBF7F5",
          color: COCOA,
          padding: "72px",
          fontFamily: "Fraunces",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 18 }}>
          <svg width="76" height="64" viewBox="4 7 56 47">
            <rect x="12.75" y="8" width="4.5" height="8" rx="2.25" fill={COCOA} />
            <rect x="11" y="15" width="8" height="5" rx="1.5" fill={COCOA} />
            <path d="M12 21H18C20.5 21 22 22.8 22 25.5V46C22 48.2 20.2 50 18 50H12C9.8 50 8 48.2 8 46V25.5C8 22.8 9.5 21 12 21Z" fill={COCOA} />
            <rect x="25.5" y="34" width="17" height="5" rx="2" fill={COCOA} />
            <path d="M26.5 40H41.5V46.5C41.5 48.4 39.9 50 38 50H30C28.1 50 26.5 48.4 26.5 46.5Z" fill={COCOA} />
            <path d="M48.5 50C44.5 42 47 30 58 23C60.5 35 57 46 48.5 50Z" fill={COCOA} />
            <path d="M49.5 48.5C51.5 41 53.8 33.5 57 26.5" fill="none" stroke="#FBF7F5" strokeWidth="1.4" strokeLinecap="round" />
            <rect x="4" y="50" width="56" height="4" rx="2" fill={ROSE} />
          </svg>
          <div style={{ fontSize: 52, letterSpacing: -1, lineHeight: 0.8 }}>shelfkar</div>
        </div>
        <div style={{ fontSize: 74, lineHeight: 1.05, letterSpacing: -1.5, maxWidth: 1000 }}>
          Launch your own supplement or skincare brand in 60 days
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#6E5E59" }}>
          <div style={{ width: 48, height: 6, borderRadius: 3, background: ROSE }} />
          Verified manufacturers, compliant labels, packaging, website and marketing
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Fraunces", data: fraunces, style: "normal", weight: 500 }],
    },
  );
}
