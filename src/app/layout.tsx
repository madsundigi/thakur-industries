import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/layout/Footer';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { JsonLd } from '@/components/shared/JsonLd';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { AeroNav } from '@/components/layout/AeroNav';
import Script from 'next/script';

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
      areaServed: ["Ludhiana", "Nawanshahr", "Punjab", "India", "Haryana", "Delhi"],
      availableLanguage: ["en", "pa", "hi"]
    },
    description: 'Thakur Industries provides precision heat treatment and induction hardening job work for industries in Ludhiana, Punjab, Haryana & Delhi NCR.',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Bank Transfer, UPI',
    areaServed: [
      { '@type': 'City', name: 'Ludhiana' },
      { '@type': 'City', name: 'Jalandhar' },
      { '@type': 'City', name: 'Patiala' },
      { '@type': 'City', name: 'Mandi Gobindgarh' },
      { '@type': 'City', name: 'Khanna' },
      { '@type': 'State', name: 'Punjab' },
    ],
    sameAs: [
      'https://thakurindustries.in',
    ],
  };

  const serviceSchema = {
      '@context': "https://schema.org",
      '@type': "Service",
      "serviceType": "Induction Hardening Job Work",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Thakur Industries"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Punjab"
      },
      "broker": {
        "@type": "Organization",
        "name": "Thakur Industries"
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
        <WhatsAppButton />
        <Toaster />
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-57XJYQB95C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-57XJYQB95C');
          `}
        </Script>
        {/* Tawk.to Chat */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69aac5268a31ef1c36f6cf6d/1jj1h48dd';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
