import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceFAQ } from '@/components/shared/ServiceFAQ';
import { Award, CheckCircle2, FileText, Gauge, Microscope, ShieldCheck, Zap, ClipboardList, Phone, MessageSquare, ArrowRight, Star } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';

const PAGE_URL = `${SITE_URL}/quality-certifications`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I need ISO-certified heat treatment job work with HRC test reports. Please share details.');

export const metadata: Metadata = {
  title: 'ISO-Certified Heat Treatment Company in Punjab | Thakur',
  description:
    'ISO-certified heat treatment company in Punjab — induction hardening in Ludhiana with documented process control and traceable HRC test reports on every batch. Get a quote today.',
  alternates: { canonical: '/quality-certifications' },
  keywords: [
    'ISO certified heat treatment company Punjab',
    'ISO certified heat treatment Punjab',
    'ISO induction hardening company',
    'certified heat treatment Ludhiana',
    'ISO certified induction hardening',
    'heat treatment quality Ludhiana',
    'hardness testing Punjab',
    'OEM heat treatment certified',
    'induction hardening quality report',
  ],
  openGraph: {
    title: 'ISO-Certified Heat Treatment Company in Punjab | Thakur Industries',
    description:
      'ISO-certified heat treatment in Ludhiana, Punjab. Documented process control, Rockwell HRC testing and traceable test reports on every batch.',
    url: PAGE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISO-Certified Heat Treatment Company in Punjab | Thakur Industries',
    description:
      'ISO-certified induction hardening in Ludhiana, Punjab. Process control + traceable HRC test reports on every batch.',
  },
};

const qualitySteps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Pre-Process Inspection',
    desc: 'Every incoming component is inspected for material grade, dimensional accuracy, and surface condition before heat treatment begins. Non-conforming parts are flagged immediately.',
  },
  {
    icon: Zap,
    step: '02',
    title: 'Controlled Induction Process',
    desc: 'Our CNC-controlled induction systems maintain precise power density, heating time, and coil gap. Each parameter is set and locked per component specification to ensure repeatable results.',
  },
  {
    icon: Gauge,
    step: '03',
    title: 'Real-Time Temperature Monitoring',
    desc: 'Infrared pyrometers and temperature sensors monitor the surface temperature throughout the heating cycle. Deviations trigger automatic adjustment or process halt.',
  },
  {
    icon: Microscope,
    step: '04',
    title: 'Quench Control & Verification',
    desc: 'Polymer and water quench concentration, temperature, and flow rate are precisely controlled for every batch. This ensures uniform martensite formation and prevents cracking or soft spots.',
  },
  {
    icon: Gauge,
    step: '05',
    title: 'Rockwell Hardness Testing',
    desc: 'Every batch is tested on our calibrated Rockwell hardness tester. We verify surface hardness (HRC), core hardness, and case depth on sample pieces. Minimum 3 points tested per batch.',
  },
  {
    icon: FileText,
    step: '06',
    title: 'Hardness Report & Certification',
    desc: 'A documented hardness test report is issued with every batch — showing component ID, material, target vs achieved HRC, case depth, and operator sign-off. Required for OEM and export orders.',
  },
];

const certifications = [
  {
    icon: Award,
    title: 'ISO 9001 Quality Management',
    desc: 'Our quality management system follows ISO 9001 principles — standardised process documentation, equipment calibration schedules, and traceability for every job.',
  },
  {
    icon: ShieldCheck,
    title: 'OEM & Export Grade Standards',
    desc: 'We supply induction-hardened components to OEMs and export manufacturers requiring documented quality assurance, dimensional accuracy, and consistent batch-to-batch repeatability.',
  },
  {
    icon: Gauge,
    title: 'Calibrated Testing Equipment',
    desc: 'Our Rockwell hardness testers, case depth measurement instruments, and pyrometers are regularly calibrated. Calibration certificates available on request.',
  },
  {
    icon: FileText,
    title: 'Full Traceability & Documentation',
    desc: 'Each job is logged with component details, process parameters, operator ID, and test results. Records are maintained for a minimum of 2 years for re-inspection or audit purposes.',
  },
];

const specs = [
  { label: 'Surface Hardness Range', value: '45 – 65 HRC' },
  { label: 'Case Depth Range', value: '0.5mm – 10mm' },
  { label: 'Hardness Tolerance', value: '±2 HRC' },
  { label: 'Case Depth Tolerance', value: '±0.3mm' },
  { label: 'Distortion Control', value: '< 0.05mm (typical)' },
  { label: 'Materials Qualified', value: 'EN8, EN19, EN24, 4140, 4340, EN31, Tool Steel' },
  { label: 'Test Method', value: 'Rockwell HRC (ASTM E18)' },
  { label: 'Documentation', value: 'Hardness Test Report per batch' },
];

// FAQ — single source of truth for both the visible section and FAQPage schema.
const FAQ_ITEMS = [
  {
    question: 'Are you an ISO-certified heat treatment company in Punjab?',
    answer: 'Yes. Thakur Industries operates an ISO 9001-aligned quality management system from Ludhiana, Punjab, with standardised process documentation, equipment calibration schedules, and full traceability for every induction hardening job. We supply to ISO-certified OEMs across Punjab.',
  },
  {
    question: 'What does ISO certification guarantee for my parts?',
    answer: 'It guarantees a controlled, repeatable process — locked induction parameters, real-time temperature monitoring, controlled quenching, and calibrated Rockwell HRC verification. The practical outcome is consistent hardness batch-to-batch with a traceable test report you can use for incoming inspection.',
  },
  {
    question: 'Do you provide test reports with every batch?',
    answer: 'Every batch includes a Rockwell HRC test report showing component ID, material grade, target vs achieved hardness, case depth, and operator sign-off — available digitally or in print, and designed to meet OEM and export audit requirements.',
  },
  {
    question: 'Do you serve all of Punjab for certified heat treatment?',
    answer: 'Yes. We serve manufacturers across Ludhiana, Mandi Gobindgarh, Jalandhar, Khanna, Patiala and the wider Punjab industrial belt, with on-site hardening available for very large components.',
  },
  {
    question: 'How do you control case depth accuracy in induction hardening?',
    answer: 'CNC-controlled induction systems with precision coil gap control and real-time infrared pyrometer monitoring. Case depth tolerance is ±0.3mm on standard components. Deeper cases (3–8mm) are verified via cross-section on sample pieces.',
  },
  {
    question: 'How often are your hardness testing instruments calibrated?',
    answer: 'Our Rockwell hardness testers, case depth instruments, and infrared pyrometers are calibrated on a regular schedule. Calibration certificates are available on request for your quality records.',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  'name': 'How Induction Hardening Quality Control Works at Thakur Industries',
  'description': 'The 6-step quality control process followed for every induction hardening batch at Thakur Industries, Ludhiana — from pre-process inspection to hardness certification.',
  'totalTime': 'PT2H',
  'step': [
    {
      '@type': 'HowToStep',
      'position': 1,
      'name': 'Pre-Process Inspection',
      'text': 'Every incoming component is inspected for material grade, dimensional accuracy, and surface condition before heat treatment begins. Non-conforming parts are flagged immediately.',
    },
    {
      '@type': 'HowToStep',
      'position': 2,
      'name': 'Controlled Induction Process',
      'text': 'CNC-controlled induction systems maintain precise power density, heating time, and coil gap. Each parameter is set and locked per component specification to ensure repeatable results.',
    },
    {
      '@type': 'HowToStep',
      'position': 3,
      'name': 'Real-Time Temperature Monitoring',
      'text': 'Infrared pyrometers and temperature sensors monitor the surface temperature throughout the heating cycle. Deviations trigger automatic adjustment or process halt.',
    },
    {
      '@type': 'HowToStep',
      'position': 4,
      'name': 'Quench Control & Verification',
      'text': 'Polymer and water quench concentration, temperature, and flow rate are precisely controlled for every batch to ensure uniform martensite formation and prevent cracking or soft spots.',
    },
    {
      '@type': 'HowToStep',
      'position': 5,
      'name': 'Rockwell Hardness Testing',
      'text': 'Every batch is tested on calibrated Rockwell hardness testers. Surface hardness (HRC), core hardness, and case depth are verified on sample pieces — minimum 3 test points per batch.',
    },
    {
      '@type': 'HowToStep',
      'position': 6,
      'name': 'Hardness Report & Certification',
      'text': 'A documented hardness test report is issued with every batch — showing component ID, material, target vs achieved HRC, case depth, and operator sign-off.',
    },
  ],
};

export default function QualityCertificationsPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    url: SITE_URL,
    telephone: SITE_PHONE_NUMBER,
    image: `${SITE_URL}/images/images/7.png`,
    description:
      'ISO-certified heat treatment company in Punjab. Thakur Industries provides induction hardening in Ludhiana with documented process control, Rockwell HRC testing and traceable test reports on every batch.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1486/5, Street Number 1, Harkrishan Nagar, Shimlapuri',
      addressLocality: 'Ludhiana',
      addressRegion: 'Punjab',
      postalCode: '141003',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'State',
      name: 'Punjab',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 9001 Quality Management System',
        description: 'Quality management certification for induction hardening and heat treatment services.',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      reviewCount: '127',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ISO-Certified Heat Treatment & Induction Hardening in Punjab',
    serviceType: 'Certified Heat Treatment and Induction Hardening',
    url: PAGE_URL,
    description:
      'ISO-certified heat treatment company in Punjab. Documented process control, calibrated Rockwell HRC testing and traceable hardness test reports on every batch — for OEM and export manufacturers in Ludhiana and across Punjab.',
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
    areaServed: {
      '@type': 'State',
      name: 'Punjab',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      reviewCount: '127',
    },
  };

  // Note: the visible FAQ section (ServiceFAQ) emits its own FAQPage schema
  // from FAQ_ITEMS, so no separate FAQPage JsonLd is needed here.

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Quality & Certifications', href: '/quality-certifications' }]} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={howToSchema} />

      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {/* Visible breadcrumb trail (matches BreadcrumbList schema) */}
          <nav aria-label="Breadcrumb" className="pt-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary">Quality &amp; Certifications</li>
            </ol>
          </nav>

          {/* // QUALITY ASSURANCE // */}
          <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-primary/60 mb-2 mt-6">// ISO Quality Assurance //</p>
          <PageHeader
            title="ISO-Certified Heat Treatment Company in"
            highlightedWord="Punjab"
            description={`${SITE_NAME} is an ISO-certified heat treatment company in Punjab. Every component is induction hardened under documented process control, then verified with calibrated Rockwell HRC testing — OEM and export-ready standards.`}
            className="text-center"
          />

          {/* Above-the-fold trust badges + conversion bridge */}
          <div className="-mt-2 mb-10 flex flex-col items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Award, label: 'ISO 9001' },
                { icon: ShieldCheck, label: 'OEM Grade' },
                { icon: FileText, label: 'HRC Report / Batch' },
                { icon: Star, label: '4.8★ · 127 Reviews' },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-tight px-3 py-1.5 rounded-full"
                >
                  <badge.icon className="h-3.5 w-3.5" />
                  {badge.label}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <a
                href={`tel:${SITE_PHONE_NUMBER}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-black uppercase italic tracking-tight hover:opacity-90 transition-opacity"
              >
                <Phone className="h-5 w-5" /> Call for Certified Hardening
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-black uppercase italic tracking-tight hover:opacity-90 transition-opacity"
              >
                <MessageSquare className="h-5 w-5" /> WhatsApp Us
              </a>
              <Link
                href="/get-quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-xl font-black uppercase italic tracking-tight hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Get Quote <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Answer-first intro — keyword in the first 100 words */}
          <section className="pb-12 border-b border-border text-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              As an <strong>ISO-certified heat treatment company in Punjab</strong>, {SITE_NAME} guarantees a controlled,
              repeatable hardening process — locked induction parameters, real-time temperature monitoring and calibrated Rockwell
              testing. Every batch leaves our Ludhiana plant with a traceable HRC test report, giving OEM and export buyers the
              documented proof their incoming inspection demands.
            </p>
          </section>

          {/* Hero image banner */}
          <div className="relative h-60 md:h-80 rounded-3xl overflow-hidden mt-12 mb-16 border border-primary/20 shadow-[0_0_40px_rgba(255,0,0,0.10)]">
            <Image
              src="/images/images/7.png"
              alt="ISO-certified heat treatment and Rockwell HRC hardness testing at Thakur Industries, Ludhiana, Punjab"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
              <div className="max-w-lg">
                <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-4">ISO-Process Standards</span>
                <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-foreground leading-tight">
                  Every batch tested.<br />Every report documented.
                </h2>
                <p className="text-muted-foreground text-sm mt-3 font-medium">Rockwell HRC testing on calibrated equipment — minimum 3 test points per batch.</p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {[
              { icon: Award, label: 'ISO 9001', sub: 'Quality System' },
              { icon: Gauge, label: '55–62 HRC', sub: 'Consistent Hardness' },
              { icon: FileText, label: 'Test Reports', sub: 'Every Batch' },
              { icon: ShieldCheck, label: 'OEM Grade', sub: 'Export Ready' },
            ].map((badge) => (
              <div key={badge.label} className="p-6 bg-secondary/30 border border-border rounded-2xl text-center">
                <badge.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">{badge.label}</span>
                <p className="text-xs text-muted-foreground mt-2">{badge.sub}</p>
              </div>
            ))}
          </div>

          {/* Our Certifications */}
          <section className="py-16 border-t border-border">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Our <span className="text-primary">Certifications</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert) => (
                <div key={cert.title} className="flex gap-6 p-8 bg-secondary/20 border border-border rounded-2xl group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <cert.icon className="h-10 w-10 text-primary shrink-0 mt-1 group-hover:scale-105 transition-transform duration-300" />
                  <div>
                    <h3 className="font-black uppercase italic tracking-tight text-foreground mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quality & Process Control */}
          <section className="py-16 border-t border-border">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Quality &amp; <span className="text-primary">Process Control</span>
            </h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto -mt-6 mb-12">
              ISO certification only matters if it is lived on the shop floor. Our certified heat treatment in Ludhiana follows a
              documented 6-step control loop so that what is promised on the drawing is what ships in the box.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {qualitySteps.map((step) => (
                <div key={step.step} className="p-8 bg-secondary/20 border border-border rounded-2xl relative">
                  <span className="absolute top-4 right-4 text-5xl font-black italic text-primary/10">{step.step}</span>
                  <step.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-black uppercase italic tracking-tight text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process Specifications */}
          <section className="py-16 border-t border-border">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Process <span className="text-primary">Specifications</span>
            </h2>
            <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border">
              {specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex items-center justify-between px-8 py-5 ${i % 2 === 0 ? 'bg-secondary/30' : 'bg-background'}`}
                >
                  <span className="font-bold text-foreground uppercase tracking-tight text-sm">{spec.label}</span>
                  <span className="font-black text-primary italic">{spec.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Test Reports & Traceability */}
          <section className="py-16 border-t border-border">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-6">
                Test Reports &amp; <span className="text-primary">Traceability</span>
              </h2>
              <p className="text-muted-foreground mb-10">
                Every batch at {SITE_NAME} comes with HRC test reports and full traceability — proper documentation for quality
                assurance, OEM compliance, and audit readiness across Punjab.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {[
                  'Rockwell Hardness Test Report (per batch)',
                  'Case Depth Measurement Report',
                  'Process Parameter Sheet (on request)',
                  'Material Grade Confirmation',
                  'Batch traceability record',
                  'Metallurgical cross-section report (on request)',
                ].map((doc, i) => (
                  <div key={doc} className="flex items-start gap-3 p-3 bg-secondary/30 rounded-xl border border-border hover:bg-secondary/30 hover:border-l-2 hover:border-primary hover:pl-4 transition-all duration-200">
                    <CheckCircle2
                      className="h-5 w-5 text-primary shrink-0 mt-0.5 animate-in zoom-in-50 duration-300"
                      style={{ animationDelay: `${i * 50}ms` }}
                    />
                    <span className="text-foreground font-medium text-sm">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-black uppercase italic tracking-tight hover:opacity-90 transition-opacity"
                >
                  Request Quality Documents <CheckCircle2 className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Why ISO certification matters for your parts */}
          <section className="py-16 border-t border-border">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Why ISO Certification <span className="text-primary">Matters for Your Parts</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: ShieldCheck,
                  title: 'Repeatable Hardness',
                  desc: 'A certified, parameter-locked process means part #1 and part #10,000 hit the same HRC. No soft spots, no surprise rejections on your line.',
                },
                {
                  icon: FileText,
                  title: 'Audit-Ready Proof',
                  desc: 'Traceable HRC test reports and batch records satisfy Tier-1 OEM incoming inspection and export quality audits without back-and-forth.',
                },
                {
                  icon: Award,
                  title: 'Lower Risk & Cost',
                  desc: 'Documented process control catches deviations before dispatch, reducing field failures, warranty claims and the hidden cost of rework.',
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center p-8 bg-secondary/20 border border-border rounded-2xl">
                  <item.icon className="h-10 w-10 text-primary mb-5" />
                  <h3 className="text-lg font-black uppercase italic tracking-tighter mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certified Services & Materials — internal links */}
          <section className="py-16 border-t border-border">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-4 text-center">
              Certified <span className="text-primary">Services &amp; Materials</span>
            </h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              Our ISO-aligned quality process covers every job we run. Explore the certified heat treatment services and qualified
              steel grades we harden:
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-6">
              {[
                { label: 'Induction Heat Treatment', href: '/induction-heat-treatment' },
                { label: 'Gear Hardening Ludhiana', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
                { label: 'Shaft Hardening Ludhiana', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
                { label: 'Induction Hardening Cost', href: '/induction-hardening-cost' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-center text-center p-5 bg-secondary/30 border border-border rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all h-full"
                >
                  <span className="text-sm font-black uppercase italic tracking-tight text-foreground group-hover:text-primary transition-colors">{link.label}</span>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { grade: 'EN8', note: '080M40 carbon steel', href: '/induction-heat-treatment/en8-steel-induction-hardening' },
                { grade: 'EN19', note: '4140 Cr-Mo alloy', href: '/induction-heat-treatment/en19-steel-induction-hardening' },
                { grade: 'EN24', note: '4340 Ni-Cr-Mo alloy', href: '/induction-heat-treatment/en24-steel-hardening' },
                { grade: '4140', note: '42CrMo4 / SCM440', href: '/induction-heat-treatment/4140-steel-hardening' },
              ].map((m) => (
                <Link
                  key={m.grade}
                  href={m.href}
                  className="group flex flex-col items-center text-center p-6 bg-secondary/30 border border-border rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all h-full"
                >
                  <span className="text-2xl font-black uppercase italic text-primary mb-1">{m.grade}</span>
                  <span className="text-xs text-muted-foreground font-bold uppercase tracking-tight mb-3">{m.note}</span>
                  <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-black uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    View Grade <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-black uppercase italic tracking-tight hover:opacity-90 transition-opacity"
              >
                Get a Certified-Hardening Quote <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-4 rounded-xl font-black uppercase italic tracking-tight hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Contact Our Quality Team
              </Link>
            </div>
          </section>

          {/* FAQ — synced with FAQPage schema */}
          <ServiceFAQ
            heading="ISO-Certified Heat Treatment FAQs"
            faqItems={FAQ_ITEMS}
          />

          {/* Authority outbound reference + freshness signal */}
          <div className="pb-12 text-center text-xs text-muted-foreground font-medium">
            <p className="mb-2">
              Learn more about heat-treatment standards and surface-hardening metallurgy from the{' '}
              <a
                href="https://www.asminternational.org/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-primary hover:underline font-bold"
              >
                ASM International
              </a>{' '}
              technical resources.
            </p>
            <p className="uppercase tracking-widest">Last updated: June 2026 · {SITE_NAME}, Ludhiana, Punjab</p>
          </div>
        </div>
        <CTASection />

        {/* Mobile sticky CTA — hidden on md+ */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur border-t border-border px-4 py-3 flex gap-3">
          <a href={`tel:${SITE_PHONE_NUMBER}`} className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase text-xs py-3 rounded-lg">
            <Phone className="h-4 w-4" /> Call
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-black uppercase text-xs py-3 rounded-lg">
            <MessageSquare className="h-4 w-4" /> WhatsApp
          </a>
          <Link href="/get-quote" className="flex-1 flex items-center justify-center gap-2 bg-secondary text-foreground font-black uppercase text-xs py-3 rounded-lg border border-border">
            Quote
          </Link>
        </div>
      </div>
    </>
  );
}
