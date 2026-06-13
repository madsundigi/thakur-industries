'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
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
  Boxes,
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

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/sirhind`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I need induction hardening job work in Sirhind / Fatehgarh Sahib. Please find my drawing attached.');

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
    q: 'Do you offer induction hardening in Sirhind and Fatehgarh Sahib?',
    a: 'Yes. Thakur Industries serves the entire Sirhind and Fatehgarh Sahib industrial belt with precision induction hardening job work. Our hardening plant is in Ludhiana, roughly 65 km away, and we run a regular pickup-and-delivery route through the Mandi Gobindgarh steel belt so local agri-implement, food-processing and engineering units get fast, certified turnaround without setting up in-house heat treatment.',
  },
  {
    q: 'How far is your plant from Sirhind, and how does logistics work?',
    a: 'Our Ludhiana facility is about 65 km from Sirhind via the Ludhiana–Khanna–Sirhind GT Road corridor — typically a 75–90 minute drive. We coordinate consolidated pickups from Sirhind, Fatehgarh Sahib, Khanna and Mandi Gobindgarh so transport stays economical even for small batches. Share your drawing on WhatsApp and we will confirm the next collection slot for your area.',
  },
  {
    q: 'What components do Sirhind agricultural-implement units get hardened?',
    a: 'We routinely harden tillage tines, cultivator shovels, rotavator blades, harrow discs, plough shares, gear-box gears, splined shafts, sprockets and seed-drill components for Sirhind and Fatehgarh Sahib agri-implement makers. Wear faces are induction hardened to 55–62 HRC for longer field life while the core stays tough enough to survive rocky soil shock loads.',
  },
  {
    q: 'Can you harden food-processing and engineering machinery parts?',
    a: 'Yes. Food-processing units around Sirhind send us roller shafts, screw conveyors, knives, cam profiles and bearing journals; general engineering and fabrication shops send us pins, bushes, guide rails, dies and machine-tool spindles. We induction-harden the running surfaces to spec and leave the rest of the part soft and machinable.',
  },
  {
    q: 'What hardness and steels can you treat for Sirhind clients?',
    a: '58–62 HRC is typical on EN8, EN19, EN24, 4140 and 20MnCr5; agri wear parts in EN45/spring and boron steels reach 55–60 HRC. We confirm the achievable case depth (0.8–3.5 mm) and hardness for your exact grade before processing and supply a hardness report with every batch.',
  },
  {
    q: 'What is the turnaround time for Sirhind orders?',
    a: 'Standard turnaround is 2–4 working days from receipt of components and an approved spec, plus the short transit on our Sirhind–Ludhiana route. Urgent same-week jobs can be arranged for regular Fatehgarh Sahib clients, and bulk seasonal agri-implement runs are scheduled ahead of the sowing and harvest peaks.',
  },
  {
    q: 'Do you provide certified hardness reports for OEM supply?',
    a: 'Every batch ships with HRC verification, case-depth confirmation and dimensional checks documented for OEM traceability. This lets Sirhind and Mandi Gobindgarh suppliers meet tractor, implement and machinery audit requirements without maintaining their own metallurgical lab.',
  },
  {
    q: 'Why do Sirhind units choose Thakur Industries over local options?',
    a: 'Local units choose us for repeatable 58–62 HRC results, low-distortion selective hardening, certified reporting and a dependable collection route through the Mandi Gobindgarh steel belt. Sitting just ~65 km from Ludhiana, we combine big-city metallurgical capability with the responsiveness of a regional partner.',
  },
];

export default function SirhindPage() {
  const agriImage = PlaceHolderImages.find((img) => img.id === 'industryAgriculture');
  const qcImage = PlaceHolderImages.find((img) => img.id === 'processHardening');

  // Service schema — enriched with serviceType, offers, aggregateRating & local areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Sirhind',
    serviceType: 'Induction Hardening & Heat Treatment Job Work',
    url: `${PAGE_URL}/`,
    description:
      'Precision induction hardening in Sirhind & Fatehgarh Sahib for agricultural-implement, food-processing and engineering units in the Mandi Gobindgarh steel belt — 58–62 HRC, controlled case depth, certified reports, ~65 km from our Ludhiana plant.',
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
    areaServed: ['Sirhind', 'Fatehgarh Sahib', 'Mandi Gobindgarh', 'Khanna'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Induction hardening job work for Sirhind priced per kg or per piece. Request a custom quotation.',
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
          { name: 'Induction Hardening in Sirhind', href: '/induction-heat-treatment/sirhind' },
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
              <li className="text-primary">Sirhind</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Sirhind"
            description="Certified induction hardening job work for Sirhind & Fatehgarh Sahib — 58–62 HRC with controlled case depth and minimal distortion. Trusted by agri-implement, food-processing and engineering units across the Mandi Gobindgarh steel belt, served from our Ludhiana plant just ~65 km away."
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
                { icon: Truck, label: '~65 km from Ludhiana' },
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
                  <MessageSquare className="h-5 w-5" /> WhatsApp Sirhind
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
              Looking for dependable <strong>induction hardening in Sirhind</strong>? At <strong>{SITE_NAME}</strong>, our precision
              induction hardening job work raises wear faces to 58–62 HRC while keeping the core ductile enough to survive shock loads
              — ideal for the agricultural-implement, food-processing and engineering units of Sirhind and Fatehgarh Sahib. Sitting in
              the heart of the Mandi Gobindgarh steel belt and just ~65 km from our Ludhiana plant, your unit gets metropolitan
              metallurgical capability with regional-partner turnaround.
            </p>
          </motion.section>

          {/* LOCAL CONTENT — Sirhind / Fatehgarh Sahib industry */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// SIRHIND · FATEHGARH SAHIB //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Hardening for the <span className="text-primary">Sirhind Steel Belt</span>
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Sirhind and the surrounding Fatehgarh Sahib district form one of Punjab’s busiest light-engineering corridors. The
                    town sits directly inside the Mandi Gobindgarh steel belt — North India’s largest secondary steel and re-rolling
                    cluster — which feeds a dense network of agricultural-implement workshops, food-processing units and general
                    fabrication shops along the GT Road between Khanna and Sirhind.
                  </p>
                  <p>
                    These units roll out tillage tines, cultivator shovels, rotavator blades, harrow discs, plough shares, gear-box
                    gears, splined shafts and seed-drill parts — components that live or die on their surface wear resistance. That is
                    exactly where induction hardening earns its keep: a hard, fatigue-resistant skin over a tough, shock-absorbing core.
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
                    alt="Induction hardening in Sirhind for agricultural-implement tillage components — Thakur Industries"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-16 md:mt-20">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-6 leading-none">
                  Components We Harden for <span className="text-primary">Sirhind Units</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Tillage tines & cultivator shovels',
                    'Rotavator blades & harrow discs',
                    'Plough shares & seed-drill parts',
                    'Gear-box gears, sprockets & pinions',
                    'Splined & transmission shafts',
                    'Food-plant roller shafts & screw conveyors',
                    'Knives, cams & bearing journals',
                    'Pins, bushes, guide rails & dies',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-bold text-foreground uppercase tracking-tight text-xs">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="space-y-6 text-base md:text-lg text-muted-foreground font-medium"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              >
                <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-2 leading-none text-foreground">
                  Logistics From <span className="text-primary">~65 km Ludhiana</span>
                </h3>
                <p>
                  Our hardening plant is in Ludhiana, around 65 km from Sirhind along the Ludhiana–Khanna–Sirhind GT Road corridor — a
                  75–90 minute run. Rather than ask small workshops to absorb that transport, we operate consolidated pickup-and-delivery
                  loops that sweep through Sirhind, Fatehgarh Sahib, Khanna and the Mandi Gobindgarh mills, so even single-crate batches
                  move economically.
                </p>
                <p>
                  That logistics edge means a Fatehgarh Sahib implement maker can outsource heat treatment to us and still hit a 2–4 day
                  turnaround, complete with certified hardness reports — without the capital and compliance burden of running an in-house
                  furnace line.
                </p>
                <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm pt-2">
                  <MapPin className="h-5 w-5" /> Serving Sirhind · Fatehgarh Sahib · Mandi Gobindgarh · Khanna
                </div>
              </motion.div>
            </div>
          </section>

          {/* Why local units choose us */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <p className="section-label text-center">// WHY SIRHIND UNITS CHOOSE US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Built for the <span className="text-primary">Mandi Gobindgarh Belt</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Tractor, title: 'Agri-Implement Expertise', desc: 'Wear-tuned profiles for tines, blades, shares and discs that face abrasive Punjab soils season after season.' },
                { icon: Boxes, title: 'Engineering & Food-Plant Parts', desc: 'Selective hardening for shafts, conveyors, cams, knives and dies — running faces hard, rest left machinable.' },
                { icon: Truck, title: 'Consolidated Pickup Route', desc: 'Regular collection loop through Sirhind, Fatehgarh Sahib, Khanna and Mandi Gobindgarh keeps freight low.' },
                { icon: ShieldCheck, title: 'Certified Traceability', desc: 'HRC, case-depth and dimensional reports with every batch for tractor and OEM audit trails.' },
                { icon: Award, title: 'Repeatable 58–62 HRC', desc: 'Documented, consistent hardness batch after batch — no soft spots on critical wear faces.' },
                { icon: Clock, title: 'Fast 2–4 Day Turnaround', desc: 'Quick cycle plus a short Sirhind–Ludhiana transit keeps your production line moving.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="bg-card/50 p-8 rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <item.icon className="h-8 w-8 text-primary mb-6" />
                  <h3 className="font-bold text-xl mb-3 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
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
              Sirhind Hardening <span className="text-primary">Specifications</span>
            </motion.h2>
            <motion.div
              className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <table className="w-full text-left">
                <tbody className="text-sm md:text-base">
                  {[
                    ['Surface Hardness', '58–62 HRC (alloy & carbon steels); 55–60 HRC on agri wear parts'],
                    ['Case Depth', '0.8 mm – 3.5 mm (controlled to spec)'],
                    ['Steel Grades', 'EN8, EN19, EN24, 4140, 20MnCr5, EN45 / boron & spring steels'],
                    ['Typical Components', 'Tines, blades, shares, gears, shafts, conveyors, dies'],
                    ['Heating Temperature', '900–950 °C (induction)'],
                    ['Quench Medium', 'Polymer / water-based, controlled'],
                    ['Distance From Plant', '~65 km via Ludhiana–Khanna–Sirhind GT Road'],
                    ['Turnaround', '2–4 working days (standard) + transit'],
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

          {/* Materials We Harden — internal links to material-grade pages */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// MATERIALS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Steel <span className="text-primary">Grades</span> We Harden
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We induction-harden all common engineering and agri steels used across the Sirhind belt. Explore our dedicated
              material-grade pages for hardness, case depth and application detail:
            </p>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { grade: 'EN8', note: '080M40 carbon steel', href: '/induction-heat-treatment/en8-steel-induction-hardening' },
                { grade: 'EN19', note: '4140 Cr-Mo alloy', href: '/induction-heat-treatment/en19-steel-induction-hardening' },
                { grade: 'EN24', note: '4340 Ni-Cr-Mo alloy', href: '/induction-heat-treatment/en24-steel-hardening' },
                { grade: '4140', note: '42CrMo4 / SCM440', href: '/induction-heat-treatment/4140-steel-hardening' },
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

          {/* Process / QA split */}
          <section className="py-24 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
              >
                {qcImage && (
                  <Image
                    src={qcImage.imageUrl}
                    alt="Hardness testing after induction hardening for Sirhind engineering components at Thakur Industries Ludhiana"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Low-Distortion <span className="text-primary">Process</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground font-medium">
                  <p>Induction hardening heats only the running surface, not the whole part. For Sirhind agri and engineering work this means:</p>
                  <ul className="space-y-4">
                    {[
                      'Hard, fatigue-resistant wear faces with a tough core',
                      'Minimal warping — less straightening and re-grinding',
                      'Selective hardening so bores and threads stay machinable',
                      'Certified HRC & case-depth report with every batch',
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
              Sirhind <span className="text-primary">Rates & Lead Time</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive <strong>induction hardening rates</strong> for both prototype batches and bulk seasonal agri-implement
              runs. Final pricing depends on component weight, size, case depth, steel grade and quantity — share your drawing for an
              exact quote within 24 hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk and repeat orders from Sirhind units.' },
                { icon: FileText, title: 'Minimum Order', desc: 'No rigid minimum — single trial parts to multi-thousand-piece seasonal lots accepted.' },
                { icon: Clock, title: 'Turnaround', desc: 'Standard 2–4 working days; urgent same-week jobs for regular Fatehgarh Sahib clients.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your Sirhind Quote
                </a>
              </Button>
            </div>
          </section>

          {/* Related Services & nearby towns — internal linking */}
          <section className="py-24 border-t border-border">
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Related Services & <span className="text-primary">Nearby Towns</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Gear Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes, label: 'Tooth-by-tooth hardening' },
                { title: 'Shaft Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Transmission shafts' },
                { title: 'Case Hardening Job Work', href: '/case-hardening', icon: ShieldCheck, label: 'Carburizing & nitriding' },
                { title: 'Induction Heat Treatment Guide', href: '/induction-heat-treatment', icon: Cpu, label: 'Main service hub' },
                { title: 'Hardening in Mandi Gobindgarh', href: '/induction-heat-treatment/mandi-gobindgarh', icon: MapPin, label: 'Steel-belt cluster' },
                { title: 'Hardening in Khanna', href: '/induction-heat-treatment/khanna', icon: MapPin, label: 'On the GT Road route' },
                { title: 'Hardening in Patiala', href: '/induction-heat-treatment/patiala', icon: MapPin, label: 'Nearby district hub' },
                { title: 'Crankshaft Hardening', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana', icon: History, label: 'Engine components' },
                { title: 'Request a Quote', href: '/contact', icon: FileText, label: 'Send your drawing' },
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
              Sirhind Hardening <span className="text-primary">FAQs</span>
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
