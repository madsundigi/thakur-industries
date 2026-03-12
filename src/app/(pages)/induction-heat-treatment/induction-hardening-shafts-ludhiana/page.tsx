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
  Truck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER, SITE_ADDRESS } from '@/lib/constants';
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

// Diverse animation variants for different sections
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

export default function ShaftHardeningSEOPage() {
  const machineImage = PlaceHolderImages.find(img => img.id === 'blogShaftsAndAxles');
  const testImage = PlaceHolderImages.find(img => img.id === 'blogHardnessTesting');

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Induction Hardening for Shafts",
    "url": `${SITE_URL}/induction-heat-treatment/induction-hardening-shafts-ludhiana/`,
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
    "areaServed": ["Ludhiana","Jalandhar","Nawanshahr","Jagraon","Chandigarh"]
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <div className="bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">
          
          <PageHeader
            title="Shaft Induction"
            highlightedWord="Hardening"
            description="Precision-engineered surface hardening for drive shafts, spindles, axles, and custom profiles. We deliver repeatable case depths and surface hardness tailored to your exact drawing specifications."
            className="text-center"
          />

          {/* Intro Section - Fade Up Reveal */}
          <motion.section 
            className="py-12 md:py-16 border-b border-border text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              Thakur Industries provides professional heat treatment job work across Ludhiana's manufacturing clusters. Whether you require high-volume OEM batch processing or specialized custom hardening, our metallurgical expertise ensures your shafts withstand the most demanding torsional and bending loads.
            </p>
          </motion.section>

          {/* Localized Heating - Split Slide Reveal */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInLeft}
              >
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 animate-flame leading-none">
                  Advanced <span className="text-primary">Localized</span> Heating
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium">
                  <p>
                    Induction hardening is a sophisticated surface heat treatment that uses electromagnetic fields to heat the outer surface layer of a shaft rapidly. This localized approach allows for extreme precision.
                  </p>
                  <p>
                    Once the target temperature is reached, the component is immediately quenched, transforming the surface into a hard martensitic structure while preserving a tough, ductile core.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="relative h-72 md:h-[450px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInRight}
              >
                {machineImage && (
                  <Image 
                    src={machineImage.imageUrl} 
                    alt="Induction hardening machine treating a drive shaft in Ludhiana workshop" 
                    fill 
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </section>

          {/* Advantage Section - Staggered Scale Reveal */}
          <section className="py-16 md:py-24 bg-secondary/20 rounded-[2rem] px-6 md:px-12 border border-primary/10">
            <motion.h2 
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              The <span className="text-primary">Induction</span> Advantage
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                { title: "Localized Heating", desc: "Hardens only the critical journals or splines, protecting the rest of the component." },
                { title: "Zero Distortion", desc: "Localized heat prevents thermal warping, maintaining tight dimensional tolerances." },
                { title: "High Productivity", desc: "Fast cycle times (seconds per part) enable high-volume manufacturing throughput." },
                { title: "Digital Precision", desc: "PLC-controlled cycles ensure identical hardness and case depth for every part." },
                { title: "Energy Efficient", desc: "Optimized power usage focused strictly on the surface area being treated." }
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} className="bg-card/50 p-8 rounded-2xl border border-border group hover:border-primary/30 transition-all">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-6 transition-transform group-hover:scale-110" />
                  <h3 className="font-bold text-xl mb-3 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Workflow Section - Vertical Pop Reveal */}
          <section className="py-24">
            <motion.h2 
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-16 text-center leading-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Process <span className="text-primary">Workflow</span>
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                { icon: FileText, title: "Engineering Review", desc: "Technical assessment of your drawings (DWG/STEP) for metallurgical planning." },
                { icon: Gauge, title: "Target Definition", desc: "Confirmation of surface hardness (HRC) and case depth specifications." },
                { icon: Cpu, title: "Custom Coil Setup", desc: "In-house coil design perfectly matched to your shaft's unique geometry." },
                { icon: Zap, title: "Induction Heating", desc: "Programmable digital profiles for high-accuracy temperature control." },
                { icon: Droplet, title: "Controlled Quench", desc: "Advanced polymer or water quenching based on material characteristics." },
                { icon: Search, title: "Final QA", desc: "Comprehensive Rockwell testing and runout verification for OEM compliance." }
              ].map((step, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center text-center group">
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-[0_0_15px_rgba(255,0,0,0.1)] group-hover:shadow-[0_0_25px_rgba(255,0,0,0.3)]"
                  >
                    <step.icon className="h-10 w-10 text-primary group-hover:text-inherit" />
                  </motion.div>
                  <h3 className="text-2xl font-bold uppercase italic tracking-tighter mb-3">{step.title}</h3>
                  <p className="text-muted-foreground font-medium max-w-xs mx-auto leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Capability Section - Slide In Text, Scale Card */}
          <section className="py-16 md:py-24 border-y border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
              >
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                  Technical <span className="text-primary">Capability</span>
                </h2>
                <div className="space-y-6">
                  {[
                    { label: "Hardness Range", value: "HRC 48–62 (Customizable)" },
                    { label: "Case Depth", value: "0.5 mm to 6.0 mm (Deep Case possible)" },
                    { label: "Shaft Length", value: "Up to 2.5 Meters" },
                    { label: "Common Materials", value: "EN8, EN19, EN24, 4140, 4340, Tool Steel" }
                  ].map((spec, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="flex items-center justify-between border-b border-border pb-4 transition-transform"
                    >
                      <span className="font-bold text-foreground uppercase tracking-tight text-sm">{spec.label}</span>
                      <span className="text-primary font-black uppercase italic tracking-tight">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                className="p-8 md:p-12 bg-secondary/30 rounded-3xl border border-primary/20 relative overflow-hidden group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleUp}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <ShieldCheck size={120} className="text-primary" />
                </div>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6 relative z-10">Metallurgical Integrity</h3>
                <p className="text-muted-foreground font-medium leading-relaxed relative z-10">
                  Our process focuses on the perfect transformation of surface ferrite/pearlite into martensite. We consult on material selection to ensure high chromium or stainless grades receive the correct frequency adjustments for maximum durability.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Applications Section - Grid Pulse Reveal */}
          <section className="py-24">
            <motion.h2 
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Industrial <span className="text-primary">Applications</span>
            </motion.h2>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                { industry: "Automotive", part: "Drive Shafts" },
                { industry: "Textile", part: "Machinery Spindles" },
                { industry: "Machine Tool", part: "Precision Spindles" },
                { industry: "Agricultural", part: "Axle & PTO Pins" },
                { industry: "Pumps", part: "Impeller Shafts" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={scaleUp}
                  whileHover={{ y: -10, backgroundColor: "rgba(255,0,0,0.05)" }}
                  className="text-center p-8 bg-card rounded-2xl border border-border group hover:border-primary/30 transition-all shadow-sm"
                >
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/70 mb-2">{item.industry}</h4>
                  <p className="font-black uppercase italic text-sm text-foreground">{item.part}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Verification Section - Slide In Reverse */}
          <section className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start border-t border-border">
            <motion.div 
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
                Quality <span className="text-primary">Verification</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium">
                We maintain full traceability for all OEM batches. Every component is verified against your internal standards using precision laboratory equipment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "HRC Hardness Profiling",
                  "Microhardness Traverse",
                  "Magnetic Particle (NDT)",
                  "Concentricity Validation"
                ].map((test, idx) => (
                  <motion.div 
                    key={test} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 p-5 bg-secondary/30 rounded-xl border border-border"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-bold text-foreground uppercase tracking-tight text-xs">{test}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              {testImage && (
                <Image 
                  src={testImage.imageUrl} 
                  alt="Rockwell hardness test of induction hardened shaft" 
                  fill 
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </section>

          {/* Internal Linking / Related Services */}
          <section className="py-24 border-t border-border">
            <motion.h2 
              className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Explore <span className="text-primary">Related</span> Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: "Induction Hardening Pillar", href: "/induction-heat-treatment", icon: Cpu, label: "Main Guide" },
                { title: "Induction Hardening for Gears", href: "/induction-heat-treatment/gears", icon: Boxes, label: "Specialized Gears" },
                { title: "On-site Induction Hardening", href: "/induction-heat-treatment/on-site", icon: Truck, label: "Mobile Units" }
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <motion.div 
                    variants={scaleUp}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-secondary/30 border border-border rounded-2xl transition-all hover:border-primary/50 flex flex-col items-center text-center"
                  >
                    <link.icon className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm">{link.title}</h4>
                    <p className="text-xs text-muted-foreground mt-2">{link.label}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ - Bottom Slide Up */}
          <motion.section 
            className="py-24 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center leading-none">
              Process <span className="text-primary">Insights</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-2xl bg-secondary/30 px-8 transition-all hover:border-primary/20 group">
                <AccordionTrigger className="text-left font-bold uppercase italic tracking-tight text-lg md:text-xl hover:text-primary py-8 hover:no-underline">
                  Will induction hardening change shaft dimensions?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-8 font-medium leading-relaxed text-base">
                  Minor surface expansion is normal. However, our programmable quench systems limit runout to within extreme tolerances (typically ±0.02mm), greatly reducing post-process grinding time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-2xl bg-secondary/30 px-8 transition-all hover:border-primary/20 group">
                <AccordionTrigger className="text-left font-bold uppercase italic tracking-tight text-lg md:text-xl hover:text-primary py-8 hover:no-underline">
                  Do you provide full metallurgical test reports?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-8 font-medium leading-relaxed text-base">
                  Yes. We provide digital hardness maps and certificates of compliance for every batch, including case depth verification and surface integrity checks.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border rounded-2xl bg-secondary/30 px-8 transition-all hover:border-primary/20 group">
                <AccordionTrigger className="text-left font-bold uppercase italic tracking-tight text-lg md:text-xl hover:text-primary py-8 hover:no-underline">
                  What is the turnaround time for bulk orders?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-8 font-medium leading-relaxed text-base">
                  Small-batch workshop processing typically takes 3–7 business days. For massive urgent requirements, we offer scheduled priority slots to keep your production lines moving.
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
