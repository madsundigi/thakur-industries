
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, ShieldCheck, Factory, Cpu, Gauge, ArrowRight, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CTASection } from '@/components/home/CTASection';

const fadeInBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const clusters = [
  { title: "Shaft Hardening", href: "/induction-heat-treatment/induction-hardening-shafts-ludhiana", desc: "Precision treatment for drive and transmission shafts." },
  { title: "Gear Hardening", href: "/induction-heat-treatment/gears", desc: "Tooth-by-tooth hardening for maximum wear resistance." },
  { title: "On-site Services", href: "/induction-heat-treatment/on-site", desc: "Mobile induction solutions for large components." },
  { title: "Crankshafts", href: "/induction-heat-treatment/crankshafts", desc: "Specialized engine component heat treatment." },
  { title: "Bearings & Races", href: "/induction-heat-treatment/bearings", desc: "Hardening solutions for rotational stability." },
];

export default function PillarPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'serviceInductionHardening');

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Induction Heat Treatment Services — Ludhiana",
        "description": "Comprehensive guide to induction hardening and heat treatment services in Ludhiana, Punjab. Process, materials, and industrial applications.",
        "url": `${SITE_URL}/induction-heat-treatment`,
        "mainEntity": {
          "@type": "Service",
          "serviceType": "Induction Heat Treatment",
          "provider": { "@type": "LocalBusiness", "name": SITE_NAME }
        }
      }} />

      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Induction Heat Treatment Services"
            highlightedWord="Ludhiana"
            description="The definitive guide to precision metal hardening for automotive, agricultural, and industrial components in Punjab."
            className="text-center"
          />

          <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-border">
            <motion.div variants={fadeInBottom} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 animate-flame">
                The Science of <span className="text-primary">Precision</span> Hardening
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Induction heat treatment is a localized surface hardening technique that uses electromagnetic induction to heat metal parts. This process is essential for components that require a high degree of wear resistance while maintaining a tough, ductile core.
                </p>
                <p>
                  At <strong>{SITE_NAME}</strong>, we've perfected this process over two decades, serving the massive industrial cluster of Ludhiana. Our specialized induction systems allow us to target specific zones—like gear teeth or bearing journals—ensuring zero distortion and maximum material life.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,0,0,0.2)] border border-primary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {heroImage && <Image src={heroImage.imageUrl} alt="Induction Hardening Process" fill className="object-cover" />}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </section>

          <section className="py-24">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-16 text-center">
              Our Specialized <span className="text-primary">Clusters</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clusters.map((cluster) => (
                <Link key={cluster.title} href={cluster.href} className="group">
                  <div className="p-8 bg-secondary/30 border border-border rounded-2xl transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(255,0,0,0.1)] h-full">
                    <Zap className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4 group-hover:text-primary transition-colors">{cluster.title}</h3>
                    <p className="text-muted-foreground mb-6">{cluster.desc}</p>
                    <div className="flex items-center text-primary font-bold text-xs uppercase tracking-widest">
                      Explore Service <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="py-24 bg-secondary/20 rounded-3xl px-8 md:px-16 border border-primary/10 mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase italic tracking-tighter">
              Why Choose <span className="text-primary">Induction</span> Over Furnace?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-muted-foreground leading-relaxed">
              <div className="space-y-6">
                <p>
                  Traditional furnace hardening treats the entire component, which can lead to warping, internal stresses, and unnecessary energy consumption. <strong>Induction hardening</strong>, however, is a non-contact process.
                </p>
                <ul className="space-y-4">
                  {[
                    "Targeted heating zones (Localized Hardening)",
                    "Minimal material distortion",
                    "Rapid processing cycles (Seconds vs Hours)",
                    "Energy efficient & Eco-friendly"
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="font-bold text-foreground uppercase tracking-tight text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background/50 p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-black uppercase italic text-foreground mb-4">Metallurgical Superiority</h3>
                <p>
                  By creating a martensitic surface layer while preserving a ferritic-pearlitic core, we provide parts that can handle high surface friction without being brittle. This is critical for <strong>gears, shafts, and axles</strong> that must endure impact loads.
                </p>
              </div>
            </div>
          </section>

          <section className="py-24 border-t border-border">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase italic tracking-tighter">
              Commonly Treated <span className="text-primary">Materials</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["EN8 (C45)", "EN19 (4140)", "EN24 (4340)", "EN31", "20MnCr5", "Tool Steel", "Cast Iron", "Alloy Steels"].map(m => (
                <div key={m} className="p-6 bg-secondary/50 rounded-xl border border-border text-center font-black uppercase italic tracking-tighter text-sm hover:border-primary/30 transition-colors">
                  {m}
                </div>
              ))}
            </div>
          </section>

          <section className="py-24">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase italic tracking-tighter">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <div className="space-y-8">
                {[
                  { q: "What is the typical case depth achieved?", a: "Depending on the frequency (High or Medium) and material, we achieve depths ranging from 0.5mm to 10mm." },
                  { q: "Is on-site induction hardening available in Ludhiana?", a: "Yes, we provide mobile induction units for large components that cannot be easily moved to our workshop." },
                  { q: "Which industries benefit most from this?", a: "Automotive, Agricultural, Forging, and Heavy Machinery manufacturers are our primary clients." }
                ].map((faq, i) => (
                  <div key={i} className="p-8 bg-secondary/30 rounded-2xl border border-border">
                    <h3 className="text-xl font-bold uppercase italic text-foreground mb-4 flex items-center gap-3">
                      <Flame className="h-5 w-5 text-primary" /> {faq.q}
                    </h3>
                    <p className="text-muted-foreground font-medium">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <CTASection />
      </div>
    </>
  );
}
