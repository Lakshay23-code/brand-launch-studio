"use client";

import { useId, useState } from "react";

// A live packaging preview: visitors type a brand name and see it on a pack.

type Product = {
  id: string;
  chip: string;
  name: string;
  variant: string;
  qty: string;
  shape: "jar" | "dropper";
  // Pack colours: shading runs left (shadow) -> highlight -> right (shadow)
  body: [string, string, string];
  lid: [string, string, string];
  band: string; // label accent band
  bandText: string;
};

const products: Product[] = [
  {
    id: "whey",
    chip: "Whey protein",
    name: "Whey Protein",
    variant: "Double chocolate, 1 kg",
    qty: "24 g protein per serving",
    shape: "jar",
    body: ["#D9DDE6", "#FFFFFF", "#CDD2DD"],
    lid: ["#0B1029", "#2A3470", "#0B1029"],
    band: "#141C3F",
    bandText: "#FFFFFF",
  },
  {
    id: "serum",
    chip: "Face serum",
    name: "Vitamin C Serum",
    variant: "10% ascorbic acid, 30 ml",
    qty: "For brighter, even-toned skin",
    shape: "dropper",
    body: ["#9A5A16", "#E09A45", "#8A4F12"],
    lid: ["#0B1029", "#2A3470", "#0B1029"],
    band: "#E8A13A",
    bandText: "#141C3F",
  },
  {
    id: "ashwagandha",
    chip: "Ayurvedic capsules",
    name: "Ashwagandha",
    variant: "Root extract, 60 capsules",
    qty: "500 mg per capsule",
    shape: "jar",
    body: ["#1F4A36", "#3E8A66", "#1A4130"],
    lid: ["#D9DDE6", "#FFFFFF", "#CDD2DD"],
    band: "#2F6B4F",
    bandText: "#FFFFFF",
  },
];

const shade = ([a, b, c]: [string, string, string]) =>
  `linear-gradient(90deg, ${a} 0%, ${b} 38%, ${b} 46%, ${c} 100%)`;

export function LabelPreview() {
  const [brand, setBrand] = useState("");
  const [productId, setProductId] = useState(products[0].id);
  const product = products.find((p) => p.id === productId) ?? products[0];
  const inputId = useId();
  const shown = brand.trim() || "Your Brand";

  const label = (
    <div className="rounded-lg bg-white px-3.5 py-3 text-ink shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
      <p className="font-display text-[22px] font-bold leading-none tracking-[-0.02em] break-words">{shown}</p>
      <div className="-mx-3.5 mt-2.5 px-3.5 py-1.5" style={{ background: product.band, color: product.bandText }}>
        <p className="font-display text-[13px] font-bold leading-tight">{product.name}</p>
      </div>
      <p className="mt-2 text-[10.5px] leading-snug text-ink-soft">{product.variant}</p>
      <p className="text-[10.5px] leading-snug text-ink-soft">{product.qty}</p>
    </div>
  );

  return (
    <div className="rounded-2xl border border-white/10 bg-[#1B2450] p-5 sm:p-6">
      {/* The studio: pack on a shelf */}
      <div
        className="relative flex h-[340px] items-end justify-center overflow-hidden rounded-xl"
        style={{ background: "radial-gradient(120% 90% at 50% 20%, #2B3672 0%, #1B2450 70%)" }}
        aria-live="polite"
      >
        <div className="relative z-10 flex flex-col items-center pb-[18px]">
          {product.shape === "jar" ? (
            <>
              <div className="h-9 w-40 rounded-t-[14px] rounded-b-[4px]" style={{ background: shade(product.lid) }} />
              <div
                className="mt-[3px] flex h-[210px] w-48 flex-col justify-center rounded-[34px] px-3.5"
                style={{ background: shade(product.body) }}
              >
                {label}
              </div>
            </>
          ) : (
            <>
              <div className="h-12 w-6 rounded-t-full rounded-b-md bg-[#0B1029]" />
              <div className="h-7 w-12 rounded-md" style={{ background: shade(product.lid) }} />
              <div
                className="mt-[3px] flex h-[200px] w-40 flex-col justify-center rounded-[26px] px-3"
                style={{ background: shade(product.body) }}
              >
                {label}
              </div>
            </>
          )}
        </div>
        {/* shelf */}
        <div className="absolute inset-x-6 bottom-[10px] h-2 rounded-full bg-saffron" />
        <div className="absolute inset-x-10 bottom-[4px] h-2 rounded-full bg-black/30 blur-sm" />
      </div>

      {/* Controls */}
      <div className="mt-5">
        <label htmlFor={inputId} className="text-sm font-bold text-white">
          Type your brand name
        </label>
        <input
          id={inputId}
          value={brand}
          onChange={(e) => setBrand(e.target.value.slice(0, 20))}
          placeholder="Your Brand"
          autoComplete="off"
          className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-lg text-white placeholder:text-white/40 focus:border-saffron focus:outline-none"
        />
        <div role="radiogroup" aria-label="Product" className="mt-3 flex flex-wrap gap-2">
          {products.map((p) => (
            <button
              key={p.id}
              type="button"
              role="radio"
              aria-checked={p.id === productId}
              onClick={() => setProductId(p.id)}
              className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                p.id === productId
                  ? "border-saffron bg-saffron font-bold text-ink"
                  : "border-white/15 text-white/80 hover:border-white/40 hover:text-white"
              }`}
            >
              {p.chip}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
