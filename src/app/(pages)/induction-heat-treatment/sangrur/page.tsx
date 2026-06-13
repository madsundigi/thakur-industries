'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Phone,
  MessageSquare,
  Truck,
  MapPin,
  Settings,
  Boxes,
  IndianRupee,
  Award,
  ShieldCheck,
  Star,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/sangrur`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent(
    'Hello Thakur Industries, I am in Sangrur and need induction hardening job work. Please arrange a scheduled pickup and share a quote. My drawing is attached.'
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
    q: 'Do you offer induction hardening in Sangrur?',
    a: 'Yes. We serve Sangrur, Dhuri, Malerkotla and Patiala from our Ludhiana facility, roughly 75 km away. Sangrur components are collected on our scheduled pickup route, hardened to specification at our workshop and returned with a certified hardness report. There is no need for your unit to own any heat-treatment plant.',
  },
  {
    q: 'How does pickup and delivery work for Sangrur units?',
    a: 'We run a scheduled pickup–delivery route between Ludhiana and the Sangrur belt. Share your job on WhatsApp, we confirm a collection slot, your components travel batched to keep logistics economical, and finished parts come back with documentation. Typical door-to-door cycle is 3–5 working days depending on batch size.',
  },
  {
    q: 'Which agricultural-machinery parts do you harden for Sangrur makers?',
    a: 'We routinely harden tractor-implement shafts, gear-box gears and pinions, rotavator blades and gear hubs, cultivator tynes, thresher and chaff-cutter shafts, sprockets and splined hubs. These are exactly the wear-critical parts that Sangrur’s agri-machinery and implement units depend on.',
  },
  {
    q: 'Can you harden cycle and light-engineering parts in small batches?',
    a: 'Yes. Sangrur’s cycle-parts and light-engineering units often send axles, freewheel bodies, pedal spindles, small gears, levers, cams and fasteners. We accept both small trial batches and bulk lots, with better per-piece rates on volume orders.',
  },
  {
    q: 'What surface hardness can you achieve?',
    a: 'Typically 58–62 HRC on the hardened surface with a controlled case depth of 0.8–3.5 mm, depending on the steel grade and the part. EN8, EN19, EN24, 4140 and 20MnCr5 are the grades most commonly sent from the Sangrur belt.',
  },
  {
    q: 'How much does induction hardening cost for a Sangrur order?',
    a: 'Pricing is per kilogram or per piece and depends on part weight, case depth, steel grade and quantity. Batched pickups from Sangrur keep freight low, so even small units get competitive rates. Send your drawing and quantity on WhatsApp for an exact quotation within 24 hours.',
  },
  {
    q: 'Do you provide a hardness test certificate with each batch?',
    a: 'Yes. Every batch ships with HRC verification, case-depth confirmation where required and a dimensional check. This gives Sangrur OEMs and implement assemblers documented quality for their own buyers and warranty records.',
  },
  {
    q: 'Why should a Sangrur unit choose Thakur Industries over a local option?',
    a: 'Most light-engineering and agri units in Sangrur have no in-house induction line. We bring certified, repeatable 58–62 HRC hardening, scheduled logistics from Ludhiana and documented metallurgy — without the capital cost of owning equipment. Our Ludhiana base also lets us serve Dhuri, Malerkotla and Patiala on the same route.',
  },
];

export default function SangrurPage() {
  const agriImage = PlaceHolderImages.find((img) => img.id === 'industryAgriculture');
  const shaftImage = PlaceHolderImages.find((img) => img.id === 'appShaftHardening');

  // Service schema — enriched with serviceType, offers, aggregateRating & local areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Sangrur',
    serviceType: 'Induction Hardening Job Work',
    url: `${PAGE_URL}/`,
    description:
      'Induction hardening in Sangrur for agricultural machinery, cycle parts and light-engineering components — 58–62 HRC, controlled case depth, certified hardness reports. Scheduled pickup from our Ludhiana facility, ~75 km away.',
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
    areaServed: ['Sangrur', 'Dhuri', 'Malerkotla', 'Patiala'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Induction hardening job work priced per kg or per piece, with scheduled pickup from Sangrur. Request a custom quotation.',
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
          { name: 'Sangrur', href: '/induction-heat-treatment/sangrur' },
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
              <li className="text-primary">Sangrur</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Sangrur"
            description="Certified induction hardening for Sangrur’s agricultural-machinery, cycle-parts and light-engineering units — 58–62 HRC with controlled case depth, collected on a scheduled pickup route from our Ludhiana facility, around 75 km away."
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
                { icon: ShieldCheck, label: 'Certified Reports' },
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
                  <MessageSquare className="h-5 w-5" /> WhatsApp Sangrur
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
              Looking for dependable <strong>induction hardening in Sangrur</strong>? At <strong>{SITE_NAME}</strong>, we give
              Sangrur’s agricultural-machinery, cycle-parts and light-engineering units certified surface hardening to 58–62 HRC
              without the capital cost of owning a heat-treatment plant. Components are collected on a scheduled pickup route from
              our <strong>Ludhiana facility, roughly 75 km away</strong>, hardened to specification and returned with documented
              hardness reports.
            </p>
          </motion.section>

          {/* Sangrur industrial context — UNIQUE LOCAL CONTENT */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// SANGRUR, PUNJAB //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Built for Sangrur’s <span className="text-primary">Engineering Belt</span>
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Sangrur sits at the heart of Malwa’s farm economy, and its industry reflects that. The district is home to a
                    busy cluster of <strong>agricultural-machinery and implement makers</strong>, a steady base of{' '}
                    <strong>cycle-parts manufacturers</strong> feeding the wider Ludhiana–Malerkotla supply chain, and dozens of{' '}
                    <strong>light-engineering and fabrication units</strong> in and around Sangrur, Dhuri and Malerkotla. These
                    workshops turn out high volumes of wear-critical components, but very few of them run an in-house induction
                    line — which is exactly the gap we fill.
                  </p>
                  <p>
                    Farm equipment lives a hard life: rotavator blades cut abrasive soil, thresher and chaff-cutter shafts spin
                    under shock loads, and implement gear hubs grind season after season. Untreated, these parts wear out fast and
                    come back as warranty complaints. Selective <strong>induction hardening</strong> puts a tough, wear-resistant
                    skin exactly where it is needed while leaving the core tough enough to absorb impact — the single most
                    cost-effective way to extend the service life of agricultural and cycle components made in Sangrur.
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
                    alt="Induction hardening in Sangrur for agricultural machinery and farm-implement components"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Components we harden for Sangrur */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// COMPONENTS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Sangrur Parts We <span className="text-primary">Harden</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              From tractor implements to cycle drivetrains and small fabricated assemblies, we harden the components Sangrur’s
              units depend on most:
            </p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { title: 'Agricultural Machinery', items: 'Rotavator blades & gear hubs, cultivator tynes, implement gearbox gears, PTO shafts' },
                { title: 'Cycle Parts', items: 'Axles, freewheel bodies, pedal spindles, small gears, chain sprockets' },
                { title: 'Light Engineering', items: 'Shafts, pins, cams, levers, splined hubs, fasteners and fabricated assemblies' },
              ].map((card) => (
                <motion.div key={card.title} variants={scaleUp} className="p-8 bg-secondary/30 rounded-2xl border border-border hover:border-primary/30 transition-all">
                  <Boxes className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-black uppercase italic tracking-tighter mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{card.items}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Logistics from Ludhiana — UNIQUE LOCAL CONTENT */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
              >
                {shaftImage && (
                  <Image
                    src={shaftImage.imageUrl}
                    alt="Induction hardened shafts ready for scheduled delivery from Ludhiana to Sangrur"
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
                  ~75 km from <span className="text-primary">Ludhiana</span>
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Our induction workshop is in Ludhiana, about 75 km from Sangrur along a well-connected highway corridor. That
                    proximity lets us run a <strong>scheduled pickup and delivery route</strong> through the Sangrur, Dhuri and
                    Malerkotla belt rather than treating each job as a one-off courier run.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Confirm your job on WhatsApp and we book a collection slot',
                      'Components travel batched to keep freight per-piece low',
                      'Hardened to spec at our Ludhiana facility with full QC',
                      'Returned with HRC and case-depth documentation, 3–5 day cycle',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    For Sangrur units this means certified metallurgy without buying or running any equipment — and because the
                    same route serves <Link href="/induction-heat-treatment/dhuri" className="text-primary font-bold hover:underline">Dhuri</Link>,{' '}
                    <Link href="/induction-heat-treatment/malerkotla" className="text-primary font-bold hover:underline">Malerkotla</Link> and{' '}
                    <Link href="/induction-heat-treatment/patiala" className="text-primary font-bold hover:underline">Patiala</Link>, your batches
                    move economically.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Why Sangrur units choose us */}
          <section className="py-20 border-t border-border">
            <p className="section-label text-center">// WHY CHOOSE US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Sangrur Units Choose <span className="text-primary">{SITE_NAME}</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Award, title: 'Consistent 58–62 HRC', desc: 'Repeatable hardness on every agri and cycle component, batch after batch.' },
                { icon: ShieldCheck, title: 'Documented Quality', desc: 'HRC and case-depth certificates with every batch for your buyers.' },
                { icon: Truck, title: 'Scheduled Logistics', desc: 'Batched pickup–delivery on the Sangrur route from Ludhiana, ~75 km.' },
                { icon: IndianRupee, title: 'No Plant Cost', desc: 'Certified hardening as job work — no capital outlay for your unit.' },
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
                    ['Surface Hardness', '58–62 HRC (controlled to spec)'],
                    ['Case Depth', '0.8 mm – 3.5 mm'],
                    ['Common Parts', 'Implement shafts, gears, rotavator blades, cycle axles, sprockets'],
                    ['Steel Grades', 'EN8, EN19, EN24, 4140, 20MnCr5'],
                    ['Service Area', 'Sangrur, Dhuri, Malerkotla, Patiala'],
                    ['Logistics', 'Scheduled pickup from Ludhiana (~75 km)'],
                    ['Turnaround', '3–5 working days door-to-door (batch-dependent)'],
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
            <div className="flex justify-center mt-10">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-black uppercase italic tracking-tight">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" /> Get Your Sangrur Quote
                </a>
              </Button>
            </div>
          </section>

          {/* Related Services — internal linking */}
          <section className="py-24 border-t border-border">
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Related <span className="text-primary">Services</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Gear Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes, label: 'Spur, Helical & Bevel' },
                { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Transmission Shafts' },
                { title: 'Case Hardening', href: '/case-hardening', icon: ShieldCheck, label: 'Carburising Process' },
                { title: 'Induction Heat Treatment', href: '/induction-heat-treatment', icon: Cpu, label: 'Main Service Hub' },
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

          {/* Nearby towns we serve */}
          <section className="py-16 border-t border-border">
            <p className="section-label text-center">// NEARBY TOWNS //</p>
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-10 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Also Serving <span className="text-primary">Around Sangrur</span>
            </motion.h2>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
              {[
                { name: 'Dhuri', href: '/induction-heat-treatment/dhuri' },
                { name: 'Malerkotla', href: '/induction-heat-treatment/malerkotla' },
                { name: 'Patiala', href: '/induction-heat-treatment/patiala' },
              ].map((town) => (
                <Link
                  key={town.name}
                  href={town.href}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-secondary/30 border border-border rounded-full font-black uppercase italic tracking-tight text-sm hover:border-primary/50 hover:text-primary transition-all"
                >
                  <MapPin className="h-4 w-4 text-primary" /> {town.name}
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
              Sangrur Hardening <span className="text-primary">FAQs</span>
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
            <FileText className="h-4 w-4" /> Quote
          </a>
        </div>
      </div>
    </>
  );
}
