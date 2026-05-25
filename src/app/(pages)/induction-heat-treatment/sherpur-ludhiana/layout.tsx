import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Hardening in Sherpur, Ludhiana | Thakur Industries',
  description: 'Induction hardening & heat treatment job work for industries in Sherpur, Ludhiana. Gear hardening, shaft hardening, case hardening for Sherpur industrial area manufacturers. Call +91 7900000776.',
  alternates: { canonical: '/induction-heat-treatment/sherpur-ludhiana' },
  openGraph: {
    title: 'Induction Hardening in Sherpur, Ludhiana | Thakur Industries',
    description: 'Heat treatment & induction hardening job work for Sherpur industrial area, Ludhiana. Fast pickup & delivery.',
    url: 'https://thakurindustries.in/induction-heat-treatment/sherpur-ludhiana',
  },
};

export default function SherpurLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
