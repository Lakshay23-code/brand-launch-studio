import type { Metadata } from "next";
import { CallToAction } from "@/components/call-to-action";

export const metadata: Metadata = {
  title: "Case studies",
  description: "How we took nutraceutical and Ayurvedic brands from idea to launch: timelines, costs and results.",
  alternates: { canonical: "/case-studies" },
};

// TODO: replace the placeholder text below with your real case studies.
// Get each founder's permission first. Real numbers (timeline, MOQ, first-month
// orders, reviews) are what make a case study convincing.
const caseStudies = [
  {
    brand: "Brand one (name pending approval)",
    category: "Nutraceutical",
    challenge: "Describe where the founder was when they started: idea, budget, what they had tried.",
    whatWeDid: [
      "Manufacturer selected and samples approved",
      "Licence and label compliance",
      "Brand identity, packaging and website",
      "Launch campaign on Instagram and marketplaces",
    ],
    results: [
      ["Timeline", "__ days to launch"],
      ["First batch", "__ units"],
      ["First 3 months", "__ orders"],
    ],
  },
  {
    brand: "Brand two (name pending approval)",
    category: "Nutraceutical and Ayurvedic",
    challenge: "Describe the starting point and the main problem this founder needed solved.",
    whatWeDid: [
      "Product range planned across nutraceutical and Ayurvedic lines",
      "Manufacturers matched for each product type",
      "Packaging system across the range",
      "Ongoing content and performance marketing",
    ],
    results: [
      ["Products launched", "__"],
      ["Marketplaces", "__"],
      ["Repeat customers", "__%"],
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-14">
        <h1 className="max-w-3xl font-display text-[2.4rem] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[3.2rem]">
          Brands we&rsquo;ve built and run
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Real launches, with the timelines and numbers behind them.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-5">
        {caseStudies.map((c) => (
          <article key={c.brand} className="rounded-2xl border border-petal bg-white p-6 sm:p-10">
            <p className="text-sm font-semibold text-leaf">{c.category}</p>
            <h2 className="mt-1 font-display text-3xl font-medium">{c.brand}</h2>
            <div className="mt-8 grid gap-10 lg:grid-cols-3">
              <div>
                <h3 className="font-display text-lg font-medium">The starting point</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{c.challenge}</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-medium">What we did</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-ink-soft marker:text-clay">
                  {c.whatWeDid.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
              <dl className="space-y-4">
                {c.results.map(([k, v]) => (
                  <div key={k} className="border-l-4 border-rose pl-4">
                    <dt className="text-sm text-ink-soft">{k}</dt>
                    <dd className="font-display text-2xl font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </section>

      <div className="mt-20">
        <CallToAction />
      </div>
    </>
  );
}
