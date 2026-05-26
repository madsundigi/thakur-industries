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

export default function ChandigarhPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Induction Hardening & Heat Treatment — Chandigarh",
    "provider": { "@type": "LocalBusiness", "name": SITE_NAME, "telephone": SITE_PHONE_NUMBER },
    "areaServed": ["Chandigarh", "Panchkula", "Mohali", "SAS Nagar", "Derabassi", "Zirakpur"],
    "description": "Precision induction hardening and heat treatment for Chandigarh tricity — Mohali, Panchkula, and Derabassi industrial manufacturers with certified hardness reports."
  };

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd items={[{ name: 'Heat Treatment', href: '/induction-heat-treatment' }, { name: 'Chandigarh', href: '/induction-heat-treatment/chandigarh' }]} />
      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Induction Hardening Services"
            highlightedWord="Chandigarh"
            description="Precision induction hardening for Chandigarh tricity — Mohali, Panchkula, Zirakpur, and Derabassi manufacturers with fast turnaround and certified quality reports."
            className="text-center"
          />

          {/* Process image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-4 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/5.jpeg"
              alt="Induction hardening heat treatment — Chandigarh Mohali Panchkula"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">Induction Hardening — Tricity</span>
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
              The Chandigarh tricity — Chandigarh, Mohali (SAS Nagar), and Panchkula — has a growing manufacturing base covering pharma equipment, precision engineering, auto components, and light industry. <strong>{SITE_NAME}</strong> is conveniently located in Ludhiana, just 1.5 hours away, and provides pickup and delivery to the entire tricity for <strong>precision induction hardening and heat treatment</strong> with same-day processing available on urgent orders.
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
                Tricity <span className="text-primary">Capabilities</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Serving Chandigarh&apos;s pharma equipment, precision instrument, auto component, and light engineering manufacturers with fast turnaround hardening — Mohali Phase 8, Panchkula HSIIDC, and Derabassi industrial areas.
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Chandigarh Tricity Support</h3>
              <p className="text-muted-foreground mb-8 font-medium">
                Just 1.5 hours from Chandigarh. Pickup and delivery across Mohali, Panchkula, Zirakpur, and Derabassi. Rockwell test reports with every batch for OEM and audit compliance.
              </p>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <MapPin className="h-5 w-5" /> Area: Chandigarh, Mohali, Panchkula, Zirakpur
              </div>
              <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                <Link href="/contact">Inquire for Chandigarh</Link>
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
            heading="Induction Hardening FAQs — Chandigarh"
            faqItems={[
              { question: 'Do you provide heat treatment for Chandigarh and Mohali manufacturers?', answer: 'Yes. We provide induction hardening for manufacturers across Chandigarh, Mohali Phase 8, Panchkula HSIIDC, Zirakpur, and Derabassi. Our Ludhiana facility is 1.5 hours from Chandigarh — pickup and return delivery within 2–4 working days with full quality reports.' },
              { question: 'Which industries in the Chandigarh tricity do you serve?', answer: 'Pharma equipment manufacturers, precision instrument suppliers, auto component makers, and light engineering companies across Mohali and Panchkula. We harden shafts, gears, bearing races, spindles, and precision components used in these industries.' },
              { question: 'Is there a minimum order quantity for Chandigarh job work orders?', answer: 'No minimum order quantity. We accept single pieces for trials or sample jobs, as well as large batch production orders. Small prototype runs from Chandigarh startups and R&D units are welcome.' },
              { question: 'What is the turnaround time for urgent orders from Chandigarh?', answer: 'Standard turnaround is 2–4 working days. Same-day processing is available for urgent orders — components collected from Chandigarh in the morning can be processed and ready for pickup the same evening for standard-sized batches.' },
              { question: 'Can you provide induction hardening for pharma and food machinery components?', answer: 'Yes. We process stainless steel and alloy steel shafts, bearings, and gears used in pharmaceutical and food processing equipment. Case depth and hardness are controlled per your specification, with full traceability records for FDA/GMP-compliant documentation needs.' },
            ]}
          />
        </div>
        <CTASection />
      </div>
    </>
  );
}
