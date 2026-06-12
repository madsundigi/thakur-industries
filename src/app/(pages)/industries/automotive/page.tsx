import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceFAQ } from '@/components/shared/ServiceFAQ';
import {
  CheckCircle2,
  ArrowRight,
  Car,
  Gauge,
  ShieldCheck,
  Zap,
  Phone,
  MessageSquare,
  Clock,
  IndianRupee,
  Award,
  Star,
  FileText,
} from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CTASection } from '@/components/home/CTASection';

const TITLE = 'Heat Treatment for Auto Parts in Ludhiana | Thakur Industries';
const DESCRIPTION =
  'Precision heat treatment for auto parts in Ludhiana — induction hardening of automotive gears, shafts, crankshafts, camshafts & axles to 55–62 HRC with Rockwell reports. Send your drawing for a free quote in 24 hours. Call +91 7900000776.';
const PAGE_URL = `${SITE_URL}/industries/automotive`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent(
    'Hello Thakur Industries, I need heat treatment for auto parts in Ludhiana. Please find my component drawing attached for a quote.',
  );

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/industries/automotive' },
  keywords: [
    'heat treatment for auto parts Ludhiana',
    'auto parts heat treatment',
    'automotive component hardening Ludhiana',
    'automotive heat treatment Punjab',
    'automotive induction hardening Ludhiana',
    'gear hardening automotive',
    'shaft hardening automotive',
    'crankshaft hardening automotive',
    'automotive axle hardening Punjab',
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
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
  { name: 'Transmission Gears & Pinions', desc: 'Tooth-by-tooth induction hardening for spur, helical, and bevel gears. Consistent case depth 1–2mm with zero distortion.', hardness: '58–62 HRC', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
  { name: 'Drive Shafts & Propeller Shafts', desc: 'Surface hardening for drive shafts, ensuring high fatigue strength under torsional loads. EN19 and EN24 grades.', hardness: '55–60 HRC', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
  { name: 'Crankshafts & Camshafts', desc: 'Journal and pin hardening on diesel/petrol engine crankshafts. Selective hardening without affecting core toughness.', hardness: '55–58 HRC', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
  { name: 'Rear & Front Axles', desc: 'Full-length or zone-specific hardening for front and rear axles in trucks, tractors, and passenger vehicles.', hardness: '55–60 HRC', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
  { name: 'Bearing Journals & Races', desc: 'Wheel hub bearings, clutch bearings, and roller bearing races — precision surface hardening for rotational stability.', hardness: '60–64 HRC', href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana' },
  { name: 'Differential & Gearbox Parts', desc: 'Crown wheels, bevel pinions, and gearbox shafts for commercial vehicles and passenger cars.', hardness: '58–62 HRC', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
];

const benefits = [
  { icon: ShieldCheck, title: 'OEM-Grade Consistency', desc: 'Tight HRC tolerance (±2 HRC) with Rockwell test reports for every batch. Suitable for tier-1 and tier-2 OEM supply chains.' },
  { icon: Gauge, title: 'Zero Distortion Technology', desc: 'Our CNC-controlled induction systems and precision quenching keep dimensional distortion under 0.05mm — critical for mating parts.' },
  { icon: Zap, title: 'Fast Batch Turnaround', desc: '2–4 day standard turnaround. Monthly production contracts available for regular automotive component manufacturers.' },
  { icon: CheckCircle2, title: 'Punjab-Wide Pickup & Delivery', desc: 'We collect components from your factory in Ludhiana, Jalandhar, Phagwara, Mandi Gobindgarh, or anywhere in Punjab.' },
];

// Frequently asked questions — single source of truth for both the visible
// ServiceFAQ accordion AND the FAQPage schema (kept in sync to avoid mismatch).
const FAQ_ITEMS = [
  {
    question: 'What automotive components do you harden at Thakur Industries?',
    answer:
      'We harden transmission gears, drive shafts, crankshafts, rear axles, differential gears, bearing races, and camshafts for automotive OEMs and Tier-1 suppliers across Punjab. All jobs come with Rockwell hardness test reports.',
  },
  {
    question: 'What hardness is achieved on automotive gears and shafts?',
    answer:
      'Transmission gears typically achieve 58–62 HRC with 1.0–2.0mm case depth. Drive shafts achieve 55–60 HRC with 2–4mm case depth. Crankshaft journals achieve 55–58 HRC. All within ±2 HRC tolerance.',
  },
  {
    question: 'Do you supply to Tier-1 automotive OEMs in Punjab?',
    answer:
      'Yes. We supply to automotive Tier-1 and Tier-2 manufacturers in Ludhiana, Phagwara, and Jalandhar. Our quality documentation — Rockwell reports, process parameter sheets — meets OEM incoming inspection requirements.',
  },
  {
    question: 'What is the turnaround time for automotive production batches?',
    answer:
      'Standard 2–4 working days. For monthly production contracts, we schedule dedicated processing slots aligned to your production schedule. High-volume OEM batches of 500+ pieces are handled regularly.',
  },
  {
    question: 'Can you harden EN19, EN24, or 4140 steel automotive parts?',
    answer:
      'Yes. EN19 (4140), EN24 (4340), and 20MnCr5 are the most common automotive gear and shaft steels we process. Each material grade has specific heating and quench parameters dialled in for consistent results.',
  },
  {
    question: 'How much does heat treatment for auto parts in Ludhiana cost?',
    answer:
      'Pricing for auto parts heat treatment is set per kilogram or per piece, depending on component weight, required case depth, steel grade and order quantity. Bulk and monthly OEM contracts receive the best rates. Share your drawing on WhatsApp for an exact quote within 24 hours.',
  },
];

export default function AutomotivePage() {
  const automotiveImage = PlaceHolderImages.find((img) => img.id === 'industryAutomotive');
  const gearImage = PlaceHolderImages.find((img) => img.id === 'appGearHardening');
  const shaftImage = PlaceHolderImages.find((img) => img.id === 'appShaftHardening');

  // Service schema — enriched with serviceType, offers (INR → /contact),
  // aggregateRating, wider areaServed and a full provider postal address.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Heat Treatment for Auto Parts in Ludhiana',
    serviceType: 'Heat Treatment for Automotive Components',
    url: `${PAGE_URL}/`,
    description:
      'Precision induction heat treatment for auto parts in Ludhiana — gears, shafts, crankshafts, camshafts, axles and bearings hardened to 55–62 HRC with Rockwell hardness reports for automotive OEMs and Tier-1 suppliers across Punjab.',
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
    areaServed: ['Ludhiana', 'Mandi Gobindgarh', 'Jalandhar', 'Phagwara', 'Khanna', 'Patiala', 'Chandigarh', 'Punjab'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Auto parts heat treatment job work priced per kg or per piece. Request a custom quotation.',
      url: `${SITE_URL}/contact`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      reviewCount: '127',
    },
  };

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Industries', href: '/industries' }, { name: 'Automotive', href: '/industries/automotive' }]} />
      <JsonLd data={schema} />
      {/* FAQPage schema is emitted by <ServiceFAQ> below, synced to the visible accordion */}

      <div className="bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">

          {/* Visible breadcrumb trail (matches BreadcrumbList schema) */}
          <nav aria-label="Breadcrumb" className="pt-24 md:pt-28">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary">Automotive</li>
            </ol>
          </nav>

          {/* H1 — exact target: "Heat Treatment for Auto Parts in Ludhiana" */}
          <PageHeader
            title="Heat Treatment for Auto Parts in"
            highlightedWord="Ludhiana"
            description={`${SITE_NAME} provides OEM-grade induction heat treatment for Ludhiana's automotive components — gears, shafts, crankshafts, camshafts and axles — hardened to 55–62 HRC with certified Rockwell hardness reports and fast turnaround.`}
            className="text-center !pt-6"
          />

          {/* Above-the-fold trust badges + CTA cluster */}
          <div className="-mt-4 mb-4 flex flex-col items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Award, label: '55–62 HRC' },
                { icon: ShieldCheck, label: 'Rockwell Reports' },
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tight px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
              >
                <Phone className="h-5 w-5" /> Call for a Quote
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-black uppercase italic tracking-tight px-8 py-3.5 rounded-xl hover:bg-[#25D366]/90 transition-colors"
              >
                <MessageSquare className="h-5 w-5" /> WhatsApp Drawing
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-primary text-primary font-black uppercase italic tracking-tight px-8 py-3.5 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Get Free Quote <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Hero image + intro — primary keyword in the first 100 words */}
          <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-border">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Car className="h-8 w-8 text-primary" />
                <span className="text-primary font-black uppercase italic tracking-widest text-sm">Automotive Industry</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">
                Powering Punjab&apos;s <span className="text-primary">Auto Parts</span> Industry
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Looking for reliable <strong>heat treatment for auto parts in Ludhiana</strong>? Ludhiana is North India&apos;s largest auto parts manufacturing hub — producing components for Tata, Mahindra, Hero, Bajaj, and hundreds of tier-1 suppliers. {SITE_NAME} has been the trusted automotive component hardening partner for this ecosystem for over two decades.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From transmission gears to crankshaft journals, we deliver induction-hardened components with consistent hardness, minimal distortion, and fully documented quality reports — exactly what automotive OEMs and Tier-1 supply chains demand.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '55–62 HRC', label: 'Hardness Range' },
                  { value: '0.5–6mm', label: 'Case Depth' },
                  { value: '< 0.05mm', label: 'Distortion' },
                  { value: '2–4 Days', label: 'Turnaround' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 bg-secondary/30 rounded-xl border border-border text-center">
                    <p className="text-2xl font-black text-primary italic">{stat.value}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[420px] rounded-3xl overflow-hidden border border-primary/20 shadow-[0_0_40px_rgba(255,0,0,0.12)]">
              {automotiveImage && (
                <Image
                  src={automotiveImage.imageUrl}
                  alt="Heat treatment for auto parts in Ludhiana — induction hardened automotive components at Thakur Industries"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  data-ai-hint={automotiveImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </section>

          {/* Components Grid — internal links to component service pages */}
          <section className="py-24">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-4 text-center">
              Automotive Components <span className="text-primary">We Harden</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              We provide induction heat treatment for the full range of automotive parts — explore our dedicated{' '}
              <Link href="/induction-heat-treatment/induction-hardening-gears-ludhiana" className="text-primary font-bold hover:underline">gear hardening</Link>,{' '}
              <Link href="/induction-heat-treatment/induction-hardening-shafts-ludhiana" className="text-primary font-bold hover:underline">shaft hardening</Link> and{' '}
              <Link href="/induction-heat-treatment/crankshafts-induction-hardening-ludhiana" className="text-primary font-bold hover:underline">crankshaft hardening</Link> pages. All components are processed per your material grade and hardness specification, with test reports included.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((comp) => (
                <Link key={comp.name} href={comp.href} className="group">
                  <div className="p-6 bg-secondary/20 border border-border rounded-2xl hover:border-primary/50 hover:shadow-[0_0_20px_rgba(255,0,0,0.07)] transition-all h-full">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-black uppercase italic tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">{comp.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{comp.desc}</p>
                    <span className="text-xs font-black text-primary bg-primary/10 px-3 py-1 rounded-full">{comp.hardness}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Material grades — internal links to material-grade pages */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// MATERIALS //</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-6 text-center">
              Automotive <span className="text-primary">Steel Grades</span> We Treat
            </h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              EN19, EN24 and 4140 are the workhorse steels behind automotive gears, shafts and crankshafts. Explore our dedicated material-grade pages for hardness, case depth and application detail:
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { grade: 'EN8', note: '080M40 carbon steel', href: '/induction-heat-treatment/en8-steel-induction-hardening' },
                { grade: 'EN19', note: '4140 Cr-Mo alloy', href: '/induction-heat-treatment/en19-steel-induction-hardening' },
                { grade: 'EN24', note: '4340 Ni-Cr-Mo alloy', href: '/induction-heat-treatment/en24-steel-hardening' },
                { grade: '4140', note: '42CrMo4 / SCM440', href: '/induction-heat-treatment/4140-steel-hardening' },
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

          {/* Why choose us for automotive */}
          <section className="py-24 border-t border-border">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Why Automotive OEMs <span className="text-primary">Choose Us</span>
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

          {/* Why Auto OEMs Trust Us — E-E-A-T trust signals */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// WHY AUTO OEMs TRUST US //</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Why Auto OEMs Trust <span className="text-primary">{SITE_NAME}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Award, title: 'Two Decades Serving Ludhiana', desc: 'A trusted automotive component hardening partner to North India’s auto parts cluster.' },
                { icon: ShieldCheck, title: 'OEM Quality Documentation', desc: 'Rockwell reports and process parameter sheets accepted at Tier-1 incoming inspection.' },
                { icon: Gauge, title: 'Repeatable Precision', desc: '±2 HRC tolerance and <0.05mm distortion, batch after batch on mating parts.' },
                { icon: Clock, title: 'Production-Ready Turnaround', desc: '2–4 day standard delivery with monthly contract slots to keep your line running.' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing & Turnaround — mid-funnel commercial keywords */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// PRICING & TURNAROUND //</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-8 text-center">
              Auto Parts Heat Treatment <span className="text-primary">Rates & Lead Time</span>
            </h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive <strong>auto parts heat treatment rates</strong> for both prototype batches and bulk OEM production. Final pricing depends on component weight, size, case depth, steel grade and quantity — share your drawing for an exact quote within 24 hours.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk and monthly OEM production contracts.' },
                { icon: FileText, title: 'Minimum Order', desc: 'No rigid minimum — single trial parts to multi-thousand-piece automotive lots accepted.' },
                { icon: Clock, title: 'Turnaround', desc: 'Standard 2–4 working days; dedicated slots for regular automotive manufacturers.' },
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
                <MessageSquare className="h-5 w-5" /> Get Your Auto Parts Quote
              </a>
            </div>
          </section>

          {/* Work examples */}
          <section className="py-24 border-t border-border">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Sample <span className="text-primary">Work</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { img: gearImage, title: 'Gear Tooth Hardening', alt: 'Induction hardened automotive transmission gear teeth at Thakur Industries Ludhiana', desc: 'Automotive transmission gears — 60 HRC, 1.5mm case depth, zero distortion. EN24 steel.' },
                { img: shaftImage, title: 'Drive Shaft Hardening', alt: 'Surface hardened automotive drive shafts for auto parts heat treatment in Ludhiana', desc: 'CV joint shafts and propeller shafts — 58 HRC, 3mm case depth. EN19 steel. Batch of 200 pcs.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl overflow-hidden border border-border">
                  <div className="relative h-56">
                    {item.img && (
                      <Image
                        src={item.img.imageUrl}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        data-ai-hint={item.img.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-white font-black uppercase italic tracking-tight">{item.title}</h3>
                  </div>
                  <div className="p-5 bg-secondary/20">
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/our-work" className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-xl font-black uppercase italic tracking-tight hover:bg-primary hover:text-primary-foreground transition-all">
                View Full Portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* FAQ — synced with FAQPage schema */}
          <ServiceFAQ heading="Automotive Heat Treatment FAQs" faqItems={FAQ_ITEMS} />

          {/* CTA */}
          <section className="py-16 border-t border-border text-center">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4">
              Ready to Place an <span className="text-primary">Automotive Order?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Share your component drawing or specs and get a competitive rate within 24 hours. Monthly production batches welcome.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-black uppercase italic tracking-tight hover:opacity-90 transition-opacity">
                Get a Free Quote <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-xl font-black uppercase italic tracking-tight hover:bg-primary hover:text-primary-foreground transition-all">
                Contact Us
              </Link>
            </div>
          </section>

          {/* Authority outbound reference + freshness signal */}
          <div className="pb-12 text-center text-xs text-muted-foreground font-medium">
            <p className="mb-2">
              Learn more about the metallurgy of surface hardening from the{' '}
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

        {/* Mobile sticky CTA — hidden on md+ (plain anchors + CSS, no hooks) */}
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
