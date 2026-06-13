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
  Truck,
  Phone,
  MessageSquare,
  History,
  Clock,
  IndianRupee,
  Award,
  ShieldCheck,
  Star,
  FileText,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/faridabad`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent(
    'Hello, I am an OEM supplier in Faridabad and need bulk induction hardening (gears/shafts/components). Please share rates and freight details.'
  );

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
    q: 'Do you serve induction hardening customers in Faridabad?',
    a: 'Yes. We regularly supply induction hardening to auto-component manufacturers and Tier-1/Tier-2 OEM suppliers across Faridabad, Ballabhgarh, Palwal and the wider Delhi NCR belt. Our facility is in Ludhiana, Punjab — about 310 km away — and we serve Faridabad clients through scheduled freight and bulk consignments, so distance is never a barrier to consistent, certified hardening.',
  },
  {
    q: 'How do freight and bulk-consignment logistics work from Ludhiana to Faridabad?',
    a: 'For Faridabad orders we consolidate components into bulk consignments and move them by dedicated road freight on the Ludhiana–Ambala–Delhi NCR corridor. Larger monthly OEM contracts run on a fixed pickup-and-return schedule with palletised, batch-tagged crates. Transit is typically next-day for road freight, and we coordinate documentation so your incoming-inspection team can clear material without delay.',
  },
  {
    q: 'What is the turnaround time for a Faridabad order including transit?',
    a: 'In-house hardening is 2–4 working days per batch. Adding road freight on the ~310 km Ludhiana–Faridabad route, most bulk orders complete within 4–7 working days door to door. For recurring production we hold a dedicated processing slot so your line never waits, and urgent consignments can be expedited for regular clients.',
  },
  {
    q: 'Do you provide OEM documentation and traceability for Faridabad suppliers?',
    a: 'Yes. Every consignment ships with Rockwell hardness reports, case-depth verification, batch traceability records and process parameter sheets formatted for OEM incoming inspection. This documentation is exactly what Faridabad Tier-1 and Tier-2 suppliers need to satisfy their own customer PPAP and quality audits.',
  },
  {
    q: 'How much does induction hardening cost for a bulk Faridabad order?',
    a: 'Pricing is per kilogram or per piece and depends on component weight, case depth, steel grade and quantity, with reduced rates on bulk and repeat OEM consignments. Freight is consolidated across the batch to keep landed cost competitive even at 310 km. Send your drawing, quantity and monthly volume on WhatsApp for an exact quotation within 24 hours.',
  },
];

export default function FaridabadPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'appGearHardening');
  const qcImage = PlaceHolderImages.find((img) => img.id === 'processHardening');

  // Service / LocalBusiness schema — enriched with offers, aggregateRating & NCR areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Faridabad, Haryana',
    serviceType: 'Induction Hardening & Heat Treatment for Auto Components',
    url: `${PAGE_URL}/`,
    description:
      'OEM-grade induction hardening for Faridabad auto-component and engineering manufacturers — gears, shafts and crankshafts at 58–62 HRC with certified reports, served via bulk freight consignments from Ludhiana, Punjab.',
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
    areaServed: ['Faridabad', 'Gurugram', 'Delhi', 'Noida'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Bulk induction hardening job work for Faridabad OEM suppliers, priced per kg or per piece. Request a custom quotation.',
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
          { name: 'Faridabad', href: '/induction-heat-treatment/faridabad' },
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
              <li className="text-primary">Faridabad</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Faridabad"
            description="OEM-grade induction hardening for Faridabad’s auto-component and engineering manufacturers — gears, shafts and crankshafts at 58–62 HRC with certified test reports, delivered via bulk freight consignments from our Ludhiana facility."
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
                { icon: ShieldCheck, label: 'OEM Documentation' },
                { icon: Truck, label: 'Bulk Freight Consignments' },
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
                  <MessageSquare className="h-5 w-5" /> WhatsApp Faridabad
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
              Looking for dependable <strong>induction hardening in Faridabad</strong>? <strong>{SITE_NAME}</strong> hardens gears,
              shafts and crankshafts to 58–62 HRC for Faridabad’s auto-component factories and Tier-1/Tier-2 OEM suppliers. Our works
              sits in Ludhiana, Punjab — roughly <strong>310 km</strong> from Faridabad — and we bridge that distance with scheduled
              freight and bulk consignments, so NCR manufacturers get the same certified, repeatable hardening as a local vendor.
            </p>
          </motion.section>

          {/* Faridabad ecosystem — unique local content */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// FARIDABAD ECOSYSTEM //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Built for Faridabad’s <span className="text-primary">OEM Supply Chain</span>
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Faridabad is one of North India’s largest auto-component and engineering hubs. The city’s industrial belt — from
                    the Faridabad–Ballabhgarh corridor to the NIT and Sector-24/25 clusters — is packed with Tier-1 and Tier-2 OEM
                    suppliers feeding passenger-vehicle, two-wheeler, tractor and commercial-vehicle assembly lines across Delhi NCR.
                  </p>
                  <p>
                    These suppliers machine high volumes of transmission gears, drive and propeller shafts, axles, crankshafts,
                    sprockets and bearing components. Every one of those parts needs a hard, wear-resistant surface with a tough,
                    ductile core — exactly what selective <strong>induction hardening</strong> delivers without the distortion and
                    long cycle times of furnace carburizing. For a high-throughput Faridabad line, that consistency is the difference
                    between a clean PPAP and a rejected lot.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Gear Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                    { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                    { title: 'Crankshaft Hardening', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
                    { title: 'Case Hardening', href: '/case-hardening-heat-treatment' },
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
                    alt="Induction hardening of automotive gears for a Faridabad OEM supplier at Thakur Industries Ludhiana"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Components we harden for Faridabad */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// WHAT WE HARDEN //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Bulk Components for <span className="text-primary">Faridabad Factories</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We process repeatable, high-volume batches for the auto-component and engineering OEM suppliers of Faridabad,
              Ballabhgarh and Palwal — with the documentation their customers’ incoming inspection demands.
            </p>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                'Transmission & Spur Gears',
                'Drive & Propeller Shafts',
                'Crankshaft Journals',
                'Rear & Front Axles',
                'Pinions, Splines & Sprockets',
                'Bearing Races & Bushes',
              ].map((item) => (
                <motion.div
                  key={item}
                  variants={scaleUp}
                  className="flex items-center gap-3 p-5 bg-secondary/30 rounded-2xl border border-border"
                >
                  <Boxes className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-bold text-foreground uppercase tracking-tight text-xs">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Logistics — 310 km freight + bulk consignment */}
          <section className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
              >
                {qcImage && (
                  <Image
                    src={qcImage.imageUrl}
                    alt="Batch-tagged hardened components prepared for bulk freight consignment from Ludhiana to Faridabad"
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
                  ~310 km, <span className="text-primary">Solved by Freight</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground font-medium">
                  <p>
                    Faridabad sits about <strong>310 km</strong> from our Ludhiana works on the Ludhiana–Ambala–Delhi NCR road
                    corridor. We turn that distance into a non-issue by handling Faridabad orders as consolidated bulk consignments:
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Components palletised and batch-tagged for clean incoming inspection',
                      'Dedicated road freight, typically next-day transit each way',
                      'Fixed pickup-and-return schedules for monthly OEM contracts',
                      'Consolidated freight to keep landed cost competitive at volume',
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

          {/* Why Faridabad OEM suppliers choose us */}
          <section className="py-20 border-t border-border">
            <p className="section-label text-center">// WHY CHOOSE US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Faridabad OEM Suppliers <span className="text-primary">Choose {SITE_NAME}</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Award, title: 'Batch Consistency', desc: 'Repeatable 58–62 HRC on every consignment, lot after lot.' },
                { icon: FileText, title: 'OEM Documentation', desc: 'Hardness, case-depth & traceability reports for PPAP audits.' },
                { icon: Boxes, title: 'Bulk Capacity', desc: 'Comfortable handling 500–2,000+ piece production lots.' },
                { icon: Truck, title: 'Freight Reliability', desc: 'Scheduled consignments on the 310 km Ludhiana–NCR corridor.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
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
              Hardening <span className="text-primary">Specifications</span>
            </motion.h2>
            <motion.div
              className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <table className="w-full text-left">
                <tbody className="text-sm md:text-base">
                  {[
                    ['Surface Hardness', '58–62 HRC (component surface)'],
                    ['Case Depth', '0.8 mm – 3.5 mm (controlled to spec)'],
                    ['Components', 'Gears, shafts, crankshafts, axles, pinions, sprockets'],
                    ['Steel Grades', 'EN8, EN19, EN24, 4140, 20MnCr5, EN36C'],
                    ['Distortion', 'Selective heating, minimal warp for precision parts'],
                    ['Batch Capacity', '500–2,000+ pieces per consignment'],
                    ['Logistics', 'Bulk freight, ~310 km Ludhiana → Faridabad'],
                    ['Turnaround', '4–7 working days door-to-door (incl. transit)'],
                    ['Documentation', 'HRC report, case-depth check, batch traceability'],
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

          {/* Pricing & Turnaround */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// PRICING & TURNAROUND //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Faridabad <span className="text-primary">Rates & Lead Time</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              Competitive rates for both trial batches and bulk OEM production, with freight consolidated across the consignment to
              keep landed cost low even at 310 km. Share your drawing and monthly volume for an exact quote within 24 hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk & repeat OEM consignments.' },
                { icon: Truck, title: 'Freight Handling', desc: 'Consolidated bulk consignments on the Ludhiana–Faridabad corridor.' },
                { icon: Clock, title: 'Turnaround', desc: '4–7 working days door-to-door; dedicated slots for monthly contracts.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your Faridabad Quote
                </a>
              </Button>
            </div>
          </section>

          {/* Nearby NCR locations + related services */}
          <section className="py-24 border-t border-border">
            <p className="section-label text-center">// ACROSS DELHI NCR //</p>
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              We Also Serve <span className="text-primary">Nearby Hubs</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {[
                { title: 'Induction Hardening Gurugram', href: '/induction-heat-treatment/gurugram', icon: MapPin, label: 'Gurugram, Haryana' },
                { title: 'Induction Hardening Delhi', href: '/induction-heat-treatment/delhi', icon: MapPin, label: 'Delhi NCR' },
                { title: 'Induction Hardening Noida', href: '/induction-heat-treatment/noida', icon: MapPin, label: 'Noida, UP' },
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

            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Related <span className="text-primary">Services</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Gear Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes, label: 'Transmission Gears' },
                { title: 'Shaft Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Drive Shafts' },
                { title: 'Crankshaft Hardening', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana', icon: History, label: 'Engine Components' },
                { title: 'Case Hardening Job Work', href: '/case-hardening-heat-treatment', icon: ShieldCheck, label: 'Surface Hardening' },
                { title: 'Induction Heat Treatment Guide', href: '/induction-heat-treatment', icon: Cpu, label: 'Main Service Hub' },
                { title: 'Get a Faridabad Quote', href: '/contact', icon: FileText, label: 'Contact Us' },
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
              Faridabad Hardening <span className="text-primary">FAQs</span>
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
