
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE_NAME, SITE_TAGLINE, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { JsonLd } from '@/components/shared/JsonLd';
import StickyCTA from '@/components/shared/StickyCTA';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Induction Heat Treatment & Case Hardening | ${SITE_NAME} Ludhiana`,
    template: `%s | ${SITE_NAME}`,
  },
  description: `Top induction heat treatment Ludhiana. We offer induction hardening, case hardening, and steel hardening services in Punjab, India. Call ${SITE_PHONE_NUMBER}.`,
  openGraph: {
    title: `${SITE_NAME} | Industrial Heat Treatment Ludhiana, Punjab`,
    description: SITE_TAGLINE,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Industrial Heat Treatment Ludhiana, Punjab`,
    description: SITE_TAGLINE,
    images: [`/og-image.jpg`],
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_PHONE_NUMBER,
      contactType: 'Customer Service',
      areaServed: ["Ludhiana", "Punjab", "India"],
      availableLanguage: ["en", "pa", "hi"]
    },
    description: 'Thakur Industries is a leading provider of induction heat treatment and case hardening services in Ludhiana, Punjab.',
  };

  return (
    <html lang="en" className="scroll-pt-[5rem] dark" suppressHydrationWarning>
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
        <Toaster />
      </body>
    </html>
  );
}
