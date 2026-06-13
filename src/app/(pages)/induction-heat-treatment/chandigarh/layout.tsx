import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Chandigarh | Thakur Industries';
const DESCRIPTION =
  'Induction hardening in Chandigarh for the Mohali & Dera Bassi auto-parts and light-engineering belt — 45–62 HRC with certified reports. Scheduled pickup ~100 km from Ludhiana, 2–4 day turnaround. Send your drawing for a free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/chandigarh';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Chandigarh',
    'heat treatment Chandigarh Mohali',
    'auto parts hardening tricity',
    'engineering parts hardening Chandigarh',
    'induction hardening Mohali Dera Bassi',
    'shaft hardening Chandigarh',
    'gear hardening Chandigarh',
    'case hardening Chandigarh Panchkula',
  ],
  alternates: { canonical: '/induction-heat-treatment/chandigarh' },
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

export default function ChandigarhLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
