import type { Metadata } from 'next';

const TITLE = 'Contact Thakur Industries | Induction Hardening Quote Ludhiana';
const DESCRIPTION =
  'Contact Thakur Industries for induction hardening job work in Ludhiana, Punjab. Send your drawing for an induction hardening rate per kg and get a rate within 24 hours.';
const URL = 'https://thakurindustries.in/contact';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening rate per kg',
    'heat treatment enquiry Ludhiana',
    'contact heat treatment company',
    'heat treatment quote Ludhiana',
    'induction hardening quote',
    'contact Thakur Industries',
    'induction hardening job work Ludhiana',
  ],
  alternates: { canonical: '/contact' },
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

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
