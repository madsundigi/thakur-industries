import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceFAQ } from '@/components/shared/ServiceFAQ';
import {
  CheckCircle2,
  Phone,
  MessageSquare,
  Clock,
  IndianRupee,
  Layers,
  Gauge,
  Flame,
  Scale,
  Award,
  ShieldCheck,
  FileCheck,
  Truck,
} from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';

const TITLE = 'Induction Hardening Rate Per Kg & Quote in Ludhiana | Thakur Industries';
const DESCRIPTION =
  'Get the induction hardening rate per kg for gears, shafts & crankshafts in Ludhiana, Punjab. Transparent per-kg & per-piece job work pricing with bulk discounts — free quote within 24 hours. Call +91 7900000776.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/get-quote' },
  keywords: [
    'induction hardening rate per kg',
    'heat treatment cost',
    'hardening job work price',
    'gear hardening rate',
    'shaft hardening rate per kg',
    'induction hardening cost India',
    'case hardening rate Ludhiana',
    'heat treatment job work quotation Punjab',
  ],
  openGraph: {
    title: 'Induction Hardening Rate Per Kg & Free Quote | Thakur Industries Ludhiana',
    description:
      'Per-kg & per-piece induction hardening job work rates in Ludhiana, Punjab. Bulk discounts and a free quote within 24 hours.',
    url: `${SITE_URL}/get-quote`,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Induction Hardening Rate Per Kg & Free Quote | Thakur Industries',
    description:
      'Transparent per-kg induction hardening job work pricing in Ludhiana, Punjab. Free quote within 24 hours.',
  },
};

const WHATSAPP_URL =
  `https://wa.me/${SITE_PHONE_NUMBER.replace(/\D/g, '')}?text=` +
  encodeURIComponent(
    'Hello, please send me your induction hardening rate per kg. Component: ___ Material: ___ Weight/Qty: ___ Required HRC & case depth: ___',
  );

const pricingFactors = [
  {
    icon: Scale,
    title: 'Component Weight (Per Kg)',
    desc: 'The induction hardening rate per kg is the core of most quotes. Heavier components draw more energy and longer cycles, so weight is the primary driver for shafts, axles and large gears.',
  },
  {
    icon: Gauge,
    title: 'Required Case Depth',
    desc: 'Deeper case depth (e.g. 3–6mm for shafts vs 0.5–1.5mm for gears) needs more controlled heating time, which raises the per-kg or per-piece rate.',
  },
  {
    icon: Flame,
    title: 'Steel Grade',
    desc: 'EN8, EN19, EN24, 4140 and tool steels respond differently. Higher alloy steels need precise temperature control and may carry a slightly higher rate.',
  },
  {
    icon: Layers,
    title: 'Geometry & Quantity',
    desc: 'Tooth profiles, splines and bores need custom coils. Larger batch quantities unlock better per-piece pricing through bulk discounts and repeat-order rates.',
  },
  {
    icon: Clock,
    title: 'Turnaround Time',
    desc: 'Standard delivery is 2–4 working days. Urgent or same-week processing is available at a priority rate for time-critical orders.',
  },
  {
    icon: FileCheck,
    title: 'Testing & Certification',
    desc: 'Every batch includes Rockwell hardness (HRC) test reports at no extra charge. Metallurgical and cross-section reports are available on request.',
  },
];

const services = [
  { name: 'Shaft Hardening Rate', details: 'All diameters — drive, transmission, agricultural shafts', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
  { name: 'Gear Hardening Rate Per Kg', details: 'Tooth-by-tooth or full-face gear hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
  { name: 'Bearing Race Hardening', details: 'Inner & outer races, needle tracks', href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana' },
  { name: 'Crankshaft Hardening', details: 'Journal pins, crank pins, bearing surfaces', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
  { name: 'Case Hardening Rate', details: 'Carburizing & surface case hardening', href: '/case-hardening-heat-treatment' },
  { name: 'On-site Mobile Service', details: 'For large/fixed components across Punjab', href: '/induction-heat-treatment/on-site' },
];

const materialLinks = [
  { grade: 'EN8', href: '/induction-heat-treatment/en8-steel-induction-hardening' },
  { grade: 'EN19', href: '/induction-heat-treatment/en19-steel-induction-hardening' },
  { grade: 'EN24', href: '/induction-heat-treatment/en24-steel-hardening' },
  { grade: '4140', href: '/induction-heat-treatment/4140-steel-hardening' },
];

const whyUs = [
  "25+ years in Ludhiana's industrial belt",
  'Hardness achieved: 55–62 HRC consistently',
  'Case depth range: 0.5mm to 10mm',
  'Serving 500+ manufacturers across Punjab',
  'OEM & export-grade quality with test reports',
  'Pickup & delivery across Punjab available',
];

const trustBadges = [
  { icon: Award, label: '25+ Years' },
  { icon: ShieldCheck, label: 'OEM-Grade Process' },
  { icon: Clock, label: 'Quote in 24 Hours' },
  { icon: Truck, label: 'Pickup Across Punjab' },
];

// FAQ — single source of truth for the visible accordion (ServiceFAQ) AND its
// FAQPage schema, kept in sync to avoid schema mismatch.
const PRICING_FAQ = [
  {
    question: 'How much does induction hardening cost per kg?',
    answer:
      'The induction hardening rate per kg depends on component weight, required case depth, steel grade, geometry and order quantity. We price most work on a per-kg or per-piece basis and confirm an exact figure once we see your drawing. Call +91 7900000776 or send your details on WhatsApp for a free quote within 24 hours.',
  },
  {
    question: 'What is the minimum order quantity for induction hardening job work?',
    answer:
      'There is no rigid minimum order. We accept single-piece trial and sample jobs as well as bulk production batches. Batch orders of 50+ pieces receive better per-piece pricing, and monthly OEM contracts are available.',
  },
  {
    question: 'How fast is the turnaround for induction hardening?',
    answer:
      'Standard turnaround is 2–4 working days after we receive the components and an approved specification. Urgent and same-week jobs can be arranged at a priority rate for regular clients.',
  },
  {
    question: 'Do you offer bulk discounts on induction hardening rates?',
    answer:
      'Yes. We offer reduced per-kg and per-piece rates for bulk batches, regular production runs, OEM suppliers and export units. Long-term partners also receive priority scheduling and preferential pricing.',
  },
  {
    question: 'Do you offer pickup and delivery across Punjab?',
    answer:
      'Yes, we provide pickup and delivery to major industrial areas in Ludhiana, Jalandhar, Patiala, Mandi Gobindgarh, Phagwara, Khanna and other Punjab cities. Standard delivery is within 2–4 working days of processing.',
  },
  {
    question: 'Is the Rockwell hardness test report included in the rate?',
    answer:
      'Yes. Rockwell HRC test reports are included at no extra charge with every batch. Metallurgical cross-section reports and case-depth verification are available on request.',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  'name': 'How to Get an Induction Hardening Quote in Punjab',
  'description': 'Step-by-step process to place an induction hardening job work order with Thakur Industries, Ludhiana. Get a competitive rate within 24 hours.',
  'totalTime': 'PT10M',
  'supply': [
    { '@type': 'HowToSupply', 'name': 'Component drawing or photo' },
    { '@type': 'HowToSupply', 'name': 'Material grade specification (EN8, EN19, EN24, 4140)' },
  ],
  'step': [
    {
      '@type': 'HowToStep',
      'position': 1,
      'name': 'Provide Component Name & Drawing',
      'text': 'Share the component name and a drawing, sketch, or photo. This helps us identify the hardening zone, coil requirements, and fixturing needed for your part.',
    },
    {
      '@type': 'HowToStep',
      'position': 2,
      'name': 'Specify Material Grade',
      'text': 'Tell us the material grade — EN8, EN19, EN24, 4140, 4340, 20MnCr5, or similar. Each grade requires specific heating frequency and quench parameters for optimal results.',
    },
    {
      '@type': 'HowToStep',
      'position': 3,
      'name': 'State Required Hardness & Case Depth',
      'text': 'Specify the target surface hardness (HRC) and required case depth in mm. For example: 58–62 HRC with 2mm case depth for a transmission gear.',
    },
    {
      '@type': 'HowToStep',
      'position': 4,
      'name': 'Confirm Component Weight & Batch Quantity',
      'text': 'Provide the component weight and your quantity per batch and monthly frequency. The induction hardening rate per kg and bulk discounts are calculated from this. OEM monthly contracts available.',
    },
    {
      '@type': 'HowToStep',
      'position': 5,
      'name': 'Choose Pickup or Workshop Drop-off',
      'text': 'Decide whether you will drop components at our Ludhiana workshop or need pickup from your factory. We offer pickup and delivery across Punjab, Haryana, and Delhi NCR.',
    },
  ],
};

export default function GetQuotePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening Job Work',
    serviceType: 'Induction Hardening Rate Per Kg & Job Work',
    url: `${SITE_URL}/get-quote`,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      telephone: SITE_PHONE_NUMBER,
      url: SITE_URL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1486/5, Street Number 1, Harkrishan Nagar, Shimlapuri',
        addressLocality: 'Ludhiana',
        addressRegion: 'Punjab',
        postalCode: '141003',
        addressCountry: 'IN',
      },
    },
    areaServed: ['Ludhiana', 'Mandi Gobindgarh', 'Jalandhar', 'Khanna', 'Patiala', 'Punjab', 'Haryana', 'Delhi NCR'],
    description: 'Precision induction hardening and heat treatment job work for gears, shafts, bearings, and crankshafts in Ludhiana, Punjab. Priced per kilogram or per piece.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Induction hardening job work priced per kg or per piece, with bulk discounts. Free quote within 24 hours.',
      url: `${SITE_URL}/get-quote`,
    },
  };

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Get a Quote', href: '/get-quote' }]} />
      <JsonLd data={schema} />
      <JsonLd data={howToSchema} />

      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">

          {/* Visible breadcrumb trail (matches BreadcrumbList schema) */}
          <nav aria-label="Breadcrumb" className="pt-24 md:pt-28">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary">Get a Quote</li>
            </ol>
          </nav>

          <PageHeader
            title="Get an Induction Hardening"
            highlightedWord="Quote"
            description="Transparent per-kg job work pricing for Punjab industries. Tell us your component, material, weight and quantity — we'll send a competitive quote within 24 hours."
            className="text-center !pt-6"
          />

          {/* Trust badges */}
          <div className="-mt-2 mb-8 flex flex-wrap items-center justify-center gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-tight px-3 py-1.5 rounded-full"
              >
                <badge.icon className="h-3.5 w-3.5" />
                {badge.label}
              </span>
            ))}
          </div>

          {/* Hero image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-12 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/6.png"
              alt="Induction hardening rate per kg job work — precision heat treatment in Ludhiana, Punjab"
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
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

          {/* Quick Contact Strip — primary conversion CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            <a
              href={`tel:${SITE_PHONE_NUMBER.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-4 p-6 bg-primary text-primary-foreground rounded-2xl font-black uppercase italic tracking-tight text-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="h-6 w-6" />
              Call for Instant Rate: {SITE_PHONE_NUMBER}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 p-6 bg-[#25D366] text-white rounded-2xl font-black uppercase italic tracking-tight text-lg hover:opacity-90 transition-opacity"
            >
              <MessageSquare className="h-6 w-6" />
              WhatsApp Rate Request
            </a>
          </div>

          {/* How Induction Hardening Pricing Works — primary price-intent section */}
          <section className="py-16 border-t border-border max-w-4xl mx-auto">
            <p className="section-label text-center">// PRICING EXPLAINED //</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none">
              How Induction Hardening <span className="text-primary">Pricing Works</span>
            </h2>
            <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                The <strong>induction hardening rate per kg</strong> is the single most common way OEMs and workshops in Punjab budget
                their heat-treatment job work. Rather than publishing one flat figure, we calculate every quote from the real cost
                drivers of your part — component weight, required case depth, steel grade, geometry and order quantity — so you only
                pay for the energy and cycle time your job actually needs.
              </p>
              <p>
                For shafts, axles and heavy components, pricing is usually <strong>per kilogram</strong>, because weight directly tracks
                the heating energy and cycle time involved. For gears, pinions, bearing races and small repeat parts, a{' '}
                <strong>per-piece rate</strong> is often clearer and easier to plan around. We will recommend whichever basis gives you
                the most predictable, competitive cost for your component mix.
              </p>
              <p>
                Quantity matters too. There is <strong>no rigid minimum order quantity (MOQ)</strong> — we accept single trial pieces as
                well as multi-thousand-piece lots — but larger batches unlock meaningful <strong>bulk discounts</strong> on the per-kg
                and per-piece rate. Regular production runs, OEM suppliers and export units receive our best pricing along with priority
                scheduling. Standard <strong>turnaround is 2–4 working days</strong>, with urgent same-week processing available at a
                priority rate.
              </p>
              <p>
                To keep things honest, we do not advertise fixed published rates that could mislead — the right number depends on your
                exact drawing. Share your component, material grade, weight and quantity and we will return an exact{' '}
                <strong>induction hardening rate per kg</strong> (or per piece) within 24 hours. You can review the specific factors that
                shape your quote below.
              </p>
            </div>
          </section>

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

            {/* Material-grade internal links */}
            <div className="mt-10 text-center">
              <p className="text-sm text-muted-foreground font-medium mb-4">
                Need a rate by steel grade? Explore hardness, case depth and pricing notes for{' '}
                {materialLinks.map((m, i) => (
                  <span key={m.grade}>
                    <Link href={m.href} className="text-primary font-bold hover:underline">
                      {m.grade} hardening
                    </Link>
                    {i < materialLinks.length - 1 ? ', ' : '.'}
                  </span>
                ))}
              </p>
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
                    { step: '04', text: 'Component weight & quantity per batch / per month' },
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
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-4 px-6 bg-[#25D366] text-white rounded-xl font-black uppercase italic tracking-tight hover:opacity-90 transition-opacity"
                  >
                    <MessageSquare className="h-5 w-5" /> WhatsApp a Rate Request
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

          {/* FAQ — synced with FAQPage schema via ServiceFAQ */}
          <ServiceFAQ heading="Pricing & Rate FAQs" faqItems={PRICING_FAQ} />

          {/* Authority outbound reference + freshness signal */}
          <div className="pb-12 pt-4 text-center text-xs text-muted-foreground font-medium">
            <p className="mb-2">
              Learn more about the metallurgy behind surface hardening from the{' '}
              <a
                href="https://www.asminternational.org/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-primary hover:underline font-bold"
              >
                ASM International
              </a>{' '}
              heat-treatment resources.
            </p>
            <p className="uppercase tracking-widest">Last updated: June 2026 · {SITE_NAME}, Ludhiana, Punjab</p>
          </div>

        </div>
        <CTASection />

        {/* Mobile sticky CTA bar — hidden on md+ (CSS only, no hooks) */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur border-t border-border px-4 py-3 flex gap-3">
          <a
            href={`tel:${SITE_PHONE_NUMBER.replace(/\s/g, '')}`}
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase text-xs py-3 rounded-lg"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-black uppercase text-xs py-3 rounded-lg"
          >
            <MessageSquare className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
