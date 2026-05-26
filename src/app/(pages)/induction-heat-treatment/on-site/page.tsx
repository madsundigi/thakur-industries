
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, CheckCircle2, Zap, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { ServiceFAQ } from '@/components/shared/ServiceFAQ';

export default function OnSiteClusterPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "On-site / Mobile Induction Hardening — Ludhiana",
        "description": "Industrial mobile induction hardening services in Punjab. On-site heat treatment for large machinery components.",
        "url": `${SITE_URL}/induction-heat-treatment/on-site`
      }} />

      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-xs font-black uppercase tracking-widest text-primary mb-4 pt-20">
            <Link href="/induction-heat-treatment" className="hover:underline">Heat Treatment Pillar</Link> / On-site
          </div>
          
          <PageHeader
            title="On-site / Mobile"
            highlightedWord="Induction Hardening"
            description="Eliminating transportation logistics for massive industrial components with our mobile hardening units."
          />

          <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter animate-flame">
                Efficiency at your <span className="text-primary">Facility</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Large rollers, bed ways, and heavy machine components are difficult to transport. <strong>{SITE_NAME}</strong> provides mobile <strong>on-site induction heat treatment</strong> across Ludhiana and Punjab, bringing precision technology to your floor.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Large Rollers", "Machine Bed Ways", "Industrial Forgings", "Heavy Gears"].map(item => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                    <Truck className="h-5 w-5 text-primary" />
                    <span className="font-bold text-foreground uppercase tracking-tight text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground">
                See our workshop capabilities in the <Link href="/induction-heat-treatment" className="text-primary hover:underline">Main SEO Pillar Guide</Link>.
              </p>
            </div>
            
            <div className="p-8 bg-secondary/20 rounded-3xl border border-primary/10">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Mobile Unit Perks</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">Reduced Lead Times</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">Zero Transit Risk for Components</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">Immediate Quality Inspection</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-primary font-black uppercase italic py-6">
                <Link href="/contact">Book Mobile Unit</Link>
              </Button>
            </div>
          </section>

          <section className="py-16 border-t border-border">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-8 text-center">Related <span className="text-primary">Clusters</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link href="/induction-heat-treatment/induction-hardening-shafts-ludhiana" className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all flex items-center justify-between group">
                <div>
                  <h4 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors">Shaft Hardening</h4>
                  <p className="text-xs text-muted-foreground mt-1">Drive & Transmission solutions.</p>
                </div>
                <Zap className="h-5 w-5 text-primary" />
              </Link>
              <Link href="/induction-heat-treatment/induction-hardening-gears-ludhiana" className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all flex items-center justify-between group">
                <div>
                  <h4 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors">Gear Hardening</h4>
                  <p className="text-xs text-muted-foreground mt-1">Industrial & Automotive precision.</p>
                </div>
                <ArrowRight className="h-5 w-5 text-primary" />
              </Link>
            </div>
          </section>
          <ServiceFAQ
            heading="On-site Hardening FAQs"
            faqItems={[
              { question: 'When do you recommend on-site induction hardening instead of workshop?', answer: 'On-site is ideal for components too large to transport safely (crankshafts over 2.5m, heavy rollers, press beds, fixed machinery), or when production shutdown time must be minimised. We bring our mobile induction equipment to your Punjab facility.' },
              { question: 'What components can be hardened on-site at our factory?', answer: 'Large crankshafts, press rollers, mill rolls, machine bed guideways, spindles, lathe beds, large gears, and any component where transportation would risk damage, delay, or excess cost.' },
              { question: 'What is the geographic range for your on-site induction hardening services?', answer: 'We cover all of Punjab, Haryana, Himachal Pradesh, and Delhi NCR for on-site induction hardening. Contact us with your location and component details for scheduling and mobilisation costs.' },
              { question: 'What equipment do you bring for on-site hardening jobs?', answer: 'We deploy portable induction generators (25–300 kW), application-specific coils, integrated quench systems, and portable Rockwell hardness testers to verify quality on-site before leaving your facility.' },
              { question: 'How long does an on-site induction hardening job take?', answer: 'A typical on-site session for 10–50 components takes 1–2 days including setup, processing, and testing. Large shutdowns with hundreds of components are scheduled over multiple days. We work around your production shifts.' },
            ]}
          />
        </div>
        <CTASection />
      </div>
    </>
  );
}
