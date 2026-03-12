'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Cpu, CheckCircle2, ArrowRight, MapPin, Settings, Boxes } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { SITE_NAME, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function DehlonPage() {
  const schema = {"@context":"https://schema.org","@type":"Service","name":"Induction Heat Treatment — Dehlon","provider":{"@type":"LocalBusiness","name":SITE_NAME,"telephone":SITE_PHONE_NUMBER},"areaServed":["Dehlon","Ludhiana","Khanna","Jagraon"]};

  return (
    <>
      <JsonLd data={schema} />
      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Induction Heat Treatment Services"
            highlightedWord="Dehlon"
            description="Dehlon induction hardening & heat treatment services — shafts, gears, bearings. On-site & workshop options."
            className="text-center"
          />

          <motion.section 
            className="py-12 text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Serving Dehlon with precision induction heat treatment—repeatable case depths, minimal distortion and full test documentation. Mobile on-site service for large assemblies and fast workshop turnarounds for small batches.
            </p>
          </motion.section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                Quality <span className="text-primary">Assurance</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Our proximity to the Dehlon area ensures rapid response times for local engineering and agricultural equipment workshops.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Shaft Surface Hardening",
                    "Bearing Race Induction",
                    "Rapid Batch Turnaround",
                    "On-site mobile units"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="font-bold text-foreground uppercase tracking-tight text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="p-10 bg-secondary/20 rounded-[2rem] border border-primary/10 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Dehlon Support</h3>
              <p className="text-muted-foreground mb-8 font-medium">
                Offering localized heating for specific wear zones, maintaining internal core toughness for mechanical durability.
              </p>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <MapPin className="h-5 w-5" /> Area: Dehlon, Ludhiana, Khanna
              </div>
              <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                <Link href="/contact">Request Dehlon Quote</Link>
              </Button>
            </motion.div>
          </div>

          <section className="py-24 border-t border-border">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Technical <span className="text-primary">Guides</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Shaft Hardening", href: "/induction-heat-treatment/induction-hardening-shafts-ludhiana", icon: Settings },
                { title: "Gear Hardening", href: "/induction-heat-treatment/induction-hardening-gears-ludhiana", icon: Boxes },
                { title: "Main Guide", href: "/induction-heat-treatment", icon: Cpu }
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <motion.div 
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-card border border-border rounded-2xl transition-all hover:border-primary/50 flex flex-col items-center text-center shadow-sm"
                  >
                    <link.icon className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm">{link.title}</h4>
                    <p className="text-xs text-muted-foreground mt-2">Explore Technical Details</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>
        </div>
        <CTASection />
      </div>
    </>
  );
}
