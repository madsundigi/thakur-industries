'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Boxes, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';

export default function GearsClusterPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Induction Hardening for Gears — Ludhiana",
        "description": "Expert gear tooth hardening in Ludhiana. Spur, helical, and bevel gear induction heat treatment for industrial endurance.",
        "url": `${SITE_URL}/induction-heat-treatment/gears`
      }} />

      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-xs font-black uppercase tracking-widest text-primary mb-4 pt-20">
            <Link href="/induction-heat-treatment" className="hover:underline">Heat Treatment Pillar</Link> / Gears
          </div>
          
          <PageHeader
            title="Induction Hardening for"
            highlightedWord="Gears"
            description="Precision tooth-by-tooth hardening to prevent pitting, wear, and premature gear failure."
          />

          <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter animate-flame">
                Maximum <span className="text-primary">Wear</span> Resistance
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gears require extreme surface hardness to withstand contact stress while maintaining core flexibility to handle shock loads. <strong>{SITE_NAME}</strong> Ludhiana uses advanced high-frequency induction to target only the gear teeth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Spur Gears", "Helical Gears", "Pinions", "Internal Gears"].map(item => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                    <Boxes className="h-5 w-5 text-primary" />
                    <span className="font-bold text-foreground uppercase tracking-tight text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground">
                Learn about our core process in the <Link href="/induction-heat-treatment" className="text-primary hover:underline">Induction Heat Treatment Guide</Link>.
              </p>
            </div>
            
            <div className="p-8 bg-secondary/20 rounded-3xl border border-primary/10">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Service Benefits</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">Reduced Pitting and Scoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">Localized Hardening (Tooth Profile Only)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">Enhanced Load Carrying Capacity</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-primary font-black uppercase italic py-6">
                <Link href="/contact">Get Gear Hardening Quote</Link>
              </Button>
            </div>
          </section>

          <section className="py-16 border-t border-border">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-8 text-center">Internal <span className="text-primary">Links</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link href="/induction-heat-treatment/bearings" className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all flex items-center justify-between group">
                <div>
                  <h4 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors">Bearing Race Hardening</h4>
                  <p className="text-xs text-muted-foreground mt-1">High-precision rotational components.</p>
                </div>
                <Zap className="h-5 w-5 text-primary" />
              </Link>
              <Link href="/induction-heat-treatment/on-site" className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all flex items-center justify-between group">
                <div>
                  <h4 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors">On-site Services</h4>
                  <p className="text-xs text-muted-foreground mt-1">Mobile hardening for large gears.</p>
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