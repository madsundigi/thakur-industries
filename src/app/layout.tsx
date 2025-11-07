import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';
import { JsonLd } from '@/components/shared/JsonLd';
import StickyCTA from '@/components/shared/StickyCTA';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Induction Heat Treatment & Case Hardening - Ludhiana`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} | Ludhiana, Punjab`,
    description: SITE_DESCRIPTION,
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
    title: `${SITE_NAME} | Ludhiana, Punjab`,
    description: SITE_DESCRIPTION,
    images: [`/og-image.jpg`],
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#E0E0E0' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0c0e' },
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
    name: 'Thakur Industries',
    url: 'https://thakurinduction.com',
    logo: 'https://thakurinduction.com/logo.png', // Replace with actual logo URL
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-7900000776',
      contactType: 'Customer Service',
    },
  };

  return (
    <html lang="en" className="scroll-pt-[5rem]">
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
