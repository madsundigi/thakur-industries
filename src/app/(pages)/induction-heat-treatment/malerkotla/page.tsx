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
  Settings,
  Boxes,
  Truck,
  Phone,
  MessageSquare,
  Clock,
  Award,
  ShieldCheck,
  Star,
  MapPin,
  Factory,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/malerkotla`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent(
    'Hello, I am from Malerkotla and need induction hardening job work. Please find my drawing attached.'
  );

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
    q: 'Do you offer induction hardening in Malerkotla?',
    a: 'Yes. We serve Malerkotla’s agricultural-tool, hand-tool and hosiery/textile-machinery units from our Ludhiana workshop, roughly 55 km away. Components are collected, hardened to specification and returned with hardness test reports. For very large fixtures we also schedule on-site induction hardening visits.',
  },
  {
    q: 'How far is your facility from Malerkotla?',
    a: 'Our induction hardening facility is in Shimlapuri, Ludhiana — about 55 km from Malerkotla via Ludhiana–Malerkotla road. The short distance means same-day or next-day pickup for most jobs and quick turnaround for the Malerkotla–Sangrur–Dhuri belt.',
  },
  {
    q: 'Which components from Malerkotla units do you harden?',
    a: 'We regularly harden agricultural-tool edges, hand-tool heads, shears and chisels, press dies and punches, plus shafts, cams, gears and spindles used in hosiery and textile machinery. If a part needs a wear-resistant surface with a tough core, induction hardening is usually the right route.',
  },
  {
    q: 'What hardness can you achieve on hand tools and agricultural tools?',
    a: 'Typical surface hardness is 55–62 HRC depending on the steel grade and the duty. Hand-tool cutting edges and agricultural blades are hardened for edge retention, while machine parts are profiled for wear resistance with a controlled case depth of 0.8–3.0 mm.',
  },
  {
    q: 'What is the turnaround time for Malerkotla orders?',
    a: 'Standard turnaround is 2–4 working days after we receive the components and an approved specification. Because Malerkotla is close to Ludhiana, urgent and same-week jobs can be arranged for regular clients without heavy freight cost.',
  },
  {
    q: 'Do you handle small batches as well as bulk orders?',
    a: 'Yes. There is no rigid minimum order quantity. We accept single trial pieces from small Malerkotla workshops as well as bulk production lots from larger tool and machinery manufacturers, with better per-piece pricing on volume orders.',
  },
  {
    q: 'How is pricing calculated and how do I get a quote?',
    a: 'Pricing depends on part weight, size, case depth, steel grade and quantity — usually quoted per kilogram or per piece. Share your drawing or sample details on WhatsApp or through our contact form and we will send an exact quotation, typically within 24 hours.',
  },
  {
    q: 'Do you provide test reports and certification?',
    a: 'Yes. Every job can be supplied with HRC hardness verification and, where required, case-depth checks and dimensional inspection. Documented, traceable reports help Malerkotla OEMs and exporters meet their own quality requirements.',
  },
];

export default function MalerkotlaPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'industryAgriculture');
  const toolImage = PlaceHolderImages.find((img) => img.id === 'industryMachineTool');

  // Service / LocalBusiness schema — Ludhiana address, INR offer, aggregateRating, wider areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Malerkotla',
    serviceType: 'Induction Hardening & Heat Treatment',
    url: `${PAGE_URL}/`,
    description:
      'Induction hardening job work for Malerkotla — agricultural tools, hand tools, dies and textile/hosiery machinery parts hardened to 55–62 HRC with controlled case depth, from our Ludhiana facility ~55 km away.',
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
    areaServed: ['Malerkotla', 'Sangrur', 'Dhuri', 'Ludhiana'],
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
          { name: 'Malerkotla', href: '/induction-heat-treatment/malerkotla' },
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
              <li className="text-primary">Malerkotla</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Malerkotla"
            description="Precision induction hardening for Malerkotla’s agricultural-tool, hand-tool and hosiery/textile-machinery units — 55–62 HRC with controlled case depth, served from our Ludhiana facility just ~55 km away."
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
                { icon: Truck, label: '~55 km from Ludhiana' },
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
              Looking for dependable <strong>induction hardening in Malerkotla</strong>? At <strong>{SITE_NAME}</strong>, we give
              Malerkotla’s agricultural-tool makers, hand-tool units and hosiery &amp; textile-machinery workshops wear-resistant,
              long-life surfaces — hardening tool edges, dies, shafts, cams and spindles to 55–62 HRC while keeping the core tough.
              Our Ludhiana facility sits roughly <strong>55 km</strong> from Malerkotla, so pickup, hardening and return stay fast
              and freight stays low for the Malerkotla–Sangrur–Dhuri belt.
            </p>
          </motion.section>

          {/* Local industry context — UNIQUE Malerkotla content */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// MALERKOTLA INDUSTRY //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Built for Malerkotla’s <span className="text-primary">Tool &amp; Machinery</span> Units
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                  <p>
                    Malerkotla is a busy manufacturing town in Punjab’s Sangrur district, long known for its hand-tool and
                    agricultural-implement makers alongside a growing base of hosiery and textile-machinery workshops. These units
                    turn out spades, khurpas, shears, chisels, pliers and blades, as well as the shafts, cams, rollers and spindles
                    that keep knitting and textile machines running. Every one of these parts lives or dies by its surface — and
                    that is exactly where <strong>induction hardening in Malerkotla</strong> earns its keep.
                  </p>
                  <p>
                    For agricultural and hand tools, a hard cutting edge that resists abrasion in soil and repeated impact is the
                    difference between a tool that lasts a season and one that lasts years. For hosiery and textile machinery, a
                    hardened, dimensionally-stable wear face on a shaft, cam or spindle keeps machines accurate and reduces costly
                    downtime. Induction hardening targets just the working surface, so the part keeps a tough, shock-absorbing core
                    while the contact face climbs to 55–62 HRC.
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
                    alt="Agricultural tools and implements from Malerkotla prepared for induction hardening at Thakur Industries Ludhiana"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Components we harden for Malerkotla */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// COMPONENTS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              What We Harden for <span className="text-primary">Malerkotla Units</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              From a single trial tool to bulk OEM lots, we induction-harden the components Malerkotla’s workshops rely on most:
            </p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { title: 'Agricultural Tool Edges', desc: 'Spades, khurpas, sickles and blades hardened for soil abrasion and impact.' },
                { title: 'Hand Tool Heads', desc: 'Chisels, shears, pliers and striking faces hardened for edge retention.' },
                { title: 'Press Dies & Punches', desc: 'Tooling surfaces hardened for wear life in stamping and forming.' },
                { title: 'Machine Shafts & Cams', desc: 'Textile and hosiery machine shafts and cams profiled for wear.' },
                { title: 'Spindles & Rollers', desc: 'Rotating parts hardened for dimensional stability and long service.' },
                { title: 'Gears & Sprockets', desc: 'Drive gears and sprockets tooth-hardened to OEM specification.' },
              ].map((item) => (
                <motion.div key={item.title} variants={scaleUp} className="flex flex-col p-6 bg-secondary/30 rounded-2xl border border-border h-full">
                  <CheckCircle2 className="h-7 w-7 text-primary mb-4" />
                  <h3 className="font-black uppercase italic tracking-tight text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Logistics from Ludhiana */}
          <section className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
              >
                {toolImage && (
                  <Image
                    src={toolImage.imageUrl}
                    alt="Machine tool and textile machinery parts induction hardened for Malerkotla manufacturers"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// LOGISTICS //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Just <span className="text-primary">~55 km</span> from Ludhiana
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                  <p>
                    Our induction hardening workshop is in Shimlapuri, Ludhiana — about 55 km from Malerkotla along the
                    Ludhiana–Malerkotla road. That short, well-connected route makes pickup and return simple, keeps freight cost
                    low, and lets us turn most jobs around in 2–4 working days. Because we also cover Sangrur and Dhuri on the same
                    corridor, consolidated pickups for nearby units are easy to arrange.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Quick pickup & return for the Malerkotla–Sangrur–Dhuri belt',
                      'Low freight thanks to the short ~55 km haul to Ludhiana',
                      'On-site induction hardening visits for large fixtures',
                      'Consolidated collection for clusters of nearby workshops',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Specifications table */}
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
                    ['Surface Hardness', '55–62 HRC (working surface)'],
                    ['Case Depth', '0.8 mm – 3.0 mm (controlled to spec)'],
                    ['Typical Parts', 'Tool edges, dies, shafts, cams, spindles, gears'],
                    ['Steel Grades', 'EN8, EN19, EN24, 4140, carbon & tool steels'],
                    ['Distance to Facility', '~55 km from Malerkotla to Ludhiana'],
                    ['Turnaround', '2–4 working days (standard)'],
                    ['Testing', 'HRC verification, case-depth check, dimensional inspection'],
                    ['On-site Service', 'Available for large fixtures across Punjab'],
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

          {/* Why local units choose us */}
          <section className="py-20 border-t border-border">
            <p className="section-label text-center">// WHY CHOOSE US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Malerkotla Units Choose <span className="text-primary">{SITE_NAME}</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Factory, title: 'Tool-Industry Fit', desc: 'Profiles tuned for agricultural tools, hand tools and machinery parts.' },
                { icon: Truck, title: 'Close & Connected', desc: '~55 km from Ludhiana for fast pickup and low freight cost.' },
                { icon: Award, title: 'Consistent Hardness', desc: 'Repeatable 55–62 HRC, batch after batch, to your spec.' },
                { icon: ShieldCheck, title: 'Traceable Reports', desc: 'HRC and case-depth documentation for OEMs and exporters.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Regional CTA card + area served */}
          <section className="py-16 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Industrial <span className="text-primary">Capabilities</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground font-medium">
                    Serving the Malerkotla, Sangrur and Dhuri industrial clusters, we provide high-frequency surface hardening that
                    meets OEM specifications.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                      { title: 'Gear Tooth Induction', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                      { title: 'Case Hardening', href: '/case-hardening' },
                      { title: 'On-site Hardening', href: '/induction-heat-treatment/on-site' },
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
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
              >
                <div className="absolute top-0 right-0 p-4">
                  <Zap className="h-12 w-12 text-primary opacity-20 animate-pulse" />
                </div>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Regional Hub</h3>
                <p className="text-muted-foreground mb-8 font-medium">
                  Our Ludhiana facility is positioned to handle high-volume job work for Malerkotla’s agricultural and engineering
                  sectors with minimal transit time.
                </p>
                <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                  <MapPin className="h-5 w-5" /> Area: Malerkotla, Sangrur, Dhuri
                </div>
                <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                  <Link href="/contact">Request Malerkotla Quote</Link>
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Nearby towns we serve */}
          <section className="py-16 border-t border-border">
            <p className="section-label text-center">// NEARBY TOWNS //</p>
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              We Also Serve <span className="text-primary">Nearby Towns</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { title: 'Sangrur', href: '/induction-heat-treatment/sangrur' },
                { title: 'Dhuri', href: '/induction-heat-treatment/dhuri' },
                { title: 'Samrala', href: '/induction-heat-treatment/samrala' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <motion.div
                    variants={scaleUp}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-secondary/30 border border-border rounded-2xl transition-all hover:border-primary/50 flex flex-col items-center text-center shadow-sm h-full"
                  >
                    <MapPin className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm">{link.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                      View Town <ArrowRight className="h-3 w-3" />
                    </p>
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
                { title: 'Gear Hardening Ludhiana', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes, label: 'Transmission Gears' },
                { title: 'Shaft Hardening Ludhiana', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Drive Shafts' },
                { title: 'Induction Heat Treatment Guide', href: '/induction-heat-treatment', icon: Cpu, label: 'Main Service Hub' },
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

          {/* FAQ — synced with FAQPage schema */}
          <motion.section
            className="py-24 max-w-4xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none">
              Malerkotla Hardening <span className="text-primary">FAQs</span>
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
