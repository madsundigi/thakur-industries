import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Patiala, Punjab | Thakur Industries';
const DESCRIPTION =
  'Induction hardening in Patiala for auto parts, agricultural machinery & light-engineering units — gears, shafts & implement parts hardened to 58–62 HRC. Scheduled pickup from our Ludhiana facility (~95 km). Send your drawing for a free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/patiala';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Patiala',
    'induction hardening in Patiala',
    'heat treatment Patiala',
    'auto parts hardening Patiala',
    'agri parts hardening Patiala',
    'agricultural machinery hardening Patiala',
    'gear hardening Patiala',
    'shaft hardening Patiala',
    'induction hardening Punjab',
  ],
  alternates: { canonical: '/induction-heat-treatment/patiala' },
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

export default function PatialaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
