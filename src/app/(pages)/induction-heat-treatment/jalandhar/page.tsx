'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Cpu, CheckCircle2, ArrowRight, MapPin, Settings, Boxes } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function JalandharPage() {
  const schema = {"@context":"https://schema.org","@type":"Service","name":"Induction Heat Treatment — Jalandhar","provider":{"@type":"LocalBusiness","name":SITE_NAME,"telephone":SITE_PHONE_NUMBER},"areaServed":["Jalandhar","Phagwara","Ludhiana","Nakodar"]};

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd items={[{ name: 'Heat Treatment', href: '/induction-heat-treatment' }, { name: 'Jalandhar', href: '/induction-heat-treatment/jalandhar' }]} />
      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Induction Heat Treatment Services"
            highlightedWord="Jalandhar"
            description="Jalandhar induction hardening specialists — gears, shafts, bearings. Workshop & mobile services with hardness testing."
            className="text-center"
          />

          {/* Process image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-4 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/5.jpeg"
              alt="Induction hardening process — precision heat treatment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">Induction Hardening</span>
                <p className="text-white font-black uppercase italic text-xl md:text-2xl mt-2 tracking-tighter">Precision. Certified. Fast Turnaround.</p>
              </div>
            </div>
          </div>

          <motion.section 
            className="py-12 text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Serving Jalandhar’s engineering and tooling sectors with precision induction hardening — improving wear resistance and fatigue life of components. Options include batch workshop processing and fast on-site services for large assemblies and shutdowns. Certified testing and traceable reports included.
            </p>
          </motion.section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* LOCATION */}
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                Industrial <span className="text-primary">Capabilities</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Our Jalandhar focus supports Phagwara and Nakodar clusters with professional surface hardening for export-grade parts.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Shaft Hardening", href: "/induction-heat-treatment/induction-hardening-shafts-ludhiana" },
                    { title: "Gear Tooth Induction", href: "/induction-heat-treatment/induction-hardening-gears-ludhiana" },
                    { title: "Bearing Race Treatment", href: "/induction-heat-treatment/induction-hardening-bearings-ludhiana" },
                    { title: "On-site Hardening", href: "/induction-heat-treatment/on-site" }
                  ].map((item, i) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border hover:border-primary/50 transition-all duration-200 hover:pl-3 hover:border-l-2 hover:border-l-primary group animate-in fade-in slide-in-from-bottom-4 duration-500"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <Cpu className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-foreground uppercase tracking-tight text-xs group-hover:text-primary transition-colors">{item.title}</span>
                    </Link>
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Jalandhar Support</h3>
              <p className="text-muted-foreground mb-8 font-medium">
                Targeting the heart of Punjab's engineering hub with repeatable induction hardening and stress relief solutions.
              </p>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <MapPin className="h-5 w-5" /> Area: Jalandhar, Phagwara, Ludhiana
              </div>
              <Button asChild className="w-full py-8 text-lg font-black uppercase italic hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-shadow duration-300">
                <Link href="/contact">Inquire for Jalandhar</Link>
              </Button>
            </motion.div>
          </div>

          <section className="py-24 border-t border-border">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Regional <span className="text-primary">Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Shaft Hardening", href: "/induction-heat-treatment/induction-hardening-shafts-ludhiana", icon: Settings },
                { title: "Gear Hardening", href: "/induction-heat-treatment/induction-hardening-gears-ludhiana", icon: Boxes },
                { title: "Technical Guide", href: "/induction-heat-treatment", icon: Cpu }
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <motion.div 
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-card border border-border rounded-2xl transition-all hover:border-primary/50 flex flex-col items-center text-center shadow-sm"
                  >
                    <link.icon className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm">{link.title}</h4>
                    <p className="text-xs text-muted-foreground mt-2">Explore Technical Data</p>
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
