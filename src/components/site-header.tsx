import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav, site } from "@/site.config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-petal bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-4">
        <Link href="/" aria-label={`${site.name} home`} className="py-1">
          <Logo />
        </Link>
        <nav aria-label="Main" className="order-3 w-full md:order-none md:w-auto">
          <ul className="flex gap-6 overflow-x-auto text-[15px] text-ink-soft">
            {nav
              .filter((item) => item.href !== "/contact")
              .map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="whitespace-nowrap hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/contact"
          className="rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-ink-soft"
        >
          Book a free call
        </Link>
      </div>
    </header>
  );
}
