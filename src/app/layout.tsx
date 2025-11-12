
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/layout/Footer';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { JsonLd } from '@/components/shared/JsonLd';
import { AeroNav } from '@/components/layout/AeroNav';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Induction Hardening & Heat Treatment in Ludhiana, Punjab',
  description: `Leading induction heat treatment and case hardening job work provider in Ludhiana & Punjab. Serving nearby Haryana & Delhi industries.`,
  openGraph: {
    title: `${SITE_NAME} | Induction Hardening & Heat Treatment in Ludhiana, Punjab`,
    description: 'Leading induction heat treatment and case hardening job work provider in Ludhiana & Punjab.',
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
    title: `${SITE_NAME} | Induction Hardening & Heat Treatment in Ludhiana, Punjab`,
    description: 'Leading induction heat treatment and case hardening job work provider in Ludhiana & Punjab.',
    images: [`/og-image.jpg`],
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#E0E0E0' },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    telephone: SITE_PHONE_NUMBER,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1486/5, Street Number 1, Harkrishan Nagar, Shimlapuri',
      addressLocality: 'Ludhiana',
      addressRegion: 'Punjab',
      postalCode: '141003',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.871576,
      longitude: 75.875935,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_PHONE_NUMBER,
      contactType: 'Customer Service',
      areaServed: ["Ludhiana", "Punjab", "India", "Haryana", "Delhi"],
      availableLanguage: ["en", "pa", "hi"]
    },
    description: 'Thakur Induction provides precision heat treatment and induction hardening job work for industries in Ludhiana, Punjab, Haryana & Delhi NCR.',
  };

  const serviceSchema = {
      '@context': "https://schema.org",
      '@type': "Service",
      "serviceType": "Induction Hardening Job Work",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Thakur Induction"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Punjab"
      },
      "broker": {
        "@type": "Organization",
        "name": "Thakur Induction"
      }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://videos.pexels.com" />
        <JsonLd data={organizationSchema} />
        <JsonLd data={serviceSchema} />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
        suppressHydrationWarning
      >
        <AeroNav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
