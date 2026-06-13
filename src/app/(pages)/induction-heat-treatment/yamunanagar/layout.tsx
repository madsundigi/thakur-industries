import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Yamunanagar, Haryana | Thakur';
const DESCRIPTION =
  'Induction hardening in Yamunanagar, Haryana — rollers, shafts, blades & gears for plywood & paper-mill machinery hardened to 58–62 HRC. Free quote, Ludhiana pickup.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/yamunanagar';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Yamunanagar',
    'heat treatment Yamunanagar',
    'plywood machinery hardening Yamunanagar',
    'paper mill machinery hardening Yamunanagar',
    'roller hardening Yamunanagar',
    'shaft hardening Yamunanagar Haryana',
    'hardening job work Yamunanagar',
  ],
  alternates: { canonical: '/induction-heat-treatment/yamunanagar' },
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

export default function YamunanagarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
