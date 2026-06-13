import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Samrala, Ludhiana | Thakur';
const DESCRIPTION =
  'Induction hardening in Samrala for agri & small-engineering units on the Ludhiana–Chandigarh route. Just ~30 km from our Ludhiana plant — quick pickup, 58–62 HRC, test reports. Send your drawing for a free quote today.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/samrala';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Samrala',
    'heat treatment Samrala',
    'agricultural component hardening Samrala',
    'engineering component hardening Samrala',
    'induction hardening Ludhiana district',
    'surface hardening Samrala Punjab',
    'shaft hardening Samrala',
    'gear hardening Samrala',
  ],
  alternates: { canonical: '/induction-heat-treatment/samrala' },
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

export default function SamralaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
