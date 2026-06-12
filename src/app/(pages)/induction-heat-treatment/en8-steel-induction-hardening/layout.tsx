import type { Metadata } from 'next';

const TITLE = 'EN8 Steel Induction Hardening Job Work | 52-58 HRC | Thakur';
const DESCRIPTION =
  'EN8 steel hardening job work in Ludhiana, Punjab — 52-58 HRC, 1-3 mm case depth on shafts, gears, axles & spindles. Certified Rockwell reports, 2-4 day turnaround. Send your drawing for a free EN8 induction hardening quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/en8-steel-induction-hardening';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'EN8 steel hardening job work',
    'EN8 hardening',
    '080M40 hardening',
    'EN8 induction hardening Ludhiana',
    'EN8 induction hardening',
    'EN8 080M40 heat treatment',
    'EN8 shaft hardening',
    'EN8 hardening rate',
    'medium carbon steel hardening Punjab',
  ],
  alternates: { canonical: '/induction-heat-treatment/en8-steel-induction-hardening' },
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

export default function EN8HardeningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
