
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Check, X, MessageCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

const PAGE_PATH = '/blog/induction-hardening-vs-nitriding';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const DATE_PUBLISHED = '2026-02-18';
const DATE_MODIFIED = '2026-06-13';
const HERO_IMAGE = `${SITE_URL}/images/images/21.png`;

export const metadata: Metadata = {
  title: 'Induction Hardening vs Nitriding: Differences & Uses',
  description:
    'Induction hardening vs nitriding compared: process temperature, case depth, distortion, hardness and best uses. Expert EN19/EN24 hardening in Ludhiana, Punjab.',
  keywords: [
    'induction hardening vs nitriding',
    'nitriding vs induction hardening',
    'difference between induction hardening and nitriding',
    'case depth comparison',
    'surface hardening process Punjab',
    'induction hardening Ludhiana',
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: 'Induction Hardening vs Nitriding: Differences & Uses',
    description:
      'Compare induction hardening and nitriding by temperature, case depth, distortion, hardness and best uses — with EN19/EN24 guidance for Punjab industries.',
    url: PAGE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'Induction hardening vs nitriding comparison chart' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Induction Hardening vs Nitriding: Differences & Uses',
    description:
      'Induction hardening vs nitriding — temperature, case depth, distortion, hardness and best uses, explained for Punjab manufacturers.',
    images: [HERO_IMAGE],
  },
};

const faqs = [
  {
    question: 'What is the main difference between induction hardening and nitriding?',
    answer:
      'Induction hardening heats steel above 850°C with electromagnetic induction and quenches it to form a deep martensitic case (0.5–5 mm). Nitriding diffuses nitrogen at 500–550°C with no quench, creating a very thin (0.1–0.7 mm) but very hard nitride layer. Induction is faster and deeper; nitriding is slower with less distortion.',
  },
  {
    question: 'Which process gives a deeper case depth?',
    answer:
      'Induction hardening gives a much deeper case — typically 0.5 to 5 mm — making it ideal for load-bearing parts like shafts and gears. Nitriding produces a shallow 0.1–0.7 mm case best suited to precision tooling and wear surfaces.',
  },
  {
    question: 'Which causes less distortion, induction hardening or nitriding?',
    answer:
      'Nitriding causes the least distortion because it runs at low temperature with no quench. Induction hardening also has low distortion thanks to localized heating, but the quench step introduces slightly more dimensional change than nitriding.',
  },
  {
    question: 'Is induction hardening cheaper than nitriding?',
    answer:
      'Yes, for most production parts. Induction hardening takes seconds to minutes per part and scales economically, while nitriding takes 10–40 hours per batch and uses special nitriding-grade steels, raising cost per part.',
  },
  {
    question: 'Can EN19 and EN24 steel be induction hardened?',
    answer:
      'Yes. EN19 (4140) and EN24 (4340) are excellent for induction hardening, reaching 50–58 HRC with controlled case depth. Thakur Industries in Ludhiana routinely induction hardens EN19 and EN24 gears, shafts and transmission parts for Punjab OEMs.',
  },
];

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Induction Hardening vs Nitriding: Differences & Uses',
  description:
    'Induction hardening vs nitriding compared by process temperature, case depth, distortion, hardness, materials and best uses.',
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
  articleSection: 'Heat Treatment Processes',
  keywords: [
    'induction hardening vs nitriding',
    'nitriding vs induction hardening',
    'case depth comparison',
    'surface hardening process',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Induction Hardening vs Nitriding', item: PAGE_URL },
  ],
};

const processComparisonData = [
  { parameter: 'Process Temperature', induction: '850–950°C', nitriding: '500–550°C' },
  { parameter: 'Case Depth', induction: '0.5–5 mm', nitriding: '0.1–0.7 mm' },
  { parameter: 'Distortion', induction: 'Low (localized heating + quench)', nitriding: 'Very low (no quench)' },
  { parameter: 'Surface Hardness', induction: '50–62 HRC', nitriding: '55–70 HRC (thin layer)' },
  { parameter: 'Materials', induction: 'Carbon & alloy steels (EN8, EN19, EN24, 4140)', nitriding: 'Nitriding steels (EN41B, Nitralloy, H13)' },
  { parameter: 'Processing Time', induction: 'Seconds to minutes', nitriding: '10–40 hours' },
  { parameter: 'Best For', induction: 'Gears, shafts, axles, crankshafts', nitriding: 'Dies, molds, spindles, valves' },
];

const performanceCostData = [
  { factor: 'Processing Speed', induction: true, nitriding: false },
  { factor: 'Depth of Hardness', induction: true, nitriding: false },
  { factor: 'Corrosion Resistance', induction: false, nitriding: true },
  { factor: 'Fatigue Strength', induction: true, nitriding: true },
  { factor: 'Dimensional Stability', induction: true, nitriding: true },
  { factor: 'Cost (per part)', induction: true, nitriding: false },
];

const materialsData = [
  { grade: 'EN8 / C45', process: 'Induction Hardening', use: 'Shafts, axles' },
  { grade: 'EN19 / 4140', process: 'Induction Hardening', use: 'Gears, spindles' },
  { grade: 'EN24 / 4340', process: 'Induction Hardening', use: 'Transmission parts' },
  { grade: '20MnCr5', process: 'Induction Hardening', use: 'Precision gears' },
  { grade: 'EN41B / Nitralloy', process: 'Nitriding', use: 'Dies, piston rods, spindles' },
  { grade: 'H13 / D2', process: 'Nitriding', use: 'Tooling & mold components' },
];

const tocItems = [
  { href: '#comparison-table', label: 'Comparison table' },
  { href: '#how-nitriding-differs', label: 'How nitriding differs' },
  { href: '#hardness-case-depth', label: 'Hardness & case depth' },
  { href: '#which-to-choose', label: 'Which to choose for your part' },
  { href: '#faq', label: 'FAQ' },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find((img) => img.id === 'blogNitriding');

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <div className="text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="inline-block w-4 h-4 mx-1" />
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <ChevronRight className="inline-block w-4 h-4 mx-1" />
              <span className="truncate">Induction Hardening vs Nitriding</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Induction Hardening vs Nitriding: Differences &amp; Uses
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              A clear, metallurgy-backed comparison of induction hardening and nitriding — covering temperature, case depth,
              distortion, hardness and which process suits your steel parts.
            </p>
            <div className="mt-4 text-sm text-muted-foreground not-prose">
              <p>
                By the <strong>{SITE_NAME}</strong> Metallurgy Team · Reviewed by the Heat-Treatment Process Engineering Team
              </p>
              <p>
                Published 18 February 2026 · Updated 13 June 2026
              </p>
            </div>
          </div>

          {featureImage && (
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
              <Image
                src={featureImage.imageUrl}
                alt="Induction hardening vs nitriding comparison chart"
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
            <strong>The core difference:</strong> induction hardening heats steel above 850°C and quenches it to form a deep,
            martensitic case (0.5–5 mm) in seconds, ideal for load-bearing gears and shafts. Nitriding diffuses nitrogen at
            500–550°C with no quench, building a very thin (0.1–0.7 mm) but extremely hard, low-distortion layer best for tools
            and dies.
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

          <h2 id="comparison-table" className="text-3xl font-bold mt-12">
            Comparison Table: Induction Hardening vs Nitriding
          </h2>
          <p>
            Both are surface-hardening processes used heavily across Punjab&apos;s automotive, tractor and machinery industries, but
            they harden steel in fundamentally different ways. The table below summarises the key differences at a glance.
          </p>
          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Parameter</TableHead>
                  <TableHead>Induction Hardening</TableHead>
                  <TableHead>Nitriding</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {processComparisonData.map((row) => (
                  <TableRow key={row.parameter}>
                    <TableCell className="font-medium">{row.parameter}</TableCell>
                    <TableCell>{row.induction}</TableCell>
                    <TableCell>{row.nitriding}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p>
            In short: induction hardening wins on speed, depth and cost; nitriding wins on corrosion resistance and the lowest
            possible distortion. Learn more about the process itself in our{' '}
            <Link href="/blog/induction-hardening-process-explained">induction hardening process guide</Link>, or see the full{' '}
            <Link href="/induction-heat-treatment">induction heat treatment service</Link>.
          </p>

          <h2 id="how-nitriding-differs" className="text-3xl font-bold mt-12">
            How Nitriding Differs From Induction Hardening
          </h2>
          <p>
            Induction hardening is a <strong>transformation</strong> process: electromagnetic induction heats the surface to
            850–950°C to form austenite, then rapid water or polymer quenching converts it into hard martensite. The core stays
            tough and ductile. It works on standard carbon and alloy steels such as EN8, EN19 and EN24.
          </p>
          <p>
            Nitriding is a <strong>diffusion</strong> process: nitrogen is introduced into the steel surface at a much lower
            500–550°C in a gas or plasma atmosphere, forming hard iron-nitride compounds (Fe₄N, Fe₂–₃N). Because there is no
            phase transformation and no quench, parts barely move dimensionally — but the process requires special
            nitriding-grade alloys and runs for many hours.
          </p>
          <h3 className="text-2xl font-semibold mt-6">Mechanism, in brief</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Induction hardening:</strong> martensitic transformation by rapid heating and quenching.</li>
            <li><strong>Nitriding:</strong> surface nitride formation by nitrogen diffusion — no quench needed.</li>
          </ul>

          <h2 id="hardness-case-depth" className="text-3xl font-bold mt-12">
            Hardness &amp; Case Depth
          </h2>
          <p>
            This is where the two processes diverge most. Nitriding produces a slightly higher peak surface hardness
            (55–70 HRC) but only in a paper-thin 0.1–0.7 mm layer. Induction hardening reaches 50–62 HRC across a much deeper
            0.5–5 mm case, which is what load-bearing components actually need to resist bending, torsion and contact fatigue.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Need a <strong>deep, fatigue-resistant case</strong> on a shaft or gear → induction hardening.</li>
            <li>Need a <strong>very hard, thin wear/corrosion skin</strong> on a die or spindle → nitriding.</li>
          </ul>
          <h3 className="text-2xl font-semibold mt-6">Performance &amp; Cost at a Glance</h3>
          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Factor</TableHead>
                  <TableHead>Induction Hardening</TableHead>
                  <TableHead>Nitriding</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {performanceCostData.map((row) => (
                  <TableRow key={row.factor}>
                    <TableCell className="font-medium">{row.factor}</TableCell>
                    <TableCell className="text-center">
                      {row.induction ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-500" />}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.nitriding ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-500" />}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p>
            For automotive and heavy-duty parts, induction hardening is usually preferred for its speed, cost-efficiency and
            deeper hardness. Case-depth and hardness targets are verified per the standards summarised by{' '}
            <a href="https://www.asminternational.org/" target="_blank" rel="nofollow noopener noreferrer">ASM International</a>.
          </p>

          {/* Inline conversion CTA */}
          <div className="not-prose my-10 rounded-lg border border-primary/30 bg-primary/5 p-6">
            <h3 className="text-xl font-bold text-foreground">Need EN19/EN24 induction hardening in Punjab? Get a quote</h3>
            <p className="mt-2 text-muted-foreground">
              {SITE_NAME}, Ludhiana delivers controlled-case-depth induction hardening for EN19, EN24 and 4140 gears, shafts and
              transmission parts — fast turnaround for OEMs across Punjab, Haryana and Delhi NCR.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/induction-heat-treatment">
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

          <h2 id="which-to-choose" className="text-3xl font-bold mt-12">
            Which to Choose for Your Part
          </h2>
          <p>
            The right process depends on the load, geometry and steel grade. Use this material guide as a starting point.
          </p>
          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Steel Grade</TableHead>
                  <TableHead>Suitable Process</TableHead>
                  <TableHead>Typical Use</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {materialsData.map((row) => (
                  <TableRow key={row.grade}>
                    <TableCell className="font-medium">{row.grade}</TableCell>
                    <TableCell>{row.process}</TableCell>
                    <TableCell>{row.use}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <strong>Choose induction hardening</strong> for deep case, high fatigue strength and fast, economical production —
              the right call for most gears, shafts and axles. See{' '}
              <Link href="/induction-heat-treatment/en19-steel-induction-hardening">EN19 induction hardening</Link> and{' '}
              <Link href="/induction-heat-treatment/en24-steel-hardening">EN24 steel hardening</Link>.
            </li>
            <li>
              <strong>Choose nitriding</strong> when corrosion resistance and the lowest distortion matter more than depth — for
              dies, molds, spindles and precision valves.
            </li>
          </ul>
          <p>
            For automotive, tractor and industrial machinery components in Ludhiana and across Punjab, {SITE_NAME} focuses on
            induction hardening because it is the most efficient, economical and scalable solution. Ready to start?{' '}
            <Link href="/get-quote">Request a quote</Link> or explore the full{' '}
            <Link href="/induction-heat-treatment">induction heat treatment service</Link>.
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
            <h3 className="text-2xl font-bold">Looking for Professional Induction Hardening Services in Punjab?</h3>
            <p className="mt-2 text-muted-foreground">
              Contact {SITE_NAME}, Ludhiana for industrial and OEM hardening job work across Punjab, Haryana and Delhi NCR.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/get-quote">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/induction-heat-treatment">Explore Induction Heat Treatment</Link>
              </Button>
            </div>
          </div>
          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}
