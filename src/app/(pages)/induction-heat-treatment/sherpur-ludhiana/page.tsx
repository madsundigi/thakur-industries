'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  MapPin,
  Settings,
  Boxes,
  Cpu,
  ArrowRight,
  Phone,
  MessageSquare,
  Clock,
  Award,
  ShieldCheck,
  Star,
  Truck,
  History,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/sherpur-ludhiana`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent(
    'Hello, I am a unit in Sherpur, Ludhiana and need induction hardening job work. Please find my component drawing attached.'
  );

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
    q: 'Do you offer same-day hardening for Sherpur, Ludhiana units?',
    a: 'Yes. Because Sherpur sits inside Ludhiana city only minutes from our Shimlapuri facility, we offer same-day pickup and, for urgent small batches, same-day or next-morning return on induction hardening. Standard batch turnaround is 2–4 working days. Call us early in the day to slot an express job.',
  },
  {
    q: 'What auto-parts and cycle-parts do you harden for Sherpur manufacturers?',
    a: 'We routinely induction-harden gears, splines, axle and transmission shafts, kick and gear-change levers, sprockets, brake cams, pedal spindles, freewheel and hub components, and a wide range of fasteners and machined pins produced by Sherpur’s auto-parts, cycle-parts and fastener units.',
  },
  {
    q: 'How much does induction hardening cost for a Sherpur unit?',
    a: 'Pricing is on a per-kilogram or per-piece basis and depends on component weight, required case depth, steel grade and quantity. Cycle-part and fastener lots in bulk get attractive per-piece rates. Send your drawing and quantity on WhatsApp for an exact quotation within 24 hours.',
  },
  {
    q: 'Is there a minimum order quantity?',
    a: 'No rigid minimum. We accept single trial pieces for prototype validation as well as high-volume production lots of several thousand fasteners or cycle parts. Bulk and repeat orders receive better per-piece pricing.',
  },
  {
    q: 'What surface hardness can you achieve?',
    a: '58–62 HRC is typical for induction-hardened steel surfaces, with controlled case depth from 0.8 mm to 3.5 mm depending on the part and steel grade. EN8, EN19, EN24, 20MnCr5 and 4140 all respond well.',
  },
  {
    q: 'Do you provide test certificates with each batch?',
    a: 'Yes. Every batch is dispatched with Rockwell (HRC) hardness verification, and case-depth and dimensional checks are available on request — useful documentation for OEM supply into the auto-parts and cycle-parts chain.',
  },
  {
    q: 'Which areas around Sherpur do you serve?',
    a: 'We serve Sherpur and the wider Ludhiana industrial belt including Focal Point, Dehlon, Shimlapuri, Gill Road and Industrial Area A & B, with on-site induction hardening available for very large or fixed components across Punjab.',
  },
];

export default function SherpurLudhianaPage() {
  // Service / LocalBusiness schema — enriched with offers, aggregateRating & Sherpur-focused areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Sherpur, Ludhiana',
    serviceType: 'Induction Hardening & Heat Treatment',
    url: `${PAGE_URL}/`,
    description:
      'Precision induction hardening and heat treatment job work for the auto-parts, cycle-parts and fastener units of Sherpur, Ludhiana — 58–62 HRC, controlled case depth, same-day in-city pickup and certified HRC reports.',
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
    areaServed: ['Sherpur', 'Ludhiana', 'Focal Point', 'Dehlon'],
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
          { name: 'Sherpur Ludhiana', href: '/induction-heat-treatment/sherpur-ludhiana' },
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
              <li className="text-primary">Sherpur Ludhiana</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in Sherpur,"
            highlightedWord="Ludhiana"
            description="Serving Sherpur and surrounding Ludhiana industrial areas with precision induction hardening and heat treatment. Gear, shaft, bearing, and case hardening with certified test reports. Fast local service."
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
                { icon: ShieldCheck, label: 'HRC Test Reports' },
                { icon: Truck, label: 'Same-Day City Pickup' },
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
                <a href={`tel:${SITE_PHONE_NUMBER.replace(/\s/g, '')}`} className="flex items-center gap-2">
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
              alt="Induction hardening of auto and cycle parts for Sherpur Ludhiana manufacturers"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">Induction Hardening</span>
                <p className="text-white font-black uppercase italic text-xl md:text-2xl mt-2 tracking-tighter">Precision. Certified. Fast Turnaround.</p>
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
              Looking for dependable <strong>induction hardening in Sherpur, Ludhiana</strong>? At <strong>{SITE_NAME}</strong>, based
              in nearby Shimlapuri, we serve Sherpur’s dense cluster of auto-parts, cycle-parts and fastener units with precise
              tooth-by-tooth and zone-selective hardening to 58–62 HRC. Because Sherpur sits inside Ludhiana city — only minutes from
              our facility — we offer same-day pickup, certified Rockwell hardness reports and 2–4 day batch turnaround that keeps
              your production line moving.
            </p>
          </motion.section>

          {/* Sherpur local context — UNIQUE long-form content */}
          <section className="py-12 md:py-16 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// SHERPUR INDUSTRIAL AREA //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Built for Sherpur’s <span className="text-primary">Parts Makers</span>
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                  <p>
                    Sherpur is one of the busiest industrial pockets inside Ludhiana — a tight grid of sheds running lathes, presses,
                    forging hammers and cold-heading machines. The area is packed with <strong>auto-parts units</strong> machining
                    levers, spindles and transmission components, <strong>cycle-parts makers</strong> turning out hubs, freewheels,
                    pedals and sprockets, and <strong>fastener and bolt units</strong> producing high-tensile bolts, studs and pins by
                    the lakh. Every one of these components needs a hard, wear-resistant surface over a tough core — exactly what
                    induction hardening delivers.
                  </p>
                  <p>
                    For these in-city manufacturers, geography is the advantage. Sending parts to a hardening shop in another town
                    costs a day each way in transport and ties up working capital in transit. From Sherpur to our Shimlapuri
                    workshop is a short in-city run, so a tempo dispatched in the morning can have its hardened lot back the same
                    evening for urgent jobs, and within a couple of days for standard batches.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="relative h-72 md:h-[420px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
              >
                <Image
                  src="/images/images/14.png"
                  alt="Hardened gears, sprockets and fasteners for Sherpur Ludhiana auto and cycle parts units"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>

            <motion.div
              className="mt-12 space-y-5 text-base md:text-lg text-muted-foreground font-medium leading-relaxed max-w-5xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p>
                We understand the rhythm of Sherpur’s supply chain because we have been part of it for years. Auto-parts vendors here
                supply tier-2 and tier-3 lines for two-wheeler, tractor and commercial-vehicle makers, where a rejected lot for low
                hardness or a cracked case can stall an OEM dispatch. Cycle-parts units — Ludhiana is the cycle capital of India —
                push enormous volumes where consistency on every freewheel pawl, ratchet and axle decides whether the part survives
                its warranty. Fastener units live and die on thread-rolled strength and surface hardness graded to standard. Our
                job is to take that pressure off your shop floor with repeatable, documented hardening.
              </p>
              <p>
                <strong>Components we routinely harden for Sherpur units</strong> include spur and helical gears, gear-change and kick
                levers, transmission and axle shafts, splines, brake cams, pedal spindles, freewheel bodies and pawls, sprockets and
                chain wheels, hub spindles, machined pins and dowels, and high-tensile fasteners. Using contour-following induction
                coils, we target only the wear zone — the gear flank and root, the shaft journal, the cam lobe — so the core stays
                ductile and the part keeps its dimensional accuracy with minimal distortion and far less post-process grinding than
                full-furnace methods.
              </p>
              <p>
                <strong>Why local units choose us:</strong> in-city proximity for same-day turnaround, consistent 58–62 HRC batch
                after batch, Rockwell test certificates with every dispatch, no rigid minimum order so a single prototype lever or a
                lot of fifty-thousand bolts are both welcome, and competitive per-kg and per-piece job-work rates. For very large or
                fixed components we also bring induction hardening on-site. Whether you are a one-machine fastener shop on a Sherpur
                back lane or an established auto-parts vendor running multiple shifts, you get the same metallurgical quality and the
                same fast, friendly local service — without sending your parts out of the city.
              </p>
            </motion.div>
          </section>

          {/* Industrial Capabilities + Sherpur support card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                Industrial <span className="text-primary">Capabilities</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Induction hardening services for Sherpur’s automotive, cycle-parts, fastener and general engineering manufacturers — workshop and mobile on-site options available.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                    { title: 'Gear Tooth Induction', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                    { title: 'Bearing Race Treatment', href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana' },
                    { title: 'On-site Hardening', href: '/induction-heat-treatment/on-site' },
                    { title: 'Case Hardening', href: '/case-hardening-heat-treatment' },
                    { title: 'Crankshaft Hardening', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
                  ].map(item => (
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4">Sherpur Area Support</h3>
              <p className="text-muted-foreground mb-6 font-medium">
                Fast, reliable induction hardening for Sherpur, Sherpur Kalan, and nearby Ludhiana industrial zones. We understand local auto-parts, cycle-parts and fastener manufacturing needs.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Same-day in-city pickup from Sherpur',
                  '2–4 day standard batch turnaround',
                  'Rockwell HRC test reports included',
                  'Competitive per-kg & per-piece rates',
                  'Min. order: even single pieces accepted',
                ].map(point => (
                  <div key={point} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-6">
                <MapPin className="h-5 w-5" /> Sherpur, Ludhiana
              </div>
              <Button asChild className="w-full py-6 text-lg font-black uppercase italic mb-3">
                <Link href="/contact">Book Sherpur Pickup</Link>
              </Button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 mb-3 bg-[#25D366] text-white rounded-xl font-black uppercase italic text-sm hover:bg-[#25D366]/90 transition-all"
              >
                <MessageSquare className="h-5 w-5" /> WhatsApp Drawing
              </a>
              <a
                href={`tel:${SITE_PHONE_NUMBER.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 py-4 border border-primary text-primary rounded-xl font-black uppercase italic text-sm hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Phone className="h-5 w-5" /> Call: {SITE_PHONE_NUMBER}
              </a>
            </motion.div>
          </div>

          {/* Why local units choose us — trust / E-E-A-T */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// WHY SHERPUR UNITS CHOOSE US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              The In-City <span className="text-primary">Advantage</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Truck, title: 'Minutes Away', desc: 'In-city Sherpur location means same-day pickup and express returns.' },
                { icon: Award, title: 'Consistent 58–62 HRC', desc: 'Repeatable hardness on auto, cycle and fastener parts, batch after batch.' },
                { icon: ShieldCheck, title: 'Certified Reports', desc: 'Rockwell HRC certificates with every batch for OEM supply chains.' },
                { icon: History, title: 'Local Experience', desc: 'Years serving Sherpur’s parts-making cluster across Ludhiana.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Nearby areas / internal location links */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// NEARBY AREAS WE SERVE //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Hardening Across <span className="text-primary">Ludhiana</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { title: 'Focal Point Ludhiana', href: '/induction-heat-treatment/focal-point-ludhiana' },
                { title: 'Dehlon', href: '/induction-heat-treatment/dehlon' },
                { title: 'Jagraon', href: '/induction-heat-treatment/jagraon' },
              ].map((loc) => (
                <motion.div key={loc.href} variants={scaleUp}>
                  <Link
                    href={loc.href}
                    className="group flex items-center justify-between gap-3 p-5 bg-secondary/30 border border-border rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all h-full"
                  >
                    <span className="inline-flex items-center gap-2 font-black uppercase italic tracking-tight text-sm text-foreground group-hover:text-primary transition-colors">
                      <MapPin className="h-4 w-4 text-primary shrink-0" /> {loc.title}
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* FAQ — synced with FAQPage schema */}
          <motion.section
            className="py-24 max-w-4xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <p className="section-label text-center">// FAQ //</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none">
              Sherpur Hardening <span className="text-primary">FAQs</span>
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

          <section className="py-24 border-t border-border">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Related <span className="text-primary">Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings },
                { title: 'Gear Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes },
                { title: 'Technical Guide', href: '/induction-heat-treatment', icon: Cpu },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 flex flex-col items-center text-center shadow-sm transition-all"
                  >
                    <link.icon className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm">{link.title}</h4>
                    <p className="text-xs text-muted-foreground mt-2">Explore Service</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>

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
          <a href={`tel:${SITE_PHONE_NUMBER.replace(/\s/g, '')}`} className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase text-xs py-3 rounded-lg">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-black uppercase text-xs py-3 rounded-lg">
            <MessageSquare className="h-4 w-4" /> WhatsApp
          </a>
          <Link href="/contact" className="flex-1 flex items-center justify-center gap-2 bg-secondary text-foreground font-black uppercase text-xs py-3 rounded-lg border border-border">
            Quote
          </Link>
        </div>
      </div>
    </>
  );
}
