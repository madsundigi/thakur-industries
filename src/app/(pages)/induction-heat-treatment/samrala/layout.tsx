import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Hardening Services in Samrala, Ludhiana | Thakur Industries',
  description: 'Induction heat treatment & hardening job work for Samrala area industries. Surface hardening for automotive & industrial components. Serving Ludhiana district with fast delivery.',
  alternates: { canonical: '/induction-heat-treatment/samrala' },
  openGraph: {
    title: 'Induction Hardening Services in Samrala, Ludhiana | Thakur Industries',
    description: 'Induction heat treatment for Samrala area industries. Surface hardening for automotive & industrial components.',
    url: 'https://thakurindustries.in/induction-heat-treatment/samrala',
  },
};

export default function SamralaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
