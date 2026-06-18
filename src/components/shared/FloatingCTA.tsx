// Sitewide floating Call + WhatsApp CTA — visible on every page, mobile + desktop.
// Pure static markup (no hooks). Clicks are tracked globally by ConversionTracker.
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { SITE_PHONE_NUMBER } from '@/lib/constants';

// Computed once at module load
const phoneDigits = SITE_PHONE_NUMBER.replace(/\D/g, '');
const waMessage = encodeURIComponent(
  'Hello, I need induction hardening / heat treatment job work. Please share details and rates.'
);
const whatsappUrl = `https://wa.me/${phoneDigits}?text=${waMessage}`;
const telUrl = `tel:+${phoneDigits}`;

const pill =
  'group flex items-center gap-2.5 rounded-full px-4 py-3 shadow-lg ring-1 ring-black/5 ' +
  'transition-all duration-300 hover:scale-105 active:scale-95';

export function FloatingCTA() {
  return (
    <div
      // Left side keeps it clear of the Tawk.to chat widget (bottom-right).
      // Raised on mobile (bottom-24) to clear the mobile sticky CTA bar; bottom-6 on desktop.
      className="fixed left-4 bottom-24 z-50 flex flex-col gap-3 md:left-6 md:bottom-6"
    >
      {/* WhatsApp */}
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp for an induction hardening enquiry"
        className={`${pill} bg-[#25D366] text-white shadow-[#25D366]/40 hover:bg-[#1ebe5d]`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 fill-white"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="text-sm font-black uppercase italic tracking-tight whitespace-nowrap">
          WhatsApp
        </span>
      </Link>

      {/* Call */}
      <a
        href={telUrl}
        aria-label="Call Thakur Industries for an induction hardening enquiry"
        className={`${pill} bg-primary text-primary-foreground shadow-primary/40 hover:bg-primary/90`}
      >
        <Phone className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span className="text-sm font-black uppercase italic tracking-tight whitespace-nowrap">
          Call Now
        </span>
      </a>
    </div>
  );
}
