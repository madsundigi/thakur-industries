
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Cpu,
  Phone,
  MessageSquare,
  Clock,
  IndianRupee,
  Award,
  Star,
  FileText,
  Settings,
  Search,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';

const TITLE = 'Surface Hardening Service Provider in Punjab | Thakur Industries';
const DESCRIPTION =
  'Trusted surface hardening service provider in Punjab — induction & case hardening job work for shafts, gears & alloy parts at 58–62 HRC. Get a free quote today.';
const PAGE_URL = `${SITE_URL}/surface-hardening`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I need surface hardening job work in Punjab. Please find my component drawing attached.');

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'surface hardening service provider Punjab',
    'surface hardening Punjab',
    'surface hardening Ludhiana',
    'induction surface hardening service',
    'surface hardening job work',
    'case hardening Punjab',
    'surface hardening shafts gears',
    'heat treatment Ludhiana Punjab',
  ],
  alternates: { canonical: '/surface-hardening' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

// Single source of truth for the visible FAQ accordion AND the FAQPage schema.
const FAQ_ITEMS = [
  {
    q: 'What does a surface hardening service provider in Punjab do?',
    a: 'A surface hardening service provider hardens only the outer surface of steel and alloy components while keeping the core tough and ductile. At Thakur Industries we offer induction surface hardening and case hardening job work across Punjab for shafts, gears, axles, pins and rollers, raising surface hardness to 58–62 HRC for superior wear and fatigue resistance.',
  },
  {
    q: 'How much does surface hardening cost in Punjab?',
    a: 'Surface hardening job-work pricing depends on component weight, size, required case depth, steel grade and order quantity. We price most jobs on a per-kilogram or per-piece basis with attractive rates for bulk OEM orders. Send us your drawing and quantity on WhatsApp for an exact quotation within 24 hours.',
  },
  {
    q: 'What is the turnaround time for surface hardening job work?',
    a: 'Standard turnaround is 2–4 working days after we receive the components and an approved specification. Urgent and same-week jobs can be arranged for regular clients, and on-site hardening for very large components is scheduled separately.',
  },
  {
    q: 'Which surface hardening method is best — induction or case hardening?',
    a: 'Induction surface hardening is faster and creates far less distortion because only the target zone is heated. It suits most shafts, gears and pins. Case hardening (carburizing) adds carbon to a low-carbon surface and is preferred for thin, deep, uniform cases on intricate parts. We advise on the best route for each application.',
  },
  {
    q: 'What hardness can surface hardening achieve?',
    a: '58–62 HRC is typical on the hardened surface, with controlled case depth from 0.8 mm up to 3.5 mm depending on the component and load requirements. EN24 and case-hardening alloys achieve the upper end of this range.',
  },
  {
    q: 'Which materials and components do you surface harden?',
    a: 'We harden EN8, EN19, EN24, 4140, 4340 and tool steels, treating shafts, gears, axles, rollers, pins and spindles. A carbon content of 0.35–0.60% gives the best induction-hardening response; lower-carbon parts are routed to case hardening.',
  },
  {
    q: 'Do you serve areas outside Ludhiana in Punjab?',
    a: 'Yes. As a surface hardening service provider in Punjab we serve Ludhiana, Mandi Gobindgarh, Jalandhar, Khanna, Patiala and nearby industrial clusters in Haryana and Delhi NCR, with on-site hardening available for large components.',
  },
];

export default function SurfaceHardeningPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'serviceSurfaceHardening');
  const crossSectionImage = PlaceHolderImages.find((img) => img.id === 'serviceCrossSection');

  const processSteps = [
    { title: 'Induction Heating', description: 'Targeted heating of the component surface using electromagnetic coils.' },
    { title: 'Quenching', description: 'Immediate cooling using polymer or water-based quenching to form a hard surface layer.' },
    { title: 'Tempering', description: 'Optional reheating for enhanced toughness and reduced brittleness.' },
  ];

  const benefits = [
    { icon: ShieldCheck, title: 'Increases Wear Resistance', description: 'Creates a hard, durable surface that withstands abrasion and friction.' },
    { icon: Cpu, title: 'Maintains Tough Core', description: 'The core remains tough and less brittle, preventing fractures under impact.' },
    { icon: Zap, title: 'Localized Hardening', description: 'Hardens only specific areas where needed, reducing distortion and saving energy.' },
    { icon: CheckCircle, title: 'Reduces Distortion', description: 'Minimal distortion compared to through-hardening methods, preserving component geometry.' },
  ];

  const materials = ['EN8', 'EN19', 'EN24', '4140', '4340', 'Tool Steel'];
  const components = ['Shafts', 'Gears', 'Axles', 'Rollers', 'Pins', 'Spindles'];
  const applications = [
    { title: 'Shaft Hardening', imageId: 'appShaftHardening' },
    { title: 'Gear Tooth Hardening', imageId: 'appGearHardening' },
    { title: 'Bearing Journal Hardening', imageId: 'appBearingHardening' },
  ];

  // Service schema — enriched with serviceType, offers, aggregateRating & wider areaServed
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Surface Hardening Service Provider in Punjab',
    serviceType: 'Surface Hardening',
    url: `${PAGE_URL}/`,
    description:
      'Surface hardening job work in Punjab — induction and case hardening for steel and alloy components at 58–62 HRC with controlled case depth and minimal distortion. Job work for shafts, gears, axles, pins and rollers across Ludhiana and Punjab.',
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      telephone: SITE_PHONE_NUMBER,
      url: SITE_URL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1486/5, Street Number 1, Harkrishan Nagar, Shimlapuri',
        addressLocality: 'Ludhiana',
        addressRegion: 'Punjab',
        postalCode: '141003',
        addressCountry: 'IN',
      },
    },
    areaServed: ['Ludhiana', 'Mandi Gobindgarh', 'Jalandhar', 'Khanna', 'Patiala', 'Ambala', 'Chandigarh', 'Delhi NCR'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Surface hardening job work priced per kg or per piece. Request a custom quotation.',
      url: `${SITE_URL}/contact`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      reviewCount: '127',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Services', href: '/services' },
          { name: 'Surface Hardening', href: '/surface-hardening' },
        ]}
      />

      <div className="bg-background">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-secondary text-foreground text-center">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="Surface hardening service provider in Punjab — induction surface hardening of a steel component at Thakur Industries Ludhiana"
              data-ai-hint={heroImage.imageHint}
              fill
              sizes="100vw"
              className="object-cover opacity-20"
              priority
            />
          )}
          <div className="container mx-auto px-4 md:px-6 z-10 relative">
            {/* Visible breadcrumb trail (matches BreadcrumbList schema) */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-primary">Surface Hardening</li>
              </ol>
            </nav>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Surface Hardening Service Provider in Punjab
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              Precision surface hardening and induction heating job work for steel, alloy, and industrial components across Punjab.
            </p>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Award, label: '58–62 HRC' },
                { icon: ShieldCheck, label: 'ISO Process' },
                { icon: Clock, label: '2–4 Day Turnaround' },
                { icon: Star, label: '4.8★ · 127 Reviews' },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-tight px-3 py-1.5 rounded-full"
                >
                  <badge.icon className="h-3.5 w-3.5" />
                  {badge.label}
                </span>
              ))}
            </div>

            {/* CTA cluster — Call, WhatsApp, Get Quote */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <a href={`tel:${SITE_PHONE_NUMBER}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Call for a Quote
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white border-none">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" /> Send Drawing
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact" className="flex items-center gap-2">
                  Get a Free Quote <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Intro — primary keyword in the first 100 words */}
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Searching for a dependable <strong>surface hardening service provider in Punjab</strong>? At{' '}
              <strong>{SITE_NAME}</strong>, our <strong>induction surface hardening</strong> and case hardening job work raises the
              outer surface of steel and alloy components to 58–62 HRC while keeping the core tough and ductile. From our Ludhiana
              workshop we serve automotive, tractor and industrial OEM clusters across <strong>surface hardening Punjab</strong>{' '}
              demand — including <strong>surface hardening Ludhiana</strong>, Mandi Gobindgarh, Jalandhar, Khanna and Patiala — with
              consistent, traceable, high-accuracy hardening for shafts, gears, axles, pins and rollers.
            </p>
          </div>
        </section>

        {/* What is Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">What Is Surface Hardening?</h2>
              <p className="text-muted-foreground text-lg">Surface hardening is a heat treatment process designed to strengthen only the outer surface of steel or alloy components while retaining a tough, ductile core. This process improves wear resistance, fatigue strength, and longevity without affecting internal properties — making it ideal for shafts, gears, spindles, and pins used in heavy-duty machinery.</p>
            </div>
            {crossSectionImage && (
              <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={crossSectionImage.imageUrl}
                  alt="Cross-section diagram showing a hardened surface layer over a soft tough core after surface hardening"
                  data-ai-hint={crossSectionImage.imageHint}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </section>

        {/* Surface Hardening Methods — induction & case hardening with internal links */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container mx-auto px-4 md:px-6">
            <PageHeader
              title="Surface Hardening Methods We Offer"
              description="As a full-service surface hardening provider in Punjab, we choose the right method for your component, load and geometry."
              className="text-center mb-12"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-card p-8 rounded-lg border">
                <Zap className="h-10 w-10 text-primary mb-5" />
                <h3 className="text-2xl font-bold mb-3">Induction Surface Hardening</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  High-frequency electromagnetic coils heat only the target surface to 900–950 °C before rapid quenching, producing
                  a hard 58–62 HRC case with minimal distortion. It is fast, energy-efficient and ideal for shafts, gear teeth and
                  bearing journals. Explore our dedicated{' '}
                  <Link href="/induction-heat-treatment" className="text-primary font-semibold hover:underline">
                    induction hardening services
                  </Link>{' '}
                  for full process detail.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Localized, repeatable hardness</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Low distortion, less post-grinding</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Best for medium-carbon steels</li>
                </ul>
              </div>
              <div className="bg-card p-8 rounded-lg border">
                <ShieldCheck className="h-10 w-10 text-primary mb-5" />
                <h3 className="text-2xl font-bold mb-3">Case Hardening (Carburizing)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Case hardening diffuses carbon into a low-carbon steel surface, then hardens it to create a thin, uniform, deep
                  wear-resistant case over a soft core — ideal for intricate parts and fine-pitch gears. Learn more on our{' '}
                  <Link href="/case-hardening-heat-treatment" className="text-primary font-semibold hover:underline">
                    case hardening job work
                  </Link>{' '}
                  page.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Uniform case on complex shapes</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Excellent for low-carbon alloys</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Deep, controllable case depth</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <PageHeader
              title="Precision Heat Treatment for Shafts, Gears, & Components"
              description="Our localized surface hardening process ensures precise depth control, uniform hardness, and minimal distortion — essential for accuracy-driven components."
              className="text-center mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.title} className="bg-card p-6 rounded-lg border text-center">
                  <div className="text-5xl font-bold text-primary/20 mb-3">0{index + 1}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="link">
                <Link href="/quenching-process">Learn About Our Quenching Process <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Specifications Table */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <PageHeader
              title="Surface Hardening Specifications"
              description="Typical metallurgical and process parameters for our surface hardening job work in Punjab."
              className="text-center mb-12"
            />
            <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left">
                <tbody className="text-sm md:text-base">
                  {[
                    ['Surface Hardness', '58–62 HRC (hardened surface)'],
                    ['Case Depth', '0.8 mm – 3.5 mm (controlled to spec)'],
                    ['Methods', 'Induction surface hardening, case hardening'],
                    ['Component Types', 'Shafts, gears, axles, rollers, pins, spindles'],
                    ['Steel Grades', 'EN8, EN19, EN24, 4140, 4340, tool steel'],
                    ['Heating Temperature', '900–950 °C (induction)'],
                    ['Quench Medium', 'Polymer / water-based, controlled'],
                    ['Turnaround', '2–4 working days (standard)'],
                    ['Testing', 'HRC verification, case-depth check, dimensional inspection'],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? 'bg-secondary/30' : 'bg-card'}>
                      <th scope="row" className="py-4 px-5 font-bold text-foreground align-top w-1/2">
                        {k}
                      </th>
                      <td className="py-4 px-5 text-muted-foreground">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <PageHeader
              title="Why Choose Surface Hardening for Steel Components?"
              description="Surface hardening is one of the most effective ways to enhance component life without compromising flexibility and strength."
              className="text-center mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="text-center">
                  <CardHeader>
                    <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Materials and Components Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <PageHeader
              title="Compatible Components & Steel Grades"
              description="We provide surface hardening job work for a wide range of components and materials, serving both OEMs and local manufacturers in Punjab."
              className="text-center mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-center mb-6">Common Components</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {components.map((item) => (
                    <div key={item} className="bg-card text-card-foreground border rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-center mb-6">Material Grades</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {materials.map((item) => (
                    <div key={item} className="bg-card text-card-foreground border rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/induction-heat-treatment">Explore Induction Hardening Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Localized Hardening Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <PageHeader
              title="Localized Surface Hardening for Precision Applications"
              description="Our localized surface hardening technology uses high-frequency induction heating to target only critical zones, ensuring optimal hardness where stress is highest. This method reduces energy consumption, improves metallurgical consistency, and allows flexibility in treating different geometries."
              className="text-center mb-12"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app) => {
                const image = PlaceHolderImages.find((img) => img.id === app.imageId);
                return (
                  <Card key={app.title} className="overflow-hidden">
                    {image && (
                      <div className="relative h-56 w-full">
                        <Image
                          src={image.imageUrl}
                          alt={`${app.title} — surface hardening job work by Thakur Industries in Punjab`}
                          data-ai-hint={image.imageHint}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{app.title}</CardTitle>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <Link href="/induction-heat-treatment/induction-hardening-shafts-ludhiana">Shaft Hardening</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/induction-heat-treatment/induction-hardening-gears-ludhiana">Gear Hardening</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/induction-heat-treatment/en24-steel-hardening">EN24 Steel Hardening</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing & Turnaround — captures mid-funnel commercial keywords */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <PageHeader
              title="Surface Hardening Pricing & Turnaround"
              description="We offer competitive surface hardening rates for both prototype batches and bulk OEM production. Final pricing depends on weight, size, case depth, steel grade and quantity — share your drawing for an exact quote within 24 hours."
              className="text-center mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk and repeat OEM orders.' },
                { icon: FileText, title: 'Minimum Order', desc: 'No rigid minimum — single trial parts to multi-thousand-piece lots accepted.' },
                { icon: Clock, title: 'Turnaround', desc: 'Standard 2–4 working days; urgent same-week jobs for regular clients.' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center p-8 bg-card rounded-2xl border border-border">
                  <item.icon className="h-10 w-10 text-primary mb-5" />
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white border-none">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" /> Get Your Surface Hardening Quote
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us — trust / E-E-A-T */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <PageHeader
              title={`Why OEMs Trust ${SITE_NAME}`}
              description="A surface hardening service provider in Punjab built on repeatable quality, traceability and fast delivery."
              className="text-center mb-12"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Award, title: 'Consistent 58–62 HRC', desc: 'Repeatable hardness on every component, batch after batch.' },
                { icon: ShieldCheck, title: 'ISO-Grade Process', desc: 'Documented, traceable hardening for OEM supply chains.' },
                { icon: Search, title: 'In-House Testing', desc: 'HRC, case-depth and dimensional checks before dispatch.' },
                { icon: Clock, title: 'Fast Turnaround', desc: '2–4 day standard delivery keeps your line running.' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <PageHeader title="Related Services" description="" className="text-center mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Shaft Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', icon: Settings, label: 'Transmission Shafts' },
                { title: 'Induction Hardening Guide', href: '/induction-heat-treatment', icon: Cpu, label: 'Main Service Hub' },
                { title: 'Case Hardening Job Work', href: '/case-hardening-heat-treatment', icon: ShieldCheck, label: 'Carburizing Process' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="group">
                  <div className="p-8 bg-card border border-border rounded-2xl transition-all hover:border-primary/50 hover:-translate-y-1 flex flex-col items-center text-center shadow-sm h-full">
                    <link.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{link.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2">{link.label}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — synced with FAQPage schema (server-rendered <details>, no hooks) */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <PageHeader title="Surface Hardening FAQs" description="" className="text-center mb-12" />
            <div className="space-y-4">
              {FAQ_ITEMS.map((item) => (
                <details key={item.q} className="group border rounded-2xl bg-secondary/30 px-6 md:px-8 py-2 transition-all hover:border-primary/20">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-base md:text-lg py-4 hover:text-primary">
                    {item.q}
                    <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="text-muted-foreground pb-5 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Authority outbound reference + freshness signal */}
        <div className="container mx-auto px-4 md:px-6 pb-12 text-center text-xs text-muted-foreground">
          <p className="mb-2">
            Learn more about the metallurgy of surface hardening from the{' '}
            <a
              href="https://www.asminternational.org/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-primary hover:underline font-bold"
            >
              ASM International
            </a>{' '}
            heat-treatment resources.
          </p>
          <p className="uppercase tracking-widest">Last updated: June 2026 · {SITE_NAME}, Ludhiana, Punjab</p>
        </div>

        <Testimonials />
        <CTASection />

        {/* Mobile sticky CTA — hidden on md+ (plain anchors + CSS, no hooks) */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur border-t border-border px-4 py-3 flex gap-3">
          <a href={`tel:${SITE_PHONE_NUMBER}`} className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold uppercase text-xs py-3 rounded-lg">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold uppercase text-xs py-3 rounded-lg">
            <MessageSquare className="h-4 w-4" /> WhatsApp
          </a>
          <a href="/contact" className="flex-1 flex items-center justify-center gap-2 bg-secondary text-foreground font-bold uppercase text-xs py-3 rounded-lg border border-border">
            Quote
          </a>
        </div>
      </div>
    </>
  );
}
