
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, ShieldCheck, History, ArrowRight } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { AboutSection } from '@/components/home/AboutSection';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { IndustriesServed } from '@/components/home/IndustriesServed';
import { MaterialExpertise } from '@/components/home/MaterialExpertise';
import { ProcessSection } from '@/components/home/ProcessSection';
import { ServiceArea } from '@/components/home/ServiceArea';
import { CTASection } from '@/components/home/CTASection';
import { Testimonials } from '@/components/home/Testimonials';
import { Faq } from '@/components/home/Faq';
import { JsonLd } from '@/components/shared/JsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';

const TITLE = 'Induction Hardening Company in Ludhiana | Thakur Industries';
const DESCRIPTION =
  'Thakur Industries — among the best induction hardening manufacturers in Ludhiana for gears, shafts, crankshafts & case hardening. Serving Punjab & North India. Call for a free quote.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'induction hardening near me',
    'induction hardening manufacturers Ludhiana',
    'best induction hardening company Ludhiana',
    'induction hardening company in Ludhiana',
    'heat treatment Ludhiana',
    'induction hardening Ludhiana',
    'heat treatment job work Punjab',
    'gear hardening Ludhiana',
    'shaft hardening Punjab',
    'induction hardening job work',
    'case hardening Ludhiana',
    'heat treatment company Punjab',
    'induction heat treatment Ludhiana',
    'surface hardening Punjab',
    'bearing race hardening',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  description:
    'Leading induction hardening company and heat treatment manufacturer in Ludhiana, Punjab — gear, shaft, crankshaft, bearing and case hardening job work for automotive and industrial OEMs.',
  url: SITE_URL,
  telephone: SITE_PHONE_NUMBER,
  image: `${SITE_URL}/og-image.jpg`,
  priceRange: '₹₹',
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
    latitude: 30.9105,
    longitude: 75.8573,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  areaServed: [
    'Ludhiana',
    'Mandi Gobindgarh',
    'Khanna',
    'Jalandhar',
    'Patiala',
    'Phagwara',
    'Ambala',
    'Chandigarh',
    'Delhi NCR',
    'Punjab',
    'North India',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    bestRating: '5',
    reviewCount: '127',
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Hero />
      <AboutSection />
      <ServicesOverview />
      <IndustriesServed />
      <Testimonials />
      <MaterialExpertise />
      <ProcessSection />
      <ServiceArea />

      {/* SEO / local-intent trust section — H2 (single H1 lives in Hero) */}
      <section className="bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-label justify-center inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> // SERVING LUDHIANA &amp; NORTH INDIA //
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
              The Best <span className="text-primary">Induction Hardening Company</span> in Ludhiana
            </h2>
            <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                Searching for <strong>induction hardening near me</strong>? {SITE_NAME} is one of the most trusted{' '}
                <Link href="/induction-heat-treatment" className="text-primary hover:underline font-bold">
                  induction hardening manufacturers in Ludhiana
                </Link>
                , delivering precision heat treatment job work to automotive, tractor and heavy-engineering OEMs
                across Punjab and North India. From our Shimlapuri workshop we serve nearby industrial clusters with
                consistent, certified results.
              </p>
              <p>
                As a leading <strong>induction hardening company in Ludhiana</strong>, we specialise in{' '}
                <Link
                  href="/induction-heat-treatment/induction-hardening-gears-ludhiana"
                  className="text-primary hover:underline font-bold"
                >
                  gear hardening
                </Link>
                ,{' '}
                <Link
                  href="/induction-heat-treatment/induction-hardening-shafts-ludhiana"
                  className="text-primary hover:underline font-bold"
                >
                  shaft hardening
                </Link>
                ,{' '}
                <Link
                  href="/induction-heat-treatment/crankshafts-induction-hardening-ludhiana"
                  className="text-primary hover:underline font-bold"
                >
                  crankshaft hardening
                </Link>{' '}
                and{' '}
                <Link href="/case-hardening-heat-treatment" className="text-primary hover:underline font-bold">
                  case hardening
                </Link>
                . Browse{' '}
                <Link href="/our-work" className="text-primary hover:underline font-bold">
                  our work
                </Link>{' '}
                or{' '}
                <Link href="/contact" className="text-primary hover:underline font-bold">
                  contact us
                </Link>{' '}
                for a same-day quotation.
              </p>
            </div>

            {/* Trust strip — rating, ISO, experience */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Star, label: '4.8★ · 127 Reviews' },
                { icon: ShieldCheck, label: 'ISO-Grade Process' },
                { icon: History, label: 'Trusted Across Punjab' },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-tight px-4 py-2 rounded-full"
                >
                  <badge.icon className="h-3.5 w-3.5" />
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tight px-7 py-3.5 rounded-2xl hover:opacity-90 transition-opacity"
              >
                Get a Free Quote <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <CTASection />
    </>
  );
}
