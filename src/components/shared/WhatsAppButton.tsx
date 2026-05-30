// No 'use client' needed — pure static markup, no hooks or browser APIs
import Link from 'next/link';
import { SITE_PHONE_NUMBER } from '@/lib/constants';

// Computed once at module load — never rebuilt on re-render
const phoneDigits = SITE_PHONE_NUMBER.replace(/\D/g, '');
const waMessage = encodeURIComponent(
  'Hello, I need induction hardening / heat treatment job work. Please share details and rates.'
);
const whatsappUrl = `https://wa.me/${phoneDigits}?text=${waMessage}`;

export function WhatsAppButton() {
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp for induction hardening job work enquiry"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group"
      style={{ boxShadow: '0 4px 24px rgba(37,211,102,0.45)' }}
    >
      <span className="flex items-center gap-2 px-4 py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 shrink-0 fill-white"
          aria-hidden="true"
        >
          <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.137.561 4.234 1.627 6.08L4 29l8.13-1.607A12.94 12.94 0 0 0 16.002 28C22.63 28 28 22.627 28 16.002 28 8.373 22.63 3 16.002 3zm0 23.6a10.54 10.54 0 0 1-5.39-1.483l-.387-.23-4.826.953.974-4.723-.252-.4A10.57 10.57 0 0 1 4.4 15.002C4.4 8.594 9.594 3.4 16.002 3.4S27.6 8.594 27.6 15.002 22.41 26.6 16.002 26.6zm5.811-7.883c-.317-.16-1.877-.927-2.168-1.032-.29-.106-.502-.16-.713.16-.211.317-.818 1.032-.101 1.244.317.106 2.1 1.015 2.417 1.175.317.159.528.125.713-.08.185-.206.74-.927.9-1.244.159-.316.053-.487-.264-.647-.317-.16-.317-.16 0 0zm-5.81 7.23c-5.47 0-9.924-4.454-9.924-9.924 0-2.173.707-4.184 1.9-5.81l-.001-.001 1.27-1.88c.88-1.303 2.3-2.09 3.85-2.09.492 0 .984.078 1.455.233l.001.001c1.55.513 2.62 1.944 2.62 3.57 0 .6-.148 1.19-.428 1.717l-.001.001-.712 1.39a.8.8 0 0 0-.043.614l.001.001c.16.476.487 1.323.893 2.105.406.782.882 1.47 1.296 1.742.16.105.345.158.53.158.186 0 .37-.053.53-.158l.001-.001 1.44-.96c.476-.317 1.058-.423 1.614-.3.556.123 1.058.476 1.375.98l.001.001c.528.845.528 1.904 0 2.75l-.001.001c-.633.975-1.693 1.56-2.83 1.56z" />
        </svg>
        <span className="text-sm font-bold tracking-wide whitespace-nowrap pr-1">
          Get a Quote
        </span>
      </span>
    </Link>
  );
}
