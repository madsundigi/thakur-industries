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

export default function NoidaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Induction Hardening & Heat Treatment — Noida, Greater Noida",
    "provider": { "@type": "LocalBusiness", "name": SITE_NAME, "telephone": SITE_PHONE_NUMBER },
    "areaServed": ["Noida", "Greater Noida", "Ghaziabad", "NCR", "Surajpur", "Ecotech"],
    "description": "Precision induction hardening for Noida and Greater Noida auto parts and engineering manufacturers — OEM-grade quality, zero distortion, certified Rockwell test reports."
  };

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd items={[{ name: 'Heat Treatment', href: '/induction-heat-treatment' }, { name: 'Noida', href: '/induction-heat-treatment/noida' }]} />
      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Induction Hardening Services"
            highlightedWord="Noida"
            description="Precision induction hardening for Noida and Greater Noida's auto parts and precision engineering manufacturers — OEM-grade quality with Rockwell hardness test reports."
            className="text-center"
          />

          {/* Process image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-4 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/5.jpeg"
              alt="Induction hardening precision process — Noida Greater Noida NCR"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">Induction Hardening — NCR</span>
                <p className="text-white font-black uppercase italic text-xl md:text-2xl mt-2 tracking-tighter">Precision. OEM Grade. Certified.</p>
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
              Noida and Greater Noida house a major auto parts and precision manufacturing cluster — Honda, Yamaha, and their Tier-1 suppliers operate extensively in Sectors 63, 81, and the Surajpur–Ecotech zones. <strong>{SITE_NAME}</strong> provides <strong>OEM-grade induction hardening</strong> for Noida&apos;s auto component manufacturers with certified test reports, tight HRC tolerance, and logistics coordination for pickup and return delivery.
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
                Auto Parts <span className="text-primary">Capabilities</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Transmission gears, drive shafts, crankshafts, bearing assemblies, and precision components for Honda, Yamaha, and NCR auto suppliers — batch hardening with OEM-format Rockwell documentation and monthly production contracts.
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Noida & Greater Noida Support</h3>
              <p className="text-muted-foreground mb-8 font-medium">
                Serving Honda, Yamaha Tier-1/2 suppliers and precision engineering companies across Noida Sectors, Greater Noida, and Ghaziabad with OEM-grade hardening and full batch documentation.
              </p>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <MapPin className="h-5 w-5" /> Area: Noida, Greater Noida, Ghaziabad, NCR
              </div>
              <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                <Link href="/contact">Request Noida Quote</Link>
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
                { title: "Shaft Hardening", href: "/induction-heat-treatment/induction-hardening-shafts-ludhiana", icon: Boxes },
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
            heading="Induction Hardening FAQs — Noida"
            faqItems={[
              { question: 'Do you provide induction hardening for Noida auto parts manufacturers?', answer: 'Yes. We serve auto parts manufacturers in Noida, Greater Noida (Surajpur, Ecotech), and Ghaziabad with OEM-grade induction hardening. Pickup is coordinated via our logistics network, processed at our Ludhiana facility, and returned within 3–5 working days with Rockwell test reports.' },
              { question: 'Can you supply Honda and Yamaha Tier-1 suppliers in Noida?', answer: 'Yes. We regularly supply Tier-1 and Tier-2 automotive suppliers for Honda, Yamaha, and other NCR OEMs. Our quality documentation — Rockwell HRC reports, process parameter sheets, batch traceability — is formatted to meet OEM incoming inspection requirements.' },
              { question: 'What types of auto components from Noida do you harden?', answer: 'Transmission gears (58–62 HRC), drive shafts (55–60 HRC), crankshaft journals (55–58 HRC), bearing races (60–64 HRC), and precision spindles. EN19, EN24, 20MnCr5, and 4140 are common grades from Noida auto suppliers.' },
              { question: 'How is pickup coordinated from Noida and Greater Noida?', answer: 'We coordinate pickup via transport from your Noida or Greater Noida facility. For regular production batches, we establish a fixed collection schedule. For first orders, contact us with your address and batch size — we arrange a trial pickup within 2–3 business days.' },
              { question: 'Do you offer competitive rates for Noida job work compared to local heat treatment companies?', answer: 'Yes. Our Ludhiana facility benefits from 25+ years of process efficiency and economies of scale — we typically offer more competitive rates than smaller local heat treatment shops in NCR, with better consistency, documentation, and faster turnaround for high-volume batches.' },
            ]}
          />
        </div>
        <CTASection />
      </div>
    </>
  );
}
