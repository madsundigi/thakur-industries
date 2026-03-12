'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';

export default function ShaftsClusterPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Induction Hardening for Shafts — Ludhiana",
        "description": "Specialized induction hardening for automotive and industrial shafts. High fatigue resistance and torsional strength.",
        "url": `${SITE_URL}/induction-heat-treatment/shafts`
      }} />

      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-xs font-black uppercase tracking-widest text-primary mb-4 pt-20">
            <Link href="/induction-heat-treatment" className="hover:underline">Heat Treatment Pillar</Link> / Shafts
          </div>
          
          <PageHeader
            title="Induction Hardening for"
            highlightedWord="Shafts"
            description="Enhancing the torsional strength and fatigue life of industrial and automotive shafts through precision surface hardening."
          />

          <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter animate-flame">
                Why Shaft Hardening is <span className="text-primary">Critical</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Shafts are the backbone of power transmission. They face continuous rotational stress, bending, and torsion. At <strong>{SITE_NAME}</strong>, we use localized induction heating to create a hard wear-surface while preserving a shock-absorbing core.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Drive Shafts", "Transmission Shafts", "Axle Shafts", "Crankshafts"].map(item => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span className="font-bold text-foreground uppercase tracking-tight text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground">
                For deeper technical insights, view our <Link href="/induction-heat-treatment" className="text-primary hover:underline">main induction heat treatment guide</Link>.
              </p>
            </div>
            
            <div className="p-8 bg-secondary/20 rounded-3xl border border-primary/10">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Metallurgical Goals</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">Surface Hardness: 50-60 HRC</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">Controlled Case Depth: 1.5 - 5.0 mm</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">Zero Distortion Accuracy</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-primary font-black uppercase italic py-6">
                <Link href="/contact">Get Shaft Hardening Quote</Link>
              </Button>
            </div>
          </section>

          <section className="py-16 border-t border-border">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-8 text-center">Related <span className="text-primary">Services</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link href="/induction-heat-treatment/gears" className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all flex items-center justify-between group">
                <div>
                  <h4 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors">Induction Hardening for Gears</h4>
                  <p className="text-xs text-muted-foreground mt-1">Tooth-by-tooth precision hardening.</p>
                </div>
                <Zap className="h-5 w-5 text-primary" />
              </Link>
              <Link href="/induction-heat-treatment/crankshafts" className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all flex items-center justify-between group">
                <div>
                  <h4 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors">Crankshaft Hardening</h4>
                  <p className="text-xs text-muted-foreground mt-1">Engine specific durability solutions.</p>
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