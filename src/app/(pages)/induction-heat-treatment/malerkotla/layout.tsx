import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Hardening Job Work in Malerkotla Punjab | Thakur Industries',
  description: 'Precision induction hardening services for Malerkotla\'s steel & engineering industries. Shaft hardening, gear hardening & bearing heat treatment. Mobile on-site service available in Punjab.',
  alternates: { canonical: '/induction-heat-treatment/malerkotla' },
  openGraph: {
    title: 'Induction Hardening Job Work in Malerkotla Punjab | Thakur Industries',
    description: 'Precision induction hardening for Malerkotla\'s steel & engineering industries. Shaft, gear & bearing hardening.',
    url: 'https://thakurindustries.in/induction-heat-treatment/malerkotla',
  },
};

export default function MalerkotlaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
