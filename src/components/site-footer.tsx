import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav, site } from "@/site.config";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-mist">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3">
        <div>
          <Logo reversed />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{site.tagline}</p>
          {(site.city || site.gstin) && (
            <p className="mt-4 space-y-1 text-sm">
              {site.city && <span className="block">{site.city}, India</span>}
              {site.gstin && <span className="block">GSTIN {site.gstin}</span>}
            </p>
          )}
        </div>
        <nav aria-label="Footer">
          <p className="text-sm font-bold text-white">Pages</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-bold text-white">Get in touch</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>{site.phoneDisplay}</li>
            <li className="flex gap-4 pt-2">
              <a href={site.instagram} className="hover:text-white">
                Instagram
              </a>
              <a href={site.facebook} className="hover:text-white">
                Facebook
              </a>
              <a href={site.linkedin} className="hover:text-white">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-5 text-center text-xs text-mist/70">
        Product claims on client brands follow FSSAI, AYUSH and cosmetic labelling rules. We do not market
        prescription medicines.
      </p>
    </footer>
  );
}
