'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Zap,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Flame,
  Phone,
  MessageSquare,
  Clock,
  Star,
  Award,
  IndianRupee,
  FileText,
  History,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CTASection } from '@/components/home/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I need induction hardening job work in Ludhiana. Please find my component drawing attached.');

// Animations
const fadeInBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const clusters = [
  { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', desc: 'Precision treatment for drive and transmission shafts.' },
  { title: 'Gear Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', desc: 'Tooth-by-tooth hardening for maximum wear resistance.' },
  { title: 'On-site Services', href: '/induction-heat-treatment/on-site', desc: 'Mobile induction solutions for large components.' },
  { title: 'Crankshafts', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana', desc: 'Specialized engine component heat treatment.' },
  { title: 'Bearings & Races', href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana', desc: 'Hardening solutions for rotational stability.' },
];

// Frequently asked questions — single source of truth for both the visible
// accordion AND the FAQPage schema (kept in sync to avoid schema mismatch).
const FAQ_ITEMS = [
  {
    q: 'How much do induction hardening services in Ludhiana cost?',
    a: 'Induction hardening job-work pricing is calculated on a per-kilogram or per-piece basis and depends on component weight, the hardened-zone length, required case depth, steel grade and order quantity. Bulk and repeat OEM orders receive better rates. Share your drawing and quantity on WhatsApp for an exact quotation within 24 hours.',
  },
  {
    q: 'What is the minimum order quantity for induction hardening job work?',
    a: 'There is no rigid minimum. We accept single prototype components for testing as well as high-volume OEM production lots of several thousand pieces. Larger quantities qualify for reduced per-piece pricing.',
  },
  {
    q: 'What is the turnaround time for induction hardening in Ludhiana?',
    a: 'Standard turnaround is 2–4 working days after we receive the components and an approved specification. Urgent and same-week jobs can be arranged for regular clients, and on-site hardening for very large parts is scheduled separately.',
  },
  {
    q: 'What is the typical case depth achieved?',
    a: 'Depending on the frequency (high or medium) and material, we achieve depths ranging from 0.5 mm to 10 mm, controlled precisely to your specification.',
  },
  {
    q: 'Is on-site induction hardening available in Ludhiana?',
    a: 'Yes, we provide mobile induction units for large components such as mill rolls and ring gears that cannot be easily moved to our workshop.',
  },
  {
    q: 'Which industries benefit most from this?',
    a: 'Automotive, agricultural, forging and heavy-machinery manufacturers across Ludhiana and Delhi NCR are our primary clients.',
  },
];

export default function PillarPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'serviceInductionHardening');

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How Induction Hardening Works — Step-by-Step Process',
    description:
      'A step-by-step guide to the induction hardening process used at Thakur Industries, Ludhiana — from coil setup to certified hardness testing.',
    totalTime: 'PT30M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Coil Setup & Component Positioning',
        text: 'An application-specific induction coil is selected and positioned around the target zone of the steel component (gear tooth, shaft journal, bearing race). The coil gap is set precisely to control heat distribution.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Electromagnetic Induction Heating',
        text: 'High or medium-frequency alternating current flows through the coil, generating a rapidly alternating magnetic field. This induces eddy currents in the steel surface, resistively heating it to 850–950°C in seconds — without any contact.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Controlled Quenching',
        text: 'Immediately after reaching the target temperature, the component is quenched using polymer or water spray. Rapid cooling transforms the heated surface layer into hard martensite (52–62 HRC) while the core remains tough and ductile.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Rockwell Hardness Testing & Certification',
        text: 'Each batch undergoes Rockwell HRC testing at minimum 3 points per piece. Case depth is verified on sample cross-sections. A hardness test report documenting target vs achieved values is issued with every batch.',
      },
    ],
  };

  // Service schema — enriched with serviceType, offers, aggregateRating & wider areaServed.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening Services in Ludhiana',
    serviceType: 'Induction Heat Treatment',
    url: `${PAGE_URL}/`,
    description:
      'Precision induction hardening services in Ludhiana, Punjab — 52–62 HRC localized surface hardening for gears, shafts, crankshafts, bearings and splines with controlled case depth and minimal distortion.',
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
    areaServed: ['Ludhiana', 'Mandi Gobindgarh', 'Jalandhar', 'Khanna', 'Patiala', 'Ambala', 'Chandigarh', 'Delhi NCR'],
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
      <BreadcrumbJsonLd items={[{ name: 'Induction Heat Treatment', href: '/induction-heat-treatment' }]} />
      <JsonLd data={howToSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Induction Heat Treatment Services — Ludhiana',
          description:
            'Comprehensive guide to induction hardening and heat treatment services in Ludhiana, Punjab. Process, materials, and industrial applications.',
          url: `${SITE_URL}/induction-heat-treatment`,
          mainEntity: {
            '@type': 'Service',
            serviceType: 'Induction Heat Treatment',
            provider: { '@type': 'LocalBusiness', name: SITE_NAME },
          },
        }}
      />

      <div className="bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">

          {/* Visible breadcrumb trail (matches BreadcrumbList schema) */}
          <nav aria-label="Breadcrumb" className="pt-24 md:pt-28">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary">Induction Heat Treatment</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening Services in"
            highlightedWord="Ludhiana"
            description="The definitive guide to precision metal hardening for automotive, agricultural, and industrial components in Punjab — 52–62 HRC localized surface hardening with zero distortion."
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
                { icon: Award, label: '52–62 HRC' },
                { icon: ShieldCheck, label: 'ISO Process' },
                { icon: Clock, label: '2–4 Day Turnaround' },
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

          {/* Intro — primary keyword in the first 100 words */}
          <motion.section
            className="py-12 md:py-16 border-b border-border text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              Searching for dependable <strong>induction hardening services in Ludhiana</strong>? At{' '}
              <strong>{SITE_NAME}</strong>, our localized surface hardening job work raises steel surfaces to 52–62 HRC
              while keeping the core tough and ductile. We serve the automotive, tractor and heavy-engineering OEM
              clusters of Ludhiana and Delhi NCR with consistent, high-accuracy hardening for gears, shafts, crankshafts,
              bearings, pinions and splines.
            </p>
          </motion.section>

          <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-border">
            <motion.div variants={fadeInBottom} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 animate-flame">
                The Science of <span className="text-primary">Precision</span> Hardening
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Induction heat treatment is a localized surface hardening technique that uses electromagnetic induction to heat metal parts. This process is essential for components that require a high degree of wear resistance while maintaining a tough, ductile core.
                </p>
                <p>
                  At <strong>{SITE_NAME}</strong>, we&apos;ve perfected this process over two decades, serving the massive industrial cluster of Ludhiana. Our specialized induction systems allow us to target specific zones—like gear teeth or bearing journals—ensuring zero distortion and maximum material life.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,0,0,0.2)] border border-primary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt="Induction hardening services in Ludhiana — steel component heated by an induction coil at Thakur Industries"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </section>

          <section className="py-24">
            <p className="section-label">// SERVICES //</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-16 text-center">
              Our Specialized <span className="text-primary">Clusters</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clusters.map((cluster, i) => (
                <Link key={cluster.title} href={cluster.href} className="group">
                  <div
                    className="p-8 bg-secondary/30 border border-border rounded-2xl transition-all hover:border-primary/30 hover:shadow-[0_0_20px_rgba(255,0,0,0.1)] hover:-translate-y-1 duration-300 h-full animate-in fade-in slide-in-from-bottom-4 duration-500"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <Zap className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4 group-hover:text-primary transition-colors">{cluster.title}</h3>
                    <p className="text-muted-foreground mb-6">{cluster.desc}</p>
                    <div className="flex items-center text-primary font-bold text-xs uppercase tracking-widest">
                      Explore Service <ArrowRight className="ml-2 h-4 w-4" />
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-auto" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="py-24 bg-secondary/20 rounded-3xl px-8 md:px-16 border border-primary/10 mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase italic tracking-tighter">
              Why Choose <span className="text-primary">Induction</span> Over Furnace?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-muted-foreground leading-relaxed">
              <div className="space-y-6">
                <p>
                  Traditional furnace hardening treats the entire component, which can lead to warping, internal stresses, and unnecessary energy consumption. <strong>Induction hardening</strong>, however, is a non-contact process.
                </p>
                <ul className="space-y-4">
                  {[
                    'Targeted heating zones (Localized Hardening)',
                    'Minimal material distortion',
                    'Rapid processing cycles (Seconds vs Hours)',
                    'Energy efficient & Eco-friendly',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="font-bold text-foreground uppercase tracking-tight text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background/50 p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-black uppercase italic text-foreground mb-4">Metallurgical Superiority</h3>
                <p>
                  By creating a martensitic surface layer while preserving a ferritic-pearlitic core, we provide parts that can handle high surface friction without being brittle. This is critical for{' '}
                  <Link href="/induction-heat-treatment/induction-hardening-gears-ludhiana" className="text-primary font-bold hover:underline">gears</Link>,{' '}
                  <Link href="/induction-heat-treatment/induction-hardening-shafts-ludhiana" className="text-primary font-bold hover:underline">shafts</Link>, and axles that must endure impact loads. Need a whole-part treatment instead? Explore our{' '}
                  <Link href="/case-hardening" className="text-primary font-bold hover:underline">case-hardening services</Link>.
                </p>
              </div>
            </div>
          </section>

          <section className="py-24 border-t border-border">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase italic tracking-tighter">
              Commonly Treated <span className="text-primary">Materials</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'EN8 (C45)', href: '/induction-heat-treatment/en8-steel-induction-hardening' },
                { label: 'EN19 (4140)', href: '/induction-heat-treatment/en19-steel-induction-hardening' },
                { label: 'EN24 (4340)', href: '/induction-heat-treatment/en24-steel-hardening' },
                { label: '4140 (42CrMo4)', href: '/induction-heat-treatment/4140-steel-hardening' },
              ].map((m) => (
                <Link
                  key={m.label}
                  href={m.href}
                  className="group p-6 bg-secondary/50 rounded-xl border border-border text-center font-black uppercase italic tracking-tighter text-sm hover:border-primary/30 hover:text-primary transition-colors duration-200"
                >
                  {m.label}
                </Link>
              ))}
              {['EN31', '20MnCr5', 'Tool Steel', 'Cast Iron'].map((m) => (
                <div key={m} className="group p-6 bg-secondary/50 rounded-xl border border-border text-center font-black uppercase italic tracking-tighter text-sm hover:border-primary/30 transition-colors duration-200">
                  {m}
                </div>
              ))}
            </div>
          </section>

          {/* Pricing & Turnaround — captures mid-funnel commercial keywords */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// PRICING & TURNAROUND //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Induction Hardening <span className="text-primary">Rates & Lead Time</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive <strong>induction hardening rates per kg</strong> for both prototype batches and bulk
              OEM production across Ludhiana. Final pricing depends on component weight, hardened-zone length, case depth,
              steel grade and quantity — share your drawing for an exact quote within 24 hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk and repeat OEM orders.' },
                { icon: FileText, title: 'Minimum Order', desc: 'No rigid minimum — single trial parts to multi-thousand-piece lots accepted.' },
                { icon: Clock, title: 'Turnaround', desc: 'Standard 2–4 working days; urgent same-week jobs for regular clients.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your Induction Hardening Quote
                </a>
              </Button>
            </div>
          </section>

          {/* Why Choose Us — trust / E-E-A-T */}
          <section className="py-20 border-t border-border">
            <p className="section-label text-center">// WHY CHOOSE US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why OEMs Trust <span className="text-primary">{SITE_NAME}</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Award, title: 'Consistent 52–62 HRC', desc: 'Repeatable hardness on every part, batch after batch.' },
                { icon: ShieldCheck, title: 'ISO-Grade Process', desc: 'Documented, traceable hardening for OEM supply chains.' },
                { icon: History, title: 'Two Decades of Experience', desc: 'Serving Ludhiana’s automotive & tractor manufacturers.' },
                { icon: Clock, title: 'Fast Turnaround', desc: '2–4 day standard delivery keeps your line running.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Related Services — descriptive keyword-anchor internal links */}
          <section className="py-24 border-t border-border">
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Related <span className="text-primary">Services</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Gear Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Settings, label: 'Spur, Helical & Bevel Gears' },
                { title: 'Shaft Hardening Ludhiana', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Cpu, label: 'Transmission Shafts' },
                { title: 'Crankshaft Hardening Ludhiana', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana', icon: History, label: 'Engine Components' },
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
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem key={item.q} value={`faq-${i}`} className="border rounded-2xl bg-secondary/30 px-8 transition-all hover:border-primary/20 group">
                  <AccordionTrigger className="text-left font-bold uppercase italic tracking-tight text-base md:text-lg hover:text-primary py-6 hover:no-underline">
                    <span className="flex items-center gap-3">
                      <Flame className="h-5 w-5 text-primary shrink-0" /> {item.q}
                    </span>
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
          <Link href="/contact" className="flex-1 flex items-center justify-center gap-2 bg-secondary text-foreground font-black uppercase text-xs py-3 rounded-lg border border-border">
            Quote
          </Link>
        </div>
      </div>
    </>
  );
}
