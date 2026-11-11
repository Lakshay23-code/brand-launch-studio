import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-24 text-center">
      <h1 className="font-display text-4xl font-medium tracking-[-0.02em]">This page doesn&rsquo;t exist</h1>
      <p className="mt-4 text-lg text-ink-soft">The link may be old, or the page may have moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-lg bg-ink px-6 py-3.5 font-semibold text-white hover:bg-ink-soft">
          Go to the home page
        </Link>
        <Link href="/blog" className="rounded-lg border border-ink px-6 py-3.5 font-semibold text-ink hover:bg-ink hover:text-white">
          Read the guides
        </Link>
      </div>
    </section>
  );
}
