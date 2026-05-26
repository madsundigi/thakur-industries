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

export default function EN19SteelPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'EN19 Steel Induction Hardening — Ludhiana, Punjab',
    'provider': { '@type': 'LocalBusiness', 'name': SITE_NAME, 'telephone': SITE_PHONE_NUMBER },
    'areaServed': ['Ludhiana', 'Punjab', 'Haryana', 'Delhi NCR', 'India'],
    'description': 'Precision induction hardening for EN19 (709M40) chromium-molybdenum alloy steel — gearbox shafts, crankshafts, camshafts, hydraulic rods. 55–62 HRC certified.'
  };

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd items={[
        { name: 'Heat Treatment', href: '/induction-heat-treatment' },
        { name: 'EN19 Steel Hardening', href: '/induction-heat-treatment/en19-steel-induction-hardening' }
      ]} />
      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="EN19 Steel Induction Hardening"
            highlightedWord="Punjab"
            description="Precision induction hardening for EN19 (709M40) chromium-molybdenum alloy steel — gearbox shafts, crankshafts, camshafts & hydraulic cylinder rods. 55–62 HRC. Certified reports."
            className="text-center"
          />

          {/* Process image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-4 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/5.jpeg"
              alt="EN19 alloy steel induction hardening — chromium molybdenum heat treatment Ludhiana"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">EN19 · 709M40 · AISI 4140 Equivalent</span>
                <p className="text-white font-black uppercase italic text-xl md:text-2xl mt-2 tracking-tighter">55–62 HRC. Alloy Steel. No Compromise.</p>
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
              EN19 is a chromium-molybdenum alloy steel (equivalent to AISI 4140) used wherever engineers need superior hardenability and strength — gearbox shafts, crankshafts, connecting rods, hydraulic cylinder rods, and high-torque couplings. <strong>{SITE_NAME}</strong> provides precision <strong>induction hardening for EN19 steel</strong>, achieving 55–62 HRC on the surface layer with excellent through-section toughness retained. Critical aerospace, automotive, and heavy engineering applications processed daily.
            </p>
          </motion.section>

          {/* Material Properties Card */}
          <motion.section
            className="py-8 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '55–62 HRC', label: 'Surface Hardness' },
                { value: '0.5–4 mm', label: 'Case Depth Range' },
                { value: 'Cr-Mo Alloy', label: 'Steel Family' },
                { value: '2–4 Days', label: 'Turnaround' },
              ].map(stat => (
                <div key={stat.label} className="bg-secondary/30 border border-border rounded-2xl p-6 text-center">
                  <div className="text-2xl md:text-3xl font-black text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                EN19 <span className="text-primary">Applications</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  EN19&apos;s chromium and molybdenum content gives it much deeper hardenability than plain carbon EN8 — the hardened zone penetrates evenly even on large-diameter sections. We process EN19 gearbox shafts, hydraulic cylinder rods, crankshaft journals, cam lobes, and high-torque drive shafts across Punjab, Haryana, and Delhi NCR.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Gearbox Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                    { title: 'Crankshaft Treatment', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
                    { title: 'Gear Tooth Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                    { title: 'Bearing Race Treatment', href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana' },
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">EN19 vs EN8 — Why the Upgrade?</h3>
              <ul className="space-y-4 text-muted-foreground font-medium mb-8">
                {[
                  'Higher hardenability — consistent HRC on large diameters',
                  'Better fatigue strength under high torque and bending loads',
                  'Cr-Mo matrix resists softening at elevated temperatures',
                  'Preferred for automotive gearbox and hydraulic applications',
                  'Ideal for export / OEM parts requiring 4140-equivalent spec',
                ].map(point => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <MapPin className="h-5 w-5" /> Served: Punjab, Haryana, Delhi NCR
              </div>
              <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                <Link href="/get-quote">Get EN19 Hardening Quote</Link>
              </Button>
            </motion.div>
          </div>

          <section className="py-24 border-t border-border">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Related <span className="text-primary">Material Grades</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'EN8 Steel Hardening', href: '/induction-heat-treatment/en8-steel-induction-hardening', icon: Settings, sub: 'Medium carbon — 52–58 HRC' },
                { title: 'EN24 Steel Hardening', href: '/induction-heat-treatment/en24-steel-hardening', icon: Boxes, sub: 'Ni-Cr-Mo premium alloy' },
                { title: '4140 Steel Hardening', href: '/induction-heat-treatment/4140-steel-hardening', icon: Cpu, sub: 'AISI 4140 — OEM & export' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-card border border-border rounded-2xl transition-all hover:border-primary/50 flex flex-col items-center text-center shadow-sm"
                  >
                    <link.icon className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm">{link.title}</h4>
                    <p className="text-xs text-muted-foreground mt-2">{link.sub}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>

          <ServiceFAQ
            heading="EN19 Steel Induction Hardening — FAQs"
            faqItems={[
              {
                question: 'What is EN19 steel and why is it used for induction hardening?',
                answer: 'EN19 (British standard 709M40) is a chromium-molybdenum alloy steel equivalent to AISI 4140 and DIN 42CrMo4. Its alloy content gives it significantly deeper hardenability than plain carbon steels — enabling consistent 55–62 HRC hardness even on large cross-sections. It\'s the standard choice for gearbox shafts, crankshafts, connecting rods, hydraulic cylinder rods, and high-stress automotive components where EN8 isn\'t strong enough.'
              },
              {
                question: 'What hardness and case depth can be achieved on EN19?',
                answer: 'Induction hardening on EN19 steel achieves 55–62 HRC surface hardness, with case depth from 0.5mm to 4mm depending on your specification and the frequency applied. We use medium to high frequency induction depending on cross-section diameter. Rockwell hardness test reports are issued with every batch.'
              },
              {
                question: 'Is EN19 the same as AISI 4140?',
                answer: 'Yes — EN19 (BS 709M40) and AISI 4140 are equivalent grades, both chromium-molybdenum alloy steels with roughly 0.38–0.45% carbon, 0.9–1.2% chromium, and 0.2–0.35% molybdenum. If your drawing says 4140 or 42CrMo4 (DIN), we treat it the same as EN19 for induction hardening purposes. We accept components described by any of these designations.'
              },
              {
                question: 'Do you harden EN19 crankshafts and gearbox shafts?',
                answer: 'Yes. Crankshaft journals, main and big-end bearing surfaces, gearbox output shafts, and camshaft lobes in EN19/4140 are processed regularly. We use specialised scanning and single-shot coil setups depending on the journal geometry. Components up to 2,000mm length and 300mm diameter are accommodated in-house.'
              },
              {
                question: 'Can you process EN19 hydraulic cylinder rods?',
                answer: 'Yes. Hydraulic cylinder piston rods in EN19 are a common job — typically hardened to 55–60 HRC with a 0.5–1.5mm case depth for chrome plating adhesion and wear resistance. We ensure minimal distortion on long rods (straightness better than 0.1mm per metre) through controlled single-shot induction. Available for Punjab, Haryana, and Delhi NCR manufacturers.'
              },
            ]}
          />
        </div>
        <CTASection />
      </div>
    </>
  );
}
