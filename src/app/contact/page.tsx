import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Book a free call",
  description:
    "Book a free 30-minute call about launching your nutraceutical, skincare or wellness brand: manufacturers, MOQs, licences, timeline and budget.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 pt-14 lg:grid-cols-[1fr_1.3fr]">
      <div>
        <h1 className="font-display text-[2.4rem] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[3.2rem]">Book a free call</h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Tell us a little about your idea. We&rsquo;ll reply on WhatsApp within one working day to set up a
          30-minute call.
        </p>
        <h2 className="mt-10 font-display text-xl font-medium">On the call we cover</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft marker:text-clay">
          <li>Which manufacturers fit your product, and their MOQs</li>
          <li>The licences and label rules that apply to you</li>
          <li>A realistic timeline and budget to launch</li>
          <li>Whether it makes sense to start now, honestly</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-petal bg-white p-6 sm:p-8">
        <ContactForm />
      </div>
    </section>
  );
}
