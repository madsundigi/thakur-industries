import type { Metadata } from 'next';

const TITLE = '4140 Steel Hardening Service in India | 54-60 HRC | Thakur';
const DESCRIPTION =
  'AISI 4140 steel hardening service in India — 54–60 HRC induction hardening for OEM & export manufacturers. EN19 / 42CrMo4 / SCM440, certified HRC reports, 2–4 day turnaround. Get a free quote today.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/4140-steel-hardening';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    '4140 steel hardening service India',
    '4140 hardening',
    'AISI 4140 induction hardening',
    '42CrMo4',
    'SCM440',
    '4140 is EN19',
    'EN19 steel hardening',
    '4140 steel hardening OEM export',
    'chromium molybdenum steel hardening',
    '4140 hardening cost India',
  ],
  alternates: { canonical: '/induction-heat-treatment/4140-steel-hardening' },
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

export default function Steel4140Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
