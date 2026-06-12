import type { Metadata } from 'next';

const TITLE = 'On-Site Induction Hardening Service | Mobile Hardening | Thakur';
const DESCRIPTION =
  'On-site induction hardening service for large components — mill rollers, slewing rings, ring gears & machine beds. Mobile, in-situ hardening at your plant across North India. Get a free quote today.';
const URL = 'https://thakurindustries.in/induction-heat-treatment/on-site';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'on-site induction hardening service',
    'on-site induction hardening',
    'mobile induction hardening',
    'in-situ hardening service',
    'portable induction hardening',
    'on-site heat treatment Punjab',
    'mill roller hardening',
    'slewing ring hardening',
    'large ring gear hardening',
    'in-situ induction hardening North India',
  ],
  alternates: { canonical: '/induction-heat-treatment/on-site' },
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

export default function OnSiteHardeningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
