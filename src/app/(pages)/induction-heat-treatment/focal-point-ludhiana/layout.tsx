import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Hardening in Focal Point Ludhiana | Thakur Industries',
  description: 'Induction hardening & heat treatment job work for Focal Point Ludhiana industries. Punjab\'s largest industrial zone — gear hardening, shaft hardening & case hardening. Fast pickup & delivery. Call +91 7900000776.',
  alternates: { canonical: '/induction-heat-treatment/focal-point-ludhiana' },
  openGraph: {
    title: 'Induction Hardening in Focal Point Ludhiana | Thakur Industries',
    description: 'Heat treatment & induction hardening for Focal Point Ludhiana — Punjab\'s biggest industrial zone. Fast service.',
    url: 'https://thakurindustries.in/induction-heat-treatment/focal-point-ludhiana',
  },
};

export default function FocalPointLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
