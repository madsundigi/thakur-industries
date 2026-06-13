import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Ambala, Haryana | Thakur Industries';
const DESCRIPTION =
  'Induction hardening in Ambala for scientific-instrument, mixer-grinder & auto-component parts — 45–62 HRC with certified reports. Scheduled freight pickup ~110 km from Ludhiana, 2–4 day turnaround. Send your drawing for a free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/ambala';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Ambala',
    'heat treatment Ambala',
    'scientific instrument parts hardening Ambala',
    'auto parts hardening Ambala',
    'mixer grinder parts hardening Ambala',
    'induction hardening Ambala Cantt',
    'shaft hardening Ambala',
    'gear hardening Ambala Haryana',
  ],
  alternates: { canonical: '/induction-heat-treatment/ambala' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'Thakur Industries',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AmbalaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
