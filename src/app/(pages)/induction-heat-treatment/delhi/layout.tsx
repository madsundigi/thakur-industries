import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Delhi | Thakur Industries';
const DESCRIPTION =
  'Induction hardening in Delhi for engineering, auto-parts and manufacturing units in Wazirpur, Okhla & Mayapuri. 58–62 HRC job work, served via freight from our Ludhiana facility. Send your drawing for a free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/delhi';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Delhi',
    'heat treatment Delhi',
    'auto parts hardening Delhi NCR',
    'engineering component hardening Delhi',
    'induction hardening Wazirpur Okhla Mayapuri',
    'gear hardening Delhi',
    'shaft hardening Delhi NCR',
  ],
  alternates: { canonical: '/induction-heat-treatment/delhi' },
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

export default function DelhiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
