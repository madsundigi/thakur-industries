import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Hardening in Dehlon, Ludhiana | Thakur',
  description:
    'Induction hardening in Dehlon for agri & engineering parts — same-district facility ~20 km away means same-day pickup, 58–62 HRC, fast turnaround. Call +91 7900000776 for a quote.',
  keywords: [
    'induction hardening Dehlon',
    'heat treatment Dehlon Ludhiana',
    'agri hardening Dehlon',
    'engineering component hardening Dehlon',
    'gear shaft hardening Dehlon Ludhiana',
    'induction hardening job work Ludhiana',
  ],
  alternates: { canonical: '/induction-heat-treatment/dehlon' },
  openGraph: {
    title: 'Induction Hardening in Dehlon, Ludhiana | Thakur Industries',
    description:
      'Same-district induction hardening for Dehlon’s agricultural and engineering units — ~20 km away for fast same-day pickup, 58–62 HRC, certified job work.',
    url: 'https://thakurindustries.in/induction-heat-treatment/dehlon',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Induction Hardening in Dehlon, Ludhiana | Thakur Industries',
    description:
      'Induction hardening in Dehlon — same-district facility ~20 km away, same-day pickup, 58–62 HRC, certified turnaround. Call +91 7900000776.',
  },
};

export default function DehalonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
