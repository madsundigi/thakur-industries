import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceFAQ } from '@/components/shared/ServiceFAQ';
import { CheckCircle2, ArrowRight, Tractor, ShieldCheck, Zap, Gauge } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Agricultural Equipment Induction Hardening Punjab | Thakur Industries',
  description: 'Induction hardening for agricultural equipment — tractor shafts, rotavator gears, PTO shafts, axles & blades in Punjab. Serving Ludhiana tractor OEMs. Hardness 52–58 HRC. Call +91 7900000776.',
  alternates: { canonical: '/industries/agricultural' },
  keywords: [
    'agricultural equipment hardening Punjab',
    'tractor parts induction hardening',
    'rotavator gear hardening Punjab',
    'PTO shaft hardening Ludhiana',
    'agricultural implement heat treatment',
    'farm equipment hardening Punjab',
    'tractor shaft hardening Ludhiana',
  ],
  openGraph: {
    title: 'Agricultural Equipment Induction Hardening Punjab | Thakur Industries',
    description: 'Induction hardening for tractor shafts, rotavator gears, PTO shafts in Punjab. OEM supply chain ready.',
    url: `${SITE_URL}/industries/agricultural`,
  },
};

const components = [
  { name: 'PTO Shafts (Power Take-Off)', desc: 'High-torque induction hardening for tractor PTO shafts. Handles continuous field loads without fatigue failure.', hardness: '52–56 HRC', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
  { name: 'Rotavator Gears & Blades', desc: 'Gear tooth hardening and blade surface hardening for rotavators — critical for abrasion resistance in soil.', hardness: '55–60 HRC', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
  { name: 'Rear Axle Shafts', desc: 'Tractor rear axle shafts — full-length surface hardening for high torque and field impact resistance.', hardness: '54–58 HRC', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
  { name: 'Clutch & Gear Hub Components', desc: 'Selective hardening on clutch hubs, spline shafts, and gear engagement zones for tractor gearboxes.', hardness: '55–60 HRC', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
  { name: 'Cultivator & Disc Harrow Parts', desc: 'Heat treatment for disc blades, cultivator tines, and spring-loaded soil-engaging components.', hardness: '52–56 HRC', href: '/surface-hardening' },
  { name: 'Seeder & Planter Shafts', desc: 'Surface hardening for seed drill shafts and planter drive components — wear resistance in abrasive soil conditions.', hardness: '50–55 HRC', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Field-Proven Durability',
    desc: 'Punjab\'s agriculture demands components that survive rocky soils, high torque loads, and continuous seasons. Our hardening extends part life 3–5x over untreated components.',
  },
  {
    icon: Gauge,
    title: 'Abrasion Resistance for Soil Contact Parts',
    desc: 'Soil-engaging parts like blades, tines, and discs are hardened to resist abrasion from Punjab\'s diverse soil types — sandy loam to hard clay.',
  },
  {
    icon: Tractor,
    title: 'Tractor OEM Supply Chain Ready',
    desc: 'We supply to tractor OEMs and tier-1 agricultural parts manufacturers across Punjab — with documented quality reports matching their incoming inspection requirements.',
  },
  {
    icon: Zap,
    title: 'High-Volume Seasonal Batches',
    desc: 'Punjab\'s agricultural equipment demand peaks before sowing seasons. We handle high-volume urgent batches to meet OEM production schedules.',
  },
];

export default function AgriculturalPage() {
  const agriImage = PlaceHolderImages.find(img => img.id === 'industryAgriculture');
  const agriParts = PlaceHolderImages.find(img => img.id === 'blogAgricultural');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Agricultural Equipment Induction Hardening',
    serviceType: 'Heat Treatment for Agricultural Components',
    provider: { '@type': 'LocalBusiness', name: SITE_NAME, telephone: SITE_PHONE_NUMBER, url: SITE_URL },
    areaServed: [{ '@type': 'State', name: 'Punjab' }, { '@type': 'City', name: 'Ludhiana' }],
    description: 'Induction hardening for tractor PTO shafts, rotavator gears, axles, and agricultural implements in Punjab.',
  };

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Industries', href: '/industries' }, { name: 'Agricultural', href: '/industries/agricultural' }]} />
      <JsonLd data={schema} />

      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Agricultural Equipment"
            highlightedWord="Hardening"
            description={`Punjab is India's food bowl — and its agricultural machinery needs components that last. ${SITE_NAME} provides induction hardening for tractor parts, rotavators, PTO shafts, and farm implements across Punjab.`}
            className="text-center"
          />

          {/* Hero section */}
          <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-border">
            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-primary/20 shadow-[0_0_40px_rgba(255,0,0,0.1)]">
              {agriImage && (
                <Image src={agriImage.imageUrl} alt="Agricultural equipment induction hardening Punjab" fill className="object-cover" data-ai-hint={agriImage.imageHint} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-primary text-primary-foreground text-sm font-black uppercase px-4 py-2 rounded-full italic tracking-wide">Punjab's #1 Farm Parts Hardening</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Tractor className="h-8 w-8 text-primary" />
                <span className="text-primary font-black uppercase italic tracking-widest text-sm">Agricultural Industry</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">
                Built for <span className="text-primary">Punjab's Fields</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Punjab is India's largest tractor and agricultural equipment producing state. Ludhiana alone houses over 200 tractor parts manufacturers. These components face some of the harshest operating conditions — high torque, abrasive soils, continuous seasonal load.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Thakur Industries has specialized in agricultural component hardening for 25+ years — delivering PTO shafts, rotavator gears, axles, and blades that outlast untreated parts by 3–5 seasons.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '52–60 HRC', label: 'Target Hardness' },
                  { value: '1–5mm', label: 'Case Depth' },
                  { value: '500+', label: 'Farm OEM Clients' },
                  { value: '25+ Yrs', label: 'Agri Expertise' },
                ].map(stat => (
                  <div key={stat.label} className="p-4 bg-secondary/30 rounded-xl border border-border text-center">
                    <p className="text-2xl font-black text-primary italic">{stat.value}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Components */}
          <section className="py-24">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-4 text-center">
              Agricultural Parts <span className="text-primary">We Harden</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Every agricultural component is treated to your exact hardness and case depth specification, with batch test reports.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((comp) => (
                <Link key={comp.name} href={comp.href} className="group">
                  <div className="p-6 bg-secondary/20 border border-border rounded-2xl hover:border-primary/50 transition-all h-full">
                    <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-black uppercase italic tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">{comp.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{comp.desc}</p>
                    <span className="text-xs font-black text-primary bg-primary/10 px-3 py-1 rounded-full">{comp.hardness}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Why choose us */}
          <section className="py-24 border-t border-border">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Why Punjab's <span className="text-primary">Agri OEMs Trust Us</span>
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

          {/* Locations we serve for agri */}
          <section className="py-16 border-t border-border text-center">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-6">
              Agricultural Clusters <span className="text-primary">We Serve</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Pickup and delivery available to all major tractor and agri parts manufacturing areas in Punjab:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Ludhiana', 'Jalandhar', 'Hoshiarpur', 'Nawanshahr', 'Phagwara', 'Patiala', 'Sangrur', 'Mandi Gobindgarh', 'Khanna', 'Malerkotla', 'Jagraon'].map(city => (
                <span key={city} className="px-4 py-2 bg-secondary/40 border border-border rounded-full text-sm font-bold text-foreground">{city}</span>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <ServiceFAQ
            heading="Agricultural Hardening FAQs"
            faqItems={[
              { question: 'Can you harden PTO shafts for tractors in Punjab?', answer: 'Yes. Tractor PTO shafts in EN8 (C45) or EN19 steel typically achieve 52–56 HRC with 2–4mm case depth after induction hardening. We handle high-volume monthly batches for Punjab tractor OEMs with pickup from your facility.' },
              { question: 'Do you harden rotavator gears and blades?', answer: 'Yes. Rotavator gears are hardened tooth-by-tooth to 55–60 HRC. Rotavator blades get surface hardening for abrasion resistance in soil contact — significantly extending field life by 3–5 seasons.' },
              { question: 'What is your capacity for pre-season agricultural batches?', answer: 'We handle high-volume seasonal batches to meet pre-sowing and pre-harvest demand peaks. Monthly production contracts with scheduled pickup from your facility in Ludhiana, Hoshiarpur, or Nawanshahr are available.' },
              { question: 'Which Punjab districts do you cover for agricultural parts pickup?', answer: 'We serve tractor and agricultural parts manufacturers across Ludhiana, Jalandhar, Hoshiarpur, Nawanshahr, Phagwara, Sangrur, Mandi Gobindgarh, Khanna, Malerkotla, and all major Punjab industrial clusters.' },
              { question: 'What tractor axle shaft hardness do you achieve?', answer: 'Tractor rear axle shafts in EN19 or EN24 typically achieve 54–58 HRC with 3–5mm case depth. This provides the combination of surface wear resistance and core toughness required for field torque loads.' },
            ]}
          />

          {/* CTA */}
          <section className="py-16 border-t border-border text-center">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4">
              Agri Parts Job Work <span className="text-primary">Enquiry</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Tell us your component, quantity, and required hardness — get a competitive rate in 24 hours.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-quote" className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-black uppercase italic tracking-tight hover:opacity-90 transition-opacity">
                Get a Rate <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-xl font-black uppercase italic tracking-tight hover:bg-primary hover:text-primary-foreground transition-all">
                Send Enquiry
              </Link>
            </div>
          </section>
        </div>
        <CTASection />
      </div>
    </>
  );
}
