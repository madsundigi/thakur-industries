
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
  MessageSquare,
  Boxes,
  History,
  Settings,
  Flame,
  Activity
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

export default function CrankshaftHardeningSEOPage() {
  const mainImage = PlaceHolderImages.find(img => img.id === 'blogCrankshafts');
  const qcImage = PlaceHolderImages.find(img => img.id === 'processFinishing');

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Induction Hardening for Crankshafts",
    "url": `${SITE_URL}/induction-heat-treatment/crankshafts-induction-hardening-ludhiana/`,
    "description": "Professional induction hardening and tempering for engine crankshafts. Increase fatigue life and journal hardness in Ludhiana.",
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Do you harden the entire crankshaft or just the journals?', acceptedAnswer: { '@type': 'Answer', text: 'We use localized induction hardening targeting specifically the journals, crank pins, and fillets. This preserves the core strength and ductility of the main shaft, preventing brittle failure under engine loads.' } },
      { '@type': 'Question', name: 'What is the maximum crankshaft length you can handle in Ludhiana?', acceptedAnswer: { '@type': 'Answer', text: 'Our workshop handles crankshafts up to 2.5 metres in length. For larger marine or power-plant engine crankshafts, we offer mobile on-site induction hardening across Punjab and North India.' } },
      { '@type': 'Question', name: 'How do you prevent cracks at oil holes during crankshaft hardening?', acceptedAnswer: { '@type': 'Answer', text: 'We use custom copper coils and digital power modulation to ensure the electromagnetic field does not concentrate excessively at oil hole edges, preventing localised overheating and thermal stress cracks.' } },
      { '@type': 'Question', name: 'What hardness is achievable on crankshaft journals?', acceptedAnswer: { '@type': 'Answer', text: 'EN24 (4340) crankshafts typically achieve 55–60 HRC on journal surfaces with a case depth of 2–4mm, while maintaining a tough ductile core for fatigue resistance.' } },
      { '@type': 'Question', name: 'Do you provide reports for crankshaft hardening job work?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every crankshaft job includes a Rockwell hardness test report with HRC values at each journal, case depth measurements, and process parameter documentation for your quality records.' } },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <div className="bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">
          
          <PageHeader
            title="Crankshaft Induction"
            highlightedWord="Hardening"
            description="Maximize engine performance with precision-controlled journal and fillet hardening. We deliver high-cycle fatigue resistance and extreme hardness for automotive and industrial crankshafts."
            className="text-center"
          />

          {/* Intro Section */}
          <motion.section 
            className="py-12 md:py-16 border-b border-border text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              Crankshafts are the most critical rotating components in any engine. At <strong>{SITE_NAME}</strong>, we specialize in high-accuracy induction heat treatment that targets bearing journals and pin areas. Our process ensures a hard martensitic surface for wear resistance while maintaining the fillet toughness required to prevent engine-destroying fatigue cracks.
            </p>
          </motion.section>

          {/* Technical Section - Split Slide */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
              >
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Journals & <span className="text-primary">Fillets</span>
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Effective crankshaft hardening requires more than just high HRC levels. We focus on the <strong>Transition Zone</strong>. 
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Journal Hardening: HRC 52–60 for superior bearing life.",
                      "Fillet Hardening: Precision heating to enhance fatigue resistance.",
                      "Oil Hole Protection: Preventing cracks at lubrication points.",
                      "Core Integrity: Preserving ductility for high-RPM stability."
                    ].map(item => (
                      <li key={item} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
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
                    alt="Engine crankshaft being prepared for induction hardening" 
                    fill 
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Workflow Section - Staggered Scale */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <motion.h2 
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our <span className="text-primary">Workflow</span>
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Flame, title: "Stress Relieving", desc: "Thermal stabilization before the main hardening cycle to ensure zero micro-cracks." },
                { icon: Cpu, title: "Induction Cycle", desc: "Programmable digital heating of main and big-end journals using module-specific coils." },
                { icon: Droplet, title: "Quench Control", desc: "Advanced polymer quenching to achieve uniform hardness without quenching cracks." },
                { icon: History, title: "Precision Tempering", desc: "Relieving residual stresses to enhance toughness and prevent service failure." },
                { icon: Activity, title: "Straightening", desc: "Post-heat correction to within ±0.05mm runout using specialized hydraulic jigs." },
                { icon: Gauge, title: "Final Balancing", desc: "Verification of dynamic balance and journal concentricity for high-performance use." }
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="bg-card/50 p-8 rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <item.icon className="h-8 w-8 text-primary mb-6 transition-transform group-hover:rotate-12" />
                  <h3 className="font-bold text-xl mb-3 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Targets & Specs Section */}
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
                    alt="Quality check of hardened journals reflecting mirror finish" 
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
                  Technical <span className="text-primary">Specs</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground font-medium">
                  <p>
                    We deliver OEM-grade standards for automotive, agricultural, and power generation engines:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Hardness: 52-62 HRC (Material dependent)",
                      "Case Depth: 1.5mm to 4.0mm deep penetration",
                      "Runout: Within 0.05mm after straightening",
                      "Surface Finish: Compatible with final micro-grinding",
                      "Materials: EN19, EN24, 4340, Forged Carbon Steels"
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

          {/* Industry Focus */}
          <section className="py-24 border-t border-border">
            <motion.h2 
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-16 text-center leading-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Industry <span className="text-primary">Focus</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Automotive Engines", icon: Settings, desc: "Passenger and commercial vehicle crankshafts." },
                { title: "Diesel Gensets", icon: History, desc: "Heavy-duty power generation components." },
                { title: "Industrial Pumps", icon: Cpu, desc: "High-pressure pump shafts and crankshafts." }
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="p-10 bg-secondary/30 rounded-3xl border border-border text-center flex flex-col items-center group hover:border-primary/20 transition-all">
                  <item.icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Related Links */}
          <section className="py-24 border-t border-border">
            <motion.h2 
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Other <span className="text-primary">Services</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: "Shaft Hardening", href: "/induction-heat-treatment/induction-hardening-shafts-ludhiana", icon: Settings, label: "Drive Shafts" },
                { title: "Gear Hardening", href: "/induction-heat-treatment/induction-hardening-gears-ludhiana", icon: Boxes, label: "Transmissions" },
                { title: "Main Pillar", href: "/induction-heat-treatment", icon: Cpu, label: "Process Guide" }
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <motion.div 
                    variants={scaleUp}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-card border border-border rounded-2xl transition-all hover:border-primary/50 flex flex-col items-center text-center shadow-sm"
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
              Hardening <span className="text-primary">FAQs</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-2xl bg-secondary/30 px-8 transition-all hover:border-primary/20 group">
                <AccordionTrigger className="text-left font-bold uppercase italic tracking-tight text-lg md:text-xl hover:text-primary py-8 hover:no-underline">
                  Do you harden the entire crankshaft or just journals?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-8 font-medium leading-relaxed text-base">
                  We use localized induction, meaning we target specifically the journals, pins, and fillets. This preserves the core strength and ductility of the main shaft, preventing brittle failure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-2xl bg-secondary/30 px-8 transition-all hover:border-primary/20 group">
                <AccordionTrigger className="text-left font-bold uppercase italic tracking-tight text-lg md:text-xl hover:text-primary py-8 hover:no-underline">
                  What is the maximum length of crankshaft you can handle?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-8 font-medium leading-relaxed text-base">
                  Our workshop is equipped to handle crankshafts up to 2.5 meters in length. For larger marine or power-plant engines, please contact us for mobile induction hardening possibilities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border rounded-2xl bg-secondary/30 px-8 transition-all hover:border-primary/20 group">
                <AccordionTrigger className="text-left font-bold uppercase italic tracking-tight text-lg md:text-xl hover:text-primary py-8 hover:no-underline">
                  How do you ensure the oil holes don't crack?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-8 font-medium leading-relaxed text-base">
                  We use custom copper coils and digital power modulation to ensure the electromagnetic field doesn't concentrate excessively at oil hole edges, preventing localized overheating and thermal stress cracks.
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
