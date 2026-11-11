// Edit this file to change the business name, contact details and links
// everywhere on the site.

export const site = {
  name: "Shelfkar",
  tagline: "We launch nutraceutical, skincare and wellness brands for first-time founders.",
  description:
    "Verified manufacturers, compliant packaging, brand story, website and marketing for new nutraceutical, skincare and wellness brands in India. Launch your brand in about 60 days.",
  url: "https://shelfkar.com", // TODO: change if you register a different domain (e.g. shelfkar.in)
  email: "hello@example.com", // TODO: replace with your business email
  // WhatsApp number in international format, digits only (91 + 10-digit number)
  whatsapp: "910000000000", // TODO: replace with your WhatsApp Business number
  phoneDisplay: "+91 00000 00000", // TODO: replace with the number as you want it shown
  instagram: "https://instagram.com/", // TODO: your Instagram profile link
  facebook: "https://facebook.com/", // TODO: your Facebook page link
  linkedin: "https://linkedin.com/", // TODO: your LinkedIn page link
  // Shown in the footer. A real address and GST number make the business look established.
  city: "", // TODO: e.g. "Hisar, Haryana" (leave empty to hide)
  gstin: "", // TODO: your GSTIN once registered (leave empty to hide)
};

// The person behind the business. A real name and face build more trust than anything else on the site.
export const founder = {
  name: "Founder name", // TODO: your name
  role: "Founder, Shelfkar",
  // TODO: rewrite in your own words. Keep it true and specific.
  story: [
    "I've spent years working with pharma and nutraceutical manufacturers, and I now help run two D2C brands in nutraceuticals and Ayurveda.",
    "Again and again I met people with a great product idea and a ready audience who got stuck on the same things: which factory to trust, what the label must say, and how to make the first sales.",
    "Shelfkar is the team I wish those founders had from day one.",
  ],
};

// Real photos. Put each file in /public/photos/ and set its path here, for example
//   founder: "/photos/founder.jpg"
// Any slot left as null shows a matching illustration instead.
export const photos: {
  founder: string | null;
  factory: string | null;
  packaging: string | null;
  launch: string | null;
} = {
  founder: null, // a clear, well-lit photo of you (square works best)
  factory: null, // a factory visit: production line, lab or packing area
  packaging: null, // samples, labels or finished packs from a brand you worked on
  launch: null, // a product shoot, a marketplace listing or a launch post
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
