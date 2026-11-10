import Link from "next/link";
import { whatsappLink } from "@/site.config";

export function CallToAction() {
  return (
    <section className="mx-auto max-w-6xl px-5">
      <div className="rounded-3xl bg-saffron px-6 py-12 sm:px-12">
        <h2 className="max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Tell us your product idea. We&rsquo;ll tell you what it takes to launch it.
        </h2>
        <p className="mt-4 max-w-xl text-ink">
          A free 30-minute call covers manufacturers, MOQs, licences, timeline and a realistic budget.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-ink px-6 py-3 font-bold text-white hover:bg-ink-soft">
            Book a free call
          </Link>
          <a
            href={whatsappLink("Hi, I have a product idea and want to know what it takes to launch it.")}
            className="rounded-full border-2 border-ink px-6 py-3 font-bold text-ink hover:bg-ink hover:text-white"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
