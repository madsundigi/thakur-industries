'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Truck,
  Boxes,
  Settings,
  Cpu,
  Phone,
  MessageSquare,
  Clock,
  IndianRupee,
  FileText,
  Award,
  ShieldCheck,
  Star,
  Factory,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/delhi`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I am a manufacturer in Delhi and need induction hardening job work. Please find my drawing attached.');

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
    q: 'Do you provide induction hardening for manufacturers in Delhi?',
    a: 'Yes. We serve engineering, auto-parts and general-manufacturing units across Delhi’s industrial belts — Wazirpur, Okhla, Mayapuri, Bawana and Naraina — with precision induction hardening and case hardening job work. Components are collected from your Delhi unit by freight, processed at our Ludhiana facility, and returned with Rockwell hardness test reports.',
  },
  {
    q: 'How does logistics work for Delhi orders, given the distance from Ludhiana?',
    a: 'Our Ludhiana facility is roughly 310 km from Delhi, an established freight corridor. We coordinate pickup of bulk consignments by transport at your schedule, process the batch within 1–2 days, and dispatch the return shipment. For repeat OEM clients we run consolidated weekly freight to keep per-piece logistics cost low.',
  },
  {
    q: 'What Delhi industries typically use induction hardening?',
    a: 'Auto-parts and component suppliers in Wazirpur and Mayapuri, tooling and die makers in Okhla, machine builders, fastener and hardware units, and precision-engineering and export shops across Delhi NCR. We harden EN8, EN19, EN24, 4140, 20MnCr5 and tool-steel grades.',
  },
  {
    q: 'What components can you harden for Delhi auto-parts and engineering units?',
    a: 'Gears, pinions, transmission and pump shafts, axle and steering components, splines, sprockets, cams, bushes, dies, punches, rollers and a wide range of wear-prone engineering parts. Surface hardness of 58–62 HRC with controlled case depth is standard.',
  },
  {
    q: 'Do you provide export-quality documentation for Delhi export units?',
    a: 'Yes. We supply Rockwell HRC test reports, case-depth verification, batch traceability and material-grade confirmation suitable for OEM audits and export buyers. Metallurgical cross-section reports are available on request.',
  },
  {
    q: 'What is the minimum batch size for Delhi heat-treatment job work?',
    a: 'There is no rigid minimum — we accept single trial pieces as well as bulk production lots. Because Delhi orders travel ~310 km, most units consolidate parts into larger consignments; batches of 50+ pieces receive preferential per-piece pricing. Share your component details on WhatsApp for a fast quote.',
  },
];

export default function DelhiPage() {
  // Service / LocalBusiness schema — full Ludhiana address, INR offers, rating
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Delhi',
    serviceType: 'Induction Hardening & Heat Treatment',
    url: `${PAGE_URL}/`,
    description:
      'Precision induction hardening job work for Delhi’s engineering, auto-parts and manufacturing units — 58–62 HRC, controlled case depth, served via freight from our Ludhiana, Punjab facility.',
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
    areaServed: ['Delhi', 'Faridabad', 'Gurugram', 'Noida'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Induction hardening job work for Delhi units priced per kg or per piece. Request a custom quotation.',
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
          { name: 'Delhi', href: '/induction-heat-treatment/delhi' },
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
              <li className="text-primary">Delhi</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Delhi"
            description="Precision induction hardening job work for Delhi’s engineering, auto-parts and general-manufacturing units — 58–62 HRC with controlled case depth and certified Rockwell reports, served from our Ludhiana facility via freight and bulk consignments."
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
                { icon: Award, label: '58–62 HRC' },
                { icon: ShieldCheck, label: 'Rockwell Reports' },
                { icon: Truck, label: 'Freight from Ludhiana' },
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
                  <MessageSquare className="h-5 w-5" /> WhatsApp Delhi Desk
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto font-black uppercase italic tracking-tight border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Quote <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Process image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-4 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/5.jpeg"
              alt="Induction hardening in Delhi — precision heat treatment for auto-parts and engineering components"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">Induction Hardening — Delhi NCR</span>
                <p className="text-white font-black uppercase italic text-xl md:text-2xl mt-2 tracking-tighter">Precision. Certified. Freight-Ready.</p>
              </div>
            </div>
          </div>

          {/* Intro — primary keyword in the first 100 words */}
          <motion.section
            className="py-12 md:py-16 border-b border-border text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              Looking for dependable <strong>induction hardening in Delhi</strong>? At <strong>{SITE_NAME}</strong>, our precision
              induction hardening job work raises wear surfaces to 58–62 HRC while keeping the core tough enough to absorb shock
              and fatigue. We support Delhi’s auto-parts suppliers, tooling shops and precision-engineering units across Wazirpur,
              Okhla, Mayapuri, Naraina and Bawana with consistent, certified hardening — collected by freight and returned with
              full Rockwell test reports from our Ludhiana, Punjab facility.
            </p>
          </motion.section>

          {/* Delhi industrial landscape — unique local content */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// DELHI’S INDUSTRIAL BASE //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Hardening for Delhi’s <span className="text-primary">Manufacturing Belts</span>
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Delhi is one of North India’s densest small-and-medium manufacturing hubs. Its industrial estates each carry a
                    distinct character: <strong>Wazirpur</strong> is known for steel rolling, pipes and auto components;{' '}
                    <strong>Okhla</strong> houses tooling, die-making, electronics and precision-engineering shops;{' '}
                    <strong>Mayapuri</strong> is the heart of the city’s automobile-parts and scrap-to-component trade; and{' '}
                    <strong>Naraina and Bawana</strong> add general engineering, hardware and fabrication units.
                  </p>
                  <p>
                    These units produce a constant stream of wear-prone parts — gears, shafts, axle pins, splines, dies and rollers
                    — that need reliable surface hardening to survive real service loads. Many Delhi workshops lack in-house
                    induction equipment, so they outsource the critical hardening step to a specialist. That is exactly where{' '}
                    <strong>{SITE_NAME}</strong> fits in.
                  </p>
                  <p>
                    We treat Delhi as a single serviced region across the NCR — covering Faridabad, Gurugram and Noida alongside the
                    capital itself — so a supplier with units on both sides of the border can route everything through one hardening
                    partner with one consistent quality standard.
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
                <Image
                  src="/images/images/5.jpeg"
                  alt="Induction hardened auto-parts and engineering components for Delhi manufacturers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Components we harden for Delhi units */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// COMPONENTS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              What We Harden for <span className="text-primary">Delhi Units</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              From single auto-part prototypes to bulk engineering lots, we induction-harden the wear-critical components that keep
              Delhi’s machines and vehicles running. Explore our dedicated component pages:
            </p>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { title: 'Gears & Pinions', note: 'Spur, helical, bevel teeth', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                { title: 'Shafts & Splines', note: 'Transmission & pump shafts', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                { title: 'Crankshafts', note: 'Journals & fillets', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
                { title: 'Case Hardening', note: 'Carburised wear surfaces', href: '/case-hardening-heat-treatment' },
              ].map((m) => (
                <motion.div key={m.title} variants={scaleUp}>
                  <Link
                    href={m.href}
                    className="group flex flex-col items-center text-center p-6 bg-secondary/30 border border-border rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all h-full"
                  >
                    <span className="text-base font-black uppercase italic text-primary mb-1 leading-tight">{m.title}</span>
                    <span className="text-xs text-muted-foreground font-bold uppercase tracking-tight mb-3">{m.note}</span>
                    <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-black uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      View Service <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Logistics — freight from ~310 km Ludhiana */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// LOGISTICS //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Freight &amp; Bulk Consignments from <span className="text-primary">~310 km Away</span>
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Our facility sits in Ludhiana, roughly <strong>310 km from Delhi</strong> along one of India’s busiest freight
                    corridors. Distance is not an obstacle — it is a well-oiled route. We coordinate door pickup of your batch from
                    your Delhi, Faridabad, Gurugram or Noida unit, harden it within 1–2 working days, and dispatch the return
                    consignment.
                  </p>
                  <p>
                    For regular OEM clients we consolidate parts into <strong>bulk freight</strong> on a weekly or fortnightly cycle,
                    which keeps per-piece transport cost low and turnaround predictable. You simply package and label the
                    components — we handle transport coordination end to end and return everything with hardness documentation.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                {[
                  { icon: Truck, title: 'Door Pickup', desc: 'Bulk consignments collected from your Delhi NCR unit on schedule.' },
                  { icon: MapPin, title: '~310 km Corridor', desc: 'Established Ludhiana–Delhi freight route with predictable transit.' },
                  { icon: Clock, title: '1–2 Day Processing', desc: 'Hardening completed fast once the batch reaches our workshop.' },
                  { icon: FileText, title: 'Returned Certified', desc: 'Every consignment ships back with Rockwell test reports.' },
                ].map((item, i) => (
                  <motion.div key={i} variants={scaleUp} className="flex flex-col items-start text-left p-6 bg-card/60 rounded-2xl border border-border">
                    <item.icon className="h-9 w-9 text-primary mb-4" />
                    <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Why Delhi units choose us */}
          <section className="py-20 border-t border-border">
            <p className="section-label text-center">// WHY DELHI UNITS CHOOSE US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Delhi Manufacturers Trust <span className="text-primary">{SITE_NAME}</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Award, title: 'Consistent 58–62 HRC', desc: 'Repeatable hardness on every Delhi batch, part after part.' },
                { icon: ShieldCheck, title: 'Certified Reports', desc: 'Rockwell HRC, case-depth and traceability for OEM audits.' },
                { icon: Factory, title: 'Multi-Industry', desc: 'Auto-parts, tooling, hardware and engineering units alike.' },
                { icon: IndianRupee, title: 'Bulk-Friendly Rates', desc: 'Preferential per-piece pricing on consolidated freight.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* NCR cross-links */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// ACROSS DELHI NCR //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              We Also Serve <span className="text-primary">Neighbouring NCR</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { title: 'Induction Hardening in Faridabad', href: '/induction-heat-treatment/faridabad', label: 'Industrial Town' },
                { title: 'Induction Hardening in Gurugram', href: '/induction-heat-treatment/gurugram', label: 'Auto & OEM Hub' },
                { title: 'Induction Hardening in Noida', href: '/induction-heat-treatment/noida', label: 'Engineering Belt' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <motion.div
                    variants={scaleUp}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-secondary/30 border border-border rounded-2xl transition-all hover:border-primary/50 flex flex-col items-center text-center shadow-sm h-full"
                  >
                    <MapPin className="h-8 w-8 text-primary mb-4" />
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Gear Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes, label: 'Transmission Gears' },
                { title: 'Shaft Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Drive Shafts' },
                { title: 'Induction Heat Treatment Guide', href: '/induction-heat-treatment', icon: Cpu, label: 'Main Service Hub' },
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
              Induction Hardening <span className="text-primary">Delhi FAQs</span>
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
