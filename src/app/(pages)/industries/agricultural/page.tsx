import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceFAQ } from '@/components/shared/ServiceFAQ';
import {
  CheckCircle2,
  ArrowRight,
  Tractor,
  ShieldCheck,
  Zap,
  Gauge,
  Phone,
  MessageSquare,
  Award,
  Clock,
  Star,
  IndianRupee,
  FileText,
} from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CTASection } from '@/components/home/CTASection';

const PAGE_PATH = '/industries/agricultural';
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I need tractor parts hardening job work in Punjab. Please find my drawing attached.');

const TITLE = 'Tractor & Agricultural Parts Hardening in Punjab | Thakur';
const DESCRIPTION =
  'Tractor parts hardening in Punjab — gears, shafts, tines, blades, tiller & harrow parts hardened to 52–60 HRC by Thakur Industries, Ludhiana. Get a free quote in 24 hours.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  keywords: [
    'tractor parts hardening Punjab',
    'tractor parts hardening',
    'agricultural implement hardening Punjab',
    'tine hardening',
    'blade hardening',
    'gear hardening',
    'rotavator gear hardening Punjab',
    'PTO shaft hardening Ludhiana',
    'tractor shaft hardening Ludhiana',
    'agricultural equipment hardening Punjab',
    'farm equipment heat treatment Punjab',
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
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

const components = [
  { name: 'PTO Shafts (Power Take-Off)', desc: 'High-torque induction hardening for tractor PTO shafts. Handles continuous field loads without fatigue failure.', hardness: '52–56 HRC', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
  { name: 'Rotavator Gears & Tiller Parts', desc: 'Gear tooth hardening and tiller part surface hardening for rotavators — critical for abrasion resistance in soil.', hardness: '55–60 HRC', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
  { name: 'Cultivator Tines & Shovels', desc: 'Soil-engaging cultivator tines and shovels hardened for abrasion resistance in sandy loam and hard clay.', hardness: '52–56 HRC', href: '/surface-hardening' },
  { name: 'Harrow Discs & Plough Blades', desc: 'Disc harrow blades and reversible plough shares hardened for a sharp, wear-resistant cutting edge.', hardness: '52–58 HRC', href: '/surface-hardening' },
  { name: 'Rear Axle Shafts', desc: 'Tractor rear axle shafts — full-length surface hardening for high torque and field impact resistance.', hardness: '54–58 HRC', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
  { name: 'Clutch & Gear Hub Components', desc: 'Selective hardening on clutch hubs, spline shafts, and gear engagement zones for tractor gearboxes.', hardness: '55–60 HRC', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
  { name: 'Seeder & Planter Shafts', desc: 'Surface hardening for seed drill shafts and planter drive components — wear resistance in abrasive soil conditions.', hardness: '50–55 HRC', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
  { name: 'Thresher & Chaff-Cutter Blades', desc: 'Edge and surface hardening for thresher beaters and chaff-cutter blades that run through every harvest season.', hardness: '54–58 HRC', href: '/surface-hardening' },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Field-Proven Durability',
    desc: 'Punjab’s agriculture demands components that survive rocky soils, high torque loads, and continuous seasons. Our hardening extends part life 3–5x over untreated components.',
  },
  {
    icon: Gauge,
    title: 'Abrasion Resistance for Soil-Contact Parts',
    desc: 'Soil-engaging parts like blades, tines, and harrow discs are hardened to resist abrasion from Punjab’s diverse soil types — sandy loam to hard clay.',
  },
  {
    icon: Tractor,
    title: 'Tractor OEM Supply Chain Ready',
    desc: 'We supply to tractor OEMs and tier-1 agricultural parts manufacturers across Punjab — with documented quality reports matching their incoming inspection requirements.',
  },
  {
    icon: Zap,
    title: 'High-Volume Seasonal Batches',
    desc: 'Punjab’s agricultural equipment demand peaks before sowing seasons. We handle high-volume urgent batches to meet OEM production schedules.',
  },
];

// FAQ — single source of truth shared by the visible accordion (ServiceFAQ)
// AND the FAQPage schema, kept in sync to avoid mismatch.
const FAQ_ITEMS = [
  {
    question: 'How much does tractor parts hardening cost in Punjab?',
    answer: 'Tractor parts hardening pricing depends on the component weight, size, required case depth, steel grade and order quantity. We price most agricultural job work on a per-kilogram or per-piece basis, with reduced rates for bulk and repeat OEM orders. Share your component drawing and quantity on WhatsApp for an exact quotation within 24 hours.',
  },
  {
    question: 'Can you harden PTO shafts for tractors in Punjab?',
    answer: 'Yes. Tractor PTO shafts in EN8 (C45) or EN19 steel typically achieve 52–56 HRC with 2–4mm case depth after induction hardening. We handle high-volume monthly batches for Punjab tractor OEMs with pickup from your facility.',
  },
  {
    question: 'Do you harden rotavator gears, tines and blades?',
    answer: 'Yes. Rotavator gears are hardened tooth-by-tooth to 55–60 HRC, while rotavator blades, cultivator tines and harrow discs receive surface hardening for abrasion resistance in soil contact — significantly extending field life by 3–5 seasons.',
  },
  {
    question: 'What is your capacity for pre-season agricultural batches?',
    answer: 'We handle high-volume seasonal batches to meet pre-sowing and pre-harvest demand peaks. Monthly production contracts with scheduled pickup from your facility in Ludhiana, Hoshiarpur, or Nawanshahr are available. Standard turnaround is 2–4 working days.',
  },
  {
    question: 'Which Punjab districts do you cover for agricultural parts pickup?',
    answer: 'We serve tractor and agricultural implement manufacturers across Ludhiana, Jalandhar, Hoshiarpur, Nawanshahr, Phagwara, Sangrur, Mandi Gobindgarh, Khanna, Malerkotla, Jagraon and all major Punjab industrial clusters.',
  },
  {
    question: 'What tractor axle shaft hardness do you achieve?',
    answer: 'Tractor rear axle shafts in EN19 or EN24 typically achieve 54–58 HRC with 3–5mm case depth. This provides the combination of surface wear resistance and core toughness required for field torque loads.',
  },
];

export default function AgriculturalPage() {
  const agriImage = PlaceHolderImages.find(img => img.id === 'industryAgriculture');
  const agriParts = PlaceHolderImages.find(img => img.id === 'blogAgricultural');

  // Enriched Service schema — serviceType, offers (INR → /contact),
  // aggregateRating, wider areaServed and full provider address.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Tractor & Agricultural Parts Hardening in Punjab',
    serviceType: 'Heat Treatment & Induction Hardening for Agricultural Components',
    url: `${SITE_URL}${PAGE_PATH}`,
    description:
      'Tractor parts hardening in Punjab — induction and surface hardening for tractor gears, shafts, PTO shafts, cultivator tines, plough blades, rotavator parts and harrow discs to 52–60 HRC. Job work for agricultural implement and tractor OEMs across Punjab.',
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
    areaServed: ['Punjab', 'Ludhiana', 'Jalandhar', 'Hoshiarpur', 'Nawanshahr', 'Phagwara', 'Patiala', 'Sangrur', 'Mandi Gobindgarh', 'Khanna'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Tractor and agricultural parts hardening job work priced per kg or per piece. Request a custom quotation.',
      url: `${SITE_URL}/contact`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      reviewCount: '127',
    },
  };

  // Note: the FAQPage JSON-LD is emitted by <ServiceFAQ> from the same FAQ_ITEMS,
  // so we intentionally do not duplicate a FAQPage schema here.

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Industries', href: '/industries' }, { name: 'Agricultural', href: '/industries/agricultural' }]} />
      <JsonLd data={serviceSchema} />

      <div className="bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">

          {/* Visible breadcrumb trail (matches BreadcrumbList schema) */}
          <nav aria-label="Breadcrumb" className="pt-24 md:pt-28">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary">Agricultural</li>
            </ol>
          </nav>

          <PageHeader
            title="Tractor Parts Hardening in"
            highlightedWord="Punjab"
            description={`Punjab is India’s food bowl — and its agricultural machinery needs components that last. ${SITE_NAME} provides tractor parts hardening and agricultural implement hardening in Punjab for gears, shafts, PTO shafts, tines, blades and tiller parts.`}
            className="text-center !pt-6"
          />

          {/* Above-the-fold trust badges + CTA cluster */}
          <div className="-mt-2 mb-4 flex flex-col items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Award, label: '52–60 HRC' },
                { icon: ShieldCheck, label: 'OEM-Grade Process' },
                { icon: Clock, label: '2–4 Day Turnaround' },
                { icon: Star, label: '4.8★ · 127 Reviews' },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-tight px-3 py-1.5 rounded-full"
                >
                  <badge.icon className="h-3.5 w-3.5" />
                  {badge.label}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <a
                href={`tel:${SITE_PHONE_NUMBER}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tight px-7 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                <Phone className="h-5 w-5" /> Call for a Quote
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-black uppercase italic tracking-tight px-7 py-3 rounded-xl transition-colors"
              >
                <MessageSquare className="h-5 w-5" /> WhatsApp for Tractor Parts
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-primary text-primary font-black uppercase italic tracking-tight px-7 py-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Get Free Quote <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Intro — primary keyword in the first 100 words */}
          <section className="py-10 md:py-14 border-b border-border text-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              Looking for dependable <strong>tractor parts hardening in Punjab</strong>? At{' '}
              <strong>{SITE_NAME}</strong>, Ludhiana, our induction and surface hardening job work raises tractor and{' '}
              <strong>agricultural implement</strong> surfaces to 52–60 HRC while keeping the core tough enough to absorb field
              shock. We harden tractor gears, PTO and axle shafts, cultivator tines, plough and harrow blades, and rotavator
              tiller parts for tractor OEMs and tier-1 agricultural manufacturers across Punjab.
            </p>
          </section>

          {/* Hero section */}
          <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-border">
            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-[0_0_40px_rgba(255,0,0,0.1)]">
              {agriImage && (
                <Image
                  src={agriImage.imageUrl}
                  alt="Tractor parts hardening in Punjab — agricultural components at Thakur Industries Ludhiana"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  data-ai-hint={agriImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-primary text-primary-foreground text-sm font-black uppercase px-4 py-2 rounded-full italic tracking-wide">Punjab’s #1 Farm Parts Hardening</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Tractor className="h-8 w-8 text-primary" />
                <span className="text-primary font-black uppercase italic tracking-widest text-sm">Agricultural Industry</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">
                Built for <span className="text-primary">Punjab’s Fields</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Punjab is India’s largest tractor and agricultural equipment producing state. Ludhiana alone houses over 200 tractor parts manufacturers. These components face some of the harshest operating conditions — high torque, abrasive soils, continuous seasonal load.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Thakur Industries has specialized in agricultural component hardening for 25+ years — delivering PTO shafts, rotavator gears, axles, tines and blades that outlast untreated parts by 3–5 seasons.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '52–60 HRC', label: 'Target Hardness' },
                  { value: '1–5mm', label: 'Case Depth' },
                  { value: '500+', label: 'Farm OEM Clients' },
                  { value: '25+ Yrs', label: 'Agri Expertise' },
                ].map(stat => (
                  <div key={stat.label} className="p-4 bg-secondary/30 rounded-xl border border-border text-center">
                    <p className="text-2xl font-black text-primary italic">{stat.value}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Components */}
          <section className="py-24">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-4 text-center">
              Tractor & Agricultural Parts <span className="text-primary">We Harden</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">From gears and shafts to soil-engaging tines, blades and tiller parts — every agricultural component is treated to your exact hardness and case-depth specification, with batch test reports.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((comp) => (
                <Link key={comp.name} href={comp.href} className="group">
                  <div className="p-6 bg-secondary/20 border border-border rounded-2xl hover:border-primary/50 transition-all h-full">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-black uppercase italic tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">{comp.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{comp.desc}</p>
                    <span className="text-xs font-black text-primary bg-primary/10 px-3 py-1 rounded-full">{comp.hardness}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Materials / internal links to grade + service pages */}
          <section className="py-16 border-t border-border">
            <p className="section-label text-center">// STEEL GRADES //</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-4 text-center">
              Agricultural Steel <span className="text-primary">Grades We Harden</span>
            </h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              Most tractor and implement parts are made from medium-carbon and alloy steels that respond well to induction
              hardening. Explore our dedicated grade pages for hardness, case depth and application detail:
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { grade: 'EN8', note: 'C45 / 080M40 — PTO & axle shafts', href: '/induction-heat-treatment/en8-steel-induction-hardening' },
                { grade: 'EN19', note: '4140 Cr-Mo — gears & shafts', href: '/induction-heat-treatment/en19-steel-induction-hardening' },
                { grade: 'EN24', note: '4340 Ni-Cr-Mo — high-torque axles', href: '/induction-heat-treatment/en24-steel-hardening' },
                { grade: '4140', note: '42CrMo4 — heavy implement parts', href: '/induction-heat-treatment/4140-steel-hardening' },
              ].map((m) => (
                <Link
                  key={m.grade}
                  href={m.href}
                  className="group flex flex-col items-center text-center p-6 bg-secondary/30 border border-border rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all h-full"
                >
                  <span className="text-2xl font-black uppercase italic text-primary mb-1">{m.grade}</span>
                  <span className="text-xs text-muted-foreground font-bold uppercase tracking-tight mb-3">{m.note}</span>
                  <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-black uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    View Grade <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Image + soil-contact context */}
          <section className="py-16 border-t border-border grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-last lg:order-first">
              <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-none">
                Hardening for <span className="text-primary">Soil-Engaging Parts</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Cultivator tines, plough shares, harrow discs and rotavator tiller blades cut through abrasive soil every season.
                Surface and edge hardening keeps these implements sharp and wear-resistant, while selective induction hardening on
                gears and shafts protects transmission components from fatigue under field torque.
              </p>
              <ul className="space-y-4 text-base md:text-lg text-muted-foreground font-medium">
                {[
                  'Sharp, wear-resistant cutting edges on tines, blades and discs',
                  'Hardened tooth flanks and roots on rotavator and gearbox gears',
                  'Full-length shaft hardening for PTO, axle and seeder drives',
                  'Documented HRC and case-depth reports for OEM inspection',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 md:h-[420px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
              {agriParts && (
                <Image
                  src={agriParts.imageUrl}
                  alt="Hardened cultivator tines and tractor implement blades for agricultural parts hardening in Punjab"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  data-ai-hint={agriParts.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </section>

          {/* Pricing & Turnaround */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// PRICING & TURNAROUND //</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-6 text-center leading-none">
              Tractor Parts Hardening <span className="text-primary">Rates & Lead Time</span>
            </h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive <strong>tractor parts hardening rates</strong> for both prototype batches and bulk seasonal OEM
              production. Final pricing depends on component weight, size, case depth, steel grade and quantity — share your
              drawing for an exact quote within 24 hours.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk and repeat seasonal OEM orders.' },
                { icon: FileText, title: 'Minimum Order', desc: 'No rigid minimum — single trial parts to multi-thousand-piece implement lots accepted.' },
                { icon: Clock, title: 'Turnaround', desc: 'Standard 2–4 working days; urgent pre-season batches for regular agricultural clients.' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center p-8 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-10 w-10 text-primary mb-5" />
                  <h3 className="text-lg font-black uppercase italic tracking-tighter mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tight px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
              >
                <MessageSquare className="h-5 w-5" /> Get Your Tractor Parts Quote
              </a>
            </div>
          </section>

          {/* Why tractor & implement makers trust us */}
          <section className="py-24 border-t border-border">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Why Tractor & <span className="text-primary">Implement Makers Trust Us</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-6 p-8 bg-secondary/20 border border-border rounded-2xl">
                  <b.icon className="h-10 w-10 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-black uppercase italic tracking-tight text-foreground mb-2">{b.title}</h3>
                    <p className="text-muted-foreground">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Locations we serve for agri */}
          <section className="py-16 border-t border-border text-center">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-6">
              Agricultural Clusters <span className="text-primary">We Serve in Punjab</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Pickup and delivery available to all major tractor and agri parts manufacturing areas in Punjab:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Ludhiana', 'Jalandhar', 'Hoshiarpur', 'Nawanshahr', 'Phagwara', 'Patiala', 'Sangrur', 'Mandi Gobindgarh', 'Khanna', 'Malerkotla', 'Jagraon'].map(city => (
                <span key={city} className="px-4 py-2 bg-secondary/40 border border-border rounded-full text-sm font-bold text-foreground">{city}</span>
              ))}
            </div>
          </section>

          {/* FAQ — synced with FAQPage schema */}
          <ServiceFAQ
            heading="Tractor & Agricultural Parts Hardening FAQs"
            faqItems={FAQ_ITEMS}
          />

          {/* Related Services — keyword-anchor internal links */}
          <section className="py-16 border-t border-border">
            <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Related <span className="text-primary">Hardening Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: 'Gear Hardening in Ludhiana', label: 'Rotavator & gearbox gears', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                { title: 'Shaft Hardening in Ludhiana', label: 'PTO, axle & seeder shafts', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                { title: 'Surface Hardening', label: 'Tines, blades & harrow discs', href: '/surface-hardening' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group p-8 bg-secondary/30 border border-border rounded-2xl transition-all hover:border-primary/50 flex flex-col items-center text-center"
                >
                  <h3 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm">{link.title}</h3>
                  <p className="text-xs text-muted-foreground mt-2">{link.label}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-black uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 border-t border-border text-center">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4">
              Agri Parts Job Work <span className="text-primary">Enquiry</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Tell us your component, quantity, and required hardness — get a competitive rate in 24 hours.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${SITE_PHONE_NUMBER}`} className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-black uppercase italic tracking-tight hover:opacity-90 transition-opacity">
                <Phone className="h-5 w-5" /> Call Now
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-black uppercase italic tracking-tight hover:opacity-90 transition-opacity">
                <MessageSquare className="h-5 w-5" /> WhatsApp Drawing
              </a>
              <Link href="/contact" className="flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-xl font-black uppercase italic tracking-tight hover:bg-primary hover:text-primary-foreground transition-all">
                Get a Free Quote <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </section>

          {/* Authority outbound reference + freshness signal */}
          <div className="pb-12 text-center text-xs text-muted-foreground font-medium">
            <p className="mb-2">
              Learn more about the metallurgy of surface and induction hardening from the{' '}
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

        {/* Mobile sticky CTA — hidden on md+ */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur border-t border-border px-4 py-3 flex gap-3">
          <a href={`tel:${SITE_PHONE_NUMBER}`} className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase text-xs py-3 rounded-lg">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-black uppercase text-xs py-3 rounded-lg">
            <MessageSquare className="h-4 w-4" /> WhatsApp
          </a>
          <a href="/contact" className="flex-1 flex items-center justify-center gap-2 bg-secondary text-foreground font-black uppercase text-xs py-3 rounded-lg border border-border">
            Quote
          </a>
        </div>
      </div>
    </>
  );
}
