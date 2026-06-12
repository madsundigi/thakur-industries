import type { Metadata } from 'next';

const TITLE = 'Induction Hardening Services in Ludhiana | 52–62 HRC | Thakur Industries';
const DESCRIPTION =
  'Induction hardening services in Ludhiana, Punjab — 52–62 HRC for gears, shafts, crankshafts & bearings. ISO process, 2–4 day turnaround, zero distortion. Send your drawing for a free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening services in Ludhiana',
    'induction heat treatment Ludhiana',
    'surface hardening Punjab',
    'gear hardening job work Ludhiana',
    'shaft hardening services',
    'crankshaft induction hardening',
    'EN8 EN19 EN24 hardening',
    'induction hardening rate per kg',
    'localized hardening Ludhiana',
  ],
  alternates: { canonical: '/induction-heat-treatment' },
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

export default function InductionHeatTreatmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
