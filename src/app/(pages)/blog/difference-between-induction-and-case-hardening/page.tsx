
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, MessageCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

const PAGE_PATH = '/blog/difference-between-induction-and-case-hardening';
const PAGE_URL = `https://thakurindustries.in${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'Induction Hardening vs Case Hardening: Key Differences',
  description:
    'Induction hardening vs case hardening compared: mechanism, case depth, distortion, cost & when to choose each. Job work in Ludhiana, Punjab.',
  keywords: [
    'induction hardening vs case hardening',
    'difference between induction and case hardening',
    'case hardening vs induction hardening',
    'surface hardening comparison',
    'steel hardening process Ludhiana',
    'heat treatment job work Punjab',
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: 'Induction Hardening vs Case Hardening: Key Differences',
    description:
      'Compare induction hardening vs case hardening by mechanism, case depth, distortion and cost. Expert heat treatment job work in Ludhiana, Punjab.',
    url: PAGE_URL,
    type: 'article',
    siteName: SITE_NAME,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Induction Hardening vs Case Hardening: Key Differences',
    description:
      'Induction hardening vs case hardening: mechanism, case depth, distortion & cost compared. Heat treatment job work in Ludhiana, Punjab.',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Induction Hardening vs Case Hardening: Key Differences',
  author: { '@type': 'Organization', name: 'Thakur Industries' },
  publisher: {
    '@type': 'Organization',
    name: 'Thakur Industries',
    logo: { '@type': 'ImageObject', url: 'https://thakurindustries.in/logo.png' },
  },
  datePublished: '2024-11-08',
  dateModified: '2026-06-13',
  articleSection: 'Heat Treatment Processes',
  keywords: [
    'induction hardening vs case hardening',
    'difference between induction hardening and case hardening',
    'surface hardening comparison',
    'steel hardening types',
  ],
  image: 'https://thakurindustries.in/images/images/2.jpeg',
  mainEntityOfPage: PAGE_URL,
  inLanguage: 'en-IN',
};

const faqs = [
  {
    question: 'What is the main difference between induction hardening and case hardening?',
    answer:
      'Induction hardening uses electromagnetic induction to physically heat and quench a localized surface zone, while case hardening chemically diffuses carbon or nitrogen into the surface. Induction is fast and localized; case hardening is slower but treats the whole exposed surface.',
  },
  {
    question: 'Which process causes less distortion?',
    answer:
      'Induction hardening generally causes less distortion because heating is localized and the cycle is short. Case hardening exposes the full part to furnace temperatures for hours, giving it a moderate distortion risk that may require post-treatment grinding.',
  },
  {
    question: 'Is case hardening or induction hardening cheaper?',
    answer:
      'Case hardening is usually more economical for large batches of low-carbon parts because many components are treated together in one furnace cycle. Induction hardening can cost slightly more per part but is faster and ideal for precision, high-value components.',
  },
  {
    question: 'Which steels suit each process?',
    answer:
      'Induction hardening works best on medium and high-carbon alloy steels such as EN8, EN19, EN24, 4140 and 4340. Case hardening suits low-carbon steels like 20MnCr5 that need carbon added to the surface to become hard.',
  },
  {
    question: 'Can Thakur Industries do both processes in Ludhiana?',
    answer:
      'Yes. Thakur Industries provides both induction hardening and case hardening job work in Ludhiana, Punjab, with polymer and water-based quenching, hardness testing and case depth verification for automotive, agricultural and industrial components.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const comparisonData = [
  {
    aspect: 'Hardening mechanism',
    induction: 'Physical heating by electromagnetic induction + quench',
    case: 'Chemical diffusion of carbon / nitrogen',
  },
  {
    aspect: 'Case depth',
    induction: '0.5 mm – 5 mm',
    case: '0.2 mm – 2 mm',
  },
  {
    aspect: 'Distortion',
    induction: 'Low (localized, short cycle)',
    case: 'Moderate (full part, long cycle)',
  },
  {
    aspect: 'Cost',
    induction: 'Slightly higher per part',
    case: 'Lower for large batches',
  },
  {
    aspect: 'Best for',
    induction: 'Shafts, axles, gears, pins (medium/high-carbon)',
    case: 'Gears, bearings, cams, bolts (low-carbon)',
  },
];

const applicationsData = [
  { component: 'Automotive shafts and axles', process: 'Induction Hardening' },
  { component: 'Gears and sprockets', process: 'Case or Induction Hardening' },
  { component: 'Agricultural tools and blades', process: 'Induction Hardening' },
  { component: 'Fasteners and bolts', process: 'Case Hardening' },
  { component: 'Bearings and cams', process: 'Case Hardening' },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find((img) => img.id === 'blogPost2');

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={faqSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Blog', href: '/blog' },
          { name: 'Induction Hardening vs Case Hardening', href: PAGE_PATH },
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
              <span className="truncate">Induction Hardening vs Case Hardening</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Induction Hardening vs Case Hardening: Key Differences
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground not-prose">
              <span>By the {SITE_NAME} Metallurgy Team</span>
              <span aria-hidden="true">·</span>
              <span>Reviewed by Senior Heat Treatment Engineer</span>
              <span aria-hidden="true">·</span>
              <span>Published Nov 2024 · Updated June 2026</span>
            </div>
            <p className="mt-4 text-xl text-muted-foreground">
              The core difference in <strong>induction hardening vs case hardening</strong> is the mechanism:
              induction hardening physically heats a localized surface zone with an electromagnetic coil and
              quenches it, while case hardening chemically diffuses carbon or nitrogen into the surface. Induction
              is fast and precise; case hardening adds hardness to low-carbon steel.
            </p>
          </div>

          {featureImage && (
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
              <Image
                src={featureImage.imageUrl}
                alt="Induction hardening vs case hardening comparison of steel components"
                data-ai-hint={featureImage.imageHint}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                priority
                className="object-cover"
              />
            </div>
          )}

          <p>
            If you are an industrial manufacturer or automotive parts supplier in Ludhiana or Punjab, understanding
            the difference between these two surface hardening methods will help you pick the right process for your
            components, control costs, and avoid premature wear or distortion.
          </p>

          <nav aria-label="Table of contents" className="my-8 not-prose rounded-lg border border-border bg-secondary/40 p-6">
            <h2 className="text-lg font-bold text-foreground">On this page</h2>
            <ul className="mt-3 space-y-2 text-primary">
              <li><a href="#quick-comparison" className="hover:underline">Quick comparison table</a></li>
              <li><a href="#how-each-works" className="hover:underline">How each process works</a></li>
              <li><a href="#distortion-cost" className="hover:underline">Distortion &amp; cost</a></li>
              <li><a href="#when-to-choose" className="hover:underline">When to choose which</a></li>
              <li><a href="#applications" className="hover:underline">Applications in industry</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
          </nav>

          <h2 id="quick-comparison" className="text-3xl font-bold mt-12 scroll-mt-24">
            Quick comparison table
          </h2>
          <p>
            Here is an at-a-glance summary of <strong>induction hardening vs case hardening</strong> across the
            factors that matter most when specifying heat treatment job work.
          </p>
          <div className="my-8 overflow-x-auto not-prose">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Method</TableHead>
                  <TableHead className="font-bold">Induction Hardening</TableHead>
                  <TableHead className="font-bold">Case Hardening</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row) => (
                  <TableRow key={row.aspect}>
                    <TableCell className="font-medium">{row.aspect}</TableCell>
                    <TableCell>{row.induction}</TableCell>
                    <TableCell>{row.case}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <h2 id="how-each-works" className="text-3xl font-bold mt-12 scroll-mt-24">
            How each process works
          </h2>

          <h3 className="text-2xl font-semibold mt-6">Induction hardening</h3>
          <p>
            Induction hardening is a non-contact surface heating process that uses electromagnetic induction to heat
            specific areas of a metal part. The heated zone is then rapidly quenched using water or polymer solution,
            producing a hard surface with a tough, ductile core. You can read the full method in our{' '}
            <Link href="/blog/induction-hardening-process-explained" className="text-primary hover:underline">
              induction hardening process guide
            </Link>
            .
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>The component (gear, shaft, or pin) is placed inside a copper induction coil.</li>
            <li>An alternating current passes through the coil, generating heat through electromagnetic induction.</li>
            <li>The surface reaches the critical temperature (around 850°C).</li>
            <li>Immediate quenching hardens the surface layer while the core remains tough.</li>
          </ul>
          <p>
            Because only the targeted zone is heated, induction hardening offers highly localized treatment, minimal
            distortion, and fast cycle times. It is compatible with EN8, EN19, EN24, 4140, and 4340 steels and is
            widely used across Ludhiana&rsquo;s precision manufacturing sector for shafts, axles, gears, and pins. See
            our full{' '}
            <Link href="/induction-heat-treatment" className="text-primary hover:underline">
              induction heat treatment service
            </Link>{' '}
            for capabilities.
          </p>

          <h3 className="text-2xl font-semibold mt-6">Case hardening</h3>
          <p>
            Case hardening (also called carburizing) is a chemical heat treatment process. Carbon or nitrogen atoms
            are diffused into the surface of the steel at high temperature, creating a hard, wear-resistant outer
            layer (the case) while the inside stays softer and more ductile. Explore our dedicated{' '}
            <Link href="/case-hardening-heat-treatment" className="text-primary hover:underline">
              case hardening heat treatment service
            </Link>{' '}
            for material options.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>The part is heated in a carburizing or nitriding furnace.</li>
            <li>The outer surface absorbs carbon or nitrogen from the atmosphere.</li>
            <li>After sufficient time, the part is quenched to lock the hardened layer in place.</li>
          </ul>
          <p>
            Case hardening delivers deep, chemistry-based surface hardening and is well suited to gears, pins, bolts,
            and bearings made of low-carbon steels. In Punjab&rsquo;s heavy-duty manufacturing industries, it is
            preferred where components face friction, shock, or continuous wear in large production batches.
          </p>
          <p>
            The key contrast worth remembering: induction hardening changes only the <em>structure</em> of the steel
            already present at the surface, transforming it to hard martensite, whereas case hardening changes the
            <em> chemistry</em> by enriching the surface with carbon before transformation. That is why induction
            requires a steel with enough carbon to harden on its own, while case hardening is the route of choice when
            the base steel is too low in carbon to harden directly. Both methods rely on rapid quenching to lock in
            hardness, and both can be followed by a low-temperature temper to relieve stress and improve toughness.
          </p>

          <h2 id="distortion-cost" className="text-3xl font-bold mt-12 scroll-mt-24">
            Distortion &amp; cost
          </h2>
          <p>
            Distortion and cost are usually the deciding factors when choosing between the two processes. Their
            behaviour is shaped directly by how each method applies heat.
          </p>
          <h3 className="text-2xl font-semibold mt-6">Distortion</h3>
          <p>
            Induction hardening keeps distortion <strong>low</strong> because heat is confined to a thin surface zone
            and the part spends only seconds at temperature. Case hardening soaks the entire component at furnace
            temperature for hours, giving it a <strong>moderate</strong> distortion risk; tight-tolerance parts often
            need finish grinding afterwards. For precision shafts and gear teeth, lower distortion is a major reason
            engineers favour induction.
          </p>
          <h3 className="text-2xl font-semibold mt-6">Cost</h3>
          <p>
            On a per-part basis, induction hardening can cost slightly more because each component is processed
            individually with a dedicated coil designed for its geometry. Case hardening becomes more economical at
            volume, since dozens of parts share a single, long furnace cycle and the per-piece overhead drops sharply.
            However, induction&rsquo;s short cycle times, low scrap rates from distortion, and reduced finishing work
            often close that gap for precision parts. The right choice balances batch size, material grade, tolerance,
            and the value of the finished component. When in doubt,{' '}
            <Link href="/get-quote" className="text-primary hover:underline">
              get a quote
            </Link>{' '}
            and we will recommend the most cost-effective route for your specific parts.
          </p>

          <h2 id="when-to-choose" className="text-3xl font-bold mt-12 scroll-mt-24">
            When to choose which
          </h2>
          <p>
            The choice between induction and case hardening depends on the part&rsquo;s application, material type, and
            load conditions.
          </p>
          <h3 className="text-2xl font-semibold mt-6">Choose induction hardening if:</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>You need precision hardening in specific zones (e.g., gear teeth or shaft ends).</li>
            <li>The part is made of medium or high-carbon alloy steel.</li>
            <li>You require tight tolerances and minimal distortion.</li>
          </ul>
          <h3 className="text-2xl font-semibold mt-6">Choose case hardening if:</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>The part is low-carbon steel requiring a deeper carbon-enriched case.</li>
            <li>You want bulk treatment for many components simultaneously.</li>
            <li>You need cost-efficient heat treatment for large batches.</li>
          </ul>
          <p>
            For a deeper look at controlling hardened-layer thickness, see our guide on{' '}
            <Link href="/blog/case-depth-control-in-induction-hardening" className="text-primary hover:underline">
              case depth control in induction hardening
            </Link>
            . For broader best practice, the{' '}
            <a
              href="https://www.asminternational.org/"
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="text-primary hover:underline"
            >
              ASM International
            </a>{' '}
            heat treating resources are a recognised authority.
          </p>

          <div className="my-10 not-prose rounded-lg border-2 border-primary/30 bg-primary/5 p-8">
            <h3 className="text-2xl font-bold text-foreground">
              Need case hardening or induction hardening in Ludhiana?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Get a quote from {SITE_NAME} — we run both processes in-house with polymer and water-based quenching,
              hardness testing, and case depth verification for automotive, agricultural, and industrial parts.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/case-hardening-heat-treatment">
                  Case Hardening Service <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/induction-heat-treatment">Induction Heat Treatment</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://wa.me/917900000776" rel="noopener noreferrer" target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>

          <h2 id="applications" className="text-3xl font-bold mt-12 scroll-mt-24">
            Applications in industry
          </h2>
          <div className="my-8 overflow-x-auto not-prose">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Component Type</TableHead>
                  <TableHead className="font-bold">Recommended Process</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applicationsData.map((row) => (
                  <TableRow key={row.component}>
                    <TableCell className="font-medium">{row.component}</TableCell>
                    <TableCell>{row.process}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p>
            In short, both methods strengthen steel surfaces — but induction hardening excels in precision,
            repeatability, and low distortion, while case hardening is ideal for mass treatment and deep chemical
            hardening of low-carbon parts. If you need either service in Ludhiana, Punjab, {SITE_NAME} delivers both
            with controlled quenching so your components perform at their best.
          </p>

          <h2 id="faq" className="text-3xl font-bold mt-12 scroll-mt-24">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-6">
            {faqs.map((f) => (
              <div key={f.question}>
                <h3 className="text-xl font-semibold text-foreground">{f.question}</h3>
                <p className="mt-2 text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>

          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}
