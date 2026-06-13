
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, MessageCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

const PAGE_PATH = '/blog/how-to-prevent-cracks-in-induction-hardened-components';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const DATE_PUBLISHED = '2025-11-20';
const DATE_MODIFIED = '2026-06-13';

export const metadata: Metadata = {
  title: 'How to Prevent Cracks in Induction Hardening',
  description:
    'How to prevent cracks in induction hardening: control preheat, quench rate, material and geometry. Crack-free job work in Ludhiana, Punjab.',
  keywords: [
    'how to prevent cracks in induction hardening',
    'crack prevention in induction hardening',
    'quench cracking induction hardening',
    'surface stress control',
    'induction hardening Ludhiana',
    'heat treatment Punjab',
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: 'How to Prevent Cracks in Induction Hardening',
    description:
      'A practical cause-to-fix guide to prevent cracks in induction hardening, from preheat and quench control to material and geometry. Ludhiana, Punjab.',
    url: PAGE_URL,
    type: 'article',
    locale: 'en_IN',
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Prevent Cracks in Induction Hardening',
    description:
      'Control preheat, quench rate, material and geometry to stop quench cracking. Crack-free induction hardening in Ludhiana, Punjab.',
  },
};

const crackCauses = [
  { cause: 'Overheating beyond the critical temperature', effect: 'Grain coarsening and brittle surface layer' },
  { cause: 'Too rapid quenching', effect: 'Thermal shock and micro-cracks' },
  { cause: 'High carbon or alloy steel without tempering', effect: 'Brittle martensite formation' },
  { cause: 'Sharp edges or geometry transitions', effect: 'Localized stress concentration' },
  { cause: 'Non-uniform heating or cooling', effect: 'Uneven case depth and residual stress' },
];

const quenchingParams = [
  { parameter: 'Quench Type', strategy: 'Polymer (8–12%) preferred over water' },
  { parameter: 'Flow Rate', strategy: 'Uniform, 5–8 L/min per nozzle' },
  { parameter: 'Quench Angle', strategy: '360° surround for shafts and gears' },
  { parameter: 'Temperature Control', strategy: 'Quench temperature maintained between 25–35°C' },
  { parameter: 'Agitation', strategy: 'Continuous flow to avoid vapor blanket formation' },
];

const faqs = [
  {
    question: 'Why do cracks form during induction hardening?',
    answer:
      'Cracks form when the stress from rapid heating and quenching exceeds the steel’s tensile strength. The hot surface contracts faster than the cooler core, and the volume change as austenite transforms to martensite adds further stress. Overheating, over-aggressive quenching, high-carbon steel without tempering and sharp geometry all raise the risk.',
  },
  {
    question: 'Does preheating prevent cracking?',
    answer:
      'Yes. A controlled, gradual heating ramp lowers the thermal gradient between surface and core, so contraction is more even and residual stress is reduced. For high-carbon and alloy grades, preheat combined with prompt tempering is one of the most effective ways to avoid quench cracks.',
  },
  {
    question: 'Which quench medium is least likely to cause cracks?',
    answer:
      'A polymer quench at 8–12% concentration, held at 25–35°C with uniform flow, cools more gently than plain water and greatly reduces thermal shock. Water quenching extracts heat too aggressively for many alloy steels and is a common cause of quench cracking.',
  },
  {
    question: 'Can cracked induction-hardened parts be repaired?',
    answer:
      'Quench cracks are through the hardened case and cannot be reliably repaired; the part should be rejected. The right approach is prevention through controlled heating, optimised quenching, prompt tempering and 100% magnetic-particle or dye-penetrant inspection before dispatch.',
  },
];

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How to Prevent Cracks in Induction Hardening',
  description:
    'A practical cause-to-fix guide to prevent cracks in induction hardening, covering preheat, quench control, material and geometry factors, plus a prevention checklist.',
  image: `${SITE_URL}/images/images/40.png`,
  author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
  },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  articleSection: 'Quality Control',
  keywords: [
    'how to prevent cracks in induction hardening',
    'crack prevention in induction hardening',
    'quench cracking',
    'surface stress control',
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
    { '@type': 'ListItem', position: 3, name: 'How to Prevent Cracks in Induction Hardening', item: PAGE_URL },
  ],
};

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find((img) => img.id === 'blogCracks');

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
              <span className="truncate">How to Prevent Cracks in Induction Hardening</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              How to Prevent Cracks in Induction Hardening
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              <span>
                By <span className="font-medium text-foreground">{SITE_NAME} Heat Treatment Team</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>Reviewed by the Process Metallurgy Desk</span>
              <span aria-hidden="true">·</span>
              <span>Published 20 November 2025</span>
              <span aria-hidden="true">·</span>
              <span>Updated 13 June 2026</span>
            </div>
          </div>

          {/* Answer-first lead */}
          <p className="lead text-xl">
            To prevent cracks in induction hardening, control the full cycle: preheat to cut the thermal gradient, hold
            heat below grain-coarsening limits, quench with polymer at a controlled rate and temperature, then temper
            promptly. Match the process to the steel grade and ease sharp geometry that concentrates stress. At{' '}
            {SITE_NAME}, Ludhiana, every part is inspected for micro-cracks before dispatch.
          </p>

          {featureImage && (
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
              <Image
                src={featureImage.imageUrl}
                alt="How to prevent cracks in induction hardening — close-up of a metal surface with micro-cracks"
                data-ai-hint={featureImage.imageHint}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          )}

          {/* Table of contents */}
          <nav aria-label="Table of contents" className="not-prose rounded-lg border bg-secondary/40 p-6 my-8">
            <h2 className="text-lg font-bold mb-3">On this page</h2>
            <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
              <li><a href="#why-cracks-form" className="hover:text-primary">Why cracks form</a></li>
              <li><a href="#preheat-quench-control" className="hover:text-primary">Preheat & quench control</a></li>
              <li><a href="#material-geometry" className="hover:text-primary">Material & geometry factors</a></li>
              <li><a href="#prevention-checklist" className="hover:text-primary">Prevention checklist</a></li>
              <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
            </ol>
          </nav>

          <p>
            Induction hardening gives components high surface hardness and excellent wear resistance, but its biggest
            quality risk is surface cracking — fine fractures that appear after heat treatment or during service.
            These cracks usually stem from thermal shock, residual stress or an over-aggressive quench, and they can
            cause premature failure of shafts, gears and other critical parts. The good news: every cause has a
            corresponding fix.
          </p>

          {/* Snippet play: numbered cause -> fix list */}
          <h2 id="quick-fixes" className="text-3xl font-bold mt-12">Crack causes and their fixes (quick reference)</h2>
          <p>Use this numbered cause-to-fix list as a fast diagnostic when you see cracking:</p>
          <ol className="list-decimal list-inside space-y-3">
            <li><strong>Cause:</strong> Overheating past the critical temperature. <strong>Fix:</strong> Use closed-loop power and time control to hold the austenitising window and avoid grain coarsening.</li>
            <li><strong>Cause:</strong> Too rapid a quench. <strong>Fix:</strong> Switch from water to a polymer quench (8–12%) at a controlled 25–35°C to soften the cooling shock.</li>
            <li><strong>Cause:</strong> High-carbon or alloy steel left untempered. <strong>Fix:</strong> Temper promptly at 150–200°C to relieve residual stress before micro-cracks propagate.</li>
            <li><strong>Cause:</strong> Sharp edges and abrupt section changes. <strong>Fix:</strong> Add generous fillet radii and de-burr edges to spread stress instead of concentrating it.</li>
            <li><strong>Cause:</strong> Non-uniform heating or cooling. <strong>Fix:</strong> Use a coil designed for the part geometry and a 360° quench for even case depth.</li>
          </ol>

          <h2 id="why-cracks-form" className="text-3xl font-bold mt-12">Why cracks form during induction hardening</h2>
          <p>
            Cracking occurs when the stresses from rapid heating and cooling exceed the metal’s tensile strength. The
            sudden temperature difference between the hot surface and the cooler core drives uneven expansion and
            contraction, while the volume change as austenite transforms to martensite adds further stress. Here are
            the main causes and their effects:
          </p>
          <Table className="my-8">
            <TableHeader>
              <TableRow>
                <TableHead>Cause</TableHead>
                <TableHead>Effect</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {crackCauses.map((item) => (
                <TableRow key={item.cause}>
                  <TableCell className="font-medium">{item.cause}</TableCell>
                  <TableCell>{item.effect}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p>
            Controlling each stage — heating, holding and quenching — is essential for crack-free results. Cracking is
            closely related to its sister defect, distortion; our guide on{' '}
            <Link href="/blog/how-to-prevent-distortion-in-induction-hardening">how to prevent distortion in induction hardening</Link>{' '}
            covers the stress side of the same problem.
          </p>

          <h2 id="preheat-quench-control" className="text-3xl font-bold mt-12">Preheat & quench control</h2>
          <p>
            Heating and quenching are where most cracks are won or lost. A gradual, controlled heating ramp — set with
            programmable power and time — keeps the surface-to-core gradient low so contraction is even. For
            crack-prone grades, a short preheat further reduces thermal shock before the part reaches its
            austenitising temperature.
          </p>
          <p>
            Quenching is the single most critical stage for crack control. At {SITE_NAME}, we follow strict quench
            management protocols:
          </p>
          <Table className="my-8">
            <TableHeader>
              <TableRow>
                <TableHead>Parameter</TableHead>
                <TableHead>Control Strategy</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quenchingParams.map((item) => (
                <TableRow key={item.parameter}>
                  <TableCell className="font-medium">{item.parameter}</TableCell>
                  <TableCell>{item.strategy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p>
            Consistent cooling prevents uneven contraction and residual-stress build-up. The choice of medium matters:
            see{' '}
            <Link href="/blog/polymer-vs-water-quenching">polymer vs water quenching</Link>{' '}
            for why a controlled polymer quench is gentler than plain water for most alloy steels.
          </p>

          <h2 id="material-geometry" className="text-3xl font-bold mt-12">Material & geometry factors</h2>
          <p>
            Even a perfect heating and quenching cycle can crack the wrong part. Two factors decide how much margin you
            have before the steel reaches its limit:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Material chemistry:</span> Higher carbon and alloy content (EN24/4340,
                high-carbon grades) form harder, more brittle martensite that is more prone to quench cracking. These
                grades demand a gentler quench and prompt tempering.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Geometry and stress raisers:</span> Sharp corners, keyways, oil holes
                and abrupt section changes concentrate stress and become crack initiation sites. Generous fillet radii
                and clean, de-burred edges spread the load.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold">Prior condition:</span> Decarburised, contaminated or already-stressed
                surfaces crack more easily. Clean parts and a stress-relieved starting condition improve every result.
              </div>
            </li>
          </ul>
          <p>
            We tune the process for the part: precision shafts and axles run through our{' '}
            <Link href="/shaft-hardening">shaft hardening</Link> line, while teeth-critical work runs on our{' '}
            <Link href="/gear-hardening">gear hardening</Link> line, each with geometry-matched coils and quench
            setups.
          </p>

          {/* Inline conversion bridge */}
          <div className="not-prose my-10 rounded-lg border border-primary/30 bg-primary/5 p-6">
            <h3 className="text-xl font-bold">Need crack-free induction hardening in Ludhiana? Get a quote</h3>
            <p className="mt-2 text-muted-foreground">
              Share your drawing and steel grade — our team at {SITE_NAME}, Ludhiana will recommend the right quench,
              tempering and inspection plan for crack-free parts.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/get-quote">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://wa.me/917900000776" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
                </a>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/quality-certifications">View Quality & Certifications</Link>
              </Button>
            </div>
          </div>

          <h2 id="prevention-checklist" className="text-3xl font-bold mt-12">Prevention checklist</h2>
          <p>Run through this numbered checklist on every crack-sensitive job at {SITE_NAME}:</p>
          <ol className="list-decimal list-inside space-y-3">
            <li><strong>Controlled heating rate</strong> — gradual, programmable power and time to cut thermal stress.</li>
            <li><strong>Geometry-matched coil design</strong> — even energy distribution across the part profile.</li>
            <li><strong>Optimised quench</strong> — polymer for sensitive grades, multi-zone or 360° spray for larger parts.</li>
            <li><strong>Prompt tempering</strong> — 150–200°C to relieve residual stress and avoid delayed cracking.</li>
            <li><strong>100% inspection</strong> — magnetic-particle or dye-penetrant testing to catch micro-cracks before dispatch.</li>
          </ol>
          <p>
            For a related failure mode driven by uneven heating, see{' '}
            <Link href="/blog/preventing-soft-spots-in-induction-hardening">preventing soft spots in induction hardening</Link>.
            Crack-free results come from engineering discipline backed by verified{' '}
            <Link href="/quality-certifications">quality certifications</Link> — not trial and error.
          </p>

          <h2 id="faq" className="text-3xl font-bold mt-12">Frequently asked questions</h2>
          <div className="space-y-6 mt-6">
            {faqs.map((f) => (
              <div key={f.question}>
                <h3 className="text-xl font-semibold">{f.question}</h3>
                <p className="mt-2 text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mt-12">Conclusion: precision is the best crack prevention</h2>
          <p>
            Preventing cracks in induction hardening is about complete process control, not quenching alone. From coil
            design and a controlled heating ramp to quench management, prompt tempering and final inspection, every
            step must work together. At {SITE_NAME}, we have perfected this balance to deliver crack-free,
            distortion-free, high-performance components to manufacturers across Ludhiana and Punjab. For authoritative
            background on quench cracking and residual stress, the{' '}
            <a href="https://www.asminternational.org/" target="_blank" rel="nofollow noopener noreferrer">ASM International</a>{' '}
            heat-treating references are an excellent resource.
          </p>

          <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
            <h3 className="text-2xl font-bold">Facing cracks or distortion in your components?</h3>
            <p className="mt-2 text-muted-foreground">
              Partner with {SITE_NAME}, Ludhiana — specialists in surface stress control, polymer quenching and
              advanced heat treatment services.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button asChild>
                <Link href="/get-quote">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/quality-certifications">Quality & Certifications</Link>
              </Button>
            </div>
          </div>
          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}
