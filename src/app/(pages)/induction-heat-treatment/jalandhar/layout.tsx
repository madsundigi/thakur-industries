import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Hardening Services in Jalandhar Punjab | Thakur Industries',
  description: 'Professional induction heat treatment & hardening job work for Jalandhar\'s engineering, auto parts & sports goods industries. Workshop & mobile on-site service available.',
  alternates: { canonical: '/induction-heat-treatment/jalandhar' },
  openGraph: {
    title: 'Induction Hardening Services in Jalandhar Punjab | Thakur Industries',
    description: 'Professional induction heat treatment for Jalandhar\'s engineering & auto parts industries. Workshop & on-site service.',
    url: 'https://thakurindustries.in/induction-heat-treatment/jalandhar',
  },
};

export default function JalandharLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
