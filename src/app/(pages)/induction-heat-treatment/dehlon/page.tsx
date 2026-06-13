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
  Phone,
  MessageSquare,
  Clock,
  Truck,
  MapPin,
  Award,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/dehlon`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I am in Dehlon and need induction hardening job work. Please arrange a same-day pickup and a quote.');

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
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
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

// Frequently asked questions — single source of truth for both the visible
// accordion AND the FAQPage schema (kept in sync to avoid schema mismatch).
const FAQ_ITEMS = [
  {
    q: 'Do you offer induction hardening in Dehlon?',
    a: 'Yes. Thakur Industries serves Dehlon directly from our Ludhiana workshop, which is only about 20 km away in the same district. Because we are so close, we can arrange same-day pickup and drop for Dehlon’s agricultural workshops and engineering units, with full hardness and case-depth documentation on every batch.',
  },
  {
    q: 'How far is your facility from Dehlon?',
    a: 'Our Shimlapuri, Ludhiana workshop is roughly 20 km from Dehlon — a short same-district drive down the Ludhiana–Malerkotla belt. This proximity is the main reason local units choose us: parts collected in the morning can often be hardened and returned within the standard 2–4 day window, and urgent jobs even faster.',
  },
  {
    q: 'What components do you harden for Dehlon’s agricultural units?',
    a: 'We regularly harden tiller and rotavator blades, cultivator tynes, plough shares, thresher and chaff-cutter shafts, sprockets, axles and gear sets for Dehlon’s farm-equipment makers. Wear faces reach 58–62 HRC while the core stays tough enough to survive field shock loads.',
  },
  {
    q: 'Can you pick up and deliver parts in Dehlon?',
    a: 'Yes. Same-district proximity means we offer convenient same-day pickup and drop for Dehlon units, removing the transport hassle for small workshops that do not run their own logistics. Share your location on WhatsApp and we will schedule a collection.',
  },
  {
    q: 'What is the turnaround time for Dehlon jobs?',
    a: 'Standard turnaround is 2–4 working days after we receive the components and an approved specification. Because Dehlon is so close, collection and return add almost no time, and urgent same-week jobs can be arranged for regular clients.',
  },
  {
    q: 'What hardness and case depth can you achieve?',
    a: 'Typical surface hardness is 58–62 HRC with a controlled case depth of 0.8–3.5 mm, tuned to the component and steel grade. Every job is verified with HRC testing, case-depth checks and dimensional inspection before it goes back to Dehlon.',
  },
  {
    q: 'Do you accept small batches from individual Dehlon workshops?',
    a: 'Absolutely. There is no rigid minimum order. We handle single trial pieces and repair parts for small Dehlon workshops as readily as bulk lots for larger engineering units, with better per-piece pricing on volume.',
  },
];

export default function DehlonPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'appShaftHardening');
  const qcImage = PlaceHolderImages.find((img) => img.id === 'processHardening');

  // Service / LocalBusiness schema — enriched with offers, aggregateRating & local areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Dehlon',
    serviceType: 'Induction Hardening & Heat Treatment',
    url: `${PAGE_URL}/`,
    description:
      'Induction hardening in Dehlon for agricultural and engineering components — 58–62 HRC, controlled case depth, same-district ~20 km proximity with same-day pickup from our Ludhiana facility.',
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
    areaServed: ['Dehlon', 'Ludhiana', 'Jagraon', 'Payal'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Induction hardening job work for Dehlon priced per kg or per piece. Request a custom quotation.',
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
          { name: 'Dehlon', href: '/induction-heat-treatment/dehlon' },
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
              <li className="text-primary">Dehlon</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Dehlon"
            description="Same-district induction hardening for Dehlon’s agricultural and engineering units — our Ludhiana facility is just ~20 km away, so we collect, harden to 58–62 HRC and return your parts fast, with full certification."
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
                { icon: Truck, label: '~20 KM · Same-Day Pickup' },
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
                  <MessageSquare className="h-5 w-5" /> WhatsApp Dehlon
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto font-black uppercase italic tracking-tight border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Quote <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Process image banner — preserved from original */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-4 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/5.jpeg"
              alt="Induction hardening in Dehlon — precision heat treatment of agricultural and engineering parts"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">Induction Hardening</span>
                <p className="text-white font-black uppercase italic text-xl md:text-2xl mt-2 tracking-tighter">Precision. Certified. Fast Turnaround.</p>
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
              Looking for dependable <strong>induction hardening in Dehlon</strong>? At <strong>{SITE_NAME}</strong>, we serve
              Dehlon’s cluster of small agricultural and engineering units straight from our Ludhiana workshop — only about{' '}
              <strong>20 km away in the same district</strong>. That closeness lets us offer genuine same-day pickup, harden wear
              faces to 58–62 HRC with minimal distortion, and return certified parts on a tight turnaround.
            </p>
          </motion.section>

          {/* Local context — Dehlon's industrial & agricultural belt */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// DEHLON, LUDHIANA DISTRICT //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Built for Dehlon’s <span className="text-primary">Agri-Engineering Belt</span>
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Dehlon sits on the southern outskirts of Ludhiana, where small fabrication sheds and farm-equipment workshops
                    line the agricultural belt running toward Payal and Malerkotla. These units build and repair the machinery
                    that keeps Punjab’s fields working — and almost every wear part they make needs hardening to survive soil,
                    grit and shock loading.
                  </p>
                  <p>
                    Most Dehlon workshops are lean operations without an in-house heat-treatment line, so they rely on a trusted
                    job-work partner nearby. Because our Shimlapuri facility is only a short same-district drive away, Dehlon units
                    get the speed of a local hardener without compromising on certified, repeatable results.
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
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt="Induction hardened agricultural shaft for a Dehlon farm-equipment workshop"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Why ~20 km proximity matters */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <p className="section-label text-center">// SAME-DISTRICT ADVANTAGE //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why ~20 KM <span className="text-primary">Changes Everything</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              For a small Dehlon workshop, the distance to the hardener is the difference between a part returning the same week
              and a job stalling. Sitting just ~20 km away in the same district, we cut that friction to almost nothing.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Truck, title: 'Same-Day Pickup', desc: 'Parts collected from your Dehlon shed in the morning can enter the hardening line the same day.' },
                { icon: Clock, title: 'Faster Turnaround', desc: 'No long-haul transport means the 2–4 day window is genuinely 2–4 days — not days lost in transit.' },
                { icon: MapPin, title: 'Same District', desc: 'Both Dehlon and our workshop are in Ludhiana district, so coordination, visits and re-work are effortless.' },
                { icon: ShieldCheck, title: 'Certified Every Time', desc: 'Local speed with no shortcuts — HRC, case-depth and dimensional checks on every batch.' },
                { icon: Award, title: 'Low Logistics Cost', desc: 'Short distance keeps freight negligible, protecting margins on small agri-component jobs.' },
                { icon: Cpu, title: 'Direct Technical Help', desc: 'Quick to drop in and discuss case depth or fixturing for an awkward tiller or thresher part.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="bg-card/50 p-8 rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <item.icon className="h-8 w-8 text-primary mb-6" />
                  <h3 className="font-bold text-xl mb-3 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Components we harden for Dehlon */}
          <section className="py-16 md:py-24 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Components We <span className="text-primary">Harden in Dehlon</span>
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Dehlon’s output is dominated by agricultural wear parts and general engineering components. We tailor the
                    induction profile to each one — hardening only the working face so the core stays tough under field impact:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Tiller & Rotavator Blades',
                      'Cultivator Tynes & Shares',
                      'Thresher & Chaff-Cutter Shafts',
                      'Sprockets & Drive Gears',
                      'Axles & Spindles',
                      'Pins, Bushes & Linkages',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span className="font-bold text-foreground uppercase tracking-tight text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Whether it is a single repair shaft for a thresher or a repeat batch of rotavator blades, the same certified
                    process applies. Need a different component? Explore our dedicated{' '}
                    <Link href="/induction-heat-treatment/induction-hardening-gears-ludhiana" className="text-primary font-bold hover:underline">gear hardening</Link>,{' '}
                    <Link href="/induction-heat-treatment/induction-hardening-shafts-ludhiana" className="text-primary font-bold hover:underline">shaft hardening</Link> and{' '}
                    <Link href="/case-hardening-heat-treatment" className="text-primary font-bold hover:underline">case hardening</Link> services.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="relative h-72 md:h-[450px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-first"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
              >
                {qcImage && (
                  <Image
                    src={qcImage.imageUrl}
                    alt="Hardness testing of a hardened agricultural component for a Dehlon engineering unit"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Why local units choose us + area card */}
          <section className="py-16 md:py-24 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// WHY DEHLON CHOOSES US //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  The Local Hardener Dehlon <span className="text-primary">Trusts</span>
                </h2>
                <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Local engineering and agricultural units in Dehlon choose us because we combine the responsiveness of a
                    neighbour with the discipline of a certified job-work shop. Parts do not disappear into a far-off queue — they
                    stay within the district, move quickly, and come back with paperwork that stands up to OEM scrutiny.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Same-district ~20 km proximity with same-day pickup and drop',
                      'Consistent 58–62 HRC with controlled 0.8–3.5 mm case depth',
                      'Selective hardening that keeps cores tough for field shock loads',
                      'HRC, case-depth and dimensional reports on every batch',
                      'No rigid minimum — single repair parts to bulk lots welcome',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="p-10 bg-secondary/20 rounded-[2rem] border border-primary/10 relative overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleUp}
              >
                <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Dehlon Service Area</h3>
                <p className="text-muted-foreground mb-8 font-medium">
                  Offering localized hardening of specific wear zones while maintaining internal core toughness for mechanical
                  durability — collected from your unit and returned across the Dehlon belt.
                </p>
                <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                  <MapPin className="h-5 w-5" /> Area: Dehlon, Ludhiana, Jagraon, Payal
                </div>
                <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                  <Link href="/contact">Request Dehlon Quote</Link>
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Nearby locations + service hub links */}
          <section className="py-16 md:py-24 border-t border-border">
            <p className="section-label text-center">// EXPLORE //</p>
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Nearby Areas &amp; <span className="text-primary">Services</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Focal Point Ludhiana', href: '/induction-heat-treatment/focal-point-ludhiana', icon: MapPin, label: 'Ludhiana Industrial Hub' },
                { title: 'Sherpur Ludhiana', href: '/induction-heat-treatment/sherpur-ludhiana', icon: MapPin, label: 'Nearby Cluster' },
                { title: 'Jagraon', href: '/induction-heat-treatment/jagraon', icon: MapPin, label: 'Agricultural Belt' },
                { title: 'Gear Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes, label: 'Spur, Helical & Bevel Gears' },
                { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Transmission & Farm Shafts' },
                { title: 'Main Guide (Pillar)', href: '/induction-heat-treatment', icon: Cpu, label: 'Induction Heat Treatment' },
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
            <p className="text-center text-muted-foreground font-medium mt-10">
              Looking for surface hardening with a soft core? See our{' '}
              <Link href="/case-hardening-heat-treatment" className="text-primary font-bold hover:underline">case hardening</Link> job work.
            </p>
          </section>

          {/* FAQ — synced with FAQPage schema */}
          <motion.section
            className="py-24 max-w-4xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none">
              Dehlon Hardening <span className="text-primary">FAQs</span>
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
