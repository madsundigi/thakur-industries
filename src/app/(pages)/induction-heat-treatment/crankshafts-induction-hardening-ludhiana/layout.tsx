import type { Metadata } from 'next';

const TITLE = 'Crankshaft Hardening Service in Punjab | 50-58 HRC | Thakur';
const DESCRIPTION =
  'Selective crankshaft hardening service in Punjab — journals & crankpins to 50-58 HRC on EN24, 4340 & EN9, with copper masking and tight straightness control. Send your drawing for a free quote in 24 hrs.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/crankshafts-induction-hardening-ludhiana';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'crankshaft hardening service Punjab',
    'crankshaft induction hardening Ludhiana',
    'crankshaft journal hardening',
    'crankpin hardening',
    'EN24 crankshaft hardening',
    '4340 crankshaft hardening',
    'selective induction hardening crankshaft',
    'crankshaft hardening rate',
    'engine crankshaft heat treatment Punjab',
  ],
  alternates: { canonical: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
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

export default function CrankshaftHardeningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
