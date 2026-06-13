import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Hardening in Phagwara, Punjab | Thakur Industries',
  description:
    'Induction hardening in Phagwara for sugar-mill rollers, shafts, auto-parts & engineering units — just 45 km from our Ludhiana plant. Certified 58–62 HRC, fast pickup. Call or WhatsApp your drawing for a free quote today.',
  keywords: [
    'induction hardening Phagwara',
    'heat treatment Phagwara',
    'sugar mill hardening Phagwara',
    'auto parts hardening Phagwara',
    'shaft hardening Phagwara',
    'gear hardening Phagwara',
    'induction hardening Punjab',
  ],
  alternates: { canonical: '/induction-heat-treatment/phagwara' },
  openGraph: {
    title: 'Induction Hardening in Phagwara, Punjab | Thakur Industries',
    description:
      'Certified induction hardening for Phagwara sugar mills, auto-parts and engineering units — 45 km from our Ludhiana facility. Fast pickup, 58–62 HRC, hardness reports.',
    url: 'https://thakurindustries.in/induction-heat-treatment/phagwara',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Induction Hardening in Phagwara, Punjab | Thakur Industries',
    description:
      'Induction hardening job work for Phagwara sugar mills, auto-parts & engineering units — 45 km from Ludhiana. Certified 58–62 HRC, quick turnaround.',
  },
};

export default function PhagwaraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
