import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Heat Treatment Services in Nawanshahr Punjab | Thakur Industries',
  description: 'Industrial induction hardening job work for Nawanshahr & SBS Nagar manufacturers. Gear hardening, shaft hardening & case hardening for Punjab industries. Fast turnaround, certified reports.',
  alternates: { canonical: '/induction-heat-treatment/nawanshahr' },
  openGraph: {
    title: 'Induction Heat Treatment Services in Nawanshahr Punjab | Thakur Industries',
    description: 'Industrial induction hardening for Nawanshahr & SBS Nagar. Gear, shaft & case hardening for Punjab industries.',
    url: 'https://thakurindustries.in/induction-heat-treatment/nawanshahr',
  },
};

export default function NawanshahrLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
