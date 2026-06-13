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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/en24-steel-hardening`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I need EN24 steel hardening job work (817M40 / 4340). Please find my drawing attached.');

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
    q: 'Is EN24 the same as SAE 4340?',
    a: 'Yes — EN24 (BS 817M40) and SAE/AISI 4340 are equivalent nickel-chromium-molybdenum alloy steels. If your drawing or purchase order specifies 4340, SNCM439 (JIS) or 36CrNiMo4 (DIN), we treat it identically to EN24 for induction hardening and accept components described by any of these standards.',
  },
  {
    q: 'What hardness can I achieve on EN24 steel hardening job work?',
    a: 'EN24 achieves 55–62 HRC surface hardness with induction hardening, with case depth from 0.5 mm to 3 mm. The core of a properly hardened-and-tempered EN24 component retains 35–45 HRC, giving an exceptional combination of surface wear resistance and core toughness that no through-hardening process can match.',
  },
  {
    q: 'How much does EN24 steel hardening job work cost in Ludhiana?',
    a: 'EN24 hardening is priced per kilogram or per piece depending on component weight, diameter, required case depth and order quantity, with reduced rates on bulk and repeat OEM orders. Share your drawing and quantity on WhatsApp and we return an exact quotation within 24 hours.',
  },
  {
    q: 'What is the minimum order quantity for EN24 hardening?',
    a: 'There is no rigid minimum order quantity. We accept single prototype or trial EN24 components for testing as well as high-volume OEM production lots. Bulk and repeat orders receive better per-piece pricing.',
  },
  {
    q: 'What is the turnaround time for EN24 steel hardening?',
    a: 'Standard turnaround is 2–4 working days after we receive the components and an approved specification. Urgent and same-week jobs can be arranged for regular clients. Large or complex EN24 profiles are scheduled and quoted individually.',
  },
  {
    q: 'Why choose induction hardening over case carburizing for EN24?',
    a: 'Carburizing requires 900 °C+ furnace temperatures for 4–10 hours — causing scale, distortion and re-machining of critical surfaces. Induction hardening heats only the surface layer in seconds, causes minimal distortion (typically under 0.05 mm on shafts) and produces a cleaner part with no decarburization. For EN24, where precision dimensions are critical, induction is almost always preferred.',
  },
  {
    q: 'What EN24 components do you process at Thakur Industries?',
    a: 'We regularly process EN24 high-speed machine spindles, heavy gearbox output shafts, press-tool guide pins and pillars, large-diameter crankshaft journals, aerospace-specification fastener bodies and defence component shafts. Component diameter from 15 mm to 250 mm, length up to 2,000 mm. Complex profiles are quoted individually.',
  },
  {
    q: 'What HRC can EN24 reach with induction hardening?',
    a: 'EN24 (817M40 / SAE 4340) reaches 55–62 HRC surface hardness with induction hardening. Its nickel-chromium-molybdenum alloy system gives outstanding hardenability and core toughness — the hardened-and-tempered core holds 35–45 HRC, case depth runs 0.5–3 mm, and austenitizing is done at 850–900 °C. This EN24 induction hardening HRC range is documented with a certified Rockwell report on every batch.',
  },
];

export default function EN24SteelPage() {
  // Service schema — enriched with serviceType, offers, aggregateRating & wider areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'EN24 Steel Hardening Job Work — Ludhiana, Punjab',
    serviceType: 'Induction Hardening for EN24 (817M40 / SAE 4340) Steel',
    url: `${PAGE_URL}/`,
    description:
      'Precision EN24 steel hardening job work — 55–62 HRC, 0.5–3 mm case depth on 817M40 / SAE 4340 nickel-chromium-molybdenum alloy for high-stress shafts, spindles, aerospace & heavy engineering components in Ludhiana, Punjab.',
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
      description: 'EN24 steel hardening job work priced per kg or per piece. Request a custom quotation.',
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
          { name: 'EN24 Steel Hardening', href: '/induction-heat-treatment/en24-steel-hardening' },
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
              <li className="text-primary">EN24 Steel Hardening</li>
            </ol>
          </nav>

          <PageHeader
            title="EN24 Steel Hardening"
            highlightedWord="Job Work"
            description="Precision EN24 (817M40 / SAE 4340) steel hardening job work — nickel-chromium-molybdenum alloy for high-stress shafts, spindles, heavy engineering & aerospace-grade components. 55–62 HRC with certified Rockwell reports."
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
                { icon: ShieldCheck, label: 'Certified Reports' },
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
                  <MessageSquare className="h-5 w-5" /> Send EN24 Drawing
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
              alt="EN24 steel hardening job work — 817M40 nickel chromium molybdenum alloy induction heat treatment at Thakur Industries Ludhiana"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">EN24 · 817M40 · SAE 4340 Equivalent</span>
                <p className="text-white font-black uppercase italic text-xl md:text-2xl mt-2 tracking-tighter">Maximum Strength. Surface & Core.</p>
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
            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
              Looking for reliable <strong>EN24 steel hardening job work</strong>? EN24 (817M40) is a nickel-chromium-molybdenum alloy
              steel — the premium grade chosen when fatigue life, impact resistance and surface hardness must coexist under the most
              demanding conditions. Equivalent to SAE 4340, it&apos;s specified for aerospace components, heavy-duty gearbox shafts,
              high-speed spindles and defence-grade applications. <strong>{SITE_NAME}</strong> provides precision{' '}
              <strong>induction hardening for EN24 steel</strong> from our Ludhiana facility, achieving 55–62 HRC with fully certified
              Rockwell hardness reports.
            </p>
          </motion.section>

          {/* Material Properties Stat Cards */}
          <motion.section
            className="py-12 md:py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '55–62 HRC', label: 'Surface Hardness' },
                { value: '0.5–3 mm', label: 'Case Depth Range' },
                { value: 'Ni-Cr-Mo', label: 'Alloy System' },
                { value: '2–4 Days', label: 'Turnaround' },
              ].map((stat, i) => (
                <div key={stat.label} className="bg-secondary/30 border border-border rounded-2xl p-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className={stat.label === 'Surface Hardness' ? 'text-3xl md:text-4xl font-black text-primary [text-shadow:0_0_20px_hsl(var(--primary)/0.3)] mb-1' : 'text-2xl md:text-3xl font-black text-primary mb-1'}>{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* EN24 Applications + Why EN24 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 py-16 md:py-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                EN24 <span className="text-primary">Applications</span>
              </h2>
              <div className="space-y-6">
                <p className="text-base md:text-lg text-muted-foreground font-medium">
                  EN24&apos;s nickel content boosts impact toughness; chromium and molybdenum provide high hardenability and temper
                  resistance. The result is a steel that can be hardened to 55–62 HRC at the surface while the core absorbs shock loads
                  without cracking — critical for aircraft landing-gear pins, high-speed machine spindles, press-tool components and
                  heavy gear shafts.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'High-Stress Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                    { title: 'Gear Tooth Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                    { title: 'Crankshaft Hardening', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
                    { title: 'Case Hardening Services', href: '/case-hardening-heat-treatment' },
                  ].map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border hover:border-primary/50 transition-all group"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary group-hover:scale-110 transition-transform shrink-0" />
                      <span className="font-bold text-foreground uppercase tracking-tight text-xs group-hover:text-primary transition-colors">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-10 bg-secondary/20 rounded-[2rem] border border-primary/10 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Why EN24 for Critical Applications?</h3>
              <ul className="space-y-4 text-muted-foreground font-medium mb-8">
                {[
                  'Highest hardenability of the EN-series — uniform HRC on large sections',
                  'Nickel adds toughness at hardened state — resists brittle fracture',
                  'SAE 4340 equivalent — accepted for export and OEM specifications',
                  'Superior fatigue life under reversed bending and torsion',
                  'Retains mechanical properties after repeated thermal cycling',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 transition-all duration-200 hover:pl-2 hover:border-l-2 hover:border-l-primary">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <MapPin className="h-5 w-5" /> Served: Punjab, Haryana, Delhi NCR
              </div>
              <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                <Link href="/contact">Get EN24 Hardening Quote</Link>
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
              EN24 Hardening <span className="text-primary">Specifications</span>
            </motion.h2>
            <motion.div
              className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <table className="w-full text-left">
                <tbody className="text-sm md:text-base">
                  {[
                    ['Material Grade', 'EN24 · 817M40 · SAE 4340 · 36CrNiMo4'],
                    ['Alloy System', 'Nickel-Chromium-Molybdenum (Ni-Cr-Mo)'],
                    ['Surface Hardness', '55–62 HRC (certified Rockwell report)'],
                    ['Core Hardness', '35–45 HRC (hardened & tempered)'],
                    ['Case Depth', '0.5 mm – 3 mm (controlled to spec)'],
                    ['Component Size', 'Diameter 15–250 mm, length up to 2000 mm'],
                    ['Heating Temperature', '850–900 °C (induction)'],
                    ['Quench Medium', 'Polymer / oil-based, controlled'],
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

          {/* Induction Hardening HRC Range — spec-research target */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// HRC RANGE //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              EN24 Induction Hardening <span className="text-primary">HRC Range</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              The <strong>EN24 induction hardening HRC range</strong> is the highest in the EN-series. EN24 (817M40 / 4340)
              reaches 55–62 HRC at the surface while its nickel-chromium-molybdenum core stays tough — the table below
              summarises the hardness, case depth, alloy content and austenitizing temperature you can specify.
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
                    ['Core Hardness', '35–45 HRC (hardened & tempered)'],
                    ['Case Depth', '0.5–3 mm (controlled to spec)'],
                    ['Alloy Content', 'Ni-Cr-Mo · ~0.36–0.44% C'],
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
              EN24 Hardening <span className="text-primary">Rates & Lead Time</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive <strong>EN24 steel hardening rates</strong> for both prototype batches and bulk OEM production. Final
              pricing depends on component weight, diameter, case depth and quantity — share your drawing for an exact quote within 24
              hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk and repeat OEM orders.' },
                { icon: FileText, title: 'Minimum Order', desc: 'No rigid minimum — single trial EN24 parts to multi-thousand-piece lots accepted.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your EN24 Hardening Quote
                </a>
              </Button>
            </div>
          </section>

          {/* Why OEMs Trust Us — trust / E-E-A-T */}
          <section className="py-16 md:py-20 border-t border-border">
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
                { icon: Award, title: 'Consistent 55–62 HRC', desc: 'Repeatable certified hardness on every EN24 part, batch after batch.' },
                { icon: ShieldCheck, title: 'Certified Reports', desc: 'Rockwell hardness and case-depth documentation for OEM supply chains.' },
                { icon: History, title: 'Years of Experience', desc: 'Trusted by Ludhiana’s automotive, tractor and heavy-engineering makers.' },
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

          {/* Related Material Grades — internal links to sibling grade pages */}
          <section className="py-16 md:py-24 border-t border-border">
            <p className="section-label text-center">// MATERIAL GRADES //</p>
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Related <span className="text-primary">Material Grades</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              EN24 sits at the top of the EN-series. Compare it with the other gear and shaft steels we induction-harden — explore our
              dedicated material-grade pages for hardness, case depth and application detail:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { title: 'EN8 Steel Hardening', href: '/induction-heat-treatment/en8-steel-induction-hardening', icon: Settings, sub: '080M40 medium carbon — 52–58 HRC' },
                { title: 'EN19 Steel Hardening', href: '/induction-heat-treatment/en19-steel-induction-hardening', icon: Boxes, sub: '4140 Cr-Mo alloy — 55–62 HRC' },
                { title: '4140 Steel Hardening', href: '/induction-heat-treatment/4140-steel-hardening', icon: Cpu, sub: 'AISI 4140 / 42CrMo4 — OEM & export' },
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
              EN24 Steel Hardening <span className="text-primary">FAQs</span>
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
              Learn more about the metallurgy of alloy-steel surface hardening from the{' '}
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
