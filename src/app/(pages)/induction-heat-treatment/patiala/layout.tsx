import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Hardening Job Work in Patiala Punjab | Thakur Industries',
  description: 'Expert induction heat treatment & hardening services for Patiala\'s industrial sector. Surface hardening for gears, shafts & crankshafts. Workshop & mobile on-site service. Call for a fast quote.',
  alternates: { canonical: '/induction-heat-treatment/patiala' },
  openGraph: {
    title: 'Induction Hardening Job Work in Patiala Punjab | Thakur Industries',
    description: 'Expert induction heat treatment for Patiala\'s industrial sector. Surface hardening for gears, shafts & crankshafts.',
    url: 'https://thakurindustries.in/induction-heat-treatment/patiala',
  },
};

export default function PatialaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
