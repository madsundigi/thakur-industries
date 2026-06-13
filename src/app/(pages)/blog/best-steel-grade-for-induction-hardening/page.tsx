
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

const PAGE_PATH = '/blog/best-steel-grade-for-induction-hardening';
const PAGE_URL = `https://thakurindustries.in${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'Best Steel Grades for Induction Hardening (With HRC)',
  description:
    'Best steel grade for induction hardening compared by carbon %, HRC and use case: EN8, EN19, EN24, 4140, 20MnCr5. Job work in Ludhiana, Punjab.',
  keywords: [
    'best steel grade for induction hardening',
    'steel for induction hardening',
    'induction hardening steel grades',
    'EN19 induction hardening HRC',
    'EN24 induction hardening hardness',
    '4140 induction hardening',
    'steel hardening job work Ludhiana',
    'heat treatment Punjab',
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: 'Best Steel Grades for Induction Hardening (With HRC)',
    description:
      'Which steel grade hardens best? Compare EN8, EN19, EN24, 4140 and 20MnCr5 by carbon content, HRC and application. Heat treatment job work in Ludhiana, Punjab.',
    url: PAGE_URL,
    type: 'article',
    siteName: SITE_NAME,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Steel Grades for Induction Hardening (With HRC)',
    description:
      'Best steel grade for induction hardening: EN8, EN19, EN24, 4140 and 20MnCr5 compared by carbon %, HRC and use case. Job work in Ludhiana, Punjab.',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Best Steel Grades for Induction Hardening (With HRC)',
  author: { '@type': 'Organization', name: 'Thakur Industries' },
  publisher: {
    '@type': 'Organization',
    name: 'Thakur Industries',
    logo: { '@type': 'ImageObject', url: 'https://thakurindustries.in/logo.png' },
  },
  datePublished: '2026-06-13',
  dateModified: '2026-06-13',
  articleSection: 'Heat Treatment Materials',
  keywords: [
    'best steel grade for induction hardening',
    'induction hardening steel grades',
    'EN8 EN19 EN24 4140 induction hardening',
    'steel HRC after induction hardening',
  ],
  image: 'https://thakurindustries.in/images/images/8.png',
  mainEntityOfPage: PAGE_URL,
  inLanguage: 'en-IN',
};

const faqs = [
  {
    question: 'What is the best steel grade for induction hardening?',
    answer:
      'For most precision and load-bearing parts, EN19 (4140) and EN24 (4340) are the best all-round steel grades for induction hardening because they reach 55–60 HRC reliably and offer a tough alloy core. EN8 is the best economical choice for lighter-duty parts, while 20MnCr5 is best when the steel must be carburized first.',
  },
  {
    question: 'How much carbon does steel need for induction hardening?',
    answer:
      'A steel generally needs at least 0.30 to 0.35 percent carbon to harden directly by induction. Below that, there is not enough carbon to form hard martensite, so a low-carbon grade like 20MnCr5 must be carburized (case hardened) first to enrich the surface before quenching.',
  },
  {
    question: 'What HRC can EN19 and EN24 reach after induction hardening?',
    answer:
      'EN19 typically reaches 52–58 HRC and EN24 reaches 55–60 HRC after induction hardening and a low-temperature temper. The exact value depends on carbon content, quench severity and the temper used to balance hardness against toughness.',
  },
  {
    question: 'Is 4140 steel good for induction hardening?',
    answer:
      'Yes. 4140 is one of the most popular induction hardening steels worldwide. With about 0.40 percent carbon plus chromium and molybdenum, it hardens to 52–58 HRC, resists wear, and keeps a strong, ductile core for shafts, axles and gears.',
  },
  {
    question: 'Can you induction harden mild steel?',
    answer:
      'Plain mild steel (under 0.25 percent carbon) cannot be hardened effectively by induction because it lacks the carbon needed to form martensite. Such parts should be case hardened or carburized first, or you should switch to a medium-carbon grade like EN8 or EN19.',
  },
  {
    question: 'Which steel grades can Thakur Industries harden in Ludhiana?',
    answer:
      'Thakur Industries provides induction hardening job work in Ludhiana, Punjab for EN8, EN19, EN24, 4140, 4340, 20MnCr5 and other medium and high-carbon alloy steels, with polymer and water-based quenching, hardness testing and case depth verification.',
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

const gradeData = [
  {
    grade: 'EN8 (080M40)',
    carbon: '~0.40% C (medium carbon)',
    hrc: '50–55 HRC',
    bestUse: 'Economical shafts, spindles, light-duty gears',
  },
  {
    grade: 'EN19 (4140)',
    carbon: '~0.40% C + Cr-Mo',
    hrc: '52–58 HRC',
    bestUse: 'Crankshafts, axles, gears, high-stress shafts',
  },
  {
    grade: 'EN24 (4340)',
    carbon: '~0.40% C + Ni-Cr-Mo',
    hrc: '55–60 HRC',
    bestUse: 'Heavy-duty gears, drive shafts, aerospace-grade parts',
  },
  {
    grade: '4140 (alloy)',
    carbon: '~0.40% C + Cr-Mo',
    hrc: '52–58 HRC',
    bestUse: 'General-purpose shafts, rollers, hydraulic parts',
  },
  {
    grade: '20MnCr5',
    carbon: '~0.20% C (low carbon, carburize first)',
    hrc: '58–62 HRC (after carburizing)',
    bestUse: 'Gears, pinions, pins needing a deep hard case',
  },
];

const applicationData = [
  { application: 'Crankshafts & camshafts', grade: 'EN19 / EN24', reason: 'High fatigue strength with tough core' },
  { application: 'Transmission gears', grade: '20MnCr5 / EN24', reason: 'Hard wear case plus impact resistance' },
  { application: 'Drive & output shafts', grade: 'EN19 / 4140', reason: 'Balanced strength, machinability, cost' },
  { application: 'Light-duty spindles', grade: 'EN8', reason: 'Adequate hardness at lower material cost' },
  { application: 'Hydraulic rods & pins', grade: '4140 / EN24', reason: 'Wear resistance and surface integrity' },
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
          { name: 'Best Steel Grades for Induction Hardening', href: PAGE_PATH },
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
              <span className="truncate">Best Steel Grades for Induction Hardening</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Best Steel Grades for Induction Hardening
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground not-prose">
              <span>By the {SITE_NAME} Metallurgy Team</span>
              <span aria-hidden="true">·</span>
              <span>Reviewed by Senior Heat Treatment Engineer</span>
              <span aria-hidden="true">·</span>
              <span>Published June 2026 · Updated June 2026</span>
            </div>
            <p className="mt-4 text-xl text-muted-foreground">
              The best steel grades for induction hardening are medium and high-carbon alloy steels: EN8, EN19, EN24,
              4140 and 20MnCr5. The rule is simple — the steel needs roughly 0.30–0.50 percent carbon to harden
              directly. EN19, EN24 and 4140 give the best balance of hardness (52–60 HRC) and core toughness.
            </p>
          </div>

          {featureImage && (
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
              <Image
                src={featureImage.imageUrl}
                alt="EN-series and alloy steel bars selected for induction hardening"
                data-ai-hint={featureImage.imageHint}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                priority
                className="object-cover"
              />
            </div>
          )}

          <p>
            Choosing the right steel grade is the single biggest factor in whether an induction hardening job
            succeeds. Pick a steel with too little carbon and it will never reach the hardness you need; pick one
            that is too hard and brittle and the core may crack under load. For manufacturers and parts suppliers in
            Ludhiana and across Punjab, getting this choice right means longer component life, fewer rejections and
            lower cost per part.
          </p>

          <nav aria-label="Table of contents" className="my-8 not-prose rounded-lg border border-border bg-secondary/40 p-6">
            <h2 className="text-lg font-bold text-foreground">On this page</h2>
            <ul className="mt-3 space-y-2 text-primary">
              <li><a href="#grade-hrc-table" className="hover:underline">Grade, HRC &amp; best-use table</a></li>
              <li><a href="#what-makes-suitable" className="hover:underline">What makes a steel suitable</a></li>
              <li><a href="#top-grades" className="hover:underline">Top steel grades ranked</a></li>
              <li><a href="#selection-by-application" className="hover:underline">Grade selection by application</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
          </nav>

          <h2 id="grade-hrc-table" className="text-3xl font-bold mt-12 scroll-mt-24">
            Grade, HRC &amp; best-use table
          </h2>
          <p>
            Here is an at-a-glance summary of the best steel grades for induction hardening, their typical carbon
            content, the surface hardness they reach, and where each one fits best.
          </p>
          <div className="my-8 overflow-x-auto not-prose">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Steel Grade</TableHead>
                  <TableHead className="font-bold">Carbon / Alloy</TableHead>
                  <TableHead className="font-bold">Surface Hardness</TableHead>
                  <TableHead className="font-bold">Best Use</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gradeData.map((row) => (
                  <TableRow key={row.grade}>
                    <TableCell className="font-medium">{row.grade}</TableCell>
                    <TableCell>{row.carbon}</TableCell>
                    <TableCell>{row.hrc}</TableCell>
                    <TableCell>{row.bestUse}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <p>Ranked from the best all-round performers to the most specialised choice:</p>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li><strong>EN24 (4340)</strong> — highest hardness with the toughest core; best for heavy-duty gears and shafts.</li>
            <li><strong>EN19 (4140)</strong> — the workhorse alloy; excellent hardness, machinability and value.</li>
            <li><strong>4140</strong> — the international equivalent of EN19, ideal for general-purpose shafts and rollers.</li>
            <li><strong>EN8</strong> — the most economical medium-carbon choice for lighter-duty parts.</li>
            <li><strong>20MnCr5</strong> — best where a low-carbon part needs carburizing before hardening.</li>
          </ol>

          <h2 id="what-makes-suitable" className="text-3xl font-bold mt-12 scroll-mt-24">
            What makes a steel suitable (carbon %)
          </h2>
          <p>
            Induction hardening works by heating the steel surface above its critical temperature (around 850–900°C)
            and then quenching it rapidly so the structure transforms into hard martensite. The hardness of that
            martensite is controlled almost entirely by one thing: <strong>carbon content</strong>.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Below 0.25% C (mild steel)</strong> — too little carbon to form hard martensite. Will not harden by induction; must be case hardened or carburized first.</li>
            <li><strong>0.30%–0.50% C (medium carbon)</strong> — the sweet spot. Hardens directly to 50–60 HRC while keeping a tough core. EN8, EN19, EN24 and 4140 all sit here.</li>
            <li><strong>Above 0.55% C (high carbon)</strong> — reaches very high hardness but becomes brittle and prone to quench cracking; needs careful control.</li>
          </ul>
          <p>
            Alloying elements matter too. Chromium and molybdenum (in EN19 and 4140) improve hardenability, meaning
            the steel hardens deeper and more uniformly. Nickel (in EN24) adds toughness so the hardened part resists
            shock and fatigue. This is why alloy steels outperform plain carbon steels for demanding applications,
            even at the same carbon level. For the full method, see our{' '}
            <Link href="/blog/induction-hardening-process-explained" className="text-primary hover:underline">
              induction hardening process guide
            </Link>
            .
          </p>
          <p>
            If your base material is low in carbon, you are not out of options — it simply needs the carbon added at
            the surface first. That is the role of carburizing, explained in our comparison of{' '}
            <Link href="/blog/difference-between-induction-and-case-hardening" className="text-primary hover:underline">
              induction hardening vs case hardening
            </Link>
            . For broader metallurgical best practice, the{' '}
            <a
              href="https://www.asminternational.org/"
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="text-primary hover:underline"
            >
              ASM International
            </a>{' '}
            heat treating resources are a recognised authority.
          </p>

          <h2 id="top-grades" className="text-3xl font-bold mt-12 scroll-mt-24">
            Top steel grades ranked
          </h2>

          <h3 className="text-2xl font-semibold mt-6">EN8 — the economical medium-carbon choice</h3>
          <p>
            EN8 (080M40) is a plain medium-carbon steel with about 0.40 percent carbon. It hardens by induction to
            roughly 50–55 HRC, which is enough for many shafts, spindles and light-duty gears where extreme load is
            not a factor. EN8 is widely available, easy to machine and the lowest-cost option in this list, making it
            the default choice for general engineering parts. See our dedicated{' '}
            <Link href="/induction-heat-treatment/en8-steel-induction-hardening" className="text-primary hover:underline">
              EN8 steel induction hardening
            </Link>{' '}
            service for specifications.
          </p>

          <h3 className="text-2xl font-semibold mt-6">EN19 (4140) — the all-round workhorse</h3>
          <p>
            EN19, internationally known as 4140, is the most popular induction hardening alloy steel. With around
            0.40 percent carbon plus chromium and molybdenum, it hardens to 52–58 HRC with excellent hardenability and
            a tough core. It machines well in the annealed state and resists wear and fatigue once hardened, which is
            why it dominates automotive crankshafts, axles, gears and high-stress shafts. Explore our{' '}
            <Link href="/induction-heat-treatment/en19-steel-induction-hardening" className="text-primary hover:underline">
              EN19 steel induction hardening
            </Link>{' '}
            service for case depth and hardness options.
          </p>

          <h3 className="text-2xl font-semibold mt-6">EN24 (4340) — the high-performance grade</h3>
          <p>
            EN24, or 4340, adds nickel to the chromium-molybdenum recipe, giving it the best combination of surface
            hardness (55–60 HRC) and core toughness in this group. It withstands shock, heavy loads and fatigue,
            making it the grade of choice for heavy-duty gears, drive shafts and demanding aerospace-grade
            components. It costs more than EN19 but pays back in reliability on critical parts. Learn more on our{' '}
            <Link href="/induction-heat-treatment/en24-steel-hardening" className="text-primary hover:underline">
              EN24 steel hardening
            </Link>{' '}
            page.
          </p>

          <h3 className="text-2xl font-semibold mt-6">4140 — the international standard</h3>
          <p>
            4140 is the AISI designation that corresponds closely to EN19. It is specified worldwide for
            general-purpose shafts, rollers, hydraulic parts and tooling, hardening to 52–58 HRC. If your drawing
            calls out 4140 specifically, you can treat it the same way as EN19 for induction hardening. See our{' '}
            <Link href="/induction-heat-treatment/4140-steel-hardening" className="text-primary hover:underline">
              4140 steel hardening
            </Link>{' '}
            service for details.
          </p>

          <h3 className="text-2xl font-semibold mt-6">20MnCr5 — the carburizing grade</h3>
          <p>
            20MnCr5 is a low-carbon (around 0.20 percent) case-hardening steel. It cannot be induction hardened
            directly because it lacks surface carbon, but once carburized it forms a very hard case of 58–62 HRC over
            a tough, low-carbon core. This makes it ideal for gears, pinions and pins that need a deep, wear-resistant
            surface combined with shock resistance — common in tractor and transmission applications across Punjab.
          </p>

          <div className="my-10 not-prose rounded-lg border-2 border-primary/30 bg-primary/5 p-8">
            <h3 className="text-2xl font-bold text-foreground">
              Need a specific steel grade hardened in Ludhiana?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Get a quote from {SITE_NAME}. We harden EN8, EN19, EN24, 4140, 4340 and 20MnCr5 in-house with polymer and
              water-based quenching, hardness testing and case depth verification for automotive, agricultural and
              industrial parts.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/get-quote">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://wa.me/917900000776" rel="noopener noreferrer" target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>

          <h2 id="selection-by-application" className="text-3xl font-bold mt-12 scroll-mt-24">
            Grade selection by application
          </h2>
          <p>
            The best grade depends on the load, geometry and budget of the part. Use this guide to match common
            components to the right steel.
          </p>
          <div className="my-8 overflow-x-auto not-prose">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Application</TableHead>
                  <TableHead className="font-bold">Recommended Grade</TableHead>
                  <TableHead className="font-bold">Why</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applicationData.map((row) => (
                  <TableRow key={row.application}>
                    <TableCell className="font-medium">{row.application}</TableCell>
                    <TableCell>{row.grade}</TableCell>
                    <TableCell>{row.reason}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p>
            In practice, EN19 and 4140 cover the majority of everyday shafts and gears thanks to their balance of cost
            and performance. Step up to EN24 when the part is safety-critical or carries heavy fatigue loads. Reserve
            EN8 for budget-driven, lighter-duty work, and choose 20MnCr5 when a deep carburized case is essential.
            When you are unsure,{' '}
            <Link href="/get-quote" className="text-primary hover:underline">
              get a quote
            </Link>{' '}
            and our metallurgy team will recommend the most cost-effective grade and process for your drawing.
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
