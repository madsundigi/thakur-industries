'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Settings, Boxes, Cpu, ArrowRight, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function FocalPointLudhianaPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Heat Treatment — Focal Point, Ludhiana',
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      telephone: SITE_PHONE_NUMBER,
    },
    areaServed: ['Focal Point Ludhiana', 'Ludhiana', 'Phase 1 Focal Point', 'Phase 2 Focal Point', 'Phase 5 Focal Point', 'Phase 8 Focal Point'],
    description: 'Precision induction hardening and heat treatment job work for industries in Focal Point, Ludhiana — Punjab\'s largest industrial zone. Gears, shafts, bearings, and crankshafts.',
  };

  const focalPointIndustries = [
    'Automotive parts (gears, shafts, axles)',
    'Bicycle & cycle parts manufacturers',
    'Tractor & agricultural OEMs',
    'Fasteners & forging units',
    'Machine tool manufacturers',
    'Hydraulic & pneumatic components',
    'Steel fabrication & rolling',
    'Export-grade precision parts',
  ];

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd items={[
        { name: 'Heat Treatment', href: '/induction-heat-treatment' },
        { name: 'Focal Point Ludhiana', href: '/induction-heat-treatment/focal-point-ludhiana' },
      ]} />

      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Induction Hardening in Focal Point"
            highlightedWord="Ludhiana"
            description="Serving Focal Point — Punjab's largest and most active industrial estate — with precision induction hardening, case hardening, and surface heat treatment. All phases covered with fast pickup & delivery."
            className="text-center"
          />

          <motion.section
            className="py-12 text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Factory className="h-6 w-6 text-primary" />
              <span className="text-primary font-black uppercase italic tracking-widest text-sm">Punjab's Largest Industrial Zone</span>
            </div>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Focal Point Ludhiana is home to over 6,000 industrial units across 8 phases — manufacturing everything from auto parts and bicycles to fasteners, machine tools, and export components. Thakur Industries provides same-area heat treatment pickup and delivery for all Focal Point businesses.
            </p>
          </motion.section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                Industrial <span className="text-primary">Capabilities</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We serve all phases of Focal Point — Phase 1, 2, 3, 4, 5, 7, 8, and the surrounding industrial areas — with induction hardening for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                  { title: 'Gear Tooth Induction', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                  { title: 'Bearing Race Treatment', href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana' },
                  { title: 'Crankshaft Hardening', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
                  { title: 'Case Hardening', href: '/case-hardening-heat-treatment' },
                  { title: 'On-site Service', href: '/induction-heat-treatment/on-site' },
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="p-8 bg-secondary/20 rounded-[2rem] border border-primary/10">
                <h3 className="text-xl font-black uppercase italic tracking-tighter mb-4">Industries in Focal Point We Serve</h3>
                <ul className="space-y-3">
                  {focalPointIndustries.map(ind => (
                    <li key={ind} className="flex items-center gap-3 text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-medium text-sm">{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-secondary/20 rounded-[2rem] border border-primary/10">
                <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-6">
                  <MapPin className="h-5 w-5" />
                  Focal Point — All Phases, Ludhiana
                </div>
                <p className="text-muted-foreground mb-6 font-medium">
                  Pickup from your Focal Point factory. Delivery back within 2–4 days. No transportation headache — we handle the logistics.
                </p>
                <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                  <Link href="/contact">Book Focal Point Pickup</Link>
                </Button>
                <a
                  href={`tel:${SITE_PHONE_NUMBER.replace(/\s/g, '')}`}
                  className="mt-4 flex items-center justify-center gap-2 py-4 border border-primary text-primary rounded-xl font-black uppercase italic text-sm hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Call Now: {SITE_PHONE_NUMBER}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Why Focal Point businesses trust us */}
          <section className="py-16 border-t border-border">
            <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-10 text-center">
              Why Focal Point Units <span className="text-primary">Choose Us</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Same-Day Quote', desc: 'Call or WhatsApp with component details — rate confirmed the same day.', icon: CheckCircle2 },
                { title: 'Pickup & Delivery', desc: 'We collect from your Focal Point unit and deliver back. No downtime for your team.', icon: MapPin },
                { title: 'Certified Reports', desc: 'Rockwell HRC test reports with every batch for your quality records.', icon: Settings },
              ].map(item => (
                <div key={item.title} className="p-6 bg-secondary/20 border border-border rounded-2xl text-center">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-black uppercase italic tracking-tight mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16 border-t border-border">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-10 text-center">
              Nearby <span className="text-primary">Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings },
                { title: 'Gear Hardening', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', icon: Boxes },
                { title: 'Technical Guide', href: '/induction-heat-treatment', icon: Cpu },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 flex flex-col items-center text-center shadow-sm transition-all"
                  >
                    <link.icon className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm">{link.title}</h4>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>
        </div>
        <CTASection />
      </div>
    </>
  );
}
