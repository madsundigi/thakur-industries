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

export default function Steel4140Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': '4140 Steel Induction Hardening — Ludhiana, Punjab',
    'provider': { '@type': 'LocalBusiness', 'name': SITE_NAME, 'telephone': SITE_PHONE_NUMBER },
    'areaServed': ['Ludhiana', 'Punjab', 'Haryana', 'Delhi NCR', 'India'],
    'description': 'Precision induction hardening for AISI 4140 (EN19 / 42CrMo4) chromium-molybdenum steel — shafts, tooling, molds, axles & OEM export components. 54–60 HRC certified.'
  };

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd items={[
        { name: 'Heat Treatment', href: '/induction-heat-treatment' },
        { name: '4140 Steel Hardening', href: '/induction-heat-treatment/4140-steel-hardening' }
      ]} />
      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="4140 Steel Induction Hardening"
            highlightedWord="OEM Grade"
            description="Precision induction hardening for AISI 4140 (EN19 / 42CrMo4) chromium-molybdenum steel — shafts, tooling, dies, mold bases & OEM export components. 54–60 HRC. Certified reports."
            className="text-center"
          />

          {/* Process image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-4 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/5.jpeg"
              alt="AISI 4140 steel induction hardening — chromium molybdenum heat treatment OEM grade"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">AISI 4140 · EN19 · 42CrMo4 · SCM440</span>
                <p className="text-white font-black uppercase italic text-xl md:text-2xl mt-2 tracking-tighter">54–60 HRC. OEM. Export. Certified.</p>
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
              AISI 4140 is the world&apos;s most specified chromium-molybdenum engineering steel — known as EN19 in British/Indian standards, 42CrMo4 in German DIN, and SCM440 in Japan. OEM procurement teams, export units, and Tier-1 suppliers specify it by AISI designation. <strong>{SITE_NAME}</strong> provides precision <strong>induction hardening for AISI 4140 steel</strong> with documentation that satisfies international quality requirements — 54–60 HRC, certified Rockwell test reports, batch traceability. Accepted from Punjab, Haryana, Delhi NCR, and shipped all-India.
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
                { value: '54–60 HRC', label: 'Surface Hardness' },
                { value: '0.5–4 mm', label: 'Case Depth Range' },
                { value: 'EN19 / DIN 42CrMo4', label: 'Equivalent Grades' },
                { value: '2–4 Days', label: 'Turnaround' },
              ].map(stat => (
                <div key={stat.label} className="bg-secondary/30 border border-border rounded-2xl p-6 text-center">
                  <div className={`font-black text-primary mb-1 ${stat.value.length > 8 ? 'text-lg md:text-xl' : 'text-2xl md:text-3xl'}`}>{stat.value}</div>
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
                4140 <span className="text-primary">Applications</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  AISI 4140 is used wherever engineering drawings call for a universally understood alloy grade — OEM automotive assemblies for export, mold bases and die tooling, hydraulic and pneumatic component shafts, fastener forgings, and heavy-duty machine components. We accept drawings that specify 4140 and process to exact surface hardness and case depth requirements.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                    { title: 'Gear Tooth Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                    { title: 'Crankshaft Hardening', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
                    { title: 'Bearing Race Hardening', href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana' },
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">4140 for OEM & Export Work</h3>
              <ul className="space-y-4 text-muted-foreground font-medium mb-8">
                {[
                  'Internationally recognised AISI grade — no conversion needed',
                  'Documentation matches OEM quality system requirements',
                  'Batch HRC test reports with part and heat numbers',
                  'Consistent results across multi-lot shipments',
                  'Accepted from all-India customers via courier or transport',
                ].map(point => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <MapPin className="h-5 w-5" /> All-India · Punjab · NCR · Export
              </div>
              <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                <Link href="/get-quote">Get 4140 Hardening Quote</Link>
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
                { title: 'EN24 Steel Hardening', href: '/induction-heat-treatment/en24-steel-hardening', icon: Cpu, sub: 'Ni-Cr-Mo premium alloy' },
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
            heading="AISI 4140 Induction Hardening — FAQs"
            faqItems={[
              {
                question: 'What is AISI 4140 steel and can it be induction hardened?',
                answer: 'AISI 4140 is a chromium-molybdenum alloy steel (0.38–0.43% C, 0.8–1.1% Cr, 0.15–0.25% Mo) widely specified in OEM, export, and automotive engineering. It\'s equivalent to EN19 (BS 709M40) in Indian/British standards and 42CrMo4 in German DIN. Yes — 4140 responds excellently to induction hardening, achieving 54–60 HRC surface hardness with deep, consistent case depth. It\'s one of the most common materials we process.'
              },
              {
                question: 'What hardness and case depth does 4140 achieve after induction hardening?',
                answer: 'AISI 4140 achieves 54–60 HRC surface hardness with induction hardening at our facility. Case depth ranges from 0.5mm to 4mm depending on cross-section diameter, frequency, and your specification. All batches include Rockwell hardness test certificates with measured HRC values at surface and at specified depths.'
              },
              {
                question: 'Is AISI 4140 the same as EN19 steel?',
                answer: 'Yes. AISI/SAE 4140 and EN19 (British/Indian standard 709M40) are equivalent chromium-molybdenum alloy steels. If your drawing says EN19, 4140, 42CrMo4 (DIN), or SCM440 (JIS), they are the same alloy and processed identically at our facility. We accept components described by any of these designations without requiring re-qualification.'
              },
              {
                question: 'Do you provide 4140 hardening for OEM and export manufacturers?',
                answer: 'Yes. We serve OEM manufacturers exporting automotive components, hydraulic parts, and precision shafts who specify AISI 4140 on their drawings. Our Rockwell hardness test reports include batch number, material grade, measured HRC, and case depth — suitable for quality system documentation. We ship treated components back via courier or transport to any location in India.'
              },
              {
                question: 'Can you harden 4140 mold bases and die tooling?',
                answer: 'Yes. 4140 mold bases, press tool components, die pillars, and guide bushings are regularly processed. We use selective induction hardening to harden only the wear surfaces (bores, wear pads, parting line areas) while leaving bolt holes and non-critical areas soft for machining. This prevents warping of large flat plates. Contact us with your component dimensions and hardening zone specification for a quote.'
              },
            ]}
          />
        </div>
        <CTASection />
      </div>
    </>
  );
}
