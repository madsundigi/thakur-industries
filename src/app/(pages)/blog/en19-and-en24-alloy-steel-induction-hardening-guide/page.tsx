
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

const PAGE_PATH = '/blog/en19-and-en24-alloy-steel-induction-hardening-guide';
const PAGE_URL = `https://thakurindustries.in${PAGE_PATH}`;
const IMAGE_URL = 'https://thakurindustries.in/images/images/36.png';
const DATE_PUBLISHED = '2025-11-01';
const DATE_MODIFIED = '2026-06-13';

export const metadata: Metadata = {
  title: 'EN19 vs EN24 Steel: Properties & Hardening',
  description:
    'EN19 vs EN24 steel properties compared: composition, tensile strength and achievable HRC, plus expert EN19 & EN24 induction hardening in Ludhiana, Punjab.',
  keywords: [
    'EN19 vs EN24',
    'EN19 vs EN24 steel properties',
    'EN19 properties',
    'EN24 properties',
    '709M40',
    '817M40',
    'EN19 EN24 induction hardening',
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    type: 'article',
    title: 'EN19 vs EN24 Steel: Properties & Hardening',
    description:
      'EN19 vs EN24 steel properties compared: composition, tensile strength and achievable HRC, plus expert hardening in Ludhiana, Punjab.',
    url: PAGE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    images: [{ url: IMAGE_URL, width: 1200, height: 630, alt: 'EN19 vs EN24 steel properties comparison' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EN19 vs EN24 Steel: Properties & Hardening',
    description:
      'EN19 vs EN24 steel properties compared: composition, tensile strength, achievable HRC and which grade hardens better.',
    images: [IMAGE_URL],
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'EN19 vs EN24 Steel: Properties, Composition & Hardening',
  description:
    'A material-research comparison of EN19 vs EN24 steel properties — chemical composition, mechanical properties, achievable hardness and which grade hardens better.',
  image: IMAGE_URL,
  author: {
    '@type': 'Person',
    name: 'Thakur Industries Metallurgy Team',
    worksFor: { '@type': 'Organization', name: SITE_NAME },
  },
  reviewedBy: { '@type': 'Person', name: 'Senior Heat-Treatment Engineer, Thakur Industries' },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: { '@type': 'ImageObject', url: 'https://thakurindustries.in/logo.png' },
  },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  articleSection: 'Heat Treatment Materials',
  keywords: ['EN19 vs EN24', 'EN19 properties', 'EN24 properties', '709M40', '817M40', 'EN19 vs EN24 steel properties'],
  mainEntityOfPage: PAGE_URL,
  inLanguage: 'en-IN',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thakurindustries.in/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://thakurindustries.in/blog' },
    { '@type': 'ListItem', position: 3, name: 'EN19 vs EN24 Steel Properties', item: PAGE_URL },
  ],
};

const faqs = [
  {
    q: 'What is the main difference between EN19 and EN24 steel?',
    a: 'The defining difference is nickel content. EN24 (817M40 / AISI 4340) contains 1.3–1.7% nickel, giving it greater hardenability, toughness and fatigue strength in large sections. EN19 (709M40 / AISI 4140) has effectively no nickel, making it a more economical chromium-molybdenum grade for medium-stress parts.',
  },
  {
    q: 'Which is stronger, EN19 or EN24?',
    a: 'In the hardened-and-tempered condition EN24 reaches a higher tensile strength (typically 850–1100 MPa, up to ~1550 MPa) and retains strength through thicker sections than EN19 (typically 700–850 MPa). For thin or moderately loaded parts the practical difference is small and EN19 is often the cost-effective choice.',
  },
  {
    q: 'Does EN19 or EN24 reach a higher hardness after induction hardening?',
    a: 'Both reach a similar surface hardness because surface hardness is governed by carbon content, and both grades hold ~0.40% carbon. EN24 typically achieves 57–60 HRC and EN19 55–58 HRC. The real advantage of EN24 is deeper, more uniform hardenability in large cross-sections, not a higher peak HRC.',
  },
  {
    q: 'What are the equivalent grades for EN19 and EN24?',
    a: 'EN19 corresponds to BS 970 709M40 and AISI 4140. EN24 corresponds to BS 970 817M40 and AISI 4340. These equivalents are widely cross-referenced in OEM and export specifications.',
  },
  {
    q: 'When should I choose EN19 over EN24?',
    a: 'Choose EN19 for medium-load, cost-sensitive components such as gears, spindles and pins in light-to-medium sections. Choose EN24 for high-load, fatigue-critical or large-diameter parts like crankshafts, heavy axles and aerospace-grade shafts where through-hardenability and toughness matter most.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const compositionData = [
  { property: 'Carbon (C %)', en19: '0.35–0.45', en24: '0.36–0.44' },
  { property: 'Chromium (Cr %)', en19: '0.9–1.2', en24: '1.0–1.4' },
  { property: 'Nickel (Ni %)', en19: '—', en24: '1.3–1.7' },
  { property: 'Molybdenum (Mo %)', en19: '0.2–0.4', en24: '0.2–0.4' },
  { property: 'Manganese (Mn %)', en19: '0.5–0.8', en24: '0.45–0.7' },
  { property: 'Tensile strength', en19: '700–850 MPa', en24: '850–1100 MPa (up to ~1550)' },
  { property: 'Achievable hardness', en19: '55–58 HRC', en24: '57–60 HRC' },
  { property: 'BS 970 / AISI equivalent', en19: '709M40 / 4140', en24: '817M40 / 4340' },
  { property: 'Typical uses', en19: 'Gears, spindles, pins, bolts', en24: 'Crankshafts, heavy axles, aero shafts' },
];

const mechanicalData = [
  { property: 'Hardenability', en19: 'Good (medium sections)', en24: 'Excellent (large sections)' },
  { property: 'Toughness / impact', en19: 'Good', en24: 'Superior (nickel-aided)' },
  { property: 'Fatigue strength', en19: 'High', en24: 'Very high' },
  { property: 'Machinability (annealed)', en19: 'Better', en24: 'Slightly lower' },
  { property: 'Relative cost', en19: 'Lower', en24: 'Higher' },
];

const paramsData = [
  { grade: 'EN19 (709M40 / 4140)', hardness: '55–58', depth: '2.0–3.0', quench: 'Polymer (10%)' },
  { grade: 'EN24 (817M40 / 4340)', hardness: '57–60', depth: '2.5–4.0', quench: 'Water or polymer (8%)' },
];

const applicationsData = [
  { industry: 'Automotive', applications: 'EN24 crankshafts & drive shafts; EN19 transmission pins, gear hubs' },
  { industry: 'Agriculture', applications: 'EN19 tractor spindles & PTO shafts; EN24 heavy axles' },
  { industry: 'Heavy Machinery', applications: 'EN24 rollers & large couplings; EN19 medium pins' },
  { industry: 'Forging & Tooling', applications: 'EN24 mandrels & high-load dies; EN19 general tooling' },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find((img) => img.id === 'blogEN19_EN24');

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <div className="text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="inline-block w-4 h-4 mx-1" />
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <ChevronRight className="inline-block w-4 h-4 mx-1" />
              <span className="truncate">EN19 vs EN24 Steel Properties</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              EN19 vs EN24 Steel: Properties, Composition &amp; Hardening
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              By the Thakur Industries Metallurgy Team · Reviewed by a Senior Heat-Treatment Engineer ·
              Published November 2025 · Updated June 2026
            </p>
          </div>

          {featureImage && (
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
              <Image
                src={featureImage.imageUrl}
                alt="EN19 vs EN24 steel properties — assorted hardened alloy steel shafts and gears"
                data-ai-hint={featureImage.imageHint}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          )}

          <p className="text-xl font-semibold text-foreground">
            EN19 and EN24 are both chromium-molybdenum alloy steels with around 0.40% carbon, but the key difference
            is nickel: EN24 (817M40) adds 1.3–1.7% nickel for higher tensile strength, deeper hardenability and
            superior toughness, while nickel-free EN19 (709M40) is the more economical grade for medium-load parts.
          </p>

          {/* Table of contents */}
          <div className="not-prose my-8 rounded-lg border bg-muted/40 p-6">
            <h2 className="text-lg font-bold text-foreground">On this page</h2>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-muted-foreground">
              <li><a href="#composition" className="hover:text-primary">Composition &amp; properties comparison</a></li>
              <li><a href="#mechanical" className="hover:text-primary">Mechanical properties</a></li>
              <li><a href="#hardens-better" className="hover:text-primary">Which hardens better</a></li>
              <li><a href="#applications" className="hover:text-primary">Applications</a></li>
              <li><a href="#faq" className="hover:text-primary">Frequently asked questions</a></li>
            </ol>
          </div>

          <h2 id="composition" className="text-3xl font-bold mt-12 scroll-mt-24">
            EN19 vs EN24 Composition &amp; Properties Comparison
          </h2>
          <p>
            EN19 and EN24 are workhorse engineering steels specified across automotive, agricultural and heavy-equipment
            manufacturing. Both are low-alloy steels hardened and tempered to develop their full mechanical properties,
            and both respond extremely well to induction hardening. The single most important variable separating their
            properties is nickel content, which controls hardenability and toughness in thick sections.
          </p>
          <p>
            EN19 is the British Standard designation for grade <strong>709M40</strong>, equivalent to AISI{' '}
            <strong>4140</strong>. EN24 is grade <strong>817M40</strong>, equivalent to AISI <strong>4340</strong>. The
            comparison table below summarises the core EN19 vs EN24 steel properties side by side.
          </p>
          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>EN19 (709M40 / AISI 4140)</TableHead>
                  <TableHead>EN24 (817M40 / AISI 4340)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {compositionData.map((row) => (
                  <TableRow key={row.property}>
                    <TableCell className="font-medium">{row.property}</TableCell>
                    <TableCell>{row.en19}</TableCell>
                    <TableCell>{row.en24}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p>
            As the table shows, the two grades share an almost identical carbon and molybdenum range. EN24 carries a
            modestly higher chromium band and, critically, the nickel addition that EN19 lacks entirely. That nickel is
            why EN24 commands a higher price and why it is reserved for the most demanding components. For a deeper look
            at the chromium-molybdenum family, our{' '}
            <Link href="/induction-heat-treatment/4140-steel-hardening" className="text-primary hover:underline">
              4140 steel hardening guide
            </Link>{' '}
            covers the AISI 4140 (EN19 equivalent) in detail.
          </p>

          <h2 id="mechanical" className="text-3xl font-bold mt-12 scroll-mt-24">
            Mechanical Properties: EN19 vs EN24
          </h2>
          <p>
            In the heat-treated condition both steels are strong, but EN24 holds its strength through larger
            cross-sections thanks to its nickel content. EN19 typically develops a tensile strength of 700–850 MPa,
            while EN24 reaches 850–1100 MPa and, in high-strength tempers, can be pushed toward 1550 MPa. EN24 also
            delivers measurably better impact toughness and fatigue endurance, which is decisive for rotating and
            cyclically loaded parts.
          </p>
          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mechanical property</TableHead>
                  <TableHead>EN19 (709M40)</TableHead>
                  <TableHead>EN24 (817M40)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mechanicalData.map((row) => (
                  <TableRow key={row.property}>
                    <TableCell className="font-medium">{row.property}</TableCell>
                    <TableCell>{row.en19}</TableCell>
                    <TableCell>{row.en24}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p>
            EN19 is generally easier to machine in the annealed state and is the more cost-effective option where the
            extra toughness of EN24 is not required. EN24, by contrast, justifies its premium in safety-critical,
            heavy-section components where fatigue failure is unacceptable. These property differences are well
            documented in metallurgical references such as the{' '}
            <a
              href="https://www.asminternational.org/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-primary hover:underline"
            >
              ASM International
            </a>{' '}
            handbooks on low-alloy steels.
          </p>

          <h2 id="hardens-better" className="text-3xl font-bold mt-12 scroll-mt-24">
            Which Hardens Better — EN19 or EN24?
          </h2>
          <p>
            This is the question most engineers actually want answered, and the result is often misunderstood. Peak
            surface hardness after induction hardening is governed almost entirely by carbon content, and because both
            EN19 and EN24 hold roughly 0.40% carbon, both reach a similar martensitic surface hardness — EN19 around
            55–58 HRC and EN24 around 57–60 HRC.
          </p>
          <p>
            The real differentiator is <strong>hardenability</strong>, not peak hardness. Nickel and the higher
            chromium in EN24 shift its hardenability so that a hard martensitic structure forms deeper and more
            uniformly in large diameters, with less risk of soft cores. For a thin or medium part the two grades behave
            almost identically; for a thick crankshaft or heavy axle, EN24 hardens more consistently through section.
          </p>
          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Steel Grade</TableHead>
                  <TableHead>Surface Hardness (HRC)</TableHead>
                  <TableHead>Typical Case Depth (mm)</TableHead>
                  <TableHead>Quenching Medium</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paramsData.map((row) => (
                  <TableRow key={row.grade}>
                    <TableCell className="font-medium">{row.grade}</TableCell>
                    <TableCell>{row.hardness}</TableCell>
                    <TableCell>{row.depth}</TableCell>
                    <TableCell>{row.quench}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="font-semibold text-primary">
            <Zap className="inline-block mr-2 h-5 w-5" />
            At {SITE_NAME}, every EN19 and EN24 component is processed on medium-frequency induction systems (10–50 kHz)
            and undergoes 100% hardness, case-depth and microstructure inspection before delivery.
          </p>
          <p>
            For grade-specific process parameters and job-work details, see our dedicated{' '}
            <Link href="/induction-heat-treatment/en19-steel-induction-hardening" className="text-primary hover:underline">
              EN19 steel induction hardening
            </Link>{' '}
            and{' '}
            <Link href="/induction-heat-treatment/en24-steel-hardening" className="text-primary hover:underline">
              EN24 steel hardening
            </Link>{' '}
            service pages.
          </p>

          {/* Inline conversion bridge */}
          <div className="not-prose my-10 rounded-xl border-2 border-primary/30 bg-secondary p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-foreground">Need EN19 or EN24 hardening in Ludhiana? Get a quote</h3>
            <p className="mt-2 text-muted-foreground">
              {SITE_NAME} delivers precision induction hardening for EN19 (709M40 / 4140) and EN24 (817M40 / 4340)
              components across Ludhiana, Punjab and North India — with full inspection reports.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/induction-heat-treatment/en19-steel-induction-hardening">
                  EN19 Hardening <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/induction-heat-treatment/en24-steel-hardening">EN24 Hardening</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://wa.me/917900000776" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>

          <h2 id="applications" className="text-3xl font-bold mt-12 scroll-mt-24">
            Applications: Choosing EN19 vs EN24
          </h2>
          <p>
            The selection logic in practice is straightforward. Use EN19 for medium-load, cost-sensitive parts in
            lighter sections, and step up to EN24 for high-load, fatigue-critical or large-diameter components where
            through-section toughness is essential.
          </p>
          <div className="my-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Industry</TableHead>
                  <TableHead>Typical EN19 &amp; EN24 Applications</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applicationsData.map((row) => (
                  <TableRow key={row.industry}>
                    <TableCell className="font-medium">{row.industry}</TableCell>
                    <TableCell>{row.applications}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p>
            Whichever grade your drawing specifies, the heat-treatment route is similar: clean the part, induction-heat
            the surface to 850–950°C, quench to martensite, optionally temper at 150–250°C to relieve stress, then
            verify hardness and case depth. Ready to move forward? Request a tailored quote through our{' '}
            <Link href="/get-quote" className="text-primary hover:underline">
              get a quote
            </Link>{' '}
            page.
          </p>

          <h2 id="faq" className="text-3xl font-bold mt-12 scroll-mt-24">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-xl font-semibold text-foreground">{f.q}</h3>
                <p className="mt-1 text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mt-12">Conclusion: Matching the Grade to the Job</h2>
          <p>
            EN19 and EN24 are close cousins in the chromium-molybdenum family, but the nickel in EN24 (817M40 / 4340)
            buys higher tensile strength, deeper hardenability and superior toughness — at a higher cost. EN19 (709M40 /
            4140) remains the smart, economical choice for medium-load parts. Both achieve excellent induction-hardened
            surfaces of 55–60 HRC. At {SITE_NAME}, Ludhiana, our metallurgy team helps manufacturers select and harden
            the right grade with repeatable, fully inspected results for automotive, agricultural and export-oriented
            industries.
          </p>

          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}
