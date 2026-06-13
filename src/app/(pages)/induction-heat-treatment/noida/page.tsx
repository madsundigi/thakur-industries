'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Cpu,
  Truck,
  FileText,
  Phone,
  MessageSquare,
  History,
  Settings,
  Boxes,
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/noida`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I am a manufacturer in Noida and need induction hardening job work. Please find my component drawing attached.');

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
    q: 'Do you provide induction hardening in Noida and Greater Noida?',
    a: 'Yes. We serve auto-component, electronics-hardware and precision-engineering units across Noida, Greater Noida and the wider Delhi NCR belt. Components are collected as bulk consignments and freighted to our Ludhiana facility (~330 km), hardened to spec, and returned with certified Rockwell test reports — typically within 4–6 working days door to door.',
  },
  {
    q: 'My Ludhiana plant is ~330 km away — how does logistics work for a Noida unit?',
    a: 'We run a freight-and-bulk-consignment model built for the distance. For regular production we set up a fixed collection cycle so batches move on a predictable schedule and per-piece freight cost stays low. For a first order, share your address and batch size and we arrange a trial pickup within 2–3 business days.',
  },
  {
    q: 'What components from Noida auto and precision units do you harden?',
    a: 'Transmission and timing gears (58–62 HRC), drive and output shafts (55–60 HRC), crankshaft journals (55–58 HRC), bearing races (60–64 HRC), splines, cams, pins, fasteners and precision spindles. Common Noida-supplied grades are EN8, EN19 (4140), EN24 (4340), 20MnCr5 and EN36C.',
  },
  {
    q: 'Can you handle the bulk volumes a Noida OEM supplier needs?',
    a: 'Yes. Our Ludhiana plant is built for high-volume contract job work — multi-thousand-piece lots per consignment with consistent hardness batch after batch. Bulk and repeat OEM orders receive better per-piece pricing and a dedicated production slot.',
  },
  {
    q: 'Do you supply OEM-format documentation for Noida incoming inspection?',
    a: 'Every batch ships with Rockwell HRC reports, case-depth verification, process-parameter sheets and batch traceability, formatted to pass Tier-1 and OEM incoming-inspection requirements. Digital copies are sent ahead of dispatch so your QA team can plan acceptance.',
  },
  {
    q: 'Why choose Thakur Industries over a local NCR heat-treatment shop?',
    a: 'Three reasons Noida units cite: consistency (repeatable 58–62 HRC verified per batch), documentation (full OEM-grade test reports), and bulk capacity (25+ years of process scale). Even with freight from Ludhiana, the total landed cost and reject rate often beat smaller local shops on high-volume work.',
  },
  {
    q: 'What hardness and case depth can you achieve?',
    a: '58–62 HRC on gear teeth and wear surfaces with a controlled case depth of 0.8–3.5 mm, tuned to your steel grade and load. Shafts and journals are set to 55–60 HRC, bearing races up to 64 HRC, each held to your drawing tolerance.',
  },
  {
    q: 'How do I get a quote for my Noida components?',
    a: 'Send your component drawing, steel grade and quantity on WhatsApp or through our contact form. We return an exact per-kg or per-piece quotation within 24 hours, including freight handling from your Noida or Greater Noida facility.',
  },
];

export default function NoidaPage() {
  // Service / LocalBusiness schema — full Ludhiana address, NCR areaServed, offers & rating
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Noida — Auto-Component & Precision Job Work',
    serviceType: 'Induction Hardening',
    url: `${PAGE_URL}/`,
    description:
      'Induction hardening for Noida and Greater Noida auto-component, electronics and precision-engineering units — 58–62 HRC, controlled case depth, certified Rockwell reports. Bulk freight job work processed at our Ludhiana, Punjab facility (~330 km).',
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
    areaServed: ['Noida', 'Greater Noida', 'Delhi', 'Faridabad'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Induction hardening job work for Noida units, priced per kg or per piece. Request a custom quotation.',
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
          { name: 'Induction Hardening in Noida', href: '/induction-heat-treatment/noida' },
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
              <li className="text-primary">Noida</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Noida"
            description="Precision induction hardening for Noida & Greater Noida’s auto-component, electronics and precision-engineering units — 58–62 HRC with controlled case depth, certified Rockwell reports and bulk-freight logistics from our Ludhiana plant."
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
                { icon: ShieldCheck, label: 'OEM-Grade Reports' },
                { icon: Truck, label: 'NCR Freight Pickup' },
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

          {/* Process image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-4 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/5.jpeg"
              alt="Induction hardening in Noida — precision process for Greater Noida auto-component and precision-engineering units"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">Induction Hardening — Noida NCR</span>
                <p className="text-white font-black uppercase italic text-xl md:text-2xl mt-2 tracking-tighter">Precision. OEM Grade. Certified.</p>
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
              Searching for dependable <strong>induction hardening in Noida</strong>? <strong>{SITE_NAME}</strong> hardens
              gears, shafts, crankshafts, bearing races and precision components for Noida and Greater Noida manufacturers to
              58–62 HRC — selectively heating only the wear surface so cores stay tough and parts stay dimensionally true. Bulk
              consignments are freighted from your unit to our Ludhiana plant and returned with certified Rockwell reports,
              giving NCR’s auto-component and precision-engineering shops OEM-grade hardening without an in-house line.
            </p>
          </motion.section>

          {/* Noida industrial landscape — unique local content */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// NOIDA & GREATER NOIDA //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Serving Noida’s <span className="text-primary">Engineering Belt</span>
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                  <p>
                    Noida and Greater Noida sit at the heart of Uttar Pradesh’s industrial corridor, packing three distinct
                    manufacturing ecosystems into one belt. The <strong>auto-component</strong> cluster across Sectors 57, 63, 80,
                    81 and the Surajpur–Ecotech zones supplies transmission, engine and chassis parts to two-wheeler and
                    four-wheeler OEMs and their Tier-1 vendors.
                  </p>
                  <p>
                    Alongside it, Noida’s <strong>electronics and hardware</strong> base — mobile, appliance and EMS factories —
                    needs hardened jigs, fixtures, pins and precision fasteners. And a deep bench of
                    <strong> precision-engineering and tool-room</strong> units in Sectors 7, 8, 9 and 10 turns out dies, spindles,
                    cams and machined parts that demand tight surface hardness with zero distortion.
                  </p>
                  <p>
                    What ties these sectors together is a shared requirement: <strong>repeatable, documented surface hardness</strong>
                    that survives OEM incoming inspection. That is exactly the job work we specialise in.
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
                  alt="Induction hardened auto-component prepared for a Noida precision-engineering unit at Thakur Industries Ludhiana"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Components hardened — internal links to component pillars */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// COMPONENTS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Components We Harden for <span className="text-primary">Noida Units</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              From two-wheeler gearbox parts to precision tool-room work, we cover the full spread of components Noida and
              Greater Noida manufacturers send out for hardening:
            </p>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { name: 'Gears & Pinions', note: '58–62 HRC tooth surface', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                { name: 'Shafts & Splines', note: '55–60 HRC wear tracks', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                { name: 'Crankshafts', note: '55–58 HRC journals', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
                { name: 'Case Hardening', note: 'Deep-case alternative', href: '/case-hardening' },
              ].map((m) => (
                <motion.div key={m.name} variants={scaleUp}>
                  <Link
                    href={m.href}
                    className="group flex flex-col items-center text-center p-6 bg-secondary/30 border border-border rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all h-full"
                  >
                    <span className="text-lg font-black uppercase italic text-primary mb-1 leading-tight">{m.name}</span>
                    <span className="text-xs text-muted-foreground font-bold uppercase tracking-tight mb-3">{m.note}</span>
                    <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-black uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      View Service <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Logistics — freight + bulk consignment model */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <p className="section-label text-center">// LOGISTICS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Noida → <span className="text-primary">Ludhiana</span>, Handled
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              Our Ludhiana facility sits roughly <strong>330 km</strong> from Noida — close enough to run an efficient
              freight-and-bulk-consignment cycle that keeps per-piece cost low and delivery predictable.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Truck, title: 'Bulk Consignment Pickup', desc: 'Batches are collected as bulk consignments from your Noida or Greater Noida unit via our freight network — no need to drop off piece by piece.' },
                { icon: MapPin, title: '~330 km Corridor', desc: 'A short, well-served highway corridor between NCR and Ludhiana keeps transit fast and freight cost per part minimal on volume lots.' },
                { icon: Clock, title: '4–6 Day Door-to-Door', desc: 'Standard turnaround including transit is 4–6 working days; regular clients get fixed collection cycles and priority slots.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="bg-card/50 p-8 rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <item.icon className="h-9 w-9 text-primary mb-5" />
                  <h3 className="font-bold text-xl mb-3 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
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
                    ['Surface Hardness', '58–62 HRC (gear & wear surfaces)'],
                    ['Shaft / Journal Hardness', '55–60 HRC'],
                    ['Case Depth', '0.8 mm – 3.5 mm (controlled to spec)'],
                    ['Component Types', 'Gears, shafts, crankshafts, bearing races, splines, cams, pins'],
                    ['Steel Grades', 'EN8, EN19, EN24, 4140, 20MnCr5, EN36C'],
                    ['Heating Temperature', '900–950 °C (induction)'],
                    ['Quench Medium', 'Polymer / water-based, controlled'],
                    ['Turnaround', '4–6 working days door-to-door incl. NCR transit'],
                    ['Documentation', 'Rockwell HRC reports, case-depth check, batch traceability'],
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

          {/* Why Noida units choose us */}
          <section className="py-20 border-t border-border">
            <p className="section-label text-center">// WHY NOIDA CHOOSES US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Noida Units Trust <span className="text-primary">{SITE_NAME}</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Award, title: 'Consistency', desc: 'Repeatable 58–62 HRC verified on every batch — no surprises on the assembly line.' },
                { icon: FileText, title: 'Documentation', desc: 'Full OEM-format Rockwell, case-depth and traceability reports for NCR incoming inspection.' },
                { icon: Boxes, title: 'Bulk Capacity', desc: 'Multi-thousand-piece consignments handled with 25+ years of process scale.' },
                { icon: Truck, title: 'Logistics Sorted', desc: 'Freight pickup and return built for the ~330 km Noida–Ludhiana corridor.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
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
              Rates & <span className="text-primary">Lead Time</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive job-work rates for both prototype batches and bulk OEM production from Noida. Final pricing
              depends on component weight, case depth, steel grade and quantity — share your drawing for an exact quote within
              24 hours, freight handling included.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk and repeat OEM consignments.' },
                { icon: FileText, title: 'Minimum Order', desc: 'No rigid minimum — trial batches to multi-thousand-piece lots accepted.' },
                { icon: Clock, title: 'Turnaround', desc: 'Standard 4–6 working days door-to-door; priority slots for regular Noida clients.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your Noida Quote
                </a>
              </Button>
            </div>
          </section>

          {/* 3-Step Workflow */}
          <section className="py-16 border-t border-border">
            <p className="section-label text-center">// PROCESS //</p>
            <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-center mb-12">
              How Noida Job Work <span className="text-primary">Flows</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-0.5 bg-primary/20" />
              {[
                { title: 'Drawing & Pickup', description: 'Send your drawing, grade and quantity; we quote in 24 hours and schedule a bulk-consignment pickup from your Noida unit.' },
                { title: 'Precision Hardening', description: 'Custom-wound induction coils heat the wear surface at 900–950 °C with controlled polymer quench at our Ludhiana plant.' },
                { title: 'Test & Return Freight', description: 'HRC and case-depth verification, OEM-format documentation, then freight return to Noida — typically 4–6 days door to door.' },
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

          {/* Related Services & Nearby Cities */}
          <section className="py-24 border-t border-border">
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Related Services & <span className="text-primary">Nearby Cities</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Gear Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Settings, label: 'Transmission Gears' },
                { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Boxes, label: 'Drive & Output Shafts' },
                { title: 'Crankshaft Hardening', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana', icon: History, label: 'Engine Components' },
                { title: 'Case Hardening', href: '/case-hardening', icon: ShieldCheck, label: 'Deep-Case Alternative' },
                { title: 'Induction Heat Treatment Hub', href: '/induction-heat-treatment', icon: Cpu, label: 'Main Service Pillar' },
                { title: 'Hardening in Delhi', href: '/induction-heat-treatment/delhi', icon: MapPin, label: 'Nearby City' },
                { title: 'Hardening in Faridabad', href: '/induction-heat-treatment/faridabad', icon: MapPin, label: 'Nearby City' },
                { title: 'Hardening in Gurugram', href: '/induction-heat-treatment/gurugram', icon: MapPin, label: 'Nearby City' },
                { title: 'Get a Free Quote', href: '/contact', icon: FileText, label: 'Contact Our Team' },
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
              Induction Hardening in Noida <span className="text-primary">FAQs</span>
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
