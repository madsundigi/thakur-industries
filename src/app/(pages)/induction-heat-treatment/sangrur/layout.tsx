import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Heat Treatment Job Work in Sangrur Punjab | Thakur Industries',
  description: 'Industrial induction hardening services for Sangrur district manufacturers. Shaft hardening, gear hardening & case hardening. Punjab-wide pickup & delivery. Certified hardness testing included.',
  alternates: { canonical: '/induction-heat-treatment/sangrur' },
  openGraph: {
    title: 'Induction Heat Treatment Job Work in Sangrur Punjab | Thakur Industries',
    description: 'Industrial induction hardening for Sangrur district. Shaft, gear & case hardening with Punjab-wide service.',
    url: 'https://thakurindustries.in/induction-heat-treatment/sangrur',
  },
};

export default function SangrurLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
