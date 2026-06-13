import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Sherpur, Ludhiana | Thakur';
const DESCRIPTION =
  'Induction hardening in Sherpur, Ludhiana — minutes from the auto-parts, cycle-parts & fastener units, enabling same-day pickup. Gear, shaft & case hardening with HRC reports. Call +91 7900000776.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/sherpur-ludhiana';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Sherpur Ludhiana',
    'heat treatment Sherpur',
    'auto parts hardening Ludhiana',
    'cycle parts hardening Ludhiana',
    'fastener hardening Sherpur',
    'gear hardening Sherpur Ludhiana',
    'shaft hardening Sherpur',
    'case hardening Sherpur Ludhiana',
  ],
  alternates: { canonical: '/induction-heat-treatment/sherpur-ludhiana' },
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

export default function SherpurLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
