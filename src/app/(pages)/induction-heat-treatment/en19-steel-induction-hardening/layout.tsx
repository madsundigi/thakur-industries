import type { Metadata } from 'next';

const TITLE = 'EN19 Steel Induction Hardening Job Work | 55-62 HRC | Thakur';
const DESCRIPTION =
  'EN19 steel hardening job work in Ludhiana, Punjab — 709M40 / AISI 4140 Cr-Mo alloy hardened to 55–62 HRC with 1–3 mm case depth. Certified reports, 2–4 day turnaround. Send your drawing for a free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/en19-steel-induction-hardening';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'EN19 steel hardening job work',
    'EN19 hardening',
    'EN19 induction hardening',
    '709M40',
    'EN19 is 4140',
    'EN19 vs 4140',
    'AISI 4140 hardening',
    '42CrMo4 hardening',
    'Cr-Mo alloy steel hardening',
    'EN19 hardening Ludhiana',
    'EN19 hardness HRC',
  ],
  alternates: { canonical: '/induction-heat-treatment/en19-steel-induction-hardening' },
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

export default function EN19SteelHardeningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
