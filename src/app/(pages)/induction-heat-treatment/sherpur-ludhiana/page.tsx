'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Settings, Boxes, Cpu, ArrowRight } from 'lucide-react';
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

export default function SherpurLudhianaPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Heat Treatment — Sherpur, Ludhiana',
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      telephone: SITE_PHONE_NUMBER,
    },
    areaServed: ['Sherpur Ludhiana', 'Sherpur Kalan', 'Ludhiana', 'Shimlapuri'],
    description: 'Precision induction hardening and heat treatment job work for industries in Sherpur, Ludhiana. Gears, shafts, bearings, and case hardening.',
  };

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd items={[
        { name: 'Heat Treatment', href: '/induction-heat-treatment' },
        { name: 'Sherpur Ludhiana', href: '/induction-heat-treatment/sherpur-ludhiana' },
      ]} />

      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Induction Hardening Services in Sherpur"
            highlightedWord="Ludhiana"
            description="Serving Sherpur and surrounding Ludhiana industrial areas with precision induction hardening and heat treatment. Gear, shaft, bearing, and case hardening with certified test reports. Fast local service."
            className="text-center"
          />

          <motion.section
            className="py-12 text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Sherpur and its surrounding industrial clusters in Ludhiana house a significant concentration of forging, machining, and auto parts units. Thakur Industries — based in nearby Shimlapuri — provides same-day or next-day pickup for Sherpur manufacturers, with 2–4 day batch turnaround and certified Rockwell hardness reports.
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
                  Induction hardening services for Sherpur's automotive, agricultural, and general engineering manufacturers — workshop and mobile on-site options available.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Shaft Hardening', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                    { title: 'Gear Tooth Induction', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                    { title: 'Bearing Race Treatment', href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana' },
                    { title: 'On-site Hardening', href: '/induction-heat-treatment/on-site' },
                    { title: 'Case Hardening', href: '/case-hardening-heat-treatment' },
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4">Sherpur Area Support</h3>
              <p className="text-muted-foreground mb-6 font-medium">
                Fast, reliable induction hardening for Sherpur Kalan, Sherpur, and nearby Ludhiana industrial zones. We understand local manufacturing needs.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Same-day or next-day pickup from Sherpur',
                  '2–4 day standard batch turnaround',
                  'Rockwell HRC test reports included',
                  'Competitive job work rates',
                  'Min. order: even single pieces accepted',
                ].map(point => (
                  <div key={point} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-6">
                <MapPin className="h-5 w-5" /> Sherpur Kalan, Sherpur, Ludhiana
              </div>
              <Button asChild className="w-full py-6 text-lg font-black uppercase italic mb-3">
                <Link href="/contact">Book Sherpur Pickup</Link>
              </Button>
              <a
                href={`tel:${SITE_PHONE_NUMBER.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 py-4 border border-primary text-primary rounded-xl font-black uppercase italic text-sm hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Call: {SITE_PHONE_NUMBER}
              </a>
            </motion.div>
          </div>

          <section className="py-24 border-t border-border">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Related <span className="text-primary">Services</span>
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
                    <p className="text-xs text-muted-foreground mt-2">Explore Service</p>
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
