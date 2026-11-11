import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Guides for new nutraceutical and skincare founders",
  description:
    "Practical guides on manufacturers, licences, packaging, costs and marketing for anyone launching a supplement, skincare or wellness brand in India.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <section className="mx-auto max-w-3xl px-5 pt-14">
      <h1 className="font-display text-[2.4rem] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[3.2rem]">Guides for new founders</h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        What we&rsquo;ve learned launching nutraceutical, skincare and wellness brands, written down.
      </p>
      <ul className="mt-12 divide-y divide-petal border-y border-petal">
        {posts.map((p) => (
          <li key={p.slug} className="py-8">
            <Link href={`/blog/${p.slug}`} className="group block">
              <p className="text-sm text-ink-soft">
                <time dateTime={p.date}>{formatDate(p.date)}</time>
              </p>
              <h2 className="mt-2 font-display text-2xl font-medium leading-snug group-hover:underline">{p.title}</h2>
              <p className="mt-2 leading-relaxed text-ink-soft">{p.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
