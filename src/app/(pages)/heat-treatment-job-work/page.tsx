'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Award,
  Factory,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageSquare,
  MapPin,
  Cpu,
  History,
  Droplet,
  Boxes,
  Wrench,
  Search,
  Settings,
  Flame,
  Clock,
  IndianRupee,
  FileText,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import PageHeader from '@/components/shared/PageHeader';

const PAGE_URL = `${SITE_URL}/heat-treatment-job-work`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I need heat treatment job work in Ludhiana. Please find my component drawing attached.');

// Animation variants
const fadeInBottom = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
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
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Frequently asked questions — single source of truth for both the visible
// accordion AND the FAQPage schema (kept in sync to avoid schema mismatch).
const FAQ_ITEMS = [
  {
    q: 'How much does heat treatment job work cost in Ludhiana?',
    a: 'Heat treatment job-work pricing depends on the component weight, size, required hardness and case depth, steel grade and order quantity. We price most jobs on a per-kilogram or per-piece basis, with attractive rates for bulk and repeat OEM orders. Send us your component drawing and quantity on WhatsApp for an exact quotation within 24 hours.',
  },
  {
    q: 'What hardness can be achieved through induction hardening?',
    a: 'Depending on the steel grade, we typically achieve surface hardness between 50 to 62 HRC while maintaining a ductile core. EN24 and 4340 components reach the upper end of this range.',
  },
  {
    q: 'Which materials are suitable for heat treatment?',
    a: 'Medium carbon and alloy steels like EN8, EN19, EN24, 4140, 4340, and various tool steels respond best to our process. A carbon content of 0.35–0.60% gives the best hardness response.',
  },
  {
    q: 'What is the minimum order quantity for heat treatment job work?',
    a: 'There is no rigid minimum — we accept single trial pieces for testing as well as high-volume OEM production lots of several thousand parts. Bulk orders receive better per-piece pricing.',
  },
  {
    q: 'What is the turnaround time for heat treatment job work?',
    a: 'Standard turnaround is 2–4 working days after we receive the components and an approved specification. Urgent and same-week jobs can be arranged for regular clients.',
  },
  {
    q: 'Is heat treatment required before machining?',
    a: 'Generally, components are pre-machined to near-final dimensions, then heat-treated, followed by final grinding or finishing if required. We advise on the best process sequence for each component.',
  },
  {
    q: 'How long does heat treatment take?',
    a: 'Induction hardening is a very rapid process, with heating cycles often taking only seconds to minutes per part, allowing for high productivity. Batch turnaround including testing is typically 2–4 working days.',
  },
];

export default function HeatTreatmentJobWorkPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'serviceInductionHardening');
  const whatIsImage = PlaceHolderImages.find((img) => img.id === 'serviceInductionHardening');

  // Service schema — enriched with serviceType, offers, aggregateRating & wider areaServed
  const seoSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Heat Treatment Job Work in Ludhiana',
    serviceType: 'Induction Hardening & Heat Treatment',
    url: `${PAGE_URL}/`,
    description:
      'Professional heat treatment job work and induction hardening services in Ludhiana for shafts, gears, axles and steel components — 50–62 HRC, controlled case depth, 2–4 day turnaround.',
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
    areaServed: ['Ludhiana', 'Khanna', 'Mandi Gobindgarh', 'Jalandhar', 'Sangrur', 'Patiala', 'Ambala', 'Chandigarh', 'Delhi NCR'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Heat treatment job work priced per kg or per piece. Request a custom quotation.',
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
      <JsonLd data={seoSchema} />
      <JsonLd data={faqSchema} />
      <BreadcrumbJsonLd
        items={[{ name: 'Heat Treatment Job Work in Ludhiana', href: '/heat-treatment-job-work' }]}
      />

      <div className="bg-background relative">

        {/* 1. HERO SECTION */}
        <section className="relative min-h-[500px] h-[75vh] w-full overflow-hidden flex items-center justify-center">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
          >
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt="Heat treatment job work in Ludhiana — induction hardening of steel shafts at Thakur Industries"
                fill
                priority
                sizes="100vw"
                className="object-cover"
                data-ai-hint="induction hardening shaft"
              />
            )}
            <div className="absolute inset-0 bg-black/70" />
          </motion.div>

          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            {/* Visible breadcrumb trail (matches BreadcrumbList schema) */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-300">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-primary">Heat Treatment Job Work</li>
              </ol>
            </nav>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInBottom}>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase italic leading-[1.1] break-words">
                Heat Treatment <span className="text-primary">Job Work</span> in Ludhiana
              </h1>
              <p className="mt-6 text-sm sm:text-base md:text-lg font-bold text-primary/90 uppercase tracking-widest">
                Precision Induction Hardening & Heat Treatment Services
              </p>
              <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-300">
                Thakur Industries provides reliable heat treatment job work for steel components including shafts, gears, axles, and machine parts.
              </p>
            </motion.div>

            {/* Above-the-fold trust badges */}
            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {[
                { icon: Award, label: '50–62 HRC' },
                { icon: ShieldCheck, label: 'ISO Process' },
                { icon: Clock, label: '2–4 Day Turnaround' },
                { icon: Star, label: '4.8★ · 127 Reviews' },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary text-xs font-black uppercase tracking-tight px-3 py-1.5 rounded-full"
                >
                  <badge.icon className="h-3.5 w-3.5" />
                  {badge.label}
                </span>
              ))}
            </motion.div>

            {/* CTA cluster — Call / WhatsApp / Get Quote */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button asChild size="lg" className="w-full sm:w-auto h-auto py-4 px-8 text-base bg-primary hover:bg-primary/80 text-primary-foreground font-black uppercase italic tracking-tight">
                <a href={`tel:${SITE_PHONE_NUMBER}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Call for a Quote
                </a>
              </Button>
              <Button asChild size="lg" className="w-full sm:w-auto h-auto py-4 px-8 text-base bg-[#25D366] hover:bg-[#25D366]/90 text-white font-black uppercase italic tracking-tight border-none">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" /> Send Drawing
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-auto py-4 px-8 text-base border-white text-white hover:bg-white hover:text-black font-black uppercase italic tracking-tight">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Quote <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 2. TRUST / INDUSTRIAL CREDENTIALS */}
        <section className="py-12 bg-secondary border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Award, text: 'Industrial Heat Treatment Experts' },
                { icon: Factory, text: 'Serving Punjab Manufacturers' },
                { icon: Cpu, text: 'Precision Hardening Technology' },
                { icon: ShieldCheck, text: 'Reliable Job Work Support' },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInBottom} className="flex flex-col items-center text-center gap-3">
                  <item.icon className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-tight text-foreground/80">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 3. WHAT IS HEAT TREATMENT JOB WORK — primary keyword in first 100 words */}
        <section className="py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-6 uppercase italic">
                  What is <span className="text-primary">Heat Treatment</span> Job Work?
                </h2>
                <div className="space-y-6 text-base sm:text-lg text-muted-foreground">
                  <p>
                    Looking for dependable <strong>heat treatment job work in Ludhiana</strong>? At <strong>{SITE_NAME}</strong>,
                    our <strong>induction hardening</strong> job work involves controlled heating and cooling of steel components
                    to improve hardness, wear resistance, and durability — raising surface hardness to 50–62 HRC while keeping the
                    core tough enough to absorb impact and vibration. We serve Ludhiana&apos;s automotive, tractor and engineering
                    OEM clusters with consistent, high-accuracy hardening for shafts, gears, axles, pinions and machine parts.
                  </p>
                  <ul className="grid grid-cols-1 gap-3">
                    {['Induction Hardening', 'Surface Hardening', 'Case Hardening'].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                        <span className="font-semibold text-foreground uppercase tracking-wide text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-primary/10"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {whatIsImage && (
                  <Image
                    src={whatIsImage.imageUrl}
                    alt="Industrial heat treatment process — induction hardening of a steel component in Ludhiana"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. COMPONENTS WE HARDEN — internal links */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <PageHeader
              title="Components Suitable for"
              highlightedWord="Heat Treatment"
              description="We provide precision surface hardening for a variety of critical mechanical parts."
              className="mb-12 pt-0"
            />
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { title: 'Shaft Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings },
                { title: 'Gear Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes },
                { title: 'Crankshaft Hardening', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana', icon: Wrench },
                { title: 'Camshaft Hardening', href: '/shaft-hardening', icon: History },
                { title: 'Axle Hardening', href: '/component-hardening', icon: Cpu },
                { title: 'Roller Hardening', href: '/component-hardening', icon: Settings },
              ].map((item, i) => (
                <Link key={i} href={item.href}>
                  <motion.div
                    variants={fadeInBottom}
                    whileHover={{ scale: 1.02 }}
                    className="bg-card p-6 md:p-8 rounded-xl border border-border group h-full transition-all hover:border-primary/30 shadow-sm"
                  >
                    <item.icon className="h-10 w-10 text-primary mb-6 transition-transform group-hover:rotate-12" />
                    <h3 className="text-xl font-bold text-foreground mb-4 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.title}</h3>
                    <div className="flex items-center text-primary font-bold text-xs uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
                      View Details <ArrowRight className="ml-2 h-3 w-3" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 5. MATERIALS WE TREAT — internal links to material-grade pages */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-6 uppercase italic tracking-tighter">
              Steel Grades We <span className="text-primary">Heat Treat</span>
            </h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We heat-treat all common engineering steels. Explore our dedicated{' '}
              <Link href="/induction-heat-treatment/en24-steel-hardening" className="text-primary font-bold hover:underline">
                EN24 steel hardening
              </Link>{' '}
              and{' '}
              <Link href="/induction-heat-treatment/4140-steel-hardening" className="text-primary font-bold hover:underline">
                4140 steel hardening
              </Link>{' '}
              pages for hardness and case-depth detail.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'EN8 Steel', range: '50-55 HRC' },
                { name: 'EN19 Steel', range: '52-58 HRC' },
                { name: 'EN24 Steel', range: '55-60 HRC' },
                { name: '4140 Alloy Steel', range: '50-58 HRC' },
                { name: '4340 Steel', range: '55-60 HRC' },
                { name: 'Carbon Steel', range: 'Varies by grade' },
              ].map((material, i) => (
                <motion.div
                  key={i}
                  className="p-6 bg-secondary/50 rounded-xl border border-border hover:border-primary/20 transition-all group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{material.name}</h3>
                  <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">{material.range}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. OUR HEAT TREATMENT PROCESS */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase italic tracking-tighter">
              Our Heat Treatment <span className="text-primary">Process</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: 'Component Inspection', icon: Search },
                { title: 'Surface Preparation', icon: Wrench },
                { title: 'Induction Heating', icon: Flame },
                { title: 'Controlled Quenching', icon: Droplet },
                { title: 'Hardness Testing', icon: Settings },
                { title: 'Final Quality Inspection', icon: ShieldCheck },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/20 transition-all group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <step.icon className="h-8 w-8 text-primary group-hover:text-inherit" />
                  </div>
                  <div className="text-xs font-black text-primary/50 mb-2">STEP 0{i + 1}</div>
                  <h3 className="text-xl font-bold uppercase italic tracking-tight">{step.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PRICING & TURNAROUND — captures mid-funnel commercial keywords */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <p className="section-label text-center">// PRICING & TURNAROUND //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Heat Treatment <span className="text-primary">Rates & Lead Time</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive <strong>heat treatment rates</strong> for both prototype batches and bulk OEM production. Final
              pricing depends on component weight, size, case depth, steel grade and quantity — share your drawing for an exact
              quote within 24 hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Priced per kg or per piece, with reduced rates on bulk and repeat OEM orders.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your Heat Treatment Quote
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* 8. INDUSTRIES WE SERVE */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic tracking-tighter">
              Industries <span className="text-primary">We Serve</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                'Automotive Components',
                'Agricultural Machinery',
                'Industrial Equipment',
                'Engineering Components',
                'Machine Manufacturers',
              ].map((industry, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-secondary/30 rounded-xl border border-border flex items-center justify-center text-center group hover:border-primary/30 transition-all"
                >
                  <span className="text-sm font-bold uppercase italic tracking-tight group-hover:text-primary transition-colors">{industry}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. SERVICE AREA */}
        <section className="py-16 md:py-24 bg-card relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-6">
                  Heat Treatment Job Work in <span className="text-primary">Punjab & Nearby Regions</span>
                </h2>
                <p className="text-gray-400 mb-8 font-medium">
                  We are strategically located to serve the industrial hubs of North India with high-quality induction hardening job work.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['Ludhiana', 'Khanna', 'Mandi Gobindgarh', 'Sangrur', 'Phillaur', 'Rajpura', 'Ambala', 'Baddi'].map((city) => (
                    <div key={city} className="flex items-center gap-2 text-gray-300 font-bold uppercase tracking-tight text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      {city}
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/5 bg-secondary/20 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 bg-primary/5"
                  animate={{ opacity: [0.05, 0.1, 0.05] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <Globe className="h-48 w-48 text-primary/20" />
                {/* Visual pulse for Ludhiana */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="h-4 w-4 bg-primary rounded-full"
                    animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. WHY OEMs TRUST US — E-E-A-T */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <p className="section-label text-center">// WHY CHOOSE US //</p>
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase italic tracking-tighter">
              Why OEMs Trust <span className="text-primary">{SITE_NAME}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Award, title: 'Consistent Hardness Control', desc: 'Repeatable 50–62 HRC with digital monitoring for uniform results, batch after batch.' },
                { icon: Cpu, title: 'Modern Induction Equipment', desc: 'High-frequency precision technology for selective, low-distortion hardening.' },
                { icon: ShieldCheck, title: 'Reliable Industrial Job Work', desc: 'Documented, traceable process trusted by top OEMs and local manufacturers.' },
                { icon: Clock, title: 'Fast Turnaround Time', desc: '2–4 day standard delivery and efficient processes to keep your line running.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="p-8 bg-secondary/30 rounded-2xl border border-border group hover:border-primary/30 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <item.icon className="h-8 w-8 text-primary mb-6" />
                  <h3 className="text-xl font-bold uppercase italic tracking-tight mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. CLIENT TESTIMONIAL */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <MessageSquare className="h-12 w-12 text-primary/40" />
            </div>
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-foreground mb-8">
              &ldquo;Reliable heat treatment partner for our{' '}
              <Link href="/induction-heat-treatment/induction-hardening-shafts-ludhiana" className="text-primary hover:underline">
                shaft hardening
              </Link>{' '}
              requirements. Consistent results and timely delivery.&rdquo;
            </h2>
            <div className="flex flex-col items-center">
              <div className="font-bold text-foreground uppercase tracking-widest text-sm">Industrial Client</div>
              <div className="text-xs font-black text-primary uppercase mt-1">Ludhiana Manufacturing Unit</div>
            </div>
          </div>
        </section>

        {/* 12. FAQ SECTION — synced with FAQPage schema */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase italic tracking-tighter">
              Common <span className="text-primary">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`} className="border rounded-xl bg-secondary/30 px-6">
                  <AccordionTrigger className="text-left font-bold uppercase italic tracking-tight text-lg hover:text-primary py-6 hover:no-underline">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 font-medium leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 13. STRONG CALL TO ACTION */}
        <section className="py-16 md:py-24 bg-card border-t border-primary/10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase italic">
                Need Heat <span className="text-primary">Treatment?</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                Send your component details or drawing and get a quick quotation within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Button asChild size="lg" className="w-full sm:w-auto h-auto py-4 px-10 text-lg bg-primary hover:bg-primary/80 text-primary-foreground font-black group uppercase italic">
                  <Link href="/contact" className="flex items-center gap-2">
                    Request Quote
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-auto py-4 px-10 text-lg border-primary text-primary hover:bg-primary/10 font-black uppercase italic">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Upload Drawing</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Authority outbound reference + freshness signal */}
        <div className="container mx-auto px-4 md:px-6 pb-12 text-center text-xs text-muted-foreground font-medium">
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

        {/* Mobile Sticky CTA — 3-button Call / WhatsApp / Quote */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-border shadow-2xl">
          <a href={`tel:${SITE_PHONE_NUMBER}`} className="flex-1 bg-primary text-primary-foreground py-4 text-center text-xs font-black uppercase flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" /> Call
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] text-white py-4 text-center text-xs font-black uppercase flex items-center justify-center gap-2">
            <MessageSquare className="h-4 w-4" /> WhatsApp
          </a>
          <Link href="/contact" className="flex-1 bg-secondary text-foreground border-l border-border py-4 text-center text-xs font-black uppercase flex items-center justify-center gap-2">
            <CheckCircle className="h-4 w-4" /> Quote
          </Link>
        </div>

      </div>
    </>
  );
}

function Globe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20" />
      <path d="M2 12h20" />
      <path d="M12 2a14.5 14.5 0 0 1 0 20" />
      <path d="M2 12a14.5 14.5 0 0 0 20 0" />
      <path d="M2 12a14.5 14.5 0 0 1 20 0" />
    </svg>
  );
}
