
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, MessageCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

const PAGE_PATH = '/blog/preventing-soft-spots-in-induction-hardening';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const DATE_PUBLISHED = '2026-03-04';
const DATE_MODIFIED = '2026-06-13';
const HERO_IMAGE = `${SITE_URL}/images/images/40.png`;

export const metadata: Metadata = {
  title: 'Soft Spots in Induction Hardening: Causes & Fixes',
  description:
    'Soft spots in induction hardening causes explained — coil design, scanning speed and uneven quench — plus how to prevent them. Expert hardening in Ludhiana, Punjab.',
  keywords: [
    'soft spots in induction hardening causes',
    'soft spots induction hardening',
    'induction hardening defects',
    'uneven surface hardness',
    'how to prevent soft spots',
    'induction hardening Ludhiana',
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: 'Soft Spots in Induction Hardening: Causes & Fixes',
    description:
      'What causes soft spots in induction hardening — coil design, scanning speed, quench — and how to prevent them, with expert guidance for Punjab manufacturers.',
    url: PAGE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'Soft spots in induction hardening shown on a metal surface' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soft Spots in Induction Hardening: Causes & Fixes',
    description:
      'Soft spots in induction hardening causes — coil design, scanning speed and quench — plus proven fixes for uniform surface hardness.',
    images: [HERO_IMAGE],
  },
};

const faqs = [
  {
    question: 'What causes soft spots in induction hardening?',
    answer:
      'Soft spots are caused by non-uniform heating or cooling. The most common causes are poor coil design or misalignment, inconsistent scanning speed or power, uneven quench flow, surface contamination such as oil or scale, and variation in the steel’s composition. Any of these prevents a complete martensitic transformation in localized areas, leaving them softer than the surrounding surface.',
  },
  {
    question: 'How do you prevent soft spots in induction hardening?',
    answer:
      'Prevent soft spots with a coil designed for the part geometry, a constant scanning speed and power, a clean degreased surface, and a uniform quench at controlled flow and pressure. Verifying steel grade before processing and logging every parameter digitally ensures repeatable, soft-spot-free results.',
  },
  {
    question: 'How do you test for soft spots after hardening?',
    answer:
      'Soft spots are detected with multi-point hardness testing (Rockwell, Vickers and microhardness), metallographic case-depth inspection of a sectioned sample, and, for production lots, non-destructive eddy-current or magnetic comparator scanning that flags any low-hardness zone before delivery.',
  },
  {
    question: 'Are soft spots a serious defect?',
    answer:
      'Yes. A soft spot is a localized region of low hardness that reduces wear resistance, fatigue strength and load-bearing capacity. On gears, shafts and axles it becomes the point where pitting, spalling or premature failure begins, so soft spots must be eliminated, not just minimized.',
  },
  {
    question: 'Does scanning speed affect soft spots?',
    answer:
      'Yes. In scan hardening, an inconsistent or too-fast traverse speed leaves the surface below the austenitizing temperature in places, so those areas never transform to martensite and stay soft. A constant, correctly calibrated scanning speed matched to the part is essential for uniform hardness.',
  },
];

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Soft Spots in Induction Hardening: Causes & Fixes',
  description:
    'A practical guide to the causes of soft spots in induction hardening — coil design, scanning speed and quench — and how to prevent and test for them.',
  image: HERO_IMAGE,
  author: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
  },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  articleSection: 'Quality Control',
  keywords: [
    'soft spots in induction hardening causes',
    'induction hardening defects',
    'uneven surface hardness',
    'how to prevent soft spots',
  ],
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  inLanguage: 'en-IN',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const causesData = [
  { cause: 'Improper Coil Design or Alignment', solution: 'Use custom-designed coils calibrated for each component’s geometry to ensure balanced heat distribution.' },
  { cause: 'Inconsistent Scanning Speed, Power or Frequency', solution: 'Employ PLC-controlled scanning speed and power regulation for consistent electromagnetic penetration along the whole surface.' },
  { cause: 'Surface Contamination or Oxidation', solution: 'Perform pre-cleaning and degreasing of every component before induction treatment.' },
  { cause: 'Non-Uniform Quenching', solution: 'Use automated polymer and water quenching systems with controlled flow pressure for consistent cooling coverage.' },
  { cause: 'Material Composition Variability', solution: 'Conduct material certification and testing before processing to verify steel grades.' },
  { cause: 'Improper Tempering or Post-Heat Stress', solution: 'Apply precision tempering to stabilize the microstructure and eliminate stress gradients.' },
];

const bestPracticesData = [
  { step: 'Pre-Cleaning', action: 'Remove oil, dust, oxide', purpose: 'Uniform heating' },
  { step: 'Coil Calibration', action: 'Set distance & symmetry', purpose: 'Balanced heat coverage' },
  { step: 'Scanning & Frequency Optimization', action: 'Match speed and frequency to material grade', purpose: 'Accurate, even case depth' },
  { step: 'Controlled Quenching', action: 'Maintain flow & pressure', purpose: 'Even cooling' },
  { step: 'Hardness Testing', action: 'Verify 100% coverage', purpose: 'Detect soft spots early' },
];

const tocItems = [
  { href: '#what-are-soft-spots', label: 'What are soft spots' },
  { href: '#top-causes', label: 'Top causes of soft spots' },
  { href: '#how-to-prevent', label: 'How to prevent them' },
  { href: '#how-we-test', label: 'How we test for soft spots' },
  { href: '#faq', label: 'FAQ' },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find((img) => img.id === 'blogSoftSpots');

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={faqSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Blog', href: '/blog' },
          { name: 'Soft Spots in Induction Hardening: Causes & Fixes', href: PAGE_PATH },
        ]}
      />
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <div className="text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="inline-block w-4 h-4 mx-1" />
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <ChevronRight className="inline-block w-4 h-4 mx-1" />
              <span className="truncate">Soft Spots in Induction Hardening</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Soft Spots in Induction Hardening: Causes &amp; Fixes
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Understand what causes soft spots in induction hardening — and the proven process controls that eliminate them for
              uniform surface hardness on gears, shafts and axles.
            </p>
            <div className="mt-4 text-sm text-muted-foreground not-prose">
              <p>
                By the <strong>{SITE_NAME}</strong> Metallurgy Team · Reviewed by the Heat-Treatment Process Engineering Team
              </p>
              <p>Published 4 March 2026 · Updated 13 June 2026</p>
            </div>
          </div>

          {featureImage && (
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
              <Image
                src={featureImage.imageUrl}
                alt="Soft spots in induction hardening shown as low-hardness zones on a metal surface"
                data-ai-hint={featureImage.imageHint}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          )}

          {/* Answer-first lead */}
          <p className="text-lg">
            <strong>The short answer:</strong> soft spots in induction hardening are caused by non-uniform heating or cooling —
            most often poor coil design or misalignment, inconsistent scanning speed and power, uneven quench flow, surface
            contamination, or variation in the steel grade. Each leaves a localized zone that never fully transforms to
            martensite, so it stays softer than the surrounding case.
          </p>

          {/* Table of contents */}
          <nav aria-label="Table of contents" className="not-prose my-8 rounded-lg border bg-muted/30 p-6">
            <p className="font-semibold text-foreground mb-3">On this page</p>
            <ul className="space-y-2">
              {tocItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-primary hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Snippet play: causes list + fixes list */}
          <h2 id="what-are-soft-spots" className="text-3xl font-bold mt-12">
            What Are Soft Spots in Induction Hardening?
          </h2>
          <p>
            Soft spots are localized regions of reduced hardness on a metal surface after the induction hardening process. They
            occur when heating, quenching, or metallurgical transformation doesn’t happen uniformly. These imperfections reduce
            the wear resistance, fatigue strength and load-bearing capacity of a component, compromising the reliability of gears,
            shafts, axles and other critical parts — and they typically become the very point where pitting or fatigue cracking
            begins.
          </p>
          <p>At a glance, the <strong>main causes of soft spots</strong> are:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Coil design or alignment</strong> — an unbalanced field leaves cool, under-hardened zones.</li>
            <li><strong>Inconsistent scanning speed or power</strong> — areas never reach the austenitizing temperature.</li>
            <li><strong>Uneven quench</strong> — patchy flow or pressure means parts of the surface cool too slowly.</li>
            <li><strong>Surface contamination</strong> — oil, scale or oxide blocks uniform heat absorption.</li>
            <li><strong>Material variability</strong> — inconsistent carbon or alloy content gives inconsistent hardness.</li>
          </ul>
          <p>And the <strong>fixes</strong> that eliminate them:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Geometry-specific, calibrated <strong>coil design</strong>.</li>
            <li>Constant, PLC-controlled <strong>scanning speed and power</strong>.</li>
            <li>Uniform <strong>quench flow and pressure</strong> from automated systems.</li>
            <li>Thorough <strong>pre-cleaning and degreasing</strong> before treatment.</li>
            <li>Verified <strong>steel grade</strong> plus full digital parameter logging.</li>
          </ul>

          <h2 id="top-causes" className="text-3xl font-bold mt-12">
            Top Causes of Soft Spots — and How to Prevent Them
          </h2>
          <p>
            Three causes account for the large majority of soft spots in real production: <strong>coil design</strong>,{' '}
            <strong>scanning speed</strong> and <strong>quench uniformity</strong>. Get those three right and most defects
            disappear. The table below maps each common cause to the fix we apply at {SITE_NAME}.
          </p>
          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cause</TableHead>
                  <TableHead>Solution at {SITE_NAME}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {causesData.map((row) => (
                  <TableRow key={row.cause}>
                    <TableCell className="font-medium">{row.cause}</TableCell>
                    <TableCell>{row.solution}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <h3 className="text-2xl font-semibold mt-6">Coil design and alignment</h3>
          <p>
            The induction coil shapes the magnetic field. If it doesn’t match the component geometry — or sits at an uneven
            coil-to-surface distance — some areas heat less and never reach the austenitizing temperature. A coil designed and
            aligned for the specific part is the single most important defence against soft spots. See our deeper look at the{' '}
            <Link href="/blog/induction-hardening-process-explained">induction hardening process</Link> for how coil and
            frequency selection interact.
          </p>
          <h3 className="text-2xl font-semibold mt-6">Scanning speed and power</h3>
          <p>
            In scan hardening, the part (or coil) traverses at a set speed. If that speed is inconsistent or too fast, the surface
            dips below the transformation temperature in places, leaving untransformed, soft bands. Constant, PLC-controlled
            scanning speed and power keep the whole surface within the correct heating window.
          </p>
          <h3 className="text-2xl font-semibold mt-6">Quench uniformity</h3>
          <p>
            Even with perfect heating, a patchy quench undoes everything: any spot that cools too slowly misses the martensite
            window and stays soft. Automated quenching with controlled flow and pressure delivers consistent cooling across the
            whole surface. The same discipline also prevents related defects — see how we{' '}
            <Link href="/blog/how-to-prevent-cracks-in-induction-hardened-components">prevent cracks</Link> and{' '}
            <Link href="/blog/how-to-prevent-distortion-in-induction-hardening">control distortion</Link>.
          </p>

          {/* Inline conversion CTA */}
          <div className="not-prose my-10 rounded-lg border border-primary/30 bg-primary/5 p-6">
            <h3 className="text-xl font-bold text-foreground">Need consistent, soft-spot-free hardening in Ludhiana? Get a quote</h3>
            <p className="mt-2 text-muted-foreground">
              {SITE_NAME}, Ludhiana delivers fully verified, uniform-hardness induction hardening for gears, shafts and
              transmission parts — every parameter logged for traceability and quality audits.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/quality-certifications">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://wa.me/917900000776" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>

          <h2 id="how-to-prevent" className="text-3xl font-bold mt-12">
            How to Prevent Soft Spots: Best-Practice Checklist
          </h2>
          <p>
            Eliminating soft spots is a process-discipline problem, not luck. The five-step routine below is what we follow on
            every job to guarantee uniform surface hardness.
          </p>
          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Step</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Purpose</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bestPracticesData.map((row) => (
                  <TableRow key={row.step}>
                    <TableCell className="font-medium">{row.step}</TableCell>
                    <TableCell>{row.action}</TableCell>
                    <TableCell>{row.purpose}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p>
            At {SITE_NAME}, Ludhiana we combine advanced equipment and process discipline to eliminate induction hardening
            defects. Our day-to-day controls include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Computerized temperature monitoring during heating cycles</li>
            <li>Real-time coil-to-surface distance and scanning-speed control</li>
            <li>Digital quenching flow meters for pressure consistency</li>
            <li>Case depth verification (metallographic inspection)</li>
            <li>Hardness testing (Rockwell, Vickers and microhardness)</li>
          </ul>
          <p className="font-semibold text-foreground">
            Every process parameter is logged digitally for traceability and quality audits.
          </p>
          <p>
            Case-depth and hardness acceptance criteria follow the heat-treatment standards summarised by{' '}
            <a href="https://www.asminternational.org/" target="_blank" rel="nofollow noopener noreferrer">ASM International</a>.
          </p>

          <h3 className="text-2xl font-semibold mt-6">Case study: eliminating soft spots in automotive gear shafts</h3>
          <p>
            An automotive OEM in Ludhiana faced non-uniform hardness (soft zones near spline ends) in an EN19 gear shaft. Our
            analysis found inconsistent heating due to coil misalignment and uneven quenching flow. By redesigning the coil
            geometry, adjusting quenching spray angles and calibrating the system for a consistent 20 kHz frequency, we achieved
            uniform surface hardness of 58.5–59.5 HRC and eliminated all soft spots, improving component life by 30%. The same
            controls underpin our <Link href="/gear-hardening">gear hardening</Link> and{' '}
            <Link href="/shaft-hardening">shaft hardening</Link> services.
          </p>

          <h2 id="how-we-test" className="text-3xl font-bold mt-12">
            How We Test for Soft Spots
          </h2>
          <p>
            Detecting a soft spot before a part ships is as important as preventing it. We verify uniform hardness with a
            layered inspection regime:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Multi-point hardness testing</strong> — Rockwell, Vickers and microhardness readings across the surface, not just one spot.</li>
            <li><strong>Metallographic case-depth inspection</strong> — a sectioned sample confirms an even martensitic case.</li>
            <li><strong>Non-destructive scanning</strong> — eddy-current or magnetic comparator checks flag any low-hardness zone on production lots.</li>
            <li><strong>Full digital traceability</strong> — every reading is logged against the job for audit and OEM sign-off.</li>
          </ul>
          <p>
            This catch-it-early approach means a soft spot is found and corrected in process, not discovered by the customer in
            the field.
          </p>

          <h2 id="faq" className="text-3xl font-bold mt-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
            <h3 className="text-2xl font-bold">Need Reliable, Defect-Free Induction Hardening?</h3>
            <p className="mt-2 text-muted-foreground">
              Get in touch with {SITE_NAME}, Ludhiana — specialists in precision heat treatment with verified, soft-spot-free
              hardening for OEMs across Punjab, Haryana and Delhi NCR.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/get-quote">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/quality-certifications">View Quality &amp; Certifications</Link>
              </Button>
            </div>
          </div>
          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}
