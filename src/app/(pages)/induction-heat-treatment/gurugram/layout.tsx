import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Gurugram, Haryana | Thakur';
const DESCRIPTION =
  'Induction hardening in Gurugram for Maruti-belt automotive OEMs & ancillary suppliers — traceable hardness reports, bulk capacity, 55–62 HRC. Freight & consignment service from our Ludhiana facility. Request a Gurugram quote today.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/gurugram';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Gurugram',
    'heat treatment Gurgaon',
    'automotive OEM component hardening Gurugram',
    'induction hardening Gurgaon Haryana',
    'gear hardening Gurugram',
    'shaft hardening Gurgaon',
    'precision component hardening Gurugram',
    'Maruti supplier heat treatment',
  ],
  alternates: { canonical: '/induction-heat-treatment/gurugram' },
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

export default function GurugramLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
