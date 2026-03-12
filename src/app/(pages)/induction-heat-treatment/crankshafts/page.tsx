
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { History, ArrowRight, CheckCircle2, Zap, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';

export default function CrankshaftsClusterPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Induction Heat Treatment for Crankshafts — Ludhiana",
        "description": "High-cycle engine crankshaft hardening in Punjab. Improving journal and fillet durability for automotive engines.",
        "url": `${SITE_URL}/induction-heat-treatment/crankshafts`
      }} />

      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-xs font-black uppercase tracking-widest text-primary mb-4 pt-20">
            <Link href="/induction-heat-treatment" className="hover:underline">Heat Treatment Pillar</Link> / Crankshafts
          </div>
          
          <PageHeader
            title="Induction Hardening for"
            highlightedWord="Crankshafts"
            description="Hardening bearing journals and fillets to ensure long-term engine performance and torque handling."
          />

          <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter animate-flame">
                Engine <span className="text-primary">Durability</span> Redefined
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Crankshafts undergo millions of stress cycles. Fillet hardening via induction is the most effective way to prevent fatigue cracks. <strong>{SITE_NAME}</strong> specializes in journal hardening for tractor and truck engines in Ludhiana.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Journal Hardening", "Fillet Strengthening", "Pin Hardening", "Stress Relieving"].map(item => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                    <Cpu className="h-5 w-5 text-primary" />
                    <span className="font-bold text-foreground uppercase tracking-tight text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground">
                View our complete metallurgical list in the <Link href="/induction-heat-treatment" className="text-primary hover:underline">Induction Services Pillar</Link>.
              </p>
            </div>
            
            <div className="p-8 bg-secondary/20 rounded-3xl border border-primary/10">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Technical Assurance</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">Uniform Hardness Across All Journals</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">Controlled Case Depth for High RPMs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">Crack-Free Microstructure Guarantee</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-primary font-black uppercase italic py-6">
                <Link href="/contact">Get Crankshaft Quote</Link>
              </Button>
            </div>
          </section>

          <section className="py-16 border-t border-border">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-8 text-center">Inter-linking <span className="text-primary">Services</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link href="/induction-heat-treatment/bearings" className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all flex items-center justify-between group">
                <div>
                  <h4 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors">Bearings & Races</h4>
                  <p className="text-xs text-muted-foreground mt-1">High-wear rotational parts.</p>
                </div>
                <Zap className="h-5 w-5 text-primary" />
              </Link>
              <Link href="/induction-heat-treatment/induction-hardening-shafts-ludhiana" className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all flex items-center justify-between group">
                <div>
                  <h4 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors">Shaft Hardening</h4>
                  <p className="text-xs text-muted-foreground mt-1">Industrial shaft treatment.</p>
                </div>
                <ArrowRight className="h-5 w-5 text-primary" />
              </Link>
            </div>
          </section>
        </div>
        <CTASection />
      </div>
    </>
  );
}
