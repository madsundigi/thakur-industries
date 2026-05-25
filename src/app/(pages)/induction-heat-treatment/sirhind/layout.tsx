import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Hardening Services in Sirhind, Punjab | Thakur Industries',
  description: 'Precision induction hardening & case hardening job work for Sirhind & Fatehgarh Sahib industries. Gear, shaft & bearing hardening. Mobile on-site service available. Fast certified reports.',
  alternates: { canonical: '/induction-heat-treatment/sirhind' },
  openGraph: {
    title: 'Induction Hardening Services in Sirhind, Punjab | Thakur Industries',
    description: 'Precision induction hardening for Sirhind & Fatehgarh Sahib industries. Gear, shaft & bearing hardening with mobile service.',
    url: 'https://thakurindustries.in/induction-heat-treatment/sirhind',
  },
};

export default function SirhindLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
