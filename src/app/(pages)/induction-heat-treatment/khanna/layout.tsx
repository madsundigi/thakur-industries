import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Khanna, Punjab | Thakur Industries';
const DESCRIPTION =
  'Induction hardening in Khanna, Punjab — 58–62 HRC job work for rice-mill rollers, sheller parts & agricultural-implement components. Just ~40 km from our Ludhiana plant for same-day pickup. Send your drawing for a free quote today.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/khanna';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Khanna',
    'heat treatment Khanna',
    'rice mill roller hardening Khanna',
    'agricultural implement hardening Khanna',
    'induction hardening near Khanna grain market',
    'shaft hardening Khanna Punjab',
    'heat treatment job work Khanna',
  ],
  alternates: { canonical: '/induction-heat-treatment/khanna' },
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

export default function KhannaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
