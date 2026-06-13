
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, FileCheck, MessageCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

export const metadata: Metadata = {
  title: 'Hardness Testing After Induction Hardening (HRC)',
  description: 'Hardness testing after induction hardening explained — Rockwell HRC, Vickers microhardness and case-depth checks with certified test reports from Ludhiana, Punjab.',
  keywords: [
    'hardness testing after induction hardening',
    'Rockwell HRC test',
    'Vickers microhardness',
    'case depth verification',
    'hardness test report Ludhiana',
    'induction hardening QC Punjab',
  ],
  alternates: {
    canonical: '/blog/hardness-testing-after-induction-hardening',
  },
  openGraph: {
    title: 'Hardness Testing After Induction Hardening (HRC)',
    description: 'How we verify hardened parts using Rockwell HRC, Vickers microhardness and case-depth traverse — with certified test reports from Ludhiana, Punjab.',
    url: 'https://thakurindustries.in/blog/hardness-testing-after-induction-hardening',
    type: 'article',
    locale: 'en_IN',
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hardness Testing After Induction Hardening (HRC)',
    description: 'Rockwell HRC, Vickers microhardness and case-depth verification with certified test reports from Ludhiana, Punjab.',
  },
};

const PAGE_URL = 'https://thakurindustries.in/blog/hardness-testing-after-induction-hardening';
const PUBLISH_DATE = '2026-06-13';
const MODIFIED_DATE = '2026-06-13';

const hardnessMethods = [
  { method: 'Rockwell Hardness (HRC)', measures: 'Surface hardness of finished parts', scale: 'HRC / HRB', bestFor: 'Fast batch inspection of hardened steel' },
  { method: 'Vickers Microhardness', measures: 'Precise hardness on small or thin zones', scale: 'HV', bestFor: 'Lab verification, OEM and export parts' },
  { method: 'Case-Depth Traverse', measures: 'Thickness of the hardened layer', scale: 'HV (light loads)', bestFor: 'Confirming effective case depth' },
];

const qcParams = [
  { parameter: 'Surface Hardness', purpose: 'To verify strength and wear resistance', method: 'Rockwell HRC' },
  { parameter: 'Case Depth', purpose: 'To ensure a sufficient hardened zone', method: 'Microhardness profiling' },
  { parameter: 'Core Hardness', purpose: 'To confirm ductility and support', method: 'Rockwell HRB' },
  { parameter: 'Hardness Uniformity', purpose: 'To detect over- or under-heating', method: 'Multi-point testing' },
  { parameter: 'Heat-Affected Zone', purpose: 'To check metallurgical structure', method: 'Microstructural analysis' },
];

const caseStudyResults = {
  surfaceHardness: '57 HRC',
  caseDepth: '2.05 mm',
  uniformity: '±0.05 mm',
};

const faqs = [
  {
    question: 'Why is hardness testing done after induction hardening?',
    answer:
      'Hardness testing after induction hardening confirms that heating and quenching actually produced a hard martensitic case. It verifies surface hardness in HRC, checks effective case depth and detects soft spots before parts leave the shop.',
  },
  {
    question: 'What HRC value should an induction-hardened part reach?',
    answer:
      'Most induction-hardened alloy steels such as EN19 and EN24 reach 55–62 HRC on the surface. The exact target depends on the steel grade and the drawing specification supplied by the customer.',
  },
  {
    question: 'How is case depth measured after induction hardening?',
    answer:
      'Case depth is measured with a Vickers microhardness traverse on a sectioned and polished sample. Indentations are made from the surface inward, and effective case depth is read at the point the hardness drops to a defined limit, typically 513 HV (around 50 HRC).',
  },
  {
    question: 'Do you provide a hardness test report with every job?',
    answer:
      'Yes. Every hardened batch from our Ludhiana facility ships with a test report listing surface hardness in HRC, measured case depth, uniformity readings and the linked job or batch number for full traceability.',
  },
];

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Hardness Testing After Induction Hardening (HRC)',
  description:
    'A practical guide to hardness testing after induction hardening using Rockwell HRC, Vickers microhardness and case-depth verification, with certified test reports.',
  image: 'https://thakurindustries.in/og/hardness-testing-after-induction-hardening.jpg',
  author: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: 'https://thakurindustries.in',
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: { '@type': 'ImageObject', url: 'https://thakurindustries.in/logo.png' },
  },
  datePublished: PUBLISH_DATE,
  dateModified: MODIFIED_DATE,
  articleSection: 'Quality Control',
  keywords: [
    'hardness testing after induction hardening',
    'Rockwell HRC test',
    'Vickers microhardness',
    'case depth verification Ludhiana',
  ],
  mainEntityOfPage: PAGE_URL,
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thakurindustries.in/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://thakurindustries.in/blog' },
    { '@type': 'ListItem', position: 3, name: 'Hardness Testing After Induction Hardening', item: PAGE_URL },
  ],
};

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find((img) => img.id === 'blogHardnessTesting');

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
              <span className="truncate">Hardness Testing After Induction Hardening</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Hardness Testing After Induction Hardening
            </h1>

            <div className="mt-4 text-sm text-muted-foreground not-prose">
              By <span className="font-semibold text-foreground">{SITE_NAME} Metallurgy Team</span> ·
              Reviewed by our QC &amp; Heat-Treatment Engineers ·
              Published June 2026 · Updated 13 June 2026
            </div>

            <p className="mt-4 text-xl text-muted-foreground">
              Hardness testing after induction hardening is the final check that proves a part met spec.
              We measure surface hardness in HRC with a Rockwell tester, confirm effective case depth by
              Vickers microhardness traverse and record uniformity, then issue a certified test report for
              every batch from our Ludhiana, Punjab facility.
            </p>
          </div>

          {featureImage && (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-xl my-8">
              <Image
                src={featureImage.imageUrl}
                alt="Technician performing hardness testing after induction hardening using a Rockwell HRC tester"
                data-ai-hint={featureImage.imageHint}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          )}

          {/* Table of contents */}
          <nav aria-label="Table of contents" className="not-prose my-8 rounded-lg border bg-card p-6">
            <h2 className="text-lg font-bold text-foreground">On this page</h2>
            <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              <li><a href="#why-test" className="text-primary hover:underline">Why test hardness</a></li>
              <li><a href="#methods" className="text-primary hover:underline">Test methods at a glance</a></li>
              <li><a href="#rockwell" className="text-primary hover:underline">Rockwell HRC method</a></li>
              <li><a href="#case-depth" className="text-primary hover:underline">Case-depth verification</a></li>
              <li><a href="#qc-process" className="text-primary hover:underline">Our QC process &amp; test reports</a></li>
              <li><a href="#faq" className="text-primary hover:underline">FAQ</a></li>
            </ul>
          </nav>

          <h2 id="why-test" className="text-3xl font-bold mt-12 scroll-mt-24">Why Test Hardness After Induction Hardening</h2>
          <p>
            Achieving the right surface hardness and case depth in <Link href="/blog/induction-hardening-process-explained">induction hardening</Link> is
            never guesswork — it is a science built on measurement. Hardness testing measures a material&rsquo;s resistance to
            deformation using a controlled indenter. After induction hardening, that reading tells us how effectively the
            surface transformed from softer ferrite or pearlite into hard martensite.
          </p>
          <p>Verifying hardness after the process:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Confirms that the heating and quenching cycle worked correctly</li>
            <li>Verifies that case depth and surface hardness meet the drawing specification</li>
            <li>Catches soft spots, over-hardening or shallow case before parts ship</li>
            <li>Ensures the component withstands wear, load and fatigue in real service</li>
          </ul>

          {/* Snippet play: methods list + comparison table */}
          <h2 id="methods" className="text-3xl font-bold mt-12 scroll-mt-24">Hardness Test Methods at a Glance</h2>
          <p>Three methods cover almost every hardened part we deliver:</p>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li><strong>Rockwell hardness (HRC)</strong> — fast surface readings for finished components.</li>
            <li><strong>Vickers microhardness</strong> — precise measurement on small or thin zones.</li>
            <li><strong>Case-depth traverse</strong> — a hardness profile from surface to core.</li>
          </ol>
          <div className="my-8 overflow-x-auto not-prose">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b bg-muted/50 text-left">
                  <th className="p-3 font-semibold">Method</th>
                  <th className="p-3 font-semibold">What it measures</th>
                  <th className="p-3 font-semibold">Scale</th>
                  <th className="p-3 font-semibold">Best for</th>
                </tr>
              </thead>
              <tbody>
                {hardnessMethods.map((row) => (
                  <tr key={row.method} className="border-b">
                    <td className="p-3 font-medium">{row.method}</td>
                    <td className="p-3 text-muted-foreground">{row.measures}</td>
                    <td className="p-3 text-muted-foreground">{row.scale}</td>
                    <td className="p-3 text-muted-foreground">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="rockwell" className="text-3xl font-bold mt-12 scroll-mt-24">Rockwell HRC Method</h2>
          <p>
            The Rockwell test is the workhorse of hardness testing after induction hardening and the most common method in
            Punjab industry. A diamond cone indenter is pressed into the surface under a fixed load, and the depth of
            penetration is converted directly into a hardness number.
          </p>
          <p><strong>Scales used:</strong> the C scale (HRC) for hardened steels, typically reading 50–62 HRC, and the B scale (HRB) for softer cores.</p>
          <p><strong>Why we use it:</strong> it is fast, repeatable and non-destructive, making it ideal for inspecting whole production batches. We take multiple readings across each part to confirm hardness uniformity rather than relying on a single spot.</p>
          <p>
            Steels such as EN19 and EN24 respond predictably here — see our
            {' '}<Link href="/blog/en19-and-en24-alloy-steel-induction-hardening-guide">EN19 and EN24 hardening guide</Link> for typical target values by grade.
          </p>

          <h2 id="case-depth" className="text-3xl font-bold mt-12 scroll-mt-24">Case-Depth Verification</h2>
          <p>
            Surface hardness alone does not guarantee performance — the hardened layer must also be deep enough to carry
            load. Case depth is verified with a Vickers microhardness traverse: a sample is sectioned, mounted and polished,
            then a row of tiny indentations is made from the surface inward.
          </p>
          <p>
            Effective case depth is the distance from the surface to the point where hardness falls to a defined limit
            (commonly 513 HV, roughly 50 HRC). Microhardness gives a complete metallurgical profile — a must for OEM and
            export-grade work. For how we dial in that depth during the process itself, see
            {' '}<Link href="/blog/case-depth-control-in-induction-hardening">case-depth control in induction hardening</Link>.
          </p>

          <h2 id="qc-process" className="text-3xl font-bold mt-12 scroll-mt-24">Our QC Process &amp; Test Reports</h2>
          <p>Every hardened batch passes through a fixed set of quality-control checks before it is released:</p>
          <div className="my-8 overflow-x-auto not-prose">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Parameter</TableHead>
                  <TableHead>Purpose</TableHead>
                  <TableHead>Method Used</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {qcParams.map((row) => (
                  <TableRow key={row.parameter}>
                    <TableCell className="font-medium">{row.parameter}</TableCell>
                    <TableCell>{row.purpose}</TableCell>
                    <TableCell>{row.method}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p>
            <strong>Worked example:</strong> for an automotive gear shaft in EN19 we recorded a surface hardness of{' '}
            <strong>{caseStudyResults.surfaceHardness}</strong>, a case depth of{' '}
            <strong>{caseStudyResults.caseDepth}</strong> and uniformity within{' '}
            <strong>{caseStudyResults.uniformity}</strong> — passing export-quality inspection with 100% acceptance.
          </p>
          <p>What a verified report delivers to you:</p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Consistent quality:</span> uniformity confirmed across large production batches.</div></li>
            <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Failure prevention:</span> soft spots, over-hardening and shallow case caught early.</div></li>
            <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Compliance:</span> readings matched to customer specs and recognised standards.</div></li>
            <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Traceability:</span> each test record links to a specific job or batch number.</div></li>
            <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Client confidence:</span> OEMs and exporters rely on data-backed proof of performance.</div></li>
          </ul>
          <p>
            Our testing follows methods aligned with widely used metallurgical references such as the{' '}
            <a href="https://www.asminternational.org/" target="_blank" rel="noopener noreferrer nofollow">ASM International</a> heat-treatment standards.
            See our <Link href="/quality-certifications">quality certifications</Link> for the full inspection scope, and how this fits
            hardened <Link href="/induction-heat-treatment/gears">gears</Link> and{' '}
            <Link href="/induction-heat-treatment/shafts">shafts</Link>.
          </p>

          {/* Inline conversion CTA */}
          <div className="not-prose my-12 rounded-lg border border-primary/30 bg-primary/5 p-6">
            <div className="flex items-start gap-4">
              <FileCheck className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Need hardened parts with HRC test reports in Ludhiana?</h3>
                <p className="mt-2 text-muted-foreground">
                  Get a quote with certified hardness and case-depth reports backing every batch.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/quality-certifications">Get a quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://wa.me/917900000776" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Visible FAQ */}
          <h2 id="faq" className="text-3xl font-bold mt-12 scroll-mt-24">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-xl font-semibold text-foreground">{faq.question}</h3>
                <p className="mt-1 text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mt-12">Conclusion: Hardness Verified, Quality Certified</h2>
          <p>
            At {SITE_NAME}, disciplined hardness testing after induction hardening lets industries across Punjab, Haryana and
            Delhi NCR build products that last longer, perform better and meet international benchmarks. Surface hardness in
            HRC, effective case depth and uniformity are all measured, recorded and certified before a single part ships.
          </p>

          <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
            <h3 className="text-2xl font-bold">Need verified hardness testing?</h3>
            <p className="mt-2 text-muted-foreground">
              Partner with {SITE_NAME} for tested, certified surface-hardening solutions in Ludhiana, Punjab.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button asChild>
                <Link href="/get-quote">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/quality-certifications">View Quality Certifications</Link>
              </Button>
            </div>
          </div>

          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}
