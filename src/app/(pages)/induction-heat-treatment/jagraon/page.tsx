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
  Settings,
  Boxes,
  MapPin,
  Truck,
  Phone,
  MessageSquare,
  Clock,
  Award,
  ShieldCheck,
  Star,
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

const PAGE_URL = `${SITE_URL}/induction-heat-treatment/jagraon`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I am from Jagraon and I need induction hardening job work. Please find my drawing attached.');

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
    q: 'Do you offer induction hardening in Jagraon?',
    a: 'Yes. Jagraon sits roughly 35 km from our Ludhiana plant, in the same district, so we serve Jagraon’s agricultural-implement, hosiery-machinery and auto-parts units directly. Components are collected from your unit, hardened to specification at our Ludhiana workshop and returned with a hardness report — usually within the same week.',
  },
  {
    q: 'How does pickup and delivery work for Jagraon units?',
    a: 'Because Jagraon is in the same Ludhiana district and only about 35 km away, we run quick same-district pickup and delivery. Drop us your drawing and quantity on WhatsApp, we confirm a collection slot, and your hardened parts come back fast — no need to arrange your own transport for regular batches.',
  },
  {
    q: 'Which components do you harden for Jagraon manufacturers?',
    a: 'We harden tiller and rotavator blades, cultivator tynes, plough parts, gear teeth, transmission and rotavator shafts, splines, sprockets, hosiery-machine cams and needle-bar components, plus auto-parts such as axle shafts, pins and bushes. If it is a steel part that needs a hard, wear-resistant surface, we can treat it.',
  },
  {
    q: 'What hardness and case depth can you achieve?',
    a: 'Typical surface hardness is 58–62 HRC with a controlled case depth of 0.8–3.5 mm, set to your drawing. Selective induction heating hardens only the working surface and keeps the core tough, which is ideal for shock-loaded agricultural and auto components.',
  },
  {
    q: 'What is the turnaround time for Jagraon orders?',
    a: 'Standard turnaround is 2–4 working days after we receive the parts and an approved specification. Thanks to the short same-district distance, urgent same-week jobs are easy to arrange for regular Jagraon clients.',
  },
  {
    q: 'What steel grades do you induction harden?',
    a: 'EN8, EN19 (4140), EN24 (4340), 20MnCr5, EN36C and similar medium-carbon and alloy steels respond best. A carbon content of 0.35–0.60% gives the strongest hardness response. Share your material grade with the drawing and we will confirm suitability.',
  },
  {
    q: 'Can you handle both small batches and bulk OEM orders?',
    a: 'Yes. We accept single trial pieces for testing as well as high-volume production lots from Jagraon’s agri-implement and auto-component makers. Bulk and repeat orders receive better per-piece pricing.',
  },
  {
    q: 'How do I get a price for induction hardening in Jagraon?',
    a: 'Send your component drawing, material grade and quantity on WhatsApp or through our contact form. We price most jobs per kilogram or per piece and return an exact quotation within 24 hours, with INR rates and a clear turnaround commitment.',
  },
];

export default function JagraonPage() {
  const agriImage = PlaceHolderImages.find((img) => img.id === 'industryAgriculture');
  const gearImage = PlaceHolderImages.find((img) => img.id === 'appGearHardening');

  // Service + LocalBusiness schema — enriched with full address, offers,
  // aggregateRating and same-district areaServed for Jagraon.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening in Jagraon',
    serviceType: 'Induction Hardening Job Work',
    url: `${PAGE_URL}/`,
    description:
      'Induction hardening in Jagraon, Ludhiana district — 58–62 HRC, controlled case depth, minimal distortion. Same-district job work for agricultural-implement, hosiery-machinery and auto-parts units, with quick pickup and delivery from our Ludhiana plant.',
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
    areaServed: ['Jagraon', 'Ludhiana', 'Samrala', 'Raikot'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Induction hardening job work for Jagraon units, priced per kg or per piece. Request a custom quotation.',
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
          { name: 'Induction Hardening in Jagraon', href: '/induction-heat-treatment/jagraon' },
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
              <li className="text-primary">Jagraon</li>
            </ol>
          </nav>

          <PageHeader
            title="Induction Hardening in"
            highlightedWord="Jagraon"
            description="Same-district induction hardening for Jagraon’s agricultural-implement, hosiery-machinery and auto-parts units — 58–62 HRC with controlled case depth. Just ~35 km from our Ludhiana plant for quick pickup and delivery."
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
                { icon: Truck, label: '~35 km · Same District' },
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
                  <MessageSquare className="h-5 w-5" /> WhatsApp Jagraon
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
              Looking for dependable <strong>induction hardening in Jagraon</strong>? At <strong>{SITE_NAME}</strong>, we give
              Jagraon’s agricultural-implement, hosiery-machinery and auto-parts makers precision surface hardening at 58–62 HRC
              with controlled case depth and minimal distortion. Sitting only about 35 km away in the same Ludhiana district, our
              plant turns Jagraon job work around fast — with quick pickup and delivery on every batch.
            </p>
          </motion.section>

          {/* Local context — Jagraon industry */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// JAGRAON, LUDHIANA DISTRICT //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Built for Jagraon’s <span className="text-primary">Workshops</span>
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Jagraon is a busy manufacturing town in the heart of the Ludhiana district. Its industrial base is dominated by
                    <strong> agricultural-implement units</strong> turning out tiller and rotavator blades, cultivator tynes and
                    plough parts; <strong>hosiery-machinery makers</strong> serving Ludhiana’s famous knitwear cluster; and a growing
                    set of <strong>auto-parts units</strong> supplying tractor and two-wheeler component lines. Every one of these
                    products lives or dies on the wear life of its working surfaces — which is exactly where induction hardening
                    earns its keep.
                  </p>
                  <p>
                    Agricultural blades and tynes spend their lives cutting through abrasive soil; rotavator and transmission shafts
                    carry shock loads; hosiery-machine cams and needle-bar parts demand a hard, smooth, fatigue-resistant face. We
                    raise these surfaces to a tough 58–62 HRC while keeping the core ductile, so the part shrugs off wear without
                    cracking under impact.
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
                {agriImage && (
                  <Image
                    src={agriImage.imageUrl}
                    alt="Induction hardened agricultural implement components for Jagraon farm-equipment units"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Same-district proximity advantage */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <p className="section-label text-center">// SAME-DISTRICT ADVANTAGE //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Just ~35 km from <span className="text-primary">Our Ludhiana Plant</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              Jagraon and our Ludhiana workshop sit in the same district, barely 35 km apart on the Ludhiana–Jagraon road. That
              short distance is a real commercial advantage for local units — it means faster logistics, lower freight and tighter
              control over your delivery schedule.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Truck, title: 'Quick Pickup & Delivery', desc: 'Same-district collection from your Jagraon unit and return of hardened parts — no long-haul transport headaches.' },
                { icon: Clock, title: 'Fast Turnaround', desc: 'Standard 2–4 working days, with urgent same-week jobs easy to schedule given the short distance.' },
                { icon: MapPin, title: 'Local Accountability', desc: 'A nearby, same-district partner you can call, visit and rely on — not a far-off vendor.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="bg-card/50 p-8 rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <item.icon className="h-8 w-8 text-primary mb-6" />
                  <h3 className="font-bold text-xl mb-3 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Components we harden for Jagraon */}
          <section className="py-16 md:py-24 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                className="relative h-72 md:h-[450px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
              >
                {gearImage && (
                  <Image
                    src={gearImage.imageUrl}
                    alt="Induction hardened gears and shafts for Jagraon auto-parts and machinery units"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                <p className="section-label">// COMPONENTS //</p>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Components We <span className="text-primary">Harden</span>
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    From farm gates to hosiery floors to auto-part lines, Jagraon units bring us a wide mix of work. Common parts we
                    induction harden include:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Tiller & Rotavator Blades',
                      'Cultivator Tynes & Plough Parts',
                      'Rotavator & Transmission Shafts',
                      'Gear Teeth, Splines & Sprockets',
                      'Hosiery-Machine Cams & Needle Bars',
                      'Axle Shafts, Pins & Bushes',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span className="font-bold text-foreground uppercase tracking-tight text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Technical specifications table */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// SPECIFICATIONS //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Hardening <span className="text-primary">Specifications</span>
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
                    ['Typical Components', 'Blades, tynes, shafts, gears, cams, pins'],
                    ['Steel Grades', 'EN8, EN19, EN24, 4140, 20MnCr5, EN36C'],
                    ['Heating Temperature', '900–950 °C (induction)'],
                    ['Quench Medium', 'Polymer / water-based, controlled'],
                    ['Distance from Plant', '~35 km · same Ludhiana district'],
                    ['Turnaround', '2–4 working days (standard)'],
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

          {/* Why Jagraon units choose us */}
          <section className="py-20 border-t border-border">
            <p className="section-label text-center">// WHY CHOOSE US //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Why Jagraon Units Choose <span className="text-primary">{SITE_NAME}</span>
            </motion.h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              Local agri-implement, hosiery-machinery and auto-parts manufacturers come back to us because we combine metallurgical
              precision with the convenience of a same-district partner — consistent hardness, honest INR pricing and a turnaround
              that keeps their production lines moving.
            </p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { icon: Award, title: 'Consistent 58–62 HRC', desc: 'Repeatable hardness on every blade, shaft and gear, batch after batch.' },
                { icon: Tractor, title: 'Agri-Implement Know-How', desc: 'Hardening profiles tuned for abrasive soil wear and shock loads.' },
                { icon: Truck, title: 'Same-District Logistics', desc: '~35 km away — quick pickup and delivery on every Jagraon batch.' },
                { icon: ShieldCheck, title: 'ISO-Grade Process', desc: 'Documented, traceable hardening with a hardness report on dispatch.' },
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Capabilities / internal links */}
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// CAPABILITIES //</p>
            <motion.h2
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              Explore Our <span className="text-primary">Services</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { title: 'Gear Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes, label: 'Gear Teeth & Pinions' },
                { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Transmission Shafts' },
                { title: 'Case Hardening', href: '/case-hardening', icon: Zap, label: 'Carburising Service' },
                { title: 'Induction Heat Treatment', href: '/induction-heat-treatment', icon: Cpu, label: 'Main Service Hub' },
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
          <section className="py-16 md:py-20 border-t border-border">
            <p className="section-label text-center">// NEARBY LOCATIONS //</p>
            <motion.h2
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-10 text-center leading-none"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              We Also Serve <span className="text-primary">Around Ludhiana</span>
            </motion.h2>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
              {[
                { title: 'Focal Point, Ludhiana', href: '/induction-heat-treatment/focal-point-ludhiana' },
                { title: 'Samrala', href: '/induction-heat-treatment/samrala' },
                { title: 'Sherpur, Ludhiana', href: '/induction-heat-treatment/sherpur-ludhiana' },
              ].map((loc) => (
                <Link
                  key={loc.href}
                  href={loc.href}
                  className="group inline-flex items-center gap-2 px-5 py-3 bg-secondary/30 border border-border rounded-full hover:border-primary/50 transition-all"
                >
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-black uppercase tracking-tight text-xs text-foreground group-hover:text-primary transition-colors">{loc.title}</span>
                  <ArrowRight className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
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
              Jagraon Hardening <span className="text-primary">FAQs</span>
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
