import type { Metadata } from "next";
import { CallToAction } from "@/components/call-to-action";
import { FounderPlaceholder } from "@/components/illustrations";
import { PhotoSlot } from "@/components/photo-slot";
import { founder, photos, site } from "@/site.config";

export const metadata: Metadata = {
  title: "About",
  description: `Who runs ${site.name}, why we started, and the rules we follow on every brand we launch.`,
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "We visit before we recommend",
    body: "A manufacturer joins our list only after we've checked its licences, seen the factory and tested samples.",
  },
  {
    title: "Prices up front, commissions disclosed",
    body: "You get a written quote before work starts. If a manufacturer pays us a referral fee, we tell you.",
  },
  {
    title: "No cure claims, ever",
    body: "Every label and ad follows FSSAI, AYUSH and cosmetic rules. We won't market prescription medicines.",
  },
  {
    title: "Your formulation stays yours",
    body: "Client formulas, supplier prices and sales numbers are kept confidential, including from other clients.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 pt-14 md:grid-cols-[1.3fr_1fr] md:items-start">
        <div>
          <h1 className="font-display text-[2.4rem] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[3.2rem]">
            Built by someone who&rsquo;s been on the factory floor
          </h1>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
            {founder.story.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <p className="mt-8 font-semibold text-ink">
            {founder.name}
            <span className="block font-normal text-ink-soft">{founder.role}</span>
          </p>
        </div>
        <PhotoSlot
          src={photos.founder}
          alt={`${founder.name}, ${founder.role}`}
          fallback={<FounderPlaceholder name={founder.name} className="h-full w-full" />}
          className="aspect-[4/5] w-full"
          sizes="(min-width: 768px) 40vw, 100vw"
          priority
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">How we work</h2>
        <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="border-t border-rose pt-6">
              <h3 className="font-display text-xl font-medium">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
