import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceFAQ } from '@/components/shared/ServiceFAQ';
import { Award, CheckCircle2, FileText, Gauge, Microscope, ShieldCheck, Zap, ClipboardList } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Quality & Certifications — Certified Heat Treatment Punjab | Thakur Industries',
  description: 'ISO 9001 certified induction hardening & heat treatment in Ludhiana, Punjab. Rockwell hardness testing, metallurgical reports, OEM-grade quality assurance. Certified job work for export & OEM manufacturers.',
  alternates: { canonical: '/quality-certifications' },
  keywords: [
    'certified heat treatment Punjab',
    'ISO certified induction hardening',
    'heat treatment quality Ludhiana',
    'hardness testing Punjab',
    'OEM heat treatment certified',
    'induction hardening quality report',
  ],
  openGraph: {
    title: 'Quality & Certifications | Certified Heat Treatment Punjab | Thakur Industries',
    description: 'ISO 9001 certified induction hardening. Rockwell hardness testing, metallurgical reports, OEM-grade quality.',
    url: `${SITE_URL}/quality-certifications`,
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

export default function QualityCertificationsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    telephone: SITE_PHONE_NUMBER,
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 9001 Quality Management System',
        description: 'Quality management certification for induction hardening and heat treatment services.',
      },
    ],
    description: 'Thakur Industries is a certified induction hardening and heat treatment provider in Ludhiana, Punjab. ISO 9001 quality management, Rockwell hardness testing, and full traceability for every job.',
  };

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Quality & Certifications', href: '/quality-certifications' }]} />
      <JsonLd data={schema} />

      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <PageHeader
            title="Quality Control &"
            highlightedWord="Certifications"
            description={`Every component treated at ${SITE_NAME} goes through a documented quality process — from pre-inspection to hardness testing and certification. OEM and export-ready standards.`}
            className="text-center"
          />

          {/* Hero image banner */}
          <div className="relative h-60 md:h-80 rounded-3xl overflow-hidden mb-16 border border-primary/20 shadow-[0_0_40px_rgba(255,0,0,0.10)]">
            <Image
              src="/images/images/7.png"
              alt="Quality control and hardness testing at Thakur Industries"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
              <div className="max-w-lg">
                <span className="inline-block bg-primary text-primary-foreground text-xs font-black uppercase px-3 py-1 rounded-full tracking-widest mb-4">ISO-Process Standards</span>
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
                <p className="font-black uppercase italic tracking-tight text-foreground">{badge.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{badge.sub}</p>
              </div>
            ))}
          </div>

          {/* Quality Process */}
          <section className="py-16 border-t border-border">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Our 6-Step <span className="text-primary">Quality Process</span>
            </h2>
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

          {/* Technical Specs */}
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

          {/* Certifications */}
          <section className="py-16 border-t border-border">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Certifications & <span className="text-primary">Standards</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert) => (
                <div key={cert.title} className="flex gap-6 p-8 bg-secondary/20 border border-border rounded-2xl">
                  <cert.icon className="h-10 w-10 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-black uppercase italic tracking-tight text-foreground mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <ServiceFAQ
            heading="Quality & Certification FAQs"
            faqItems={[
              { question: 'Is Thakur Industries ISO certified for heat treatment?', answer: 'Our quality management system follows ISO 9001 principles with standardised process documentation, equipment calibration schedules, and full traceability for every job. We supply to ISO-certified OEMs across Punjab.' },
              { question: 'What hardness test reports do you provide with each batch?', answer: 'Every batch includes a Rockwell HRC test report showing component ID, material grade, target vs achieved hardness, case depth measurement, and operator sign-off. Available digitally or in print.' },
              { question: 'How do you control case depth accuracy in induction hardening?', answer: 'CNC-controlled induction systems with precision coil gap control and real-time infrared pyrometer monitoring. Case depth tolerance is ±0.3mm on standard components. Deeper cases (3–8mm) are verified via cross-section on sample pieces.' },
              { question: 'Can your quality documentation be used for OEM or export audits?', answer: 'Yes. Our hardness reports, process parameter sheets, and batch traceability records are designed to meet Tier-1 OEM incoming inspection requirements and export quality audit needs.' },
              { question: 'How often are your hardness testing instruments calibrated?', answer: 'Our Rockwell hardness testers, case depth instruments, and infrared pyrometers are calibrated on a regular schedule. Calibration certificates are available on request for your quality records.' },
            ]}
          />

          {/* Documents we provide */}
          <section className="py-16 border-t border-border">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-6">
                Documents We <span className="text-primary">Provide</span>
              </h2>
              <p className="text-muted-foreground mb-10">Every job at Thakur Industries comes with proper documentation for quality assurance, OEM compliance, and audit readiness.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {[
                  'Rockwell Hardness Test Report (per batch)',
                  'Case Depth Measurement Report',
                  'Process Parameter Sheet (on request)',
                  'Material Grade Confirmation',
                  'Batch traceability record',
                  'Metallurgical cross-section report (on request)',
                ].map((doc) => (
                  <div key={doc} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
        </div>
        <CTASection />
      </div>
    </>
  );
}
