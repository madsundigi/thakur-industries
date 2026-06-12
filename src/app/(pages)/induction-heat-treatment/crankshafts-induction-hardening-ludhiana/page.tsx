
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Search,
  Droplet,
  Gauge,
  FileText,
  Phone,
  MessageSquare,
  Boxes,
  History,
  Settings,
  Flame,
  Activity,
  Award,
  Clock,
  Star,
  IndianRupee,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/crankshafts-induction-hardening-ludhiana`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I need crankshaft hardening job work (journals & crankpins). Please find my drawing attached.');

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
    q: 'How much does crankshaft hardening cost in Punjab?',
    a: 'Crankshaft hardening job-work pricing depends on the shaft size, number of journals and crankpins, required case depth, steel grade (EN24, 4340, EN9) and order quantity. We price most jobs per piece, with attractive rates for bulk and repeat OEM orders. Send your component drawing and quantity on WhatsApp for an exact quotation within 24 hours.',
  },
  {
    q: 'What is the minimum order quantity for crankshaft hardening job work?',
    a: 'There is no rigid minimum. We handle single prototype crankshafts for rebuilders and testing as well as bulk OEM production lots. Higher volumes and repeat orders receive better per-piece pricing.',
  },
  {
    q: 'What is the turnaround time for crankshaft hardening?',
    a: 'Standard turnaround is 3–5 working days after we receive the crankshafts and an approved specification. Urgent same-week jobs can be arranged for regular clients. On-site induction hardening for very large crankshafts is scheduled separately.',
  },
  {
    q: 'Do you harden the entire crankshaft or just the journals?',
    a: 'We use localized selective induction hardening that targets specifically the journals, crankpins and fillets, with copper masking to protect sensitive areas. This preserves the core strength and ductility of the main shaft, preventing brittle failure under engine loads.',
  },
  {
    q: 'How do you control distortion and straightness during crankshaft hardening?',
    a: 'Because only the journals and crankpins are heated, bulk distortion is minimal. We pre-fixture each crankshaft, harden in a balanced sequence, temper to relieve residual stress, and straighten to within ±0.05 mm runout using hydraulic jigs — then re-verify before dispatch.',
  },
  {
    q: 'What hardness is achievable on crankshaft journals?',
    a: 'EN24 (4340) crankshafts typically achieve 50–58 HRC on journal and crankpin surfaces with a case depth of 2–4 mm, while maintaining a tough ductile core for high-cycle fatigue resistance.',
  },
  {
    q: 'How do you prevent cracks at oil holes during crankshaft hardening?',
    a: 'We use custom copper coils and digital power modulation so the electromagnetic field does not concentrate excessively at oil-hole edges, preventing localised overheating and thermal-stress cracks.',
  },
  {
    q: 'Do you provide test reports for crankshaft hardening job work?',
    a: 'Yes. Every crankshaft job includes a Rockwell hardness test report with HRC values at each journal, case-depth measurements, straightness/runout readings and process-parameter documentation for your quality records.',
  },
];

export default function CrankshaftHardeningSEOPage() {
  const mainImage = PlaceHolderImages.find((img) => img.id === 'blogCrankshafts');
  const qcImage = PlaceHolderImages.find((img) => img.id === 'processFinishing');

  // Service schema — enriched with serviceType, offers, aggregateRating & wider areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Crankshaft Hardening Service in Punjab',
    serviceType: 'Selective Induction Hardening for Crankshafts',
    url: `${PAGE_URL}/`,
    description:
      'Professional selective induction hardening for engine crankshafts — journals and crankpins to 50–58 HRC with copper masking, distortion and straightness control on EN24, 4340 and EN9. Job work in Ludhiana, Punjab.',
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
    areaServed: ['Ludhiana', 'Jalandhar', 'Khanna', 'Mandi Gobindgarh', 'Patiala', 'Amritsar', 'Chandigarh', 'North India'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Crankshaft hardening job work priced per piece. Request a custom quotation.',
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
          { name: 'Crankshaft Hardening Service in Punjab', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
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
              <li className="text-primary">Crankshaft Hardening Punjab</li>
            </ol>
          </nav>

          <PageHeader
            title="Crankshaft Hardening Service in"
            highlightedWord="Punjab"
            description="Maximize engine performance with precision-controlled journal and crankpin hardening. We deliver high-cycle fatigue resistance and 50–58 HRC surfaces for automotive and industrial crankshafts across Punjab."
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
                { icon: Award, label: '50–58 HRC' },
                { icon: ShieldCheck, label: 'Copper Masking' },
                { icon: Clock, label: '3–5 Day Turnaround' },
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

          {/* Intro — primary keyword in the first 100 words */}
          <motion.section
            className="py-12 md:py-16 border-b border-border text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              Looking for a dependable <strong>crankshaft hardening service in Punjab</strong>? Crankshafts are the most critical
              rotating components in any engine. At <strong>{SITE_NAME}</strong>, our precision <strong>induction crankshaft
              hardening</strong> job work raises bearing journals and crankpins to 50–58 HRC for wear resistance, while keeping the
              fillets and core tough enough to prevent engine-destroying fatigue cracks. We serve automotive, tractor, genset and
              industrial OEMs across Ludhiana and Punjab with selective hardening on EN24, 4340 and EN9 crankshafts.
            </p>
          </motion.section>

          {/* Journals & Fillets — preserved core content */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
              >
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Journals & <span className="text-primary">Crankpins</span>
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Effective crankshaft hardening requires more than just high HRC levels. We focus on the{' '}
                    <strong>transition zone</strong> between the hardened surface and the ductile core.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Journal Hardening: 50–58 HRC for superior bearing life.',
                      'Crankpin & Fillet Hardening: precision heating to enhance fatigue resistance.',
                      'Oil Hole Protection: preventing cracks at lubrication points.',
                      'Core Integrity: preserving ductility for high-RPM stability.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
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
                {mainImage && (
                  <Image
                    src={mainImage.imageUrl}
                    alt="Engine crankshaft journals and crankpins prepared for selective induction hardening at Thakur Industries Ludhiana Punjab"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Materials We Harden — internal links to material-grade pages */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// MATERIALS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Crankshaft <span className="text-primary">Steel Grades</span> We Harden
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We induction-harden all common forged crankshaft steels. Explore our dedicated material-grade pages for hardness,
              case depth and application detail:
            </p>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { grade: 'EN24', note: '4340 Ni-Cr-Mo alloy', href: '/induction-heat-treatment/en24-steel-hardening' },
                { grade: '4140', note: '42CrMo4 / SCM440', href: '/induction-heat-treatment/4140-steel-hardening' },
                { grade: 'EN19', note: '4140 Cr-Mo alloy', href: '/induction-heat-treatment/en19-steel-induction-hardening' },
                { grade: 'EN8', note: '080M40 carbon steel', href: '/induction-heat-treatment/en8-steel-induction-hardening' },
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
              Crankshaft Hardening <span className="text-primary">Specifications</span>
            </motion.h2>
            <motion.div
              className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <table className="w-full text-left">
                <tbody className="text-sm md:text-base">
                  {[
                    ['Surface Hardness', '50–58 HRC (journals & crankpins)'],
                    ['Case Depth', '2.0 mm – 4.0 mm (controlled to spec)'],
                    ['Max Crankshaft Length (in-house)', 'Up to 2.5 m'],
                    ['Hardened Zones', 'Main journals, crankpins, fillets — selective'],
                    ['Steel Grades', 'EN24, 4340, EN19, EN9, EN8, forged carbon steels'],
                    ['Masking', 'Copper masking to protect oil holes & bearing edges'],
                    ['Straightness / Runout', 'Within ±0.05 mm after straightening'],
                    ['Turnaround', '3–5 working days (standard)'],
                    ['Testing', 'HRC at each journal, case-depth & straightness check'],
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

          {/* Workflow Section — preserved */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our <span className="text-primary">Workflow</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Flame, title: 'Stress Relieving', desc: 'Thermal stabilization before the main hardening cycle to ensure zero micro-cracks.' },
                { icon: Cpu, title: 'Induction Cycle', desc: 'Programmable digital heating of main and big-end journals using module-specific copper coils.' },
                { icon: Droplet, title: 'Quench Control', desc: 'Advanced polymer quenching to achieve uniform hardness without quenching cracks.' },
                { icon: History, title: 'Precision Tempering', desc: 'Relieving residual stresses to enhance toughness and prevent service failure.' },
                { icon: Activity, title: 'Straightening', desc: 'Post-heat correction to within ±0.05mm runout using specialized hydraulic jigs.' },
                { icon: Gauge, title: 'Final Balancing', desc: 'Verification of dynamic balance and journal concentricity for high-performance use.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="bg-card/50 p-8 rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <item.icon className="h-8 w-8 text-primary mb-6 transition-transform group-hover:rotate-12" />
                  <h3 className="font-bold text-xl mb-3 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Distortion & Straightness Control — preserved Technical Specs split */}
          <section className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
              >
                {qcImage && (
                  <Image
                    src={qcImage.imageUrl}
                    alt="Hardness and straightness inspection of hardened crankshaft journals after induction hardening in Punjab"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
              >
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Distortion & <span className="text-primary">Straightness</span> Control
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground font-medium">
                  <p>
                    We deliver OEM-grade standards for automotive, agricultural and power-generation engines, with tight
                    geometric control on every crankshaft:
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Hardness: 50–58 HRC (material dependent)',
                      'Case Depth: 2.0mm to 4.0mm deep penetration',
                      'Runout: within ±0.05mm after straightening',
                      'Surface Finish: compatible with final micro-grinding',
                      'Materials: EN19, EN24, 4340, EN9, forged carbon steels',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Pricing & Turnaround — captures mid-funnel commercial keywords */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// PRICING & TURNAROUND //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Crankshaft Hardening <span className="text-primary">Rates & Lead Time</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive <strong>crankshaft hardening rates</strong> for both single rebuild jobs and bulk OEM
              production. Final pricing depends on shaft size, number of journals and crankpins, case depth, steel grade and
              quantity — share your drawing for an exact quote within 24 hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Priced per piece, with reduced rates on bulk and repeat OEM orders.' },
                { icon: FileText, title: 'Minimum Order', desc: 'No rigid minimum — single rebuild crankshafts to multi-piece OEM lots accepted.' },
                { icon: Clock, title: 'Turnaround', desc: 'Standard 3–5 working days; urgent same-week jobs for regular clients.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your Crankshaft Hardening Quote
                </a>
              </Button>
            </div>
          </section>

          {/* Industry Focus — preserved */}
          <section className="py-24 border-t border-border">
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-16 text-center leading-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Industry <span className="text-primary">Focus</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Automotive Engines', icon: Settings, desc: 'Passenger and commercial vehicle crankshafts.' },
                { title: 'Diesel Gensets', icon: History, desc: 'Heavy-duty power generation components.' },
                { title: 'Industrial Pumps', icon: Cpu, desc: 'High-pressure pump shafts and crankshafts.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="p-10 bg-secondary/30 rounded-3xl border border-border text-center flex flex-col items-center group hover:border-primary/20 transition-all">
                  <item.icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
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
                { icon: Award, title: 'Consistent 50–58 HRC', desc: 'Repeatable journal hardness on every crankshaft, batch after batch.' },
                { icon: ShieldCheck, title: 'Selective & Masked', desc: 'Copper masking protects oil holes and bearing edges from over-hardening.' },
                { icon: History, title: 'Years of Experience', desc: 'Serving Punjab’s automotive, tractor and genset crankshaft makers.' },
                { icon: Clock, title: 'Fast Turnaround', desc: '3–5 day standard delivery with full hardness & straightness reports.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Related Services — preserved + enriched anchors */}
          <section className="py-24 border-t border-border">
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Related <span className="text-primary">Services</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Shaft Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Drive & Transmission Shafts' },
                { title: 'Gear Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes, label: 'Transmission Gears' },
                { title: 'Induction Heat Treatment Guide', href: '/induction-heat-treatment', icon: Cpu, label: 'Main Process Hub' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <motion.div
                    variants={scaleUp}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-card border border-border rounded-2xl transition-all hover:border-primary/50 flex flex-col items-center text-center shadow-sm h-full"
                  >
                    <link.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm">{link.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2">{link.label}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>

          {/* 3-Step Process Section — preserved */}
          <section className="py-16 border-t border-border">
            <p className="section-label text-center">// PROCESS //</p>
            <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-center mb-12">
              Our Crankshaft Hardening <span className="text-primary">Process</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-0.5 bg-primary/20" />
              {[
                { title: 'Crankshaft Inspection', description: 'We verify journal dimensions, oil passage locations, material grade (EN24/4340), and define the hardening zones to avoid bearing surfaces.' },
                { title: 'Selective Induction Hardening', description: 'Custom scanning coils harden the crankpin and journal surfaces to 50–58 HRC while masking sensitive areas with copper shields.' },
                { title: 'Distortion Check & Certification', description: 'Dimensional inspection for straightness, hardness verification on all journals, and certificated dispatch within 3–5 days.' },
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
                { icon: Search, title: 'Journal Hardness', desc: 'HRC verified on every main and big-end journal.' },
                { icon: Gauge, title: 'Straightness Check', desc: 'Runout measured within ±0.05mm after straightening.' },
                { icon: Cpu, title: 'Case-Depth Audit', desc: 'Cross-section verification of 2–4mm penetration.' },
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

          {/* FAQ — synced with FAQPage schema */}
          <motion.section
            className="py-24 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none">
              Crankshaft Hardening <span className="text-primary">FAQs</span>
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

        {/* Mobile sticky CTA — hidden on md+ (3-button bar) */}
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
