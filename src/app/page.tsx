import Link from "next/link";
import { LabelPreview } from "@/components/label-preview";
import { CallToAction } from "@/components/call-to-action";
import { categories, stages, stuckPoints } from "@/content/services";
import { getAllPosts, formatDate } from "@/lib/posts";
import { whatsappLink } from "@/site.config";

export default async function Home() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1.1fr_1fr] lg:pt-20">
        <div>
          <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl">
            Your own supplement or skincare brand, on the shelf in 60 days.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            We find a verified manufacturer, get your label compliant, design the packaging, build your
            website and run your launch. You bring the idea and the audience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-saffron px-6 py-3 font-bold text-ink hover:bg-saffron-deep hover:text-white"
            >
              Book a free 30-minute call
            </Link>
            <a
              href={whatsappLink("Hi, I want to launch my own brand. Can you share the details?")}
              className="rounded-full border border-ink px-6 py-3 font-bold text-ink hover:bg-ink hover:text-white"
            >
              Ask on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            For fitness coaches, creators, clinics and first-time founders across India.
          </p>
        </div>
        <LabelPreview />
      </section>

      {/* Where founders get stuck */}
      <section className="border-y border-mist bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Most new brands stall before the first order ships
          </h2>
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {stuckPoints.map((p) => (
              <div key={p.title} className="border-t-2 border-ink pt-5">
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How a launch works */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            How a launch works
          </h2>
          <Link href="/services" className="font-bold underline decoration-saffron decoration-2 underline-offset-4">
            See everything included
          </Link>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {stages.map((s, i) => (
            <li key={s.slug} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink font-display text-lg font-bold text-white">
                  {i + 1}
                </span>
                <span className="h-px flex-1 bg-mist" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">{s.name}</h3>
              <p className="text-sm text-saffron-deep">{s.weeks}</p>
              <p className="mt-3 leading-relaxed text-ink-soft">{s.summary}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* What we launch */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1fr_2fr]">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">What we launch</h2>
          <ul className="divide-y divide-white/15">
            {categories.map((c) => (
              <li key={c.name} className="grid gap-1 py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
                <span className="font-display text-xl font-bold text-saffron">{c.name}</span>
                <span className="text-mist">{c.examples}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Proof */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              We already run D2C brands of our own
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              Our team works hands-on with two live nutraceutical and Ayurvedic brands. Every launch we run
              for you uses the same manufacturers, checklists and playbooks.
            </p>
            <Link
              href="/case-studies"
              className="mt-6 inline-block font-bold underline decoration-saffron decoration-2 underline-offset-4"
            >
              Read the case studies
            </Link>
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-mist bg-mist">
            {[
              ["~60 days", "from first call to a product you can sell"],
              ["3 stages", "Build, Launch, Grow; join at any stage"],
              ["Verified", "every manufacturer visited and licence-checked"],
              ["Compliant", "labels reviewed by a regulatory partner"],
            ].map(([k, v]) => (
              <div key={k} className="bg-white p-6">
                <dt className="font-display text-2xl font-bold">{k}</dt>
                <dd className="mt-1 text-sm text-ink-soft">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Blog */}
      {posts.length > 0 && (
        <section className="border-t border-mist">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Guides for new founders</h2>
              <Link href="/blog" className="font-bold underline decoration-saffron decoration-2 underline-offset-4">
                All guides
              </Link>
            </div>
            <ul className="mt-10 grid gap-8 md:grid-cols-3">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="group block">
                    <p className="text-sm text-ink-soft">{formatDate(p.date)}</p>
                    <h3 className="mt-2 font-display text-xl font-bold leading-snug group-hover:underline">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-ink-soft">{p.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CallToAction />
    </>
  );
}
