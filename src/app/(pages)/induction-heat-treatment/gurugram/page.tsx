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

export default function GurugramPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Induction Hardening & Heat Treatment — Gurugram, Haryana",
    "provider": { "@type": "LocalBusiness", "name": SITE_NAME, "telephone": SITE_PHONE_NUMBER },
    "areaServed": ["Gurugram", "Gurgaon", "Manesar", "Dharuhera", "Rewari", "IMT Manesar"],
    "description": "Precision induction hardening for Gurugram and Manesar auto OEM suppliers — gears, shafts, crankshafts, and precision components with zero distortion and Rockwell test reports."
  };

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd items={[{ name: 'Heat Treatment', href: '/induction-heat-treatment' }, { name: 'Gurugram', href: '/induction-heat-treatment/gurugram' }]} />
      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Induction Hardening Services"
            highlightedWord="Gurugram"
            description="Precision induction hardening for Gurugram and Manesar auto OEM suppliers — zero distortion, 55–62 HRC, with Tier-1 quality documentation."
            className="text-center"
          />

          {/* Process image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-4 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/5.jpeg"
              alt="Induction hardening precision process — Gurugram Manesar auto parts"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">Auto OEM Induction Hardening</span>
                <p className="text-white font-black uppercase italic text-xl md:text-2xl mt-2 tracking-tighter">Zero Distortion. OEM Grade. Certified.</p>
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
              Gurugram&apos;s Manesar and IMT zones house Maruti Suzuki, Honda, Hero MotoCorp, and hundreds of their Tier-1 precision component suppliers. <strong>{SITE_NAME}</strong> delivers <strong>precision induction hardening</strong> for Gurugram&apos;s auto OEM supply chain — transmission gears, CV joints, crankshafts, and bearing assemblies — with dimensional distortion under 0.05mm and Tier-1 format hardness documentation.
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
                Auto OEM <span className="text-primary">Capabilities</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Serving Maruti, Honda, Hero Tier-1 and Tier-2 suppliers in Manesar and Gurugram with precision-controlled induction hardening, tight HRC tolerance (±2 HRC), and complete batch traceability records.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Gear Tooth Hardening", href: "/induction-heat-treatment/induction-hardening-gears-ludhiana" },
                    { title: "Shaft Hardening", href: "/induction-heat-treatment/induction-hardening-shafts-ludhiana" },
                    { title: "Crankshaft Hardening", href: "/induction-heat-treatment/crankshafts-induction-hardening-ludhiana" },
                    { title: "Bearing Race Treatment", href: "/induction-heat-treatment/induction-hardening-bearings-ludhiana" }
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Gurugram & Manesar Zone</h3>
              <p className="text-muted-foreground mb-8 font-medium">
                Dedicated processing slots for Manesar and Gurugram auto OEM suppliers. Tier-1 hardness documentation, monthly production contracts, and pickup from IMT Manesar, Dharuhera, or Rewari.
              </p>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <MapPin className="h-5 w-5" /> Area: Gurugram, Manesar, Dharuhera, Rewari
              </div>
              <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                <Link href="/contact">Request Gurugram Quote</Link>
              </Button>
            </motion.div>
          </div>

          <section className="py-24 border-t border-border">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Automotive <span className="text-primary">Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Gear Hardening", href: "/induction-heat-treatment/induction-hardening-gears-ludhiana", icon: Settings },
                { title: "Crankshaft Hardening", href: "/induction-heat-treatment/crankshafts-induction-hardening-ludhiana", icon: Boxes },
                { title: "Automotive Industry", href: "/industries/automotive", icon: Cpu }
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
            heading="Induction Hardening FAQs — Gurugram"
            faqItems={[
              { question: 'Do you provide induction hardening for Manesar and Gurugram auto OEM suppliers?', answer: 'Yes. We provide induction hardening for Tier-1 and Tier-2 automotive suppliers in Gurugram, Manesar, IMT zones, Dharuhera, and Rewari. Our quality documentation — Rockwell test reports, process parameter sheets, batch traceability — meets Maruti, Honda, and Hero OEM incoming inspection standards.' },
              { question: 'What is your hardness tolerance for precision automotive gears?', answer: 'We maintain ±2 HRC tolerance across batches. Transmission gears achieve 58–62 HRC, drive shafts 55–60 HRC, and crankshaft journals 55–58 HRC. Dimensional distortion is kept under 0.05mm on CNC-controlled induction systems — critical for precision mating components.' },
              { question: 'Can you handle monthly production contracts for Manesar OEM suppliers?', answer: 'Yes. We operate monthly production contracts with dedicated processing slots for Gurugram and Manesar suppliers. Batch sizes from 50 to 2,000+ pieces per cycle. We align pickup schedules with your production runs to minimise inventory disruption.' },
              { question: 'How does pickup and delivery work for Gurugram-based factories?', answer: 'We coordinate regular pickup from Manesar, Gurugram, Dharuhera, and Rewari via our logistics partners. For first-time orders, contact us to schedule a trial batch pickup. Processed components are returned within 2–4 working days with full hardness documentation.' },
              { question: 'What steel grades do Gurugram auto OEMs typically send for hardening?', answer: 'EN19 (4140), EN24 (4340), 20MnCr5, 16MnCr5, and EN36 are the most common grades from Gurugram auto suppliers. Each grade has specific heating and quench parameters dialled in for consistent case depth and hardness — no experimentation on your production batches.' },
            ]}
          />
        </div>
        <CTASection />
      </div>
    </>
  );
}
