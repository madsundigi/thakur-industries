
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
  MessageSquare, 
  FileText, 
  Phone,
  Clock,
  Gauge,
  Cpu,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function ShaftHardeningSEOPage() {
  const machineImage = PlaceHolderImages.find(img => img.id === 'blogShaftsAndAxles');
  const testImage = PlaceHolderImages.find(img => img.id === 'blogHardnessTesting');

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Induction Hardening for Shafts — Precision Induction Heat Treatment in Ludhiana",
    "description": "Precision induction hardening for drive shafts, spindles & axles. On-site & workshop services in Ludhiana — case depths to spec, hardness testing, fast quotes.",
    "url": `${SITE_URL}/induction-heat-treatment/induction-hardening-shafts-ludhiana/`,
    "mainEntity": {
      "@type": "Service",
      "serviceType": "Induction Hardening for Shafts",
      "provider": {
        "@type": "LocalBusiness",
        "name": SITE_NAME,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ludhiana",
          "addressRegion": "Punjab",
          "addressCountry": "IN"
        }
      }
    }
  };

  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-xs font-black uppercase tracking-widest text-primary mb-4 pt-20">
            <Link href="/induction-heat-treatment" className="hover:underline">Heat Treatment Pillar</Link> / Shaft Hardening
          </div>
          
          <PageHeader
            title="Induction Hardening for Shafts —"
            highlightedWord="Precision Shaft Hardening in Ludhiana"
            description="We specialize in precision induction hardening for shafts — drive shafts, spindles, axles and custom profiles. Using CNC-controlled induction coils and programmable quench systems we deliver repeatable case depths and surface hardness tailored to your drawing specification."
          />

          {/* Intro Section */}
          <section className="py-12 border-b border-border">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              Thakur Industries provides both on-site and in-workshop options for quick turnarounds across Ludhiana’s manufacturing clusters. Whether you require high-volume OEM batch processing or single-piece custom hardening, our metallurgical expertise ensures your shafts withstand the most demanding torsional and bending loads.
            </p>
          </section>

          {/* H2: What is induction hardening for shafts? */}
          <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-6 animate-flame">
                What is <span className="text-primary">Induction Hardening</span> for Shafts?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Induction hardening is a sophisticated surface heat treatment that uses electromagnetic induction to heat the outer surface layer of a shaft rapidly. Once the target austenitizing temperature is reached, the component is immediately quenched.
                </p>
                <p>
                  This process transforms the surface layer into a hard martensitic structure while preserving the tough, ductile core of the material. The result is a component with exceptional wear resistance and superior fatigue strength, essential for power transmission systems.
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
              {machineImage && (
                <Image 
                  src={machineImage.imageUrl} 
                  alt="Induction hardening machine treating a drive shaft in Ludhiana workshop" 
                  fill 
                  className="object-cover"
                />
              )}
            </div>
          </section>

          {/* H2: Why choose induction over other hardening methods? */}
          <section className="py-16 bg-secondary/20 rounded-3xl px-8 md:px-12 border border-primary/10">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-10 text-center">
              Why Choose <span className="text-primary">Induction</span> Over Other Methods?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Localized Heating", desc: "Heat only the journals or splines that need hardening, leaving the rest of the part stable." },
                { title: "Minimal Distortion", desc: "Because the entire part isn't heated, thermal warping and dimensional changes are significantly reduced." },
                { title: "Fast Cycle Times", desc: "Heating happens in seconds, allowing for high-productivity manufacturing and faster delivery." },
                { title: "Energy Efficient", desc: "Power is used only during the short heating cycle, reducing the carbon footprint." },
                { title: "Precise Control", desc: "Programmable digital controls ensure identical case depth and hardness for every single piece." }
              ].map((item, i) => (
                <div key={i} className="bg-card p-6 rounded-xl border border-border">
                  <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2 uppercase italic tracking-tight">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* H2: Our shaft induction process (step-by-step) */}
          <section className="py-24">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-16 text-center">
              Our Shaft Induction <span className="text-primary">Process</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: FileText, title: "Quote & Review", desc: "Upload your DWG/STEP drawing for a technical metallurgical review." },
                { icon: Gauge, title: "Target Confirmation", desc: "Verification of surface hardness (HRC) and case depth specifications." },
                { icon: Cpu, title: "Coil Design", desc: "In-house fabrication of induction coils tailored to your shaft geometry." },
                { icon: Zap, title: "Induction Heating", desc: "Programmable heating profiles ensure precision temperature control." },
                { icon: Droplet, title: "Controlled Quench", desc: "Rapid cooling using polymer, water, or oil based on material grade." },
                { icon: Search, title: "Post-Process QA", desc: "Rockwell testing, runout check, and microstructure validation." }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold uppercase italic tracking-tight mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* H2: Technical specs & typical case depths */}
          <section className="py-16 border-y border-border">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-10">
              Technical <span className="text-primary">Specifications</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Our facility is equipped to handle a variety of steel grades, ensuring we can meet the specific requirements of any industrial or automotive drawing.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span className="font-bold text-foreground">Typical Hardness Range:</span>
                    <span className="text-muted-foreground">HRC 48–62 (Adjustable to spec)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span className="font-bold text-foreground">Common Case Depths:</span>
                    <span className="text-muted-foreground">0.5 mm — 3.0 mm (Standard) up to 6 mm (Deep Case)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span className="font-bold text-foreground">Materials:</span>
                    <span className="text-muted-foreground">Carbon Steel, Alloy Steel (EN8, EN19, EN24, 4140, 4340), Tool Steel</span>
                  </li>
                </ul>
              </div>
              <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-bold uppercase italic tracking-tight mb-4">Material Limits</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  While most medium-carbon and alloy steels respond exceptionally well to induction, certain high-chromium stainless grades require specific frequency adjustments. Our technical team provides consultation on material response during the engineering review stage.
                </p>
              </div>
            </div>
          </section>

          {/* H2: Industries & parts we serve */}
          <section className="py-24 bg-card rounded-3xl px-8 md:px-16 my-16 border border-white/5">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Industries <span className="text-primary">& Parts We Serve</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { industry: "Automotive", part: "Drive Shafts" },
                { industry: "Textile", part: "Spindles" },
                { industry: "Machine Tool", part: "Spindles" },
                { industry: "Agricultural", part: "Axle Pins" },
                { industry: "Oil & Gas", part: "Pump Shafts" }
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-background/50 rounded-xl border border-border group hover:border-primary/30 transition-all">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-2">{item.industry}</h4>
                  <p className="font-bold uppercase italic text-sm">{item.part}</p>
                </div>
              ))}
            </div>
          </section>

          {/* H2: Quality control, testing & certifications */}
          <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-6">
                Quality Control <span className="text-primary">& Documentation</span>
              </h2>
              <p className="text-muted-foreground">
                We maintain a zero-defect policy. Every shaft batch is accompanied by comprehensive test reports to ensure OEM compliance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Rockwell Hardness (HRC)",
                  "Microhardness Traverse",
                  "Metallography (on demand)",
                  "Runout & Concentricity",
                  "NDT (Magnetic Particle)",
                  "Dye Penetrant Testing"
                ].map(test => (
                  <div key={test} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-bold text-foreground uppercase tracking-tight text-xs">{test}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
              {testImage && (
                <Image 
                  src={testImage.imageUrl} 
                  alt="Rockwell hardness test of induction hardened shaft" 
                  fill 
                  className="object-cover"
                />
              )}
            </div>
          </section>

          {/* H2: Typical lead times & turnaround */}
          <section className="py-16 bg-secondary/20 rounded-3xl px-8 border border-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div>
                <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4">
                  Fast <span className="text-primary">Turnarounds</span>
                </h2>
                <p className="text-muted-foreground">We understand production schedules. Our processes are optimized for speed.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <Clock className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-bold uppercase italic mb-1">Workshop Batch</h4>
                  <p className="text-2xl font-black text-primary italic">3–7 Days</p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <Zap className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-bold uppercase italic mb-1">On-site Service</h4>
                  <p className="text-2xl font-black text-primary italic">48–72 Hours</p>
                </div>
              </div>
            </div>
          </section>

          {/* H2: FAQ */}
          <section className="py-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Common <span className="text-primary">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-xl bg-secondary/30 px-6">
                <AccordionTrigger className="text-left font-bold uppercase italic tracking-tight text-lg hover:text-primary py-6">
                  Will induction hardening change shaft dimensions?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 font-medium leading-relaxed">
                  Minor surface distortion is possible due to localized heating. However, we design our process to limit runout to within X µm (typically ±0.02mm for standard shafts), minimizing the need for heavy post-process grinding.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-xl bg-secondary/30 px-6">
                <AccordionTrigger className="text-left font-bold uppercase italic tracking-tight text-lg hover:text-primary py-6">
                  Do you offer in-spec documentation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 font-medium leading-relaxed">
                  Yes. We provide hardness maps, full test reports, and metallurgical certificates on request for every batch we process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border rounded-xl bg-secondary/30 px-6">
                <AccordionTrigger className="text-left font-bold uppercase italic tracking-tight text-lg hover:text-primary py-6">
                  What file formats do you accept for quotes?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 font-medium leading-relaxed">
                  For the most accurate technical assessment, we prefer DWG, STEP, or PDF files with clear dimensional and metallurgical specifications.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* H2: Ready for a quote? (CTA) */}
          <section className="py-24 bg-card rounded-3xl border border-primary/20 text-center relative overflow-hidden mb-24">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white mb-8">
                Ready for a <span className="text-primary">Quote?</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button asChild size="lg" className="w-full sm:w-auto h-auto py-5 px-10 text-lg bg-primary hover:bg-primary/80 text-primary-foreground font-black group uppercase italic">
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Free Quote — Upload Drawing
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-auto py-5 px-10 text-lg border-white text-white hover:bg-white hover:text-black font-black uppercase italic">
                  <a href={`tel:${SITE_PHONE_NUMBER}`} className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Request Technical Callback
                  </a>
                </Button>
              </div>
              <div className="mt-10">
                <Button asChild variant="link" className="text-primary font-black uppercase tracking-widest text-xs italic">
                  <Link href="/contact" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Download: Induction Hardening Spec Sheet (PDF)
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
        <CTASection />
      </div>
    </>
  );
}
