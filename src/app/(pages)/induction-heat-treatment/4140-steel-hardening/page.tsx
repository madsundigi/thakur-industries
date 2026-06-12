'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Settings,
  Boxes,
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  IndianRupee,
  FileText,
  Award,
  ShieldCheck,
  Star,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/4140-steel-hardening`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I need 4140 steel hardening (AISI 4140 / EN19 / 42CrMo4) job work. Please find my drawing attached.');

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
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

// Frequently asked questions — single source of truth for both the visible
// accordion AND the FAQPage schema (kept in sync to avoid schema mismatch).
const FAQ_ITEMS = [
  {
    q: 'Is 4140 the same as EN19/42CrMo4?',
    a: 'Yes. AISI/SAE 4140 is the same chromium-molybdenum alloy steel known as EN19 (British/Indian standard 709M40), 42CrMo4 in German DIN, and SCM440 in Japanese JIS. If your drawing specifies 4140, EN19, 42CrMo4 or SCM440, they are the same alloy and we process them identically — no re-qualification needed. Our 4140 steel hardening service in India accepts components described by any of these designations.',
  },
  {
    q: 'How much does 4140 steel hardening cost in India?',
    a: '4140 hardening cost depends on component weight, cross-section, required case depth and order quantity. We price job work on a per-kilogram or per-piece basis with reduced rates for bulk and repeat OEM orders. Share your drawing and quantity on WhatsApp or our contact form for an exact quotation within 24 hours.',
  },
  {
    q: 'What is the minimum order quantity (MOQ) for 4140 hardening?',
    a: 'There is no rigid minimum order quantity. We accept single prototype parts for trial as well as high-volume export production lots of several thousand pieces. Bulk orders receive better per-piece 4140 hardening pricing.',
  },
  {
    q: 'What is the turnaround time for 4140 steel hardening?',
    a: 'Standard turnaround is 2–4 working days after we receive the components and an approved specification. Urgent same-week jobs can be arranged for regular OEM and export clients. We ship treated parts back via courier or transport anywhere in India.',
  },
  {
    q: 'Do you provide 4140 hardening for OEM and export manufacturers?',
    a: 'Yes. We serve OEM and export manufacturers shipping automotive components, hydraulic and pneumatic parts, mold bases, die tooling and precision shafts that specify AISI 4140. Every batch includes Rockwell HRC test reports with part number, heat number, measured surface hardness and case depth — suitable for international quality-system documentation.',
  },
  {
    q: 'What hardness and case depth does 4140 achieve after induction hardening?',
    a: 'AISI 4140 achieves 54–60 HRC surface hardness with induction hardening at our facility, with controlled case depth from 0.5 mm to 4 mm depending on cross-section, frequency and your specification. All batches include certified Rockwell test reports verifying HRC at the surface and at the specified depth.',
  },
];

export default function Steel4140Page() {
  // Service schema — enriched with serviceType, offers, aggregateRating & wider areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '4140 Steel Hardening Service in India',
    serviceType: 'Induction Hardening for AISI 4140 / EN19 / 42CrMo4 / SCM440 Steel',
    url: `${PAGE_URL}/`,
    description:
      'Precision 4140 steel hardening service in India — AISI 4140 (EN19 / 42CrMo4 / SCM440) chromium-molybdenum steel hardened to 54–60 HRC. Certified Rockwell reports for OEM & export manufacturers — shafts, tooling, dies, mold bases, axles.',
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
    areaServed: ['India', 'Ludhiana', 'Punjab', 'Haryana', 'Delhi NCR', 'Export'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: '4140 steel hardening job work priced per kg or per piece. Request a custom quotation.',
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
          { name: '4140 Steel Hardening', href: '/induction-heat-treatment/4140-steel-hardening' },
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
              <li className="text-primary">4140 Steel Hardening</li>
            </ol>
          </nav>

          <p className="section-label text-center">// MATERIAL GRADE //</p>
          <PageHeader
            title="4140 Steel Hardening Service"
            highlightedWord="India"
            description="Precision induction hardening for AISI 4140 (EN19 / 42CrMo4 / SCM440) chromium-molybdenum steel — shafts, tooling, dies, mold bases & OEM export components. 54–60 HRC. Certified Rockwell reports."
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
                { icon: Award, label: '54–60 HRC' },
                { icon: ShieldCheck, label: 'Certified Reports' },
                { icon: Globe, label: 'OEM & Export' },
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
              alt="4140 steel hardening service India — AISI 4140 EN19 42CrMo4 chromium molybdenum induction heat treatment to 54-60 HRC"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">AISI 4140 · EN19 · 42CrMo4 · SCM440</span>
                <p className="text-white font-black uppercase italic text-xl md:text-2xl mt-2 tracking-tighter">54–60 HRC. OEM. Export. Certified.</p>
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
              Looking for a dependable <strong>4140 steel hardening service in India</strong>? AISI 4140 is the world’s most
              specified chromium-molybdenum engineering steel — known as EN19 in British and Indian standards, 42CrMo4 in German DIN,
              and SCM440 in Japan. OEM procurement teams, export units and Tier-1 suppliers specify it by AISI designation.{' '}
              <strong>{SITE_NAME}</strong> provides precision <strong>induction hardening for AISI 4140 steel</strong> with
              documentation that satisfies international quality requirements — 54–60 HRC, certified Rockwell test reports and batch
              traceability. Accepted from Punjab, Haryana and Delhi NCR, and shipped all-India to OEM and export manufacturers.
            </p>
          </motion.section>

          {/* Material Properties Card */}
          <motion.section
            className="py-8 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '54–60 HRC', label: 'Surface Hardness' },
                { value: '0.5–4 mm', label: 'Case Depth Range' },
                { value: 'EN19 / DIN 42CrMo4', label: 'Equivalent Grades' },
                { value: '2–4 Days', label: 'Turnaround' },
              ].map((stat, i) => (
                <div key={stat.label} className="bg-secondary/30 border border-border rounded-2xl p-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className={stat.label === 'Surface Hardness' ? 'text-4xl font-black text-primary [text-shadow:0_0_20px_hsl(var(--primary)/0.3)] mb-1' : `font-black text-primary mb-1 ${stat.value.length > 8 ? 'text-lg md:text-xl' : 'text-2xl md:text-3xl'}`}>{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Applications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                4140 <span className="text-primary">Applications</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  AISI 4140 is used wherever engineering drawings call for a universally understood alloy grade — OEM automotive
                  assemblies for export, mold bases and die tooling, hydraulic and pneumatic component shafts, fastener forgings, and
                  heavy-duty machine components. We accept drawings that specify 4140 and process to exact surface hardness and case
                  depth requirements.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                    { title: 'Gear Tooth Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                    { title: 'Crankshaft Hardening', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
                    { title: 'Bearing Race Hardening', href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana' },
                  ].map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border hover:border-primary/50 transition-all group"
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">4140 for OEM & Export Work</h3>
              <ul className="space-y-4 text-muted-foreground font-medium mb-8">
                {[
                  'Internationally recognised AISI grade — no conversion needed',
                  'Documentation matches OEM quality system requirements',
                  'Batch HRC test reports with part and heat numbers',
                  'Consistent results across multi-lot export shipments',
                  'Accepted from all-India customers via courier or transport',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 transition-all duration-200 hover:pl-2 hover:border-l-2 hover:border-l-primary">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <MapPin className="h-5 w-5" /> All-India · Punjab · NCR · Export
              </div>
              <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                <Link href="/get-quote">Get 4140 Hardening Quote</Link>
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
              4140 Hardening <span className="text-primary">Specifications</span>
            </motion.h2>
            <motion.div
              className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <table className="w-full text-left">
                <tbody className="text-sm md:text-base">
                  {[
                    ['Material Grade', 'AISI 4140 / EN19 (709M40) / 42CrMo4 / SCM440'],
                    ['Composition', '0.38–0.43% C · 0.8–1.1% Cr · 0.15–0.25% Mo'],
                    ['Surface Hardness', '54–60 HRC (induction hardened)'],
                    ['Case Depth', '0.5 mm – 4.0 mm (controlled to spec)'],
                    ['Process', 'Selective induction hardening'],
                    ['Components', 'Shafts, axles, gears, mold bases, dies, pins, bushings'],
                    ['Quench Medium', 'Polymer / water-based, controlled'],
                    ['Turnaround', '2–4 working days (standard)'],
                    ['Testing', 'Certified Rockwell HRC reports, case-depth & dimensional check'],
                    ['Service Area', 'Ludhiana, Punjab, Haryana, Delhi NCR · All-India · Export'],
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

          {/* Pricing & Turnaround — captures mid-funnel commercial keywords */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// PRICING & TURNAROUND //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              4140 Hardening <span className="text-primary">Cost & Lead Time</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive <strong>4140 steel hardening rates</strong> for both prototype batches and bulk OEM and export
              production. Final pricing depends on component weight, cross-section, case depth and quantity — share your drawing for an
              exact quote within 24 hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece (INR), with reduced rates on bulk and repeat OEM and export orders.' },
                { icon: FileText, title: 'Minimum Order', desc: 'No rigid MOQ — single trial parts to multi-thousand-piece export lots accepted.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your 4140 Hardening Quote
                </a>
              </Button>
            </div>
          </section>

          {/* Why OEMs & Exporters Trust Us — E-E-A-T */}
          <section className="py-20 border-t border-border">
            <p className="section-label text-center">// WHY CHOOSE US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why OEMs &amp; Exporters Trust <span className="text-primary">{SITE_NAME}</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Award, title: 'Consistent 54–60 HRC', desc: 'Repeatable surface hardness on every 4140 batch, lot after lot.' },
                { icon: ShieldCheck, title: 'Certified Documentation', desc: 'Rockwell HRC reports with heat and part numbers for export QA.' },
                { icon: Globe, title: 'Export-Ready', desc: 'Grade designations and reports accepted by international buyers.' },
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

          {/* Mold Base & Die Tooling detail */}
          <section className="py-24 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  4140 Mold Bases &amp; <span className="text-primary">Die Tooling</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground font-medium">
                  <p>
                    4140 mold bases, press tool components, die pillars and guide bushings are regularly processed. We use selective
                    induction hardening to harden only the wear surfaces — bores, wear pads and parting-line areas — while leaving bolt
                    holes and non-critical zones soft for machining. This prevents warping of large flat plates.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Selective hardening of wear surfaces only',
                      'Bolt holes and machined zones left soft',
                      'Minimal distortion on large flat plates',
                      'Hardening-zone mapping to your drawing',
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
                className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
              >
                <Image
                  src="/images/images/5.jpeg"
                  alt="4140 steel mold base and die tooling after selective induction hardening to 54-60 HRC at Thakur Industries"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Related Material Grades — internal cross-links */}
          <section className="py-24 border-t border-border">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Related <span className="text-primary">Material Grades</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'EN8 Steel Hardening', href: '/induction-heat-treatment/en8-steel-induction-hardening', icon: Settings, sub: 'Medium carbon — 52–58 HRC' },
                { title: 'EN19 Steel Hardening', href: '/induction-heat-treatment/en19-steel-induction-hardening', icon: Boxes, sub: '4140 Cr-Mo alloy — 55–62 HRC' },
                { title: 'EN24 Steel Hardening', href: '/induction-heat-treatment/en24-steel-hardening', icon: Cpu, sub: 'Ni-Cr-Mo premium alloy' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-card border border-border rounded-2xl transition-all animate-in fade-in slide-in-from-bottom-4 duration-500 group hover:border-primary/50 transition-colors duration-200 flex flex-col items-center text-center shadow-sm"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <link.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm">{link.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2">{link.sub}</p>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity mt-3" />
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
              AISI 4140 Hardening <span className="text-primary">FAQs</span>
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
              Learn more about the metallurgy of chromium-molybdenum steels and surface hardening from the{' '}
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
