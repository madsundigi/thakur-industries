
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ChevronRight,
  CheckCircle,
  ShieldCheck,
  Thermometer,
  Cpu,
  Gem,
  Phone,
  MessageSquare,
  Clock,
  IndianRupee,
  FileText,
  Award,
  Star,
} from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';
import { ServiceFAQ } from '@/components/shared/ServiceFAQ';

const TITLE = 'Case Hardening Services Ludhiana | 58–62 HRC | Thakur Industries';
const DESCRIPTION =
  'Precision case hardening (carburizing) job work in Ludhiana, Punjab — 58–62 HRC surface, 0.5–1.5mm case depth on 20MnCr5, 16MnCr5 & EN8. ISO process, hardness reports, fast turnaround. Get a free quote today.';
const PAGE_PATH = '/case-hardening-heat-treatment';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I need case hardening job work in Ludhiana. Please find my component drawing attached.');

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'case hardening services Ludhiana',
    'case hardening job work Punjab',
    'carburizing services Ludhiana',
    '20MnCr5 case hardening',
    '16MnCr5 carburizing',
    'EN8 case hardening',
    'gear case hardening Ludhiana',
    'surface hardening steel components',
    'case depth hardening Punjab',
    'heat treatment job work Ludhiana',
  ],
  alternates: { canonical: PAGE_PATH },
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

// Service schema — enriched with serviceType, offers, aggregateRating & full provider address.
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Case Hardening Services in Ludhiana',
  serviceType: 'Case Hardening (Carburizing)',
  url: `${PAGE_URL}/`,
  description:
    'Precision case hardening (carburizing) job work for steel components in Ludhiana, Punjab — 58–62 HRC surface, 0.5–1.5mm controlled case depth on 20MnCr5, 16MnCr5, EN8 and alloy steels with a tough, ductile core.',
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
    description: 'Case hardening job work priced per kg or per piece. Request a custom quotation.',
    url: `${SITE_URL}/contact`,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    bestRating: '5',
    reviewCount: '127',
  },
};

const processSteps = [
  {
    step: '01',
    title: 'Heating',
    description: 'Components are heated to a high temperature (900°C–950°C) in a carbon-rich atmosphere.',
    icon: Thermometer,
  },
  {
    step: '02',
    title: 'Carburizing/Nitriding',
    description: "Carbon or nitrogen diffuses into the steel surface, creating the 'case'.",
    icon: Cpu,
  },
  {
    step: '03',
    title: 'Quenching',
    description: 'Rapid cooling using polymer or water locks in the surface hardness.',
    icon: Gem,
  },
  {
    step: '04',
    title: 'Tempering & Inspection',
    description: 'Reheating to improve toughness, followed by rigorous testing for quality assurance.',
    icon: ShieldCheck,
  },
];

const materials = ['EN8', 'EN19', 'EN24', 'Mild Steel', '20MnCr5', '16MnCr5', 'Alloy Steel'];
const components = ['Gears', 'Shafts', 'Cams', 'Pins', 'Bearings', 'Bolts'];

const benefits = [
  { icon: ShieldCheck, title: 'Excellent Wear Resistance', description: 'Creates a hard, durable surface that withstands abrasion and friction.' },
  { icon: Gem, title: 'Tough Core', description: 'The core of the component remains tough and less brittle, preventing fractures under impact.' },
  { icon: ArrowRight, title: 'Improved Impact Strength', description: 'The combination of a hard case and tough core enhances overall component durability.' },
  { icon: CheckCircle, title: 'Cost-Effective', description: 'An efficient process for batch production, offering great value for high-volume work.' },
];

const comparisonData = [
  { aspect: 'Process', induction: 'Electromagnetic heating', case: 'Chemical diffusion (carbon/nitrogen)' },
  { aspect: 'Depth', induction: '0.5mm – 5mm', case: '0.2mm – 2mm' },
  { aspect: 'Cycle Time', induction: 'Minutes', case: 'Hours' },
  { aspect: 'Distortion', induction: 'Minimal', case: 'Moderate' },
  { aspect: 'Best For', induction: 'Precision localized treatment', case: 'Batch production of small-medium parts' },
];

// Pricing & turnaround highlights — captures mid-funnel commercial intent.
const pricingCards = [
  { icon: IndianRupee, title: 'Pricing Basis', desc: 'Per kg or per piece, with reduced rates on bulk and repeat OEM carburizing orders.' },
  { icon: FileText, title: 'Minimum Order', desc: 'No rigid minimum — single trial parts to multi-thousand-piece lots accepted.' },
  { icon: Clock, title: 'Turnaround', desc: 'Standard 3–5 working days; urgent same-week batches for regular clients.' },
];

// E-E-A-T trust pillars for the "Why OEMs Trust Us" section.
const trustPillars = [
  { icon: Award, title: 'Consistent 58–62 HRC', desc: 'Repeatable surface hardness on every batch of carburized parts.' },
  { icon: ShieldCheck, title: 'ISO-Grade Process', desc: 'Documented, traceable case hardening for OEM supply chains.' },
  { icon: FileText, title: 'Hardness Reports', desc: 'HRC surface/core and case-depth reports issued with each batch.' },
  { icon: Clock, title: 'Fast Turnaround', desc: '3–5 day standard delivery keeps your production line running.' },
];

const faqItems = [
  {
    question: 'What is the difference between case hardening and induction hardening?',
    answer:
      'Case hardening (carburizing) is a thermo-chemical process where carbon diffuses into the surface at 900–950°C over several hours — ideal for small-to-medium batch production of mild steel parts. Induction hardening uses electromagnetic heating, takes minutes per part, and is suited for precision localized hardening of medium-high carbon steels. Case hardening achieves 0.2–2mm depth; induction achieves 0.5–5mm. We offer both at our Ludhiana facility.',
  },
  {
    question: 'Which steel grades are suitable for case hardening?',
    answer:
      'Low-carbon steels and alloy steels are ideal: EN8 (C45), Mild Steel, 20MnCr5, 16MnCr5, EN36, and similar grades. These steels have insufficient carbon to harden by induction alone, so case hardening adds carbon to the surface layer. EN19, EN24, and higher-carbon steels are better suited to induction or through-hardening.',
  },
  {
    question: 'What case depth can you achieve with carburizing?',
    answer:
      'Standard case depths of 0.3–1.5mm are achieved for most gear, shaft, and pin components. Deeper cases up to 2mm are possible with extended carburizing cycles. Case depth is verified on sample cross-sections and reported with each batch. Specify your required case depth when requesting a quote.',
  },
  {
    question: 'What components do you process for case hardening in Ludhiana?',
    answer:
      'We process gears (spur, helical, bevel), shafts, pins, cams, bolts, bearing surfaces, and general steel components for automotive, agricultural, and industrial customers across Punjab. Both small batches and high-volume monthly production runs are accepted.',
  },
  {
    question: 'Do you provide hardness test reports for case hardened components?',
    answer:
      'Yes. Every batch includes a Rockwell hardness test report (HRC surface and core) and case depth measurement. Documentation is available for OEM incoming inspection and export quality requirements. Metallurgical cross-section reports are available on request.',
  },
  {
    question: 'How much do case hardening services in Ludhiana cost?',
    answer:
      'Case hardening job-work pricing depends on component weight, required case depth, steel grade, and order quantity. We price most jobs on a per-kilogram or per-piece basis, with attractive rates for bulk OEM orders. Share your drawing and quantity on WhatsApp for an exact quotation within 24 hours.',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  'name': 'How Case Hardening Works — Steel Components',
  'description':
    'Step-by-step explanation of the case hardening (carburizing) process for steel components — from heating to final inspection at Thakur Industries, Ludhiana.',
  'totalTime': 'PT8H',
  'step': [
    {
      '@type': 'HowToStep',
      'position': 1,
      'name': 'Heating in Carbon-Rich Atmosphere',
      'text': 'Components are heated to 900°C–950°C in a carbon-rich atmosphere (carburizing gas or solid/liquid carburizing medium). The steel surface absorbs carbon atoms, increasing surface carbon content.',
    },
    {
      '@type': 'HowToStep',
      'position': 2,
      'name': 'Carburizing or Nitriding Diffusion',
      'text': 'Carbon or nitrogen diffuses into the steel surface layer over several hours, creating the hardened "case". The depth of this case (0.2–2mm) is controlled by temperature and soak time.',
    },
    {
      '@type': 'HowToStep',
      'position': 3,
      'name': 'Quenching for Surface Hardness',
      'text': 'After carburizing, components are rapidly cooled (quenched) using polymer or water to lock in the martensitic surface structure. This achieves 58–65 HRC surface hardness while the core remains tough.',
    },
    {
      '@type': 'HowToStep',
      'position': 4,
      'name': 'Tempering and Quality Inspection',
      'text': 'Components are reheated to 150–200°C (tempering) to reduce brittleness while retaining hardness. Final Rockwell hardness testing, case depth verification, and hardness report are issued per batch.',
    },
  ],
};

export default function CaseHardeningPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'serviceCaseHardening');
  const processImage = PlaceHolderImages.find((img) => img.id === 'caseHardeningProcess');
  const qualityImage = PlaceHolderImages.find((img) => img.id === 'processFinishing');

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={howToSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Services', href: '/services' },
          { name: 'Case Hardening Services in Ludhiana', href: PAGE_PATH },
        ]}
      />

      <div className="bg-background">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-secondary text-foreground text-center">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="Case hardening services in Ludhiana — carburized steel gears and shafts at Thakur Industries"
              data-ai-hint={heroImage.imageHint}
              fill
              sizes="100vw"
              className="object-cover opacity-20"
              priority
            />
          )}
          <div className="container mx-auto px-4 md:px-6 z-10 relative">
            {/* Breadcrumb trail — matches BreadcrumbList schema */}
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="inline-block w-4 h-4 mx-1" />
              <Link href="/services" className="hover:text-primary">Services</Link>
              <ChevronRight className="inline-block w-4 h-4 mx-1" />
              <span>Case Hardening</span>
            </nav>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Case Hardening Services in Ludhiana
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              Looking for reliable <strong>case hardening services in Ludhiana</strong>? At {SITE_NAME}, our precision
              carburizing job work raises the surface of low-carbon steels like 20MnCr5, 16MnCr5 and EN8 to 58–62 HRC
              with a controlled 0.5–1.5mm case depth, while keeping the core tough and ductile — ideal for gears, shafts
              and pins used across Punjab’s automotive, agricultural and industrial sectors.
            </p>

            {/* Above-the-fold trust badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Award, label: '58–62 HRC' },
                { icon: ShieldCheck, label: 'ISO Process' },
                { icon: Clock, label: '3–5 Day Turnaround' },
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

            {/* CTA cluster */}
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

        {/* What is Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">What Is Case Hardening?</h2>
              <p className="text-muted-foreground text-lg">
                Case hardening is a thermo-chemical heat treatment process that increases the surface hardness of
                low-carbon or alloy steel components by infusing carbon or nitrogen atoms into the outer layer. The
                result — a hard, wear-resistant surface (case) and a tough, ductile core that resists impact and fatigue.
                It is the preferred route for low-carbon grades such as 20MnCr5 and 16MnCr5, which lack the carbon needed
                to harden by{' '}
                <Link href="/induction-hardening-services" className="text-primary font-semibold hover:underline">
                  induction hardening
                </Link>{' '}
                alone.
              </p>
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
              {processImage && (
                <Image
                  src={processImage.imageUrl}
                  alt="Case versus core hardness profile in a carburized steel component"
                  data-ai-hint={processImage.imageHint}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <PageHeader
              title="Industrial Case Hardening Process Explained"
              description="Our combination of depth hardening and quenching ensures a durable, high-wear-resistant surface — ideal for automotive and industrial parts."
              className="text-center mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-card p-6 rounded-lg border text-center flex flex-col items-center">
                  <step.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <PageHeader title="Why Choose Case Hardening for Steel Components?" className="text-center mb-12" />
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
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/contact">
                  Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Materials & Components Section */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Case Hardening Suitable for Steel Components & Alloys
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                {SITE_NAME} offers case hardening job work for a wide range of steels and alloy grades commonly used in
                Punjab’s manufacturing industries.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-center mb-6">Materials We Treat</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {materials.map((material) => (
                  <div key={material} className="bg-card text-card-foreground border rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                    {material}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
                Need detailed grade data? Explore our{' '}
                <Link href="/induction-heat-treatment/en8-steel-induction-hardening" className="text-primary font-semibold hover:underline">
                  EN8 steel hardening
                </Link>{' '}
                and{' '}
                <Link href="/induction-heat-treatment/en24-steel-hardening" className="text-primary font-semibold hover:underline">
                  EN24 steel hardening
                </Link>{' '}
                pages, or browse all{' '}
                <Link href="/material-heat-treatment" className="text-primary font-semibold hover:underline">
                  material heat treatment
                </Link>{' '}
                options.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-center mb-6">Common Components</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {components.map((component) => (
                  <div key={component} className="bg-card text-card-foreground border rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                    {component}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
                We also offer dedicated{' '}
                <Link href="/induction-heat-treatment/induction-hardening-gears-ludhiana" className="text-primary font-semibold hover:underline">
                  gear hardening in Ludhiana
                </Link>{' '}
                and{' '}
                <Link href="/induction-heat-treatment/induction-hardening-shafts-ludhiana" className="text-primary font-semibold hover:underline">
                  shaft hardening
                </Link>{' '}
                job work.
              </p>
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/surface-hardening">Explore Surface Hardening</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <PageHeader title="Case Hardening vs. Induction Hardening" className="text-center mb-12" />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Factor</TableHead>
                  <TableHead>Case Hardening</TableHead>
                  <TableHead>Induction Hardening</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row) => (
                  <TableRow key={row.aspect}>
                    <TableCell className="font-medium">{row.aspect}</TableCell>
                    <TableCell>{row.case}</TableCell>
                    <TableCell>{row.induction}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="text-center mt-8">
              <Button asChild variant="link">
                <Link href="/induction-heat-treatment">
                  Learn More About Induction Hardening <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing & Turnaround Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <PageHeader
              title="Case Hardening Pricing & Turnaround"
              description="We offer competitive case hardening rates for both prototype batches and bulk OEM production. Final pricing depends on component weight, case depth, steel grade and quantity — share your drawing for an exact quote within 24 hours."
              className="text-center mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingCards.map((item) => (
                <div key={item.title} className="bg-card p-8 rounded-lg border text-center flex flex-col items-center">
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" /> Get Your Case Hardening Quote
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Quality Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
              {qualityImage && (
                <Image
                  src={qualityImage.imageUrl}
                  alt="Quality inspection and hardness testing of a case hardened steel component"
                  data-ai-hint={qualityImage.imageHint}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              )}
            </div>
            <div className="lg:order-first">
              <h2 className="text-3xl font-bold mb-4">Precision-Controlled Heat Treatment You Can Trust</h2>
              <p className="text-muted-foreground text-lg">
                Our case hardening process in Ludhiana is carefully monitored to maintain temperature consistency and
                surface uniformity. Each part undergoes case depth testing, hardness inspection, and microstructure
                analysis to ensure perfect metallurgical results.
              </p>
            </div>
          </div>
        </section>

        {/* Why OEMs Trust Us — E-E-A-T */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <PageHeader title={`Why OEMs Trust ${SITE_NAME}`} className="text-center mb-12" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {trustPillars.map((item) => (
                <div key={item.title} className="bg-card p-6 rounded-lg border text-center flex flex-col items-center">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6">
          <ServiceFAQ heading="Case Hardening FAQs" faqItems={faqItems} />
        </div>

        {/* Authority outbound reference + freshness signal */}
        <div className="container mx-auto px-4 md:px-6 pb-12 text-center text-xs text-muted-foreground">
          <p className="mb-2">
            Learn more about the metallurgy of carburizing and surface hardening from the{' '}
            <a
              href="https://www.asminternational.org/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-primary hover:underline font-semibold"
            >
              ASM International
            </a>{' '}
            heat-treatment resources.
          </p>
          <p className="uppercase tracking-widest">Last updated: June 2026 · {SITE_NAME}, Ludhiana, Punjab</p>
        </div>

        <Testimonials />
        <CTASection />

        {/* Mobile sticky CTA bar — pure markup, hidden on md+ */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur border-t border-border px-4 py-3 flex gap-3">
          <a href={`tel:${SITE_PHONE_NUMBER}`} className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold uppercase text-xs py-3 rounded-lg">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold uppercase text-xs py-3 rounded-lg">
            <MessageSquare className="h-4 w-4" /> WhatsApp
          </a>
          <Link href="/contact" className="flex-1 flex items-center justify-center gap-2 bg-secondary text-foreground font-bold uppercase text-xs py-3 rounded-lg border border-border">
            Quote
          </Link>
        </div>
      </div>
    </>
  );
}
