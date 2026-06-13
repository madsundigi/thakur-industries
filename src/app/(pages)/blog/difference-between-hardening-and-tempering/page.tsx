
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

const PAGE_PATH = '/blog/difference-between-hardening-and-tempering';
const PAGE_URL = `https://thakurindustries.in${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'Difference Between Hardening and Tempering Explained',
  description:
    'The difference between hardening and tempering: hardening makes steel hard, tempering restores toughness. Heat treatment job work in Ludhiana, Punjab.',
  keywords: [
    'difference between hardening and tempering',
    'hardening vs tempering',
    'what is tempering in heat treatment',
    'why temper after hardening',
    'steel heat treatment Ludhiana',
    'heat treatment job work Punjab',
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: 'Difference Between Hardening and Tempering Explained',
    description:
      'Understand the difference between hardening and tempering — purpose, temperature, hardness and toughness. Heat treatment job work in Ludhiana, Punjab.',
    url: PAGE_URL,
    type: 'article',
    siteName: SITE_NAME,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Difference Between Hardening and Tempering Explained',
    description:
      'The difference between hardening and tempering: purpose, temperature, hardness & toughness. Heat treatment job work in Ludhiana, Punjab.',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Difference Between Hardening and Tempering',
  author: { '@type': 'Organization', name: 'Thakur Industries' },
  publisher: {
    '@type': 'Organization',
    name: 'Thakur Industries',
    logo: { '@type': 'ImageObject', url: 'https://thakurindustries.in/logo.png' },
  },
  datePublished: '2026-06-13',
  dateModified: '2026-06-13',
  articleSection: 'Heat Treatment Processes',
  keywords: [
    'difference between hardening and tempering',
    'hardening vs tempering',
    'what is tempering in heat treatment',
    'why temper after hardening',
  ],
  image: 'https://thakurindustries.in/images/images/7.png',
  mainEntityOfPage: PAGE_URL,
  inLanguage: 'en-IN',
};

const faqs = [
  {
    question: 'What is the difference between hardening and tempering?',
    answer:
      'Hardening heats steel to its critical temperature and quenches it rapidly to create a hard but brittle martensitic structure. Tempering reheats that hardened steel to a lower temperature to relieve internal stress and restore toughness. Hardening adds hardness; tempering trades a little hardness for much greater toughness.',
  },
  {
    question: 'Why is tempering done after hardening?',
    answer:
      'As-quenched hardened steel is extremely hard but brittle and full of internal stress, so it can crack or shatter under impact. Tempering reheats the part to 150–650°C to relieve those stresses and convert brittle martensite into a tougher structure, giving a usable balance of hardness and toughness.',
  },
  {
    question: 'Does tempering reduce hardness?',
    answer:
      'Yes, tempering slightly lowers hardness, but it is a controlled, deliberate trade-off. A small drop in surface hardness delivers a large gain in toughness and fatigue resistance, which is what keeps a part from cracking in service.',
  },
  {
    question: 'At what temperature is steel tempered?',
    answer:
      'Tempering is typically done between 150°C and 650°C, well below the hardening temperature of around 800–950°C. Lower tempering temperatures keep more hardness; higher tempering temperatures give more toughness. The exact value depends on the steel grade and the application.',
  },
  {
    question: 'Can Thakur Industries do hardening and tempering in Ludhiana?',
    answer:
      'Yes. Thakur Industries provides hardening and tempering job work in Ludhiana, Punjab, including induction hardening with controlled quenching and tempering, plus hardness testing for automotive, agricultural and industrial components.',
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
    aspect: 'Purpose',
    hardening: 'Make steel hard and wear-resistant',
    tempering: 'Restore toughness, relieve internal stress',
  },
  {
    aspect: 'Temperature',
    hardening: 'High (≈ 800–950°C) then quench',
    tempering: 'Lower (≈ 150–650°C), slow cool',
  },
  {
    aspect: 'Effect on hardness',
    hardening: 'Increases hardness sharply',
    tempering: 'Reduces hardness slightly',
  },
  {
    aspect: 'Effect on toughness',
    hardening: 'Lowers toughness (becomes brittle)',
    tempering: 'Increases toughness and ductility',
  },
  {
    aspect: 'When done',
    hardening: 'First — heat and quench',
    tempering: 'After hardening — reheat and cool',
  },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find((img) => img.id === 'processHardening');

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={faqSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Blog', href: '/blog' },
          { name: 'Difference Between Hardening and Tempering', href: PAGE_PATH },
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
              <span className="truncate">Difference Between Hardening and Tempering</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Difference Between Hardening and Tempering
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground not-prose">
              <span>By {SITE_NAME} Technical Team</span>
              <span aria-hidden="true">·</span>
              <span>Reviewed by our metallurgy team</span>
              <span aria-hidden="true">·</span>
              <span>Published June 2026 · Updated June 2026</span>
            </div>
            <p className="mt-4 text-xl text-muted-foreground">
              The difference between hardening and tempering is purpose: <strong>hardening</strong> heats steel and
              quenches it to make it hard but brittle, while <strong>tempering</strong> reheats that hardened steel at a
              lower temperature to relieve stress and restore toughness. Hardening adds hardness; tempering makes it
              usable.
            </p>
          </div>

          {featureImage && (
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
              <Image
                src={featureImage.imageUrl}
                alt="Difference between hardening and tempering of steel during heat treatment"
                data-ai-hint={featureImage.imageHint}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                priority
                className="object-cover"
              />
            </div>
          )}

          <p>
            If you manufacture or source steel components in Ludhiana or Punjab, knowing the difference between
            hardening and tempering helps you specify the right heat treatment — so parts are hard enough to resist
            wear yet tough enough to survive shock and fatigue without cracking.
          </p>

          <nav aria-label="Table of contents" className="my-8 not-prose rounded-lg border border-border bg-secondary/40 p-6">
            <h2 className="text-lg font-bold text-foreground">On this page</h2>
            <ul className="mt-3 space-y-2 text-primary">
              <li><a href="#quick-comparison" className="hover:underline">Quick comparison table</a></li>
              <li><a href="#what-is-hardening" className="hover:underline">What is hardening</a></li>
              <li><a href="#what-is-tempering" className="hover:underline">What is tempering</a></li>
              <li><a href="#why-both" className="hover:underline">Why both are done together</a></li>
              <li><a href="#in-induction" className="hover:underline">In induction hardening</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
          </nav>

          <h2 id="quick-comparison" className="text-3xl font-bold mt-12 scroll-mt-24">
            Quick comparison table
          </h2>
          <p>
            Here is an at-a-glance summary of the difference between hardening and tempering across the factors that
            matter most when specifying heat treatment job work.
          </p>
          <div className="my-8 overflow-x-auto not-prose">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Factor</TableHead>
                  <TableHead className="font-bold">Hardening</TableHead>
                  <TableHead className="font-bold">Tempering</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row) => (
                  <TableRow key={row.aspect}>
                    <TableCell className="font-medium">{row.aspect}</TableCell>
                    <TableCell>{row.hardening}</TableCell>
                    <TableCell>{row.tempering}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <h2 id="what-is-hardening" className="text-3xl font-bold mt-12 scroll-mt-24">
            What is hardening
          </h2>
          <p>
            Hardening is a heat treatment process that increases the hardness and wear resistance of steel. The
            component is heated above its critical (austenitizing) temperature — typically around 800–950°C depending
            on the grade — held until the structure becomes uniform austenite, and then quenched rapidly in water,
            oil, or polymer solution.
          </p>
          <p>
            The fast cooling traps carbon in the steel and forms <strong>martensite</strong>, a very hard but brittle
            microstructure. The result is a surface (or whole part) that resists abrasion and indentation, often
            reaching 55–62 HRC. The catch is that as-quenched steel is also stressed and brittle, so it can crack or
            chip under impact if used in this state.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Heat to critical temperature (austenitizing).</li>
            <li>Quench rapidly to lock in a hard martensitic structure.</li>
            <li>Outcome: maximum hardness, but high brittleness and internal stress.</li>
          </ul>
          <p>
            Steels such as EN8, EN19, EN24, 4140, and 4340 respond well to hardening. You can read how this is applied
            in practice in our{' '}
            <Link href="/blog/induction-hardening-process-explained" className="text-primary hover:underline">
              induction hardening process guide
            </Link>
            .
          </p>

          <h2 id="what-is-tempering" className="text-3xl font-bold mt-12 scroll-mt-24">
            What is tempering
          </h2>
          <p>
            Tempering is the heat treatment step that follows hardening. The already-hardened part is reheated to a
            lower temperature — usually between 150°C and 650°C — held for a controlled time, and then cooled slowly.
            This is well below the hardening temperature, so it does not re-austenitize the steel.
          </p>
          <p>
            During tempering, brittle martensite partly transforms into tougher structures, internal quenching
            stresses are relieved, and the steel becomes far less likely to crack. Hardness drops slightly, but
            toughness, ductility, and fatigue resistance rise sharply. Lower tempering temperatures keep more
            hardness; higher temperatures give more toughness, so the temperature is chosen to match the application.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Reheat the hardened part to 150–650°C.</li>
            <li>Hold to relieve stress and soften brittle martensite.</li>
            <li>Cool slowly — outcome: a tough, stable, usable part.</li>
          </ul>

          <h2 id="why-both" className="text-3xl font-bold mt-12 scroll-mt-24">
            Why both are done together
          </h2>
          <p>
            Hardening and tempering are not competing options — they are two halves of the same job, almost always
            performed in sequence. Hardening gives the steel the hardness it needs to resist wear, but leaves it
            brittle and stressed. Tempering then tunes that hardness down just enough to deliver toughness, so the
            finished component can survive real-world loads without cracking.
          </p>
          <p>
            Think of it as a balance: hardening alone makes a part that is hard but fragile; tempering alone does
            nothing without prior hardening. Together they produce the optimum combination of hardness and toughness
            for shafts, gears, axles, dies, and tooling. For tight-tolerance precision parts in Punjab&rsquo;s
            manufacturing sector, controlled tempering after hardening is what keeps components in service for years.
          </p>

          <div className="my-10 not-prose rounded-lg border-2 border-primary/30 bg-primary/5 p-8">
            <h3 className="text-2xl font-bold text-foreground">
              Need professional hardening &amp; tempering in Ludhiana?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Get a quote from {SITE_NAME} — we run hardening and tempering in-house with controlled quenching and
              hardness testing for automotive, agricultural, and industrial parts.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/heat-treatment-job-work">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
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

          <h2 id="in-induction" className="text-3xl font-bold mt-12 scroll-mt-24">
            In induction hardening
          </h2>
          <p>
            The same hardening-then-tempering logic applies to induction hardening. An induction coil heats the
            surface zone of a gear, shaft, or pin to critical temperature and it is immediately quenched, producing a
            hard martensitic case. That as-quenched case is brittle, so a low-temperature tempering step (often
            150–250°C) follows to relieve stress and improve toughness without losing meaningful surface hardness.
          </p>
          <p>
            This is why our{' '}
            <Link href="/induction-heat-treatment" className="text-primary hover:underline">
              induction heat treatment service
            </Link>{' '}
            pairs precise induction hardening with controlled tempering. To compare hardening methods, see our guide on
            the{' '}
            <Link
              href="/blog/difference-between-induction-and-case-hardening"
              className="text-primary hover:underline"
            >
              difference between induction and case hardening
            </Link>
            . For recognised best practice, the{' '}
            <a
              href="https://www.asminternational.org/"
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="text-primary hover:underline"
            >
              ASM International
            </a>{' '}
            heat treating resources are an authoritative reference. Questions about your specific parts? Reach our team
            on the{' '}
            <Link href="/contact" className="text-primary hover:underline">
              contact page
            </Link>
            .
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
