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
  Phone,
  MessageSquare,
  History,
  Settings,
  Clock,
  Award,
  ShieldCheck,
  Star,
  MapPin,
  Truck,
  Boxes,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/khanna`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I am from Khanna and need induction hardening job work. Please find my drawing attached.');

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
    q: 'Do you offer induction hardening in Khanna?',
    a: 'Yes. Thakur Industries serves the entire Khanna industrial belt — including the grain-market machinery makers, rice mills and agricultural-implement units — with precision induction hardening job work. Our plant sits about 40 km away in Ludhiana, so collection and delivery to Khanna is quick and routine for us.',
  },
  {
    q: 'How far is your plant from Khanna and can you pick up the same day?',
    a: 'Our Ludhiana workshop is roughly 40 km from Khanna along the GT Road, a short run for our logistics. For regular Khanna clients we arrange same-day pickup of components and prompt return after hardening, which keeps your rice-sheller and machining lines moving.',
  },
  {
    q: 'Can you harden rice mill rollers and sheller parts from Khanna?',
    a: 'Absolutely. Rice-sheller rollers, emery/rubber roll shafts, polisher parts, paddy-separator components and conveyor shafts are common jobs for us. We raise the working surfaces to 58–62 HRC for abrasion resistance against husk and grit while keeping the core tough.',
  },
  {
    q: 'What components do Khanna agricultural-implement makers send for hardening?',
    a: 'Tine points, cultivator shovels, harrow discs, blade edges, gear teeth, splined shafts and sprockets are typical agri-implement parts. Selective induction hardening gives a hard wearing edge or surface without making the whole part brittle, so implements last longer in the field.',
  },
  {
    q: 'What is the turnaround time for Khanna jobs?',
    a: 'Standard turnaround is 2–4 working days after we receive the components and an approved specification. Because Khanna is so close to Ludhiana, transit adds very little time, and urgent same-week jobs can be arranged for regular clients.',
  },
  {
    q: 'What hardness and case depth can you achieve?',
    a: '58–62 HRC is typical on the working surface, with controlled case depth from 0.8 mm to 3.5 mm depending on the part and load. We supply HRC verification and case-depth checks with every batch for your records.',
  },
  {
    q: 'Which steel grades do you induction-harden?',
    a: 'EN8, EN19 (4140), EN24 (4340), 20MnCr5, EN36C and similar medium-carbon and alloy steels respond well. A carbon content of roughly 0.35–0.60% gives the best hardness response. Share your material grade and we will confirm the achievable hardness.',
  },
  {
    q: 'How do I get a quote for induction hardening in Khanna?',
    a: 'Send your component drawing and quantity on WhatsApp or call us, and we will return an exact quotation — priced per kilogram or per piece — usually within 24 hours. Bulk and repeat orders from Khanna units receive better per-piece rates.',
  },
];

export default function KhannaPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'industryAgriculture');
  const qcImage = PlaceHolderImages.find((img) => img.id === 'processHardening');

  // Service / LocalBusiness schema — enriched with offers, aggregateRating & local areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Khanna',
    serviceType: 'Induction Hardening & Heat Treatment Job Work',
    url: `${PAGE_URL}/`,
    description:
      'Precision induction hardening in Khanna, Punjab — 58–62 HRC for rice-mill rollers, sheller parts, agricultural-implement edges, shafts and gears. Same-day pickup from our Ludhiana plant just ~40 km away.',
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
    areaServed: ['Khanna', 'Mandi Gobindgarh', 'Samrala', 'Sirhind'],
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
          { name: 'Induction Hardening in Khanna', href: '/induction-heat-treatment/khanna' },
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
              <li className="text-primary">Khanna</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Khanna"
            description="Precision induction hardening job work for Khanna, Punjab — 58–62 HRC for rice-mill rollers, sheller parts, agricultural-implement edges, shafts and gears. Our Ludhiana plant is just ~40 km away, enabling same-day pickup."
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
                { icon: Truck, label: '~40 km · Same-Day Pickup' },
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
                  <MessageSquare className="h-5 w-5" /> WhatsApp Khanna
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
              Searching for dependable <strong>induction hardening in Khanna</strong>? At <strong>{SITE_NAME}</strong>, our
              precision induction hardening job work raises working surfaces to 58–62 HRC while keeping the core tough enough to
              absorb shock and vibration. Home to Asia’s largest grain market, Khanna runs on rice mills, agricultural-implement
              makers and light engineering units — and our Ludhiana plant sits just ~40 km away, close enough for same-day pickup
              and fast return.
            </p>
          </motion.section>

          {/* LOCAL CONTENT — Khanna industry context */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// KHANNA, PUNJAB //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Built for Khanna’s <span className="text-primary">Grain-Market Industry</span>
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                  <p>
                    Khanna is famous across the country for hosting <strong>Asia’s largest grain market</strong>, and that single
                    fact shapes its entire engineering ecosystem. Around the mandi sit dozens of <strong>rice mills</strong>,
                    paddy-processing plants, <strong>agricultural-implement manufacturers</strong> and light-engineering workshops —
                    all of which run on metal parts that wear out fast against husk, grit, soil and grain. That is exactly where
                    our induction hardening keeps Khanna’s machinery running.
                  </p>
                  <p>
                    For the town’s <strong>rice mills and shellers</strong>, we routinely harden emery and rubber-roll shafts,
                    <strong> rice-sheller rollers</strong>, polisher components, paddy-separator parts, elevator and conveyor
                    shafts, and the sprockets and chains that drive them. The abrasive husk-and-grit environment chews through
                    untreated steel, so a hardened 58–62 HRC working surface dramatically extends roller and shaft life between
                    rebuilds — and reduces unplanned downtime during the busy procurement season.
                  </p>
                  <p>
                    Khanna’s <strong>agricultural-implement units</strong> send us tine points, cultivator shovels, harrow and
                    cutting discs, blade edges, splined drive shafts, gear teeth and sprockets. Selective induction hardening lets
                    us put a hard, wear-resistant edge or surface exactly where the soil contact happens, while the body of the
                    implement stays ductile and shock-tolerant — so tools survive stony Punjab fields without cracking.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="relative h-72 md:h-[460px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
              >
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt="Induction hardening in Khanna for rice-mill rollers and agricultural-implement parts — Thakur Industries Ludhiana"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>

            {/* Parts we harden for Khanna */}
            <motion.div
              className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                'Rice-Sheller Rollers',
                'Emery / Rubber Roll Shafts',
                'Paddy-Separator Parts',
                'Cultivator Tines & Shovels',
                'Harrow & Cutting Discs',
                'Splined Drive Shafts',
                'Gear Teeth & Pinions',
                'Conveyor & Elevator Shafts',
                'Sprockets & Drive Chains',
              ].map((item) => (
                <motion.div key={item} variants={scaleUp}>
                  <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border h-full">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-bold text-foreground uppercase tracking-tight text-xs">{item}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Proximity / Logistics — the ~40 km hook */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// JUST ~40 KM AWAY //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Ludhiana to Khanna — <span className="text-primary">Same-Day Pickup</span>
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                  <p>
                    One of the biggest advantages for Khanna manufacturers is simple geography. Our hardening plant in Ludhiana is
                    only about <strong>40 km from Khanna</strong> along the GT Road — a short, predictable run for our logistics.
                    That proximity means we can collect your components and return finished, hardness-tested parts on a tight
                    schedule, often the <strong>same day</strong> for regular clients.
                  </p>
                  <p>
                    For rice mills working against a procurement-season deadline, or implement makers fulfilling a dealer order,
                    that turnaround difference is real money. You get full in-house induction capacity, certified hardness reports
                    and documented case-depth checks — without sending parts on a long, slow journey to a distant treater.
                  </p>
                  <p>
                    We also serve the wider belt around Khanna, including the steel-and-rerolling hub of{' '}
                    <Link href="/induction-heat-treatment/mandi-gobindgarh" className="text-primary font-bold hover:underline">Mandi Gobindgarh</Link>,{' '}
                    <Link href="/induction-heat-treatment/samrala" className="text-primary font-bold hover:underline">Samrala</Link>{' '}
                    and historic{' '}
                    <Link href="/induction-heat-treatment/sirhind" className="text-primary font-bold hover:underline">Sirhind</Link>{' '}
                    — so a single trusted hardening partner covers your whole region.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                {[
                  { icon: MapPin, title: '~40 km Proximity', desc: 'A short GT Road run between Ludhiana and Khanna.' },
                  { icon: Truck, title: 'Same-Day Pickup', desc: 'Prompt collection and return for regular Khanna clients.' },
                  { icon: Clock, title: '2–4 Day Turnaround', desc: 'Fast standard delivery; urgent jobs on request.' },
                  { icon: ShieldCheck, title: 'Certified Reports', desc: 'HRC and case-depth documentation with every batch.' },
                ].map((item, i) => (
                  <motion.div key={i} variants={scaleUp} className="bg-card/60 p-7 rounded-2xl border border-border group hover:border-primary/30 transition-all">
                    <item.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Why Khanna units choose us */}
          <section className="py-20 border-t border-border">
            <p className="section-label text-center">// WHY KHANNA CHOOSES US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Khanna Units Trust <span className="text-primary">{SITE_NAME}</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Award, title: 'Consistent 58–62 HRC', desc: 'Repeatable hardness on rollers, shafts and edges, batch after batch.' },
                { icon: Truck, title: 'Local Proximity', desc: 'Just ~40 km away with same-day pickup for Khanna units.' },
                { icon: History, title: 'Agri & Rice-Mill Expertise', desc: 'Hands-on knowledge of sheller, paddy and implement parts.' },
                { icon: ShieldCheck, title: 'Documented Quality', desc: 'HRC and case-depth reports for every job you send.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Specifications */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// SPECIFICATIONS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Khanna Hardening <span className="text-primary">Specifications</span>
            </motion.h2>
            <motion.div
              className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <table className="w-full text-left">
                <tbody className="text-sm md:text-base">
                  {[
                    ['Surface Hardness', '58–62 HRC (working surface)'],
                    ['Case Depth', '0.8 mm – 3.5 mm (controlled to spec)'],
                    ['Typical Parts', 'Sheller rollers, roll shafts, implement edges, gears'],
                    ['Steel Grades', 'EN8, EN19, EN24, 4140, 20MnCr5, EN36C'],
                    ['Heating Temperature', '900–950 °C (induction)'],
                    ['Quench Medium', 'Polymer / water-based, controlled'],
                    ['Proximity to Khanna', '~40 km from our Ludhiana plant'],
                    ['Turnaround', '2–4 working days; same-day pickup available'],
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

          {/* Process + QC image */}
          <section className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
              >
                {qcImage && (
                  <Image
                    src={qcImage.imageUrl}
                    alt="Hardness testing of induction-hardened Khanna rice-mill and implement parts after treatment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Controlled, <span className="text-primary">Low-Distortion</span> Hardening
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground font-medium">
                  <p>Induction hardening heats only the working surface, not the whole part. For Khanna’s mills and implement makers this means:</p>
                  <ul className="space-y-4">
                    {[
                      'High wear resistance against husk, grit and soil',
                      'Tough, shock-tolerant cores that resist cracking',
                      'Minimal distortion — less post-process grinding',
                      'Certified HRC and case-depth reports per batch',
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

          {/* Related Services — internal linking */}
          <section className="py-24 border-t border-border">
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Related <span className="text-primary">Services</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Gear Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes, label: 'Spur, Helical & Bevel Gears' },
                { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Roll & Transmission Shafts' },
                { title: 'Case Hardening', href: '/case-hardening', icon: Cpu, label: 'Carburising & Case Depth' },
                { title: 'Induction Heat Treatment Guide', href: '/induction-heat-treatment', icon: Zap, label: 'Main Service Hub' },
                { title: 'Mandi Gobindgarh', href: '/induction-heat-treatment/mandi-gobindgarh', icon: MapPin, label: 'Steel & Rerolling Belt' },
                { title: 'Samrala & Sirhind', href: '/induction-heat-treatment/samrala', icon: MapPin, label: 'Nearby Town Services' },
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
              Khanna Hardening <span className="text-primary">FAQs</span>
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
