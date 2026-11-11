import Link from "next/link";
import { LabelPreview } from "@/components/label-preview";
import { CallToAction } from "@/components/call-to-action";
import { CapsuleIcon, LeafIcon, TubIcon } from "@/components/category-icons";
import { categories, stages, stuckPoints } from "@/content/services";
import { PhotoSlot } from "@/components/photo-slot";
import {
  FactoryIllustration,
  FounderPlaceholder,
  LaunchIllustration,
  PackagingIllustration,
} from "@/components/illustrations";
import { getAllPosts, formatDate } from "@/lib/posts";
import { founder, photos } from "@/site.config";

const H2 = "font-display text-[2rem] font-medium leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.5rem]";
const LINK = "font-semibold text-ink underline decoration-rose decoration-2 underline-offset-[6px] hover:decoration-ink";

const stageVisuals = {
  build: {
    src: photos.factory,
    alt: "A manufacturing partner's production line",
    art: <FactoryIllustration className="h-full w-full" title="A production line filling supplement jars" />,
  },
  launch: {
    src: photos.packaging,
    alt: "Packaging and labels designed for a client brand",
    art: <PackagingIllustration className="h-full w-full" title="Packaging: a serum bottle, a jar and a shipping box" />,
  },
  grow: {
    src: photos.launch,
    alt: "A client brand's launch on social media",
    art: <LaunchIllustration className="h-full w-full" title="A brand's Instagram page with new order notifications" />,
  },
} as const;

const categoryIcons = [CapsuleIcon, TubIcon, LeafIcon];

const checks = [
  "A GMP-compliant facility",
  "A valid FSSAI, AYUSH or cosmetic licence for your product",
  "Test reports for every batch",
  "A visit to the factory floor",
];

function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-5 w-5 shrink-0 ${className}`} fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#6F8F7A" />
      <path d="m5.8 10.3 2.8 2.8 5.6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function Home() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <h1 className="text-balance font-display text-[2.7rem] font-normal leading-[1.04] tracking-[-0.02em] text-ink sm:text-[3.7rem]">
              Launch your own supplement or skincare brand in 60 days
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              We find a verified manufacturer, get your label compliant, design the packaging, build your website
              and run your launch. You bring the idea and the audience.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-lg bg-ink px-6 py-3.5 font-semibold text-white hover:bg-ink-soft">
                Book a free 30-minute call
              </Link>
              <a
                href="#how"
                className="rounded-lg border border-petal bg-white px-6 py-3.5 font-semibold text-ink hover:border-rose"
              >
                See how it works
              </a>
            </div>
            <p className="mt-8 text-sm text-ink-soft">
              For fitness coaches, creators, clinics and first-time founders across India.
            </p>
          </div>
          <LabelPreview />
        </div>
      </section>

      {/* Manufacturer checks */}
      <section className="border-y border-petal bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 lg:grid-cols-[16rem_1fr] lg:items-center">
          <p className="font-display text-lg font-medium leading-snug text-ink">
            Before we recommend any manufacturer, we check:
          </p>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {checks.map((c) => (
              <li key={c} className="flex gap-3 text-[15px] leading-snug text-ink-soft">
                <Check className="mt-px" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Where founders get stuck */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <h2 className={`max-w-2xl text-balance ${H2}`}>Most new brands stall before the first order ships</h2>
        <div className="mt-14 grid gap-x-14 gap-y-12 sm:grid-cols-2">
          {stuckPoints.map((p) => (
            <div key={p.title} className="border-t border-rose pt-6">
              <h3 className="font-display text-xl font-medium tracking-[-0.01em]">{p.title}</h3>
              <p className="mt-2 text-[17px] leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How a launch works */}
      <section id="how" className="scroll-mt-20 border-y border-petal bg-white">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className={H2}>How a launch works</h2>
            <Link href="/services" className={LINK}>
              See everything included
            </Link>
          </div>
          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {stages.map((s, i) => (
              <li key={s.slug}>
                <PhotoSlot
                  src={stageVisuals[s.slug].src}
                  alt={stageVisuals[s.slug].alt}
                  fallback={stageVisuals[s.slug].art}
                  className="aspect-[4/3] rounded-2xl"
                />
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-sm font-medium text-clay">Step {i + 1}</span>
                  <span className="text-sm text-ink-soft">{s.weeks}</span>
                </div>
                <h3 className="mt-1 font-display text-2xl font-medium tracking-[-0.01em]">{s.name}</h3>
                <p className="mt-2 text-[17px] leading-relaxed text-ink-soft">{s.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What we launch */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <h2 className={H2}>What we launch</h2>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {categories.map((c, i) => {
            const Icon = categoryIcons.at(i) ?? LeafIcon;
            return (
              <li key={c.name} className="rounded-2xl border border-petal bg-white p-7">
                <Icon className="h-11 w-11" />
                <h3 className="mt-5 font-display text-xl font-medium tracking-[-0.01em]">{c.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{c.examples}</p>
              </li>
            );
          })}
        </ul>
      </section>

      {/* The founder, and proof */}
      <section className="border-y border-petal bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-16">
          <PhotoSlot
            src={photos.founder}
            alt={`${founder.name}, ${founder.role}`}
            fallback={<FounderPlaceholder name={founder.name} className="h-full w-full" />}
            className="aspect-[4/5] w-full max-w-sm rounded-2xl"
            sizes="22rem"
          />
          <div>
            <h2 className={H2}>You work directly with the founder</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{founder.story.at(0)}</p>
            <p className="mt-6 text-ink">
              <span className="font-semibold">{founder.name}</span>
              <span className="text-ink-soft">, {founder.role}</span>
            </p>
            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-6 border-t border-petal pt-8">
              <div className="flex flex-col">
                <dt className="text-sm text-ink-soft">Live D2C brands our team runs</dt>
                <dd className="order-first font-display text-4xl font-medium tracking-[-0.02em]">2</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-sm text-ink-soft">From first call to a product you can sell</dt>
                <dd className="order-first font-display text-4xl font-medium tracking-[-0.02em]">~60 days</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/about" className={LINK}>
                Read the full story
              </Link>
              <Link href="/case-studies" className={LINK}>
                See the case studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guides */}
      {posts.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className={H2}>Guides for new founders</h2>
            <Link href="/blog" className={LINK}>
              All guides
            </Link>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-petal bg-white p-7 hover:border-ink/40"
                >
                  <p className="text-sm text-ink-soft">{formatDate(p.date)}</p>
                  <h3 className="mt-3 font-display text-xl font-medium leading-snug tracking-[-0.01em] group-hover:underline">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{p.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <CallToAction />
    </>
  );
}
