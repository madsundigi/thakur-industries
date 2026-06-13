
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

const PAGE_PATH = '/blog/4140-vs-4340-steel-hardening';
const PAGE_URL = `https://thakurindustries.in${PAGE_PATH}`;

export const metadata: Metadata = {
  title: '4140 vs 4340 Steel Hardening: Differences & HRC',
  description:
    '4140 vs 4340 steel hardening compared: composition, hardenability, achievable HRC, cost and EN equivalents. Expert job work in Ludhiana, Punjab.',
  keywords: [
    '4140 vs 4340',
    '4140 4340 difference',
    '42CrMo4 vs 40NiCrMo',
    '4140 vs 4340 steel hardening',
    '4140 EN19',
    '4340 EN24',
    'steel hardening Ludhiana',
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: '4140 vs 4340 Steel Hardening: Differences & HRC',
    description:
      'Compare 4140 vs 4340 steel hardening by composition, hardenability, HRC and cost. Expert induction hardening job work in Ludhiana, Punjab.',
    url: PAGE_URL,
    type: 'article',
    siteName: SITE_NAME,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: '4140 vs 4340 Steel Hardening: Differences & HRC',
    description:
      '4140 vs 4340 steel hardening: composition, hardenability, HRC and cost compared. Heat treatment job work in Ludhiana, Punjab.',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '4140 vs 4340 Steel Hardening: Differences & HRC',
  author: { '@type': 'Organization', name: 'Thakur Industries' },
  publisher: {
    '@type': 'Organization',
    name: 'Thakur Industries',
    logo: { '@type': 'ImageObject', url: 'https://thakurindustries.in/logo.png' },
  },
  datePublished: '2026-06-13',
  dateModified: '2026-06-13',
  articleSection: 'Steel Grades & Hardening',
  keywords: [
    '4140 vs 4340',
    '4140 4340 difference',
    '42CrMo4 vs 40NiCrMo',
    '4140 vs 4340 steel hardening',
    '4140 EN19',
    '4340 EN24',
  ],
  image: 'https://thakurindustries.in/images/images/8.png',
  mainEntityOfPage: PAGE_URL,
  inLanguage: 'en-IN',
};

const faqs = [
  {
    question: 'What is the main difference between 4140 and 4340 steel?',
    answer:
      'The main difference is nickel. 4340 contains roughly 1.65–2.0% nickel, which 4140 lacks. That nickel gives 4340 deeper hardenability and higher toughness in thick sections, while 4140 is a leaner, lower-cost chromium-molybdenum steel that hardens well in small to medium sizes.',
  },
  {
    question: 'Which steel achieves higher hardness, 4140 or 4340?',
    answer:
      'Both can reach a similar surface hardness of around 54–60 HRC after induction or through hardening. The real difference is depth: 4340 holds high hardness deeper into large cross-sections because of its superior hardenability, so 4340 is preferred for big shafts and heavily loaded parts.',
  },
  {
    question: 'Is 4140 the same as EN19 and 4340 the same as EN24?',
    answer:
      'Yes, broadly. 4140 is the close equivalent of EN19 (BS 970 709M40) and 42CrMo4, while 4340 corresponds to EN24 (BS 970 817M40) and 40NiCrMo. The chemistries are nearly identical, so a 4140 specification can usually be met with EN19 stock and 4340 with EN24.',
  },
  {
    question: 'When should I choose 4340 over 4140?',
    answer:
      'Choose 4340 when the part is large or thick, carries shock loads, or must stay tough at high strength — such as heavy axles, large crankshafts and landing-gear-type components. Choose 4140 for shafts, gears and pins of small to medium section where its strength and lower cost are ideal.',
  },
  {
    question: 'Can Thakur Industries harden both 4140 and 4340 in Ludhiana?',
    answer:
      'Yes. Thakur Industries hardens both 4140 (EN19) and 4340 (EN24) at our Ludhiana, Punjab facility with induction and through hardening, polymer or water quenching, tempering, and HRC plus case-depth verification for automotive, agricultural and industrial parts.',
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
    aspect: 'Carbon (C)',
    g4140: '~0.38–0.43%',
    g4340: '~0.38–0.43%',
  },
  {
    aspect: 'Chromium (Cr)',
    g4140: '~0.80–1.10%',
    g4340: '~0.70–0.90%',
  },
  {
    aspect: 'Nickel (Ni)',
    g4140: 'None (negligible)',
    g4340: '~1.65–2.00%',
  },
  {
    aspect: 'Molybdenum (Mo)',
    g4140: '~0.15–0.25%',
    g4340: '~0.20–0.30%',
  },
  {
    aspect: 'Hardenability',
    g4140: 'Good (small/medium sections)',
    g4340: 'Excellent (deep, large sections)',
  },
  {
    aspect: 'Achievable hardness',
    g4140: '~54–58 HRC surface',
    g4340: '~54–60 HRC, deeper',
  },
  {
    aspect: 'Toughness',
    g4140: 'High',
    g4340: 'Very high (nickel)',
  },
  {
    aspect: 'Relative cost',
    g4140: 'Lower',
    g4340: 'Higher (nickel content)',
  },
  {
    aspect: 'EN equivalent',
    g4140: 'EN19 / 42CrMo4',
    g4340: 'EN24 / 40NiCrMo',
  },
  {
    aspect: 'Typical uses',
    g4140: 'Shafts, gears, pins, spindles',
    g4340: 'Heavy axles, crankshafts, large shafts',
  },
];

const selectionData = [
  { component: 'Small to medium shafts and spindles', grade: '4140 (EN19)' },
  { component: 'Gears and sprockets', grade: '4140 (EN19)' },
  { component: 'Heavy axles and large crankshafts', grade: '4340 (EN24)' },
  { component: 'High-shock, heavily loaded parts', grade: '4340 (EN24)' },
  { component: 'Large-diameter rolls and rams', grade: '4340 (EN24)' },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find((img) => img.id === 'blogEnSeries');

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={faqSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Blog', href: '/blog' },
          { name: '4140 vs 4340 Steel Hardening', href: PAGE_PATH },
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
              <span className="truncate">4140 vs 4340 Steel Hardening</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              4140 vs 4340 Steel Hardening: Differences &amp; HRC
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground not-prose">
              <span>By the {SITE_NAME} Metallurgy Team</span>
              <span aria-hidden="true">·</span>
              <span>Reviewed by Senior Heat Treatment Engineer</span>
              <span aria-hidden="true">·</span>
              <span>Published June 2026 · Updated June 2026</span>
            </div>
            <p className="mt-4 text-xl text-muted-foreground">
              The core difference in <strong>4140 vs 4340 steel hardening</strong> is nickel: 4340 carries about
              1.65–2.0% nickel that 4140 lacks, giving 4340 deeper hardenability and greater toughness in thick
              sections. Both reach roughly 54–60 HRC. In EN terms, 4140 is EN19 and 4340 is EN24.
            </p>
          </div>

          {featureImage && (
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
              <Image
                src={featureImage.imageUrl}
                alt="4140 vs 4340 alloy steel components prepared for induction hardening"
                data-ai-hint={featureImage.imageHint}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                priority
                className="object-cover"
              />
            </div>
          )}

          <p>
            If you specify shafts, gears, axles or crankshafts in Ludhiana or Punjab, choosing between 4140 and 4340
            is one of the most common decisions in heat treatment. Both are chromium-molybdenum-based alloy steels
            that respond beautifully to hardening, but a small chemistry difference changes how deep they harden,
            how tough they stay, and how much they cost. This guide compares the two head to head.
          </p>

          <nav aria-label="Table of contents" className="my-8 not-prose rounded-lg border border-border bg-secondary/40 p-6">
            <h2 className="text-lg font-bold text-foreground">On this page</h2>
            <ul className="mt-3 space-y-2 text-primary">
              <li><a href="#quick-comparison" className="hover:underline">Quick comparison table</a></li>
              <li><a href="#composition" className="hover:underline">Composition comparison</a></li>
              <li><a href="#hardenability" className="hover:underline">Hardenability &amp; HRC</a></li>
              <li><a href="#equivalents" className="hover:underline">4140 = EN19, 4340 = EN24 (equivalents)</a></li>
              <li><a href="#when-to-choose" className="hover:underline">When to choose which</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
          </nav>

          <h2 id="quick-comparison" className="text-3xl font-bold mt-12 scroll-mt-24">
            Quick comparison table
          </h2>
          <p>
            Here is an at-a-glance summary of <strong>4140 vs 4340 steel hardening</strong> across composition,
            hardenability, achievable HRC, cost, typical uses and EN equivalents.
          </p>
          <div className="my-8 overflow-x-auto not-prose">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Property</TableHead>
                  <TableHead className="font-bold">4140 (EN19)</TableHead>
                  <TableHead className="font-bold">4340 (EN24)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row) => (
                  <TableRow key={row.aspect}>
                    <TableCell className="font-medium">{row.aspect}</TableCell>
                    <TableCell>{row.g4140}</TableCell>
                    <TableCell>{row.g4340}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p>
            The headline takeaway: 4140 and 4340 share almost the same carbon level, so their peak surface hardness is
            similar. What separates them is nickel, which transforms 4340 into a deeper-hardening, tougher grade that
            commands a higher price.
          </p>

          <h2 id="composition" className="text-3xl font-bold mt-12 scroll-mt-24">
            Composition comparison
          </h2>
          <p>
            Both grades are medium-carbon low-alloy steels with around 0.40% carbon. That carbon content is what makes
            either steel capable of reaching high hardness, because carbon is the element that forms hard martensite
            during quenching. Below that shared foundation, the alloying tells two different stories.
          </p>
          <h3 className="text-2xl font-semibold mt-6">4140 — chromium-molybdenum steel</h3>
          <p>
            4140 is a clean chromium-molybdenum (Cr-Mo) alloy. Roughly 0.80–1.10% chromium and 0.15–0.25% molybdenum
            give it good hardenability, strength and resistance to softening when tempered. With no significant nickel,
            its chemistry is lean and its cost is lower. This is the workhorse grade for shafts, gears, spindles and
            pins of small to medium section, and it responds extremely well to localized induction hardening.
          </p>
          <h3 className="text-2xl font-semibold mt-6">4340 — nickel-chromium-molybdenum steel</h3>
          <p>
            4340 adds about 1.65–2.0% nickel to a similar chromium-molybdenum base, making it a nickel-chromium-
            molybdenum (Ni-Cr-Mo) steel. Nickel does two things: it deepens hardenability so the part hardens fully
            through thick sections, and it raises toughness and impact resistance at a given strength. That makes 4340
            the premium choice for large, heavily stressed components — but the nickel also pushes the price up.
          </p>
          <p>
            In short, you can think of 4340 as 4140 with nickel added. The carbon does the hardening; the nickel does
            the deep, tough hardening. It is worth noting that both grades are normally supplied in the hardened and
            tempered (Q&amp;T) condition for machining, and then selectively induction hardened at the wear surfaces.
            That two-stage approach gives a strong, tough core with a very hard skin, and it works equally well on
            either grade — only the achievable depth and the price differ.
          </p>

          <h2 id="hardenability" className="text-3xl font-bold mt-12 scroll-mt-24">
            Hardenability &amp; HRC
          </h2>
          <p>
            Hardenability is not the same as hardness. <strong>Hardness</strong> is how hard the surface gets;{' '}
            <strong>hardenability</strong> is how deep that hardness reaches into the cross-section before the cooling
            rate falls too low to form martensite. This distinction is the heart of the 4140 vs 4340 decision.
          </p>
          <h3 className="text-2xl font-semibold mt-6">Achievable hardness (HRC)</h3>
          <p>
            On the surface, both grades land in a similar range. After induction hardening and a low temper, 4140
            typically reaches about 54–58 HRC, and 4340 about 54–60 HRC. For a thin part or a shallow hardened case,
            you would struggle to tell them apart by surface HRC alone. Our{' '}
            <Link href="/induction-heat-treatment/4140-steel-hardening" className="text-primary hover:underline">
              4140 steel hardening service
            </Link>{' '}
            routinely delivers these values with controlled quenching.
          </p>
          <h3 className="text-2xl font-semibold mt-6">Depth of hardening</h3>
          <p>
            The difference appears as parts get bigger. Because 4340 has higher hardenability, it keeps high hardness
            much deeper into a large bar, so a thick 4340 axle can be hardened nearly through-and-through. A
            comparable 4140 part of the same large diameter will harden well at the surface but soften toward the core,
            where the quench could not cool it fast enough. For small and medium sections, 4140 hardens fully and the
            extra hardenability of 4340 is simply unnecessary.
          </p>
          <p>
            This is why ruling section matters more than the grade name. A 25 mm 4140 shaft and a 25 mm 4340 shaft will
            behave almost identically after hardening, so paying for nickel buys you nothing. Push the diameter to 100 mm
            or more, add an interrupted oil quench, and the 4340 will hold its strength and toughness right through the
            centre while the 4140 cannot. Matching the grade to the section size is the single most cost-effective
            decision you can make when specifying either steel.
          </p>
          <p>
            Both grades pair well with induction hardening, where the surface is heated and quenched to form a hard
            martensitic case over a tough core. If you are weighing surface versus through approaches, our overview of{' '}
            <Link href="/blog/difference-between-induction-and-case-hardening" className="text-primary hover:underline">
              induction hardening vs case hardening
            </Link>{' '}
            explains how the case is produced and controlled.
          </p>

          <h2 id="equivalents" className="text-3xl font-bold mt-12 scroll-mt-24">
            4140 = EN19, 4340 = EN24 (equivalents)
          </h2>
          <p>
            Indian and European drawings often call out EN grades rather than the AISI/SAE numbers, so knowing the
            cross-reference avoids costly material mix-ups on the shop floor.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>4140</strong> is the close equivalent of <strong>EN19</strong> (BS 970 709M40) and the European <strong>42CrMo4</strong>.</li>
            <li><strong>4340</strong> is the close equivalent of <strong>EN24</strong> (BS 970 817M40) and the European <strong>40NiCrMo</strong> family.</li>
          </ul>
          <p>
            The chemistries are nearly identical within each pair, so a 4140 callout can normally be satisfied with
            EN19 stock, and a 4340 callout with EN24. We treat both naming systems every day — see our dedicated{' '}
            <Link href="/induction-heat-treatment/en19-steel-induction-hardening" className="text-primary hover:underline">
              EN19 steel induction hardening
            </Link>{' '}
            and{' '}
            <Link href="/induction-heat-treatment/en24-steel-hardening" className="text-primary hover:underline">
              EN24 steel hardening
            </Link>{' '}
            pages for grade-specific parameters and hardness ranges.
          </p>
          <p>
            For authoritative chemistry limits and heat-treating data on these alloy steels, the{' '}
            <a
              href="https://www.asminternational.org/"
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="text-primary hover:underline"
            >
              ASM International
            </a>{' '}
            handbooks are the recognised reference.
          </p>

          <div className="my-10 not-prose rounded-lg border-2 border-primary/30 bg-primary/5 p-8">
            <h3 className="text-2xl font-bold text-foreground">
              Need 4140 or 4340 hardening in Ludhiana? Get a quote
            </h3>
            <p className="mt-2 text-muted-foreground">
              {SITE_NAME} hardens both 4140 (EN19) and 4340 (EN24) in-house with induction and through hardening,
              polymer and water quenching, tempering, and HRC plus case-depth verification for automotive,
              agricultural and industrial parts.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/induction-heat-treatment/4140-steel-hardening">
                  4140 Steel Hardening <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/get-quote">Get a Quote</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://wa.me/917900000776" rel="noopener noreferrer" target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>

          <h2 id="when-to-choose" className="text-3xl font-bold mt-12 scroll-mt-24">
            When to choose which
          </h2>
          <p>
            The right grade depends on the size of the part, the loads it carries, and your budget. Because their
            surface hardness is similar, the decision usually comes down to cross-section and toughness, not peak HRC.
          </p>
          <h3 className="text-2xl font-semibold mt-6">Choose 4140 (EN19) if:</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>The part is a small or medium section — shafts, gears, spindles, pins.</li>
            <li>You want strong, wear-resistant components at a lower material cost.</li>
            <li>Surface or localized induction hardening meets the duty requirement.</li>
          </ul>
          <h3 className="text-2xl font-semibold mt-6">Choose 4340 (EN24) if:</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>The part is large or thick and must harden deep into the core.</li>
            <li>It carries shock or fatigue loads where extra toughness matters.</li>
            <li>You are making heavy axles, large crankshafts, big shafts or rams.</li>
          </ul>
          <div className="my-8 overflow-x-auto not-prose">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Component</TableHead>
                  <TableHead className="font-bold">Recommended Grade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectionData.map((row) => (
                  <TableRow key={row.component}>
                    <TableCell className="font-medium">{row.component}</TableCell>
                    <TableCell>{row.grade}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p>
            In practice, many Ludhiana and Punjab manufacturers standardise on 4140/EN19 for the bulk of their shafts
            and gears, then step up to 4340/EN24 only where section size or load demands it. That keeps cost in check
            while reserving the premium nickel grade for the parts that truly need deep, tough hardening. If you are
            unsure which grade your drawing calls for, send it over and we will confirm the equivalent and recommend a
            hardening route.
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
