import type { Metadata } from 'next';

const TITLE = 'Heat Treatment Job Work in Ludhiana | 50–62 HRC | Thakur Industries';
const DESCRIPTION =
  'Heat treatment job work in Ludhiana, Punjab — induction hardening of shafts, gears, axles & steel parts to 50–62 HRC. Per-kg rates, 2–4 day turnaround. Send your drawing for a free quote.';
const URL = 'https://thakurindustries.in/heat-treatment-job-work';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'heat treatment job work Ludhiana',
    'induction hardening Ludhiana',
    'heat treatment services Punjab',
    'shaft hardening job work',
    'gear hardening Ludhiana',
    'case hardening job work',
    'surface hardening Ludhiana',
    'heat treatment rate per kg',
    'EN24 heat treatment Ludhiana',
  ],
  alternates: { canonical: '/heat-treatment-job-work' },
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

export default function HeatTreatmentJobWorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
