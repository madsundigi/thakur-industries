import type { Metadata } from 'next';

const TITLE = 'Shaft Hardening Job Work in Ludhiana | 52-60 HRC | Thakur Industries';
const DESCRIPTION =
  'Induction shaft hardening job work in Ludhiana, Punjab — 52-60 HRC, 1-5 mm case depth for transmission shafts, axles & splined shafts in EN8/EN19/EN24/4140. Send your drawing for a free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/induction-hardening-shafts-ludhiana';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'shaft hardening job work Ludhiana',
    'induction shaft hardening',
    'transmission shaft hardening',
    'axle hardening Punjab',
    'splined shaft hardening',
    'EN19 shaft hardening',
    'EN24 shaft hardening',
    'shaft hardening rate per kg',
    'heat treatment for shafts Ludhiana',
  ],
  alternates: { canonical: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
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

export default function ShaftHardeningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
