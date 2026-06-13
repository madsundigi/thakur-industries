import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Sirhind, Punjab | Thakur Industries';
const DESCRIPTION =
  'Induction hardening in Sirhind & Fatehgarh Sahib for agri, food-processing & engineering units — 58–62 HRC, certified reports, ~65 km from Ludhiana. Free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/sirhind';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Sirhind',
    'heat treatment Fatehgarh Sahib',
    'agri hardening Sirhind',
    'engineering hardening Sirhind',
    'gear hardening Sirhind',
    'shaft hardening Fatehgarh Sahib',
    'induction hardening Mandi Gobindgarh',
    'case hardening job work Sirhind',
  ],
  alternates: { canonical: '/induction-heat-treatment/sirhind' },
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

export default function SirhindLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
