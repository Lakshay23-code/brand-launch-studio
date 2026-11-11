import Link from "next/link";
import { whatsappLink } from "@/site.config";

export function CallToAction() {
  return (
    <section className="mx-auto max-w-6xl px-5">
      <div className="grid gap-8 rounded-2xl bg-saffron px-7 py-12 sm:px-12 lg:grid-cols-[1.6fr_1fr] lg:items-center lg:py-14">
        <div>
          <h2 className="text-balance font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.4rem]">
            Tell us your product idea. We&rsquo;ll tell you what it takes to launch it.
          </h2>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-ink">
            A free 30-minute call covers manufacturers, MOQs, licences, timeline and a realistic budget.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link href="/contact" className="rounded-lg bg-ink px-6 py-3.5 font-bold text-white hover:bg-ink-soft">
            Book a free call
          </Link>
          <a
            href={whatsappLink("Hi, I have a product idea and want to know what it takes to launch it.")}
            className="rounded-lg border border-ink/40 px-6 py-3.5 font-bold text-ink hover:border-ink"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
