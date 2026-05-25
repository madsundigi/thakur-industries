import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Heat Treatment in Dhuri, Sangrur Punjab | Thakur Industries',
  description: 'Industrial induction hardening job work in Dhuri, Sangrur. Surface hardening for gears, shafts & components. Serving Punjab manufacturers with fast, certified heat treatment. Get a quote today.',
  alternates: { canonical: '/induction-heat-treatment/dhuri' },
  openGraph: {
    title: 'Induction Heat Treatment in Dhuri, Sangrur Punjab | Thakur Industries',
    description: 'Industrial induction hardening job work in Dhuri, Sangrur. Surface hardening for gears, shafts & components.',
    url: 'https://thakurindustries.in/induction-heat-treatment/dhuri',
  },
};

export default function DhuriLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
