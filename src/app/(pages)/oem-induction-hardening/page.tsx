import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  Factory,
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
  Globe,
  Boxes,
  Truck,
  ClipboardCheck,
} from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CTASection } from '@/components/home/CTASection';

const TITLE = 'Induction Hardening for OEM Components | Thakur';
const DESCRIPTION =
  'Induction hardening for OEM components in Ludhiana, Punjab — bulk capacity, repeatable HRC, traceable test reports and export-quality consistency for automotive OEMs across India. Get a supply quote in 24 hours.';
const PAGE_URL = `${SITE_URL}/oem-induction-hardening`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent(
    'Hello Thakur Industries, we are an OEM/exporter looking for a bulk induction hardening partner. Please share capacity, documentation and rates — drawing attached.',
  );

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/oem-induction-hardening' },
  keywords: [
    'induction hardening for OEM components',
    'OEM induction hardening',
    'heat treatment vendor for automotive OEM',
    'export quality induction hardening India',
    'OEM job work',
    'bulk induction hardening Ludhiana',
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

const TOC = [
  { id: 'capabilities', label: 'OEM Job-Work Capabilities' },
  { id: 'components', label: 'Components We Harden' },
  { id: 'automotive-vendor', label: 'Automotive OEM Vendor' },
  { id: 'export', label: 'Export-Quality Hardening' },
  { id: 'documentation', label: 'Quality Documentation' },
  { id: 'partner', label: 'Become a Supply Partner' },
  { id: 'faq', label: 'FAQs' },
];

const capabilities = [
  {
    icon: Boxes,
    title: 'Bulk Production Capacity',
    desc: 'High-throughput induction lines built for multi-thousand-piece OEM lots and recurring monthly schedules, not just one-off jobs.',
  },
  {
    icon: Gauge,
    title: 'Repeatable HRC',
    desc: 'CNC-controlled heating and quenching hold hardness to ±2 HRC, batch after batch, so every shipment matches your incoming-inspection spec.',
  },
  {
    icon: FileText,
    title: 'Traceable Test Reports',
    desc: 'Each batch ships with Rockwell hardness reports, case-depth verification and process-parameter sheets, logged for full traceability.',
  },
  {
    icon: Truck,
    title: 'Supply Reliability',
    desc: 'Dedicated processing slots, on-time dispatch and freight coordination keep your assembly line and export schedule running.',
  },
];

const components = [
  {
    name: 'Transmission Gears & Pinions',
    desc: 'Tooth-by-tooth hardening for spur, helical and bevel gears at consistent case depth.',
    hardness: '58–62 HRC',
    href: '/induction-heat-treatment/induction-hardening-gears-ludhiana',
  },
  {
    name: 'Shafts & Axles',
    desc: 'Drive shafts, propeller shafts and axles surface-hardened for fatigue strength under torsional load.',
    hardness: '55–60 HRC',
    href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana',
  },
  {
    name: 'Crankshafts & Camshafts',
    desc: 'Selective journal and pin hardening on engine crankshafts without compromising core toughness.',
    hardness: '55–58 HRC',
    href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana',
  },
  {
    name: 'Bearing Journals & Races',
    desc: 'Precision surface hardening of hub bearings, races and rollers for rotational stability.',
    hardness: '60–64 HRC',
    href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana',
  },
];

const materials = [
  { grade: '4140 / 42CrMo4', note: 'EN19 Cr-Mo alloy', href: '/induction-heat-treatment/4140-steel-hardening' },
  { grade: '4340 / EN24', note: 'Ni-Cr-Mo alloy', href: '/induction-heat-treatment/en24-steel-hardening' },
  { grade: 'EN19', note: '4140 equivalent', href: '/induction-heat-treatment/en19-steel-induction-hardening' },
  { grade: 'EN8', note: '080M40 carbon steel', href: '/induction-heat-treatment/en8-steel-induction-hardening' },
];

// Single source of truth for both the visible FAQ and the FAQPage schema.
const FAQ_ITEMS = [
  {
    q: 'How do you onboard a new OEM for induction hardening job work?',
    a: 'Onboarding starts with your component drawing, steel grade and target hardness/case-depth spec. We run a sample or trial batch, share Rockwell and case-depth reports for approval, agree on documentation format and pricing, then schedule recurring production slots. Most OEM accounts are qualified within one to two trial cycles.',
  },
  {
    q: 'What bulk capacity can you handle for OEM orders?',
    a: 'We routinely process multi-thousand-piece lots and recurring monthly schedules across gears, shafts, crankshafts and bearings. Capacity is allocated through dedicated slots so your production line and export commitments are not held up by other jobs.',
  },
  {
    q: 'What quality documentation is provided with each OEM batch?',
    a: 'Every batch ships with Rockwell hardness test reports, case-depth verification and process-parameter sheets, formatted to meet OEM incoming-inspection and ISO-grade audit requirements. Documentation is logged for full batch traceability.',
  },
  {
    q: 'Do you support exporters and provide export-quality induction hardening in India?',
    a: 'Yes. We deliver export-quality induction hardening for components made to international steel designations such as 4140/42CrMo4 and 4340/EN24, with consistent hardness and the documentation exporters across India need for their overseas buyers and customs paperwork.',
  },
  {
    q: 'Is there a minimum order quantity (MOQ) for OEM job work?',
    a: 'There is no rigid MOQ. We accept single trial parts for qualification through to high-volume production lots. Bulk and contract OEM orders receive the best per-piece pricing.',
  },
  {
    q: 'What is the turnaround time for OEM production batches?',
    a: 'Standard turnaround is 2–4 working days after we receive components and an approved spec. For recurring OEM contracts we reserve dedicated slots aligned to your production calendar, and urgent batches can be expedited for regular partners.',
  },
];

export default function OemInductionHardeningPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'industryAutomotive');
  const docsImage = PlaceHolderImages.find((img) => img.id === 'serviceCrossSection');

  // Service schema — serviceType, full provider address, areaServed (Punjab + India + Export),
  // INR offer → /contact, and aggregateRating.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening for OEM Components',
    serviceType: 'Induction Hardening for OEM Components',
    url: `${PAGE_URL}/`,
    description:
      'Bulk induction hardening job work for OEM components — gears, shafts, crankshafts and bearings hardened to repeatable HRC with traceable test reports and export-quality consistency for automotive OEMs and exporters across India.',
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
    areaServed: ['Punjab', 'India', 'Export'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'OEM induction hardening job work priced per kg or per piece. Request a custom supply quotation.',
      url: `${SITE_URL}/contact`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      reviewCount: '127',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <BreadcrumbJsonLd items={[{ name: 'OEM Induction Hardening', href: '/oem-induction-hardening' }]} />

      <div className="bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">

          {/* Visible breadcrumb trail (matches BreadcrumbList schema) */}
          <nav aria-label="Breadcrumb" className="pt-24 md:pt-28">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary">OEM Induction Hardening</li>
            </ol>
          </nav>

          {/* H1 — exact target: "Induction Hardening for OEM Components" */}
          <PageHeader
            title="Induction Hardening for"
            highlightedWord="OEM Components"
            description={`${SITE_NAME} is a reliable OEM job-work partner in Ludhiana, Punjab — bulk capacity, repeatable HRC and traceable documentation for automotive OEMs and exporters across India.`}
            className="text-center !pt-6"
          />

          {/* Above-the-fold trust badges + CTA cluster */}
          <div className="-mt-4 mb-4 flex flex-col items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Boxes, label: 'Bulk Capacity' },
                { icon: ShieldCheck, label: 'OEM-Grade Docs' },
                { icon: Globe, label: 'Export Ready' },
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
                <MessageSquare className="h-5 w-5" /> WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-primary text-primary font-black uppercase italic tracking-tight px-8 py-3.5 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Get Quote <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Answer-first lead — primary keyword in the first sentence */}
          <section className="py-12 md:py-16 border-b border-border text-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              For <strong>induction hardening for OEM components</strong>, {SITE_NAME} is the reliable job-work
              partner manufacturers rely on — built around bulk production capacity, batch-to-batch consistency and
              fully traceable documentation. From our Ludhiana, Punjab works we harden gears, shafts, crankshafts and
              bearings to repeatable HRC, then ship every lot with Rockwell reports for automotive OEMs and exporters
              across India.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="py-10 max-w-4xl mx-auto">
            <p className="section-label text-center">// ON THIS PAGE //</p>
            <ul className="mt-6 flex flex-wrap justify-center gap-3">
              {TOC.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex items-center gap-2 bg-secondary/30 border border-border text-foreground text-xs font-bold uppercase tracking-tight px-4 py-2 rounded-full hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* OEM Job-Work Capabilities */}
          <section id="capabilities" className="py-16 md:py-24 scroll-mt-28 border-t border-border">
            <p className="section-label text-center">// CAPABILITIES //</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 text-center leading-none">
              OEM Job-Work <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We are structured as a dedicated OEM job-work supplier — engineered for bulk capacity, repeatable
              hardness, traceable test reports and the supply reliability that keeps production and export schedules on
              track.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {capabilities.map((c) => (
                <div key={c.title} className="flex flex-col items-center text-center p-8 bg-secondary/30 rounded-2xl border border-border">
                  <c.icon className="h-10 w-10 text-primary mb-5" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-3">{c.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Components We Harden for OEMs */}
          <section id="components" className="py-16 md:py-24 scroll-mt-28 border-t border-border">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 text-center leading-none">
              Components We Harden <span className="text-primary">for OEMs</span>
            </h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We harden the full range of power-transmission and engine parts for OEM supply chains. Explore the
              dedicated{' '}
              <Link href="/induction-heat-treatment/induction-hardening-gears-ludhiana" className="text-primary font-bold hover:underline">gear hardening</Link>,{' '}
              <Link href="/induction-heat-treatment/induction-hardening-shafts-ludhiana" className="text-primary font-bold hover:underline">shaft hardening</Link>,{' '}
              <Link href="/induction-heat-treatment/crankshafts-induction-hardening-ludhiana" className="text-primary font-bold hover:underline">crankshaft hardening</Link> and{' '}
              <Link href="/induction-heat-treatment/induction-hardening-bearings-ludhiana" className="text-primary font-bold hover:underline">bearing hardening</Link> service pages.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

          {/* Heat Treatment Vendor for Automotive OEMs */}
          <section id="automotive-vendor" className="py-16 md:py-24 scroll-mt-28 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Factory className="h-8 w-8 text-primary" />
                  <span className="text-primary font-black uppercase italic tracking-widest text-sm">Automotive Supply</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 leading-none">
                  Heat Treatment Vendor for <span className="text-primary">Automotive OEMs</span>
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                  <p>
                    As an established <strong>heat treatment vendor for automotive OEM</strong> programmes, we serve
                    Tier-1 and Tier-2 suppliers manufacturing transmission, engine and chassis components. Our
                    documentation and ±2 HRC consistency are built to clear OEM incoming inspection on every shipment.
                  </p>
                  <p>
                    Located in the heart of North India&apos;s auto-parts cluster, we coordinate freight to the NCR and
                    Pune automotive belts, so OEMs and their suppliers across the country can treat us as an extension of
                    their own production line. Explore our{' '}
                    <Link href="/industries/automotive" className="text-primary font-bold hover:underline">automotive heat treatment</Link>{' '}
                    and{' '}
                    <Link href="/industries/agricultural" className="text-primary font-bold hover:underline">agricultural component hardening</Link>{' '}
                    capabilities.
                  </p>
                </div>
                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Tier-1 & Tier-2 supply experience',
                    'OEM incoming-inspection ready',
                    'Freight to NCR & Pune belts',
                    'Dedicated production slots',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-bold text-foreground uppercase tracking-tight text-xs">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-72 md:h-[440px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt="Induction hardening for OEM components — automotive parts processed for OEM supply at Thakur Industries Ludhiana"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </section>

          {/* Export-Quality Induction Hardening */}
          <section id="export" className="py-16 md:py-24 scroll-mt-28 border-t border-border">
            <p className="section-label text-center">// EXPORT GRADE //</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 text-center leading-none">
              Export-Quality <span className="text-primary">Induction Hardening</span>
            </h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We provide <strong>export quality induction hardening India</strong> manufacturers and merchant exporters
              depend on — export-grade hardness consistency, parts processed to international steel designations, and the
              documentation overseas buyers expect.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Globe, title: 'Export-Grade Consistency', desc: 'Tight, repeatable hardness and case depth that holds across large export lots and repeat shipments.' },
                { icon: Zap, title: 'International Designations', desc: 'Components hardened to 4140/42CrMo4, 4340/EN24 and equivalent global grades dialled in per spec.' },
                { icon: FileText, title: 'Exporter Documentation', desc: 'Hardness and process reports formatted to support customs paperwork and overseas buyer requirements.' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center p-8 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-10 w-10 text-primary mb-5" />
                  <h3 className="text-lg font-black uppercase italic tracking-tighter mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Material grades — internal links to material-grade pages */}
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mt-14 mb-8">
              We harden the workhorse OEM and export steels. Explore each material grade for hardness and case-depth
              detail:
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {materials.map((m) => (
                <Link
                  key={m.grade}
                  href={m.href}
                  className="group flex flex-col items-center text-center p-6 bg-secondary/30 border border-border rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all h-full"
                >
                  <span className="text-xl font-black uppercase italic text-primary mb-1">{m.grade}</span>
                  <span className="text-xs text-muted-foreground font-bold uppercase tracking-tight mb-3">{m.note}</span>
                  <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-black uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    View Grade <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Quality Documentation for OEMs */}
          <section id="documentation" className="py-16 md:py-24 scroll-mt-28 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative h-72 md:h-[420px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last">
                {docsImage && (
                  <Image
                    src={docsImage.imageUrl}
                    alt="Case-depth cross-section and HRC verification for OEM induction hardening quality documentation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div>
                <p className="section-label">// QUALITY DOCS //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 leading-none">
                  Quality Documentation <span className="text-primary">for OEMs</span>
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                  <p>
                    Every OEM batch is backed by complete quality documentation — Rockwell HRC reports, case-depth
                    verification and process-parameter sheets — produced under an ISO-grade, repeatable process and
                    logged for full traceability.
                  </p>
                  <p>
                    This is the paperwork your incoming-inspection and audit teams need to release parts without
                    friction. See our{' '}
                    <Link href="/quality-certifications" className="text-primary font-bold hover:underline">quality certifications</Link>{' '}
                    for the standards we work to.
                  </p>
                </div>
                <ul className="mt-8 space-y-4">
                  {[
                    { icon: ClipboardCheck, text: 'Rockwell HRC test reports per batch' },
                    { icon: Gauge, text: 'Case-depth verification to specification' },
                    { icon: ShieldCheck, text: 'ISO-grade, documented, repeatable process' },
                    { icon: FileText, text: 'Process-parameter sheets for full traceability' },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <item.icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Become a Supply Partner — CTA section */}
          <section id="partner" className="py-16 md:py-20 scroll-mt-28 border-t border-border">
            <div className="bg-secondary/20 rounded-[2rem] px-6 md:px-12 py-14 border border-primary/10 text-center max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 leading-none">
                Become a <span className="text-primary">Supply Partner</span>
              </h2>
              <p className="text-muted-foreground font-medium max-w-2xl mx-auto mb-10">
                Send us your component drawing, steel grade and target hardness. We will qualify a trial batch, share
                test reports and propose supply terms for bulk OEM and export production — typically within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`tel:${SITE_PHONE_NUMBER}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tight px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Phone className="h-5 w-5" /> Call {SITE_PHONE_NUMBER}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-black uppercase italic tracking-tight px-8 py-4 rounded-xl hover:bg-[#25D366]/90 transition-colors"
                >
                  <MessageSquare className="h-5 w-5" /> WhatsApp Drawing
                </a>
                <Link
                  href="/get-quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-primary text-primary font-black uppercase italic tracking-tight px-8 py-4 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Get a Quote <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Why OEMs Choose Us — E-E-A-T trust signals */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// WHY OEMs CHOOSE US //</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Why OEMs &amp; Exporters Trust <span className="text-primary">{SITE_NAME}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Boxes, title: 'Built for Volume', desc: 'Bulk lines and dedicated slots sized for recurring multi-thousand-piece OEM orders.' },
                { icon: Award, title: 'Repeatable HRC', desc: '±2 HRC batch after batch, qualified against your incoming-inspection spec.' },
                { icon: Globe, title: 'Export Ready', desc: 'International grades and exporter documentation for buyers across India and overseas.' },
                { icon: Clock, title: 'Reliable Supply', desc: '2–4 day standard turnaround with contract slots to protect your schedule.' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing & Turnaround */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// PRICING & TURNAROUND //</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-8 text-center">
              OEM Job-Work <span className="text-primary">Rates &amp; Lead Time</span>
            </h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive OEM job-work rates for trial batches through to bulk and export production. Final
              pricing depends on component weight, case depth, steel grade and quantity — share your drawing for an exact
              quote within 24 hours.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with the best rates on bulk and contract OEM production.' },
                { icon: FileText, title: 'Minimum Order', desc: 'No rigid MOQ — single trial parts to multi-thousand-piece export lots accepted.' },
                { icon: Clock, title: 'Turnaround', desc: 'Standard 2–4 working days; dedicated slots for recurring OEM partners.' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center p-8 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-10 w-10 text-primary mb-5" />
                  <h3 className="text-lg font-black uppercase italic tracking-tighter mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ — synced with FAQPage schema */}
          <section id="faq" className="py-20 scroll-mt-28 max-w-4xl mx-auto border-t border-border">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none">
              OEM Hardening <span className="text-primary">FAQs</span>
            </h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((item) => (
                <details key={item.q} className="group border rounded-2xl bg-secondary/30 px-6 md:px-8 py-2 transition-all hover:border-primary/20">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-bold uppercase italic tracking-tight text-base md:text-lg group-hover:text-primary">
                    {item.q}
                    <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="pb-6 text-muted-foreground font-medium leading-relaxed text-base">{item.a}</p>
                </details>
              ))}
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
