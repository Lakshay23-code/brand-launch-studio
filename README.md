# Shelfkar website

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

The founder's name and story (home page and About page) are in the `founder` section of the
same file.

## Add your photos

Real photos make the site feel genuine. Until you add them, matching illustrations are shown.

1. Put the photo in `public/photos/`, for example `public/photos/founder.jpg`.
2. In `src/site.config.ts`, set its slot in `photos`, for example `founder: "/photos/founder.jpg"`.

| Slot | Where it shows | What works best |
| --- | --- | --- |
| `founder` | Home page and About page | A clear, well-lit photo of you, square or portrait |
| `factory` | "Build" step on the home page | A factory visit: production line, lab or packing area |
| `packaging` | "Launch" step on the home page | Samples, labels or finished packs from a brand you worked on |
| `launch` | "Grow" step on the home page | A product shoot, a marketplace listing or a launch post |

Landscape photos for the three steps are cropped to 4:3. Get permission before showing a
manufacturer's factory or a client's product.

## Brand files

`public/brand/` holds the logo for use outside the website:

- `shelfkar-profile-picture.png`: Instagram, Facebook, WhatsApp Business and LinkedIn profile picture
- `shelfkar-logo.png`: full logo for light backgrounds (transparent PNG)
- `shelfkar-logo-white.png`: full logo for dark backgrounds (transparent PNG)
- `shelfkar-mark.svg` and `shelfkar-mark-white.svg`: the mark on its own, as vector files for Canva or a printer

Brand colours (Blush & Cocoa): cocoa `#2E2321` (text, buttons, footer), blush white `#FBF7F5`
(page background), dusty rose `#D8A7A1` (the accent and the logo's shelf), soft rose `#F4E7E3`
(tinted panels), clay `#A0625C` (small accents), sage `#6F8F7A` (ticks), petal `#EFE3DF` (borders).
Fonts: Fraunces (headings and logo) and DM Sans (body text), both free on Google Fonts.
The colours live in `src/app/globals.css`.

## Add a blog post

Create one `.mdx` file in `src/content/blog/`. The file name becomes the URL
(`my-post.mdx` → `/blog/my-post`). Start the file with its metadata:

```mdx
export const metadata = {
  title: "Post title (under 60 characters works best for Google)",
  description: "One or two sentences for Google results and social previews (under 160 characters).",
  date: "2026-11-10",
  author: "Shelfkar",
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
