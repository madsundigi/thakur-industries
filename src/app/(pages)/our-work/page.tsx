'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { JsonLd } from '@/components/shared/JsonLd';
import { CTASection } from '@/components/home/CTASection';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const categories = ['All', 'Shafts', 'Gears', 'Bearings', 'Crankshafts', 'Heavy Components'];

const workItems = [
  { id: 'appShaftHardening', category: 'Shafts', title: 'Drive Shaft Induction Hardening', desc: 'EN19 drive shaft — case depth 3mm, hardness 58 HRC. Automotive OEM batch of 150 pcs.', material: 'EN19 (4140)', hardness: '58 HRC', client: 'Automotive OEM, Ludhiana' },
  { id: 'appGearHardening', category: 'Gears', title: 'Industrial Gear Tooth Hardening', desc: 'Tooth-by-tooth induction hardening for a 48-tooth spur gear. Zero distortion, consistent case depth 1.5mm.', material: 'EN24 (4340)', hardness: '60 HRC', client: 'Gearbox Manufacturer, Jalandhar' },
  { id: 'appBearingHardening', category: 'Bearings', title: 'Bearing Race Surface Hardening', desc: 'Outer race induction hardening for heavy-duty roller bearings. Full-face treatment with water quench.', material: 'EN31 (52100)', hardness: '62 HRC', client: 'Bearing Manufacturer, Ludhiana' },
  { id: 'blogCrankshafts', category: 'Crankshafts', title: 'Crankshaft Journal Hardening', desc: 'All main journals and crank pins hardened on a 4-cylinder diesel engine crankshaft. Mobile on-site job.', material: 'EN24 (4340)', hardness: '57 HRC', client: 'Diesel Engine OEM, Mandi Gobindgarh' },
  { id: 'blogShaftsAndAxles', category: 'Shafts', title: 'Agricultural PTO Shaft Hardening', desc: 'PTO shafts for tractor rear axle assemblies. High-volume batch job — 500 pcs/month for Punjab tractor OEM.', material: 'EN8 (C45)', hardness: '55 HRC', client: 'Tractor Parts OEM, Hoshiarpur' },
  { id: 'blogGearsAndPinions', category: 'Gears', title: 'Pinion & Cluster Gear Hardening', desc: 'Cluster gear set for automotive transmission. Selective tooth face hardening without root softening.', material: '20MnCr5', hardness: '60 HRC', client: 'Transmission Parts, Phagwara' },
  { id: 'blogRollerHardening', category: 'Heavy Components', title: 'Industrial Roller Hardening', desc: 'Large-diameter press roller for corrugated sheet manufacturing. Full surface induction treatment.', material: 'Alloy Steel', hardness: '56 HRC', client: 'Sheet Metal Plant, Ludhiana' },
  { id: 'blogHydraulicRods', category: 'Shafts', title: 'Hydraulic Cylinder Rod Hardening', desc: 'Chrome-plating base treatment — induction hardening for hydraulic piston rods before chrome plating.', material: 'EN19 (4140)', hardness: '58 HRC', client: 'Hydraulics Manufacturer, Batala' },
  { id: 'blogTransmissionShaft', category: 'Shafts', title: 'Transmission Mainshaft Hardening', desc: 'Commercial vehicle gearbox mainshaft — spline zone hardening with tight distortion control under 0.02mm.', material: 'EN24 (4340)', hardness: '60 HRC', client: 'CV Parts Supplier, Ludhiana' },
  { id: 'blogForgedParts', category: 'Heavy Components', title: 'Forged Spindle Hardening', desc: 'Agricultural spindle heads — forged then induction hardened for maximum wear life in field conditions.', material: 'EN8 (C45)', hardness: '54 HRC', client: 'Farm Equipment OEM, Sangrur' },
  { id: 'blogToolSteel', category: 'Heavy Components', title: 'Tool Steel Die Hardening', desc: 'D2 blanking die surface hardening — precise case depth 1.2mm for extended tool life without cracking.', material: 'D2 Tool Steel', hardness: '62 HRC', client: 'Press Shop, Mandi Gobindgarh' },
  { id: 'blogHardnessTesting', category: 'Gears', title: 'Rotavator Gear Hardening', desc: 'Rotavator blades and gears for agricultural machinery — case hardening with water quench for field durability.', material: 'EN8 (C45)', hardness: '55 HRC', client: 'Rotavator OEM, Ludhiana' },
];

const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? workItems
    : workItems.filter(item => item.category === activeCategory);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${SITE_NAME} — Induction Hardening Work Portfolio`,
    description: 'Real induction hardening and heat treatment job work examples from Thakur Industries, Ludhiana, Punjab.',
    url: `${SITE_URL}/our-work`,
    numberOfItems: workItems.length,
  };

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Our Work', href: '/our-work' }]} />
      <JsonLd data={schema} />

      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Our Work —"
            highlightedWord="Job Work Portfolio"
            description={`Real induction hardening jobs done by ${SITE_NAME} for industries across Ludhiana, Punjab, and North India. Gears, shafts, bearings, crankshafts — every job delivered with certified hardness reports.`}
            className="text-center"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-black uppercase italic tracking-tight text-sm border transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border text-muted-foreground hover:border-primary/60 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Work Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {filtered.map((item) => {
              const image = PlaceHolderImages.find(img => img.id === item.id);
              return (
                <motion.div
                  key={item.id + item.title}
                  variants={fadeInUp}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_24px_rgba(255,0,0,0.08)] transition-all group"
                >
                  {/* Image */}
                  <div className="relative h-52 w-full overflow-hidden">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={item.title}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest">
                      {item.category}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="font-black uppercase italic tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.desc}</p>

                    <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                      <div className="bg-secondary/50 rounded-lg p-2">
                        <span className="text-muted-foreground block">Material</span>
                        <span className="font-bold text-foreground">{item.material}</span>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-2">
                        <span className="text-muted-foreground block">Hardness</span>
                        <span className="font-bold text-primary">{item.hardness}</span>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground italic">📍 {item.client}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA */}
          <div className="text-center pb-24 border-t border-border pt-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-4">
              Need Similar <span className="text-primary">Job Work?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Share your component details and get a competitive quote within 24 hours. We serve industries across Punjab and North India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-quote"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-black uppercase italic tracking-tight hover:opacity-90 transition-opacity"
              >
                Get a Rate <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-xl font-black uppercase italic tracking-tight hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Send Enquiry
              </Link>
            </div>
          </div>
        </div>
        <CTASection />
      </div>
    </>
  );
}
