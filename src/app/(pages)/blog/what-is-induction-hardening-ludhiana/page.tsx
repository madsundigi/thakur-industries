
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

export const metadata: Metadata = {
  title: 'What Is Induction Hardening? Process, Uses & Benefits',
  description:
    'What is induction hardening? A surface heat treatment that hardens steel using electromagnetic induction — the process, uses & benefits, trusted across Ludhiana, Punjab.',
  keywords: [
    'what is induction hardening',
    'induction hardening',
    'induction hardening process',
    'surface hardening',
    'induction heat treatment',
    'induction hardening Ludhiana',
    'induction hardening Punjab',
    'gear hardening',
    'shaft hardening',
  ],
  alternates: {
    canonical: '/blog/what-is-induction-hardening-ludhiana',
  },
  openGraph: {
    type: 'article',
    title: 'What Is Induction Hardening? Process, Uses & Benefits',
    description:
      'A clear definition of induction hardening — how the process works, where it is used, and its key benefits for gears, shafts and crankshafts.',
    url: '/blog/what-is-induction-hardening-ludhiana',
    siteName: SITE_NAME,
    locale: 'en_IN',
    images: [
      {
        url: '/images/images/62.png',
        width: 1200,
        height: 630,
        alt: 'What is induction hardening — glowing steel component inside an induction coil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Induction Hardening? Process, Uses & Benefits',
    description:
      'A clear definition of induction hardening — how it works, where it is used, and its key benefits.',
    images: ['/images/images/62.png'],
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What Is Induction Hardening? Process, Uses & Benefits',
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
    'what is induction hardening',
    'induction hardening',
    'induction hardening process',
    'surface hardening',
    'induction heat treatment',
  ],
  mainEntityOfPage: 'https://thakurindustries.in/blog/what-is-induction-hardening-ludhiana',
  image: 'https://thakurindustries.in/images/images/62.png',
  inLanguage: 'en-IN',
};

const faqs = [
  {
    question: 'What is induction hardening in simple terms?',
    answer:
      'Induction hardening is a surface heat treatment that uses electromagnetic induction to rapidly heat the outer layer of a steel component, followed by quenching. This creates a hard, wear-resistant surface while the core stays tough and ductile.',
  },
  {
    question: 'What materials can be induction hardened?',
    answer:
      'Medium-carbon and alloy steels respond best — common grades include EN8, EN19 (4140), EN24 (4340), 4150 and 20MnCr5. The steel needs enough carbon (typically 0.30% or more) to form hard martensite during quenching.',
  },
  {
    question: 'How hard does induction hardening make steel?',
    answer:
      'Surface hardness typically reaches 50–60 HRC depending on the steel grade and process settings, with case depths ranging from under 1 mm to around 10 mm controlled by the induction frequency.',
  },
  {
    question: 'How is induction hardening different from carburizing or flame hardening?',
    answer:
      'Carburizing adds carbon to low-carbon steel inside a furnace and is slow; flame hardening uses an open gas flame and is harder to control. Induction hardening is faster, cleaner, highly localized and far more repeatable.',
  },
  {
    question: 'Where can I get induction hardening done in Ludhiana, Punjab?',
    answer:
      `${SITE_NAME} provides induction hardening, gear hardening, shaft hardening and surface heat treatment job work across Ludhiana and Punjab, with hardness and case-depth testing on every batch.`,
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

const frequencyData = [
  { frequency: 'Low (1–10 kHz)', depth: 'Deep case (3–10 mm)', application: 'Shafts, axles, crankshafts' },
  { frequency: 'Medium (10–100 kHz)', depth: 'Moderate case (1–5 mm)', application: 'Gears, rollers, pins' },
  { frequency: 'High (100–500 kHz)', depth: 'Shallow case (<2 mm)', application: 'Small precision parts' },
];

const methodComparison = [
  {
    method: 'Induction hardening',
    heat: 'Electromagnetic induction, localized',
    speed: 'Seconds per part',
    distortion: 'Minimal',
    best: 'Gears, shafts, crankshafts, mass production',
  },
  {
    method: 'Flame hardening',
    heat: 'Open oxy-gas flame',
    speed: 'Slower, manual',
    distortion: 'Moderate',
    best: 'Large, low-volume parts',
  },
  {
    method: 'Carburizing (case hardening)',
    heat: 'Furnace + carbon diffusion',
    speed: 'Hours',
    distortion: 'Higher (full heating)',
    best: 'Low-carbon steels needing deep case',
  },
  {
    method: 'Through hardening',
    heat: 'Full-body furnace heating',
    speed: 'Hours',
    distortion: 'Highest',
    best: 'Parts needing uniform core hardness',
  },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find((img) => img.id === 'blogPost1');
  const processImage = PlaceHolderImages.find((img) => img.id === 'blogInductionHeatingWorks');

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={faqSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Blog', href: '/blog' },
          { name: 'What Is Induction Hardening', href: '/blog/what-is-induction-hardening-ludhiana' },
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
              <span className="truncate">What Is Induction Hardening</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              What Is Induction Hardening?
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
              Induction hardening is a surface heat treatment process that uses electromagnetic induction to
              rapidly heat the outer layer of a steel component, then quenches it to create a hard,
              wear-resistant case.
            </strong>{' '}
            The tough inner core is left untouched, so the part resists wear on the surface yet stays strong
            and shock-resistant inside.
          </p>

          {featureImage && (
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
              <Image
                src={featureImage.imageUrl}
                alt="What is induction hardening — glowing steel gear being heated inside a copper induction coil"
                data-ai-hint={featureImage.imageHint}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          )}

          <p>
            From gears and shafts to crankshafts and pins, manufacturers across Ludhiana and Punjab rely on
            induction hardening to boost durability, wear resistance and fatigue life without making the whole
            component brittle. Below we define exactly what induction hardening is, explain how the process
            works step by step, show where it is used, list its key benefits, and compare it with other
            hardening methods.
          </p>

          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="not-prose my-8 rounded-lg border bg-secondary/40 p-6">
            <h2 className="mb-3 text-lg font-bold">On this page</h2>
            <ul className="space-y-2 text-primary">
              <li><a href="#how-it-works" className="hover:underline">How induction hardening works</a></li>
              <li><a href="#where-used" className="hover:underline">Where induction hardening is used</a></li>
              <li><a href="#benefits" className="hover:underline">Key benefits of induction hardening</a></li>
              <li><a href="#comparison" className="hover:underline">Induction vs other hardening methods</a></li>
              <li><a href="#faq" className="hover:underline">Frequently asked questions</a></li>
            </ul>
          </nav>

          <h2 id="how-it-works" className="text-3xl font-bold mt-12 scroll-mt-24">
            How Induction Hardening Works
          </h2>
          <p>
            Induction hardening works by passing a high-frequency alternating current through a shaped copper{' '}
            coil placed around the component. The coil generates a fluctuating magnetic field that induces eddy
            currents in the steel surface, heating it to its austenitizing temperature (usually 850°C–950°C)
            within seconds. The heated layer is then quenched almost instantly. The process has three core
            stages:
          </p>

          {processImage && (
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg my-8">
              <Image
                src={processImage.imageUrl}
                alt="How induction hardening works — eddy currents heating a steel shaft surface inside an induction coil"
                data-ai-hint={processImage.imageHint}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          )}

          <h3 className="text-2xl font-semibold mt-6">1. Induction heating</h3>
          <p>
            The component sits inside a copper induction coil. As high-frequency current flows through the
            coil, eddy currents form on the part’s surface and heat it rapidly. The power frequency controls
            how deep the heat penetrates, the heating time sets the surface temperature, and the coil design
            ensures even heat distribution. At {SITE_NAME} in Ludhiana, medium- and high-frequency machines
            deliver precise, uniform heating for grades such as EN8, EN19, EN24 and 4340.
          </p>

          <h3 className="text-2xl font-semibold mt-6">2. Quenching (rapid cooling)</h3>
          <p>
            The moment target temperature is reached, the surface is quenched with a water or polymer solution.
            Cooling is so fast that the austenitic structure transforms into hard martensite, producing surface
            hardness of roughly 50–60 HRC. Water quenching gives the deepest, hardest case for tough steels,
            while polymer quenching offers controlled cooling with minimal distortion for precision parts.
          </p>

          <h3 className="text-2xl font-semibold mt-6">3. Tempering (optional but recommended)</h3>
          <p>
            A light reheat to roughly 150°C–250°C relieves internal stress, reduces brittleness and improves
            toughness and fatigue resistance. Tempering is especially valuable for gears and shafts that run
            under heavy, repeated loads.
          </p>

          <h3 className="text-2xl font-semibold mt-6">Frequency selection and case depth</h3>
          <p>
            The induction frequency is what controls how deeply the hardened case forms, so it is matched to
            the part being treated.
          </p>
          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Frequency Type</TableHead>
                  <TableHead className="font-bold">Depth of Hardening</TableHead>
                  <TableHead className="font-bold">Typical Application</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {frequencyData.map((row) => (
                  <TableRow key={row.frequency}>
                    <TableCell className="font-medium">{row.frequency}</TableCell>
                    <TableCell>{row.depth}</TableCell>
                    <TableCell>{row.application}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p>
            By tuning frequency and heating duration, our specialists tailor the hardness depth and profile of
            each component. You can read the full workflow in our{' '}
            <Link href="/blog/induction-hardening-process-explained">step-by-step induction hardening process</Link>{' '}
            guide.
          </p>

          {/* Inline contextual CTA bridge */}
          <div className="not-prose my-10 rounded-lg border border-primary/30 bg-primary/5 p-6">
            <h3 className="text-xl font-bold">Need induction hardening in Ludhiana? Get a fast quote</h3>
            <p className="mt-2 text-muted-foreground">
              Send us your part drawings and we will recommend the right case depth and hardness for your steel
              grade — fast turnaround across Ludhiana and Punjab.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/induction-heat-treatment">
                  Induction Heat Treatment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://wa.me/917900000776" target="_blank" rel="noopener noreferrer">
                  Quote on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <h2 id="where-used" className="text-3xl font-bold mt-12 scroll-mt-24">
            Where Induction Hardening Is Used (Gears, Shafts, Crankshafts)
          </h2>
          <p>
            Because the process is localized and repeatable, induction hardening is the go-to choice wherever a
            steel surface must resist wear, contact stress and fatigue while the core stays tough:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <strong>Gears</strong> — tooth flanks are hardened for wear and pitting resistance. See our{' '}
              <Link href="/gear-hardening">gear hardening service</Link>.
            </li>
            <li>
              <strong>Shafts and axles</strong> — bearing journals and splines are hardened against rubbing and
              fatigue. See our <Link href="/shaft-hardening">shaft hardening service</Link>.
            </li>
            <li>
              <strong>Crankshafts</strong> — fillets and journals are hardened to survive bending and torsional
              loads.
            </li>
            <li><strong>Pins, rollers, cams and spindles</strong> — high-contact wear zones are selectively hardened.</li>
            <li><strong>Agricultural and industrial parts</strong> — tractor spindles, PTO shafts and transmission gears.</li>
          </ul>
          <p>
            Across Ludhiana, Khanna, Rajpura and Mandi Gobindgarh, induction hardening supports both OEM
            production and after-market job work. Explore the full range on our{' '}
            <Link href="/induction-heat-treatment">induction heat treatment</Link> page.
          </p>

          <h2 id="benefits" className="text-3xl font-bold mt-12 scroll-mt-24">
            Key Benefits of Induction Hardening
          </h2>
          <p>The advantages of induction hardening make it ideal for precision manufacturing and high-volume runs:</p>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li><strong>Localized hardening</strong> — only the functional surface is treated, minimizing distortion.</li>
            <li><strong>Repeatable results</strong> — digital process controls deliver identical results batch after batch.</li>
            <li><strong>Energy efficiency</strong> — fast heating uses less energy and lowers cost per component.</li>
            <li><strong>Enhanced durability</strong> — hardened surfaces resist friction, wear and fatigue.</li>
            <li><strong>Clean and eco-friendly</strong> — no open flames, fumes or toxic emissions.</li>
            <li><strong>Tough core retained</strong> — the part absorbs shock loads without cracking.</li>
          </ol>
          <p>
            For deeper background on the underlying metallurgy, the{' '}
            <a href="https://www.asminternational.org/" target="_blank" rel="nofollow noopener noreferrer">
              ASM International
            </a>{' '}
            heat treating resources are an authoritative reference.
          </p>

          <h2 id="comparison" className="text-3xl font-bold mt-12 scroll-mt-24">
            Induction vs Other Hardening Methods
          </h2>
          <p>
            Traditional flame or furnace methods heat the whole component, wasting energy and risking
            distortion. Induction hardening is fast, localized and highly controllable. Here is how the main
            methods compare:
          </p>
          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Method</TableHead>
                  <TableHead className="font-bold">Heat Source</TableHead>
                  <TableHead className="font-bold">Speed</TableHead>
                  <TableHead className="font-bold">Distortion</TableHead>
                  <TableHead className="font-bold">Best For</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {methodComparison.map((row) => (
                  <TableRow key={row.method}>
                    <TableCell className="font-medium">{row.method}</TableCell>
                    <TableCell>{row.heat}</TableCell>
                    <TableCell>{row.speed}</TableCell>
                    <TableCell>{row.distortion}</TableCell>
                    <TableCell>{row.best}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p>
            For a focused head-to-head, see our{' '}
            <Link href="/blog/induction-hardening-vs-flame-hardening">induction hardening vs flame hardening</Link>{' '}
            comparison. For businesses in Punjab needing minimal distortion and tight repeatability, induction
            is usually the preferred heat treatment route.
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
            <h3 className="text-2xl font-bold">Looking for Induction Hardening Job Work in Ludhiana, Punjab?</h3>
            <p className="mt-2 text-muted-foreground">
              Partner with {SITE_NAME} — a trusted name in induction hardening, case hardening and surface heat
              treatment job work across Punjab.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button asChild>
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
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
