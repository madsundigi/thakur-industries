'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Cpu, 
  Search, 
  Droplet,
  Gauge,
  FileText,
  Phone,
  Boxes,
  History,
  Settings,
  Activity,
  Circle,
  Package,
  Truck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Helper for event tracking
const trackEvent = (action: string, label: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      'event_category': 'Engagement',
      'event_label': label
    });
  }
};

// Animations
const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function BearingHardeningSEOPage() {
  const mainImage = PlaceHolderImages.find(img => img.id === 'appBearingHardening');
  const qcImage = PlaceHolderImages.find(img => img.id === 'processFinishing');

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Induction Hardening for Bearings & Bearing Races",
    "url": `${SITE_URL}/induction-heat-treatment/induction-hardening-bearings-ludhiana/`,
    "description": "Accurate induction hardening for bearing races and seats. Improve wear life & fatigue resistance — testing & certification available in Ludhiana.",
    "provider": {
      "@type": "LocalBusiness",
      "name": SITE_NAME,
      "telephone": SITE_PHONE_NUMBER,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1486/5, Street Number 1, Harkrishan Nagar, Shimlapuri",
        "addressLocality": "Ludhiana",
        "addressRegion": "Punjab",
        "addressCountry": "IN"
      }
    },
    "areaServed": ["Ludhiana", "Jalandhar", "Khanna", "Mandi Gobindgarh", "North India"]
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <div className="bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">
          
          <PageHeader
            title="Induction Hardening for"
            highlightedWord="Bearings"
            description="Achieve extreme surface hardness and dimensional stability for bearing races, rings, and seats. Our high-frequency induction process delivers HRC 60+ results optimized for heavy-load industrial and automotive bearings."
            className="text-center"
          />

          {/* Why Precision Matters Section */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
              >
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Why <span className="text-primary">Precision</span> Matters
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Bearing races operate under extreme contact stress. At <strong>{SITE_NAME}</strong>, we understand that even a 5-micron deviation in case depth can lead to premature failure.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Uniform Hardness: Eliminating soft zones in the raceway.",
                      "Dimensional Stability: Minimal warping for easier post-hardening grinding.",
                      "Fatigue Life: Optimized martensitic structure to resist pitting.",
                      "Localized Control: Hardening only the seat/race, leaving the flange ductile."
                    ].map(item => (
                      <li key={item} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                        <Circle className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span className="font-bold text-foreground uppercase tracking-tight text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div 
                className="relative h-72 md:h-[450px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
              >
                {mainImage && (
                  <Image 
                    src={mainImage.imageUrl} 
                    alt="Close-up of a large industrial bearing assembly being heat treated" 
                    fill 
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Technical Targets - Staggered Scale */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <motion.h2 
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Materials & <span className="text-primary">Hardness Specs</span>
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { title: "EN31 / 52100", desc: "The gold standard for bearing steel. We achieve HRC 60–64 with extreme metallurgical stability." },
                { title: "EN24 / 4340", desc: "Used for high-impact industrial bearings. Targeted hardening for HRC 55–60 requirements." },
                { title: "Case Hardening Alloys", desc: "Precise induction depth control for 20MnCr5 or 8620 bearing seats." },
                { title: "Case Depth Control", desc: "Shallow 0.5mm for precision pins or deep 5mm for heavy mill bearings." },
                { title: "Induction Bores", desc: "Specialized ID (Internal Diameter) hardening for bearing seats in hubs." },
                { title: "Repeatability", desc: "99.8% consistency across high-volume OEM bearing production runs." }
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="bg-card/50 p-8 rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <Zap className="h-8 w-8 text-primary mb-6" />
                  <h3 className="font-bold text-xl mb-3 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Quality & Traceability Section */}
          <section className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl lg:order-last"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
              >
                {qcImage && (
                  <Image 
                    src={qcImage.imageUrl} 
                    alt="Hardness mapping and quality inspection of bearing raceway" 
                    fill 
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
              >
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Inspection & <span className="text-primary">Traceability</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground font-medium">
                  <p>
                    For OEM and export-grade bearings, we provide full digital documentation:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Hardness Maps: Verification across multiple race points.",
                      "Batch Reports: Detailed cycle data for every lot.",
                      "NDT Testing: Magnetic particle inspection for crack-free assurance.",
                      "Microstructure Analysis: Validation of grain refinement."
                    ].map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Logistics & Kitting Section */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <motion.h2 
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Logistics & <span className="text-primary">Kitting</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Package, title: "OEM Kitting", desc: "Custom packaging and kitting for ready-to-assemble bearing units." },
                { icon: Truck, title: "Logistics Support", desc: "Reliable pickup and delivery for bulk job work across Punjab." },
                { icon: Boxes, title: "High-Volume Runs", desc: "Dedicated production lines for massive monthly bearing quantities." }
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="flex flex-col items-center text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all">
                  <item.icon className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Related Clusters */}
          <section className="py-24 border-t border-border">
            <motion.h2 
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Related <span className="text-primary">Clusters</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: "Shaft Hardening", href: "/induction-heat-treatment/induction-hardening-shafts-ludhiana", icon: Settings, label: "Spindles & Axles" },
                { title: "Gear Hardening", href: "/induction-heat-treatment/induction-hardening-gears-ludhiana", icon: Boxes, label: "Transmissions" },
                { title: "Main Pillar", href: "/induction-heat-treatment", icon: Cpu, label: "Heat Treatment Guide" }
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <motion.div 
                    variants={scaleUp}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-secondary/30 border border-border rounded-2xl transition-all hover:border-primary/50 flex flex-col items-center text-center shadow-sm"
                  >
                    <link.icon className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm">{link.title}</h4>
                    <p className="text-xs text-muted-foreground mt-2">{link.label}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <motion.section 
            className="py-24 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none">
              Hardening <span className="text-primary">Insights</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-2xl bg-secondary/30 px-8 transition-all hover:border-primary/20 group">
                <AccordionTrigger className="text-left font-bold uppercase italic tracking-tight text-lg md:text-xl hover:text-primary py-8 hover:no-underline">
                  Can you harden internal bearing raceways?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-8 font-medium leading-relaxed text-base">
                  Yes. Using specialized internal induction coils, we can harden the ID (Internal Diameter) of bearing hubs and rings without affecting the external mounting surfaces.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-2xl bg-secondary/30 px-8 transition-all hover:border-primary/20 group">
                <AccordionTrigger className="text-left font-bold uppercase italic tracking-tight text-lg md:text-xl hover:text-primary py-8 hover:no-underline">
                  What is the smallest bearing race you can treat?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-8 font-medium leading-relaxed text-base">
                  We can handle precision bearing rings from 25mm in diameter up to large industrial slew rings exceeding 2000mm.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border rounded-2xl bg-secondary/30 px-8 transition-all hover:border-primary/20 group">
                <AccordionTrigger className="text-left font-bold uppercase italic tracking-tight text-lg md:text-xl hover:text-primary py-8 hover:no-underline">
                  Do you offer sample testing for new alloys?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-8 font-medium leading-relaxed text-base">
                  Absolutely. We encourage OEMs to send samples for trial hardening. We provide a full test report including HRC profile and case depth measurement before proceeding with bulk job work.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.section>

        </div>
        <CTASection />

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-border shadow-2xl">
          <a 
            href={`tel:${SITE_PHONE_NUMBER}`} 
            className="flex-1 bg-accent text-accent-foreground py-4 text-center text-sm font-bold flex items-center justify-center gap-2"
            onClick={() => trackEvent('phone_call_click', 'Mobile Sticky Call')}
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <Link 
            href="/contact" 
            className="flex-1 bg-primary text-primary-foreground py-4 text-center text-sm font-bold flex items-center justify-center gap-2"
            onClick={() => trackEvent('cta_click', 'Mobile Sticky Quote')}
          >
            <CheckCircle2 className="h-4 w-4" /> Get Quote
          </Link>
        </div>
      </div>
    </>
  );
}
