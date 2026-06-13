import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Jalandhar, Punjab | Thakur Industries';
const DESCRIPTION =
  'Induction hardening in Jalandhar for hand tools, implement parts, dies & fittings — 58–62 HRC, certified reports, fast pickup from Ludhiana. Get a free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/jalandhar';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Jalandhar',
    'heat treatment Jalandhar',
    'hand tool hardening Jalandhar',
    'agri implement hardening Jalandhar',
    'induction hardening in Jalandhar',
    'die hardening Jalandhar',
    'pipe fitting hardening Punjab',
    'sports goods component hardening Jalandhar',
  ],
  alternates: { canonical: '/induction-heat-treatment/jalandhar' },
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

export default function JalandharLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
