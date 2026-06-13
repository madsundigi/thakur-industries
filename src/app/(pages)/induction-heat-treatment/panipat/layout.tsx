import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Panipat, Haryana | Thakur Industries';
const DESCRIPTION =
  'Induction hardening in Panipat for textile-machinery shafts, rollers, gears & forging tools — 50–62 HRC, hardness reports, 2–4 day turnaround. Send your drawing for a free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/panipat';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Panipat',
    'heat treatment Panipat',
    'textile machinery hardening Panipat',
    'engineering component hardening Panipat',
    'forging tool hardening Haryana',
    'roller hardening Panipat',
    'shaft hardening Panipat',
    'induction hardening job work Haryana',
  ],
  alternates: { canonical: '/induction-heat-treatment/panipat' },
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

export default function PanipatLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
