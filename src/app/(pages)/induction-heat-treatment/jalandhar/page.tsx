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
  History,
  Clock,
  Phone,
  MessageSquare,
  MapPin,
  Truck,
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
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/jalandhar`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I need induction hardening job work in Jalandhar. Please find my component drawing attached.');

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
    q: 'Do you offer induction hardening in Jalandhar?',
    a: 'Yes. We serve Jalandhar, Phagwara and Nawanshahr from our Ludhiana induction-hardening unit, roughly 60 km away on NH-44. Manufacturers send hand tools, agricultural-implement parts, dies and pipe fittings for surface hardening, and we return them with certified hardness reports. Most Jalandhar jobs are picked up and delivered on a regular shuttle to keep transit time and cost low.',
  },
  {
    q: 'How far is your facility from Jalandhar, and how does pickup work?',
    a: 'Our workshop is in Shimlapuri, Ludhiana — about 60 km and roughly an hour from Jalandhar by road. For batch orders we arrange collection and return delivery so your team never has to organise transport. Small trial pieces can also be couriered directly to us.',
  },
  {
    q: 'Which Jalandhar components do you commonly induction harden?',
    a: 'Hand tools (spanners, pliers, chisels, plier jaws), agricultural-implement parts (tine points, harrow discs, cultivator shovels), press and forging dies, valve and pipe-fitting bodies, sprockets, shafts and pins. If a part needs a hard, wear-resistant surface with a tough core, induction hardening is usually the right route.',
  },
  {
    q: 'What hardness and case depth can you achieve?',
    a: '58–62 HRC on the working surface is typical, with a controlled case depth from 0.8 mm up to 3.5 mm depending on the steel grade and load. Hand-tool edges, die faces and implement wear points are profiled to the exact specification you supply.',
  },
  {
    q: 'How much does induction hardening cost for Jalandhar orders?',
    a: 'Pricing is per kilogram or per piece and depends on part weight, case depth, steel grade and quantity, with better rates on bulk and repeat orders. Share your drawing and quantity on WhatsApp and we will send an exact quotation within 24 hours.',
  },
  {
    q: 'What is the turnaround time for Jalandhar job work?',
    a: 'Standard turnaround is 2–4 working days after we receive the components and an approved specification, plus pickup and return transit on the Ludhiana–Jalandhar shuttle. Urgent same-week jobs can be arranged for regular clients.',
  },
  {
    q: 'Can you harden parts for sports-goods and hand-tool exporters?',
    a: 'Yes. Jalandhar exporters need consistent, documented hardness for buyers abroad. We provide traceable HRC and case-depth reports with every batch so the parts you ship — tool jaws, sprockets, fittings and implement edges — meet export specifications.',
  },
  {
    q: 'Which steel grades do you induction harden?',
    a: 'EN8, EN19 (4140), EN24 (4340), 20MnCr5, EN31 and common carbon and tool steels used in hand tools, dies and implements. A carbon content of roughly 0.35–0.60% gives the best hardness response; we advise on the best grade and method for each part.',
  },
];

export default function JalandharPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'appShaftHardening');
  const qcImage = PlaceHolderImages.find((img) => img.id === 'processHardening');

  // Service schema — enriched with LocalBusiness provider, offers, aggregateRating & areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Jalandhar',
    serviceType: 'Induction Hardening & Heat Treatment',
    url: `${PAGE_URL}/`,
    description:
      'Induction hardening job work for Jalandhar manufacturers — hand tools, agricultural-implement parts, dies and pipe fittings at 58–62 HRC with certified reports. Served from our Ludhiana unit, ~60 km away.',
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
    areaServed: ['Jalandhar', 'Phagwara', 'Nawanshahr', 'Ludhiana'],
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
          { name: 'Jalandhar', href: '/induction-heat-treatment/jalandhar' },
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
              <li className="text-primary">Jalandhar</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Jalandhar"
            description="Precision induction hardening for Jalandhar’s hand-tool, sports-goods, agricultural-implement and pipe-fitting makers — 58–62 HRC, certified reports and fast pickup from our Ludhiana unit, about 60 km away."
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
                { icon: Truck, label: '~60 km Pickup' },
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
                  <MessageSquare className="h-5 w-5" /> WhatsApp Jalandhar
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
              Looking for dependable <strong>induction hardening in Jalandhar</strong>? At <strong>{SITE_NAME}</strong>, we provide
              precision <strong>heat treatment and surface hardening job work</strong> for Jalandhar’s hand-tool, sports-goods,
              agricultural-implement and pipe-and-valve manufacturers. We raise working surfaces to 58–62 HRC while keeping the core
              tough — and because our unit sits only about 60 km away in Ludhiana, your parts move on a regular shuttle with
              certified hardness reports on every batch.
            </p>
          </motion.section>

          {/* Jalandhar industries — unique local content */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// JALANDHAR INDUSTRY //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Built for Jalandhar’s <span className="text-primary">Tool & Implement Makers</span>
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Jalandhar is one of North India’s most concentrated manufacturing towns — a global hub for sports goods and a
                    powerhouse for hand tools, agricultural implements and pipe, valve and fitting production. From the tool clusters
                    around Basti Nau and Industrial Area Phase I &amp; II to the implement workshops feeding farms across Doaba, these
                    units share one need: components that resist wear, impact and fatigue under hard daily use.
                  </p>
                  <p>
                    That is exactly where <strong>induction hardening in Jalandhar</strong> earns its keep. A hand tool that bends or
                    a tine point that wears flat in a season is a tool that gets returned. Selective induction hardening puts a hard,
                    wear-resistant case precisely where it is needed — the jaw, the edge, the bearing surface — while the body stays
                    tough enough to absorb shock. For a sports-goods or hand-tool exporter, that is the difference between a part that
                    passes a buyer’s spec and one that does not.
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
                    alt="Induction hardened shaft and tool components for Jalandhar manufacturers at Thakur Industries Ludhiana"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Components we harden for Jalandhar */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// COMPONENTS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Jalandhar Parts We <span className="text-primary">Harden</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              Across Jalandhar’s four big sectors — sports goods, hand tools, agricultural implements and pipe fittings — these are
              the components most commonly sent to us for surface hardening:
            </p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { title: 'Hand Tools', desc: 'Spanner & plier jaws, chisels, cutting edges and striking faces hardened for grip and longevity.' },
                { title: 'Agri-Implement Parts', desc: 'Tine points, cultivator shovels, harrow discs and tiller blades for abrasive field wear.' },
                { title: 'Dies & Tooling', desc: 'Press, forging and blanking dies hardened on the working face to extend tool life.' },
                { title: 'Pipe & Valve Fittings', desc: 'Valve seats, fitting bodies, pins and sprockets needing a hard, durable contact surface.' },
              ].map((item) => (
                <motion.div key={item.title} variants={scaleUp} className="flex flex-col p-6 bg-secondary/30 rounded-2xl border border-border h-full">
                  <CheckCircle2 className="h-7 w-7 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Logistics from Ludhiana */}
          <section className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
              >
                {qcImage && (
                  <Image
                    src={qcImage.imageUrl}
                    alt="Hardness testing and certified reporting for Jalandhar induction hardening job work"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// LOGISTICS //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Only <span className="text-primary">~60 km</span> From Ludhiana
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground font-medium">
                  <p>
                    Distance is the usual objection to outsourcing heat treatment — but Jalandhar and our Ludhiana unit are barely an
                    hour apart on NH-44. That short hop changes the economics: we run a regular pickup-and-return shuttle, so your
                    components leave the shop floor and come back hardened, inspected and documented without your team chasing
                    transport.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Scheduled collection & return delivery for batch orders',
                      'Roughly one-hour transit each way on NH-44',
                      'Certified HRC & case-depth reports with every batch',
                      'Small trial pieces accepted by courier',
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

          {/* Why Jalandhar makers choose us */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <p className="section-label text-center">// WHY LOCAL MAKERS CHOOSE US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Jalandhar Manufacturers <span className="text-primary">Choose {SITE_NAME}</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { title: 'Export-Grade Consistency', desc: 'Repeatable 58–62 HRC, batch after batch, so the tools and parts you ship abroad always meet buyer specifications.' },
                { title: 'Documented Traceability', desc: 'Every Jalandhar batch returns with HRC and case-depth reports your QC and overseas buyers can rely on.' },
                { title: 'Selective Hardening', desc: 'We harden only the jaw, edge or wear face — keeping the body tough and avoiding distortion on slender tool bodies.' },
                { title: 'No Rigid Minimum', desc: 'From a single prototype die to multi-thousand-piece implement lots, both trial and bulk orders are welcome.' },
                { title: 'Material Expertise', desc: 'EN8, EN19, EN24, 20MnCr5, EN31 and tool steels common to Jalandhar tooling and implement workshops.' },
                { title: 'Local Turnaround', desc: 'Short Ludhiana–Jalandhar transit plus 2–4 day processing keeps your production line moving.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="bg-card/50 p-8 rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <ShieldCheck className="h-8 w-8 text-primary mb-6" />
                  <h3 className="font-bold text-xl mb-3 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
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
              Jalandhar <span className="text-primary">Rates & Lead Time</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              We offer competitive <strong>induction hardening rates</strong> for Jalandhar — prototype batches through bulk OEM
              production. Final pricing depends on part weight, case depth, steel grade and quantity. Share your drawing for an exact
              quote within 24 hours.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk and repeat orders.' },
                { icon: FileText, title: 'Minimum Order', desc: 'No rigid minimum — single trial parts to multi-thousand-piece lots accepted.' },
                { icon: Clock, title: 'Turnaround', desc: 'Standard 2–4 working days plus short Ludhiana–Jalandhar transit.' },
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
                  <MessageSquare className="h-5 w-5" /> Get Your Jalandhar Quote
                </a>
              </Button>
            </div>
          </section>

          {/* Related services & nearby locations — internal linking */}
          <section className="py-24 border-t border-border">
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Related <span className="text-primary">Services & Nearby Towns</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Gear Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Cpu, label: 'Spur, helical & ring gears' },
                { title: 'Shaft Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Transmission & implement shafts' },
                { title: 'Case Hardening Job Work', href: '/case-hardening-heat-treatment', icon: ShieldCheck, label: 'Hard case, tough core' },
                { title: 'Induction Heat Treatment Guide', href: '/induction-heat-treatment', icon: History, label: 'Main service hub (pillar)' },
                { title: 'Induction Hardening in Phagwara', href: '/induction-heat-treatment/phagwara', icon: MapPin, label: 'Nearby town' },
                { title: 'Induction Hardening in Nawanshahr', href: '/induction-heat-treatment/nawanshahr', icon: MapPin, label: 'Nearby town' },
                { title: 'Focal Point Ludhiana Hardening', href: '/induction-heat-treatment/focal-point-ludhiana', icon: MapPin, label: 'Our home cluster' },
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
              Jalandhar Induction Hardening <span className="text-primary">FAQs</span>
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
