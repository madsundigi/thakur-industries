import type { Metadata } from 'next';

const TITLE = 'Gear Hardening Services in Ludhiana | 58–62 HRC | Thakur Industries';
const DESCRIPTION =
  'Precision induction gear hardening job work in Ludhiana, Punjab — 58–62 HRC, controlled case depth for spur, helical, bevel & ring gears. ISO process, 2–4 day turnaround. Send your drawing for a free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/induction-hardening-gears-ludhiana';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'gear hardening services Ludhiana',
    'induction gear hardening',
    'gear tooth hardening job work',
    'pinion hardening Punjab',
    'spur gear hardening',
    'helical gear hardening Ludhiana',
    'EN24 gear hardening',
    'gear hardening rate per kg',
    'heat treatment for gears Ludhiana',
  ],
  alternates: { canonical: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
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

export default function GearHardeningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
