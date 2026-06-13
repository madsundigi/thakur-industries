'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  MapPin,
  Settings,
  Boxes,
  Phone,
  MessageSquare,
  FileText,
  Clock,
  IndianRupee,
  Award,
  ShieldCheck,
  History,
  Star,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/en19-steel-induction-hardening`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I need EN19 (709M40 / 4140) steel hardening job work. Please find my drawing attached.');

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
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
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

// Frequently asked questions — single source of truth for both the visible
// accordion AND the FAQPage schema (kept in sync to avoid schema mismatch).
const FAQ_ITEMS = [
  {
    q: 'What is EN19 steel and why is it used for induction hardening?',
    a: 'EN19 (British standard 709M40) is a chromium-molybdenum alloy steel equivalent to AISI 4140 and DIN 42CrMo4. Its alloy content gives it significantly deeper hardenability than plain carbon steels — enabling consistent 55–62 HRC surface hardness even on large cross-sections. It is the standard choice for gearbox shafts, crankshafts, connecting rods, hydraulic cylinder rods and high-stress automotive components where EN8 is not strong enough.',
  },
  {
    q: 'Is EN19 the same as 4140?',
    a: 'Yes — EN19 (BS 709M40) and AISI 4140 are equivalent grades, both chromium-molybdenum alloy steels with roughly 0.38–0.45% carbon, 0.9–1.2% chromium and 0.2–0.35% molybdenum. If your drawing says 4140 or 42CrMo4 (DIN), we treat it the same as EN19 for induction hardening purposes. We accept EN19 steel hardening job work described by any of these designations.',
  },
  {
    q: 'How much does EN19 steel hardening job work cost?',
    a: 'EN19 hardening job-work pricing depends on the component weight, hardened length, required case depth and order quantity. We quote most jobs on a per-kilogram or per-piece basis, with reduced rates for bulk and repeat OEM orders. Send your component drawing and quantity on WhatsApp for an exact quotation within 24 hours.',
  },
  {
    q: 'What is the minimum order quantity for EN19 hardening?',
    a: 'There is no rigid minimum. We accept single prototype EN19 parts for testing as well as bulk OEM production lots of several thousand pieces. Larger orders receive better per-piece pricing.',
  },
  {
    q: 'What is the turnaround time for EN19 steel hardening?',
    a: 'Standard turnaround is 2–4 working days after we receive the components and an approved specification. Urgent and same-week jobs can be arranged for regular clients. Long shafts and high-volume batches are scheduled to keep your production line running.',
  },
  {
    q: 'What hardness and case depth can be achieved on EN19?',
    a: 'Induction hardening on EN19 steel achieves 55–62 HRC surface hardness, with a case depth of 1–3 mm (and up to 4 mm on demand) depending on your specification and the frequency applied. We use medium to high frequency induction depending on cross-section diameter. Rockwell hardness test reports are issued with every batch.',
  },
  {
    q: 'Do you harden EN19 crankshafts, gearbox shafts and hydraulic rods?',
    a: 'Yes. Crankshaft journals, main and big-end bearing surfaces, gearbox output shafts, camshaft lobes and hydraulic cylinder piston rods in EN19 / 4140 are processed regularly. We use specialised scanning and single-shot coil setups depending on the geometry. Components up to 2,000 mm length and 300 mm diameter are accommodated in-house, with straightness held better than 0.1 mm per metre on long rods.',
  },
  {
    q: 'What HRC can EN19 reach with induction hardening?',
    a: 'EN19 (709M40 / AISI 4140) reaches 55–62 HRC surface hardness with induction hardening. Its chromium-molybdenum chemistry (0.38–0.45% C, 0.9–1.2% Cr, 0.2–0.35% Mo) gives deep, consistent hardenability even on large diameters. The hardened-and-tempered core typically holds 28–38 HRC, case depth is 1–3 mm (up to 4 mm to spec), and austenitizing is done at 840–880 °C. This EN19 induction hardening HRC range is verified by a Rockwell report on every batch.',
  },
];

export default function EN19SteelPage() {
  // Service schema — enriched with serviceType, offers, aggregateRating & wider areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'EN19 Steel Induction Hardening Job Work — Ludhiana, Punjab',
    serviceType: 'Induction Hardening for EN19 (709M40 / AISI 4140) Alloy Steel',
    url: `${PAGE_URL}/`,
    description:
      'Precision induction hardening for EN19 (709M40 / AISI 4140) chromium-molybdenum alloy steel — gearbox shafts, crankshafts, camshafts and hydraulic cylinder rods. 55–62 HRC with 1–3 mm case depth and certified reports.',
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
    areaServed: ['Ludhiana', 'Mandi Gobindgarh', 'Jalandhar', 'Khanna', 'Patiala', 'Ambala', 'Chandigarh', 'Delhi NCR'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'EN19 steel hardening job work priced per kg or per piece. Request a custom quotation.',
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
          { name: 'EN19 Steel Hardening', href: '/induction-heat-treatment/en19-steel-induction-hardening' },
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
              <li className="text-primary">EN19 Steel Hardening</li>
            </ol>
          </nav>

          <PageHeader
            title="EN19 Steel Induction Hardening"
            highlightedWord="Hardening"
            description="Precision induction hardening for EN19 (709M40 / AISI 4140) chromium-molybdenum alloy steel — gearbox shafts, crankshafts, camshafts & hydraulic cylinder rods. 55–62 HRC. Certified reports."
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
                { icon: ShieldCheck, label: '709M40 / 4140 Spec' },
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
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground font-black uppercase italic tracking-tight">
                <a href={`tel:${SITE_PHONE_NUMBER}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Call for a Quote
                </a>
              </Button>
              <Button asChild size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white font-black uppercase italic tracking-tight border-none">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" /> Send Drawing
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
              alt="EN19 alloy steel induction hardening job work — 709M40 chromium molybdenum heat treatment in Ludhiana, Punjab"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">EN19 · 709M40 · AISI 4140 Equivalent</span>
                <p className="text-white font-black uppercase italic text-xl md:text-2xl mt-2 tracking-tighter">55–62 HRC. Alloy Steel. No Compromise.</p>
              </div>
            </div>
          </div>

          {/* Intro — primary keyword in the first 100 words */}
          <motion.section
            className="py-12 text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Looking for reliable <strong>EN19 steel hardening job work</strong>? EN19 is a chromium-molybdenum alloy steel
              (equivalent to AISI 4140 / 709M40) used wherever engineers need superior hardenability and strength — gearbox shafts,
              crankshafts, connecting rods, hydraulic cylinder rods and high-torque couplings. <strong>{SITE_NAME}</strong> provides
              precision <strong>induction hardening for EN19 steel</strong>, achieving 55–62 HRC on the surface layer with a 1–3 mm
              case depth while retaining excellent through-section toughness. Critical aerospace, automotive and heavy-engineering
              applications processed daily across Punjab, Haryana and Delhi NCR.
            </p>
          </motion.section>

          {/* Quick stat cards */}
          <motion.section
            className="py-8 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '55–62 HRC', label: 'Surface Hardness', primary: true },
                { value: '1–3 mm', label: 'Case Depth Range', primary: false },
                { value: 'Cr-Mo Alloy', label: 'Steel Family', primary: false },
                { value: '2–4 Days', label: 'Turnaround', primary: false },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-secondary/30 border border-border rounded-2xl p-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {stat.primary ? (
                    <div className="text-2xl md:text-3xl font-black text-primary mb-1 [text-shadow:0_0_20px_hsl(var(--primary)/0.3)]">{stat.value}</div>
                  ) : (
                    <div className="text-2xl md:text-3xl font-black text-primary mb-1">{stat.value}</div>
                  )}
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Applications + EN19 vs EN8 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                EN19 <span className="text-primary">Applications</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  EN19&rsquo;s chromium and molybdenum content gives it much deeper hardenability than plain carbon{' '}
                  <Link href="/induction-heat-treatment/en8-steel-induction-hardening" className="text-primary font-bold hover:underline">EN8 steel</Link> — the
                  hardened zone penetrates evenly even on large-diameter sections. We process EN19 gearbox shafts, hydraulic cylinder
                  rods, crankshaft journals, cam lobes and high-torque drive shafts across Punjab, Haryana and Delhi NCR.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Gearbox Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                    { title: 'Crankshaft Treatment', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
                    { title: 'Gear Tooth Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                    { title: 'Bearing Race Treatment', href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana' },
                  ].map((item, i) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border hover:border-primary/50 transition-all group animate-in fade-in slide-in-from-bottom-4 duration-500"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-foreground uppercase tracking-tight text-xs group-hover:text-primary transition-colors">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-10 bg-secondary/20 rounded-[2rem] border border-primary/10 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">EN19 vs EN8 — Why the Upgrade?</h3>
              <ul className="space-y-4 text-muted-foreground font-medium mb-8">
                {[
                  'Higher hardenability — consistent HRC on large diameters',
                  'Better fatigue strength under high torque and bending loads',
                  'Cr-Mo matrix resists softening at elevated temperatures',
                  'Preferred for automotive gearbox and hydraulic applications',
                  'Ideal for export / OEM parts requiring 4140-equivalent spec',
                ].map((point, i) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 transition-all duration-300 hover:border-l-2 hover:border-l-primary hover:pl-2 animate-in fade-in slide-in-from-bottom-4 duration-500"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <MapPin className="h-5 w-5" /> Served: Punjab, Haryana, Delhi NCR
              </div>
              <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                <Link href="/get-quote">Get EN19 Hardening Quote</Link>
              </Button>
            </motion.div>
          </div>

          {/* Technical Specifications Table */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// SPECIFICATIONS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              EN19 Hardening <span className="text-primary">Specifications</span>
            </motion.h2>
            <motion.div
              className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <table className="w-full text-left">
                <tbody className="text-sm md:text-base">
                  {[
                    ['Grade Designations', 'EN19 · 709M40 · AISI 4140 · DIN 42CrMo4'],
                    ['Steel Family', 'Chromium-molybdenum (Cr-Mo) alloy steel'],
                    ['Typical Composition', '0.38–0.45% C · 0.9–1.2% Cr · 0.2–0.35% Mo'],
                    ['Surface Hardness', '55–62 HRC (controlled to spec)'],
                    ['Case Depth', '1–3 mm typical (up to 4 mm on demand)'],
                    ['Max Component Size (in-house)', 'Up to 2,000 mm length · 300 mm diameter'],
                    ['Heating Method', 'Medium / high frequency induction'],
                    ['Quench Medium', 'Polymer / water-based, controlled'],
                    ['Straightness (long rods)', 'Better than 0.1 mm per metre'],
                    ['Turnaround', '2–4 working days (standard)'],
                    ['Testing', 'Rockwell HRC verification, case-depth check, dimensional inspection'],
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

          {/* Induction Hardening HRC Range — spec-research target */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// HRC RANGE //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              EN19 Induction Hardening <span className="text-primary">HRC Range</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              The <strong>EN19 induction hardening HRC range</strong> reflects its chromium-molybdenum alloy chemistry. EN19
              (709M40 / 4140) reaches 55–62 HRC at the surface with deep, even hardenability — the table below summarises the
              hardness, case depth, alloy content and austenitizing temperature for your specification.
            </p>
            <motion.div
              className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-primary/10">
                    <th scope="col" className="py-4 px-5 font-black uppercase italic tracking-tight text-foreground w-1/2">Property</th>
                    <th scope="col" className="py-4 px-5 font-black uppercase italic tracking-tight text-foreground">Value</th>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  {[
                    ['Surface Hardness', '55–62 HRC'],
                    ['Core Hardness', '28–38 HRC (hardened & tempered)'],
                    ['Case Depth', '1–3 mm (up to 4 mm to spec)'],
                    ['Alloy Content', '0.38–0.45% C · 0.9–1.2% Cr · 0.2–0.35% Mo'],
                    ['Austenitizing Temp', '840–880 °C'],
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

          {/* Technical Targets */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Technical <span className="text-primary">Targets</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { title: 'Hardness Range', desc: 'HRC 55–62 on the EN19 surface for maximum wear resistance, tuned to the 4140-equivalent spec.' },
                { title: 'Case Depth', desc: 'Precise control from 1 mm up to 4 mm, supporting load while keeping the core tough and ductile.' },
                { title: 'Deep Hardenability', desc: 'Cr-Mo chemistry delivers consistent HRC even on large-diameter sections — unlike plain carbon steels.' },
                { title: 'Distortion Control', desc: 'Selective single-shot and scanning coils minimise warping on long shafts and rods.' },
                { title: 'Certified Reports', desc: 'Rockwell hardness and case-depth documentation issued with every batch for OEM traceability.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="bg-card/50 p-8 rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <Zap className="h-8 w-8 text-primary mb-6" />
                  <h3 className="font-bold text-xl mb-3 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Pricing & Turnaround — captures mid-funnel commercial keywords */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// PRICING & TURNAROUND //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              EN19 Hardening <span className="text-primary">Rates & Lead Time</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive <strong>EN19 steel hardening job work</strong> rates for both prototype batches and bulk OEM
              production. Final pricing depends on component weight, hardened length, case depth and quantity — share your drawing
              for an exact quote within 24 hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk and repeat OEM orders.' },
                { icon: FileText, title: 'Minimum Order', desc: 'No rigid minimum — single trial parts to multi-thousand-piece lots accepted.' },
                { icon: Clock, title: 'Turnaround', desc: 'Standard 2–4 working days; urgent same-week jobs for regular clients.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your EN19 Hardening Quote
                </a>
              </Button>
            </div>
          </section>

          {/* Why OEMs Trust Us — E-E-A-T */}
          <section className="py-20 border-t border-border">
            <p className="section-label text-center">// WHY CHOOSE US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why OEMs Trust <span className="text-primary">{SITE_NAME}</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Award, title: 'Consistent 55–62 HRC', desc: 'Repeatable hardness on every EN19 / 4140 part, batch after batch.' },
                { icon: ShieldCheck, title: '4140-Equivalent Spec', desc: 'Documented, traceable hardening for OEM and export supply chains.' },
                { icon: History, title: 'Years of Experience', desc: 'Serving Ludhiana’s automotive, tractor and hydraulic manufacturers.' },
                { icon: Clock, title: 'Fast Turnaround', desc: '2–4 day standard delivery keeps your production line running.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Related Material Grades — cross-links (EN8 / EN24 / 4140) */}
          <section className="py-24 border-t border-border">
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Related <span className="text-primary">Material Grades</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We induction-harden the full range of automotive and industrial steels. Explore our dedicated material-grade pages for
              hardness, case depth and application detail:
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { title: 'EN8 Steel Hardening', href: '/induction-heat-treatment/en8-steel-induction-hardening', icon: Settings, sub: 'Medium carbon — 52–58 HRC' },
                { title: 'EN24 Steel Hardening', href: '/induction-heat-treatment/en24-steel-hardening', icon: Boxes, sub: 'Ni-Cr-Mo premium alloy' },
                { title: '4140 Steel Hardening', href: '/induction-heat-treatment/4140-steel-hardening', icon: Cpu, sub: 'AISI 4140 — OEM & export' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <motion.div
                    variants={scaleUp}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-card border border-border rounded-2xl transition-all hover:border-primary/50 flex flex-col items-center text-center shadow-sm h-full"
                  >
                    <link.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm">{link.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2">{link.sub}</p>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </section>

          {/* Related Services */}
          <section className="py-16 border-t border-border">
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Related <span className="text-primary">Services</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Shaft Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Transmission Shafts' },
                { title: 'Gear Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Cpu, label: 'Gears & Pinions' },
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
              EN19 Steel Hardening <span className="text-primary">FAQs</span>
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
              Learn more about the metallurgy of EN19 / 4140 surface hardening from the{' '}
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
