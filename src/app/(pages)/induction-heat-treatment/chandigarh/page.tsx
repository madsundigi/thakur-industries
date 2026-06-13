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
  Search,
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
  Truck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/chandigarh`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I need induction hardening for components in Chandigarh / Mohali. Please find my drawing attached.');

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
    q: 'Do you provide induction hardening for Chandigarh and Mohali manufacturers?',
    a: 'Yes. We serve the entire Chandigarh tricity — Chandigarh, Mohali (SAS Nagar), and the Dera Bassi–Zirakpur belt. Our Ludhiana facility is roughly 100 km away, so a scheduled pickup brings your components in and returns them hardened with certified reports, typically within 2–4 working days.',
  },
  {
    q: 'How far is your facility from the Chandigarh tricity?',
    a: 'Our hardening plant is in Ludhiana, about 100 km from Chandigarh via NH-5 (Ludhiana–Chandigarh highway). Most tricity consignments reach us in under two hours by road, and we run a regular freight schedule covering Mohali Phase 7–8B, the Dera Bassi industrial area and Zirakpur.',
  },
  {
    q: 'Which Chandigarh-area industries and components do you harden?',
    a: 'We harden parts for the tricity light-engineering and auto-component clusters — transmission shafts, splines, pins, spur and helical gears, sprockets, cam followers, hydraulic rods, bushes, fasteners and CNC-machined precision parts. We also process stainless and alloy components used by pharma and instrumentation units around Mohali.',
  },
  {
    q: 'Is there a minimum order quantity for Chandigarh job-work orders?',
    a: 'No rigid minimum. We take single prototype pieces for R&D and startup trials as readily as multi-thousand-piece OEM lots. Bulk and repeat orders from tricity manufacturers receive better per-piece rates.',
  },
  {
    q: 'What surface hardness can you achieve?',
    a: 'Typical induction-hardened surfaces reach 45–62 HRC depending on the steel grade and component. EN8, EN19 (4140) and EN24 (4340) parts achieve the upper end. Case depth is controlled to your drawing — usually 0.8–3.5 mm — with full Rockwell and case-depth verification.',
  },
  {
    q: 'What is the turnaround time for urgent orders from Chandigarh?',
    a: 'Standard turnaround is 2–4 working days from receipt of components and an approved specification. For regular tricity clients we arrange same-week and urgent runs, coordinating the pickup and return-freight schedule to keep your line moving.',
  },
  {
    q: 'Do you provide certified hardness and case-depth reports?',
    a: 'Yes. Every batch ships with Rockwell hardness verification, case-depth checks and dimensional inspection. Traceable documentation is provided for OEM supply chains and audit/GMP requirements common to Mohali pharma and instrumentation suppliers.',
  },
  {
    q: 'Can you handle on-site hardening for large parts near Chandigarh?',
    a: 'For oversized rolls, large ring gears and long shafts that are impractical to transport, we schedule on-site induction hardening across the tricity and wider Punjab–Haryana region. Share the component dimensions and we will advise the best route.',
  },
];

export default function ChandigarhInductionHardeningPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'appShaftHardening');
  const qcImage = PlaceHolderImages.find((img) => img.id === 'processHardening');

  // Service schema — enriched with serviceType, offers, aggregateRating & tricity areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Chandigarh',
    serviceType: 'Induction Hardening & Heat Treatment',
    url: `${PAGE_URL}/`,
    description:
      'Precision induction hardening job work for the Chandigarh tricity — Mohali and Dera Bassi auto-parts and light-engineering units. 45–62 HRC, controlled case depth, certified reports. Pickup ~100 km from Ludhiana, Punjab.',
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
    areaServed: ['Chandigarh', 'Mohali', 'Dera Bassi', 'Ambala'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Induction hardening job work priced per kg or per piece. Request a custom quotation.',
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
          { name: 'Induction Hardening in Chandigarh', href: '/induction-heat-treatment/chandigarh' },
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
              <li className="text-primary">Chandigarh</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Chandigarh"
            description="Precision induction hardening job work for the Chandigarh tricity — serving the Mohali, Dera Bassi and Zirakpur auto-parts and light-engineering belt with 45–62 HRC, controlled case depth and certified hardness reports, just ~100 km from our Ludhiana facility."
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
                { icon: Award, label: '45–62 HRC' },
                { icon: Truck, label: '~100 km Pickup' },
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
              Looking for dependable <strong>induction hardening in Chandigarh</strong>? At <strong>{SITE_NAME}</strong>, we provide
              precision <strong>induction hardening and heat treatment</strong> for the Chandigarh tricity — the Mohali, Dera Bassi and
              Zirakpur belt of auto-component and light-engineering units. Our Ludhiana plant sits roughly 100 km away, so a single
              scheduled pickup brings your shafts, gears, pins and machined parts in and returns them at 45–62 HRC with certified
              hardness and case-depth reports.
            </p>
          </motion.section>

          {/* UNIQUE LOCAL CONTENT — Chandigarh tricity */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// CHANDIGARH TRICITY //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Hardening for the <span className="text-primary">Tricity Belt</span>
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    The Chandigarh tricity is not a heavy-forging town like Ludhiana — it is a cluster of cleaner, design-led light
                    engineering. The Mohali industrial estates (Phase 7, 8 and 8B and the Industrial Area), the fast-growing{' '}
                    <strong>Dera Bassi</strong> belt along the Ambala highway, and the Zirakpur–Lalru fringe are full of CNC machine
                    shops, auto-ancillary units, fabrication houses and precision-instrument makers. These workshops machine parts to
                    tight tolerances but rely on a specialist for the one step they can&rsquo;t do in-house — surface hardening.
                  </p>
                  <p>
                    That is exactly the gap we fill. Tricity OEMs and tier-2 suppliers send us their machined components and we return
                    them with a hard, wear-resistant skin and a tough, ductile core — the combination that lets a transmission shaft,
                    a sprocket tooth or a hydraulic rod survive years of cyclic load without the brittleness of a through-hardened
                    part.
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
                    alt="Induction hardening of auto-component shafts for Chandigarh Mohali tricity manufacturers"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>

            <div className="mt-12 space-y-5 text-base md:text-lg text-muted-foreground font-medium max-w-4xl">
              <p>
                <strong>Components we harden for tricity units.</strong> Day to day, the Chandigarh, Mohali and Dera Bassi work that
                comes through our shop is dominated by light auto-component and general-engineering parts: transmission and output{' '}
                <Link href="/induction-heat-treatment/induction-hardening-shafts-ludhiana" className="text-primary hover:underline font-semibold">shafts</Link>,
                splines and gear pins, spur and helical{' '}
                <Link href="/induction-heat-treatment/induction-hardening-gears-ludhiana" className="text-primary hover:underline font-semibold">gears</Link>{' '}
                and sprockets, cam followers and rocker arms, hydraulic and pneumatic piston rods, guide rails and slides for special-purpose
                machines, bushes, pins and dowels, fasteners and threaded shafts, and CNC-turned precision parts for the instrumentation and
                pharma-equipment makers clustered around Mohali. Where a part needs a uniform diffused case rather than a localised band, we
                route it through{' '}
                <Link href="/case-hardening" className="text-primary hover:underline font-semibold">case hardening</Link>{' '}
                instead — the right process for the geometry.
              </p>
              <p>
                <strong>Logistics from ~100 km away.</strong> Distance is the question every tricity buyer asks first, and the honest answer
                is that 100 km on the four-lane Ludhiana–Chandigarh highway (NH-5) is a non-issue. A consignment leaving Mohali or Dera Bassi in
                the morning is on our floor inside two hours. We run a regular freight schedule on this corridor, so most tricity batches are
                picked up, hardened, inspected and returned within 2–4 working days — and for established clients we collapse that further for
                urgent line stoppages. Compared with shipping parts to a distant heat-treater, the short, predictable Ludhiana run keeps your
                inventory and your delivery commitments tight.
              </p>
              <p>
                <strong>Why tricity units choose us.</strong> Chandigarh-area buyers tend to be engineering-literate — they care about the
                metallurgy, not just the price. We give them a controlled, repeatable process: induction heating tuned to the exact band that
                needs hardening, controlled quenching, and 45–62 HRC delivered batch after batch with the case depth held to drawing. Every lot
                ships with Rockwell verification, case-depth checks and dimensional inspection, and traceable documentation that satisfies the
                ISO/OEM and GMP-style audit needs common to Mohali&rsquo;s pharma-equipment and instrumentation suppliers. There is no rigid
                minimum order, so a startup in the Mohali IT-and-electronics corridor can send a single prototype with the same confidence as a
                Dera Bassi auto-ancillary sending a 5,000-piece lot. That combination — short logistics, certified quality, genuine
                flexibility and decades of induction-hardening practice — is why tricity manufacturers treat our Ludhiana plant as their
                hardening line rather than a one-off vendor.
              </p>
              <p>
                We also serve the wider belt that feeds the tricity: components routinely arrive from{' '}
                <Link href="/induction-heat-treatment/ambala" className="text-primary hover:underline font-semibold">Ambala</Link>{' '}
                and Panchkula on the Haryana side, and from{' '}
                <Link href="/induction-heat-treatment/patiala" className="text-primary hover:underline font-semibold">Patiala</Link>{' '}
                on the Punjab side, all consolidated onto the same Chandigarh-corridor freight runs. If your unit is inside our home cluster, our{' '}
                <Link href="/induction-heat-treatment/focal-point-ludhiana" className="text-primary hover:underline font-semibold">Focal Point, Ludhiana</Link>{' '}
                page covers walk-in and same-day options.
              </p>
            </div>
          </section>

          {/* Components We Harden */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// COMPONENTS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Parts We Harden for the <span className="text-primary">Tricity</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { title: 'Shafts & Splines', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                { title: 'Gears & Sprockets', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                { title: 'Pins, Bushes & Dowels', href: '/induction-heat-treatment/chandigarh' },
                { title: 'Hydraulic Rods', href: '/induction-heat-treatment/chandigarh' },
                { title: 'Cam Followers', href: '/induction-heat-treatment/chandigarh' },
                { title: 'Guide Rails & Slides', href: '/induction-heat-treatment/chandigarh' },
                { title: 'Fasteners & Threaded Shafts', href: '/induction-heat-treatment/chandigarh' },
                { title: 'Case-Hardened Parts', href: '/case-hardening' },
              ].map((item) => (
                <motion.div key={item.title} variants={scaleUp}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 p-4 bg-secondary/30 border border-border rounded-xl hover:border-primary/50 hover:-translate-y-1 transition-all h-full"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-bold text-foreground uppercase tracking-tight text-xs group-hover:text-primary transition-colors">{item.title}</span>
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
              Induction Hardening <span className="text-primary">Specifications</span>
            </motion.h2>
            <motion.div
              className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <table className="w-full text-left">
                <tbody className="text-sm md:text-base">
                  {[
                    ['Surface Hardness', '45–62 HRC (grade dependent)'],
                    ['Case Depth', '0.8 mm – 3.5 mm (controlled to spec)'],
                    ['Component Types', 'Shafts, gears, sprockets, pins, rods, bushes, fasteners'],
                    ['Steel Grades', 'EN8, EN19, EN24, 4140, 20MnCr5, EN36C'],
                    ['Heating Temperature', '900–950 °C (induction)'],
                    ['Quench Medium', 'Polymer / water-based, controlled'],
                    ['Service Area', 'Chandigarh, Mohali, Dera Bassi, Zirakpur, Ambala'],
                    ['Pickup Distance', '~100 km from Ludhiana (NH-5)'],
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

          {/* Logistics / Distortion control */}
          <section className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
              >
                {qcImage && (
                  <Image
                    src={qcImage.imageUrl}
                    alt="Hardness testing of induction hardened parts before return freight to Chandigarh tricity"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Why <span className="text-primary">Induction</span> Hardening
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground font-medium">
                  <p>Induction hardening heats only the surface that needs to be hard, leaving the core tough. For tricity engineering parts that means:</p>
                  <ul className="space-y-4">
                    {[
                      'Hard, wear-resistant skin at 45–62 HRC',
                      'Tough ductile core that resists shock and fatigue',
                      'Minimal distortion versus full furnace hardening',
                      'Selective bands — harden the journal, not the whole shaft',
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

          {/* Pricing & Turnaround */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// PRICING & TURNAROUND //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Rates &amp; <span className="text-primary">Lead Time</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive <strong>induction hardening rates</strong> for Chandigarh, Mohali and Dera Bassi units, on both
              prototype batches and bulk production. Final pricing depends on component weight, size, case depth, steel grade and
              quantity — share your drawing for an exact quote within 24 hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk and repeat tricity orders.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your Chandigarh Quote
                </a>
              </Button>
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
                { icon: Search, title: 'Hardness Verification', desc: 'Rockwell (HRC) testing on every batch before dispatch.' },
                { icon: Gauge, title: 'Case-Depth Control', desc: 'Effective case depth held to your drawing specification.' },
                { icon: Cpu, title: 'Dimensional Check', desc: 'Inspection of critical dimensions after hardening.' },
                { icon: FileText, title: 'Traceability', desc: 'Digital logging and certified reports for OEM and audit needs.' },
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
              How Tricity Orders <span className="text-primary">Flow</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-0.5 bg-primary/20" />
              {[
                { title: 'Share Drawing & Pickup', description: 'Send your component drawing on WhatsApp. We schedule a freight pickup from Mohali, Dera Bassi or Zirakpur on the Ludhiana corridor.' },
                { title: 'Precision Induction Hardening', description: 'Components are induction-heated to 900–950 °C on the band that needs hardening, then controlled-quenched to 45–62 HRC.' },
                { title: 'Testing & Return', description: 'HRC and case-depth verification, dimensional inspection and certified reports — then return freight to the tricity, typically in 2–4 days.' },
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

          {/* Why Choose Us — trust / E-E-A-T */}
          <section className="py-20 border-t border-border">
            <p className="section-label text-center">// WHY CHOOSE US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Tricity Units Trust <span className="text-primary">{SITE_NAME}</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: MapPin, title: '~100 km Logistics', desc: 'Short, predictable NH-5 run from Ludhiana to the tricity.' },
                { icon: ShieldCheck, title: 'Certified Reports', desc: 'HRC and case-depth documentation for OEM and GMP audits.' },
                { icon: Award, title: 'Consistent 45–62 HRC', desc: 'Repeatable hardness on every batch, to drawing.' },
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

          {/* Related & Nearby */}
          <section className="py-24 border-t border-border">
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Related &amp; <span className="text-primary">Nearby</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Transmission Shafts' },
                { title: 'Gear Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Cpu, label: 'Spur, Helical & Bevel' },
                { title: 'Case Hardening', href: '/case-hardening', icon: ShieldCheck, label: 'Diffused Case Process' },
                { title: 'Induction Heat Treatment Guide', href: '/induction-heat-treatment', icon: History, label: 'Main Service Hub' },
                { title: 'Hardening in Ambala', href: '/induction-heat-treatment/ambala', icon: MapPin, label: 'Haryana Belt' },
                { title: 'Hardening in Patiala', href: '/induction-heat-treatment/patiala', icon: MapPin, label: 'Punjab Belt' },
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
              Chandigarh Hardening <span className="text-primary">FAQs</span>
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
