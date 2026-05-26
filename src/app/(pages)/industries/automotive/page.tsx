import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceFAQ } from '@/components/shared/ServiceFAQ';
import { CheckCircle2, ArrowRight, Car, Gauge, ShieldCheck, Zap } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Automotive Heat Treatment & Induction Hardening Punjab | Thakur Industries',
  description: 'Precision induction hardening for automotive gears, shafts, crankshafts & axles in Punjab. OEM-grade quality, Rockwell hardness reports. Serving Ludhiana auto parts industry. Call +91 7900000776.',
  alternates: { canonical: '/industries/automotive' },
  keywords: [
    'automotive heat treatment Punjab',
    'automotive induction hardening Ludhiana',
    'gear shaft hardening OEM Punjab',
    'crankshaft induction hardening',
    'automotive axle hardening Punjab',
    'automotive parts heat treatment Ludhiana',
  ],
  openGraph: {
    title: 'Automotive Heat Treatment & Induction Hardening Punjab | Thakur Industries',
    description: 'OEM-grade induction hardening for automotive gears, shafts, crankshafts in Punjab.',
    url: `${SITE_URL}/industries/automotive`,
  },
};

const components = [
  { name: 'Transmission Gears & Pinions', desc: 'Tooth-by-tooth induction hardening for spur, helical, and bevel gears. Consistent case depth 1–2mm with zero distortion.', hardness: '58–62 HRC', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
  { name: 'Drive Shafts & Propeller Shafts', desc: 'Surface hardening for drive shafts, ensuring high fatigue strength under torsional loads. EN19 and EN24 grades.', hardness: '55–60 HRC', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
  { name: 'Crankshafts & Camshafts', desc: 'Journal and pin hardening on diesel/petrol engine crankshafts. Selective hardening without affecting core toughness.', hardness: '55–58 HRC', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
  { name: 'Rear & Front Axles', desc: 'Full-length or zone-specific hardening for front and rear axles in trucks, tractors, and passenger vehicles.', hardness: '55–60 HRC', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
  { name: 'Bearing Journals & Races', desc: 'Wheel hub bearings, clutch bearings, and roller bearing races — precision surface hardening for rotational stability.', hardness: '60–64 HRC', href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana' },
  { name: 'Differential & Gearbox Parts', desc: 'Crown wheels, bevel pinions, and gearbox shafts for commercial vehicles and passenger cars.', hardness: '58–62 HRC', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
];

const benefits = [
  { icon: ShieldCheck, title: 'OEM-Grade Consistency', desc: 'Tight HRC tolerance (±2 HRC) with Rockwell test reports for every batch. Suitable for tier-1 and tier-2 OEM supply chains.' },
  { icon: Gauge, title: 'Zero Distortion Technology', desc: 'Our CNC-controlled induction systems and precision quenching keep dimensional distortion under 0.05mm — critical for mating parts.' },
  { icon: Zap, title: 'Fast Batch Turnaround', desc: '2–4 day standard turnaround. Monthly production contracts available for regular automotive component manufacturers.' },
  { icon: CheckCircle2, title: 'Punjab-Wide Pickup & Delivery', desc: 'We collect components from your factory in Ludhiana, Jalandhar, Phagwara, Mandi Gobindgarh, or anywhere in Punjab.' },
];

export default function AutomotivePage() {
  const automotiveImage = PlaceHolderImages.find(img => img.id === 'industryAutomotive');
  const gearImage = PlaceHolderImages.find(img => img.id === 'appGearHardening');
  const shaftImage = PlaceHolderImages.find(img => img.id === 'appShaftHardening');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Automotive Induction Hardening',
    serviceType: 'Heat Treatment for Automotive Parts',
    provider: { '@type': 'LocalBusiness', name: SITE_NAME, telephone: SITE_PHONE_NUMBER, url: SITE_URL },
    areaServed: [{ '@type': 'State', name: 'Punjab' }, { '@type': 'City', name: 'Ludhiana' }],
    description: 'Precision induction hardening for automotive gears, shafts, crankshafts, axles, and bearings in Punjab. OEM-grade quality with Rockwell hardness reports.',
  };

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Industries', href: '/industries' }, { name: 'Automotive', href: '/industries/automotive' }]} />
      <JsonLd data={schema} />

      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Automotive Heat Treatment"
            highlightedWord="Punjab"
            description={`${SITE_NAME} provides OEM-grade induction hardening for Punjab's automotive components — gears, shafts, crankshafts, and axles — with certified hardness reports and fast turnaround.`}
            className="text-center"
          />

          {/* Hero image + intro */}
          <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-border">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Car className="h-8 w-8 text-primary" />
                <span className="text-primary font-black uppercase italic tracking-widest text-sm">Automotive Industry</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">
                Powering Punjab's <span className="text-primary">Auto Parts</span> Industry
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ludhiana is North India's largest auto parts manufacturing hub — producing components for Tata, Mahindra, Hero, Bajaj, and hundreds of tier-1 suppliers. Thakur Industries has been the trusted heat treatment partner for this ecosystem for over two decades.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From transmission gears to crankshaft journals, we deliver induction-hardened components with consistent hardness, minimal distortion, and fully documented quality reports.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '55–62 HRC', label: 'Hardness Range' },
                  { value: '0.5–6mm', label: 'Case Depth' },
                  { value: '< 0.05mm', label: 'Distortion' },
                  { value: '2–4 Days', label: 'Turnaround' },
                ].map(stat => (
                  <div key={stat.label} className="p-4 bg-secondary/30 rounded-xl border border-border text-center">
                    <p className="text-2xl font-black text-primary italic">{stat.value}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[420px] rounded-3xl overflow-hidden border border-primary/20 shadow-[0_0_40px_rgba(255,0,0,0.12)]">
              {automotiveImage && (
                <Image src={automotiveImage.imageUrl} alt="Automotive heat treatment Punjab" fill className="object-cover" data-ai-hint={automotiveImage.imageHint} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </section>

          {/* Components Grid */}
          <section className="py-24">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-4 text-center">
              Automotive Components <span className="text-primary">We Harden</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">All components are processed per your material grade and hardness specification, with test reports included.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((comp) => (
                <Link key={comp.name} href={comp.href} className="group">
                  <div className="p-6 bg-secondary/20 border border-border rounded-2xl hover:border-primary/50 hover:shadow-[0_0_20px_rgba(255,0,0,0.07)] transition-all h-full">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-black uppercase italic tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">{comp.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{comp.desc}</p>
                    <span className="text-xs font-black text-primary bg-primary/10 px-3 py-1 rounded-full">{comp.hardness}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Why choose us for automotive */}
          <section className="py-24 border-t border-border">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Why Automotive OEMs <span className="text-primary">Choose Us</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-6 p-8 bg-secondary/20 border border-border rounded-2xl">
                  <b.icon className="h-10 w-10 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-black uppercase italic tracking-tight text-foreground mb-2">{b.title}</h3>
                    <p className="text-muted-foreground">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Work examples */}
          <section className="py-24 border-t border-border">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Sample <span className="text-primary">Work</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { img: gearImage, title: 'Gear Tooth Hardening', desc: 'Automotive transmission gears — 60 HRC, 1.5mm case depth, zero distortion. EN24 steel.' },
                { img: shaftImage, title: 'Drive Shaft Hardening', desc: 'CV joint shafts and propeller shafts — 58 HRC, 3mm case depth. EN19 steel. Batch of 200 pcs.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl overflow-hidden border border-border">
                  <div className="relative h-56">
                    {item.img && <Image src={item.img.imageUrl} alt={item.title} fill className="object-cover" data-ai-hint={item.img.imageHint} />}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-white font-black uppercase italic tracking-tight">{item.title}</h3>
                  </div>
                  <div className="p-5 bg-secondary/20">
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/our-work" className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-xl font-black uppercase italic tracking-tight hover:bg-primary hover:text-primary-foreground transition-all">
                View Full Portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <ServiceFAQ
            heading="Automotive Heat Treatment FAQs"
            faqItems={[
              { question: 'What automotive components do you harden at Thakur Industries?', answer: 'We harden transmission gears, drive shafts, crankshafts, rear axles, differential gears, bearing races, and camshafts for automotive OEMs and Tier-1 suppliers across Punjab. All jobs come with Rockwell hardness test reports.' },
              { question: 'What hardness is achieved on automotive gears and shafts?', answer: 'Transmission gears typically achieve 58–62 HRC with 1.0–2.0mm case depth. Drive shafts achieve 55–60 HRC with 2–4mm case depth. Crankshaft journals achieve 55–58 HRC. All within ±2 HRC tolerance.' },
              { question: 'Do you supply to Tier-1 automotive OEMs in Punjab?', answer: 'Yes. We supply to automotive Tier-1 and Tier-2 manufacturers in Ludhiana, Phagwara, and Jalandhar. Our quality documentation — Rockwell reports, process parameter sheets — meets OEM incoming inspection requirements.' },
              { question: 'What is the turnaround time for automotive production batches?', answer: 'Standard 2–4 working days. For monthly production contracts, we schedule dedicated processing slots aligned to your production schedule. High-volume OEM batches of 500+ pieces are handled regularly.' },
              { question: 'Can you harden EN19, EN24, or 4140 steel automotive parts?', answer: 'Yes. EN19 (4140), EN24 (4340), and 20MnCr5 are the most common automotive gear and shaft steels we process. Each material grade has specific heating and quench parameters dialled in for consistent results.' },
            ]}
          />

          {/* CTA */}
          <section className="py-16 border-t border-border text-center">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4">
              Ready to Place an <span className="text-primary">Automotive Order?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Share your component drawing or specs and get a competitive rate within 24 hours. Monthly production batches welcome.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-quote" className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-black uppercase italic tracking-tight hover:opacity-90 transition-opacity">
                Get a Rate <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-xl font-black uppercase italic tracking-tight hover:bg-primary hover:text-primary-foreground transition-all">
                Contact Us
              </Link>
            </div>
          </section>
        </div>
        <CTASection />
      </div>
    </>
  );
}
