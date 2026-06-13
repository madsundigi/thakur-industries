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
  History,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/en8-steel-induction-hardening`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I need EN8 steel hardening job work (080M40). Please find my drawing attached.');

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const scaleUp = {
  hidden: { opacity: 0, scale: 0.85 },
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
    q: 'How much does EN8 steel hardening job work cost in Ludhiana?',
    a: 'EN8 hardening rates depend on component weight, diameter, required case depth and order quantity. We price most EN8 induction hardening job work on a per-kilogram or per-piece basis, with reduced rates for bulk and repeat OEM orders. Share your EN8 (080M40) drawing and quantity on WhatsApp for an exact quotation within 24 hours.',
  },
  {
    q: 'What is the minimum order quantity for EN8 hardening?',
    a: 'There is no rigid minimum order quantity. We accept single prototype shafts and gears for trial as well as bulk production lots of 5,000+ EN8 components per month. Larger batches receive better per-piece pricing.',
  },
  {
    q: 'What is the turnaround time for EN8 induction hardening?',
    a: 'Standard turnaround is 2–4 working days after we receive your EN8 components and an approved specification. Urgent and same-week jobs can be arranged for regular tractor and automotive OEM clients.',
  },
  {
    q: 'Can EN8 steel be induction hardened?',
    a: 'Yes. EN8 (080M40) with 0.36–0.44% carbon is an excellent candidate for induction hardening. The medium carbon content enables full martensite formation at the surface, achieving 52–58 HRC. The core remains unaffected, maintaining ductility and toughness — ideal for shafts and axles that need wear resistance on the surface and impact resistance in the core.',
  },
  {
    q: 'What hardness can I expect on EN8 after induction hardening?',
    a: 'Properly heat-treated EN8 achieves 52–58 HRC surface hardness with a controlled case depth of 1–3 mm (up to 5 mm depending on frequency and specification). We provide Rockwell hardness test reports with every batch so you can verify against your engineering drawings.',
  },
  {
    q: 'What EN8 components do you harden at Thakur Industries?',
    a: 'We regularly process EN8 shafts (transmission, pump, PTO), axles (tractor and automotive), gear blanks, spindles, couplings, and agricultural implement pins. Component diameter from 10 mm to 300 mm, length up to 2,000 mm. Odd profiles and flanged shafts can be quoted individually.',
  },
  {
    q: 'How is EN8 induction hardening different from EN8 through hardening?',
    a: 'Through hardening heats the entire cross-section — making the component brittle throughout. Induction hardening heats only the outer 1–3 mm surface layer, leaving the core soft and tough. For shafts and gears that need fatigue resistance (bending, torsion) with surface wear resistance, induction is superior. It also causes far less distortion than furnace hardening.',
  },
  {
    q: 'Do you provide EN8 induction hardening for Punjab tractor component manufacturers?',
    a: 'Yes. We serve tractor component OEMs and job shops across Punjab — Ludhiana, Mandi Gobindgarh, Khanna, Phagwara, Jalandhar, and Patiala. EN8 PTO shafts, hydraulic cylinder pins, lift arm pivots, and wheel axles are all routinely processed. Batch sizes from single prototypes to 5,000+ pieces per month.',
  },
  {
    q: 'What HRC can EN8 reach with induction hardening?',
    a: 'EN8 (080M40) reaches 52–58 HRC surface hardness with induction hardening, thanks to its 0.36–0.44% carbon content which forms hard martensite at the surface. The core stays at roughly 20–28 HRC (in the as-supplied normalised condition), keeping it tough and ductile. Typical case depth is 1–3 mm and austenitizing happens at 850–900 °C before quenching. This is the standard EN8 induction hardening HRC range we certify with a Rockwell report on every batch.',
  },
];

export default function EN8SteelPage() {
  // Service schema — enriched with serviceType, offers, aggregateRating & full provider address
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'EN8 Steel Induction Hardening Job Work — Ludhiana, Punjab',
    serviceType: 'Induction Hardening for EN8 (080M40) Steel',
    url: `${PAGE_URL}/`,
    description:
      'Precision induction hardening for EN8 (080M40) medium carbon steel — shafts, axles, gears, spindles and agri components. 52–58 HRC with 1–3 mm case depth and certified Rockwell reports.',
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
    areaServed: ['Ludhiana', 'Mandi Gobindgarh', 'Khanna', 'Phagwara', 'Jalandhar', 'Patiala', 'Haryana', 'Delhi NCR'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'EN8 steel hardening job work priced per kg or per piece. Request a custom quotation.',
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
          { name: 'EN8 Steel Induction Hardening', href: '/induction-heat-treatment/en8-steel-induction-hardening' },
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
              <li className="text-primary">EN8 Steel Hardening</li>
            </ol>
          </nav>

          <PageHeader
            title="EN8 Steel Induction Hardening"
            highlightedWord="Punjab"
            description="Precision induction hardening for EN8 (080M40) medium carbon steel — shafts, axles, gears, spindles, and agri equipment. 52–58 HRC with certified Rockwell reports from Ludhiana."
            className="text-center !pt-6"
          />

          {/* Above-the-fold trust badges + CTA cluster */}
          <motion.div
            className="-mt-2 mb-4 flex flex-col items-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Award, label: '52–58 HRC' },
                { icon: ShieldCheck, label: 'Certified Rockwell Reports' },
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
                  <MessageSquare className="h-5 w-5" /> WhatsApp EN8 Drawing
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
              alt="EN8 steel induction hardening job work — 080M40 medium carbon steel heat treatment in Ludhiana, Punjab"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">EN8 · 080M40 · C40 Steel</span>
                <p className="text-white font-black uppercase italic text-xl md:text-2xl mt-2 tracking-tighter">52–58 HRC. Hard Surface. Tough Core.</p>
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
              Looking for dependable <strong>EN8 steel hardening job work</strong>? EN8 is India’s most widely used medium carbon
              steel — found in millions of tractor shafts, automotive axles, pump spindles, and gear blanks across Punjab’s
              manufacturing belt. <strong>{SITE_NAME}</strong> provides precision <strong>EN8 induction hardening</strong> for
              080M40 components, achieving 52–58 HRC surface hardness with a 1–3 mm case depth while keeping the core tough and
              ductile. No furnace, no full-part heat — only the surface wears. Certified Rockwell hardness reports with every batch.
            </p>
          </motion.section>

          {/* Material grade quick stats */}
          <motion.section
            className="py-8 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '52–58 HRC', label: 'Surface Hardness', primary: true },
                { value: '1–3 mm', label: 'Case Depth Range', primary: false },
                { value: '0.36–0.44%', label: 'Carbon Content', primary: false },
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

          {/* Applications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                EN8 <span className="text-primary">Applications</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  EN8 (also sold as C40 or 080M40 in Indian &amp; British standards) responds excellently to induction hardening — the
                  high-frequency coil heats only the surface layer in seconds, then polymer quench locks in hardness. We process EN8
                  shafts from 10 mm to 300 mm diameter and lengths up to 2,000 mm.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'EN8 Shaft & Axle Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                    { title: 'EN8 Gear Blank Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                    { title: 'Bearing Race Treatment', href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana' },
                    { title: 'Crankshaft Hardening', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Why EN8 Responds Well to Induction</h3>
              <ul className="space-y-4 text-muted-foreground font-medium mb-8">
                {[
                  'Carbon content (0.36–0.44%) ideal for martensite formation',
                  'Selective surface hardening — core remains tough',
                  'No distortion — localised heating only',
                  'Eliminates carburizing or nitriding for surface wear',
                  'Repeated batches with consistent HRC results',
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
                <Link href="/get-quote">Get EN8 Hardening Quote</Link>
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
              EN8 Hardening <span className="text-primary">Specifications</span>
            </motion.h2>
            <motion.div
              className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <table className="w-full text-left">
                <tbody className="text-sm md:text-base">
                  {[
                    ['Steel Grade', 'EN8 (080M40 / C40 — BS & IS equivalents)'],
                    ['Carbon Content', '0.36–0.44% C (medium carbon steel)'],
                    ['Surface Hardness', '52–58 HRC (induction hardened surface)'],
                    ['Case Depth', '1–3 mm typical (up to 5 mm to spec)'],
                    ['Suitable Components', 'Shafts, axles, gear blanks, spindles, couplings, agri pins'],
                    ['Component Range', 'Ø10–300 mm diameter, up to 2,000 mm length'],
                    ['Heating Temperature', '850–900 °C (high-frequency induction)'],
                    ['Quench Medium', 'Polymer / water-based, controlled'],
                    ['Turnaround', '2–4 working days (standard)'],
                    ['Testing', 'Certified Rockwell (HRC) reports, case-depth & dimensional check'],
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
              EN8 Induction Hardening <span className="text-primary">HRC Range</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              The <strong>EN8 induction hardening HRC range</strong> is well defined by its medium carbon content. EN8 (080M40)
              achieves 52–58 HRC at the surface while the core stays soft and tough — the table below summarises the hardness,
              case depth, chemistry and austenitizing temperature you can specify on your drawing.
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
                    ['Surface Hardness', '52–58 HRC'],
                    ['Core Hardness', '20–28 HRC (tough, ductile core)'],
                    ['Case Depth', '1–3 mm (up to 5 mm to spec)'],
                    ['Carbon Content', '0.36–0.44% C (medium carbon)'],
                    ['Austenitizing Temp', '850–900 °C'],
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
              EN8 Hardening <span className="text-primary">Rates & Lead Time</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive <strong>EN8 hardening rates</strong> for both prototype batches and bulk OEM production. Final
              pricing depends on component weight, diameter, case depth and quantity — share your 080M40 drawing for an exact quote
              within 24 hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk and repeat OEM orders.' },
                { icon: FileText, title: 'Minimum Order', desc: 'No rigid minimum — single trial shafts to 5,000+ piece monthly lots accepted.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your EN8 Hardening Quote
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
                { icon: Award, title: 'Consistent 52–58 HRC', desc: 'Repeatable surface hardness on every EN8 batch.' },
                { icon: ShieldCheck, title: 'Certified Reports', desc: 'Rockwell test reports with every EN8 hardening job.' },
                { icon: History, title: 'Years of Experience', desc: 'Serving Punjab’s tractor & automotive component makers.' },
                { icon: Clock, title: 'Fast Turnaround', desc: '2–4 day standard delivery keeps your line running.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Related Material Grades — preserved cross-links with improved anchors */}
          <section className="py-24 border-t border-border">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Related <span className="text-primary">Material Grades</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'EN19 Steel Induction Hardening', href: '/induction-heat-treatment/en19-steel-induction-hardening', icon: Settings, sub: 'EN19 (4140) Cr-Mo alloy — 55–62 HRC' },
                { title: 'EN24 Steel Induction Hardening', href: '/induction-heat-treatment/en24-steel-hardening', icon: Boxes, sub: 'EN24 (4340) Ni-Cr-Mo — high strength' },
                { title: '4140 Steel Induction Hardening', href: '/induction-heat-treatment/4140-steel-hardening', icon: Cpu, sub: 'AISI 4140 / 42CrMo4 — OEM & export' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-card border border-border rounded-2xl transition-all hover:border-primary/50 flex flex-col items-center text-center shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <link.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm">{link.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2">{link.sub}</p>
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
              EN8 Steel Induction Hardening <span className="text-primary">FAQs</span>
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
