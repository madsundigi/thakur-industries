
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, MessageSquare } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

const PAGE_PATH = '/blog/polymer-vs-water-quenching';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const DATE_PUBLISHED = '2025-11-10';
const DATE_MODIFIED = '2026-06-13';
const OG_IMAGE = `${SITE_URL}/images/images/37.png`;
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent('Hello, I need controlled-quench induction hardening in Ludhiana. Please find my drawing attached.');

export const metadata: Metadata = {
  title: 'Polymer vs Water Quenching: Which Reduces Cracking?',
  description:
    'Polymer vs water quenching compared on cooling rate, distortion and crack risk. See which quench our Ludhiana, Punjab induction hardening shop uses and why.',
  keywords: [
    'polymer vs water quenching',
    'polymer quenching',
    'water quenching',
    'quenching crack risk',
    'distortion in quenching',
    'induction hardening Ludhiana',
    'heat treatment Punjab',
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: 'Polymer vs Water Quenching: Which Reduces Cracking?',
    description:
      'A technical comparison of polymer and water quenching on cooling rate, distortion and crack risk, from a Ludhiana, Punjab induction hardening shop.',
    url: PAGE_URL,
    siteName: SITE_NAME,
    type: 'article',
    locale: 'en_IN',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Polymer vs water quenching comparison in induction hardening' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Polymer vs Water Quenching: Which Reduces Cracking?',
    description:
      'Polymer vs water quenching compared on cooling rate, distortion and crack risk — and which one reduces cracking.',
    images: [OG_IMAGE],
  },
};

const summaryData = [
  { parameter: "Cooling rate", water: "Very fast / aggressive", polymer: "Moderate, adjustable (5–20%)" },
  { parameter: "Distortion", water: "High", polymer: "Low" },
  { parameter: "Crack risk", water: "High (thermal shock)", polymer: "Low" },
  { parameter: "Cost", water: "Lowest, simplest", polymer: "Higher; needs concentration monitoring" },
  { parameter: "Best for", water: "EN8, C45 carbon steels, simple parts", polymer: "EN19, EN24, 4140, 4340, complex/alloy parts" },
];

const comparisonData = [
    { parameter: "Cooling Speed", water: "Very Fast", polymer: "Moderate (adjustable)" },
    { parameter: "Distortion Risk", water: "High", polymer: "Low" },
    { parameter: "Cracking Risk", water: "High", polymer: "Low" },
    { parameter: "Surface Finish", water: "Moderate (oxidation possible)", polymer: "Excellent" },
    { parameter: "Hardness Control", water: "Difficult", polymer: "Precise" },
    { parameter: "Maintenance", water: "Simple", polymer: "Requires concentration monitoring" },
    { parameter: "Ideal Materials", water: "EN8, C45, carbon steels", polymer: "EN19, EN24, 4140, 4340" },
    { parameter: "Applications", water: "Simple parts", polymer: "Complex, heavy, or alloy parts" },
];

const concentrationData = [
    { concentration: "5%", rate: "Faster (close to water)", example: "EN8 shafts, axles" },
    { concentration: "10%", rate: "Moderate", example: "EN19, EN24 gears" },
    { concentration: "15%", rate: "Slower", example: "4340 crankshafts, large rollers" },
    { concentration: "20%", rate: "Gentle cooling", example: "Thin or complex parts" },
];

const metallurgicalImpact = [
    { property: "Martensite Formation", water: "Complete", polymer: "Controlled" },
    { property: "Case Depth", water: "Slightly higher", polymer: "Uniform" },
    { property: "Grain Structure", water: "Fine but risk of cracks", polymer: "Balanced" },
    { property: "Residual Stresses", water: "High", polymer: "Low" },
    { property: "Distortion", water: "Common", polymer: "Minimal" },
];

const applicationsData = [
    { industry: "Automotive", medium: "Polymer", examples: "Shafts, gears, axles" },
    { industry: "Agricultural Machinery", medium: "Polymer", examples: "Tractor spindles, PTO shafts" },
    { industry: "Forging Units", medium: "Water", examples: "EN8 forgings" },
    { industry: "Machinery Components", medium: "Polymer", examples: "Rollers, couplings, spindles" },
    { industry: "Tool & Die", medium: "Polymer", examples: "Dies, molds, and cutting tools" },
];

const faqs = [
  {
    question: "Does polymer or water quenching reduce cracking more?",
    answer:
      "Polymer quenching reduces cracking far more than water. Water cools so aggressively that the rapid temperature gradient between surface and core creates high residual stress, which causes thermal-shock cracks in alloy and complex parts. A 5–20% polyalkylene glycol (PAG) polymer slows and evens out cooling, lowering both crack and distortion risk while still forming hard martensite.",
  },
  {
    question: "When is water quenching still the better choice?",
    answer:
      "Water quenching is the better choice for plain low-to-medium carbon steels such as EN8 and C45 in simple shapes, where its very fast cooling delivers up to 60 HRC at the lowest cost. Forging units quenching basic EN8 parts often prefer water because the setup is simple and the parts tolerate aggressive cooling.",
  },
  {
    question: "What polymer concentration should be used?",
    answer:
      "Concentration is selected from the cooling rate the part needs. Around 5% behaves close to water for EN8 shafts and axles, 10% gives moderate cooling for EN19 and EN24 gears, 15% suits 4340 crankshafts and large rollers, and 20% gives gentle cooling for thin or complex parts. The polymer is PAG and concentration must be monitored to keep results repeatable.",
  },
  {
    question: "Which quench do you use for EN19, EN24 and 4340 parts?",
    answer:
      `For alloy steels such as EN19, EN24, 4140 and 4340 we use polymer quenching at ${SITE_NAME}, Ludhiana, because these grades need controlled cooling to avoid cracking and distortion. Water is reserved for simple carbon-steel parts that benefit from its faster cooling.`,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": { "@type": "Answer", "text": f.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` },
    { "@type": "ListItem", "position": 3, "name": "Polymer vs Water Quenching", "item": PAGE_URL },
  ],
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Polymer vs Water Quenching: Which Reduces Cracking?",
  "image": OG_IMAGE,
  "author": { "@type": "Organization", "name": SITE_NAME, "url": SITE_URL },
  "publisher": { "@type": "Organization", "name": SITE_NAME, "logo": { "@type": "ImageObject", "url": "https://thakurindustries.in/logo.png" } },
  "datePublished": DATE_PUBLISHED,
  "dateModified": DATE_MODIFIED,
  "articleSection": "Heat Treatment Processes",
  "keywords": ["polymer vs water quenching", "quenching crack risk", "distortion in quenching", "induction hardening Ludhiana"],
  "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
  "inLanguage": "en-IN",
};

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogQuenchingComparison');

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
                    <span className='truncate'>Polymer vs Water Quenching</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Polymer vs Water Quenching: Which Reduces Cracking?</h1>
                <p className="mt-4 text-xl text-muted-foreground">A technical comparison of polymer and water quenching in induction hardening — cooling rate, distortion, crack risk, and which one we run for alloy steels in Ludhiana, Punjab.</p>
                <div className="mt-4 text-sm text-muted-foreground not-prose">
                    <p>By the {SITE_NAME} Heat Treatment Team · Reviewed by our metallurgy lead</p>
                    <p>Published 10 November 2025 · Updated 13 June 2026</p>
                </div>
            </div>

            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Polymer vs water quenching comparison in induction hardening"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 896px"
                        className="object-cover"
                    />
                </div>
            )}

            <p className="lead text-xl font-medium">Polymer quenching reduces cracking and distortion more than water quenching. Water cools fastest and is cheapest, but its thermal shock cracks alloy and complex parts. For EN19, EN24, 4140 and 4340, a controlled 5–20% polymer quench is the safer choice; water still suits simple EN8 and C45 parts.</p>

            <div className="my-8 not-prose rounded-lg border bg-muted/40 p-6">
                <h2 className="mt-0 text-xl font-bold">On this page</h2>
                <ul className="mt-3 space-y-1">
                    <li><Link href="#comparison" className="text-primary hover:underline">Polymer vs water quenching: comparison table</Link></li>
                    <li><Link href="#how-it-works" className="text-primary hover:underline">How each quench works</Link></li>
                    <li><Link href="#distortion-cracking" className="text-primary hover:underline">Distortion and cracking risk</Link></li>
                    <li><Link href="#what-we-use" className="text-primary hover:underline">What we use and why</Link></li>
                    <li><Link href="#faq" className="text-primary hover:underline">Frequently asked questions</Link></li>
                </ul>
            </div>

            <h2 id="comparison" className="text-3xl font-bold mt-12 scroll-mt-24">Polymer vs Water Quenching: Comparison Table</h2>
            <p>Quenching is the final, decisive stage of <Link href="/induction-heat-treatment">induction heat treatment</Link>. After the surface is heated to its austenitizing temperature (850–950°C), the part is rapidly cooled to transform the structure into martensite — the hard phase responsible for wear resistance. The medium you cool in decides hardness, distortion and crack risk. Here is the at-a-glance verdict.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Water Quenching</TableHead>
                            <TableHead>Polymer Quenching</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {summaryData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.water}</TableCell>
                                <TableCell>{row.polymer}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 id="how-it-works" className="text-3xl font-bold mt-12 scroll-mt-24">How Each Quench Works</h2>
            <h3 className="text-2xl font-semibold mt-6">Water Quenching: Fast and Aggressive Cooling</h3>
            <p>Water quenching is the oldest and simplest method of cooling in heat treatment. It offers maximum cooling speed, which helps achieve high surface hardness but can also cause cracking or distortion if not controlled properly.</p>
            <p className="font-semibold">Advantages</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Extremely fast cooling — ideal for low-to-medium carbon steels (like EN8/C45)</li>
                <li>Simple and cost-effective setup</li>
                <li>Produces high surface hardness (up to 60 HRC)</li>
            </ul>
            <p className="font-semibold">Limitations</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>High risk of thermal shock and cracking</li>
                <li>Can cause distortion in thin or complex components</li>
                <li>Less suitable for alloy steels (EN19, EN24, 4340) which need controlled cooling</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6">Polymer Quenching: Controlled and Customizable Cooling</h3>
            <p>Polymer quenching uses a water-soluble polymer (such as PAG – Polyalkylene Glycol) mixed in water, typically in concentrations between 5% and 20%, to create a controlled cooling medium. It offers slower, more uniform cooling compared to water, making it ideal for complex parts and high-alloy steels used in Punjab’s precision engineering and automotive sectors.</p>
            <p className="font-semibold">Advantages</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Adjustable cooling rate (via polymer concentration)</li>
                <li>Reduced distortion and cracking risk</li>
                <li>Cleaner process with less oxidation</li>
                <li>Suitable for EN19, EN24, 4140, 4340, and tool steels</li>
                <li>Environmentally safe and easy to maintain</li>
            </ul>
            <p>For a deeper look at how concentration and flow are dialled in, see our guide to the <Link href="/quenching-process">quenching process</Link> and the full <Link href="/blog/induction-hardening-process-explained">induction hardening process</Link>.</p>

            <h3 className="text-2xl font-semibold mt-6">Cooling Rate by Parameter</h3>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Water Quenching</TableHead>
                            <TableHead>Polymer Quenching (10%)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.water}</TableCell>
                                <TableCell>{row.polymer}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h3 className="text-2xl font-semibold mt-6">How Polymer Concentration Affects Cooling</h3>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Polymer Concentration</TableHead>
                            <TableHead>Cooling Rate</TableHead>
                            <TableHead>Application Example</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {concentrationData.map((row) => (
                            <TableRow key={row.concentration}>
                                <TableCell className="font-medium">{row.concentration}</TableCell>
                                <TableCell>{row.rate}</TableCell>
                                <TableCell>{row.example}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 id="distortion-cracking" className="text-3xl font-bold mt-12 scroll-mt-24">Distortion and Cracking Risk</h2>
            <p>Cracking and distortion both come from the same root cause: a steep temperature gradient between the rapidly cooled surface and the still-hot core. Water cools so fast that this gradient — and the residual stress it creates — peaks, which is why water-quenched alloy and complex parts are prone to thermal-shock cracks. Polymer quenching narrows that gradient, so martensite still forms but residual stress and distortion stay low.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Property</TableHead>
                            <TableHead>Water Quenching</TableHead>
                            <TableHead>Polymer Quenching</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {metallurgicalImpact.map((row) => (
                            <TableRow key={row.property}>
                                <TableCell className="font-medium">{row.property}</TableCell>
                                <TableCell>{row.water}</TableCell>
                                <TableCell>{row.polymer}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p>For a control-side view, our notes on <Link href="/blog/induction-hardening-process-explained">the induction hardening process</Link> and <Link href="/blog/advantages-of-polymer-quenching-over-oil">polymer quenching versus oil</Link> explain how repeatable cooling protects <Link href="/gear-hardening">gears</Link> and <Link href="/shaft-hardening">shafts</Link> from soft spots and cracks. The American Society for Metals offers further background on quench-media selection (<a href="https://www.asminternational.org/" target="_blank" rel="noopener noreferrer nofollow">ASM International</a>).</p>

            <h2 id="what-we-use" className="text-3xl font-bold mt-12 scroll-mt-24">What We Use and Why</h2>
            <p>At {SITE_NAME}, Ludhiana, the quench is matched to material and geometry rather than chosen by habit. For modern automotive and industrial components in alloy grades, polymer quenching gives better dimensional control, lower cracking risk, higher repeatability and a cleaner, safer process. Water is kept for simple carbon-steel parts that benefit from its faster cooling. The table below shows the typical pairing by industry.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Industry</TableHead>
                            <TableHead>Preferred Quenching Medium</TableHead>
                            <TableHead>Examples</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {applicationsData.map((row) => (
                            <TableRow key={row.industry}>
                                <TableCell className="font-medium">{row.industry}</TableCell>
                                <TableCell>{row.medium}</TableCell>
                                <TableCell>{row.examples}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p>The verdict: for EN8 and C45 in simple shapes, water is fast and economical. For EN19, EN24, 4140, 4340 and any complex or heavy part where cracking and distortion matter, controlled polymer quenching wins. {SITE_NAME}, Ludhiana runs precision polymer quenching across these alloy steels, delivering consistent hardness with minimal distortion on every part.</p>

            <div className="my-10 not-prose rounded-lg border-2 border-primary/30 bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need controlled-quench induction hardening in Ludhiana?</h3>
                <p className="mt-2 text-muted-foreground">Get a quote from {SITE_NAME} for polymer and water-based quenching matched to your material, hardness and crack-risk requirements.</p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <Button asChild>
                        <Link href="/induction-heat-treatment">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageSquare className="mr-2 h-4 w-4" /> WhatsApp Us</a>
                    </Button>
                </div>
            </div>

            <h2 id="faq" className="text-3xl font-bold mt-12 scroll-mt-24">Frequently Asked Questions</h2>
            <div className="space-y-6">
                {faqs.map((f) => (
                    <div key={f.question}>
                        <h3 className="text-xl font-semibold mt-6">{f.question}</h3>
                        <p className="text-muted-foreground">{f.answer}</p>
                    </div>
                ))}
            </div>

            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for controlled quenching job work in Punjab?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for polymer and water-based quenching services tailored to your materials and components.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/quenching-process">Explore Quenching Services</Link>
                    </Button>
                </div>
            </div>
          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}
