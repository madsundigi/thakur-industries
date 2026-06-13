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
  Clock,
  Phone,
  MessageSquare,
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
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/phagwara`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I am in Phagwara and need induction hardening job work. Please find my drawing attached.');

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
    q: 'Do you offer induction hardening in Phagwara?',
    a: 'Yes. We provide full induction hardening job work for Phagwara units from our Ludhiana facility, located roughly 45 km away on the GT Road corridor. Sugar mills, auto-parts makers and engineering workshops across Phagwara, Kapurthala and Nawanshahr send us their components for certified surface hardening with fast pickup and delivery.',
  },
  {
    q: 'How far is your facility from Phagwara?',
    a: 'Our workshop is in Shimlapuri, Ludhiana — about 45 km from Phagwara via the Ludhiana–Jalandhar GT Road. That short distance lets us arrange same-week pickup and drop for most Phagwara orders, so your production line stays running.',
  },
  {
    q: 'Can you harden sugar-mill rollers and shafts?',
    a: 'Yes. Sugar-mill crushing rollers, mill-roller shafts, cane-carrier shafts and gear-drive components are a core part of our Phagwara work. We induction-harden the wear surfaces to 55–62 HRC depending on the steel grade, extending roller and shaft life through the crushing season.',
  },
  {
    q: 'What auto-parts and engineering components do you harden for Phagwara units?',
    a: 'For Phagwara auto-parts and general engineering shops we harden shafts, axles, gears, pinions, splines, hydraulic rods, pins, bushes and machine-tool components. Send your drawing with the required hardness and case depth and we will confirm the best induction profile.',
  },
  {
    q: 'What turnaround can Phagwara customers expect?',
    a: 'Standard turnaround is 2–4 working days after we receive the components and an approved specification, plus transit time from Phagwara. Urgent same-week jobs can be arranged for regular Phagwara clients, and large mill rollers can be scheduled around your shutdown windows.',
  },
  {
    q: 'Do you provide hardness test reports?',
    a: 'Yes. Every job leaves with HRC hardness verification and, on request, case-depth and dimensional inspection records. This documentation supports OEM supply chains and sugar-mill maintenance audits.',
  },
  {
    q: 'How is induction hardening priced for Phagwara orders?',
    a: 'Pricing is per kilogram or per piece, depending on component weight, size, required case depth, steel grade and quantity. Bulk and repeat orders from Phagwara units receive better per-piece rates. Share your drawing on WhatsApp for an exact quotation within 24 hours.',
  },
];

export default function PhagwaraPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'blogRollerHardening');
  const shaftImage = PlaceHolderImages.find((img) => img.id === 'appShaftHardening');

  // Service / LocalBusiness schema — enriched with full Ludhiana address,
  // INR offer, aggregateRating and Phagwara-area service coverage.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Phagwara',
    serviceType: 'Induction Hardening Job Work',
    url: `${PAGE_URL}/`,
    description:
      'Induction hardening job work for Phagwara sugar mills, auto-parts and engineering units — rollers, shafts, gears and pinions hardened to 55–62 HRC with certified reports. Served from our Ludhiana facility, 45 km away.',
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
    areaServed: ['Phagwara', 'Jalandhar', 'Nawanshahr', 'Ludhiana'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Induction hardening job work for Phagwara units, priced per kg or per piece. Request a custom quotation.',
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
          { name: 'Phagwara', href: '/induction-heat-treatment/phagwara' },
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
              <li className="text-primary">Phagwara</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Phagwara"
            description="Certified induction hardening job work for Phagwara’s sugar mills, auto-parts makers and engineering units — rollers, shafts, gears and pinions hardened to 55–62 HRC. Served from our Ludhiana facility, just 45 km away, with fast pickup and hardness reports."
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
                { icon: MapPin, label: '45 km from Ludhiana' },
                { icon: Award, label: '55–62 HRC' },
                { icon: ShieldCheck, label: 'Certified Reports' },
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
                  <MessageSquare className="h-5 w-5" /> WhatsApp Phagwara
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
              Searching for dependable <strong>induction hardening in Phagwara</strong>? At <strong>{SITE_NAME}</strong>, we
              provide precision induction surface hardening for Phagwara’s sugar-mill equipment, auto-parts manufacturers and
              general engineering units. Our Ludhiana workshop sits roughly <strong>45 km from Phagwara</strong> on the GT Road
              corridor, so we combine certified 55–62 HRC results with fast pickup, quick turnaround and full hardness reports.
            </p>
          </motion.section>

          {/* Sugar-mill equipment — unique local content */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// SUGAR-MILL EQUIPMENT //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Hardening for Phagwara <span className="text-primary">Sugar Mills</span>
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Phagwara grew around its sugar industry, and the crushing plant takes a brutal beating every season. We
                    induction-harden the high-wear surfaces of sugar-mill machinery so they survive the cane-crushing cycle:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Mill Crushing Rollers',
                      'Mill-Roller Shafts',
                      'Cane-Carrier Shafts',
                      'Drive Gears & Pinions',
                      'Knife & Shredder Shafts',
                      'Pump & Gearbox Shafts',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span className="font-bold text-foreground uppercase tracking-tight text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Hardened roller and shaft surfaces resist the abrasion of cane fibre and bagasse, holding their profile far
                    longer than untreated steel and cutting unplanned downtime during the season.
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
                    alt="Induction hardening of sugar-mill rollers and shafts for Phagwara units at Thakur Industries Ludhiana"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Auto-parts & engineering units — unique local content */}
          <section className="py-16 md:py-24 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                className="relative h-72 md:h-[450px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
              >
                {shaftImage && (
                  <Image
                    src={shaftImage.imageUrl}
                    alt="Induction hardened shafts and gears for Phagwara auto-parts and engineering units"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// AUTO-PARTS & ENGINEERING //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Auto-Parts &amp; <span className="text-primary">Engineering Units</span>
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Beyond sugar, Phagwara hosts a cluster of auto-component makers and general engineering workshops feeding the
                    wider Doaba and Ludhiana supply chains. We harden the precision parts these units produce:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Transmission Shafts & Axles',
                      'Spur, Helical & Bevel Gears',
                      'Pinions & Splines',
                      'Hydraulic Rods & Pins',
                      'Bushes & Sleeves',
                      'Machine-Tool Components',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span className="font-bold text-foreground uppercase tracking-tight text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Whether it is a single prototype shaft or a bulk OEM gear lot, we deliver consistent case depth and surface
                    hardness on EN8, EN19, EN24, 4140 and 20MnCr5 steels.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Logistics from Ludhiana — local hook */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <p className="section-label text-center">// LOGISTICS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Just <span className="text-primary">45 km</span> from Phagwara
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              Our Shimlapuri, Ludhiana facility is a short run down the GT Road from Phagwara — close enough for same-week pickup
              and drop, far enough to give you a fully equipped induction-hardening workshop without the cost of one on-site.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Truck, title: 'Fast Pickup & Drop', desc: 'Component collection and delivery between Phagwara and our Ludhiana plant arranged within the same week.' },
                { icon: Clock, title: '2–4 Day Turnaround', desc: 'Standard hardening turnaround after receipt, with urgent slots for regular Phagwara clients.' },
                { icon: Factory, title: 'Shutdown Scheduling', desc: 'Large mill rollers and shafts scheduled around your crushing-season maintenance windows.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="bg-card/50 p-8 rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <item.icon className="h-8 w-8 text-primary mb-6" />
                  <h3 className="font-bold text-xl mb-3 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Why Phagwara units choose us */}
          <section className="py-20 border-t border-border">
            <p className="section-label text-center">// WHY PHAGWARA CHOOSES US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Local Units Trust <span className="text-primary">{SITE_NAME}</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              Phagwara’s sugar mills, auto-parts makers and engineering shops choose us because we pair genuine metallurgical
              expertise with the convenience of a near-by, well-equipped plant. Here is what sets our <strong>induction hardening
              in Phagwara</strong> apart:
            </p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Award, title: 'Consistent Hardness', desc: 'Repeatable 55–62 HRC on rollers, shafts and gears, batch after batch.' },
                { icon: ShieldCheck, title: 'Certified Reports', desc: 'HRC and case-depth documentation for mill audits and OEM supply chains.' },
                { icon: MapPin, title: 'Near & Accessible', desc: 'Only 45 km away on the GT Road — quick pickup keeps your line moving.' },
                { icon: Clock, title: 'Fast Turnaround', desc: '2–4 day standard delivery with urgent slots for regular clients.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Components We Harden — internal links to service pages */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// COMPONENTS WE HARDEN //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Explore Our <span className="text-primary">Hardening Services</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { grade: 'Gears', note: 'Spur, helical & bevel', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                { grade: 'Shafts', note: 'Mill & transmission', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                { grade: 'Case Hardening', note: 'Surface job work', href: '/case-hardening-heat-treatment' },
                { grade: 'Main Guide', note: 'Heat-treatment hub', href: '/induction-heat-treatment' },
              ].map((m) => (
                <motion.div key={m.grade} variants={scaleUp}>
                  <Link
                    href={m.href}
                    className="group flex flex-col items-center text-center p-6 bg-secondary/30 border border-border rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all h-full"
                  >
                    <span className="text-xl font-black uppercase italic text-primary mb-1">{m.grade}</span>
                    <span className="text-xs text-muted-foreground font-bold uppercase tracking-tight mb-3">{m.note}</span>
                    <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-black uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Nearby towns we serve — local internal linking */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// NEARBY TOWNS WE SERVE //</p>
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Around <span className="text-primary">Phagwara</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Induction Hardening in Jalandhar', href: '/induction-heat-treatment/jalandhar', icon: MapPin, label: 'Doaba Industrial Hub' },
                { title: 'Induction Hardening in Nawanshahr', href: '/induction-heat-treatment/nawanshahr', icon: MapPin, label: 'SBS Nagar District' },
                { title: 'Focal Point Ludhiana', href: '/induction-heat-treatment/focal-point-ludhiana', icon: Factory, label: 'Our Home Cluster' },
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
              Phagwara Hardening <span className="text-primary">FAQs</span>
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
