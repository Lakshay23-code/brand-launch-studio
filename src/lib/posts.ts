import { readdir } from "node:fs/promises";
import path from "node:path";

// Every blog post is one .mdx file in src/content/blog/.
// The file name becomes the URL: src/content/blog/my-post.mdx -> /blog/my-post
// Each file must export its metadata at the top, for example:
//
// export const metadata = {
//   title: "How to choose a supplement manufacturer",
//   description: "One or two sentences for Google and social previews.",
//   date: "2026-11-10",
//   author: "Brand Launch Studio",
// };

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  author?: string;
};

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export async function getPostSlugs(): Promise<string[]> {
  "use cache";
  const files = await readdir(BLOG_DIR);
  return files.filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

export async function getPostMeta(slug: string): Promise<PostMeta | null> {
  "use cache";
  const slugs = await getPostSlugs();
  if (!slugs.includes(slug)) return null;
  const mod = await import(`@/content/blog/${slug}.mdx`);
  const meta = mod.metadata as Omit<PostMeta, "slug">;
  return { slug, ...meta };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  "use cache";
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map((s) => getPostMeta(s)));
  return posts
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${d} ${months[m - 1]} ${y}`;
}
