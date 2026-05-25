import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Phone, MessageSquare, Clock, IndianRupee, Layers, Gauge, Flame } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Induction Hardening Rate & Quote in Ludhiana Punjab | Thakur Industries',
  description: 'Get competitive induction hardening job work rates in Ludhiana, Punjab. Pricing for gear hardening, shaft hardening, bearing race & case hardening. Free quote in 24 hours. Call +91 7900000776.',
  alternates: { canonical: '/get-quote' },
  keywords: [
    'induction hardening rate Ludhiana',
    'heat treatment job work rate Punjab',
    'gear hardening rate',
    'shaft hardening price Punjab',
    'induction hardening cost India',
    'case hardening rate Ludhiana',
    'heat treatment job work quotation',
  ],
  openGraph: {
    title: 'Induction Hardening Rate & Free Quote | Thakur Industries Ludhiana',
    description: 'Get competitive induction hardening job work rates in Ludhiana, Punjab. Free quote in 24 hours.',
    url: `${SITE_URL}/get-quote`,
  },
};

const pricingFactors = [
  {
    icon: Layers,
    title: 'Component Size & Weight',
    desc: 'Larger or heavier components require longer heating cycles and more energy. Rate is typically calculated per kilogram or per piece for standard parts.',
  },
  {
    icon: Gauge,
    title: 'Required Case Depth',
    desc: 'Deeper case depth (e.g. 3–6mm for shafts vs 0.5–1.5mm for gears) requires more controlled heating time, affecting the per-piece rate.',
  },
  {
    icon: Flame,
    title: 'Material Grade',
    desc: 'EN8, EN19, EN24, 4140, and tool steels have different heating requirements. Higher alloy steels need precise temperature control and may cost more.',
  },
  {
    icon: Layers,
    title: 'Batch Quantity',
    desc: 'Larger batch orders get better per-piece pricing. We offer special rates for OEM orders, export units, and repeat production batches.',
  },
  {
    icon: Clock,
    title: 'Turnaround Time',
    desc: 'Standard delivery: 2–4 working days. Urgent/same-day processing is available at a priority rate for time-critical orders.',
  },
  {
    icon: CheckCircle2,
    title: 'Testing & Certification',
    desc: 'All batches include Rockwell hardness test reports at no extra charge. Metallurgical reports and cross-section analysis available on request.',
  },
];

const services = [
  { name: 'Shaft Hardening', details: 'All diameters — drive, transmission, agricultural shafts', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
  { name: 'Gear Tooth Induction Hardening', details: 'Tooth-by-tooth or full-face gear hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
  { name: 'Bearing Race Hardening', details: 'Inner & outer races, needle tracks', href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana' },
  { name: 'Crankshaft Hardening', details: 'Journal pins, crank pins, bearing surfaces', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
  { name: 'Case Hardening', details: 'Carburizing & surface case hardening', href: '/case-hardening-heat-treatment' },
  { name: 'On-site Mobile Service', details: 'For large/fixed components across Punjab', href: '/induction-heat-treatment/on-site' },
];

const whyUs = [
  '25+ years in Ludhiana's industrial belt',
  'Hardness achieved: 55–62 HRC consistently',
  'Case depth range: 0.5mm to 10mm',
  'Serving 500+ manufacturers across Punjab',
  'OEM & export-grade quality with test reports',
  'Pickup & delivery across Punjab available',
];

export default function GetQuotePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening Job Work',
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      telephone: SITE_PHONE_NUMBER,
      url: SITE_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ludhiana',
        addressRegion: 'Punjab',
        addressCountry: 'IN',
      },
    },
    areaServed: { '@type': 'State', name: 'Punjab' },
    description: 'Precision induction hardening and heat treatment job work for gears, shafts, bearings, and crankshafts in Ludhiana, Punjab.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      description: 'Competitive job work rates. Free quote within 24 hours.',
    },
  };

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Get a Quote', href: '/get-quote' }]} />
      <JsonLd data={schema} />

      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Induction Hardening Rates &"
            highlightedWord="Free Quote"
            description="Transparent job work pricing for Punjab industries. Tell us your component, material, and quantity — we'll send a competitive quote within 24 hours."
            className="text-center"
          />

          {/* Hero image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-12 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/6.png"
              alt="Induction hardening job work — precision heat treatment Ludhiana"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
              <div className="max-w-md">
                <p className="text-primary font-black uppercase tracking-widest text-xs mb-3">Get Competitive Rates</p>
                <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-foreground">Quote in 24 hours.<br />Pickup across Punjab.</h2>
                <p className="text-muted-foreground text-sm mt-2">Serving 500+ manufacturers. OEM-grade with test reports.</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            <a
              href={`tel:${SITE_PHONE_NUMBER.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-4 p-6 bg-primary text-primary-foreground rounded-2xl font-black uppercase italic tracking-tight text-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="h-6 w-6" />
              Call for Instant Rate: {SITE_PHONE_NUMBER}
            </a>
            <a
              href={`https://wa.me/${SITE_PHONE_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent('Hello, I need a quote for induction hardening job work. Component: ___ Material: ___ Quantity: ___')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 p-6 bg-[#25D366] text-white rounded-2xl font-black uppercase italic tracking-tight text-lg hover:opacity-90 transition-opacity"
            >
              <MessageSquare className="h-6 w-6" />
              WhatsApp Quote Request
            </a>
          </div>

          {/* Services & Rates */}
          <section className="py-16 border-t border-border">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-4 text-center">
              Services & <span className="text-primary">Pricing Structure</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
              We offer competitive per-piece and per-kg rates for all induction hardening services. Final pricing depends on the factors listed below — contact us for your exact quote.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link key={service.name} href={service.href} className="group">
                  <div className="p-6 bg-secondary/30 border border-border rounded-2xl hover:border-primary/60 hover:shadow-[0_0_20px_rgba(255,0,0,0.08)] transition-all h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <IndianRupee className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <h3 className="font-black uppercase italic tracking-tight text-foreground group-hover:text-primary transition-colors">{service.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.details}</p>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mt-4">Get Rate →</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Pricing Factors */}
          <section className="py-16 border-t border-border">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-4 text-center">
              What Affects Your <span className="text-primary">Rate?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Induction hardening rates vary based on these technical and operational factors. Share your component details for an accurate quote.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingFactors.map((factor) => (
                <div key={factor.title} className="p-8 bg-secondary/20 border border-border rounded-2xl">
                  <factor.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-black uppercase italic tracking-tight text-foreground mb-3">{factor.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{factor.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-8">
                  Why <span className="text-primary">Punjab Industries</span> Trust Us
                </h2>
                <ul className="space-y-4">
                  {whyUs.map((point) => (
                    <li key={point} className="flex items-center gap-4 text-foreground font-medium">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 bg-secondary/20 border border-primary/20 rounded-3xl">
                <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-2">How to Get a Quote</h3>
                <p className="text-muted-foreground mb-8">Share these details and we respond within 24 hours:</p>
                <ol className="space-y-5">
                  {[
                    { step: '01', text: 'Component name & drawing / photo' },
                    { step: '02', text: 'Material grade (EN8, EN19, EN24, 4140, etc.)' },
                    { step: '03', text: 'Required hardness (HRC) and case depth (mm)' },
                    { step: '04', text: 'Quantity per batch / per month' },
                    { step: '05', text: 'Delivery: workshop drop-off or pickup from your factory' },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-4">
                      <span className="text-primary font-black text-xl italic">{item.step}</span>
                      <span className="text-foreground font-medium">{item.text}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-10 flex flex-col gap-4">
                  <a
                    href={`tel:${SITE_PHONE_NUMBER.replace(/\s/g, '')}`}
                    className="flex items-center justify-center gap-3 py-4 px-6 bg-primary text-primary-foreground rounded-xl font-black uppercase italic tracking-tight hover:opacity-90 transition-opacity"
                  >
                    <Phone className="h-5 w-5" /> Call Now: {SITE_PHONE_NUMBER}
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-3 py-4 px-6 border border-primary text-primary rounded-xl font-black uppercase italic tracking-tight hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Send Detailed Enquiry Form
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 border-t border-border max-w-3xl mx-auto">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-10 text-center">
              Pricing <span className="text-primary">FAQs</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'What is the minimum order quantity for induction hardening job work?',
                  a: 'We accept single-piece urgent orders as well as bulk production batches. No minimum order quantity — small workshops and large OEMs are both welcome.',
                },
                {
                  q: 'Do you offer pickup and delivery across Punjab?',
                  a: 'Yes, we provide pickup and delivery to major industrial areas in Ludhiana, Jalandhar, Patiala, Mandi Gobindgarh, Phagwara, Khanna, and other Punjab cities.',
                },
                {
                  q: 'How soon can I get a rate/quotation?',
                  a: 'Call or WhatsApp us with component details and we provide a rate within 24 hours. For standard components (shafts, gears, bearings), we can often quote immediately over the phone.',
                },
                {
                  q: 'Do you give discounts for regular job work orders?',
                  a: 'Yes, we offer special rates for regular production batches, OEM suppliers, and export units. Long-term partnerships get priority scheduling and preferential pricing.',
                },
              ].map((faq, i) => (
                <div key={i} className="p-6 bg-secondary/30 border border-border rounded-xl">
                  <h3 className="font-black uppercase italic tracking-tight text-foreground mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <CTASection />
      </div>
    </>
  );
}
