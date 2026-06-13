import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Nawanshahr, Punjab | Thakur';
const DESCRIPTION =
  'Induction hardening in Nawanshahr (SBS Nagar) for agri-implement & engineering units — tines, blades, shafts & gears at 58–62 HRC. Just ~50 km from Ludhiana. Send your drawing for a free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/nawanshahr';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Nawanshahr',
    'heat treatment Nawanshahr SBS Nagar',
    'agri implement hardening',
    'tine hardening Nawanshahr',
    'shaft hardening Shaheed Bhagat Singh Nagar',
    'gear hardening Nawanshahr Punjab',
    'induction hardening near Banga Phagwara',
  ],
  alternates: { canonical: '/induction-heat-treatment/nawanshahr' },
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

export default function NawanshahrLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
