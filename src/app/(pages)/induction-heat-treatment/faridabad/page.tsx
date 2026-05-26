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

export default function FaridabadPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Induction Hardening & Heat Treatment — Faridabad, Haryana",
    "provider": { "@type": "LocalBusiness", "name": SITE_NAME, "telephone": SITE_PHONE_NUMBER },
    "areaServed": ["Faridabad", "Ballabhgarh", "Palwal", "Gurugram", "Haryana NCR"],
    "description": "OEM-grade induction hardening for Faridabad's automotive, tractor, and heavy engineering manufacturers — gears, shafts, crankshafts with certified quality reports."
  };

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd items={[{ name: 'Heat Treatment', href: '/induction-heat-treatment' }, { name: 'Faridabad', href: '/induction-heat-treatment/faridabad' }]} />
      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Induction Hardening Services"
            highlightedWord="Faridabad"
            description="OEM-grade induction hardening for Faridabad's automotive and heavy engineering industries — gears, shafts, axles, and crankshafts with zero distortion and certified test reports."
            className="text-center"
          />

          {/* Process image banner */}
          <div className="relative h-52 md:h-64 rounded-3xl overflow-hidden mb-4 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            <Image
              src="/images/images/5.jpeg"
              alt="Induction hardening process — automotive heat treatment Faridabad"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">Automotive Induction Hardening</span>
                <p className="text-white font-black uppercase italic text-xl md:text-2xl mt-2 tracking-tighter">OEM Grade. Certified. Fast Turnaround.</p>
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
              Faridabad is Haryana&apos;s largest industrial city — home to JCB, Escorts, and hundreds of auto Tier-1 and Tier-2 suppliers. <strong>{SITE_NAME}</strong> provides <strong>OEM-grade induction hardening</strong> for Faridabad&apos;s automotive gears, transmission shafts, axles, and crankshafts. Consistent 55–62 HRC, zero distortion, and Rockwell test reports meeting OEM incoming inspection standards.
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
                Automotive <span className="text-primary">Capabilities</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Transmission gears, drive shafts, rear axles, crankshaft journals, bearing races, and differential gears — we serve Faridabad&apos;s auto OEM supply chain with repeatable batch hardening and full documentation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Shaft Hardening", href: "/induction-heat-treatment/induction-hardening-shafts-ludhiana" },
                    { title: "Gear Tooth Induction", href: "/induction-heat-treatment/induction-hardening-gears-ludhiana" },
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
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">Faridabad Auto OEM Support</h3>
              <p className="text-muted-foreground mb-8 font-medium">
                Monthly production contracts, OEM-format hardness reports, and pickup from your Faridabad or Ballabhgarh facility. Serving JCB vendors, Escorts suppliers, and auto Tier-1 manufacturers.
              </p>
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm mb-8">
                <MapPin className="h-5 w-5" /> Area: Faridabad, Ballabhgarh, Palwal, Gurugram
              </div>
              <Button asChild className="w-full py-8 text-lg font-black uppercase italic">
                <Link href="/contact">Request Faridabad Quote</Link>
              </Button>
            </motion.div>
          </div>

          <section className="py-24 border-t border-border">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Automotive <span className="text-primary">Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Crankshaft Hardening", href: "/induction-heat-treatment/crankshafts-induction-hardening-ludhiana", icon: Settings },
                { title: "Gear Hardening", href: "/induction-heat-treatment/induction-hardening-gears-ludhiana", icon: Boxes },
                { title: "Automotive Industries", href: "/industries/automotive", icon: Cpu }
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
            heading="Induction Hardening FAQs — Faridabad"
            faqItems={[
              { question: 'Do you supply OEM-grade induction hardening for Faridabad auto manufacturers?', answer: 'Yes. We supply to Tier-1 and Tier-2 automotive OEM suppliers in Faridabad, Ballabhgarh, and Gurugram. Our Rockwell hardness reports, batch traceability records, and process parameter sheets meet OEM incoming inspection requirements. Monthly production contracts available.' },
              { question: 'What automotive components do you harden for Faridabad factories?', answer: 'Transmission gears (58–62 HRC), drive and propeller shafts (55–60 HRC), rear and front axles, crankshaft journals, differential pinions, bearing races, and gearbox components. Both EN19/EN24 and 20MnCr5 grades are regularly processed.' },
              { question: 'Can you achieve zero distortion for precision automotive gears from Faridabad?', answer: 'Yes. Our CNC-controlled induction systems and precision quenching keep dimensional distortion under 0.05mm on standard automotive gears — critical for mating parts in transmissions and differentials. Sample-piece dimensional verification is available.' },
              { question: 'What is the capacity for high-volume automotive batches from Faridabad?', answer: 'We regularly handle batches of 500–2,000+ pieces for automotive OEM suppliers. For regular monthly production, we schedule dedicated processing slots at your preferred turnaround time — typically 2–4 working days per batch.' },
              { question: 'How do you pick up components from our Faridabad factory?', answer: 'We coordinate pickup via our logistics network from Faridabad, Ballabhgarh, and Palwal. For regular production contracts, we establish a fixed collection schedule. Contact us with your facility address and batch frequency to set up a recurring arrangement.' },
            ]}
          />
        </div>
        <CTASection />
      </div>
    </>
  );
}
