
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SITE_NAME } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

const PAGE_PATH = '/blog/case-depth-control-in-induction-hardening';
const PAGE_URL = `https://thakurindustries.in${PAGE_PATH}`;
const PAGE_IMAGE = 'https://thakurindustries.in/images/images/20.png';
const DATE_PUBLISHED = '2026-06-13';
const DATE_MODIFIED = '2026-06-13';

export const metadata: Metadata = {
  title: 'Case Depth in Induction Hardening: Control & Measurement',
  description:
    'Case depth in induction hardening controls gear and shaft life. See typical mm ranges, how we control frequency, power and time, and how we measure it in Ludhiana, Punjab.',
  keywords: [
    'case depth in induction hardening',
    'case depth control induction hardening',
    'effective case depth measurement',
    'induction hardening case depth gears',
    'induction hardening Ludhiana Punjab',
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    type: 'article',
    title: 'Case Depth in Induction Hardening: Control & Measurement',
    description:
      'Typical case depth ranges by component, how we control frequency, power and time, and how we measure effective case depth — induction hardening in Ludhiana, Punjab.',
    url: PAGE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    images: [{ url: PAGE_IMAGE, width: 1200, height: 630, alt: 'Case depth in induction hardening cross-section of a hardened gear tooth' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Depth in Induction Hardening: Control & Measurement',
    description:
      'Typical case depth ranges, control parameters, and measurement methods for induction hardening — Ludhiana, Punjab.',
    images: [PAGE_IMAGE],
  },
};

const rangeData = [
  { component: 'Spur & helical gears', range: '0.8 – 2.0 mm', hardness: '55 – 60 HRC', note: 'Tooth flank wear & pitting resistance' },
  { component: 'Transmission shafts', range: '1.5 – 3.0 mm', hardness: '54 – 58 HRC', note: 'Torsional fatigue strength' },
  { component: 'Axles & spline shafts', range: '2.0 – 4.0 mm', hardness: '54 – 58 HRC', note: 'Bending & contact fatigue' },
  { component: 'Crankshafts (journals)', range: '3.0 – 6.0 mm', hardness: '52 – 56 HRC', note: 'Heavy cyclic bearing loads' },
  { component: 'Pins, rollers & small parts', range: '0.5 – 1.5 mm', hardness: '58 – 62 HRC', note: 'Shallow, hard wear surface' },
];

const faqs = [
  {
    q: 'What is case depth in induction hardening?',
    a: 'Case depth in induction hardening is the thickness of the hardened surface layer measured from the surface inward to a defined hardness limit. Effective case depth is the perpendicular distance from the surface to the point where hardness drops to a specified value, usually 50 HRC (about 513 HV) for steels.',
  },
  {
    q: 'What case depth is typical for gears?',
    a: 'Most automotive and industrial gears use an effective case depth of 0.8 – 2.0 mm at 55 – 60 HRC. The exact value depends on tooth module, load, and material such as EN8, EN19, EN24 or 20MnCr5.',
  },
  {
    q: 'How is case depth controlled in induction hardening?',
    a: 'Case depth is controlled mainly by induction frequency, power density, and heating time. Lower frequencies and longer heat times push heat deeper for thicker cases, while higher frequencies and short cycles produce shallow, hard surfaces. Quench rate and coil-to-part coupling fine-tune the result.',
  },
  {
    q: 'How do you measure effective case depth?',
    a: 'We section the part, mount and polish it, then run a microhardness traverse (Vickers HV0.5 or HV1) from the surface inward. The depth at which hardness falls to the specified limit, typically 50 HRC, is reported as the effective case depth, supported by metallographic etching of the case profile.',
  },
  {
    q: 'Does deeper case depth always mean a better part?',
    a: 'No. Excessive case depth increases distortion, residual stress, and the risk of through-hardening the tooth core, which reduces toughness. The goal is a hardened case that is matched to the load with a tough, ductile core underneath.',
  },
];

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Case Depth in Induction Hardening: Control & Measurement',
  description:
    'Typical case depth ranges by component, how case depth is controlled through frequency, power and time, and how effective case depth is measured.',
  image: PAGE_IMAGE,
  author: { '@type': 'Organization', name: SITE_NAME, url: 'https://thakurindustries.in' },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: { '@type': 'ImageObject', url: 'https://thakurindustries.in/logo.png' },
  },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  articleSection: 'Quality Control',
  keywords: [
    'case depth in induction hardening',
    'case depth control',
    'effective case depth measurement',
    'induction hardening Ludhiana Punjab',
  ],
  mainEntityOfPage: PAGE_URL,
  inLanguage: 'en-IN',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thakurindustries.in/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://thakurindustries.in/blog' },
    { '@type': 'ListItem', position: 3, name: 'Case Depth in Induction Hardening', item: PAGE_URL },
  ],
};

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find((img) => img.id === 'blogCaseDepth');

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
              <span className="truncate">Case Depth in Induction Hardening</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Case Depth in Induction Hardening
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              How to specify, control, and measure the hardened layer on gears, shafts, and crankshafts — with typical mm ranges and the parameters that drive them.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground not-prose">
              <span>By the {SITE_NAME} Metallurgical Team</span>
              <span aria-hidden="true">·</span>
              <span>Reviewed by the QC &amp; Heat-Treatment Desk</span>
              <span aria-hidden="true">·</span>
              <span>Published 13 June 2026</span>
              <span aria-hidden="true">·</span>
              <span>Updated 13 June 2026</span>
            </div>
          </div>

          {featureImage && (
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
              <Image
                src={featureImage.imageUrl}
                alt="Case depth in induction hardening shown as a hardened layer cross-section on a gear tooth"
                data-ai-hint={featureImage.imageHint}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          )}

          <p className="lead">
            <strong>Case depth in induction hardening</strong> is the thickness of the hardened surface layer, measured from the
            surface inward to a defined hardness limit — usually 50 HRC. It decides how a gear or shaft resists wear and fatigue
            while the core stays tough. Get it right and parts last; get it wrong and they crack or wear out early.
          </p>

          <nav className="not-prose my-8 rounded-lg border bg-secondary/40 p-6" aria-label="Table of contents">
            <h2 className="text-lg font-bold mb-3">On this page</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#what-is-case-depth" className="hover:text-primary">What is case depth?</a></li>
              <li><a href="#typical-ranges" className="hover:text-primary">Typical case depth ranges by component</a></li>
              <li><a href="#how-we-control" className="hover:text-primary">How we control it: frequency, power, time</a></li>
              <li><a href="#measuring" className="hover:text-primary">Measuring case depth</a></li>
              <li><a href="#faq" className="hover:text-primary">Frequently asked questions</a></li>
            </ul>
          </nav>

          <h2 id="what-is-case-depth" className="text-3xl font-bold mt-12">What is case depth?</h2>
          <p>
            Case depth refers to the depth of the hardened layer (the case) produced on a steel component during induction
            hardening. During the process an electromagnetic coil rapidly heats the surface of the part to roughly 850–950°C, and an
            immediate quench transforms that heated skin into hard martensite while the core below stays soft and ductile.
          </p>
          <p>
            Engineers distinguish two figures. <strong>Total case depth</strong> is the full distance from the surface to the
            unaffected core. <strong>Effective case depth</strong> — the value most drawings specify — is the perpendicular
            distance from the surface to the point where hardness drops to a defined limit, typically 50 HRC (about 513 HV) for
            steels. At {SITE_NAME} in Ludhiana, we work to the effective case depth and hardness band stated on your component
            drawing or OEM standard.
          </p>

          <h2 id="typical-ranges" className="text-3xl font-bold mt-12">Typical case depth ranges by component</h2>
          <p>
            Case depth is always matched to the load case and tooth or section size. The table below gives the practical effective
            case depth ranges we see most often across automotive, agricultural, and industrial work in Punjab. Treat these as
            starting points — your drawing or application engineer has the final word.
          </p>
          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2 pr-4 font-semibold">Component</th>
                  <th className="py-2 pr-4 font-semibold">Typical case depth</th>
                  <th className="py-2 pr-4 font-semibold">Surface hardness</th>
                  <th className="py-2 font-semibold">Why this range</th>
                </tr>
              </thead>
              <tbody>
                {rangeData.map((row) => (
                  <tr key={row.component} className="border-b align-top">
                    <td className="py-2 pr-4 font-medium">{row.component}</td>
                    <td className="py-2 pr-4">{row.range}</td>
                    <td className="py-2 pr-4">{row.hardness}</td>
                    <td className="py-2">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            As a rule of thumb for gears, the effective case depth is kept below roughly one-quarter of the tooth thickness to avoid
            through-hardening the tooth, which would rob it of core toughness. For deeper-loaded shafts and{' '}
            <Link href="/shaft-hardening">induction-hardened shafts</Link>, lower frequencies carry heat further in for the thicker
            cases shown above.
          </p>

          <h2 id="how-we-control" className="text-3xl font-bold mt-12">How we control it: frequency, power, and time</h2>
          <p>
            Case depth is not set by one dial — it is the result of three coupled parameters working together. We tune them on
            PLC-controlled, medium-frequency induction systems so every batch repeats.
          </p>
          <h3 className="text-2xl font-semibold mt-6">1. Frequency</h3>
          <p>
            Frequency sets how deep the eddy currents — and therefore the heat — penetrate. Lower frequencies (1–10 kHz) drive heat
            deep for thick cases on shafts, axles, and crankshafts; medium frequencies (10–100 kHz) suit gears and rollers; high
            frequencies (100–500 kHz) give shallow, hard cases on small precision parts.
          </p>
          <h3 className="text-2xl font-semibold mt-6">2. Power density</h3>
          <p>
            Power density (kW per unit of surface area) controls how fast the surface reaches austenitising temperature. High power
            with a short dwell concentrates heat near the surface for a shallow case; moderate power allows heat to conduct inward
            for a deeper case before quenching.
          </p>
          <h3 className="text-2xl font-semibold mt-6">3. Heating time</h3>
          <p>
            Heat time governs how long conduction carries heat below the skin. Longer cycles deepen the case; shorter cycles keep it
            shallow. Coil-to-part coupling, scan speed, and the quench rate then fine-tune the martensite profile so the case is both
            the right depth and the right hardness.
          </p>

          <h2 id="measuring" className="text-3xl font-bold mt-12">Measuring case depth</h2>
          <p>
            A specified case depth is only meaningful if it is verified. Our quality lab confirms case depth on sample parts using a
            repeatable, standards-based routine:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground my-4">
            <li><strong>Sectioning &amp; mounting</strong> — the part is cut perpendicular to the hardened surface, then mounted and polished to a mirror finish.</li>
            <li><strong>Microhardness traverse</strong> — a Vickers indenter (HV0.5 or HV1) takes a line of readings from the surface inward; the depth at which hardness falls to the specified limit, usually 50 HRC, is the effective case depth.</li>
            <li><strong>Metallographic verification</strong> — the section is etched so the case profile and martensitic structure can be examined and photographed for the report.</li>
            <li><strong>Surface hardness check</strong> — Rockwell C readings confirm the case meets the HRC band on the drawing.</li>
          </ul>
          <p>
            Each component family ships with a hardness-and-case-depth record. For documented, traceable results see our{' '}
            <Link href="/quality-certifications">quality certifications</Link>, which cover the test methods and standards we work
            to. For the wider workflow, our guide on the{' '}
            <Link href="/blog/induction-hardening-process-explained">induction hardening process</Link> walks through heating,
            quenching, and tempering step by step.
          </p>

          <div className="not-prose my-12 rounded-lg border-2 border-primary/30 bg-primary/5 p-8">
            <h3 className="text-2xl font-bold">Need a specific case depth on your components in Ludhiana?</h3>
            <p className="mt-2 text-muted-foreground">
              Send us your component, material, and the effective case depth and hardness band you require. We will confirm the
              process window and a documented inspection plan.
            </p>
            <div className="mt-6 flex flex-wrap justify-start gap-4">
              <Button asChild>
                <Link href="/get-quote">Get a quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://wa.me/917900000776" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>
          </div>

          <h2 id="faq" className="text-3xl font-bold mt-12">Frequently asked questions</h2>
          <div className="space-y-6 mt-4">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-xl font-semibold">{f.q}</h3>
                <p className="mt-2 text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mt-12">Related services and reading</h2>
          <p>
            Explore the work behind these case depths: <Link href="/gear-hardening">induction gear hardening</Link> and{' '}
            <Link href="/shaft-hardening">shaft hardening</Link>. Ready to discuss your part? Head to{' '}
            <Link href="/get-quote">get a quote</Link>. To go deeper on metallurgy, see the{' '}
            <Link href="/blog/induction-hardening-process-explained">induction hardening process explained</Link>. The{' '}
            <a href="https://www.asminternational.org/" target="_blank" rel="nofollow noopener noreferrer">ASM International</a>{' '}
            handbooks remain the authoritative reference on effective case depth and hardness-traverse methods.
          </p>

          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}
