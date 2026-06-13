import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Mandi Gobindgarh | Thakur Industries';
const DESCRIPTION =
  'Induction hardening in Mandi Gobindgarh, India’s Steel Town — mill rolls, forged shafts & gears hardened to 58–62 HRC. Pickup from Ludhiana. Get a quote today.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/mandi-gobindgarh';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Mandi Gobindgarh',
    'heat treatment Mandi Gobindgarh',
    'hardening job work Mandi Gobindgarh',
    'rolling mill roll hardening',
    'forged shaft hardening Mandi Gobindgarh',
    'steel town heat treatment Punjab',
  ],
  alternates: { canonical: '/induction-heat-treatment/mandi-gobindgarh' },
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

export default function MandiGobindgarhLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
