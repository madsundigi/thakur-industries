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
  Settings,
  Boxes,
  Cpu,
  Clock,
  Phone,
  MessageSquare,
  IndianRupee,
  FileText,
  Award,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/ambala`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I am an Ambala manufacturer and need induction hardening job work. Please find my drawing attached.');

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
    q: 'Do you serve Ambala for induction hardening job work?',
    a: 'Yes. We provide induction hardening in Ambala for scientific-instrument makers, mixer-grinder and domestic-appliance part suppliers, and auto-component units across Ambala City, Ambala Cantt and the wider Haryana belt. Components are processed at our Ludhiana facility — roughly 110 km away — and returned with certified Rockwell hardness reports.',
  },
  {
    q: 'How do you pick up and return parts between Ambala and Ludhiana?',
    a: 'We run scheduled freight pickup on the Ludhiana–Ambala corridor (about 110 km via NH-44). Your batch is collected from your Ambala unit, hardened at our workshop, and delivered back to your door. For urgent lots we coordinate express transport so production lines are never starved of components.',
  },
  {
    q: 'What is the turnaround time for Ambala orders?',
    a: 'Standard turnaround is 2–4 working days once parts reach our Ludhiana facility, plus a day each way for scheduled freight. Urgent and same-week jobs can be arranged for regular Ambala clients, and on-site hardening is scheduled separately for fixed machinery.',
  },
  {
    q: 'Which components and services do Ambala manufacturers send you?',
    a: 'Ambala units send us precision instrument parts, mixer-grinder and appliance shafts, spindles, gears, pinions, bearing races, cutting tools and auto-component shafts. We offer induction hardening, case hardening, shaft hardening, gear-tooth hardening and on-site induction hardening, with 45–62 HRC depending on grade (EN8, EN19, EN24, 4140).',
  },
  {
    q: 'How much does induction hardening cost for Ambala parts?',
    a: 'Pricing is on a per-kilogram or per-piece basis and depends on component weight, case depth, steel grade and quantity, with better rates for bulk OEM lots. Send your drawing and quantity on WhatsApp and we will return an exact quotation within 24 hours.',
  },
];

export default function AmbalaPage() {
  const gearImage = PlaceHolderImages.find((img) => img.id === 'appGearHardening');
  const qcImage = PlaceHolderImages.find((img) => img.id === 'processHardening');

  // Service / LocalBusiness schema — enriched with offers, aggregateRating & areaServed.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Ambala, Haryana',
    serviceType: 'Induction Hardening & Heat Treatment',
    url: `${PAGE_URL}/`,
    description:
      "Precision induction hardening for Ambala's scientific-instrument, domestic-appliance and auto-component manufacturers — 45–62 HRC, certified reports, scheduled freight pickup from our Ludhiana facility ~110 km away.",
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
    areaServed: ['Ambala', 'Chandigarh', 'Yamunanagar', 'Panipat'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Induction hardening job work for Ambala priced per kg or per piece. Request a custom quotation.',
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
          { name: 'Ambala', href: '/induction-heat-treatment/ambala' },
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
              <li className="text-primary">Ambala</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Ambala"
            description="Precision induction hardening for Ambala’s scientific-instrument, mixer-grinder and auto-component manufacturers — 45–62 HRC with certified hardness reports and scheduled freight pickup from our Ludhiana facility, ~110 km away."
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
                { icon: ShieldCheck, label: 'Certified Reports' },
                { icon: Truck, label: '~110 km Pickup' },
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
                  <MessageSquare className="h-5 w-5" /> WhatsApp Ambala
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
              alt="Induction hardening in Ambala — precision heat treatment for scientific-instrument and auto-component parts"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">Induction Hardening — Ambala, Haryana</span>
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
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              Looking for dependable <strong>induction hardening in Ambala</strong>? At{' '}
              <strong>{SITE_NAME}</strong>, we provide precision surface and <strong>heat treatment in Ambala</strong> for the
              town’s scientific-instrument makers, mixer-grinder and domestic-appliance part suppliers, and auto-component units —
              raising critical wear surfaces to 45–62 HRC while keeping the core tough. Parts are processed at our Ludhiana
              workshop, roughly 110 km away, with scheduled freight pickup and certified Rockwell reports on every batch.
            </p>
          </motion.section>

          {/* Ambala industrial context — unique local content */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// AMBALA INDUSTRY //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Built for Ambala’s <span className="text-primary">Manufacturing Clusters</span>
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Ambala is one of North India’s most distinctive industrial towns. It is the country’s best-known hub for
                    <strong> scientific and laboratory instruments</strong> — survey instruments, microscopes, glassware fittings and
                    precision lab hardware shipped across India and abroad. Alongside this sits a deep <strong>domestic-appliance
                    cluster</strong> turning out mixer-grinder spindles, blade shafts and motor parts, plus a steadily growing
                    <strong> auto-component</strong> base supplying fasteners, shafts and small drive parts.
                  </p>
                  <p>
                    Each of these industries lives or dies on the wear life of small, precise steel parts. A mixer-grinder spindle
                    that pits, an instrument cam that wears soft, or an auto shaft that scores under load all come back as field
                    failures. That is exactly where targeted <strong>induction hardening</strong> earns its keep — hardening just the
                    working surface to 45–62 HRC while keeping the rest of the part ductile and dimensionally stable.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    { title: 'Scientific-Instrument Parts', href: '/induction-heat-treatment' },
                    { title: 'Mixer-Grinder & Appliance Shafts', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                    { title: 'Auto-Component Gears & Pinions', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                    { title: 'Tooling & Case-Hardened Parts', href: '/case-hardening-heat-treatment' },
                  ].map((item, i) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border hover:border-primary/50 transition-all group"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-foreground uppercase tracking-tight text-xs group-hover:text-primary transition-colors">{item.title}</span>
                    </Link>
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
                {gearImage && (
                  <Image
                    src={gearImage.imageUrl}
                    alt="Induction hardened precision parts for Ambala scientific-instrument and auto-component manufacturers"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Components We Harden for Ambala */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// COMPONENTS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Components We Harden for <span className="text-primary">Ambala Units</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              From sub-100 mm instrument parts to auto shafts, we tailor the induction profile to each component’s duty cycle. Common
              Ambala work includes:
            </p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { title: 'Precision Instrument Parts', desc: 'Cams, pins, slides and fittings that must hold tolerance and resist wear over long service life.' },
                { title: 'Mixer-Grinder & Appliance Shafts', desc: 'Spindles and blade shafts hardened on the bearing and seal areas to stop pitting and scoring.' },
                { title: 'Auto-Component Shafts', desc: 'Drive and transmission shafts hardened for fatigue strength while keeping a tough core.' },
                { title: 'Gears & Pinions', desc: 'Tooth-flank and root hardening for appliance and auto drives, 58–62 HRC where required.' },
                { title: 'Cutting & Forming Tools', desc: 'Tool-steel edges and dies hardened for sustained sharpness and abrasion resistance.' },
                { title: 'Bearing Races & Bushes', desc: 'Selective hardening of running surfaces for smooth, long-life rotation.' },
              ].map((item) => (
                <motion.div key={item.title} variants={scaleUp} className="p-6 bg-secondary/30 rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <CheckCircle2 className="h-7 w-7 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Logistics — ~110 km from Ludhiana */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
              >
                {qcImage && (
                  <Image
                    src={qcImage.imageUrl}
                    alt="Hardness testing and certification for induction hardening parts shipped from Ambala to Ludhiana"
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
                  Ambala to Ludhiana, <span className="text-primary">~110 km</span>
                </h2>
                <div className="space-y-5 text-lg text-muted-foreground font-medium">
                  <p>
                    Our Ludhiana facility sits roughly 110 km from Ambala along the NH-44 corridor — close enough for a tight,
                    reliable freight loop. We run <strong>scheduled freight pickup</strong> so your batches move on a predictable
                    rhythm rather than ad-hoc courier runs.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Scheduled pickup from your Ambala or Ambala Cantt unit',
                      'Hardened and tested at our Ludhiana workshop',
                      'Returned door-to-door, typically within 2–4 working days plus transit',
                      'Express coordination for urgent production-critical lots',
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

          {/* Why Ambala manufacturers choose us */}
          <section className="py-20 border-t border-border">
            <p className="section-label text-center">// WHY CHOOSE US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Ambala Manufacturers Choose <span className="text-primary">{SITE_NAME}</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              Ambala’s instrument and appliance makers work to fine tolerances and tight delivery schedules. Our process is built to
              respect both — selective heating that protects geometry, and documentation that satisfies OEM quality audits.
            </p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Award, title: 'Repeatable Hardness', desc: '45–62 HRC tailored to each grade, batch after batch.' },
                { icon: ShieldCheck, title: 'Certified Reports', desc: 'Rockwell and case-depth records with every Ambala batch.' },
                { icon: Truck, title: 'Reliable Freight Loop', desc: 'Scheduled ~110 km pickup keeps appliance & auto lines fed.' },
                { icon: Clock, title: 'Fast Turnaround', desc: '2–4 working-day standard processing on most jobs.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Pricing & Turnaround */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// PRICING & TURNAROUND //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Ambala <span className="text-primary">Rates & Lead Time</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We quote competitive <strong>induction hardening rates</strong> for Ambala — prototype trials through to bulk OEM
              production. Final pricing depends on weight, case depth, steel grade and quantity. Share your drawing for an exact
              quote within 24 hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk and repeat OEM orders.' },
                { icon: FileText, title: 'Minimum Order', desc: 'No rigid minimum — single trial parts to multi-thousand-piece lots accepted.' },
                { icon: Clock, title: 'Turnaround', desc: 'Standard 2–4 working days plus scheduled Ambala–Ludhiana transit.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your Ambala Quote
                </a>
              </Button>
            </div>
          </section>

          {/* Nearby towns we also serve */}
          <section className="py-24 border-t border-border">
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Also Serving <span className="text-primary">Nearby Towns</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Induction Hardening Chandigarh', href: '/induction-heat-treatment/chandigarh', icon: MapPin, label: 'Tricity Manufacturing' },
                { title: 'Induction Hardening Yamunanagar', href: '/induction-heat-treatment/yamunanagar', icon: MapPin, label: 'Machine & Metal Units' },
                { title: 'Induction Hardening Panipat', href: '/induction-heat-treatment/panipat', icon: MapPin, label: 'Industrial Components' },
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

          {/* Related Services */}
          <section className="py-16 border-t border-border">
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Related <span className="text-primary">Services</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { title: 'Gear Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes, label: 'Gears & Pinions' },
                { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Transmission Shafts' },
                { title: 'Case Hardening', href: '/case-hardening-heat-treatment', icon: ShieldCheck, label: 'Surface Case Depth' },
                { title: 'Heat Treatment Guide', href: '/induction-heat-treatment', icon: Cpu, label: 'Main Service Hub' },
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
              Induction Hardening <span className="text-primary">FAQs — Ambala</span>
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
