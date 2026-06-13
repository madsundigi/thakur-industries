import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Jagraon, Ludhiana | Thakur';
const DESCRIPTION =
  'Induction hardening in Jagraon for agri-implement, hosiery-machinery & auto-parts units. Just ~35 km from our Ludhiana plant — same-district pickup & delivery. Send your drawing for a free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/jagraon';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Jagraon',
    'heat treatment Jagraon',
    'agri implement hardening Jagraon',
    'auto parts hardening Jagraon',
    'hosiery machinery hardening Jagraon',
    'induction hardening Ludhiana district',
    'gear and shaft hardening Jagraon',
  ],
  alternates: { canonical: '/induction-heat-treatment/jagraon' },
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

export default function JagraonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
