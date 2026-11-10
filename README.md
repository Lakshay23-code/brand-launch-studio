# Brand Launch Studio website

Next.js website for a brand-launch service for nutraceutical, skincare and wellness founders.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Change the business details

Everything (business name, email, WhatsApp number, social links, domain) lives in
`src/site.config.ts`. Search the project for `TODO` to find every placeholder to replace,
including the case studies in `src/app/case-studies/page.tsx`.

## Add a blog post

Create one `.mdx` file in `src/content/blog/`. The file name becomes the URL
(`my-post.mdx` → `/blog/my-post`). Start the file with its metadata:

```mdx
export const metadata = {
  title: "Post title (under 60 characters works best for Google)",
  description: "One or two sentences for Google results and social previews (under 160 characters).",
  date: "2026-11-10",
  author: "Brand Launch Studio",
};

Your post starts here, written in Markdown. Use ## for section headings.
```

The blog index, home page, sitemap and structured data pick up new posts automatically.

Content rules for health and beauty posts: no claims that a product cures, treats or
prevents a disease, and no prescription medicines.

## Deploy

1. Import this repository at https://vercel.com/new (the free plan is enough).
2. Every push to `main` deploys automatically.
3. Add your domain in Vercel, then update `url` in `src/site.config.ts`.
4. Verify the site in Google Search Console and submit `https://your-domain/sitemap.xml`.

## SEO already set up

- Static pages and blog posts, fast to load and easy for Google to read
- A unique title, description and canonical URL on every page
- `sitemap.xml` and `robots.txt`, generated automatically
- Structured data: ProfessionalService (all pages), FAQPage (services), Article (blog posts)
- A generated Open Graph image for link previews on WhatsApp, LinkedIn and Facebook
