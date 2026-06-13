'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Cpu,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Settings,
  Boxes,
  Phone,
  MessageSquare,
  Clock,
  Award,
  Star,
  Truck,
  Train,
  Wheat,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/dhuri`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I am from Dhuri and need induction hardening job work. Please find my component drawing attached.');

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
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

// Frequently asked questions — single source of truth for both the visible
// accordion AND the FAQPage schema (kept in sync to avoid schema mismatch).
const FAQ_ITEMS = [
  {
    q: 'Do you offer induction hardening for units in Dhuri?',
    a: 'Yes. We regularly serve Dhuri’s rice-sheller fabricators, agricultural-implement makers and the railway-workshop supply chain from our Ludhiana plant, roughly 70 km away. Send your drawing on WhatsApp and we will arrange pickup, hardening and certified return delivery.',
  },
  {
    q: 'How far is your hardening plant from Dhuri and how does logistics work?',
    a: 'Our induction-hardening facility is in Shimlapuri, Ludhiana — about 70 km from Dhuri via the Ludhiana–Malerkotla–Dhuri road. We run regular consignment trips, so components from Dhuri, Sangrur and Malerkotla are collected, hardened and returned with documentation, typically within 2–4 working days.',
  },
  {
    q: 'Can you harden rice-sheller rollers and rubber-roll shafts?',
    a: 'Yes. Rice-sheller huller rollers, emery-coated shaft journals, paddy-separator components and abrasive-wear surfaces are a core part of our Dhuri work. We harden the wear zones to 58–62 HRC so rollers survive the abrasive paddy and husk environment for far longer between rebuilds.',
  },
  {
    q: 'What agricultural-implement parts can you induction harden?',
    a: 'Tine points, cultivator shovels, rotavator blade mounts, seed-drill shafts, thresher beater bars, chaff-cutter blades and trolley axles are commonly hardened for Dhuri and Sangrur agri-implement units. We target the cutting edges and bearing journals while keeping the core tough.',
  },
  {
    q: 'Do you handle railway-workshop components from Dhuri?',
    a: 'We support the railway-workshop and ancillary supplier base around Dhuri junction with induction hardening of wear plates, lever pins, shaft journals, cams and linkage parts. All work is supplied with hardness and case-depth records suitable for railway-grade documentation.',
  },
  {
    q: 'What hardness and case depth can you achieve?',
    a: '58–62 HRC is typical, with controlled case depth from 0.8 mm to 3.5 mm depending on the part and steel grade. EN8, EN19, EN24, 4140 and 20MnCr5 components all respond well. We verify every batch with HRC testing and case-depth checks.',
  },
  {
    q: 'What is the turnaround time for Dhuri orders?',
    a: 'Standard turnaround is 2–4 working days from receipt of components and an approved specification, including the road transit between Dhuri and Ludhiana. Urgent same-week jobs can be arranged for regular Dhuri clients.',
  },
  {
    q: 'How is pricing decided for induction hardening?',
    a: 'Pricing is on a per-kilogram or per-piece basis and depends on component weight, case depth, steel grade and order quantity, with better rates for bulk rice-sheller and agri-implement lots. Share your drawing and quantity for an exact quotation within 24 hours.',
  },
];

export default function DhuriPage() {
  const processImage = PlaceHolderImages.find((img) => img.id === 'processHardening');
  const appImage = PlaceHolderImages.find((img) => img.id === 'appShaftHardening');

  // Service / LocalBusiness schema — full provider address, areaServed, offers & rating
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Dhuri, Punjab',
    serviceType: 'Induction Hardening Job Work',
    url: `${PAGE_URL}/`,
    description:
      'Induction hardening in Dhuri, Punjab for rice-sheller rollers, agricultural-implement parts and railway-workshop components. Certified job work at 58–62 HRC, served from our Ludhiana plant ~70 km away.',
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
    areaServed: ['Dhuri', 'Sangrur', 'Malerkotla', 'Patiala'],
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
          { name: 'Induction Hardening in Dhuri', href: '/induction-heat-treatment/dhuri' },
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
              <li className="text-primary">Dhuri</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Dhuri"
            description="Certified induction hardening job work for Dhuri’s rice-sheller units, agricultural-implement makers and railway-workshop supply chain — 58–62 HRC with controlled case depth, served from our Ludhiana plant just ~70 km away."
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
                { icon: ShieldCheck, label: 'Certified Process' },
                { icon: Truck, label: '~70 km from Ludhiana' },
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
              alt="Induction hardening in Dhuri — precision surface heat treatment for rice-sheller and agri-implement parts"
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
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
            className="py-12 md:py-16 border-b border-border text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
              Looking for dependable <strong>induction hardening in Dhuri</strong>? At <strong>{SITE_NAME}</strong>, we provide
              certified surface-hardening job work for Dhuri’s rice-sheller fabricators, agricultural-implement manufacturers and the
              railway-workshop supply base — raising wear surfaces to 58–62 HRC while keeping the core tough. From our Ludhiana plant
              just ~70 km away, we handle everything from a single trial part to bulk production lots, with hardness testing,
              microhardness traverses and full certification.
            </p>
          </motion.section>

          {/* Local hook — Dhuri industry context (unique local content) */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// DHURI, SANGRUR DISTRICT //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Built for Dhuri’s <span className="text-primary">Industry</span>
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                  <p>
                    Dhuri is a busy railway-junction town in Sangrur district, where the railway workshop, a dense cluster of
                    rice-sheller and paddy-processing units, and a strong base of agricultural-implement fabricators all run on
                    components that live or die by their surface wear life. That is exactly the problem induction hardening solves.
                  </p>
                  <p>
                    Rice-sheller huller rollers, emery shaft journals and paddy-separator parts face relentless abrasion from husk
                    and grit. Cultivator tines, thresher beater bars and seed-drill shafts wear at the edges and the bearing
                    seats. Railway-workshop wear plates, lever pins and linkage components must hold tolerance under repeated load.
                    For each of these, we harden only the wear zone — leaving the core ductile so parts resist shock instead of
                    cracking.
                  </p>
                  <p>
                    Because Dhuri sits roughly 70 km from our Shimlapuri plant along the Ludhiana–Malerkotla–Dhuri road, turnaround
                    stays tight: components are collected, hardened to spec and returned with documentation, usually inside 2–4
                    working days.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    { icon: Train, label: 'Railway Workshop Parts' },
                    { icon: Wheat, label: 'Rice-Sheller Rollers' },
                    { icon: Settings, label: 'Agri-Implement Parts' },
                  ].map((tag) => (
                    <span key={tag.label} className="inline-flex items-center gap-2 bg-secondary/40 border border-border text-foreground text-xs font-black uppercase tracking-tight px-3 py-2 rounded-full">
                      <tag.icon className="h-4 w-4 text-primary" />
                      {tag.label}
                    </span>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="relative h-72 md:h-[450px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
              >
                {appImage && (
                  <Image
                    src={appImage.imageUrl}
                    alt="Induction hardening of a rice-sheller roller shaft for a Dhuri processing unit at Thakur Industries Ludhiana"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Components We Harden for Dhuri */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// DHURI COMPONENTS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              What We Harden for <span className="text-primary">Dhuri Units</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                {
                  icon: Wheat,
                  title: 'Rice-Sheller & Paddy',
                  items: ['Huller / sheller rollers', 'Emery shaft journals', 'Paddy-separator parts', 'Rubber-roll shafts'],
                },
                {
                  icon: Settings,
                  title: 'Agricultural Implements',
                  items: ['Cultivator tine points', 'Thresher beater bars', 'Seed-drill & rotavator shafts', 'Chaff-cutter blades'],
                },
                {
                  icon: Train,
                  title: 'Railway Workshop',
                  items: ['Wear plates & liners', 'Lever & linkage pins', 'Shaft journals', 'Cams & guide rails'],
                },
              ].map((group) => (
                <motion.div key={group.title} variants={scaleUp} className="p-8 bg-secondary/30 rounded-2xl border border-border h-full">
                  <group.icon className="h-9 w-9 text-primary mb-5" />
                  <h3 className="text-lg font-black uppercase italic tracking-tighter mb-4">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground font-medium">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Capabilities + Dhuri support card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                Industrial <span className="text-primary">Capabilities</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground font-medium">
                  Our Dhuri focus serves the industrial nodes along the Ludhiana–Sangrur corridor, ensuring rapid technical
                  support. Explore our core processes:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                    { title: 'Gear Tooth Induction', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                    { title: 'Bearing Race Treatment', href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana' },
                    { title: 'On-site Hardening', href: '/induction-heat-treatment/on-site' },
                  ].map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border hover:border-primary/50 transition-all group"
                    >
                      <ShieldCheck className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Dhuri Support</h3>
              <p className="text-muted-foreground mb-8 font-medium">
                Helping local rice-sheller, agri-implement and railway-workshop units achieve export-grade surface hardness and
                documented quality assurance — with collection and return logistics built in.
              </p>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <MapPin className="h-5 w-5" /> Area: Dhuri, Sangrur, Malerkotla, Patiala
              </div>
              <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                <Link href="/contact">Inquire for Dhuri</Link>
              </Button>
            </motion.div>
          </div>

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
                    ['Surface Hardness', '58–62 HRC (wear surface)'],
                    ['Case Depth', '0.8 mm – 3.5 mm (controlled to spec)'],
                    ['Typical Parts', 'Sheller rollers, agri-implement edges, railway pins & journals'],
                    ['Steel Grades', 'EN8, EN19, EN24, 4140, 20MnCr5'],
                    ['Heating', 'Induction, 900–950 °C, selective wear zone'],
                    ['Quench Medium', 'Polymer / water-based, controlled'],
                    ['Distance from Plant', '~70 km (Ludhiana → Dhuri)'],
                    ['Turnaround', '2–4 working days (incl. transit)'],
                    ['Testing', 'HRC verification, case-depth check, certification'],
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
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <p className="section-label text-center">// WHY DHURI UNITS CHOOSE US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Dhuri Units <span className="text-primary">Trust {SITE_NAME}</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Truck, title: 'Pickup & Return Logistics', desc: 'Regular consignment trips on the ~70 km Ludhiana–Dhuri route mean you ship a drawing, not a problem.' },
                { icon: Wheat, title: 'Sheller-Wear Expertise', desc: 'We know how husk and grit chew through huller rollers — and how to harden them to last between rebuilds.' },
                { icon: Clock, title: '2–4 Day Turnaround', desc: 'Transit-inclusive lead time keeps your sheller line and implement production moving through the season.' },
                { icon: Award, title: 'Consistent 58–62 HRC', desc: 'Repeatable hardness on every batch, verified before dispatch — no guesswork on the shop floor.' },
                { icon: ShieldCheck, title: 'Documented Certification', desc: 'Hardness and case-depth records suitable for railway-grade and OEM supply documentation.' },
                { icon: Boxes, title: 'Trial Lots to Bulk', desc: 'Single prototype parts or multi-thousand-piece agri-implement runs — both welcome, better rates on bulk.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="bg-card/50 p-8 rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <item.icon className="h-8 w-8 text-primary mb-6" />
                  <h3 className="font-bold text-xl mb-3 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Process image + how it works */}
          <section className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
              >
                {processImage && (
                  <Image
                    src={processImage.imageUrl}
                    alt="Hardness testing of an induction-hardened agricultural-implement part for a Dhuri manufacturer"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  How It <span className="text-primary">Works</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground font-medium">
                  <p>From the first WhatsApp drawing to certified delivery back in Dhuri, the process is simple:</p>
                  <ul className="space-y-4">
                    {[
                      'Send your part drawing and quantity — we quote within 24 hours',
                      'Components collected on the next Ludhiana–Dhuri consignment trip',
                      'Selective induction hardening to 58–62 HRC, controlled case depth',
                      'HRC testing, case-depth check and certification on every batch',
                      'Documented parts returned to Dhuri, typically in 2–4 working days',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground font-black uppercase italic tracking-tight">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" /> Get Your Dhuri Quote
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Nearby towns we serve — internal links */}
          <section className="py-16 border-t border-border">
            <p className="section-label text-center">// NEARBY AREAS //</p>
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Induction Hardening Near <span className="text-primary">Dhuri</span>
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: 'Sangrur', href: '/induction-heat-treatment/sangrur' },
                { title: 'Malerkotla', href: '/induction-heat-treatment/malerkotla' },
                { title: 'Patiala', href: '/induction-heat-treatment/patiala' },
              ].map((town) => (
                <Link key={town.title} href={town.href} className="group">
                  <div className="p-6 bg-secondary/30 border border-border rounded-2xl transition-all hover:border-primary/50 hover:-translate-y-1 flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm">{town.title}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Related Services */}
          <section className="py-24 border-t border-border">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Related <span className="text-primary">Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Transmission & Sheller Shafts' },
                { title: 'Gear Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes, label: 'Gear Teeth & Pinions' },
                { title: 'Case Hardening', href: '/case-hardening', icon: ShieldCheck, label: 'Carburizing Services' },
                { title: 'Main Pillar', href: '/induction-heat-treatment', icon: Cpu, label: 'Service Hub' },
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
              Dhuri Hardening <span className="text-primary">FAQs</span>
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
