'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  MapPin,
  Settings,
  Boxes,
  Cpu,
  ArrowRight,
  Factory,
  Phone,
  MessageSquare,
  Clock,
  IndianRupee,
  FileText,
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/focal-point-ludhiana`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I have a unit in Focal Point, Ludhiana and need heat treatment job work. Please share rates and pickup details.');

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const scaleUp = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Frequently asked questions — single source of truth for both the visible
// accordion AND the FAQPage schema (kept in sync to avoid schema mismatch).
const FAQ_ITEMS = [
  {
    q: 'Do you serve units inside Focal Point, Ludhiana?',
    a: 'Yes. Thakur Industries is a heat treatment company serving every part of Focal Point, Ludhiana — Phases 1 through 8 and the adjoining industrial roads. Auto-part makers, cycle-part units, fastener and machine-tool manufacturers across the estate use our induction and case hardening job work every week.',
  },
  {
    q: 'Do you offer pickup and delivery for Focal Point factories?',
    a: 'We do. Because we are located close to Focal Point, we offer quick pickup from your unit and delivery of hardened components back to your gate. There is no transportation headache for your team — share your component details on WhatsApp and we arrange the logistics.',
  },
  {
    q: 'What is the turnaround time for Focal Point units?',
    a: 'Standard turnaround is 2–4 working days after we receive the components and an approved specification. For nearby Focal Point units we can prioritise urgent same-week jobs, and on-site hardening for very large parts is scheduled separately.',
  },
  {
    q: 'What heat treatment services do you provide for Focal Point industries?',
    a: 'We provide induction hardening, gear-tooth hardening, shaft hardening, bearing-race treatment, crankshaft hardening and case hardening. Surface hardness of 58–62 HRC with controlled case depth is typical, and every batch ships with a Rockwell HRC test report for your quality records.',
  },
  {
    q: 'How much does heat treatment near Focal Point cost?',
    a: 'Pricing is on a per-kilogram or per-piece basis and depends on component weight, size, required case depth, steel grade and quantity. Bulk and repeat OEM orders from Focal Point units receive better rates. Send your drawing on WhatsApp for an exact quotation, usually within 24 hours.',
  },
];

export default function FocalPointLudhianaPage() {
  // Enriched Service schema — serviceType, areaServed (all phases), full provider
  // address, INR offers and aggregateRating, with FAQ + breadcrumb companions.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Heat Treatment Company near Focal Point, Ludhiana',
    serviceType: 'Induction Hardening and Heat Treatment Job Work',
    url: `${PAGE_URL}/`,
    description:
      "Precision induction hardening and heat treatment job work for industries in Focal Point, Ludhiana — Punjab's largest industrial estate. Gears, shafts, bearings, crankshafts and case hardening with quick pickup and delivery.",
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
    areaServed: [
      'Focal Point, Ludhiana',
      'Focal Point Phase 1',
      'Focal Point Phase 2',
      'Focal Point Phase 3',
      'Focal Point Phase 4',
      'Focal Point Phase 5',
      'Focal Point Phase 6',
      'Focal Point Phase 7',
      'Focal Point Phase 8',
      'Ludhiana',
    ],
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

  const focalPointIndustries = [
    'Automotive parts (gears, shafts, axles)',
    'Bicycle & cycle parts manufacturers',
    'Tractor & agricultural OEMs',
    'Fasteners & forging units',
    'Machine tool manufacturers',
    'Hydraulic & pneumatic components',
    'Steel fabrication & rolling',
    'Export-grade precision parts',
  ];

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <BreadcrumbJsonLd items={[
        { name: 'Induction Heat Treatment', href: '/induction-heat-treatment' },
        { name: 'Focal Point Ludhiana', href: '/induction-heat-treatment/focal-point-ludhiana' },
      ]} />

      <div className="bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">

          {/* Visible breadcrumb trail (matches BreadcrumbList schema) */}
          <nav aria-label="Breadcrumb" className="pt-24 md:pt-28">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/induction-heat-treatment" className="hover:text-primary transition-colors">Induction Heat Treatment</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary">Focal Point Ludhiana</li>
            </ol>
          </nav>

          <PageHeader
            title="Heat Treatment Company near Focal Point,"
            highlightedWord="Ludhiana"
            description="Serving Focal Point — Punjab's largest and most active industrial estate — with precision induction hardening, case hardening, and surface heat treatment. All phases covered with quick pickup & delivery."
            className="text-center !pt-6"
          />

          {/* Above-the-fold trust badges + CTA cluster */}
          <motion.div
            className="-mt-4 mb-6 flex flex-col items-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Award, label: '58–62 HRC' },
                { icon: ShieldCheck, label: 'HRC Test Reports' },
                { icon: MapPin, label: 'All Phases 1–8' },
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
                <a href={`tel:${SITE_PHONE_NUMBER.replace(/\s/g, '')}`} className="flex items-center gap-2">
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
            <Image
              src="/images/images/5.jpeg"
              alt="Induction hardening and heat treatment job work for Focal Point Ludhiana industrial units at Thakur Industries"
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
            className="py-12 text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Factory className="h-6 w-6 text-primary" />
              <span className="text-primary font-black uppercase italic tracking-widest text-sm">Punjab's Largest Industrial Zone</span>
            </div>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Looking for a reliable <strong>heat treatment company near Focal Point, Ludhiana</strong>? Focal Point is home to over
              6,000 industrial units across 8 phases — manufacturing everything from auto parts and bicycles to fasteners, machine
              tools and export components. <strong>{SITE_NAME}</strong> provides same-area induction hardening and heat treatment
              pickup and delivery for all Focal Point businesses, with quick turnaround and certified HRC reports.
            </p>
          </motion.section>

          {/* Hyperlocal context — Focal Point as Ludhiana's industrial hub */}
          <motion.section
            className="py-12 md:py-16 border-t border-border max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none">
              Focal Point — <span className="text-primary">Ludhiana's Industrial Heart</span>
            </h2>
            <div className="space-y-5 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                Spread across <strong>Phases 1 to 8</strong>, the Focal Point industrial estate is the manufacturing engine of
                Ludhiana — often called the Manchester of India. Thousands of small and medium units here produce automotive
                transmission parts, complete bicycles and cycle components, agricultural and tractor parts, fasteners, hand tools and
                precision machine-tool assemblies. Almost every one of these products has a steel component that needs to be
                hard-wearing, fatigue-resistant and dimensionally accurate — and that is exactly where surface heat treatment comes
                in.
              </p>
              <p>
                Because we operate close to the estate, we understand the working rhythm of Focal Point units: tight delivery
                schedules, OEM quality documentation and the need to keep a production line moving. Our <strong>induction hardening
                near Focal Point</strong> service is built around that — quick pickup from your factory gate, a controlled 58–62 HRC
                case on the wear surface, minimal distortion, and a Rockwell test report with every batch. Whether you are a Phase 1
                auto-part shop, a Phase 5 cycle-parts manufacturer or a Phase 8 machine-tool builder, your components are treated to
                the same repeatable standard.
              </p>
              <p>
                Common jobs we handle for Focal Point manufacturers include gear-tooth hardening for transmission and gearbox makers,
                shaft and axle hardening for auto and tractor units, bearing-race treatment, crankshaft hardening for engine
                rebuilders, and case hardening for fasteners and small components. If you are unsure which process suits your part,
                send us the drawing — we advise on the right hardening route, hardness range and case depth for each application.
              </p>
            </div>
          </motion.section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                Services for <span className="text-primary">Focal Point Units</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We serve all phases of Focal Point — Phase 1, 2, 3, 4, 5, 6, 7, 8, and the surrounding industrial areas — with
                induction hardening and heat treatment for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                  { title: 'Gear Tooth Induction', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                  { title: 'Bearing Race Treatment', href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana' },
                  { title: 'Crankshaft Hardening', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
                  { title: 'Case Hardening', href: '/case-hardening-heat-treatment' },
                  { title: 'On-site Service', href: '/induction-heat-treatment/on-site' },
                ].map(item => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border hover:border-primary/50 transition-all group"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-foreground uppercase tracking-tight text-xs group-hover:text-primary transition-colors">{item.title}</span>
                  </Link>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                Need the full process detail? Explore our{' '}
                <Link href="/induction-heat-treatment" className="text-primary font-bold hover:underline">induction heat treatment guide</Link>{' '}
                or jump straight to{' '}
                <Link href="/induction-heat-treatment/induction-hardening-gears-ludhiana" className="text-primary font-bold hover:underline">gear hardening in Ludhiana</Link>{' '}
                and{' '}
                <Link href="/induction-heat-treatment/induction-hardening-shafts-ludhiana" className="text-primary font-bold hover:underline">shaft hardening in Ludhiana</Link>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="p-8 bg-secondary/20 rounded-[2rem] border border-primary/10">
                <h3 className="text-xl font-black uppercase italic tracking-tighter mb-4">Industries in Focal Point We Serve</h3>
                <ul className="space-y-3">
                  {focalPointIndustries.map(ind => (
                    <li key={ind} className="flex items-center gap-3 text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-medium text-sm">{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-secondary/20 rounded-[2rem] border border-primary/10">
                <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-6">
                  <MapPin className="h-5 w-5" />
                  Focal Point — All Phases, Ludhiana
                </div>
                <p className="text-muted-foreground mb-6 font-medium">
                  Quick pickup from your Focal Point factory. Delivery back within 2–4 days. No transportation headache — we handle the logistics.
                </p>
                <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                  <Link href="/contact">Book Focal Point Pickup</Link>
                </Button>
                <a
                  href={`tel:${SITE_PHONE_NUMBER.replace(/\s/g, '')}`}
                  className="mt-4 flex items-center justify-center gap-2 py-4 border border-primary text-primary rounded-xl font-black uppercase italic text-sm hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Call Now: {SITE_PHONE_NUMBER}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Pricing & Turnaround — mid-funnel commercial intent */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// PRICING & TURNAROUND //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Rates & Lead Time for <span className="text-primary">Focal Point</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive heat treatment rates for both prototype batches and bulk OEM production from Focal Point units.
              Final pricing depends on component weight, size, case depth, steel grade and quantity — share your drawing for an exact
              quote within 24 hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk and repeat orders from Focal Point OEMs.' },
                { icon: FileText, title: 'Minimum Order', desc: 'No rigid minimum — single trial parts to multi-thousand-piece lots accepted.' },
                { icon: Clock, title: 'Turnaround', desc: 'Standard 2–4 working days; urgent same-week jobs for nearby Focal Point units.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your Focal Point Quote
                </a>
              </Button>
            </div>
          </section>

          {/* Why Focal Point businesses trust us */}
          <section className="py-16 border-t border-border">
            <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-10 text-center">
              Why Focal Point Units <span className="text-primary">Choose Us</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Same-Day Quote', desc: 'Call or WhatsApp with component details — rate confirmed the same day.', icon: CheckCircle2 },
                { title: 'Pickup & Delivery', desc: 'We collect from your Focal Point unit and deliver back. No downtime for your team.', icon: MapPin },
                { title: 'Certified Reports', desc: 'Rockwell HRC test reports with every batch for your quality records.', icon: Settings },
              ].map(item => (
                <div key={item.title} className="p-6 bg-secondary/20 border border-border rounded-2xl text-center">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-black uppercase italic tracking-tight mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ — synced with FAQPage schema */}
          <motion.section
            className="py-20 max-w-4xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none">
              Focal Point Heat Treatment <span className="text-primary">FAQs</span>
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

          <section className="py-16 border-t border-border">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-10 text-center">
              Nearby <span className="text-primary">Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings },
                { title: 'Gear Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes },
                { title: 'Sherpur Ludhiana', href: '/induction-heat-treatment/sherpur-ludhiana', icon: MapPin },
                { title: 'Dehlon', href: '/induction-heat-treatment/dehlon', icon: MapPin },
                { title: 'Technical Guide', href: '/induction-heat-treatment', icon: Cpu },
                { title: 'Contact & Quote', href: '/contact', icon: ArrowRight },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 flex flex-col items-center text-center shadow-sm transition-all"
                  >
                    <link.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm">{link.title}</h3>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>

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
          <a href={`tel:${SITE_PHONE_NUMBER.replace(/\s/g, '')}`} className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase text-xs py-3 rounded-lg">
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
