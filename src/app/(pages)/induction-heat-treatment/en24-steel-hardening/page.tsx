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

export default function EN24SteelPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'EN24 Steel Induction Hardening — Ludhiana, Punjab',
    'provider': { '@type': 'LocalBusiness', 'name': SITE_NAME, 'telephone': SITE_PHONE_NUMBER },
    'areaServed': ['Ludhiana', 'Punjab', 'Haryana', 'Delhi NCR', 'India'],
    'description': 'Precision induction hardening for EN24 (817M40) nickel-chromium-molybdenum alloy steel — high-stress shafts, spindles, aerospace & heavy engineering components. 55–62 HRC certified.'
  };

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd items={[
        { name: 'Heat Treatment', href: '/induction-heat-treatment' },
        { name: 'EN24 Steel Hardening', href: '/induction-heat-treatment/en24-steel-hardening' }
      ]} />
      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="EN24 Steel Induction Hardening"
            highlightedWord="Punjab"
            description="Precision induction hardening for EN24 (817M40) nickel-chromium-molybdenum alloy steel — high-stress shafts, spindles, heavy engineering & aerospace-grade components. 55–62 HRC with certified reports."
            className="text-center"
          />

          {/* Process image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-4 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/5.jpeg"
              alt="EN24 alloy steel induction hardening — nickel chromium molybdenum heat treatment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">EN24 · 817M40 · SAE 4340 Equivalent</span>
                <p className="text-white font-black uppercase italic text-xl md:text-2xl mt-2 tracking-tighter">Maximum Strength. Surface & Core.</p>
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
              EN24 (817M40) is a nickel-chromium-molybdenum alloy steel — the premium grade chosen when fatigue life, impact resistance, and surface hardness must coexist under the most demanding conditions. Equivalent to SAE 4340, it&apos;s specified for aerospace components, heavy-duty gearbox shafts, high-speed spindles, and defence-grade applications. <strong>{SITE_NAME}</strong> provides precision <strong>induction hardening for EN24 steel</strong> from our Ludhiana facility, achieving 55–62 HRC with fully certified Rockwell hardness reports.
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
                { value: '0.5–3 mm', label: 'Case Depth Range' },
                { value: 'Ni-Cr-Mo', label: 'Alloy System' },
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
                EN24 <span className="text-primary">Applications</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  EN24&apos;s nickel content boosts impact toughness; chromium and molybdenum provide high hardenability and temper resistance. The result is a steel that can be hardened to 55–62 HRC at the surface while the core absorbs shock loads without cracking — critical for aircraft landing gear pins, high-speed machine spindles, press tool components, and heavy gear shafts.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'High-Stress Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                    { title: 'Gear Tooth Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                    { title: 'Crankshaft Hardening', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
                    { title: 'Case Hardening Services', href: '/case-hardening-heat-treatment' },
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Why EN24 for Critical Applications?</h3>
              <ul className="space-y-4 text-muted-foreground font-medium mb-8">
                {[
                  'Highest hardenability of the EN-series — uniform HRC on large sections',
                  'Nickel adds toughness at hardened state — resists brittle fracture',
                  'SAE 4340 equivalent — accepted for export and OEM specifications',
                  'Superior fatigue life under reversed bending and torsion',
                  'Retains mechanical properties after repeated thermal cycling',
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
                <Link href="/get-quote">Get EN24 Hardening Quote</Link>
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
                { title: 'EN19 Steel Hardening', href: '/induction-heat-treatment/en19-steel-induction-hardening', icon: Boxes, sub: 'Cr-Mo alloy — 55–62 HRC' },
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
            heading="EN24 Steel Induction Hardening — FAQs"
            faqItems={[
              {
                question: 'What is EN24 steel and when is induction hardening used?',
                answer: 'EN24 (British standard 817M40) is a nickel-chromium-molybdenum alloy steel equivalent to SAE/AISI 4340. It combines the hardenability of chromium with the toughness of nickel and the temper resistance of molybdenum — making it the highest-performing common engineering steel. Induction hardening is used on EN24 to surface-harden journals, splines, and contact surfaces of large shafts and spindles where through-hardening would cause brittleness.'
              },
              {
                question: 'What hardness can I achieve on EN24 with induction hardening?',
                answer: 'EN24 achieves 55–62 HRC surface hardness with induction hardening. Case depth ranges from 0.5mm to 3mm. The core of a properly heat-treated EN24 component retains 35–45 HRC (pre-hardened and tempered state), giving an exceptional combination of surface wear resistance and core toughness that no through-hardening process can match.'
              },
              {
                question: 'Is EN24 the same as SAE 4340?',
                answer: 'Yes — EN24 (BS 817M40) and SAE/AISI 4340 are equivalent alloy steels (Ni-Cr-Mo). If your drawing or purchase order specifies 4340, SNCM439 (JIS), or 36CrNiMo4 (DIN), we treat it identically to EN24 for induction hardening. We accept components described by any of these standards.'
              },
              {
                question: 'What EN24 components do you process at Thakur Industries?',
                answer: 'We regularly process EN24 high-speed machine spindles, heavy gearbox output shafts, press tool guide pins and pillars, large-diameter crankshaft journals, aerospace-specification fastener bodies, and defence component shafts. Component diameter from 15mm to 250mm, length up to 2,000mm. Complex profiles are quoted individually.'
              },
              {
                question: 'Why choose induction hardening over case carburizing for EN24?',
                answer: 'Carburizing requires 900°C+ furnace temperatures for 4–10 hours — causing scale, distortion, and requiring re-machining of critical surfaces. Induction hardening heats only the surface layer in 1–10 seconds, causes minimal distortion (typically under 0.05mm on shafts), and produces a cleaner part with no decarburization. For EN24 where precision dimensions are critical, induction is almost always preferred over carburizing.'
              },
            ]}
          />
        </div>
        <CTASection />
      </div>
    </>
  );
}
