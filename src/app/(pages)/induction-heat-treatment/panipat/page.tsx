'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, MapPin, Settings, Boxes, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';
import { ServiceFAQ } from '@/components/shared/ServiceFAQ';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function PanipatPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Induction Hardening & Heat Treatment — Panipat, Haryana",
    "provider": { "@type": "LocalBusiness", "name": SITE_NAME, "telephone": SITE_PHONE_NUMBER },
    "areaServed": ["Panipat", "Karnal", "Sonipat", "Rohtak", "Haryana"],
    "description": "Induction hardening and heat treatment for Panipat's textile machinery, oil refinery components, and industrial manufacturers in Haryana."
  };

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd items={[{ name: 'Heat Treatment', href: '/induction-heat-treatment' }, { name: 'Panipat', href: '/induction-heat-treatment/panipat' }]} />
      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Induction Hardening Services"
            highlightedWord="Panipat"
            description="Precision induction hardening for Panipat and Karnal industrial manufacturers — textile machinery shafts, rollers, gears with OEM-grade hardness reports."
            className="text-center"
          />

          {/* Process image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-4 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/5.jpeg"
              alt="Induction hardening process — heat treatment Panipat Haryana"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">Induction Hardening — Haryana</span>
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
              Panipat&apos;s industrial base spans textile machinery, oil refinery equipment, agri components, and general engineering. <strong>{SITE_NAME}</strong> delivers precision <strong>induction hardening and heat treatment</strong> for Panipat manufacturers — textile loom rollers, machinery shafts, gears, and industrial components — with pickup across Panipat, Karnal, and Sonipat.
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
                Industrial <span className="text-primary">Capabilities</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Precision hardening for Panipat&apos;s textile machinery rollers, loom shafts, refinery pump components, agri-equipment gears, and general engineering components across Haryana&apos;s manufacturing belt.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Shaft Hardening", href: "/induction-heat-treatment/induction-hardening-shafts-ludhiana" },
                    { title: "Gear Tooth Induction", href: "/induction-heat-treatment/induction-hardening-gears-ludhiana" },
                    { title: "Bearing Race Treatment", href: "/induction-heat-treatment/induction-hardening-bearings-ludhiana" },
                    { title: "On-site Hardening", href: "/induction-heat-treatment/on-site" }
                  ].map(item => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border hover:border-primary/50 transition-all group"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Panipat Industry Support</h3>
              <p className="text-muted-foreground mb-8 font-medium">
                Supporting Panipat&apos;s textile, refinery, and engineering sectors with precision induction hardening and documented batch quality reports for OEM and industrial clients.
              </p>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <MapPin className="h-5 w-5" /> Area: Panipat, Karnal, Sonipat, Rohtak
              </div>
              <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                <Link href="/contact">Inquire for Panipat</Link>
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

          <ServiceFAQ
            heading="Induction Hardening FAQs — Panipat"
            faqItems={[
              { question: 'Do you provide induction hardening for Panipat manufacturers?', answer: 'Yes. We serve Panipat, Karnal, Sonipat, and Rohtak with induction hardening and heat treatment job work. Pickup from your Panipat facility, processing at our Ludhiana workshop, and return delivery within 2–4 working days with hardness test reports.' },
              { question: 'What types of components from Panipat industries do you harden?', answer: 'Textile loom rollers and shafts, refinery pump shafts, agri-equipment gears, drive shafts, and general machinery components. We process EN8, EN19, EN24, 4140, and other alloy grades in batch quantities.' },
              { question: 'Can you harden textile machinery rollers and shafts?', answer: 'Yes. Textile machinery rollers, loom drive shafts, and weaving machine components are commonly processed by us. Surface hardness of 50–58 HRC with 1–4mm case depth is typical for textile machinery components in EN8 or EN19 steel.' },
              { question: 'What is the turnaround time for Panipat job work orders?', answer: 'Standard turnaround is 2–4 working days after parts reach our Ludhiana facility. We coordinate pickup from Panipat via our logistics partners. Urgent same-day processing is available at a priority rate.' },
              { question: 'Do you provide hardness test documentation for Haryana OEM suppliers?', answer: 'Yes. Every batch includes a Rockwell HRC test report with component ID, material, target vs achieved hardness, case depth, and operator sign-off. Suitable for OEM incoming inspection and export documentation requirements.' },
            ]}
          />
        </div>
        <CTASection />
      </div>
    </>
  );
}
