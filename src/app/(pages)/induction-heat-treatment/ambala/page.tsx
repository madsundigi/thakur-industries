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

export default function AmbalaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Induction Hardening & Heat Treatment — Ambala, Haryana",
    "provider": { "@type": "LocalBusiness", "name": SITE_NAME, "telephone": SITE_PHONE_NUMBER },
    "areaServed": ["Ambala", "Ambala Cantt", "Chandigarh", "Panchkula", "Kurukshetra"],
    "description": "Precision induction hardening and heat treatment for Ambala's scientific instruments, auto parts, and industrial component manufacturers."
  };

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd items={[{ name: 'Heat Treatment', href: '/induction-heat-treatment' }, { name: 'Ambala', href: '/induction-heat-treatment/ambala' }]} />
      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Induction Hardening Services"
            highlightedWord="Ambala"
            description="Precision induction hardening for Ambala and Chandigarh tricity — scientific instruments, auto parts & industrial gears with certified hardness reports."
            className="text-center"
          />

          {/* Process image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-4 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/5.jpeg"
              alt="Induction hardening process — precision heat treatment Ambala Haryana"
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
            <p className="section-label">// LOCATION //</p>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Ambala is one of North India&apos;s most important industrial cities — home to over 3,000 scientific instrument manufacturers and a growing auto parts cluster. <strong>{SITE_NAME}</strong> provides precision <strong>induction hardening and heat treatment</strong> for Ambala&apos;s manufacturers, with pickup and delivery to Ambala Cantt, Chandigarh, and Panchkula. Certified Rockwell hardness test reports with every batch.
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
                  We serve Ambala&apos;s precision instrument industry, automotive component OEMs, and agri-equipment manufacturers with repeatable surface hardening — gears, shafts, spindles, bearing races, and tool steel components.
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
                      className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border hover:border-primary/50 transition-all group animate-in fade-in slide-in-from-bottom-4 duration-500 hover:pl-3 hover:border-l-2 hover:border-l-primary"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="text-primary animate-in zoom-in-50 duration-300" style={{ animationDelay: `${i * 50}ms` }}>
                        <CheckCircle2 className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      </div>
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Ambala & Chandigarh Zone</h3>
              <p className="text-muted-foreground mb-8 font-medium">
                Serving precision instrument manufacturers, auto component OEMs, and tooling companies across the Ambala–Chandigarh–Panchkula industrial corridor. OEM-grade test reports included.
              </p>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <MapPin className="h-5 w-5" /> Area: Ambala, Chandigarh, Panchkula, Kurukshetra
              </div>
              <Button asChild className="w-full py-8 text-lg font-black uppercase italic hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-shadow duration-300">
                <Link href="/contact">Inquire for Ambala</Link>
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
                    className="p-8 bg-card border border-border rounded-2xl transition-all hover:border-primary/50 flex flex-col items-center text-center shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500"
                    style={{ animationDelay: `${i * 100}ms` }}
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
            heading="Induction Hardening FAQs — Ambala"
            faqItems={[
              { question: 'Do you provide induction hardening job work for Ambala industries?', answer: 'Yes. We provide induction hardening and heat treatment for manufacturers in Ambala, Ambala Cantt, Chandigarh, and Panchkula. Pickup and delivery is available across the Ambala–Chandigarh corridor. Standard turnaround is 2–4 working days after parts reach our Ludhiana facility.' },
              { question: 'Which Ambala industries use induction hardening?', answer: 'Ambala\'s scientific instrument manufacturers, auto components suppliers, agricultural equipment makers, and precision tooling companies are our primary clients. We harden shafts, gears, spindles, bearing races, and cutting tools used in these industries.' },
              { question: 'How do you transport components from Ambala to your facility?', answer: 'We offer scheduled pickup from your Ambala or Chandigarh facility. Components travel to our Ludhiana workshop for processing and are returned within 2–4 working days. Urgent same-day processing is available with express courier coordination.' },
              { question: 'What hardness and case depth can you achieve for Ambala manufacturers?', answer: 'We achieve 45–62 HRC depending on material grade (EN8, EN19, EN24, 4140). Case depth ranges from 0.5mm to 8mm per specification. Rockwell hardness test reports are included with every batch for your quality records.' },
              { question: 'Can you handle on-site induction hardening near Chandigarh?', answer: 'Yes. For large fixed components or machinery that cannot be transported — press beds, mill rolls, machine guideways — we deploy our mobile induction unit to your Ambala or Chandigarh facility. Contact us with component size and location for scheduling.' },
            ]}
          />
        </div>
        <CTASection />
      </div>
    </>
  );
}
