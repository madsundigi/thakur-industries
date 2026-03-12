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
              <Link href="/induction-heat-treatment/shafts" className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all flex items-center justify-between group">
                <div>
                  <h4 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors">Shaft Hardening</h4>
                  <p className="text-xs text-muted-foreground mt-1">Drive & Transmission solutions.</p>
                </div>
                <Zap className="h-5 w-5 text-primary" />
              </Link>
              <Link href="/induction-heat-treatment/gears" className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all flex items-center justify-between group">
                <div>
                  <h4 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors">Gear Hardening</h4>
                  <p className="text-xs text-muted-foreground mt-1">Industrial & Automotive precision.</p>
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