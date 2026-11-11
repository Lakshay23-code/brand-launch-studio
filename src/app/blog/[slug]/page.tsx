import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CallToAction } from "@/components/call-to-action";
import { JsonLd } from "@/components/json-ld";
import { formatDate, getPostMeta, getPostSlugs } from "@/lib/posts";
import { site } from "@/site.config";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostMeta(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      url: `/blog/${slug}`,
    },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = await getPostMeta(slug);
  if (!post) notFound();
  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: { "@type": "Organization", name: post.author ?? site.name },
          publisher: { "@type": "Organization", name: site.name },
          mainEntityOfPage: `${site.url}/blog/${slug}`,
        }}
      />
      <article className="mx-auto max-w-3xl px-5 pt-14">
        <Link href="/blog" className="text-sm text-ink-soft underline underline-offset-4 hover:text-ink">
          All guides
        </Link>
        <h1 className="mt-6 font-display text-[2.3rem] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[3rem]">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-ink-soft">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.author ? `, by ${post.author}` : null}
        </p>
        <div className="prose prose-lg mt-10 max-w-none">
          <Content />
        </div>
      </article>
      <div className="mt-20">
        <CallToAction />
      </div>
    </>
  );
}
