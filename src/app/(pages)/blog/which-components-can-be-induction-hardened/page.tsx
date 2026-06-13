
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

const PAGE_PATH = '/blog/which-components-can-be-induction-hardened';
const PAGE_URL = `https://thakurindustries.in${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'Which Components Can Be Induction Hardened?',
  description:
    'Which components can be induction hardened? Gears, shafts, crankshafts, camshafts, rollers, bearings & more — with typical HRC. Job work in Ludhiana, Punjab.',
  keywords: [
    'which components can be induction hardened',
    'induction hardening components',
    'parts suitable for induction hardening',
    'induction hardenable steel parts',
    'induction hardening Ludhiana',
    'heat treatment job work Punjab',
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: 'Which Components Can Be Induction Hardened?',
    description:
      'A complete guide to which components can be induction hardened — automotive, agricultural and industrial parts with typical hardness. Job work in Ludhiana, Punjab.',
    url: PAGE_URL,
    type: 'article',
    siteName: SITE_NAME,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Which Components Can Be Induction Hardened?',
    description:
      'Gears, shafts, crankshafts, camshafts, rollers and bearings — see which components can be induction hardened. Job work in Ludhiana, Punjab.',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Which Components Can Be Induction Hardened?',
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
    'which components can be induction hardened',
    'induction hardening components',
    'parts suitable for induction hardening',
    'induction hardenable steel parts',
  ],
  image: 'https://thakurindustries.in/images/images/14.png',
  mainEntityOfPage: PAGE_URL,
  inLanguage: 'en-IN',
};

const faqs = [
  {
    question: 'Which components can be induction hardened?',
    answer:
      'Almost any rotating, sliding or load-bearing steel part can be induction hardened, provided it has enough carbon. Common examples include gears, shafts, crankshafts, camshafts, axles, rollers, spindles, bearings, sprockets, dies and agricultural tines and blades.',
  },
  {
    question: 'Can cast iron be induction hardened?',
    answer:
      'Yes. Grey, ductile and nodular cast irons with sufficient combined carbon (typically a pearlitic matrix) can be induction hardened. Camshafts, rolls and machine ways made of cast iron are routinely surface hardened this way to 45–55 HRC.',
  },
  {
    question: 'What is the minimum carbon content needed for induction hardening?',
    answer:
      'A steel generally needs around 0.30 to 0.35 percent carbon or more to harden well by induction. Below that the surface will not form enough martensite. Low-carbon parts are better suited to case hardening, which adds carbon to the surface.',
  },
  {
    question: 'What hardness can induction hardening achieve?',
    answer:
      'Typical results range from about 45 HRC on alloy cast iron to 58–62 HRC on medium and high-carbon steels such as EN8, EN19, EN24, 4140 and 4340. The exact figure depends on the grade, case depth and quench used.',
  },
  {
    question: 'Can Thakur Industries induction harden my components in Ludhiana?',
    answer:
      'Yes. Thakur Industries provides induction hardening job work in Ludhiana, Punjab for gears, shafts, crankshafts, camshafts, rollers, sprockets, dies and agricultural parts, with polymer and water-based quenching, hardness testing and case depth verification.',
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

const hardnessData = [
  { component: 'Gears and pinions', material: 'EN19, EN24, 20MnCr5', hrc: '55 – 60 HRC' },
  { component: 'Transmission and output shafts', material: 'EN8, EN19, 4140', hrc: '52 – 58 HRC' },
  { component: 'Crankshafts (journals)', material: 'EN24, 4340, ductile iron', hrc: '50 – 58 HRC' },
  { component: 'Camshafts (lobes)', material: 'Alloy / chilled cast iron', hrc: '50 – 58 HRC' },
  { component: 'Axles and spindles', material: 'EN8, EN19, 4140', hrc: '52 – 58 HRC' },
  { component: 'Rollers and rolls', material: 'EN8, 9CrV, cast iron', hrc: '50 – 60 HRC' },
  { component: 'Sprockets', material: 'EN8, EN19', hrc: '52 – 58 HRC' },
  { component: 'Bearing surfaces / races', material: 'EN31, 52100', hrc: '58 – 62 HRC' },
  { component: 'Dies and tooling', material: 'Tool / alloy steel', hrc: '55 – 60 HRC' },
  { component: 'Agricultural tines and blades', material: 'EN8, boron steel', hrc: '50 – 58 HRC' },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find((img) => img.id === 'appGearHardening');

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={faqSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Blog', href: '/blog' },
          { name: 'Which Components Can Be Induction Hardened', href: PAGE_PATH },
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
              <span className="truncate">Which Components Can Be Induction Hardened</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Which Components Can Be Induction Hardened?
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground not-prose">
              <span>By the {SITE_NAME} Metallurgy Team</span>
              <span aria-hidden="true">·</span>
              <span>Reviewed by Senior Heat Treatment Engineer</span>
              <span aria-hidden="true">·</span>
              <span>Published June 2026 · Updated June 2026</span>
            </div>
            <p className="mt-4 text-xl text-muted-foreground">
              Most carbon and alloy-steel parts that rotate, slide or carry load can be induction hardened. The main
              families are automotive parts (gears, shafts, crankshafts, camshafts, axles), agricultural parts (tines,
              blades, tiller components) and industrial parts (rollers, spindles, bearings, sprockets and dies).
            </p>
          </div>

          {featureImage && (
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
              <Image
                src={featureImage.imageUrl}
                alt="Assortment of industrial gears and shafts suitable for induction hardening"
                data-ai-hint={featureImage.imageHint}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                priority
                className="object-cover"
              />
            </div>
          )}

          <p>
            If you manufacture or supply parts in Ludhiana or Punjab, knowing exactly which components can be induction
            hardened helps you specify the right process, hit the hardness your drawing demands and avoid premature
            wear. This guide lists the components family by family, with the typical hardness each achieves, and
            explains which materials respond best.
          </p>

          <nav aria-label="Table of contents" className="my-8 not-prose rounded-lg border border-border bg-secondary/40 p-6">
            <h2 className="text-lg font-bold text-foreground">On this page</h2>
            <ul className="mt-3 space-y-2 text-primary">
              <li><a href="#what-suits" className="hover:underline">What components suit induction hardening</a></li>
              <li><a href="#automotive" className="hover:underline">Automotive components</a></li>
              <li><a href="#agricultural" className="hover:underline">Agricultural components</a></li>
              <li><a href="#industrial" className="hover:underline">Industrial components</a></li>
              <li><a href="#materials" className="hover:underline">Suitable materials</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
          </nav>

          <h2 id="what-suits" className="text-3xl font-bold mt-12 scroll-mt-24">
            What components suit induction hardening
          </h2>
          <p>
            Induction hardening selectively heats a steel surface with an electromagnetic coil and quenches it to form
            a hard martensitic case over a tough core. That makes it ideal for components whose <em>surface</em> wears
            or fatigues while the core must stay ductile. As a rule, a part is a good candidate when it is made of
            steel with roughly 0.30 percent carbon or more, has a fairly regular cross-section a coil can wrap or scan,
            and needs hardness only on specific functional faces. For the full method, see our{' '}
            <Link href="/blog/induction-hardening-process-explained" className="text-primary hover:underline">
              induction hardening process guide
            </Link>
            .
          </p>
          <p>
            The components below are the ones we harden most often, grouped by the industries they serve:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Automotive:</strong> gears, shafts, crankshafts, camshafts, axles.</li>
            <li><strong>Agricultural:</strong> tines, blades, tiller parts.</li>
            <li><strong>Industrial:</strong> rollers, spindles, bearings, sprockets, dies.</li>
          </ul>
          <p>
            Parts that are <em>not</em> ideal include very low-carbon steels (under about 0.30 percent carbon), thin or
            highly intricate sections that overheat, and components needing through-hardness rather than a surface case.
            Low-carbon parts are usually routed to{' '}
            <Link href="/case-hardening-heat-treatment" className="text-primary hover:underline">
              case hardening
            </Link>{' '}
            instead — compare the two in our guide on the{' '}
            <Link href="/blog/difference-between-induction-and-case-hardening" className="text-primary hover:underline">
              difference between induction and case hardening
            </Link>
            .
          </p>

          <h3 className="text-2xl font-semibold mt-6">Typical hardness by component</h3>
          <p>
            The table below summarises common induction-hardened components, the materials they are usually made from,
            and the typical surface hardness achieved.
          </p>
          <div className="my-8 overflow-x-auto not-prose">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Component</TableHead>
                  <TableHead className="font-bold">Typical Material</TableHead>
                  <TableHead className="font-bold">Typical Surface Hardness</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {hardnessData.map((row) => (
                  <TableRow key={row.component}>
                    <TableCell className="font-medium">{row.component}</TableCell>
                    <TableCell>{row.material}</TableCell>
                    <TableCell>{row.hrc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <h2 id="automotive" className="text-3xl font-bold mt-12 scroll-mt-24">
            Automotive components
          </h2>
          <p>
            Automotive and powertrain parts are the single largest application for induction hardening, because they
            combine high contact stress with the need for a tough, fatigue-resistant core. Induction lets manufacturers
            harden only the wear surfaces while keeping the rest of the part machinable and impact-tolerant.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Gears:</strong> tooth flanks and roots are hardened to resist pitting and wear. See our{' '}
              <Link href="/gear-hardening" className="text-primary hover:underline">gear hardening service</Link>.
            </li>
            <li><strong>Shafts:</strong> bearing journals and splines are hardened for wear and torsional fatigue
              resistance — explore our{' '}
              <Link href="/shaft-hardening" className="text-primary hover:underline">shaft hardening service</Link>.
            </li>
            <li><strong>Crankshafts:</strong> bearing journals and fillets are induction hardened to survive cyclic
              bending and rotation. Read more in our{' '}
              <Link href="/induction-heat-treatment/crankshafts" className="text-primary hover:underline">crankshaft hardening service</Link>.
            </li>
            <li><strong>Camshafts:</strong> the lobes are hardened so the cam profile resists scuffing under valve-train
              loads.</li>
            <li><strong>Axles and drive shafts:</strong> hardened along the bearing diameters and splines for durability
              under road and torque loads.</li>
          </ul>
          <p>
            These parts dominate the order books of{' '}
            <Link href="/industries/automotive" className="text-primary hover:underline">automotive industry</Link>{' '}
            suppliers in and around Ludhiana, where tractor, two-wheeler and commercial-vehicle component makers rely on
            consistent surface hardness for OEM acceptance.
          </p>

          <h2 id="agricultural" className="text-3xl font-bold mt-12 scroll-mt-24">
            Agricultural components
          </h2>
          <p>
            Farm equipment operates in soil, grit and shock loads, so abrasion resistance is critical. Induction
            hardening gives agricultural parts a hard cutting or wearing edge while the body stays tough enough to
            survive impact with stones and roots.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Rotavator and cultivator tines:</strong> the working ends are hardened to resist soil abrasion.</li>
            <li><strong>Blades and shovels:</strong> plough shares, harrow discs and cutting blades hold an edge longer.</li>
            <li><strong>Tiller parts:</strong> tynes, points and tiller shafts are hardened on their contact surfaces.</li>
          </ul>
          <p>
            Punjab is one of India&rsquo;s farm-equipment heartlands, and these components form a major share of our
            agricultural job work. See the parts we treat for the{' '}
            <Link href="/industries/agricultural" className="text-primary hover:underline">agricultural industry</Link>{' '}
            for more detail.
          </p>

          <h2 id="industrial" className="text-3xl font-bold mt-12 scroll-mt-24">
            Industrial components
          </h2>
          <p>
            General machinery, machine tools and material-handling equipment use a wide range of induction-hardened
            components wherever surfaces roll, slide or index against each other.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Rollers and rolls:</strong> conveyor, printing and rolling-mill rolls are hardened for
              wear-free running surfaces.</li>
            <li><strong>Spindles:</strong> machine-tool and pump spindles hardened on bearing and seal diameters.</li>
            <li><strong>Bearings and races:</strong> rolling-contact surfaces hardened to high hardness — see our{' '}
              <Link href="/induction-heat-treatment/bearings" className="text-primary hover:underline">bearing hardening service</Link>.
            </li>
            <li><strong>Sprockets:</strong> chain-engaging teeth hardened to resist wear from the chain.</li>
            <li><strong>Dies and tooling:</strong> forming and punching faces hardened for tool life.</li>
          </ul>
          <p>
            Because each of these has a different geometry, coil design and scan rate are tailored to the part — which
            is why induction is favoured for precision industrial work where distortion must stay low.
          </p>

          <h2 id="materials" className="text-3xl font-bold mt-12 scroll-mt-24">
            Suitable materials
          </h2>
          <p>
            Whether a component can be induction hardened ultimately comes down to its material. The steel or iron must
            contain enough carbon to transform to martensite when heated and quenched.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Medium-carbon steels:</strong> EN8 (080M40) and similar 0.35–0.45 percent carbon grades — the
              workhorse for shafts, axles and rollers.</li>
            <li><strong>Alloy steels:</strong> EN19 (4140) and EN24 (4340) harden deeply and predictably, ideal for
              gears, crankshafts and heavily loaded shafts.</li>
            <li><strong>Bearing steels:</strong> EN31 / 52100 reach the highest hardness for bearing and roller surfaces.</li>
            <li><strong>Cast irons:</strong> pearlitic grey and ductile irons with sufficient combined carbon suit
              camshafts, rolls and machine ways.</li>
            <li><strong>Tool steels:</strong> selected alloy tool steels for dies and wear inserts.</li>
          </ul>
          <p>
            Very low-carbon steels (below roughly 0.30 percent carbon) will not harden meaningfully by induction and
            should be case hardened instead. For broadly recognised best-practice data on hardenability and process
            selection, the{' '}
            <a
              href="https://www.asminternational.org/"
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="text-primary hover:underline"
            >
              ASM International
            </a>{' '}
            heat treating resources are an authoritative reference.
          </p>

          <div className="my-10 not-prose rounded-lg border-2 border-primary/30 bg-primary/5 p-8">
            <h3 className="text-2xl font-bold text-foreground">
              Need your components induction hardened in Ludhiana?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Get a quote from {SITE_NAME}. We induction harden gears, shafts, crankshafts, camshafts, rollers,
              sprockets, dies and agricultural parts in-house, with polymer and water-based quenching, hardness testing
              and case depth verification.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/get-quote">Request Job Work Pricing</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://wa.me/917900000776" rel="noopener noreferrer" target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>

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
