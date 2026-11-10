import type { Metadata } from "next";
import { CallToAction } from "@/components/call-to-action";
import { JsonLd } from "@/components/json-ld";
import { stages } from "@/content/services";

export const metadata: Metadata = {
  title: "Services: manufacturing, branding, website and marketing",
  description:
    "Everything you need to launch a nutraceutical, skincare or wellness brand: verified manufacturers, label compliance, packaging, brand story, website, marketplace listings and marketing.",
  alternates: { canonical: "/services" },
};

const faqs = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "It depends on the product and the manufacturer. Many of our partners start with small batches for new brands. We share real MOQs and costs for your product on the first call.",
  },
  {
    q: "Do I need my own licence?",
    a: "For nutraceuticals sold under your brand name, the brand owner usually needs an FSSAI licence alongside the manufacturer's licence. We help you apply, with our regulatory partner.",
  },
  {
    q: "Can you guarantee sales?",
    a: "No one can honestly guarantee sales. We guarantee deliverables and timelines, and we share monthly reports so you can see exactly where your money goes.",
  },
  {
    q: "Do you work with prescription medicines?",
    a: "No. Prescription medicines can't be sold or advertised directly to consumers in the same way, so we focus on nutraceuticals, skincare, haircare and Ayurvedic wellness products.",
  },
  {
    q: "Can I start with only one stage?",
    a: "Yes. If you already have a product, you can start at Launch. If your brand is live, you can start with Grow.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-14">
        <h1 className="max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          From product idea to your first sales, in three stages
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Most founders start with Build and move through all three. If you already have a product or a live
          brand, start where you are.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <ol className="space-y-6">
          {stages.map((s, i) => (
            <li
              key={s.slug}
              id={s.slug}
              className="grid gap-6 rounded-3xl border border-mist bg-white p-6 sm:p-10 lg:grid-cols-[1fr_1.4fr]"
            >
              <div>
                <p className="font-display text-sm font-bold text-saffron-deep">
                  Stage {i + 1}, {s.weeks.toLowerCase()}
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold">{s.name}</h2>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.summary}</p>
              </div>
              <ul className="space-y-3">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      className="mt-1 h-4 w-4 shrink-0 text-leaf"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M4 10.5l4 4 8-9" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="font-display text-3xl font-bold tracking-tight">Common questions</h2>
        <div className="mt-8 divide-y divide-mist border-y border-mist">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">
                {f.q}
                <span aria-hidden="true" className="text-2xl leading-none text-saffron-deep group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
