import { whatsappLink } from "@/site.config";

// Floating WhatsApp button, shown on every page. Most Indian founders prefer
// a quick WhatsApp message to filling in a form.
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi, I'd like to know more about launching my brand with Shelfkar.")}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-3 font-semibold text-white shadow-[0_6px_20px_rgba(46,35,33,0.22)] hover:bg-ink-soft"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path
          d="M4 20l1.3-3.9A8 8 0 1 1 8.1 19L4 20z"
          strokeLinejoin="round"
        />
        <path d="M9 10.5c.5 1.6 1.9 3 3.5 3.5l1.2-1 1.8.8-.3 1.6c-3.3.2-6.9-3.4-6.7-6.7l1.6-.3.8 1.8-1 1.2" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}
