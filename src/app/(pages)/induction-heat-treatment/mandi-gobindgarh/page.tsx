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
  IndianRupee,
  FileText,
  Award,
  ShieldCheck,
  Star,
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

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/mandi-gobindgarh`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent(
    'Hello Thakur Industries, I have components in Mandi Gobindgarh that need induction hardening. Please share a quote and pickup details.'
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
    q: 'Do you serve Mandi Gobindgarh for induction hardening?',
    a: 'Yes. Mandi Gobindgarh — the Steel Town of India — is one of our core service areas. Our facility in Ludhiana is roughly 55 km away, and we regularly handle hardening job work for the town’s steel re-rolling mills, forging units and engineering workshops. We harden rolling-mill rolls, guides, shafts, gears and forged components to specification.',
  },
  {
    q: 'Do you offer pickup and delivery from Mandi Gobindgarh?',
    a: 'Yes. We arrange scheduled pickup of components from your Mandi Gobindgarh, Khanna or Sirhind unit and return the finished, tested parts to your door. For heavy rolling-mill rolls and large forgings we coordinate suitable transport so you avoid handling logistics yourself.',
  },
  {
    q: 'What is the turnaround time for hardening from Mandi Gobindgarh?',
    a: 'Standard turnaround is 2–4 working days from receipt of components and an approved specification. Because Mandi Gobindgarh is on our regular Ludhiana–Khanna–Sirhind route, transit adds very little time. Urgent same-week jobs can be arranged for regular mill and forging clients.',
  },
  {
    q: 'Which services do you provide to Mandi Gobindgarh steel units?',
    a: 'We provide induction hardening, surface hardening, tempering and stress relief for rolling-mill rolls and guides, forged shafts, pinions and gears, sprockets, bearing races and other wear-critical steel parts. Every job ships with HRC verification and a traceable test report.',
  },
  {
    q: 'How much does induction hardening cost for Mandi Gobindgarh jobs?',
    a: 'Pricing depends on component weight, size, required case depth, steel grade and quantity. We quote most jobs per kilogram or per piece, with better rates on bulk and repeat orders from re-rolling mills and forging units. Send your drawing or part details on WhatsApp for an exact quotation within 24 hours.',
  },
];

export default function MandiGobindgarhPage() {
  const rollImage = PlaceHolderImages.find((img) => img.id === 'serviceSurfaceHardening');
  const shaftImage = PlaceHolderImages.find((img) => img.id === 'appShaftHardening');

  // Service schema — enriched with serviceType, offers, aggregateRating & local areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Mandi Gobindgarh',
    serviceType: 'Induction Hardening and Heat Treatment Job Work',
    url: `${PAGE_URL}/`,
    description:
      'Induction hardening job work for Mandi Gobindgarh’s steel re-rolling mills, forging units and engineering workshops — rolling-mill rolls, forged shafts, gears and guides hardened to 58–62 HRC with traceable test reports. Pickup from the Ludhiana facility, ~55 km away.',
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
    areaServed: ['Mandi Gobindgarh', 'Khanna', 'Sirhind', 'Ludhiana'],
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
          { name: 'Mandi Gobindgarh', href: '/induction-heat-treatment/mandi-gobindgarh' },
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
              <li className="text-primary">Mandi Gobindgarh</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Mandi Gobindgarh"
            description="Specialist induction hardening, tempering and stress relief for Mandi Gobindgarh’s steel re-rolling mills, forging units and engineering workshops — rolling-mill rolls, forged shafts, gears and guides hardened to 58–62 HRC, with pickup from our Ludhiana facility ~55 km away."
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
                { icon: ShieldCheck, label: 'Tested & Traceable' },
                { icon: Truck, label: 'Pickup From ~55 KM' },
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

          {/* Process image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-4 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            {rollImage && (
              <Image
                src={rollImage.imageUrl}
                alt="Induction hardening of a rolling-mill roll for a Mandi Gobindgarh steel re-rolling mill"
                fill
                sizes="100vw"
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">Steel Town Specialists</span>
                <p className="text-white font-black uppercase italic text-xl md:text-2xl mt-2 tracking-tighter">Hardening for India’s Steel Town</p>
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
              Looking for dependable <strong>induction hardening in Mandi Gobindgarh</strong>? Mandi Gobindgarh is the{' '}
              <strong>“Steel Town of India”</strong> — a town packed with steel re-rolling mills, forging units and
              induction furnaces. At <strong>{SITE_NAME}</strong>, our induction hardening job work raises the working
              surfaces of rolls, shafts and gears to 58–62 HRC while keeping the core tough, so the steel parts your
              mills and forging units make last far longer in service. Our Ludhiana facility sits about{' '}
              <strong>55 km</strong> away, on the regular Ludhiana–Khanna–Sirhind corridor, so collection and delivery
              are quick and routine.
            </p>
          </motion.section>

          {/* UNIQUE LOCAL CONTENT — Steel Town focus */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// THE STEEL TOWN OF INDIA //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Hardening Built for <span className="text-primary">Mandi Gobindgarh’s Mills</span>
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                  <p>
                    Few towns in India run as much steel through them as Mandi Gobindgarh. Hundreds of re-rolling
                    mills, forging shops and induction-furnace units turn scrap and billet into TMT bars, structurals,
                    flats and forged blanks every single day. That relentless throughput is exactly why{' '}
                    <strong>induction hardening in Mandi Gobindgarh</strong> matters: the rolls, guides, shafts and dies
                    doing the work wear out fast, and a longer-lasting hardened surface directly protects your output
                    and your margins.
                  </p>
                  <p>
                    We work hand-in-glove with the town’s steel ecosystem. For{' '}
                    <Link href="/induction-heat-treatment/induction-hardening-shafts-ludhiana" className="text-primary font-bold hover:underline">
                      rolling-mill roll and shaft hardening
                    </Link>
                    , we harden the barrel and neck zones so rolls hold their pass profile through far more tonnage
                    before regrinding. Mill guides, repeaters and twist-pipe components get selective surface hardening
                    on their contact faces to resist the abrasion of hot bar moving at speed.
                  </p>
                  <p>
                    Mandi Gobindgarh’s forging units lean on us for forged shafts, pinions, sprockets and{' '}
                    <Link href="/induction-heat-treatment/induction-hardening-gears-ludhiana" className="text-primary font-bold hover:underline">
                      gear-tooth hardening
                    </Link>
                    . Because induction heating targets only the surface, distortion on long forged shafts and{' '}
                    <Link href="/induction-heat-treatment/crankshafts-induction-hardening-ludhiana" className="text-primary font-bold hover:underline">
                      crankshaft journals
                    </Link>{' '}
                    stays minimal — so your machined dimensions survive the process instead of needing heavy
                    re-grinding afterwards.
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
                {shaftImage && (
                  <Image
                    src={shaftImage.imageUrl}
                    alt="Forged shaft induction hardened for a Mandi Gobindgarh forging unit at Thakur Industries Ludhiana"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>

            {/* Components we harden for local units */}
            <div className="mt-16">
              <p className="section-label text-center">// WHAT WE HARDEN LOCALLY //</p>
              <motion.h3
                className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-10 text-center leading-none"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              >
                Components for Mandi Gobindgarh <span className="text-primary">Steel & Forging Units</span>
              </motion.h3>
              <motion.ul
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
                variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                {[
                  'Rolling-mill rolls (barrel & neck)',
                  'Mill guides, repeaters & guards',
                  'Forged shafts & spindles',
                  'Pinions, gears & sprockets',
                  'Coupling spindles & wobblers',
                  'Bearing races & wear sleeves',
                ].map((item) => (
                  <motion.li
                    key={item}
                    variants={scaleUp}
                    className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-bold text-foreground uppercase tracking-tight text-xs">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </section>

          {/* Logistics — pickup from Ludhiana */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// LOGISTICS //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 leading-none">
                  Just <span className="text-primary">~55 KM</span> From Our Furnaces
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                  <p>
                    Distance is no obstacle for Mandi Gobindgarh clients. Our hardening facility in{' '}
                    <strong>Shimlapuri, Ludhiana</strong> is roughly <strong>55 km</strong> away along the
                    Ludhiana–Khanna–Sirhind–Mandi Gobindgarh corridor. We run scheduled pickups so your shaft, roll or
                    gear leaves the shop floor and comes back hardened, tested and ready to fit — without you arranging
                    a single truck.
                  </p>
                  <p>
                    For heavy rolling-mill rolls and large forgings we coordinate appropriate transport and handling.
                    The same route also serves our{' '}
                    <Link href="/induction-heat-treatment/khanna" className="text-primary font-bold hover:underline">
                      Khanna
                    </Link>
                    ,{' '}
                    <Link href="/induction-heat-treatment/sirhind" className="text-primary font-bold hover:underline">
                      Sirhind
                    </Link>{' '}
                    and{' '}
                    <Link href="/induction-heat-treatment/samrala" className="text-primary font-bold hover:underline">
                      Samrala
                    </Link>{' '}
                    customers, so collections from the cluster are frequent and turnaround stays tight.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mt-8">
                  <MapPin className="h-5 w-5" /> Area Served: Mandi Gobindgarh · Khanna · Sirhind · Ludhiana
                </div>
              </motion.div>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-5"
                variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                {[
                  { icon: Truck, title: 'Scheduled Pickup', desc: 'We collect from your Mandi Gobindgarh unit and return finished parts.' },
                  { icon: Clock, title: '2–4 Day Turnaround', desc: 'On our regular corridor route — little transit time added.' },
                  { icon: FileText, title: 'Test Report Included', desc: 'HRC verification and traceable documentation with every batch.' },
                ].map((item, i) => (
                  <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-card/60 rounded-2xl border border-border">
                    <item.icon className="h-9 w-9 text-primary mb-4" />
                    <h3 className="text-sm font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Why local steel & forging units choose us */}
          <section className="py-16 md:py-24 border-t border-border">
            <p className="section-label text-center">// WHY MANDI GOBINDGARH CHOOSES US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Steel & Forging Units <span className="text-primary">Trust {SITE_NAME}</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
              Mandi Gobindgarh’s mills and forging shops run on uptime. They choose us because our induction hardening
              keeps rolls, shafts and gears in service longer, comes back fast, and arrives with the paperwork their
              buyers expect. We also handle{' '}
              <Link href="/case-hardening-heat-treatment" className="text-primary font-bold hover:underline">
                case hardening job work
              </Link>{' '}
              when a deeper, tougher case is the right call — and our full process is documented on the{' '}
              <Link href="/induction-heat-treatment" className="text-primary font-bold hover:underline">
                induction heat treatment guide
              </Link>
              .
            </p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Award, title: 'Consistent 58–62 HRC', desc: 'Repeatable surface hardness on rolls, shafts and gear teeth.' },
                { icon: ShieldCheck, title: 'Traceable Reports', desc: 'HRC and case-depth records your steel buyers can rely on.' },
                { icon: Zap, title: 'Low Distortion', desc: 'Selective heating keeps long forged shafts straight and to size.' },
                { icon: Clock, title: 'Fast & Local', desc: '2–4 day turnaround on a corridor we travel every week.' },
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
              Hardening <span className="text-primary">Rates & Lead Time</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
              We offer competitive <strong>hardening job-work rates</strong> for Mandi Gobindgarh’s re-rolling mills and
              forging units, on both trial pieces and bulk orders. Final pricing depends on weight, size, case depth,
              steel grade and quantity — share your drawing or part details for an exact quote within 24 hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk and repeat mill orders.' },
                { icon: Boxes, title: 'Order Flexibility', desc: 'Single rolls or shafts to multi-piece forging lots — all welcome.' },
                { icon: Clock, title: 'Turnaround', desc: 'Standard 2–4 working days; urgent jobs for regular clients.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your Mandi Gobindgarh Quote
                </a>
              </Button>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Shaft Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Roll & Mill Shafts' },
                { title: 'Gear Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes, label: 'Pinions & Gears' },
                { title: 'Induction Heat Treatment Guide', href: '/induction-heat-treatment', icon: Cpu, label: 'Main Service Hub' },
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

          {/* Nearby locations */}
          <section className="py-16 border-t border-border">
            <p className="section-label text-center">// NEARBY AREAS WE SERVE //</p>
            <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-center mb-10">
              Hardening Across the <span className="text-primary">Cluster</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
              {[
                { title: 'Khanna', href: '/induction-heat-treatment/khanna' },
                { title: 'Sirhind', href: '/induction-heat-treatment/sirhind' },
                { title: 'Samrala', href: '/induction-heat-treatment/samrala' },
              ].map((loc) => (
                <Link
                  key={loc.title}
                  href={loc.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/30 border border-border rounded-full font-black uppercase italic text-sm text-foreground hover:border-primary/50 hover:text-primary transition-all"
                >
                  <MapPin className="h-4 w-4 text-primary" /> {loc.title}
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
              Mandi Gobindgarh Hardening <span className="text-primary">FAQs</span>
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
