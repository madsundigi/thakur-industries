import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Heat Treatment Services in Khanna Punjab | Thakur Industries',
  description: 'Induction hardening & heat treatment job work for industries in Khanna, Punjab. Serving manufacturing units near Ludhiana & Fatehgarh Sahib. Certified hardness reports. Get a quote today.',
  alternates: { canonical: '/induction-heat-treatment/khanna' },
  openGraph: {
    title: 'Induction Heat Treatment Services in Khanna Punjab | Thakur Industries',
    description: 'Induction hardening & heat treatment job work for industries in Khanna. Serving Punjab manufacturers near Ludhiana.',
    url: 'https://thakurindustries.in/induction-heat-treatment/khanna',
  },
};

export default function KhannaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
