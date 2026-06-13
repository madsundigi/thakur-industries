import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Sangrur, Punjab | Thakur Industries';
const DESCRIPTION =
  'Induction hardening in Sangrur for agricultural machinery, cycle parts & light-engineering components. Scheduled pickup from our Ludhiana facility (~75 km), 58–62 HRC, certified hardness reports. Send your drawing for a free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/sangrur';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Sangrur',
    'heat treatment Sangrur',
    'agri machinery hardening Sangrur',
    'induction hardening in Sangrur',
    'gear hardening Sangrur',
    'shaft hardening Sangrur Punjab',
    'cycle parts hardening Sangrur',
  ],
  alternates: { canonical: '/induction-heat-treatment/sangrur' },
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

export default function SangrurLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
