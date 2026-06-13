
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

export const metadata: Metadata = {
  title: 'How to Prevent Distortion in Induction Hardening',
  description:
    'How to prevent distortion in hardening: 7 proven levers — coil design, controlled heating, polymer quenching and fixturing — from a Ludhiana, Punjab heat-treater.',
  keywords: [
    'how to prevent distortion in hardening',
    'how to prevent distortion in induction hardening',
    'induction hardening distortion control',
    'part warping prevention',
    'heat treatment accuracy',
    'fixturing in heat treatment',
    'polymer quenching distortion',
    'induction hardening Ludhiana',
    'induction hardening Punjab',
  ],
  alternates: {
    canonical: '/blog/how-to-prevent-distortion-in-induction-hardening',
  },
  openGraph: {
    type: 'article',
    title: 'How to Prevent Distortion in Induction Hardening',
    description:
      'Seven practical ways to prevent distortion in induction hardening — coil design, controlled heating, polymer quenching and symmetrical fixturing.',
    url: '/blog/how-to-prevent-distortion-in-induction-hardening',
    siteName: SITE_NAME,
    locale: 'en_IN',
    images: [
      {
        url: '/images/images/30.png',
        width: 1200,
        height: 630,
        alt: 'How to prevent distortion in hardening — engineer measuring a hardened steel part for dimensional accuracy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Prevent Distortion in Induction Hardening',
    description:
      'Seven proven ways to prevent distortion in induction hardening and keep parts dimensionally accurate.',
    images: ['/images/images/30.png'],
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How to Prevent Distortion in Induction Hardening',
  author: { '@type': 'Organization', name: 'Thakur Industries' },
  publisher: {
    '@type': 'Organization',
    name: 'Thakur Industries',
    logo: { '@type': 'ImageObject', url: 'https://thakurindustries.in/logo.png' },
  },
  datePublished: '2026-06-13',
  dateModified: '2026-06-13',
  articleSection: 'Quality Control',
  keywords: [
    'how to prevent distortion in hardening',
    'induction hardening distortion control',
    'part warping prevention',
    'heat treatment accuracy',
    'polymer quenching',
  ],
  mainEntityOfPage: 'https://thakurindustries.in/blog/how-to-prevent-distortion-in-induction-hardening',
  image: 'https://thakurindustries.in/images/images/30.png',
  inLanguage: 'en-IN',
};

const faqs = [
  {
    question: 'What causes distortion during induction hardening?',
    answer:
      'Distortion is caused by uneven heating, steep thermal gradients and rapid cooling, which set up internal stresses inside the part. Common contributors are non-uniform heating, an incorrect quench rate, material inconsistencies and improper fixturing.',
  },
  {
    question: 'How do you prevent distortion in hardening?',
    answer:
      'You prevent distortion by controlling heat input and cooling: use a coil engineered for the part geometry, ramp temperature gradually, choose polymer quenching for a gentler cool, add preheat and temper cycles, and hold the part in symmetrical fixturing so it heats and cools evenly.',
  },
  {
    question: 'Does polymer quenching reduce distortion compared with water or oil?',
    answer:
      'Yes. A correctly mixed polymer quench gives a more controlled, gentler cooling rate than plain water, which lowers thermal stress and cracking risk while still forming a hard martensitic case.',
  },
  {
    question: 'How much distortion can be eliminated with proper process control?',
    answer:
      'With engineered coils, controlled heating and polymer quenching we have taken EN19 shafts from 0.4–0.6 mm bend after conventional furnace hardening down to under 0.05 mm runout, cutting the reject rate from 12% to 1%.',
  },
  {
    question: 'Where can I get distortion-controlled induction hardening in Ludhiana, Punjab?',
    answer:
      `${SITE_NAME} provides distortion-controlled induction hardening, polymer quenching and in-house case-depth and microhardness testing across Ludhiana and Punjab, with fast turnaround for OEM and job-work parts.`,
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const preventionMethods = [
  {
    title: 'Engineer the coil to the part geometry',
    detail:
      'A coil matched to the part’s shape delivers balanced heat flow, so no single zone overheats and warps. Custom coil design is the single biggest lever for distortion control.',
  },
  {
    title: 'Control the heating parameters',
    detail:
      'A gradual, uniform temperature rise minimizes thermal shock and steep gradients. Frequency, power density and heating time are tuned so the case reaches austenite evenly.',
  },
  {
    title: 'Use polymer quenching for a gentler cool',
    detail:
      'A controlled polymer quench cools more gently than plain water, reducing thermal stress and cracking while still forming a hard martensitic case.',
  },
  {
    title: 'Add preheating and tempering cycles',
    detail:
      'Preheating narrows the temperature gradient before hardening, and a post-quench temper relieves internal stresses that would otherwise pull the part out of shape.',
  },
  {
    title: 'Hold the part in symmetrical fixturing',
    detail:
      'Symmetrical, balanced fixturing keeps heating and cooling even around the part, preventing the localized distortion that uneven support creates.',
  },
  {
    title: 'Start with consistent, qualified material',
    detail:
      'Material inconsistencies cause uneven response to heat. Verifying composition and prior microstructure keeps results repeatable from part to part and batch to batch.',
  },
  {
    title: 'Verify with in-house testing and feedback',
    detail:
      'Measuring runout, case depth and microhardness on every batch confirms the process is in control and feeds corrections back into coil, heating and quench settings.',
  },
];

const causes = [
  { cause: 'Non-uniform heating', effect: 'Hot and cold zones expand at different rates, warping the part.' },
  { cause: 'Incorrect quench rate', effect: 'Too-fast cooling locks in steep thermal stresses and bending.' },
  { cause: 'Material inconsistencies', effect: 'Uneven composition or prior structure responds unevenly to heat.' },
  { cause: 'Improper fixturing', effect: 'Unbalanced support lets the part sag or twist as it heats and cools.' },
];

const caseStudyData = {
  surfaceHardness: '56 HRC',
  caseDepth: '3.2 mm',
  finalRunout: '<0.05 mm',
  rejectRate: 'from 12% to 1%',
};

const whyChooseData = [
  { feature: 'Advanced Induction Systems', advantage: 'Medium & high-frequency precision control' },
  { feature: 'Polymer Quenching Setup', advantage: 'Controlled cooling for distortion prevention' },
  { feature: 'Custom Coil Engineering', advantage: 'Perfect heating distribution' },
  { feature: 'In-house Testing Lab', advantage: 'Case depth & microhardness verification' },
  { feature: 'Experienced Metallurgical Team', advantage: '10+ years of process optimization' },
  { feature: 'Local Service Network', advantage: 'Fast turnaround across Punjab & NCR' },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find((img) => img.id === 'blogDistortionControl');

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={faqSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Blog', href: '/blog' },
          {
            name: 'How to Prevent Distortion in Induction Hardening',
            href: '/blog/how-to-prevent-distortion-in-induction-hardening',
          },
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
              <span className="truncate">Distortion Control</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              How to Prevent Distortion in Induction Hardening
            </h1>
            <div className="mt-4 text-sm text-muted-foreground not-prose">
              <span>By Thakur Industries Technical Team</span>
              <span className="mx-2">•</span>
              <span>Reviewed by our metallurgy team</span>
              <br />
              <span>Published June 2026</span>
              <span className="mx-2">•</span>
              <span>Updated June 2026</span>
            </div>
          </div>

          <p className="text-xl text-muted-foreground">
            <strong>
              To prevent distortion in hardening, control how heat goes in and comes out: use a coil engineered
              for the part, ramp temperature gradually, quench in polymer rather than plain water, add preheat
              and temper cycles, and hold the part in symmetrical fixturing.
            </strong>{' '}
            Together these levers keep components dimensionally accurate.
          </p>

          {featureImage && (
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
              <Image
                src={featureImage.imageUrl}
                alt="How to prevent distortion in hardening — engineer measuring a hardened steel part with calipers for dimensional accuracy"
                data-ai-hint={featureImage.imageHint}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          )}

          <p>
            Induction hardening is the go-to process for improving wear resistance and fatigue strength in steel
            components. But one of the biggest challenges engineers face is distortion — the unwanted warping or
            dimensional change that occurs during heating and quenching. At {SITE_NAME} (Ludhiana), we specialize
            in induction hardening distortion control, using process design, coil engineering and quenching
            technique to achieve uniform hardness with minimal shape deviation across Punjab.
          </p>

          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="not-prose my-8 rounded-lg border bg-secondary/40 p-6">
            <h2 className="mb-3 text-lg font-bold">On this page</h2>
            <ul className="space-y-2 text-primary">
              <li><a href="#why" className="hover:underline">Why distortion happens</a></li>
              <li><a href="#prevent" className="hover:underline">7 ways to prevent distortion</a></li>
              <li><a href="#fixturing" className="hover:underline">Fixturing &amp; process control</a></li>
              <li><a href="#case-study" className="hover:underline">Case study: EN19 shafts</a></li>
              <li><a href="#why-us" className="hover:underline">Why choose {SITE_NAME}</a></li>
              <li><a href="#faq" className="hover:underline">Frequently asked questions</a></li>
            </ul>
          </nav>

          <h2 id="why" className="text-3xl font-bold mt-12 scroll-mt-24">
            Why Distortion Happens
          </h2>
          <p>
            Distortion occurs because uneven heating, steep thermal gradients and rapid cooling set up internal
            stresses inside the metal. When one region expands or contracts faster than its neighbour, the part
            bends, twists or grows out of tolerance. The four most common causes are:
          </p>
          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Root cause</TableHead>
                  <TableHead className="font-bold">Why it distorts the part</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {causes.map((row) => (
                  <TableRow key={row.cause}>
                    <TableCell className="font-medium">{row.cause}</TableCell>
                    <TableCell>{row.effect}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p>
            Because induction hardening is localized, it already distorts far less than full-furnace methods —
            see our{' '}
            <Link href="/blog/induction-hardening-process-explained">induction hardening process guide</Link>{' '}
            for how that localization works. The remaining distortion is what disciplined process control
            removes.
          </p>

          <h2 id="prevent" className="text-3xl font-bold mt-12 scroll-mt-24">
            7 Ways to Prevent Distortion in Induction Hardening
          </h2>
          <p>
            Follow these seven steps, in order, to keep hardened parts dimensionally accurate. The first five are
            the core levers; the last two keep the process repeatable batch after batch.
          </p>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
            {preventionMethods.map((m) => (
              <li key={m.title}>
                <strong className="text-foreground">{m.title}</strong> — {m.detail}
              </li>
            ))}
          </ol>
          <p>
            Distortion and cracking share the same root cause — uncontrolled thermal stress — so the same
            discipline pays off twice. For the failure-mode angle, read{' '}
            <Link href="/blog/how-to-prevent-cracks-in-induction-hardened-components">
              how to prevent cracks in induction-hardened components
            </Link>{' '}
            and{' '}
            <Link href="/blog/preventing-soft-spots-in-induction-hardening">
              preventing soft spots in induction hardening
            </Link>
            . For the underlying metallurgy, the{' '}
            <a href="https://www.asminternational.org/" target="_blank" rel="nofollow noopener noreferrer">
              ASM International
            </a>{' '}
            heat treating resources are an authoritative reference.
          </p>

          {/* Inline contextual CTA bridge */}
          <div className="not-prose my-10 rounded-lg border border-primary/30 bg-primary/5 p-6">
            <h3 className="text-xl font-bold">Need distortion-controlled hardening in Ludhiana? Get a quote</h3>
            <p className="mt-2 text-muted-foreground">
              Send us your part drawings and steel grade — we will recommend the coil, heating and polymer-quench
              settings to hold tight tolerances, with fast turnaround across Ludhiana and Punjab.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/get-quote">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://wa.me/917900000776" target="_blank" rel="noopener noreferrer">
                  Quote on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <h2 id="fixturing" className="text-3xl font-bold mt-12 scroll-mt-24">
            Fixturing &amp; Process Control
          </h2>
          <p>
            Fixturing is where good intentions become measurable results. The part must be supported
            symmetrically so heat enters and leaves evenly — an unbalanced fixture lets a shaft sag or a gear
            twist before the case has even set. Rotating fixtures keep round parts concentric to the coil so the
            heated band stays uniform all the way around.
          </p>
          <p>
            Process control then locks those gains in. We treat the four core settings as a linked system rather
            than independent dials:
          </p>
          <div className="my-8 space-y-4">
            {preventionMethods.slice(0, 5).map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p>
            The same control that prevents distortion also protects hardness uniformity — the goal is a tough
            core with a clean, even case. See our{' '}
            <Link href="/gear-hardening">gear hardening</Link> and{' '}
            <Link href="/shaft-hardening">shaft hardening</Link> services for how we apply this to specific part
            families, and our{' '}
            <Link href="/quality-certifications">quality certifications</Link> for the testing behind every
            batch.
          </p>

          <h2 id="case-study" className="text-3xl font-bold mt-12 scroll-mt-24">
            Case Study: Distortion Control in EN19 Shafts
          </h2>
          <p>
            A Ludhiana-based automotive OEM faced recurring shaft bending of 0.4–0.6 mm after hardening on
            conventional furnaces. After switching to induction hardening at {SITE_NAME} with a custom coil,
            controlled heating and polymer quenching, the results were:
          </p>
          <div className="my-8 overflow-x-auto">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Surface Hardness</TableCell>
                  <TableCell>{caseStudyData.surfaceHardness}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Case Depth</TableCell>
                  <TableCell>{caseStudyData.caseDepth}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Final Runout</TableCell>
                  <TableCell>{caseStudyData.finalRunout}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Reject Rate Reduced</TableCell>
                  <TableCell>{caseStudyData.rejectRate}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="font-semibold text-foreground">
            <CheckCircle className="inline-block mr-2 h-5 w-5 text-green-500" /> Result: uniform hardness and
            distortion-free components ready for OEM assembly.
          </p>

          <h2 id="why-us" className="text-3xl font-bold mt-12 scroll-mt-24">
            Why Choose {SITE_NAME} for Precision Heat Treatment
          </h2>
          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Feature</TableHead>
                  <TableHead className="font-bold">Advantage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {whyChooseData.map((row) => (
                  <TableRow key={row.feature}>
                    <TableCell className="font-medium">{row.feature}</TableCell>
                    <TableCell>{row.advantage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p>
            Distortion-free induction hardening is not luck — it is science, process and control. By combining
            intelligent coil design, controlled heating parameters and polymer quenching, {SITE_NAME} delivers
            uniformly hardened, dimensionally stable parts trusted by Punjab’s top automotive and engineering
            industries.
          </p>

          <h2 id="faq" className="text-3xl font-bold mt-12 scroll-mt-24">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="mt-2 text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
            <h3 className="text-2xl font-bold">Looking for Distortion-Free Induction Hardening in Punjab?</h3>
            <p className="mt-2 text-muted-foreground">
              Partner with {SITE_NAME}, Ludhiana for precision-controlled induction hardening and polymer
              quenching with case-depth and microhardness testing on every batch.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button asChild>
                <Link href="/get-quote">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/quenching-process">Our Quenching Process</Link>
              </Button>
            </div>
          </div>
          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}
