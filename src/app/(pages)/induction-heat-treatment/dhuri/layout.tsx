import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Dhuri, Punjab | Thakur Industries';
const DESCRIPTION =
  'Induction hardening in Dhuri, Punjab for rice-sheller rollers, railway-workshop parts & agri-implement components. Job work from our Ludhiana plant (~70 km), 58–62 HRC, certified. Send your drawing for a free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/dhuri';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Dhuri',
    'heat treatment Dhuri',
    'rice sheller roller hardening',
    'agricultural implement hardening Dhuri',
    'railway workshop component hardening',
    'surface hardening Sangrur',
    'induction hardening Punjab',
    'gear and shaft hardening Dhuri',
  ],
  alternates: { canonical: '/induction-heat-treatment/dhuri' },
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

export default function DhuriLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
