import Link from "next/link";
import { nav, site, whatsappLink } from "@/site.config";

export function SiteHeader() {
  return (
    <header className="border-b border-mist bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75 sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4">
        <Link href="/" className="font-display text-lg font-bold tracking-tight text-ink">
          {site.name}
        </Link>
        <nav aria-label="Main" className="order-3 w-full sm:order-none sm:w-auto">
          <ul className="flex gap-5 overflow-x-auto text-[15px] text-ink-soft">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="whitespace-nowrap hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={whatsappLink("Hi, I'd like to know more about launching my brand.")}
          className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-white hover:bg-ink-soft"
        >
          Chat on WhatsApp
        </a>
      </div>
    </header>
  );
}
