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

export default function YamunanagarPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Induction Hardening & Heat Treatment — Yamunanagar, Haryana",
    "provider": { "@type": "LocalBusiness", "name": SITE_NAME, "telephone": SITE_PHONE_NUMBER },
    "areaServed": ["Yamunanagar", "Jagadhri", "Kurukshetra", "Karnal", "Ambala"],
    "description": "Induction hardening and heat treatment for Yamunanagar's steel fabrication, agri equipment, and industrial component manufacturers."
  };

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd items={[{ name: 'Heat Treatment', href: '/induction-heat-treatment' }, { name: 'Yamunanagar', href: '/induction-heat-treatment/yamunanagar' }]} />
      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Induction Hardening Services"
            highlightedWord="Yamunanagar"
            description="Induction hardening and heat treatment for Yamunanagar's steel, agri equipment, and industrial manufacturers — certified Rockwell hardness reports with every batch."
            className="text-center"
          />

          {/* Process image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-4 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/5.jpeg"
              alt="Induction hardening process — heat treatment Yamunanagar Haryana"
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
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Yamunanagar and Jagadhri are home to a major steel fabrication and agri-equipment manufacturing cluster in Haryana. <strong>{SITE_NAME}</strong> provides precision <strong>induction hardening and heat treatment</strong> for gears, shafts, rollers, and agri components used across this industrial zone. Pickup and delivery available to Yamunanagar, Jagadhri, Kurukshetra, and Karnal.
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
                  Serving Yamunanagar&apos;s steel pipe manufacturers, plywood machinery builders, agri-equipment OEMs, and sugar mill component suppliers with precision surface hardening and case depth certification.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Shaft Hardening", href: "/induction-heat-treatment/induction-hardening-shafts-ludhiana" },
                    { title: "Gear Tooth Induction", href: "/induction-heat-treatment/induction-hardening-gears-ludhiana" },
                    { title: "Bearing Race Treatment", href: "/induction-heat-treatment/induction-hardening-bearings-ludhiana" },
                    { title: "On-site Hardening", href: "/induction-heat-treatment/on-site" }
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Yamunanagar Industry Support</h3>
              <p className="text-muted-foreground mb-8 font-medium">
                Delivering traceable hardness reports and consistent batch quality for steel fabrication, agri-machinery, and heavy industrial component manufacturers across the Yamunanagar–Jagadhri belt.
              </p>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <MapPin className="h-5 w-5" /> Area: Yamunanagar, Jagadhri, Kurukshetra, Karnal
              </div>
              <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                <Link href="/contact">Inquire for Yamunanagar</Link>
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
            heading="Induction Hardening FAQs — Yamunanagar"
            faqItems={[
              { question: 'Do you provide heat treatment services for Yamunanagar manufacturers?', answer: 'Yes. We serve Yamunanagar, Jagadhri, Kurukshetra, and Karnal with induction hardening and case hardening job work. Components are picked up, processed at our Ludhiana facility, and returned within 2–4 working days with hardness test reports.' },
              { question: 'Which components from Yamunanagar industries do you harden?', answer: 'Steel pipe mill rollers, plywood press shafts, agri-equipment gears, sugar mill components, drive shafts, and general industrial gears. We harden EN8, EN19, EN24, 20MnCr5, and other alloy grades common in Haryana\'s heavy industry.' },
              { question: 'Can you harden large rollers and heavy industrial components from Yamunanagar?', answer: 'Yes. For large rollers, press shafts, or components that cannot be transported, our mobile induction unit is available for on-site hardening at your Yamunanagar factory. Contact us with the component dimensions and we schedule mobilisation accordingly.' },
              { question: 'What hardness is achievable for steel fabrication components?', answer: 'Surface hardness of 45–62 HRC depending on steel grade and required case depth (0.5–8mm). All batches come with Rockwell HRC test reports per piece or per batch. Case depth is verified by cross-section on sample components.' },
              { question: 'How do I get a quote for induction hardening job work from Yamunanagar?', answer: 'Call or WhatsApp +91 7900000776 with your component name, material grade, dimensions, required hardness, and quantity. We provide a rate within 24 hours and arrange pickup from your Yamunanagar or Jagadhri facility.' },
            ]}
          />
        </div>
        <CTASection />
      </div>
    </>
  );
}
