import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Hardening Job Work in Jagraon, Ludhiana | Thakur Industries',
  description: 'Expert induction hardening & case hardening services for Jagraon industries. Shaft hardening, gear hardening, bearing race treatment. Punjab-wide pickup & delivery available.',
  alternates: { canonical: '/induction-heat-treatment/jagraon' },
  openGraph: {
    title: 'Induction Hardening Job Work in Jagraon, Ludhiana | Thakur Industries',
    description: 'Expert induction hardening & case hardening for Jagraon industries. Shaft, gear & bearing hardening.',
    url: 'https://thakurindustries.in/induction-heat-treatment/jagraon',
  },
};

export default function JagraonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
