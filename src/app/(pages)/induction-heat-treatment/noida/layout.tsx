import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Noida | Thakur Industries';
const DESCRIPTION =
  'Induction hardening in Noida & Greater Noida for auto-component, electronics and precision-engineering units — 58–62 HRC, certified Rockwell reports, bulk freight from our Ludhiana plant. Send your drawing for a free quote today.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/noida';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Noida',
    'induction hardening in Noida',
    'heat treatment Noida Greater Noida',
    'auto component hardening Noida',
    'precision hardening Noida',
    'gear hardening Noida',
    'shaft hardening Greater Noida',
    'induction hardening job work Noida',
  ],
  alternates: { canonical: '/induction-heat-treatment/noida' },
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

export default function NoidaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
