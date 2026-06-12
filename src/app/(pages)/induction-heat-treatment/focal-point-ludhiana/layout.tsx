import type { Metadata } from 'next';

const TITLE = 'Heat Treatment Company near Focal Point, Ludhiana | Thakur';
const DESCRIPTION =
  'Heat treatment company near Focal Point, Ludhiana — induction & case hardening job work for auto, cycle & machine-tool units across Phases 1–8. Quick pickup, 2–4 day turnaround. Call +91 7900000776 for a free quote.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/focal-point-ludhiana';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'heat treatment company near Focal Point Ludhiana',
    'heat treatment Focal Point Ludhiana',
    'induction hardening Focal Point',
    'hardening near Focal Point',
    'case hardening Focal Point Ludhiana',
    'gear hardening Focal Point',
    'shaft hardening Focal Point Ludhiana',
    'heat treatment Focal Point Phase 8',
    'induction hardening job work Ludhiana',
  ],
  alternates: { canonical: '/induction-heat-treatment/focal-point-ludhiana' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'Thakur Industries',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function FocalPointLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
