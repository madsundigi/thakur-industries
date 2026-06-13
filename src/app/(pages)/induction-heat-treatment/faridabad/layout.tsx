import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Faridabad, Haryana | Thakur';
const DESCRIPTION =
  'Induction hardening in Faridabad for auto-component OEM suppliers — gears, shafts & crankshafts at 58–62 HRC. Bulk freight from Ludhiana. Get a free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/faridabad';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Faridabad',
    'induction hardening in Faridabad',
    'heat treatment Faridabad',
    'auto component hardening Faridabad',
    'OEM hardening Faridabad',
    'gear hardening Faridabad',
    'shaft hardening Faridabad',
    'crankshaft hardening Faridabad',
    'Tier-1 supplier heat treatment Haryana',
  ],
  alternates: { canonical: '/induction-heat-treatment/faridabad' },
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

export default function FaridabadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
