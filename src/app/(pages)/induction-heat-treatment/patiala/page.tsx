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
  Truck,
  Phone,
  MessageSquare,
  Settings,
  Boxes,
  Clock,
  Award,
  ShieldCheck,
  Star,
  MapPin,
  Tractor,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/patiala`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I need induction hardening for components in Patiala. Please find my drawing attached.');

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
    q: 'Do you offer induction hardening in Patiala?',
    a: 'Yes. Thakur Industries serves Patiala’s auto-parts, agricultural-machinery and light-engineering units with precision induction hardening. Components are hardened at our fully equipped Ludhiana facility, roughly 95 km away, and we run scheduled pickup and delivery so Patiala manufacturers do not have to arrange their own transport.',
  },
  {
    q: 'How are components collected from Patiala?',
    a: 'We operate a scheduled pickup route between Patiala and our Ludhiana workshop. Drop your components at an agreed collection point or have them picked up from your unit; we harden, test and return them on the same logistics run. Urgent batches can be moved on a dedicated trip for regular Patiala clients.',
  },
  {
    q: 'What components do Patiala manufacturers send for hardening?',
    a: 'The most common parts from Patiala are transmission and pinion gears, splined and output shafts, agricultural-implement parts such as tine bars, cultivator points, rotavator blades and gearbox shafts, plus general light-engineering items like rollers, bushes and sprockets. We tailor case depth and hardness to each component.',
  },
  {
    q: 'What hardness and case depth can you achieve?',
    a: '58–62 HRC is typical on gear teeth, shaft journals and wear faces, with a controlled case depth of 0.8–3.5 mm depending on the part, steel grade and load. Every batch is HRC-tested and case-depth verified before it returns to Patiala.',
  },
  {
    q: 'What is the turnaround time for Patiala orders?',
    a: 'Standard turnaround is 2–4 working days from receipt of components and an approved specification, plus the scheduled transit between Ludhiana and Patiala. We plan pickup and return around the same logistics window to keep total lead time short.',
  },
  {
    q: 'Which steel grades do you induction-harden?',
    a: 'EN8, EN19 (4140), EN24 (4340), 20MnCr5 and EN36C are the grades most often hardened for Patiala’s auto and agri parts. A carbon content of 0.35–0.60% gives the best hardness response — we advise on the right grade and process for each application.',
  },
  {
    q: 'How is pricing calculated for Patiala job work?',
    a: 'Pricing is per kilogram or per piece, depending on component weight, size, required case depth, steel grade and quantity, with better rates for bulk and repeat orders. Share your drawing and quantity on WhatsApp and we return an exact quotation within 24 hours.',
  },
  {
    q: 'Why should Patiala manufacturers choose Thakur Industries?',
    a: 'Patiala has light-engineering and agricultural-machinery units but limited local capacity for certified, traceable induction hardening. We combine consistent 58–62 HRC results, documented quality reports, scheduled Patiala–Ludhiana logistics and competitive job-work rates — so you get OEM-grade hardening without investing in in-house equipment.',
  },
];

export default function PatialaPage() {
  const gearImage = PlaceHolderImages.find((img) => img.id === 'appGearHardening');
  const agriImage = PlaceHolderImages.find((img) => img.id === 'industryAgriculture');

  // Service / LocalBusiness schema — enriched with offers, aggregateRating & local areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Patiala',
    serviceType: 'Induction Hardening for Auto Parts & Agricultural Machinery',
    url: `${PAGE_URL}/`,
    description:
      'Precision induction hardening in Patiala for auto-parts, agricultural-machinery and light-engineering components — gears, shafts and implement parts hardened to 58–62 HRC with controlled case depth. Job work served from our Ludhiana facility with scheduled pickup.',
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
    areaServed: ['Patiala', 'Sirhind', 'Sangrur', 'Dhuri'],
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
          { name: 'Induction Hardening in Patiala', href: '/induction-heat-treatment/patiala' },
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
              <li className="text-primary">Patiala</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Patiala"
            description="Certified induction hardening for Patiala’s auto-parts, agricultural-machinery and light-engineering units — gears, shafts and implement parts hardened to 58–62 HRC with controlled case depth. Job work from our Ludhiana facility with scheduled pickup, ~95 km away."
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
                { icon: ShieldCheck, label: 'ISO Process' },
                { icon: Truck, label: 'Scheduled Pickup' },
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
              Looking for reliable <strong>induction hardening in Patiala</strong>? <strong>{SITE_NAME}</strong> serves Patiala’s
              auto-parts makers, agricultural-machinery builders and light-engineering units with precision surface hardening that
              raises gear teeth, shaft journals and wear faces to 58–62 HRC while keeping the core tough. Components are hardened at
              our fully equipped Ludhiana facility — about 95 km away — with scheduled pickup and return, so you get OEM-grade,
              traceable heat treatment without arranging your own logistics.
            </p>
          </motion.section>

          {/* Patiala industry context */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// PATIALA INDUSTRY //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Built for <span className="text-primary">Patiala’s</span> Workshops
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Patiala’s engineering economy runs on three pillars: automotive components, agricultural machinery and a broad
                    base of light-engineering units. Workshops across the district turn out transmission parts, fasteners, pump and
                    pulley assemblies, and implement hardware that all share one requirement — durable, wear-resistant surfaces.
                  </p>
                  <p>
                    Many of these units have the machining capacity to make precision parts but lack in-house, certified induction
                    hardening. That is exactly the gap we fill. By routing job work through our Ludhiana workshop, Patiala
                    manufacturers get repeatable case depth, documented hardness reports and consistent dimensional accuracy — the
                    same standard supplied to automotive and tractor OEMs across Punjab.
                  </p>
                  <p>
                    Because Patiala sits roughly 95 km from Ludhiana along the well-connected NH-7 / Rajpura corridor, we run a
                    scheduled pickup-and-return route. Your components leave the floor, get hardened and tested, and come back on the
                    same logistics window — keeping total lead time short and freeing you from arranging transport.
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
                {agriImage && (
                  <Image
                    src={agriImage.imageUrl}
                    alt="Induction hardened agricultural machinery parts for Patiala manufacturers at Thakur Industries Ludhiana"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Components We Harden for Patiala */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// COMPONENTS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              What We Harden for <span className="text-primary">Patiala</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              From auto-parts and agricultural implements to general light-engineering items, we tailor hardness and case depth to
              each component. Explore our dedicated process pages:
            </p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { title: 'Transmission & Pinion Gears', desc: 'Spur, helical and bevel gear teeth hardened to 58–62 HRC.', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes },
                { title: 'Shafts & Splines', desc: 'Output, splined and rotavator shafts with hardened journals.', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings },
                { title: 'Agri-Implement Parts', desc: 'Tine bars, cultivator points, blades and gearbox parts.', href: '/industries/agricultural', icon: Tractor },
                { title: 'Case Hardening', desc: 'Hard wear surface with a tough, ductile core for impact parts.', href: '/case-hardening-heat-treatment', icon: ShieldCheck },
                { title: 'Sprockets & Rollers', desc: 'Light-engineering wear components hardened to spec.', href: '/induction-heat-treatment', icon: Cpu },
                { title: 'On-Site / Bulk Lots', desc: 'High-volume OEM batches and large parts arranged on request.', href: '/induction-heat-treatment/on-site', icon: Award },
              ].map((m) => (
                <motion.div key={m.title} variants={scaleUp}>
                  <Link
                    href={m.href}
                    className="group flex flex-col p-6 bg-secondary/30 border border-border rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all h-full"
                  >
                    <m.icon className="h-8 w-8 text-primary mb-4" />
                    <span className="text-base font-black uppercase italic tracking-tighter text-foreground group-hover:text-primary transition-colors mb-2">{m.title}</span>
                    <span className="text-xs text-muted-foreground font-medium leading-relaxed mb-4">{m.desc}</span>
                    <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-black uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Logistics from Ludhiana */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10 my-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// LOGISTICS //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Patiala ↔ Ludhiana, <span className="text-primary">~95 km</span>
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    We make distance a non-issue. Our scheduled Patiala pickup route means you simply hand over your components — we
                    handle transport both ways and return finished, tested parts with full documentation.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Scheduled pickup & return on a fixed Patiala–Ludhiana window',
                      'Pickup from your unit or an agreed collection point',
                      'Dedicated urgent trips for regular Patiala clients',
                      'Hardness report and case-depth check returned with every batch',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                {[
                  { icon: Truck, title: '~95 km', desc: 'Patiala to our Ludhiana facility via the Rajpura corridor.' },
                  { icon: Clock, title: '2–4 Days', desc: 'Standard hardening turnaround plus scheduled transit.' },
                  { icon: MapPin, title: 'Local Reach', desc: 'Also serving Sirhind, Sangrur and Dhuri belts.' },
                ].map((item, i) => (
                  <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-card/60 rounded-2xl border border-border">
                    <item.icon className="h-9 w-9 text-primary mb-4" />
                    <h3 className="text-lg font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Specifications + image */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative h-72 md:h-[420px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
              >
                {gearImage && (
                  <Image
                    src={gearImage.imageUrl}
                    alt="Induction hardened gear job work for Patiala auto-parts manufacturers"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// SPECIFICATIONS //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Hardening <span className="text-primary">Specifications</span>
                </h2>
                <div className="overflow-hidden rounded-2xl border border-border">
                  <table className="w-full text-left">
                    <tbody className="text-sm md:text-base">
                      {[
                        ['Surface Hardness', '58–62 HRC'],
                        ['Case Depth', '0.8 mm – 3.5 mm (controlled to spec)'],
                        ['Components', 'Gears, shafts, splines, implement parts, sprockets'],
                        ['Steel Grades', 'EN8, EN19, EN24, 4140, 20MnCr5, EN36C'],
                        ['Heating', '900–950 °C (induction)'],
                        ['Quench', 'Polymer / water-based, controlled'],
                        ['Turnaround', '2–4 working days + scheduled transit'],
                        ['Testing', 'HRC verification, case-depth & dimensional check'],
                      ].map(([k, v], i) => (
                        <tr key={k} className={i % 2 === 0 ? 'bg-secondary/30' : 'bg-card'}>
                          <th scope="row" className="py-3.5 px-5 font-black uppercase italic tracking-tight text-foreground align-top w-1/2">
                            {k}
                          </th>
                          <td className="py-3.5 px-5 text-muted-foreground font-medium">{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Why Patiala manufacturers choose us */}
          <section className="py-20 border-t border-border">
            <p className="section-label text-center">// WHY CHOOSE US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Patiala Manufacturers Choose <span className="text-primary">{SITE_NAME}</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Award, title: 'Consistent 58–62 HRC', desc: 'Repeatable hardness on every batch of gears, shafts and implement parts.' },
                { icon: ShieldCheck, title: 'Traceable Reports', desc: 'Documented hardness and case-depth checks for your OEM supply chain.' },
                { icon: Truck, title: 'Scheduled Logistics', desc: 'Pickup and return on a fixed Patiala–Ludhiana window — we move the parts.' },
                { icon: Clock, title: 'Short Lead Time', desc: '2–4 day hardening planned around transit to keep your line running.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Nearby areas we serve */}
          <section className="py-16 border-t border-border">
            <p className="section-label text-center">// NEARBY AREAS //</p>
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Also Serving Around <span className="text-primary">Patiala</span>
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: 'Sirhind', href: '/induction-heat-treatment/sirhind' },
                { title: 'Sangrur', href: '/induction-heat-treatment/sangrur' },
                { title: 'Dhuri', href: '/induction-heat-treatment/dhuri' },
              ].map((link) => (
                <Link key={link.title} href={link.href} className="group">
                  <motion.div
                    variants={scaleUp}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-secondary/30 border border-border rounded-2xl transition-all hover:border-primary/50 flex items-center justify-between gap-3"
                  >
                    <span className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm">{link.title}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Gear Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes, label: 'Transmission Gears' },
                { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Shafts & Splines' },
                { title: 'Case Hardening', href: '/case-hardening-heat-treatment', icon: ShieldCheck, label: 'Hard Case, Tough Core' },
                { title: 'Heat Treatment Guide', href: '/induction-heat-treatment', icon: Cpu, label: 'Main Service Hub' },
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
              Patiala Hardening <span className="text-primary">FAQs</span>
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

          {/* Final CTA cluster */}
          <motion.section
            className="pb-12 flex flex-col items-center gap-6 text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">
              Ready to Harden Your <span className="text-primary">Patiala</span> Parts?
            </h2>
            <p className="text-muted-foreground font-medium max-w-2xl">
              Send your component drawing and quantity for an exact quotation within 24 hours, with scheduled pickup from Patiala.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground font-black uppercase italic tracking-tight">
                <a href={`tel:${SITE_PHONE_NUMBER}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Call Now
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
