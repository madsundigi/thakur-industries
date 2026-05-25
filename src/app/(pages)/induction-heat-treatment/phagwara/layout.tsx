import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Heat Treatment in Phagwara, Punjab | Thakur Industries',
  description: 'Precision induction hardening job work for Phagwara & Kapurthala industries. Gear hardening, shaft hardening, bearing race treatment. Quick turnaround & certified hardness reports.',
  alternates: { canonical: '/induction-heat-treatment/phagwara' },
  openGraph: {
    title: 'Induction Heat Treatment in Phagwara, Punjab | Thakur Industries',
    description: 'Precision induction hardening for Phagwara & Kapurthala industries. Gear, shaft & bearing hardening.',
    url: 'https://thakurindustries.in/induction-heat-treatment/phagwara',
  },
};

export default function PhagwaraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
