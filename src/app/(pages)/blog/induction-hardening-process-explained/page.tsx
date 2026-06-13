
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
  title: 'Induction Hardening Process: Step-by-Step Guide',
  description:
    'The induction hardening process steps explained — component prep, induction heating, quenching, tempering and inspection — by induction hardening specialists in Ludhiana, Punjab.',
  keywords: [
    'induction hardening process steps',
    'induction hardening process',
    'induction heat treatment process',
    'how induction hardening works',
    'induction hardening steps',
    'quenching and tempering',
    'induction hardening Ludhiana',
    'induction hardening Punjab',
  ],
  alternates: {
    canonical: '/blog/induction-hardening-process-explained',
  },
  openGraph: {
    type: 'article',
    title: 'Induction Hardening Process: Step-by-Step Guide',
    description:
      'A clear step-by-step walkthrough of the induction hardening process — prep, heating, quenching, tempering and inspection — for gears, shafts and crankshafts.',
    url: '/blog/induction-hardening-process-explained',
    siteName: SITE_NAME,
    locale: 'en_IN',
    images: [
      {
        url: '/images/images/62.png',
        width: 1200,
        height: 630,
        alt: 'Induction hardening process steps — glowing steel gear inside an induction coil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Induction Hardening Process: Step-by-Step Guide',
    description:
      'The induction hardening process in five steps — prep, heating, quenching, tempering and inspection.',
    images: ['/images/images/62.png'],
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Induction Hardening Process: Step-by-Step Guide',
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
    'induction hardening process steps',
    'induction hardening process',
    'induction heat treatment process',
    'how induction hardening works',
    'quenching and tempering',
  ],
  mainEntityOfPage: 'https://thakurindustries.in/blog/induction-hardening-process-explained',
  image: 'https://thakurindustries.in/images/images/62.png',
  inLanguage: 'en-IN',
};

const processSteps = [
  {
    name: 'Component preparation',
    text: 'Inspect the part for material grade, machining accuracy and surface finish, then clean off oil, dust and contaminants so heat is absorbed uniformly.',
  },
  {
    name: 'Induction heating',
    text: 'Place the component inside a shaped copper coil and pass high-frequency current through it. Eddy currents heat the surface to 850°C–950°C, forming austenite.',
  },
  {
    name: 'Quenching',
    text: 'Cool the heated surface rapidly with a water or polymer spray. The austenite transforms into hard martensite, giving 50–60 HRC surface hardness.',
  },
  {
    name: 'Tempering',
    text: 'Reheat lightly to 150°C–250°C to relieve internal stress, cut brittleness and improve toughness and fatigue resistance.',
  },
  {
    name: 'Inspection and testing',
    text: 'Verify surface hardness (HRC), case depth and microstructure against the OEM or industrial specification before the part ships.',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Induction Hardening Process: Step-by-Step',
  description:
    'The induction hardening process in five steps — component preparation, induction heating, quenching, tempering and inspection.',
  totalTime: 'PT30M',
  step: processSteps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
  inLanguage: 'en-IN',
};

const faqs = [
  {
    question: 'What are the steps of the induction hardening process?',
    answer:
      'The induction hardening process has five steps: (1) component preparation and cleaning, (2) induction heating to austenitizing temperature, (3) rapid quenching to form martensite, (4) tempering to relieve stress, and (5) inspection and hardness testing.',
  },
  {
    question: 'What temperature is used for induction hardening?',
    answer:
      'The surface is heated to its austenitizing range, typically 850°C–950°C depending on the steel grade, then quenched. Tempering afterwards is done at a much lower 150°C–250°C.',
  },
  {
    question: 'Is tempering always required after induction hardening?',
    answer:
      'Tempering is optional but strongly recommended. A light temper at 150°C–250°C relieves quenching stresses and reduces brittleness, which is important for gears and shafts under heavy, repeated loads.',
  },
  {
    question: 'How is the induction hardening process quality-checked?',
    answer:
      'Each batch is checked for surface hardness in HRC, effective case depth, and microstructure under magnification, ensuring the part meets the required OEM or industrial standard before delivery.',
  },
  {
    question: 'Where can I get the induction hardening process done in Ludhiana, Punjab?',
    answer:
      `${SITE_NAME} runs the full induction hardening process — prep, heating, quenching, tempering and testing — for gears, shafts and crankshafts as job work across Ludhiana and Punjab.`,
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

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find((img) => img.id === 'blogGearProcess');
  const quenchImage = PlaceHolderImages.find((img) => img.id === 'blogQuenchingRole');
  const testImage = PlaceHolderImages.find((img) => img.id === 'blogHardnessTesting');

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Blog', href: '/blog' },
          { name: 'Induction Hardening Process', href: '/blog/induction-hardening-process-explained' },
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
              <span className="truncate">Induction Hardening Process</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Induction Hardening Process: Step-by-Step Guide
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
              The induction hardening process runs in five steps: prepare and clean the component, heat its
              surface with an induction coil to 850°C–950°C, quench it rapidly to form hard martensite, temper
              it to relieve stress, then inspect hardness and case depth.
            </strong>{' '}
            The result is a tough core with a wear-resistant case.
          </p>

          {featureImage && (
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
              <Image
                src={featureImage.imageUrl}
                alt="Induction hardening process steps — glowing steel gear being heated inside a copper induction coil"
                data-ai-hint={featureImage.imageHint}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          )}

          <p>
            At {SITE_NAME} in Ludhiana, we run this exact induction hardening process every day on gears,
            shafts and crankshafts for automotive, agricultural and industrial customers across Punjab. This
            guide walks through each step of the process in order, explains the key parameters that control the
            result, and shows how we verify quality before a part leaves the floor.
          </p>

          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="not-prose my-8 rounded-lg border bg-secondary/40 p-6">
            <h2 className="mb-3 text-lg font-bold">On this page</h2>
            <ul className="space-y-2 text-primary">
              <li><a href="#steps" className="hover:underline">The induction hardening process in 5 steps</a></li>
              <li><a href="#heating" className="hover:underline">Step 2: Induction heating</a></li>
              <li><a href="#quenching" className="hover:underline">Step 3: Quenching</a></li>
              <li><a href="#tempering" className="hover:underline">Step 4: Tempering</a></li>
              <li><a href="#inspection" className="hover:underline">Step 5: Inspection &amp; testing</a></li>
              <li><a href="#faq" className="hover:underline">Frequently asked questions</a></li>
            </ul>
          </nav>

          <h2 id="steps" className="text-3xl font-bold mt-12 scroll-mt-24">
            The Induction Hardening Process in 5 Steps
          </h2>
          <p>
            Here is the complete induction hardening process from raw component to inspected part. Each step
            builds on the previous one, and the parameters at every stage are matched to the steel grade and
            the case depth the part needs.
          </p>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
            {processSteps.map((step) => (
              <li key={step.name}>
                <strong>{step.name}</strong> — {step.text}
              </li>
            ))}
          </ol>

          <h3 className="text-2xl font-semibold mt-8">Step 1: Component preparation</h3>
          <p>
            Before hardening, every component is inspected for material composition, machining accuracy and
            surface finish. Any oil, dust or contaminants are removed so the part absorbs heat uniformly during
            heating. Typical materials include EN8, EN19 (4140), EN24 (4340), 20MnCr5 and other carbon and alloy
            steels. The steel needs enough carbon — roughly 0.30% or more — to form hard martensite when
            quenched. Curious what induction hardening is at a high level? Read our{' '}
            <Link href="/blog/what-is-induction-hardening-ludhiana">what is induction hardening</Link> primer.
          </p>

          <h2 id="heating" className="text-3xl font-bold mt-12 scroll-mt-24">
            Step 2: Induction Heating
          </h2>
          <p>
            The component is placed inside a copper induction coil precisely designed for its geometry. A
            high-frequency alternating current flows through the coil, creating a fluctuating magnetic field
            that induces eddy currents in the surface — heating it rapidly to 850°C–950°C. Three parameters
            control this step: the power frequency sets how deep the heat penetrates, the heating time sets the
            surface temperature, and the coil design ensures even heat distribution. The heated layer transforms
            into austenite, ready to be hardened.
          </p>
          <p>
            The induction frequency is what controls how deeply the hardened case forms, so it is matched to the
            part being treated:
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

          <h2 id="quenching" className="text-3xl font-bold mt-12 scroll-mt-24">
            Step 3: Quenching
          </h2>
          {quenchImage && (
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg my-8">
              <Image
                src={quenchImage.imageUrl}
                alt="Induction hardening process quenching step — water spray rapidly cooling a heated steel surface"
                data-ai-hint={quenchImage.imageHint}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          )}
          <p>
            Immediately after heating, the surface is cooled rapidly with a water or polymer quench. Cooling is
            so fast that the heated austenitic layer transforms into martensite, giving extreme hardness —
            typically 50–60 HRC — with a wear-resistant case usually between 1.0 mm and 3.0 mm deep. Water
            quenching produces the deepest, hardest case for tough steels, while polymer quenching offers more
            controlled cooling with minimal distortion on precision parts.
          </p>

          {/* Inline contextual CTA bridge */}
          <div className="not-prose my-10 rounded-lg border border-primary/30 bg-primary/5 p-6">
            <h3 className="text-xl font-bold">Need professional induction hardening in Ludhiana? Get a quote</h3>
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

          <h2 id="tempering" className="text-3xl font-bold mt-12 scroll-mt-24">
            Step 4: Tempering
          </h2>
          <p>
            After quenching, the hardened component is reheated slightly to 150°C–250°C to relieve internal
            stresses created during rapid cooling. This light temper reduces brittleness and improves toughness
            and fatigue resistance — especially valuable for gears and shafts used in tractors and heavy-duty
            machinery. Tempering is optional but strongly recommended whenever a part will see repeated or shock
            loading. To understand why fast, controlled cooling matters so much, see our note on the{' '}
            <Link href="/blog/role-of-quenching-in-induction-hardening">role of quenching in induction hardening</Link>.
          </p>

          <h2 id="inspection" className="text-3xl font-bold mt-12 scroll-mt-24">
            Step 5: Inspection &amp; Testing
          </h2>
          {testImage && (
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg my-8">
              <Image
                src={testImage.imageUrl}
                alt="Induction hardening process inspection step — technician measuring surface hardness in HRC on a treated part"
                data-ai-hint={testImage.imageHint}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          )}
          <p>
            Once tempering is complete, every batch goes through quality control before delivery. We measure
            surface hardness in HRC, confirm the effective case depth, and examine the microstructure under
            magnification to verify a clean martensitic case. Each part is checked against the required OEM or
            industrial specification, so what leaves our floor in Ludhiana matches the drawing exactly.
          </p>
          <p>
            For the underlying metallurgy and standards behind each step of the process, the{' '}
            <a href="https://www.asminternational.org/" target="_blank" rel="nofollow noopener noreferrer">
              ASM International
            </a>{' '}
            heat treating resources are an authoritative reference.
          </p>

          <h2 className="text-3xl font-bold mt-12">Why This Process Wins for Gears, Shafts and Crankshafts</h2>
          <p>
            Because the induction hardening process is localized, fast and repeatable, it is the preferred route
            wherever a surface must resist wear while the core stays tough. We apply it to gear tooth flanks
            through our <Link href="/gear-hardening">gear hardening service</Link>, to bearing journals and
            splines via our <Link href="/shaft-hardening">shaft hardening service</Link>, and to crankshaft
            fillets and journals that must survive bending and torsional loads. Explore the full capability on
            our <Link href="/induction-heat-treatment">induction heat treatment</Link> page, or{' '}
            <Link href="/get-quote">request a quote</Link> for your components.
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
              Partner with {SITE_NAME} — a trusted name for the complete induction hardening process: prep,
              heating, quenching, tempering and testing across Punjab.
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
