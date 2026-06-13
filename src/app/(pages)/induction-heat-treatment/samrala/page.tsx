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

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/samrala`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I need induction hardening job work for my unit in Samrala. Please find my drawing attached.');

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
    q: 'Do you offer induction hardening in Samrala?',
    a: 'Yes. We provide induction hardening job work for Samrala’s agricultural and small-engineering units directly from our Ludhiana facility, which sits roughly 30 km away on the same Ludhiana–Chandigarh corridor. Most Samrala jobs are collected, hardened to 58–62 HRC and returned with test reports inside the standard turnaround window.',
  },
  {
    q: 'How far is your facility from Samrala?',
    a: 'Our plant is in Shimlapuri, Ludhiana — about 30 km from Samrala along the Ludhiana–Chandigarh route, all within the same Ludhiana district. This short, same-district distance means quick pickup and drop, lower freight and faster turnaround than sending parts to a distant treater.',
  },
  {
    q: 'What components from Samrala units do you harden?',
    a: 'We regularly harden tractor and agri-implement parts, shafts, gears and pinions, sprockets, splines, bushes, pins, tillage tines, cutter blades, machine-tool slides and general engineering components made by Samrala’s small and medium units. Share a drawing and we will confirm the steel grade and case depth.',
  },
  {
    q: 'How quickly can you pick up and return parts to Samrala?',
    a: 'Because Samrala is the same district and only about 30 km away, pickup is usually arranged within a day for batches of a reasonable size. Standard hardening turnaround is 2–4 working days after the components and approved specification reach us; urgent same-week jobs can be arranged for regular clients.',
  },
  {
    q: 'What hardness and case depth can you achieve?',
    a: '58–62 HRC is typical on the working surface, with controlled case depth from 0.8 mm to 3.5 mm depending on the steel grade, section size and load. EN8, EN19, EN24, 4140 and 20MnCr5 components respond well and each batch is HRC-tested before dispatch.',
  },
  {
    q: 'Do you handle both single-piece job work and bulk orders for Samrala?',
    a: 'Yes. There is no rigid minimum order. We take single prototype or repair pieces for Samrala’s smaller workshops as well as repeat bulk lots for agri-implement and engineering OEMs, with better per-piece pricing on volume.',
  },
  {
    q: 'How much does induction hardening cost for a Samrala unit?',
    a: 'Pricing depends on component weight, size, required case depth, steel grade and quantity. We quote on a per-kilogram or per-piece basis with attractive rates for bulk and repeat orders. Send your drawing and quantity on WhatsApp for an exact quotation within 24 hours.',
  },
  {
    q: 'Can you test and certify the hardness for our records?',
    a: 'Yes. Every batch is checked for surface hardness (HRC), case depth and dimensional accuracy, and we provide test reports suitable for OEM documentation and quality records.',
  },
];

export default function SamralaPage() {
  const localImage = PlaceHolderImages.find((img) => img.id === 'industryAgriculture');
  const qcImage = PlaceHolderImages.find((img) => img.id === 'processHardening');

  // Service schema — LocalBusiness provider with full Ludhiana address,
  // INR offer, aggregateRating and Samrala-area areaServed.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Samrala',
    serviceType: 'Induction Hardening & Heat Treatment',
    url: `${PAGE_URL}/`,
    description:
      'Induction hardening job work for Samrala’s agricultural and small-engineering units — 58–62 HRC, controlled case depth, test reports and quick same-district pickup from our Ludhiana facility ~30 km away.',
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
    areaServed: ['Samrala', 'Khanna', 'Mandi Gobindgarh', 'Ludhiana'],
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
          { name: 'Induction Hardening in Samrala', href: '/induction-heat-treatment/samrala' },
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
              <li className="text-primary">Samrala</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Samrala"
            description="Precision induction hardening job work for Samrala’s agricultural and small-engineering units — 58–62 HRC, controlled case depth and test reports, with quick same-district pickup from our Ludhiana facility just ~30 km away on the Ludhiana–Chandigarh route."
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
                { icon: MapPin, label: '~30 km from Ludhiana' },
                { icon: Award, label: '58–62 HRC' },
                { icon: ShieldCheck, label: 'Test Reports' },
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
                  <MessageSquare className="h-5 w-5" /> WhatsApp Samrala
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
              Looking for dependable <strong>induction hardening in Samrala</strong>? At <strong>{SITE_NAME}</strong>, we serve
              Samrala’s cluster of agricultural-implement makers and small-engineering workshops along the Ludhiana–Chandigarh
              highway. Our plant is only about <strong>30 km away in Ludhiana</strong> — the very same district — so your shafts,
              gears, sprockets, tillage parts and machine components are picked up quickly, hardened to <strong>58–62 HRC</strong>{' '}
              and returned with full test reports without the delay of shipping to a distant treater.
            </p>
          </motion.section>

          {/* Unique local content — Samrala hook */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// SERVING SAMRALA //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Heat Treatment Built for <span className="text-primary">Samrala’s</span> Industry
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Samrala sits on the busy Ludhiana–Chandigarh route in Ludhiana district, surrounded by a strong belt of
                    agriculture and a growing base of small and medium engineering units. The town’s workshops fabricate and repair
                    tractor parts, agri implements, threshers, cutter assemblies and general machine components — exactly the kind
                    of work that lives or dies on wear resistance. When a tine, sprocket or shaft runs soft, it wears out in a
                    season; when its working surface is correctly induction hardened, it lasts for years.
                  </p>
                  <p>
                    That is where same-district proximity matters. Our facility in Shimlapuri, Ludhiana is roughly{' '}
                    <strong>30 km from Samrala</strong> on the same highway corridor, so parts do not travel far. For a small
                    workshop that cannot afford to have a machine down for a week, the difference between a 30 km same-district
                    treater and one several hundred kilometres away is the difference between hitting a delivery and missing it.
                  </p>
                  <p>
                    We treat Samrala the way a neighbour should: quick pickup, honest turnaround, and a hardened part that comes
                    back with a test report you can hand to your own customer.
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
                {localImage && (
                  <Image
                    src={localImage.imageUrl}
                    alt="Induction hardening for agricultural and engineering components from Samrala, Ludhiana district"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Components we harden for Samrala */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// COMPONENTS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Components We Harden for <span className="text-primary">Samrala</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              From farm-implement wear parts to precision engineering components, here is the kind of work Samrala’s units send us
              for <strong>induction hardening</strong>:
            </p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Tractor, title: 'Agri-Implement Parts', desc: 'Tillage tines, cultivator shovels, cutter blades and thresher parts that face abrasive field wear.' },
                { icon: Settings, title: 'Shafts & Pins', desc: 'Drive shafts, axles, pins and bushes hardened for fatigue and surface wear resistance.' },
                { icon: Boxes, title: 'Gears, Pinions & Sprockets', desc: 'Tooth-by-tooth hardening for transmission and drive components with minimal distortion.' },
                { icon: Cpu, title: 'Machine-Tool Parts', desc: 'Slides, guides and splines for the engineering workshops along the Ludhiana–Chandigarh belt.' },
                { icon: Award, title: 'Repair & Single Pieces', desc: 'One-off hardening for breakdown repairs — no rigid minimum order for Samrala workshops.' },
                { icon: ShieldCheck, title: 'Bulk OEM Lots', desc: 'Repeat production batches for agri-implement and engineering OEMs at volume rates.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col p-8 bg-secondary/30 rounded-2xl border border-border group hover:border-primary/30 transition-all h-full">
                  <item.icon className="h-9 w-9 text-primary mb-5" />
                  <h3 className="text-lg font-black uppercase italic tracking-tighter mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Why Samrala units choose us */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <p className="section-label text-center">// WHY LOCAL UNITS CHOOSE US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Samrala Units Choose <span className="text-primary">{SITE_NAME}</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: MapPin, title: 'Same District, ~30 km', desc: 'Samrala and our Ludhiana plant share the same district — short distance, low freight, fast handovers.' },
                { icon: Truck, title: 'Quick Pickup & Drop', desc: 'Batches collected and returned along the Ludhiana–Chandigarh route, usually arranged within a day.' },
                { icon: Award, title: 'Consistent 58–62 HRC', desc: 'Repeatable surface hardness on every part, batch after batch, tailored to your steel grade.' },
                { icon: FileText, title: 'Test Reports Included', desc: 'HRC, case-depth and dimensional checks documented for your quality and OEM records.' },
                { icon: Clock, title: '2–4 Day Turnaround', desc: 'Standard delivery in 2–4 working days; urgent same-week jobs for regular Samrala clients.' },
                { icon: History, title: 'Job-Work Experience', desc: 'Years of hardening agri and engineering components for Ludhiana-district manufacturers.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="bg-card/50 p-8 rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <item.icon className="h-8 w-8 text-primary mb-6" />
                  <h3 className="font-bold text-xl mb-3 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Process / quality assurance with image */}
          <section className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
              >
                {qcImage && (
                  <Image
                    src={qcImage.imageUrl}
                    alt="Induction hardening and hardness testing for Samrala components at Thakur Industries Ludhiana"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  How Your <span className="text-primary">Samrala Job</span> Flows
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground font-medium">
                  <p>From the moment you send a drawing to the moment hardened parts return to Samrala, the process is simple:</p>
                  <ul className="space-y-4">
                    {[
                      'Share your drawing and quantity on WhatsApp for a 24-hour quote.',
                      'We confirm steel grade, target hardness and case depth.',
                      'Pickup arranged along the Ludhiana–Chandigarh route.',
                      'Induction hardening at 900–950 °C with controlled quenching.',
                      'HRC and case-depth testing, then return with a test report.',
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

          {/* Pricing & Turnaround CTA */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// PRICING & TURNAROUND //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Samrala <span className="text-primary">Rates & Lead Time</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive <strong>hardening rates</strong> for Samrala’s prototype, repair and bulk OEM work. Final pricing
              depends on component weight, size, case depth, steel grade and quantity — share your drawing for an exact quote within
              24 hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: MapPin, title: 'Low Freight', desc: 'Same-district ~30 km distance keeps transport cost and lead time down.' },
                { icon: FileText, title: 'No Rigid Minimum', desc: 'Single trial or repair pieces to multi-thousand-piece lots accepted.' },
                { icon: Clock, title: 'Fast Turnaround', desc: 'Standard 2–4 working days; urgent same-week jobs for regulars.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your Samrala Quote
                </a>
              </Button>
            </div>
          </section>

          {/* Related Services + nearby towns — internal linking */}
          <section className="py-24 border-t border-border">
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Related Services & <span className="text-primary">Nearby Areas</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Gear Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes, label: 'Gears & Pinions' },
                { title: 'Shaft Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Transmission Shafts' },
                { title: 'Case Hardening', href: '/case-hardening', icon: ShieldCheck, label: 'Carburizing & Case Depth' },
                { title: 'Induction Heat Treatment Guide', href: '/induction-heat-treatment', icon: Cpu, label: 'Main Service Hub' },
                { title: 'Induction Hardening in Khanna', href: '/induction-heat-treatment/khanna', icon: MapPin, label: 'Nearby Town' },
                { title: 'Hardening in Mandi Gobindgarh', href: '/induction-heat-treatment/mandi-gobindgarh', icon: MapPin, label: 'Steel-Town Cluster' },
                { title: 'Focal Point, Ludhiana', href: '/induction-heat-treatment/focal-point-ludhiana', icon: MapPin, label: 'Industrial Estate' },
                { title: 'Get a Free Quote', href: '/contact', icon: FileText, label: 'Send Your Drawing' },
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
              Samrala Hardening <span className="text-primary">FAQs</span>
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
