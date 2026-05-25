import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Hardening Work Portfolio | Thakur Industries Ludhiana',
  description: 'See real induction hardening job work done by Thakur Industries — gears, shafts, bearings, crankshafts. Photos, material grades, hardness achieved. Serving Punjab industries since 1998.',
  alternates: { canonical: '/our-work' },
  openGraph: {
    title: 'Induction Hardening Work Portfolio | Thakur Industries Ludhiana',
    description: 'Real induction hardening job work — gears, shafts, bearings, crankshafts. Serving Punjab industries.',
    url: 'https://thakurindustries.in/our-work',
  },
};

export default function OurWorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
