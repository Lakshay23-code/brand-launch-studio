// Edit this file to change the business name, contact details and links
// everywhere on the site.

export const site = {
  name: "Brand Launch Studio", // TODO: replace with your final business name
  tagline: "We launch nutraceutical, skincare and wellness brands for first-time founders.",
  description:
    "Verified manufacturers, compliant packaging, brand story, website and marketing for new nutraceutical, skincare and wellness brands in India. Launch your brand in about 60 days.",
  url: "https://brand-launch-studio.vercel.app", // TODO: replace with your domain once it's live
  email: "hello@example.com", // TODO: replace with your business email
  // WhatsApp number in international format, digits only (91 + 10-digit number)
  whatsapp: "910000000000", // TODO: replace with your WhatsApp Business number
  phoneDisplay: "+91 00000 00000", // TODO: replace with the number as you want it shown
  instagram: "https://instagram.com/", // TODO: your Instagram profile link
  facebook: "https://facebook.com/", // TODO: your Facebook page link
  linkedin: "https://linkedin.com/", // TODO: your LinkedIn page link
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
