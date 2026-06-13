'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Search,
  Gauge,
  FileText,
  Phone,
  MessageSquare,
  Settings,
  Clock,
  IndianRupee,
  Award,
  ShieldCheck,
  Star,
  MapPin,
  Truck,
  Boxes,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/panipat`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent(
    'Hello, I am from Panipat and need induction hardening job work. Please find my component drawing attached.'
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
    q: 'Do you provide induction hardening in Panipat?',
    a: 'Yes. We provide induction hardening job work for Panipat manufacturers across the textile-machinery, handloom-equipment, engineering and forging sectors. Components are collected from your Panipat unit, processed at our Ludhiana facility (about 190 km away), and returned within 2–4 working days with Rockwell hardness test reports for every batch.',
  },
  {
    q: 'Which Panipat components do you commonly harden?',
    a: 'Loom and weaving-machine shafts, fabric and stenter rollers, calender rolls, drive gears and pinions, forging dies and press tools, plus general engineering shafts and pins. We routinely process EN8, EN19, EN24, 4140 and other alloy grades supplied by Panipat textile-machinery and forging units.',
  },
  {
    q: 'How far is your facility from Panipat and how do you handle freight?',
    a: 'Our Ludhiana workshop is roughly 190 km from Panipat along the NH-44 corridor — a 3–4 hour transit. We consolidate parts onto regular part-load transport, so freight per component stays low and a typical pickup-to-delivery cycle runs 2–4 working days. Bulk and repeat lots can be scheduled on fixed weekly runs.',
  },
  {
    q: 'What surface hardness can you achieve on textile-machinery parts?',
    a: 'Textile-machinery shafts and rollers typically reach 50–58 HRC in EN8 or EN19, while forging tools, gears and pinions reach 58–62 HRC in EN24, 4140 or 20MnCr5. Case depth is controlled from roughly 1.0 mm up to 5.0 mm depending on the wear and load profile of the part.',
  },
  {
    q: 'Do you supply hardness documentation for Haryana OEM and export buyers?',
    a: 'Yes. Every batch ships with a Rockwell HRC report listing component ID, material grade, target versus achieved hardness, case depth and operator sign-off — suitable for OEM incoming inspection and export documentation used by Panipat and Karnal suppliers.',
  },
  {
    q: 'Can you handle large rollers or long loom shafts from Panipat?',
    a: 'Yes. Our in-house setup accommodates long shafts and rollers, and for oversized calender rolls or very long machine shafts we offer on-site induction hardening across Panipat, Karnal, Sonipat and Delhi NCR so heavy parts need not be transported.',
  },
  {
    q: 'What is the turnaround time for an urgent Panipat order?',
    a: 'Standard turnaround is 2–4 working days after parts reach Ludhiana. For line-down situations we offer priority same-week processing for regular Panipat clients, with the finished batch dispatched on the next available transport run.',
  },
];

export default function PanipatInductionHardeningPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'appShaftHardening');
  const qcImage = PlaceHolderImages.find((img) => img.id === 'processHardening');

  // Service / LocalBusiness schema — Ludhiana address, INR offer, aggregate rating.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Panipat, Haryana',
    serviceType: 'Induction Hardening & Heat Treatment',
    url: `${PAGE_URL}/`,
    description:
      'Induction hardening job work for Panipat textile machinery, handloom equipment, engineering and forging units — machine shafts, rollers, gears and tools at 50–62 HRC with documented hardness reports.',
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
    areaServed: ['Panipat', 'Karnal', 'Sonipat', 'Delhi NCR'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Induction hardening job work priced per kg or per piece. Request a custom quotation for Panipat.',
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
          { name: 'Induction Hardening in Panipat', href: '/induction-heat-treatment/panipat' },
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
              <li className="text-primary">Panipat</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Panipat"
            description="Precision induction hardening job work for Panipat's textile-machinery, handloom, engineering and forging units — machine shafts, fabric rollers, gears and tools at 50–62 HRC with documented hardness reports and pickup from across the Textile City."
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
                { icon: Award, label: '50–62 HRC' },
                { icon: ShieldCheck, label: 'Hardness Reports' },
                { icon: Truck, label: '~190 km · Pickup' },
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
                  <MessageSquare className="h-5 w-5" /> WhatsApp Panipat
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
              Searching for dependable <strong>induction hardening in Panipat</strong>? At <strong>{SITE_NAME}</strong>, we provide
              precision <strong>heat treatment and surface hardening</strong> for Panipat — Haryana&apos;s famous Textile City — raising
              the wear surfaces of loom shafts, fabric rollers, drive gears and forging tools to 50–62 HRC while keeping the core tough.
              We collect components from across Panipat, Karnal and Sonipat, process them at our Ludhiana workshop, and return them with
              full hardness documentation.
            </p>
          </motion.section>

          {/* Panipat Local Industry — unique town content */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// PANIPAT, HARYANA //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Hardening for the <span className="text-primary">Textile City</span>
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Panipat is one of North India&apos;s most concentrated industrial towns. Known nationwide as the Textile City, it is
                    home to a dense cluster of handloom and powerloom units, blanket and home-furnishing mills, and the textile-machinery
                    builders that supply them. Around that core sits a strong base of general engineering workshops and a busy belt of
                    forging and press-tool units producing components for the wider Haryana and Delhi NCR market.
                  </p>
                  <p>
                    Every one of those sectors runs on parts that wear. Loom drive shafts and weaving-machine spindles spin millions of
                    cycles; fabric, stenter and calender rollers must hold a true, abrasion-resistant face; forging dies and press tools
                    take repeated impact; and the gears, pinions and pins inside engineering assemblies fail early if their surfaces are
                    soft. <strong>Induction hardening in Panipat</strong> is what extends the service life of all of these — a hard,
                    fatigue-resistant skin over a ductile core, applied only where the part actually wears.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="relative h-72 md:h-[450px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
              >
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt="Induction hardening of textile-machinery shaft for Panipat manufacturers at Thakur Industries Ludhiana"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Components We Harden for Panipat */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// COMPONENTS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Panipat Components <span className="text-primary">We Harden</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              From handloom drives to forging tools, we tailor the coil, frequency and case depth to each component class Panipat
              industry depends on:
            </p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { title: 'Machine & Loom Shafts', desc: 'Drive shafts, spindles and pins for textile and powerloom machinery.' },
                { title: 'Fabric & Calender Rollers', desc: 'Stenter, calender and guide rollers needing a true, abrasion-resistant face.' },
                { title: 'Drive Gears & Pinions', desc: 'Spur, helical and bevel gears for textile-machinery and engineering gearboxes.' },
                { title: 'Forging Dies & Press Tools', desc: 'Dies, punches and tooling for the Panipat forging and press-tool belt.' },
                { title: 'Engineering Shafts & Pins', desc: 'General machine shafts, splines and pins from local workshops.' },
                { title: 'Sprockets & Cams', desc: 'Wear-critical motion components across home-furnishing machinery.' },
              ].map((item) => (
                <motion.div key={item.title} variants={scaleUp} className="flex flex-col p-6 bg-secondary/30 rounded-2xl border border-border h-full">
                  <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                  <h3 className="font-black uppercase italic tracking-tight text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Logistics from Ludhiana — ~190 km */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// LOGISTICS //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Freight from <span className="text-primary">~190 km</span> Away
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Panipat sits roughly 190 km from our Ludhiana facility along the NH-44 corridor — a 3–4 hour transit that keeps job
                    work fast and freight light. We consolidate parts onto regular part-load transport so the cost per component stays
                    low, and a typical pickup-to-delivery cycle runs 2–4 working days.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Coordinated pickup from your Panipat, Karnal or Sonipat unit',
                      'Part-load consolidation keeps freight per piece low',
                      'Fixed weekly runs available for repeat and bulk lots',
                      'On-site hardening option for oversized rollers and long shafts',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className="grid grid-cols-2 gap-6"
                variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                {[
                  { icon: MapPin, k: '~190 km', v: 'Panipat to Ludhiana via NH-44' },
                  { icon: Truck, k: '3–4 hrs', v: 'Typical road transit time' },
                  { icon: Clock, k: '2–4 days', v: 'Pickup to delivery cycle' },
                  { icon: Boxes, k: 'Part-load', v: 'Consolidated low-cost freight' },
                ].map((item) => (
                  <motion.div key={item.k} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-card/50 rounded-2xl border border-border">
                    <item.icon className="h-8 w-8 text-primary mb-4" />
                    <span className="text-2xl font-black uppercase italic text-primary">{item.k}</span>
                    <span className="text-xs text-muted-foreground font-medium mt-2 leading-relaxed">{item.v}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Why Panipat Units Choose Us */}
          <section className="py-20 border-t border-border">
            <p className="section-label text-center">// WHY PANIPAT CHOOSES US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Panipat Units Trust <span className="text-primary">{SITE_NAME}</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              Panipat&apos;s textile-machinery builders, forging units and engineering workshops choose us because we treat their parts
              the way their own line would — accurately, documented, and back on time.
            </p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Award, title: 'Repeatable 50–62 HRC', desc: 'Consistent hardness across loom shafts, rollers, gears and tools.' },
                { icon: ShieldCheck, title: 'Reports Every Batch', desc: 'Rockwell HRC reports for OEM and export documentation.' },
                { icon: Truck, title: 'Pickup & Delivery', desc: 'Coordinated freight across Panipat, Karnal and Sonipat.' },
                { icon: Clock, title: 'Fast Turnaround', desc: '2–4 day standard delivery keeps your machinery running.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Materials We Harden — internal links to material-grade pages */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// MATERIALS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Steel <span className="text-primary">Grades</span> We Harden
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We induction-harden the alloy grades Panipat units supply most. Explore our dedicated material pages for hardness, case
              depth and application detail:
            </p>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { grade: 'EN8', note: '080M40 carbon steel', href: '/induction-heat-treatment/en8-steel-induction-hardening' },
                { grade: 'EN19', note: '4140 Cr-Mo alloy', href: '/induction-heat-treatment/en19-steel-induction-hardening' },
                { grade: 'EN24', note: '4340 Ni-Cr-Mo alloy', href: '/induction-heat-treatment/en24-steel-hardening' },
                { grade: '4140', note: '42CrMo4 / SCM440', href: '/induction-heat-treatment/4140-steel-hardening' },
              ].map((m) => (
                <motion.div key={m.grade} variants={scaleUp}>
                  <Link
                    href={m.href}
                    className="group flex flex-col items-center text-center p-6 bg-secondary/30 border border-border rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all h-full"
                  >
                    <span className="text-2xl font-black uppercase italic text-primary mb-1">{m.grade}</span>
                    <span className="text-xs text-muted-foreground font-bold uppercase tracking-tight mb-3">{m.note}</span>
                    <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-black uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      View Grade <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
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
                    ['Surface Hardness', '50–62 HRC (component dependent)'],
                    ['Case Depth', '1.0 mm – 5.0 mm (controlled to spec)'],
                    ['Component Types', 'Loom shafts, rollers, gears, pinions, dies, tools, pins'],
                    ['Steel Grades', 'EN8, EN19, EN24, 4140, 20MnCr5, EN36C'],
                    ['Heating Temperature', '900–950 °C (induction)'],
                    ['Quench Medium', 'Polymer / water-based, controlled'],
                    ['Service Area', 'Panipat, Karnal, Sonipat, Delhi NCR'],
                    ['Turnaround', '2–4 working days (standard)'],
                    ['Testing', 'HRC verification, case-depth check, dimensional inspection'],
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
                { icon: Search, title: 'Hardness Verification', desc: 'Rockwell HRC checks on every batch against your target spec.' },
                { icon: Gauge, title: 'Case-Depth Control', desc: 'Tuned frequency and dwell for the depth each part demands.' },
                { icon: Cpu, title: 'Dimensional Inspection', desc: 'Concentricity and form checks to control distortion.' },
                { icon: FileText, title: 'Traceability', desc: 'Documented cycle logs for OEM and export records.' },
              ].map((step, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-8 bg-card rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <step.icon className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold uppercase italic tracking-tighter mb-3">{step.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Pricing & Turnaround */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// PRICING & TURNAROUND //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Panipat <span className="text-primary">Rates & Lead Time</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive <strong>induction hardening rates</strong> for Panipat job work on both prototype batches and bulk
              orders. Final pricing depends on component weight, size, case depth, steel grade and quantity — share your drawing for an
              exact quote within 24 hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk and repeat orders.' },
                { icon: FileText, title: 'Minimum Order', desc: 'No rigid minimum — single trial parts to multi-thousand-piece lots accepted.' },
                { icon: Clock, title: 'Turnaround', desc: 'Standard 2–4 working days; priority same-week jobs for regular clients.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your Panipat Quote
                </a>
              </Button>
            </div>
          </section>

          {/* Process + QC image */}
          <section className="py-24 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
              >
                {qcImage && (
                  <Image
                    src={qcImage.imageUrl}
                    alt="Hardness testing of a Panipat textile-machinery component after induction hardening"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// PROCESS //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Our Panipat <span className="text-primary">Workflow</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground font-medium">
                  <p>Each Panipat order moves through a controlled, documented sequence:</p>
                  <ul className="space-y-4">
                    {[
                      'Pickup coordination and component profile review',
                      'Custom coil and frequency selection for the part',
                      'Controlled induction heating with polymer quench',
                      'HRC and case-depth testing before dispatch',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Nearby Locations — internal links to sibling town pages */}
          <section className="py-16 border-t border-border">
            <p className="section-label text-center">// NEARBY LOCATIONS //</p>
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Hardening Across <span className="text-primary">Haryana & NCR</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Faridabad', href: '/induction-heat-treatment/faridabad', icon: MapPin, label: 'Industrial Hub' },
                { title: 'Delhi NCR', href: '/induction-heat-treatment/delhi', icon: MapPin, label: 'Capital Region' },
                { title: 'Ambala', href: '/induction-heat-treatment/ambala', icon: MapPin, label: 'Engineering Cluster' },
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

          {/* Related Services */}
          <section className="py-24 border-t border-border">
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Related <span className="text-primary">Services</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Gear Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes, label: 'Tooth-by-Tooth Precision' },
                { title: 'Shaft Hardening', href: '/induction-heat-treatment/shafts', icon: Settings, label: 'Transmission Shafts' },
                { title: 'Case Hardening', href: '/case-hardening', icon: ShieldCheck, label: 'Carburizing Process' },
                { title: 'Heat Treatment Guide', href: '/induction-heat-treatment', icon: Cpu, label: 'Main Service Hub' },
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
              Panipat Hardening <span className="text-primary">FAQs</span>
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
