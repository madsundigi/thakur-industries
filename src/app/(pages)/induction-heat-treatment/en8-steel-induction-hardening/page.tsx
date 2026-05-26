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

export default function EN8SteelPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'EN8 Steel Induction Hardening — Ludhiana, Punjab',
    'provider': { '@type': 'LocalBusiness', 'name': SITE_NAME, 'telephone': SITE_PHONE_NUMBER },
    'areaServed': ['Ludhiana', 'Punjab', 'Haryana', 'Delhi NCR', 'India'],
    'description': 'Precision induction hardening for EN8 (080M40) carbon steel — shafts, gears, spindles, and agri components. 52–58 HRC with certified Rockwell reports.'
  };

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd items={[
        { name: 'Heat Treatment', href: '/induction-heat-treatment' },
        { name: 'EN8 Steel Hardening', href: '/induction-heat-treatment/en8-steel-induction-hardening' }
      ]} />
      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="EN8 Steel Induction Hardening"
            highlightedWord="Punjab"
            description="Precision induction hardening for EN8 (080M40) medium carbon steel — shafts, axles, gears, spindles, and agri equipment. 52–58 HRC with certified Rockwell reports from Ludhiana."
            className="text-center"
          />

          {/* Process image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-4 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/5.jpeg"
              alt="EN8 steel induction hardening — medium carbon steel heat treatment Ludhiana"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">EN8 · 080M40 · C40 Steel</span>
                <p className="text-white font-black uppercase italic text-xl md:text-2xl mt-2 tracking-tighter">52–58 HRC. Hard Surface. Tough Core.</p>
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
              EN8 is India&apos;s most widely used medium carbon steel — found in millions of tractor shafts, automotive axles, pump spindles, and gear blanks across Punjab&apos;s manufacturing belt. <strong>{SITE_NAME}</strong> provides precision <strong>induction hardening for EN8 steel</strong> components, achieving 52–58 HRC surface hardness while keeping the core tough and ductile. No furnace, no full-part heat — only the surface wears. Certified Rockwell hardness reports with every batch.
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
                { value: '52–58 HRC', label: 'Surface Hardness' },
                { value: '1–5 mm', label: 'Case Depth Range' },
                { value: '0.36–0.44%', label: 'Carbon Content' },
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
                EN8 <span className="text-primary">Applications</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  EN8 (also sold as C40 or 080M40 in Indian & British standards) responds excellently to induction hardening — the high frequency coil heats only the surface layer in seconds, then polymer quench locks in hardness. We process EN8 shafts from 10mm to 300mm diameter and lengths up to 2,000mm.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Shaft & Axle Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                    { title: 'Gear Blank Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                    { title: 'Bearing Race Treatment', href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana' },
                    { title: 'Crankshaft Hardening', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Why EN8 Responds Well to Induction</h3>
              <ul className="space-y-4 text-muted-foreground font-medium mb-8">
                {[
                  'Carbon content (0.36–0.44%) ideal for martensite formation',
                  'Selective surface hardening — core remains tough',
                  'No distortion — localised heating only',
                  'Eliminates carburizing or nitriding for surface wear',
                  'Repeated batches with consistent HRC results',
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
                <Link href="/get-quote">Get EN8 Hardening Quote</Link>
              </Button>
            </motion.div>
          </div>

          <section className="py-24 border-t border-border">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Related <span className="text-primary">Material Grades</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'EN19 Steel Hardening', href: '/induction-heat-treatment/en19-steel-induction-hardening', icon: Settings, sub: 'Cr-Mo alloy — 55–62 HRC' },
                { title: 'EN24 Steel Hardening', href: '/induction-heat-treatment/en24-steel-hardening', icon: Boxes, sub: 'Ni-Cr-Mo — High strength' },
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
            heading="EN8 Steel Induction Hardening — FAQs"
            faqItems={[
              {
                question: 'Can EN8 steel be induction hardened?',
                answer: 'Yes. EN8 (080M40) with 0.36–0.44% carbon is an excellent candidate for induction hardening. The medium carbon content enables full martensite formation at the surface, achieving 52–58 HRC. The core remains unaffected, maintaining ductility and toughness — ideal for shafts and axles that need wear resistance on the surface and impact resistance in the core.'
              },
              {
                question: 'What hardness can I expect on EN8 after induction hardening?',
                answer: 'Properly heat-treated EN8 achieves 52–58 HRC surface hardness. Case depth ranges from 1mm to 5mm depending on your specification and the frequency used. We provide Rockwell hardness test reports with every batch so you can verify against your engineering drawings.'
              },
              {
                question: 'What EN8 components do you harden at Thakur Industries?',
                answer: 'We regularly process EN8 shafts (transmission, pump, PTO), axles (tractor and automotive), gear blanks, spindles, couplings, and agricultural implement pins. Component diameter from 10mm to 300mm, length up to 2,000mm. Odd profiles and flanged shafts can be quoted individually.'
              },
              {
                question: 'How is EN8 induction hardening different from EN8 through hardening?',
                answer: 'Through hardening heats the entire cross-section — making the component brittle throughout. Induction hardening heats only the outer 1–5mm surface layer, leaving the core soft and tough. For shafts and gears that need fatigue resistance (bending, torsion) with surface wear resistance, induction is superior. It also causes far less distortion than furnace hardening.'
              },
              {
                question: 'Do you provide EN8 induction hardening for Punjab tractor component manufacturers?',
                answer: 'Yes. We serve tractor component OEMs and job shops across Punjab — Ludhiana, Mandi Gobindgarh, Khanna, Phagwara, Jalandhar, and Patiala. EN8 PTO shafts, hydraulic cylinder pins, lift arm pivots, and wheel axles are all routinely processed. Batch sizes from single prototypes to 5,000+ pieces per month.'
              },
            ]}
          />
        </div>
        <CTASection />
      </div>
    </>
  );
}
