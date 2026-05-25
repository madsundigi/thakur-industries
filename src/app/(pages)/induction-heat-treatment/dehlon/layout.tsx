import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Hardening Services in Dehlon, Ludhiana | Thakur Industries',
  description: 'Precision induction hardening & heat treatment job work for industries in Dehlon & surrounding Ludhiana areas. Gear, shaft & bearing hardening with fast turnaround. Call +91 7900000776.',
  alternates: { canonical: '/induction-heat-treatment/dehlon' },
  openGraph: {
    title: 'Induction Hardening Services in Dehlon, Ludhiana | Thakur Industries',
    description: 'Precision induction hardening & heat treatment job work for industries in Dehlon & Ludhiana. Gear, shaft & bearing hardening.',
    url: 'https://thakurindustries.in/induction-heat-treatment/dehlon',
  },
};

export default function DehalonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
