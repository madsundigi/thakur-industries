'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Cpu,
  Truck,
  Boxes,
  Gauge,
  FileText,
  Phone,
  MessageSquare,
  History,
  Settings,
  Clock,
  IndianRupee,
  Award,
  ShieldCheck,
  Star,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/gurugram`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent(
    'Hello, I am a Gurugram-based manufacturer and need induction hardening job work. Please find my component drawing attached.'
  );

// Animations
const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

// Frequently asked questions — single source of truth for both the visible
// accordion AND the FAQPage schema (kept in sync to avoid schema mismatch).
const FAQ_ITEMS = [
  {
    q: 'Do you provide induction hardening for Gurugram-based automotive OEMs and suppliers?',
    a: 'Yes. We supply induction hardening to Gurugram’s automotive OEM belt — Maruti Suzuki ancillaries, Tier-1 and Tier-2 component makers, and precision-engineering units across Gurugram (Gurgaon), IMT Manesar and the wider Delhi NCR. Every batch ships with Rockwell hardness reports, case-depth records and process-parameter sheets that pass OEM incoming inspection.',
  },
  {
    q: 'How does logistics work between Gurugram and your Ludhiana facility?',
    a: 'Our hardening facility is in Ludhiana, Punjab — roughly 310 km from Gurugram. We service Gurugram suppliers through scheduled freight and bulk consignments: components are collected, processed in production lots and returned with full documentation. Consolidating into bulk consignments keeps per-piece freight cost low and turnaround predictable for repeat OEM orders.',
  },
  {
    q: 'Can you handle the bulk volumes a Maruti-belt supplier needs?',
    a: 'Yes. We run dedicated production slots and monthly contracts for Gurugram suppliers, with batch sizes from trial lots of 50 pieces up to 2,000+ pieces per cycle. Bulk consignment processing is built around the volume and schedule of automotive OEM supply chains, with reduced per-piece rates on repeat lots.',
  },
  {
    q: 'What hardness and tolerance can you hold on precision automotive components?',
    a: 'We hold ±2 HRC across batches. Transmission gears reach 58–62 HRC, drive and output shafts 55–60 HRC, and crankshaft journals 55–58 HRC, with dimensional distortion controlled under 0.05 mm on CNC-controlled induction systems — critical for the precision mating components Gurugram suppliers ship to OEM assembly lines.',
  },
  {
    q: 'What steel grades do Gurugram suppliers typically send for hardening?',
    a: 'EN19 (4140), EN24 (4340), 20MnCr5, 16MnCr5 and EN36 are the most common grades from the Gurugram automotive cluster. Heating and quench parameters for each grade are pre-qualified, so there is no experimentation on your production batches — only repeatable, documented results.',
  },
  {
    q: 'How do I get a quote and start a trial batch from Gurugram?',
    a: 'Send your component drawing, steel grade, required case depth and monthly quantity on WhatsApp or via our contact form. We return an exact quotation within 24 hours and can schedule a trial consignment pickup from Gurugram before committing to a monthly contract.',
  },
];

export default function GurugramInductionHardeningPage() {
  const gearImage = PlaceHolderImages.find((img) => img.id === 'appGearHardening');
  const qcImage = PlaceHolderImages.find((img) => img.id === 'processHardening');

  // Service / LocalBusiness schema — enriched with offers, aggregateRating & areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Gurugram, Haryana',
    serviceType: 'Induction Hardening & Heat Treatment',
    url: `${PAGE_URL}/`,
    description:
      'Precision induction hardening for Gurugram automotive OEMs and ancillary suppliers — 55–62 HRC, controlled case depth, traceable hardness documentation and bulk consignment capacity. Served from our Ludhiana facility.',
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
    areaServed: ['Gurugram', 'Faridabad', 'Delhi', 'Noida'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Induction hardening job work priced per kg or per piece. Request a custom Gurugram quotation.',
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
      <BreadcrumbJsonLd
        items={[
          { name: 'Induction Heat Treatment', href: '/induction-heat-treatment' },
          { name: 'Induction Hardening in Gurugram', href: '/induction-heat-treatment/gurugram' },
        ]}
      />

      <div className="bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">

          {/* Visible breadcrumb trail (matches BreadcrumbList schema) */}
          <nav aria-label="Breadcrumb" className="pt-24 md:pt-28">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/induction-heat-treatment" className="hover:text-primary transition-colors">Induction Heat Treatment</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary">Gurugram</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Gurugram"
            description="Precision induction hardening for Gurugram’s automotive OEM belt and ancillary suppliers — 55–62 HRC with controlled case depth, traceable hardness documentation and bulk consignment capacity, served from our Ludhiana facility."
            className="text-center !pt-6"
          />

          {/* Above-the-fold trust badges + CTA cluster */}
          <motion.div
            className="-mt-4 mb-4 flex flex-col items-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Award, label: '55–62 HRC' },
                { icon: ShieldCheck, label: 'Traceable Reports' },
                { icon: Truck, label: 'Bulk Consignment' },
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
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground font-black uppercase italic tracking-tight">
                <a href={`tel:${SITE_PHONE_NUMBER}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Call for a Quote
                </a>
              </Button>
              <Button asChild size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white font-black uppercase italic tracking-tight border-none">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" /> WhatsApp Drawing
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto font-black uppercase italic tracking-tight border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Quote <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Intro — primary keyword in the first 100 words */}
          <motion.section
            className="py-12 md:py-16 border-b border-border text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              Looking for dependable <strong>induction hardening in Gurugram</strong>? <strong>{SITE_NAME}</strong> supplies the
              Gurugram (Gurgaon) automotive cluster — the Maruti Suzuki belt and its network of ancillary and precision-engineering
              suppliers — with tightly controlled induction hardening that raises wear surfaces to 55–62 HRC while keeping the core
              tough. Components are processed at our Ludhiana facility, roughly 310 km away, and returned through scheduled freight and
              bulk consignments with full traceable documentation.
            </p>
          </motion.section>

          {/* The Gurugram automotive ecosystem — unique local content block 1 */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// GURUGRAM AUTOMOTIVE BELT //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Built for the <span className="text-primary">Maruti Belt</span>
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Gurugram and the adjoining IMT Manesar zone form one of India’s densest automotive-OEM ecosystems. Maruti Suzuki’s
                    assembly operations anchor a deep supply chain of Tier-1 and Tier-2 ancillary suppliers producing transmission
                    parts, driveline shafts, fasteners, bearing assemblies and precision-machined components.
                  </p>
                  <p>
                    These OEM and ancillary units share one demand: surface hardness that is consistent batch after batch, fully
                    documented, and delivered without disrupting a just-in-time production line. That is exactly what our induction
                    hardening is engineered to provide for Gurugram manufacturers.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {[
                      'Maruti-belt OEM suppliers',
                      'Tier-1 & Tier-2 ancillaries',
                      'Precision-engineering units',
                      'Driveline & transmission makers',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span className="font-bold text-foreground uppercase tracking-tight text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className="relative h-72 md:h-[450px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
              >
                {gearImage && (
                  <Image
                    src={gearImage.imageUrl}
                    alt="Induction hardening of precision automotive components for Gurugram OEM suppliers at Thakur Industries Ludhiana"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Precision component hardening — unique local content block 2 */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// PRECISION COMPONENTS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Precision Component <span className="text-primary">Hardening</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              Automotive OEM work leaves no margin for variation. For Gurugram suppliers we run contour-following induction profiles
              that target the exact wear surface — gear flanks and roots, shaft journals, spline drives — while protecting bores and
              datums so parts return ready for assembly with minimal post-process grinding.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Settings, title: 'Transmission Gears', desc: 'Spur, helical and bevel gears hardened to 58–62 HRC with controlled root and flank depth.' },
                { icon: Gauge, title: 'Driveline Shafts', desc: 'Output, axle and propeller shafts at 55–60 HRC with concentricity preserved under 0.05 mm.' },
                { icon: Cpu, title: 'Crankshaft Journals', desc: 'Selective journal hardening to 55–58 HRC for engine and pump assemblies.' },
                { icon: Boxes, title: 'Bearing Races & Pins', desc: 'Uniform case on races, pins and rollers for fatigue life in high-cycle assemblies.' },
                { icon: Zap, title: 'Splines & Sprockets', desc: 'Drive splines and sprockets profiled for wear without embrittling the core.' },
                { icon: ShieldCheck, title: 'Fixtured Accuracy', desc: 'Pre-fixturing and CNC scan-hardening hold geometry on precision mating parts.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="bg-card/50 p-8 rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <item.icon className="h-8 w-8 text-primary mb-6" />
                  <h3 className="font-bold text-lg mb-3 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Logistics: Gurugram ↔ Ludhiana — unique local content block 3 */}
          <section className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
              >
                {qcImage && (
                  <Image
                    src={qcImage.imageUrl}
                    alt="Hardness testing and traceable documentation for Gurugram automotive components after induction hardening"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// FREIGHT & CONSIGNMENT //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Gurugram ↔ <span className="text-primary">Ludhiana</span> Logistics
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground font-medium">
                  <p>
                    At roughly 310 km, Gurugram is well within our regular freight corridor. We do not ask Gurugram suppliers to
                    compromise on hardening quality for proximity — instead, we make the distance invisible through disciplined
                    logistics:
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Scheduled freight pickup aligned to your production runs',
                      'Bulk consignment processing for low per-piece freight cost',
                      'Components returned in 2–4 working days with full documentation',
                      'Trial consignment available before any monthly contract',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm pt-2">
                    <MapPin className="h-5 w-5" /> Serving Gurugram · Faridabad · Delhi · Noida
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Technical Specifications Table */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// SPECIFICATIONS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Hardening <span className="text-primary">Specifications</span>
            </motion.h2>
            <motion.div
              className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <table className="w-full text-left">
                <tbody className="text-sm md:text-base">
                  {[
                    ['Surface Hardness', '55–62 HRC (component-dependent)'],
                    ['Hardness Tolerance', '±2 HRC across batches'],
                    ['Case Depth', '0.8 mm – 3.5 mm (controlled to spec)'],
                    ['Distortion Control', 'Under 0.05 mm on CNC-controlled systems'],
                    ['Steel Grades', 'EN19, EN24, 20MnCr5, 16MnCr5, EN36'],
                    ['Batch Sizes', '50 to 2,000+ pieces per cycle'],
                    ['Logistics', 'Freight & bulk consignment from Ludhiana (~310 km)'],
                    ['Turnaround', '2–4 working days after receipt'],
                    ['Documentation', 'Rockwell reports, case-depth & process-parameter sheets'],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? 'bg-secondary/30' : 'bg-card'}>
                      <th scope="row" className="py-4 px-5 font-black uppercase italic tracking-tight text-foreground align-top w-1/2">
                        {k}
                      </th>
                      <td className="py-4 px-5 text-muted-foreground font-medium">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </section>

          {/* Materials We Harden — internal links to material-grade & service pages */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// SERVICES & MATERIALS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              What We Harden for <span className="text-primary">Gurugram</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { grade: 'Gears', note: 'Transmission & drive gears', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                { grade: 'Shafts', note: 'Axle & output shafts', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                { grade: 'Crankshafts', note: 'Engine & pump journals', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
                { grade: 'Case Hardening', note: 'Carburized component depth', href: '/case-hardening-heat-treatment' },
              ].map((m) => (
                <motion.div key={m.grade} variants={scaleUp}>
                  <Link
                    href={m.href}
                    className="group flex flex-col items-center text-center p-6 bg-secondary/30 border border-border rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all h-full"
                  >
                    <span className="text-xl font-black uppercase italic text-primary mb-1">{m.grade}</span>
                    <span className="text-xs text-muted-foreground font-bold uppercase tracking-tight mb-3">{m.note}</span>
                    <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-black uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Pricing & Turnaround */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// PRICING & TURNAROUND //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Gurugram <span className="text-primary">Rates & Lead Time</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive job-work rates for Gurugram’s OEM suppliers, with bulk-consignment pricing that absorbs freight
              over larger lots. Final pricing depends on component weight, size, case depth, steel grade and monthly quantity — share
              your drawing for an exact quote within 24 hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk and repeat OEM consignments.' },
                { icon: FileText, title: 'Documentation', desc: 'Every consignment ships with Rockwell, case-depth and process records.' },
                { icon: Clock, title: 'Turnaround', desc: 'Standard 2–4 working days after receipt; schedules aligned to your line.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-8 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-10 w-10 text-primary mb-5" />
                  <h3 className="text-lg font-black uppercase italic tracking-tighter mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-center mt-10">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-black uppercase italic tracking-tight">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" /> Get Your Gurugram Quote
                </a>
              </Button>
            </div>
          </section>

          {/* Why Gurugram suppliers choose us — trust / E-E-A-T */}
          <section className="py-20 border-t border-border">
            <p className="section-label text-center">// WHY CHOOSE US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Gurugram Suppliers Trust <span className="text-primary">{SITE_NAME}</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Award, title: 'Batch Consistency', desc: 'Repeatable 55–62 HRC on every consignment — no surprises at incoming inspection.' },
                { icon: FileText, title: 'Traceable Documentation', desc: 'Rockwell, case-depth and process sheets that satisfy OEM quality systems.' },
                { icon: Truck, title: 'Bulk Capacity', desc: 'Consignment processing sized for Maruti-belt production volumes.' },
                { icon: ShieldCheck, title: 'Process Discipline', desc: 'Pre-qualified parameters per grade — no experimentation on your parts.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Quality Assurance */}
          <section className="py-24 border-t border-border">
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-16 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Quality <span className="text-primary">Assurance</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Gauge, title: 'Hardness Verification', desc: 'Multi-point Rockwell testing on every batch before dispatch.' },
                { icon: Cpu, title: 'Case-Depth Check', desc: 'Measured case depth confirmed against your specification.' },
                { icon: Settings, title: 'Dimensional Inspection', desc: 'Concentricity and datum checks on precision mating parts.' },
                { icon: FileText, title: 'Traceability', desc: 'Digital logging of every cycle for OEM documentation.' },
              ].map((step, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-8 bg-card rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <step.icon className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold uppercase italic tracking-tighter mb-3">{step.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 3-Step Workflow */}
          <section className="py-16 border-t border-border">
            <p className="section-label text-center">// PROCESS //</p>
            <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-center mb-12">
              How Gurugram Orders <span className="text-primary">Work</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-0.5 bg-primary/20" />
              {[
                { title: 'Share Drawing & Quantity', description: 'Send your component drawing, steel grade, case-depth spec and monthly volume — we quote within 24 hours.' },
                { title: 'Trial Consignment', description: 'We schedule a freight pickup from Gurugram and process a trial lot with full hardness documentation.' },
                { title: 'Monthly Bulk Contract', description: 'On approval, we run dedicated slots and recurring consignments aligned to your production line.' },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4 relative">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary font-black text-xl">
                    {i + 1}
                  </div>
                  <h3 className="font-black uppercase italic text-sm md:text-base">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Nearby Locations + Related Services */}
          <section className="py-24 border-t border-border">
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Nearby Locations & <span className="text-primary">Services</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Induction Hardening in Faridabad', href: '/induction-heat-treatment/faridabad', icon: MapPin, label: 'NCR Manufacturing Hub' },
                { title: 'Induction Hardening in Delhi', href: '/induction-heat-treatment/delhi', icon: MapPin, label: 'Delhi NCR Industries' },
                { title: 'Induction Hardening in Noida', href: '/induction-heat-treatment/noida', icon: MapPin, label: 'Noida & Greater Noida' },
                { title: 'Induction Heat Treatment Guide', href: '/induction-heat-treatment', icon: Cpu, label: 'Main Service Hub' },
                { title: 'Automotive Industry Solutions', href: '/industries/automotive', icon: Settings, label: 'OEM Component Hardening' },
                { title: 'Crankshaft Hardening Ludhiana', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana', icon: History, label: 'Engine Components' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <motion.div
                    variants={scaleUp}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-secondary/30 border border-border rounded-2xl transition-all hover:border-primary/50 flex flex-col items-center text-center shadow-sm h-full"
                  >
                    <link.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm">{link.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2">{link.label}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ — synced with FAQPage schema */}
          <motion.section
            className="py-24 max-w-4xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none">
              Gurugram Induction Hardening <span className="text-primary">FAQs</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem key={item.q} value={`faq-${i}`} className="border rounded-2xl bg-secondary/30 px-8 transition-all hover:border-primary/20 group">
                  <AccordionTrigger className="text-left font-bold uppercase italic tracking-tight text-base md:text-lg hover:text-primary py-6 hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 font-medium leading-relaxed text-base">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>

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

        {/* Mobile sticky CTA — hidden on md+ */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur border-t border-border px-4 py-3 flex gap-3 animate-in slide-in-from-bottom duration-500">
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
