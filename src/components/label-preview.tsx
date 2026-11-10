"use client";

import { useId, useState } from "react";

const products = [
  {
    id: "whey",
    name: "Whey Protein",
    variant: "Double chocolate",
    detail: "24 g protein per serving",
    qty: "Net wt. 1 kg",
    licence: "FSSAI Lic. No.",
    shape: "jar",
  },
  {
    id: "serum",
    name: "Vitamin C Face Serum",
    variant: "10% ascorbic acid",
    detail: "For brighter, even-toned skin",
    qty: "30 ml",
    licence: "Cosmetic Mfg. Lic. No.",
    shape: "bottle",
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha Capsules",
    variant: "Root extract, 500 mg",
    detail: "60 vegetarian capsules",
    qty: "60 caps",
    licence: "AYUSH Lic. No.",
    shape: "jar",
  },
] as const;

export function LabelPreview() {
  const [brand, setBrand] = useState("");
  const [productId, setProductId] = useState<(typeof products)[number]["id"]>("whey");
  const product = products.find((p) => p.id === productId) ?? products[0];
  const inputId = useId();
  const shown = brand.trim() || "Your Brand";
  const isBottle = product.shape === "bottle";

  return (
    <div className="rounded-3xl border border-mist bg-white p-5 shadow-[0_1px_0_#dde3ec] sm:p-7">
      <div className="flex flex-col gap-3">
        <label htmlFor={inputId} className="text-sm font-bold text-ink">
          Try your brand name
        </label>
        <input
          id={inputId}
          value={brand}
          onChange={(e) => setBrand(e.target.value.slice(0, 22))}
          placeholder="Your Brand"
          autoComplete="off"
          className="w-full rounded-xl border border-mist bg-paper px-4 py-3 text-lg text-ink placeholder:text-ink-soft/50"
        />
        <div role="radiogroup" aria-label="Product" className="flex flex-wrap gap-2">
          {products.map((p) => (
            <button
              key={p.id}
              type="button"
              role="radio"
              aria-checked={p.id === productId}
              onClick={() => setProductId(p.id)}
              className={`rounded-full border px-3 py-1.5 text-sm ${
                p.id === productId
                  ? "border-ink bg-ink text-white"
                  : "border-mist text-ink-soft hover:border-ink-soft"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* The packaging */}
      <div className="mt-7 flex justify-center" aria-live="polite">
        <div className={`flex flex-col items-center ${isBottle ? "w-44" : "w-64"}`}>
          {isBottle ? (
            <>
              <div className="h-10 w-8 rounded-t-md bg-ink" />
              <div className="h-4 w-14 rounded-t-sm bg-ink-soft" />
            </>
          ) : (
            <div className="h-9 w-[86%] rounded-t-xl bg-ink" />
          )}
          <div
            className={`relative w-full overflow-hidden bg-ink ${
              isBottle ? "rounded-[28px] pb-8 pt-6" : "rounded-b-[28px] rounded-t-md pb-10 pt-5"
            }`}
          >
            <div className="mx-3 rounded-xl bg-white px-4 py-4 text-ink">
              <p className="font-display text-[26px] font-extrabold leading-none tracking-tight break-words">
                {shown}
              </p>
              <div className="mt-3 -mx-4 bg-saffron px-4 py-2">
                <p className="font-display text-base font-bold leading-tight">{product.name}</p>
                <p className="text-xs">{product.variant}</p>
              </div>
              <p className="mt-3 text-xs text-ink-soft">{product.detail}</p>
              <div className="mt-3 flex items-end justify-between border-t border-mist pt-2 text-[10px] leading-snug text-ink-soft">
                <span>
                  Mfd. by a verified partner
                  <br />
                  {product.licence} ____
                </span>
                <span className="font-bold text-ink">{product.qty}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-5 text-center text-sm text-ink-soft">
        We take this from idea to a real product on the shelf.
      </p>
    </div>
  );
}
