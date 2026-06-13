import type { Metadata } from 'next';

const TITLE = 'Induction Hardening in Malerkotla, Punjab | Thakur';
const DESCRIPTION =
  'Induction hardening in Malerkotla for agricultural tools, hand tools, dies & textile machinery parts — 58–62 HRC, just ~55 km from our Ludhiana facility. Send your drawing for a free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/malerkotla';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening Malerkotla',
    'heat treatment Malerkotla',
    'hand tool hardening Malerkotla',
    'agricultural tool hardening Malerkotla',
    'die hardening Malerkotla',
    'textile machinery parts hardening',
    'induction hardening job work Punjab',
    'shaft and gear hardening Sangrur',
  ],
  alternates: { canonical: '/induction-heat-treatment/malerkotla' },
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

export default function MalerkotlaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
