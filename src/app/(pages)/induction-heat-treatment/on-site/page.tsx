
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Truck,
  Phone,
  MessageSquare,
  Clock,
  IndianRupee,
  Award,
  ShieldCheck,
  Star,
  MapPin,
  Settings,
  Gauge,
  FileText,
  Cpu,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/on-site`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent(
    'Hello, I need on-site induction hardening service for large components at our plant. Please share details and a quotation.'
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
    q: 'When should I choose on-site induction hardening instead of workshop hardening?',
    a: 'On-site induction hardening is the right choice when a component is too large or too heavy to transport safely — crankshafts over 2.5 m, mill rollers, press beds, slewing rings and fixed machinery — or when shutdown time must be kept to a minimum. We bring our mobile induction equipment to your Punjab, Haryana or Delhi NCR facility and harden the part in place, eliminating transit risk and dismantling.',
  },
  {
    q: 'What is the maximum component size you can harden on-site?',
    a: 'There is effectively no upper size limit for our on-site induction hardening service. Because the work is done in situ with portable generators and application-specific coils, we routinely handle mill rollers several metres long, large ring and girth gears, slewing rings and full machine beds. Share your component dimensions and weight and we will confirm the coil and mobilisation plan.',
  },
  {
    q: 'What is the geographic range for your on-site induction hardening services?',
    a: 'We cover all of Punjab, Haryana, Himachal Pradesh and Delhi NCR, and travel across North India for larger projects. Contact us with your location and component details for scheduling and mobilisation costs.',
  },
  {
    q: 'How is on-site induction hardening priced?',
    a: 'On-site hardening is quoted on a project basis. Pricing combines the hardened length or surface area, required case depth, number of components, and a mobilisation charge that covers travel, equipment transport and on-site setup for your location. Multi-component shutdowns and repeat jobs receive better rates. Send your drawing and site address for an exact quotation.',
  },
  {
    q: 'How long does an on-site induction hardening job take?',
    a: 'A typical on-site session for 10–50 components takes 1–2 days including setup, processing and testing. Large shutdowns with hundreds of components are scheduled over multiple days. We work around your production shifts to minimise downtime.',
  },
  {
    q: 'What components can be hardened on-site at our factory?',
    a: 'Large crankshafts, mill rollers and press rollers, machine bed guideways and ways, large ring and girth gears, slewing rings, crane wheels, spindles and lathe beds — any component where transportation would risk damage, delay or excess cost.',
  },
  {
    q: 'What equipment do you bring for on-site hardening jobs?',
    a: 'We deploy portable induction generators (25–300 kW), application-specific coils, integrated quench systems and portable Rockwell hardness testers to verify quality on-site before leaving your facility.',
  },
];

export default function OnSiteHardeningPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'appShaftHardening');
  const processImage = PlaceHolderImages.find((img) => img.id === 'processHardening');

  // Service schema — enriched with serviceType, offers, aggregateRating & wider areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'On-Site Induction Hardening Service',
    serviceType: 'Mobile / In-Situ Induction Hardening for Large Components',
    url: `${PAGE_URL}/`,
    description:
      'On-site induction hardening service — mobile, in-situ surface hardening of large components such as mill rollers, slewing rings, large ring gears, crane wheels and machine beds at the customer plant across North India.',
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
    areaServed: ['Punjab', 'Haryana', 'Delhi NCR', 'Himachal Pradesh', 'North India'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'On-site induction hardening priced per project, by hardened area plus mobilisation. Request a custom quotation.',
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
          { name: 'On-Site Induction Hardening Service', href: '/induction-heat-treatment/on-site' },
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
              <li className="text-primary">On-Site Hardening</li>
            </ol>
          </nav>

          <PageHeader
            title="On-Site Induction Hardening"
            highlightedWord="Service"
            description="Mobile, in-situ induction hardening for large components — mill rollers, slewing rings, large ring gears, crane wheels and machine beds — hardened at your plant across Punjab, Haryana, Delhi NCR and North India."
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
                { icon: Truck, label: 'Mobile Units' },
                { icon: ShieldCheck, label: 'Zero Transit Risk' },
                { icon: Award, label: '58–62 HRC On-Site' },
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
                  <Phone className="h-5 w-5" /> Call for a Site Visit
                </a>
              </Button>
              <Button asChild size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white font-black uppercase italic tracking-tight border-none">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" /> WhatsApp Us
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
              Need a dependable <strong>on-site induction hardening service</strong> for components too big to ship? At{' '}
              <strong>{SITE_NAME}</strong>, our <strong>mobile induction hardening</strong> units bring precision surface
              hardening directly to your plant. We harden large rollers, bed ways, slewing rings, large ring gears and heavy
              forgings in place across Ludhiana and Punjab — providing genuine <strong>in-situ hardening service</strong> that
              eliminates transport logistics, transit damage and costly dismantling for massive industrial components.
            </p>
          </motion.section>

          {/* Efficiency at your Facility — PRESERVED original section, expanded */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <motion.div className="space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
                  Efficiency at your <span className="text-primary">Facility</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  Large rollers, bed ways, and heavy machine components are difficult to transport. <strong>{SITE_NAME}</strong>{' '}
                  provides mobile <strong>on-site induction heat treatment</strong> across Ludhiana and Punjab, bringing precision
                  technology to your floor. Our portable generators and custom coils deliver the same controlled 58–62 HRC case you
                  would expect from our workshop — without the part ever leaving your premises.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Large Rollers', 'Machine Bed Ways', 'Industrial Forgings', 'Heavy Gears'].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                      <Truck className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-bold text-foreground uppercase tracking-tight text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground font-medium">
                  See our full workshop capabilities in the{' '}
                  <Link href="/induction-heat-treatment" className="text-primary hover:underline font-bold">
                    main induction heat treatment guide
                  </Link>
                  , or explore precision{' '}
                  <Link href="/induction-heat-treatment/induction-hardening-gears-ludhiana" className="text-primary hover:underline font-bold">
                    gear hardening in Ludhiana
                  </Link>{' '}
                  and{' '}
                  <Link href="/induction-heat-treatment/induction-hardening-shafts-ludhiana" className="text-primary hover:underline font-bold">
                    shaft hardening
                  </Link>{' '}
                  for parts you can send to us.
                </p>
              </motion.div>

              <motion.div
                className="p-8 bg-secondary/20 rounded-3xl border border-primary/10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
              >
                <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Mobile Unit Perks</h3>
                <ul className="space-y-4 mb-8">
                  {['Reduced Lead Times', 'Zero Transit Risk for Components', 'Immediate Quality Inspection', 'No Dismantling of Fixed Machinery'].map((perk) => (
                    <li key={perk} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-medium">{perk}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative h-44 md:h-52 rounded-2xl overflow-hidden border border-primary/20 mb-8">
                  {heroImage && (
                    <Image
                      src={heroImage.imageUrl}
                      alt="Mobile on-site induction hardening of a large industrial roller at the customer plant by Thakur Industries"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <Button asChild className="w-full bg-primary font-black uppercase italic py-6">
                  <Link href="/contact">Book Mobile Unit</Link>
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Large Components Suited to On-Site */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// LARGE COMPONENTS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Components Suited to <span className="text-primary">On-Site Hardening</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              Our <strong>portable induction hardening</strong> service is purpose-built for heavy, oversized and fixed parts that
              are impractical to move. If a component is large, mounted in a line, or would be at risk in transit, on-site hardening
              is almost always the better route.
            </p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { title: 'Mill Rollers', desc: 'Long steel and rubber mill rolls hardened along the barrel without removal from the mill stand.' },
                { title: 'Slewing Rings', desc: 'Raceways on large slewing bearings hardened in situ for cranes, excavators and turntables.' },
                { title: 'Large Ring & Girth Gears', desc: 'Big ring and girth gears beyond workshop diameter, hardened tooth-by-tooth on location.' },
                { title: 'Crane Wheels', desc: 'Tread and flange hardening of EOT crane wheels and rail wheels for long service life.' },
                { title: 'Machine Ways & Beds', desc: 'Lathe beds, planer ways and press guideways hardened on the machine to preserve alignment.' },
                { title: 'Heavy Forgings & Shafts', desc: 'Oversized forgings, press rollers and large shafts that cannot be safely shipped.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="p-6 bg-secondary/30 rounded-2xl border border-border group hover:border-primary/30 transition-all h-full">
                  <Gauge className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* How On-Site Works — process */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative h-80 md:h-[420px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}
              >
                {processImage && (
                  <Image
                    src={processImage.imageUrl}
                    alt="Portable induction generator and coil set up for in-situ hardening of a large component on the customer floor"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}>
                <p className="section-label">// PROCESS //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  How <span className="text-primary">On-Site Works</span>
                </h2>
                <ol className="space-y-6">
                  {[
                    { t: 'Survey & Planning', d: 'We review your component drawings, hardness spec and site layout, then plan the coil, power and mobilisation.' },
                    { t: 'Mobilisation', d: 'Portable induction generators (25–300 kW), coils and quench systems are transported and set up on your floor.' },
                    { t: 'In-Situ Hardening', d: 'Application-specific coils heat the surface to 900–950 °C with controlled quenching — only the target zone, minimal distortion.' },
                    { t: 'On-Site Testing & Sign-Off', d: 'Portable Rockwell testers verify 58–62 HRC and case depth on location before we demobilise — you keep full documentation.' },
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-10 h-10 shrink-0 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary font-black">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-black uppercase italic tracking-tight text-foreground mb-1">{step.t}</h3>
                        <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed">{step.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </motion.div>
            </div>
          </section>

          {/* Technical Specifications Table */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// SPECIFICATIONS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              On-Site Hardening <span className="text-primary">Specifications</span>
            </motion.h2>
            <motion.div
              className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <table className="w-full text-left">
                <tbody className="text-sm md:text-base">
                  {[
                    ['Surface Hardness', '58–62 HRC (verified on-site)'],
                    ['Case Depth', '0.8 mm – 4.0 mm (controlled to spec)'],
                    ['Component Size', 'No practical limit — hardened in situ'],
                    ['Typical Components', 'Mill rollers, slewing rings, ring/girth gears, crane wheels, machine beds'],
                    ['Portable Generators', '25–300 kW induction power on-site'],
                    ['Heating Temperature', '900–950 °C (induction)'],
                    ['Quench Medium', 'Polymer / water-based, integrated portable system'],
                    ['Coverage Area', 'Punjab, Haryana, Himachal Pradesh, Delhi NCR & North India'],
                    ['Testing', 'On-site portable Rockwell HRC & case-depth verification'],
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
              On-Site Pricing <span className="text-primary">& Turnaround</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              On-site jobs are quoted per project. Final pricing combines the hardened length or area, required case depth, number of
              components and a mobilisation charge for your location — share your drawing and site address for an exact quote within
              24 hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per hardened area plus a mobilisation charge; reduced rates on multi-component shutdowns and repeat work.' },
                { icon: MapPin, title: 'Mobilisation', desc: 'Covers travel, equipment transport and on-site setup across Punjab, Haryana and Delhi NCR.' },
                { icon: Clock, title: 'Turnaround', desc: '1–2 days for 10–50 components; large shutdowns scheduled around your production shifts.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your On-Site Quote
                </a>
              </Button>
            </div>
          </section>

          {/* Why Choose On-Site — trust / E-E-A-T */}
          <section className="py-20 border-t border-border">
            <p className="section-label text-center">// WHY ON-SITE //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Choose <span className="text-primary">On-Site Hardening</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Truck, title: 'No Transport Hassle', desc: 'Skip heavy haulage, cranage and the risk of damaging massive parts in transit.' },
                { icon: ShieldCheck, title: 'Zero Transit Risk', desc: 'The component never leaves your floor, so dimensional integrity is preserved.' },
                { icon: Clock, title: 'Minimal Downtime', desc: 'We work around your shifts and shutdowns to keep your line moving.' },
                { icon: Award, title: 'Workshop-Grade Quality', desc: 'Consistent 58–62 HRC with on-site HRC and case-depth verification.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Equipment We Bring — quality assurance */}
          <section className="py-20 border-t border-border">
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-16 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Equipment We <span className="text-primary">Bring On-Site</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Zap, title: 'Portable Generators', desc: '25–300 kW mobile induction power matched to the component.' },
                { icon: Settings, title: 'Application Coils', desc: 'Custom and contour-following coils for rollers, gears and ways.' },
                { icon: Gauge, title: 'Integrated Quench', desc: 'Portable polymer/water quench systems for controlled cooling.' },
                { icon: FileText, title: 'On-Site Testing', desc: 'Portable Rockwell testers and full traceability documentation.' },
              ].map((step, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-8 bg-card rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <step.icon className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold uppercase italic tracking-tighter mb-3">{step.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Related Services / Clusters — PRESERVED original links, expanded */}
          <section className="py-24 border-t border-border">
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Related <span className="text-primary">Services</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Shaft Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Drive & transmission shafts' },
                { title: 'Gear Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: ArrowRight, label: 'Industrial & automotive gears' },
                { title: 'Induction Heat Treatment Guide', href: '/induction-heat-treatment', icon: Cpu, label: 'Main service pillar' },
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
              On-Site Hardening <span className="text-primary">FAQs</span>
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
