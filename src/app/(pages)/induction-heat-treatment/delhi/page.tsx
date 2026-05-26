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

export default function DelhiPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Induction Hardening & Heat Treatment — Delhi",
    "provider": { "@type": "LocalBusiness", "name": SITE_NAME, "telephone": SITE_PHONE_NUMBER },
    "areaServed": ["Delhi", "Okhla Industrial Area", "Wazirpur", "Swaroop Nagar", "Lawrence Road", "Bawana"],
    "description": "Induction hardening and heat treatment job work for Delhi manufacturers — gears, shafts, tools, and industrial components with OEM-grade quality and Rockwell test reports."
  };

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd items={[{ name: 'Heat Treatment', href: '/induction-heat-treatment' }, { name: 'Delhi', href: '/induction-heat-treatment/delhi' }]} />
      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Induction Hardening Services"
            highlightedWord="Delhi"
            description="Induction hardening and heat treatment for Delhi's engineering and manufacturing clusters — Okhla, Wazirpur, Bawana — with certified Rockwell hardness reports."
            className="text-center"
          />

          {/* Process image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-4 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/5.jpeg"
              alt="Induction hardening precision heat treatment — Delhi manufacturing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">Induction Hardening — Delhi NCR</span>
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
              Delhi&apos;s industrial clusters — Okhla, Wazirpur, Lawrence Road, Swaroop Nagar, and Bawana — produce auto parts, tools, dies, and precision engineering components for markets across India. <strong>{SITE_NAME}</strong> serves Delhi manufacturers with <strong>precision induction hardening and heat treatment</strong>, offering competitive job work rates, certified Rockwell test reports, and pickup logistics coordination across Delhi NCR.
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
                  Serving Delhi&apos;s auto parts suppliers, tooling companies, machine builders, and precision engineering manufacturers with batch induction hardening — shafts, gears, bearings, tools, dies, and custom components.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Shaft Hardening", href: "/induction-heat-treatment/induction-hardening-shafts-ludhiana" },
                    { title: "Gear Tooth Induction", href: "/induction-heat-treatment/induction-hardening-gears-ludhiana" },
                    { title: "Bearing Race Treatment", href: "/induction-heat-treatment/induction-hardening-bearings-ludhiana" },
                    { title: "Case Hardening", href: "/case-hardening-heat-treatment" }
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Delhi NCR Support</h3>
              <p className="text-muted-foreground mb-8 font-medium">
                Competitive job work rates for Delhi manufacturers. Pickup and return logistics via courier or transport. Rockwell test reports included. Export-grade documentation available.
              </p>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <MapPin className="h-5 w-5" /> Area: Delhi, Okhla, Wazirpur, Bawana, NCR
              </div>
              <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                <Link href="/contact">Inquire for Delhi</Link>
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
                { title: "Get a Quote", href: "/get-quote", icon: Cpu }
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
            heading="Induction Hardening FAQs — Delhi"
            faqItems={[
              { question: 'Do you provide induction hardening job work for Delhi manufacturers?', answer: 'Yes. We serve manufacturers across Delhi — Okhla, Wazirpur, Lawrence Road, Swaroop Nagar, and Bawana — with induction hardening and case hardening job work. Components are coordinated via pickup/courier, processed at our Ludhiana facility, and returned with hardness test reports within 3–5 working days.' },
              { question: 'How does logistics work for Delhi job work orders?', answer: 'For Delhi orders, we coordinate pickup via transport or courier at your preferred schedule. Components travel to our Ludhiana workshop, are processed within 1–2 days, and returned. We handle transport coordination end-to-end — you just package and label the components.' },
              { question: 'What Delhi industries typically use induction hardening?', answer: 'Auto parts manufacturers (Okhla/Wazirpur clusters), tooling and die makers, machine component builders, precision engineering companies, and export-oriented manufacturing units. We harden EN8, EN19, EN24, 4140, tool steel, and other grades.' },
              { question: 'Can you provide export-quality documentation for Delhi export units?', answer: 'Yes. We provide Rockwell HRC test reports, batch traceability records, case depth reports, and material-grade confirmation documentation suitable for export buyers, OEM audits, and quality certifications. Metallurgical cross-section reports available on request.' },
              { question: 'What is the minimum batch size for Delhi heat treatment job work?', answer: 'No minimum batch size — we accept single pieces and trial samples. Small Delhi prototyping companies and R&D units are welcome. Bulk production batches of 50+ pieces get preferential per-piece pricing. Call or WhatsApp with your component details for a fast quote.' },
            ]}
          />
        </div>
        <CTASection />
      </div>
    </>
  );
}
