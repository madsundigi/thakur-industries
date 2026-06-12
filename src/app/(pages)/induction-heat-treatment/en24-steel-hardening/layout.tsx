import type { Metadata } from 'next';

const TITLE = 'EN24 Steel Hardening Job Work | 55-62 HRC | Thakur Industries';
const DESCRIPTION =
  'EN24 steel hardening job work in Ludhiana, Punjab — 55-62 HRC, 0.5-3mm case depth on 817M40 / SAE 4340 Ni-Cr-Mo alloy. Certified reports, 2-4 day turnaround. Send your drawing for a free quote today.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/en24-steel-hardening';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'EN24 steel hardening job work',
    'EN24 hardening',
    '817M40',
    '4340 hardening',
    'EN24 induction hardening',
    'EN24 steel heat treatment Ludhiana',
    'SAE 4340 hardening Punjab',
    'EN24 shaft hardening',
    'Ni-Cr-Mo alloy hardening',
    'EN24 hardness HRC',
  ],
  alternates: { canonical: '/induction-heat-treatment/en24-steel-hardening' },
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

export default function EN24SteelHardeningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
