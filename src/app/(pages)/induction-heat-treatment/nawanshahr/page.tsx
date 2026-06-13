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
  MapPin,
  Settings,
  Boxes,
  Truck,
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

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/nawanshahr`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent(
    'Hello, I am from Nawanshahr (SBS Nagar) and need induction hardening job work. Please find my component drawing attached.',
  );

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const scaleUp = {
  hidden: { opacity: 0, scale: 0.85 },
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
    q: 'Do you offer induction hardening in Nawanshahr (SBS Nagar)?',
    a: 'Yes. We regularly serve agricultural-implement makers and small engineering units across Nawanshahr and Shaheed Bhagat Singh Nagar from our Ludhiana facility, roughly 50 km away. Send your component drawing on WhatsApp and we will quote within 24 hours, then arrange pickup or advise the easiest transport route.',
  },
  {
    q: 'Which agricultural-implement components can you harden for Nawanshahr units?',
    a: 'We harden cultivator tines, rotavator blades, harrow discs, plough points, seed-drill shafts, gears, sprockets and axle stubs — the wear parts that define implement life in SBS Nagar workshops. Surfaces reach 58–62 HRC while the core stays tough enough to survive stony Doaba field conditions.',
  },
  {
    q: 'How far is your facility from Nawanshahr and how does logistics work?',
    a: 'Our hardening workshop in Ludhiana is about 50 km from Nawanshahr via Samrala and Khanna. Most Nawanshahr clients send parts by daily goods transport or a shared pickup; we batch jobs to keep freight low and return hardened, tested components on a 2–4 day standard cycle.',
  },
  {
    q: 'What hardness and case depth can you achieve on implement wear parts?',
    a: 'Typical tines and blades reach 55–62 HRC with a controlled case depth of 0.8–2.5 mm depending on steel grade and abrasion demand. We tune the profile so cutting edges resist wear without becoming brittle in rocky soil.',
  },
  {
    q: 'Can you handle small batches from a single Nawanshahr engineering unit?',
    a: 'Absolutely. There is no rigid minimum — a single trial shaft for a Nawanshahr fabricator or a bulk lot of several thousand tines for an implement OEM are both welcome. Smaller units get the same documented hardness checks as large buyers.',
  },
  {
    q: 'Do you provide test certificates for hardened parts?',
    a: 'Yes. Every job leaves with HRC verification, a case-depth check where specified and dimensional inspection. The documentation suits agri-equipment buyers and engineering OEMs who need traceable quality for their own customers.',
  },
  {
    q: 'Why do Nawanshahr units choose Thakur Industries over local options?',
    a: 'Nawanshahr has many fabrication and implement units but few dedicated induction-hardening lines. Rather than depend on inconsistent local heat treatment, units send wear parts the short 50 km to our calibrated induction equipment for repeatable 58–62 HRC, faster turnaround and certified results.',
  },
];

export default function NawanshahrPage() {
  // Service / LocalBusiness schema — enriched with full address, offers,
  // aggregateRating and a Nawanshahr-focused service area.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Nawanshahr',
    serviceType: 'Induction Hardening & Heat Treatment',
    url: `${PAGE_URL}/`,
    description:
      'Induction hardening job work for Nawanshahr (SBS Nagar) agricultural-implement and small-engineering units — tines, blades, shafts and gears at 58–62 HRC with certified results, served from Ludhiana ~50 km away.',
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
    areaServed: ['Nawanshahr', 'Phagwara', 'Jalandhar', 'Samrala'],
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
          { name: 'Induction Hardening in Nawanshahr', href: '/induction-heat-treatment/nawanshahr' },
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
              <li className="text-primary">Nawanshahr</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Nawanshahr"
            description="Precision induction hardening job work for Nawanshahr & Shaheed Bhagat Singh Nagar agri-implement and engineering units — tines, blades, shafts and gears at 58–62 HRC, served from our Ludhiana facility just ~50 km away."
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
                { icon: Truck, label: '~50 km from Ludhiana' },
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
                  <MessageSquare className="h-5 w-5" /> WhatsApp Drawing
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
              alt="Induction hardening of agricultural-implement parts for Nawanshahr units at Thakur Industries Ludhiana"
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
              Looking for dependable <strong>induction hardening in Nawanshahr</strong>? At <strong>{SITE_NAME}</strong>, we
              harden the wear parts that keep Nawanshahr and Shaheed Bhagat Singh Nagar (SBS Nagar) workshops running — cultivator
              tines, rotavator blades, shafts, gears and sprockets — to a hard-wearing 58–62 HRC surface over a tough, impact-ready
              core. Our calibrated induction line sits just <strong>~50 km away in Ludhiana</strong>, so Doaba-belt agri-implement
              makers and small engineering units get OEM-grade hardening without setting up costly in-house heat treatment.
            </p>
          </motion.section>

          {/* UNIQUE LOCAL CONTENT — Nawanshahr / SBS Nagar */}
          <section className="py-16 md:py-20 max-w-4xl mx-auto">
            <motion.div
              className="space-y-6 text-base md:text-lg text-muted-foreground font-medium leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 leading-none text-foreground">
                Heat Treatment for <span className="text-primary">Nawanshahr&rsquo;s</span> Industry
              </h2>
              <p>
                Nawanshahr — officially Shaheed Bhagat Singh Nagar — sits in the heart of the Doaba region, surrounded by farmland
                and dotted with the small fabrication shops and agricultural-implement units that supply Punjab&rsquo;s farmers.
                From the town itself out toward Banga, Rahon and Balachaur, you will find workshops turning out cultivators,
                rotavators, seed drills, harrows and trolley parts. These units are skilled at cutting, welding and assembly, but
                most do not run a dedicated induction-hardening line — and that is exactly the gap we fill from Ludhiana.
              </p>
              <p>
                The implements built around Nawanshahr live a hard life. Tines bite into stony Doaba soil season after season,
                rotavator blades chop through crop residue, plough points drag through grit, and harrow discs face constant
                abrasion. Without proper surface hardening, these edges round off and wear out fast, and farmers come back
                unhappy. That is why local implement makers send their wear parts to us: we raise the working surfaces to
                <strong> 58&ndash;62 HRC</strong> with a controlled case depth, so the cutting edges stay sharp far longer while the
                core remains tough enough to absorb shock loads and rocky impacts without cracking.
              </p>

              <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter pt-4 text-foreground">
                Components We Harden for SBS Nagar Units
              </h3>
              <p>
                Beyond field implements, Nawanshahr&rsquo;s small-scale engineering units fabricate machine parts, fasteners and
                sub-assemblies for larger OEMs. We routinely induction-harden a wide range of their components, including:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                {[
                  'Cultivator & spring tines',
                  'Rotavator & slasher blades',
                  'Plough points & shovels',
                  'Harrow discs & coulters',
                  'Seed-drill & PTO shafts',
                  'Spur, helical & bevel gears',
                  'Sprockets & chain wheels',
                  'Axle stubs & pivot pins',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-bold text-foreground uppercase tracking-tight text-xs">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter pt-4 text-foreground">
                Logistics: Just ~50 km from Ludhiana
              </h3>
              <p>
                Distance is the first question every Nawanshahr workshop asks, and the answer works in their favour. Our hardening
                facility is roughly <strong>50 km from Nawanshahr</strong>, an easy run via Samrala and Khanna on the
                Ludhiana&ndash;Chandigarh corridor. Most clients send parts on daily goods transport or a shared pickup; we batch
                incoming jobs to keep freight cost low and return hardened, tested components on a standard <strong>2&ndash;4 working
                day</strong> cycle. For larger consignments we coordinate collection so a single trip covers both directions —
                cheaper and faster than chasing inconsistent local heat treatment.
              </p>

              <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter pt-4 text-foreground">
                Why Nawanshahr Units Choose Us
              </h3>
              <p>
                Plenty of fabrication happens in and around SBS Nagar, but very few units have access to a calibrated, repeatable
                induction-hardening process. Improvised or open-flame hardening gives uneven hardness, warping and parts that fail
                in the field. By sending wear components the short distance to our induction equipment, Nawanshahr implement makers
                and engineering units get consistent <strong>58&ndash;62 HRC</strong> results batch after batch, minimal distortion
                thanks to selective heating, and a test certificate they can pass on to their own buyers. We treat a single trial
                shaft from a small fabricator with the same care as a multi-thousand-piece tine order from an implement OEM. For
                Doaba manufacturers who depend on durable wear parts to keep customers happy, that reliability is the difference
                between repeat orders and warranty headaches — and it is why our Nawanshahr clients keep coming back.
              </p>
            </motion.div>
          </section>

          {/* Industrial Capabilities + Local support card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 md:py-20 items-center border-t border-border">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                Industrial <span className="text-primary">Capabilities</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Our Nawanshahr service supports the wider Doaba belt — including Banga, Phagwara, Jalandhar and Samrala — with
                  professional surface hardening for agricultural and engineering components.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                    { title: 'Gear Tooth Induction', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                    { title: 'Case Hardening', href: '/case-hardening' },
                    { title: 'On-site Hardening', href: '/induction-heat-treatment/on-site' },
                  ].map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border hover:border-primary/50 transition-all group"
                    >
                      <Zap className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-foreground uppercase tracking-tight text-xs group-hover:text-primary transition-colors">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-10 bg-secondary/20 rounded-[2rem] border border-primary/10 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Nawanshahr Support</h3>
              <p className="text-muted-foreground mb-8 font-medium">
                Supporting the Doaba industrial belt with precision heat treatment job work. We ensure uniform, certified results
                for agri-implement wear parts and all steel-alloy engineering components.
              </p>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <MapPin className="h-5 w-5" /> Area: Nawanshahr, Banga, Phagwara, Samrala
              </div>
              <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                <Link href="/contact">Inquire for Nawanshahr</Link>
              </Button>
            </motion.div>
          </div>

          {/* Specifications */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// SPECIFICATIONS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Nawanshahr Hardening <span className="text-primary">Specifications</span>
            </motion.h2>
            <motion.div
              className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <table className="w-full text-left">
                <tbody className="text-sm md:text-base">
                  {[
                    ['Surface Hardness', '55–62 HRC (wear surface)'],
                    ['Case Depth', '0.8 mm – 2.5 mm (controlled to spec)'],
                    ['Common Parts', 'Tines, blades, plough points, shafts, gears, sprockets'],
                    ['Steel Grades', 'EN8, EN19, EN24, 4140, boron & spring steels'],
                    ['Distance from Ludhiana', '~50 km via Samrala & Khanna'],
                    ['Turnaround', '2–4 working days (standard)'],
                    ['Testing', 'HRC verification, case-depth & dimensional check'],
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

          {/* Nearby towns we serve — internal links to sibling location pages */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// NEARBY AREAS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              We Also Serve <span className="text-primary">Nearby Towns</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { town: 'Phagwara', href: '/induction-heat-treatment/phagwara' },
                { town: 'Jalandhar', href: '/induction-heat-treatment/jalandhar' },
                { town: 'Samrala', href: '/induction-heat-treatment/samrala' },
              ].map((t) => (
                <motion.div key={t.town} variants={scaleUp}>
                  <Link
                    href={t.href}
                    className="group flex items-center justify-between gap-3 p-6 bg-secondary/30 border border-border rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="font-black uppercase italic tracking-tight text-foreground group-hover:text-primary transition-colors">{t.town}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Related Services */}
          <section className="py-16 md:py-20 border-t border-border">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Technical <span className="text-primary">Solutions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Transmission & PTO Shafts' },
                { title: 'Gear Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes, label: 'Gear Teeth & Sprockets' },
                { title: 'Induction Heat Treatment Guide', href: '/induction-heat-treatment', icon: Cpu, label: 'Main Service Hub' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <motion.div
                    variants={scaleUp}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-card border border-border rounded-2xl transition-all hover:border-primary/50 flex flex-col items-center text-center shadow-sm h-full"
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
            className="py-20 md:py-24 max-w-4xl mx-auto border-t border-border"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none">
              Nawanshahr Hardening <span className="text-primary">FAQs</span>
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
