import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  MessageSquare,
  Clock,
  IndianRupee,
  Layers,
  Gauge,
  Flame,
  Scale,
  Award,
  ShieldCheck,
  Star,
  PackageCheck,
  Settings2,
} from 'lucide-react';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
import { ServiceFAQ } from '@/components/shared/ServiceFAQ';
import { CTASection } from '@/components/home/CTASection';
import { SITE_NAME, SITE_URL, SITE_PHONE_NUMBER } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const PAGE_URL = `${SITE_URL}/induction-hardening-cost`;
const PHONE_TEL = SITE_PHONE_NUMBER.replace(/\s/g, '');

const TITLE = 'Induction Hardening Cost Calculation & Rates | Thakur';
const DESCRIPTION =
  'Induction hardening cost calculation explained — how per-kg & per-piece job work rates in Ludhiana, Punjab are set, MOQ & 2–4 day turnaround. Get your exact quote in 24 hours.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/induction-hardening-cost' },
  keywords: [
    'induction hardening cost calculation',
    'induction hardening job work rate India',
    'how much does induction hardening cost per piece',
    'minimum order quantity induction hardening',
    'turnaround time for heat treatment job work',
    'induction hardening cost per kg',
    'heat treatment job work rate Punjab',
    'induction hardening pricing Ludhiana',
  ],
  openGraph: {
    title: 'Induction Hardening Cost Calculation & Job Work Rates | Thakur Industries',
    description:
      'Understand how induction hardening cost is calculated — per-kg vs per-piece rates, MOQ and turnaround for job work in Ludhiana, Punjab. Free quote in 24 hours.',
    url: PAGE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Induction Hardening Cost Calculation & Rates | Thakur Industries',
    description:
      'How induction hardening cost is calculated — per-kg & per-piece job work rates, MOQ and turnaround in Ludhiana, Punjab. Free quote in 24 hours.',
  },
};

const WHATSAPP_URL =
  `https://wa.me/${PHONE_TEL.replace(/\D/g, '')}?text=` +
  encodeURIComponent(
    'Hello, please send me an induction hardening rate. Component: ___ Material: ___ Weight/Qty: ___ Required HRC & case depth: ___',
  );

const trustBadges = [
  { icon: IndianRupee, label: 'Per-kg / Per-piece' },
  { icon: Clock, label: '2–4 Day Turnaround' },
  { icon: PackageCheck, label: 'No Minimum Order' },
  { icon: Star, label: '4.8★ · 127 Reviews' },
];

const costFactors = [
  {
    icon: Scale,
    factor: 'Component Weight',
    impact:
      'The primary driver for shafts, axles and large gears. Heavier parts draw more energy and longer heating cycles, so a per-kg basis is most common.',
  },
  {
    icon: Gauge,
    factor: 'Required Case Depth',
    impact:
      'Deeper case depth (3–6 mm for shafts vs 0.5–1.5 mm for gears) needs longer, more controlled heating — raising the per-kg or per-piece rate.',
  },
  {
    icon: Flame,
    factor: 'Steel Grade',
    impact:
      'EN8, EN19, EN24, 4140 and tool steels respond differently. Higher-alloy grades need precise temperature control and may carry a slightly higher rate.',
  },
  {
    icon: Settings2,
    factor: 'Geometry & Profile',
    impact:
      'Tooth profiles, splines, bores and contoured surfaces often need custom induction coils and fixturing, which adds to setup and per-piece cost.',
  },
  {
    icon: Layers,
    factor: 'Order Quantity',
    impact:
      'Larger batches spread setup over more pieces and unlock bulk discounts, while single trial pieces carry proportionally higher per-piece cost.',
  },
  {
    icon: Clock,
    factor: 'Setup & Turnaround',
    impact:
      'Standard 2–4 day delivery is included in the base rate. Urgent same-week processing and one-off coil setups are quoted as a priority line item.',
  },
];

const turnaroundRows: [string, string, string][] = [
  ['Sample / trial piece', '1–2 working days', 'Single prototype for testing & approval'],
  ['Small batch (under 50 pcs)', '2–3 working days', 'Pinions, small gears, bearing races'],
  ['Standard production batch', '2–4 working days', 'Most gears, shafts & repeat OEM lots'],
  ['Bulk / high-volume lot', '4–6 working days', 'Multi-thousand-piece runs, scheduled'],
  ['Urgent / priority job', 'Same week', 'Time-critical orders for regular clients'],
];

const servicePages = [
  { name: 'Gear Hardening Rate', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
  { name: 'Shaft Hardening Rate', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
  { name: 'Crankshaft Hardening', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
];

const materialLinks = [
  { grade: 'EN8', href: '/induction-heat-treatment/en8-steel-induction-hardening' },
  { grade: 'EN19', href: '/induction-heat-treatment/en19-steel-induction-hardening' },
  { grade: 'EN24', href: '/induction-heat-treatment/en24-steel-hardening' },
  { grade: '4140', href: '/induction-heat-treatment/4140-steel-hardening' },
];

const toc = [
  { id: 'how-cost-is-calculated', label: 'How Cost Is Calculated' },
  { id: 'job-work-rates-india', label: 'Job Work Rates in India' },
  { id: 'cost-per-piece', label: 'Cost Per Piece' },
  { id: 'minimum-order-quantity', label: 'Minimum Order Quantity' },
  { id: 'turnaround-time', label: 'Turnaround Time' },
  { id: 'get-quote', label: 'Get Your Exact Quote' },
  { id: 'faq', label: 'FAQs' },
];

// FAQ — single source of truth for the visible accordion (ServiceFAQ) and its
// FAQPage schema, emitted by the ServiceFAQ component itself.
const COST_FAQ = [
  {
    question: 'How much does induction hardening cost per piece?',
    answer:
      'There is no single fixed per-piece price — the induction hardening cost per piece is calculated from component weight, required case depth, steel grade, geometry and batch quantity. Small or complex parts cost more per piece than simple high-volume parts. Send your drawing and quantity for an exact figure within 24 hours.',
  },
  {
    question: 'Is induction hardening priced per kg or per piece?',
    answer:
      'Both bases are used. Heavy components like shafts and axles are usually priced per kilogram because weight tracks heating energy and cycle time. Gears, pinions, bearing races and small repeat parts are often clearer on a per-piece rate. We recommend whichever basis gives you the most predictable cost.',
  },
  {
    question: 'What is the minimum order quantity for induction hardening job work?',
    answer:
      'There is no rigid minimum order quantity. We accept single trial and sample pieces as well as multi-thousand-piece bulk lots. Larger batches receive better per-piece pricing, and monthly OEM contracts are available.',
  },
  {
    question: 'What is the turnaround time for heat treatment job work?',
    answer:
      'Standard turnaround is 2–4 working days after we receive the components and an approved specification. Sample pieces can be ready in 1–2 days, while urgent same-week processing is available at a priority rate for time-critical orders.',
  },
  {
    question: 'Do you offer bulk discounts on induction hardening rates?',
    answer:
      'Yes. We offer reduced per-kg and per-piece rates for bulk batches, regular production runs, OEM suppliers and export units. Long-term partners also receive priority scheduling and preferential pricing.',
  },
  {
    question: 'Why are induction hardening job work rates in Ludhiana competitive?',
    answer:
      'Ludhiana and the wider Punjab industrial belt have a dense cluster of heat-treatment capacity, skilled labour and high throughput. This scale keeps per-kg and per-piece job work rates highly competitive compared with isolated facilities, without compromising on quality or test reports.',
  },
];

export default function InductionHardeningCostPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'serviceCrossSection');

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Induction Hardening Cost Calculation & Job Work',
    serviceType: 'Induction Hardening Job Work',
    url: PAGE_URL,
    description:
      'Transparent induction hardening cost calculation for gears, shafts, crankshafts and bearings — priced per kilogram or per piece, with no rigid minimum order and 2–4 day turnaround in Ludhiana, Punjab.',
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      telephone: SITE_PHONE_NUMBER,
      url: SITE_URL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1486/5, Street Number 1, Harkrishan Nagar, Shimlapuri',
        addressLocality: 'Ludhiana',
        addressRegion: 'Punjab',
        postalCode: '141003',
        addressCountry: 'IN',
      },
    },
    areaServed: ['Ludhiana', 'Mandi Gobindgarh', 'Jalandhar', 'Khanna', 'Patiala', 'Punjab', 'India'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description:
        'Induction hardening job work priced per kg or per piece, with bulk discounts and no rigid minimum order. Free quote within 24 hours.',
      url: `${SITE_URL}/contact`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      reviewCount: '127',
    },
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <BreadcrumbJsonLd items={[{ name: 'Induction Hardening Cost', href: '/induction-hardening-cost' }]} />

      <div className="bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">

          {/* Visible breadcrumb trail (matches BreadcrumbList schema) */}
          <nav aria-label="Breadcrumb" className="pt-24 md:pt-28">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/induction-heat-treatment" className="hover:text-primary transition-colors">Induction Heat Treatment</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary">Induction Hardening Cost</li>
            </ol>
          </nav>

          {/* H1 + answer-first lead */}
          <header className="pt-8 pb-6 text-center max-w-4xl mx-auto">
            <p className="section-label">// PRICING PILLAR //</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-6">
              Induction Hardening <span className="text-primary">Cost Calculation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
              <strong>Induction hardening cost calculation</strong> is driven by your part, not a flat price list:
              work is quoted <strong>per kilogram</strong> (heavy shafts and axles) or <strong>per piece</strong>
              {' '}(gears, pinions and small parts). The rate scales with component weight, required case depth, steel
              grade, geometry, quantity and setup — so you only pay for the energy and cycle time your job needs.
            </p>
          </header>

          {/* Above-the-fold trust badges */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-tight px-3 py-1.5 rounded-full"
              >
                <badge.icon className="h-3.5 w-3.5" />
                {badge.label}
              </span>
            ))}
          </div>

          {/* CTA cluster */}
          <div className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-black uppercase italic tracking-tight hover:opacity-90 transition-opacity"
            >
              <Phone className="h-5 w-5" /> Call: {SITE_PHONE_NUMBER}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-xl font-black uppercase italic tracking-tight hover:opacity-90 transition-opacity"
            >
              <MessageSquare className="h-5 w-5" /> WhatsApp a Rate Request
            </a>
            <Link
              href="/get-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-primary text-primary rounded-xl font-black uppercase italic tracking-tight hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Get Quote
            </Link>
          </div>

          {/* Hero image */}
          <div className="relative h-56 md:h-72 rounded-3xl overflow-hidden mb-12 border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt="Induction hardening cost calculation — cross-section of a hardened shaft for per-kg job work in Ludhiana, Punjab"
                fill
                sizes="(max-width: 768px) 100vw, 1152px"
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
              <div className="max-w-md">
                <p className="text-primary font-black uppercase tracking-widest text-xs mb-3">Transparent Pricing</p>
                <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-foreground">No hidden rates.<br />Exact quote in 24 hours.</h2>
                <p className="text-muted-foreground text-sm mt-2">Per-kg & per-piece job work across Punjab & India.</p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <nav aria-label="On this page" className="mb-12 max-w-3xl mx-auto p-6 bg-secondary/30 border border-border rounded-2xl">
            <p className="section-label">// ON THIS PAGE //</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm font-bold">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-muted-foreground hover:text-primary transition-colors">
                    → {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* How Induction Hardening Cost Is Calculated */}
          <section id="how-cost-is-calculated" className="py-12 md:py-16 border-t border-border scroll-mt-24">
            <p className="section-label text-center">// COST DRIVERS //</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 text-center leading-none">
              How Induction Hardening <span className="text-primary">Cost Is Calculated</span>
            </h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-10">
              Every quote is built from six measurable cost drivers. Together they decide whether a per-kg or per-piece
              rate is most economical for your component mix.
            </p>
            <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border mb-10">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-primary/10">
                    <th scope="col" className="py-4 px-5 font-black uppercase italic tracking-tight text-foreground text-sm md:text-base w-1/3">Cost Factor</th>
                    <th scope="col" className="py-4 px-5 font-black uppercase italic tracking-tight text-foreground text-sm md:text-base">Effect on Your Rate</th>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  {costFactors.map((row, i) => (
                    <tr key={row.factor} className={i % 2 === 0 ? 'bg-secondary/30' : 'bg-card'}>
                      <th scope="row" className="py-4 px-5 font-black uppercase italic tracking-tight text-foreground align-top">
                        <span className="inline-flex items-center gap-2">
                          <row.icon className="h-4 w-4 text-primary shrink-0" />
                          {row.factor}
                        </span>
                      </th>
                      <td className="py-4 px-5 text-muted-foreground font-medium align-top">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto">
              We do not publish fixed flat rates that could mislead — the right number depends on your exact drawing.
              Want a grade-specific estimate? See our notes for{' '}
              {materialLinks.map((m, i) => (
                <span key={m.grade}>
                  <Link href={m.href} className="text-primary font-bold hover:underline">{m.grade}</Link>
                  {i < materialLinks.length - 1 ? ', ' : ' hardening.'}
                </span>
              ))}
            </p>
          </section>

          {/* Induction Hardening Job Work Rates in India */}
          <section id="job-work-rates-india" className="py-12 md:py-16 border-t border-border scroll-mt-24 max-w-4xl mx-auto">
            <p className="section-label text-center">// RATE BASIS //</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none">
              Induction Hardening <span className="text-primary">Job Work Rates in India</span>
            </h2>
            <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                Across India, the <strong>induction hardening job work rate</strong> is quoted on one of two bases.
                For shafts, axles and heavy components the <strong>per-kilogram</strong> rate is standard, because
                weight directly tracks the heating energy and cycle time involved. For gears, pinions, bearing races
                and small repeat parts a <strong>per-piece rate</strong> is usually clearer and easier to plan around.
              </p>
              <p>
                Volume also shapes the rate. <strong>Prototype and trial pieces</strong> carry a higher effective cost
                because coil setup and fixturing are spread over a single part, while <strong>bulk production batches</strong>
                {' '}spread that setup across thousands of pieces and unlock meaningful per-piece discounts. Regular
                production runs, OEM suppliers and export units receive the best pricing along with priority scheduling.
              </p>
              <p>
                Rates from the <strong>Ludhiana and wider Punjab industrial belt</strong> are among the most competitive
                in the country. A dense cluster of heat-treatment capacity, skilled labour and high daily throughput
                keeps both per-kg and per-piece job work rates low — without trading away consistent hardness or the
                Rockwell test reports included with every batch. Compare with our{' '}
                <Link href="/induction-heat-treatment/induction-hardening-gears-ludhiana" className="text-primary font-bold hover:underline">gear hardening</Link>,{' '}
                <Link href="/induction-heat-treatment/induction-hardening-shafts-ludhiana" className="text-primary font-bold hover:underline">shaft hardening</Link> and{' '}
                <Link href="/induction-heat-treatment/crankshafts-induction-hardening-ludhiana" className="text-primary font-bold hover:underline">crankshaft hardening</Link> rate pages.
              </p>
            </div>
          </section>

          {/* How Much Does Induction Hardening Cost Per Piece */}
          <section id="cost-per-piece" className="py-12 md:py-16 border-t border-border scroll-mt-24 max-w-4xl mx-auto">
            <p className="section-label text-center">// PER-PIECE COST //</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none">
              How Much Does Induction Hardening <span className="text-primary">Cost Per Piece?</span>
            </h2>
            <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                There is <strong>no single fixed per-piece price</strong>. The induction hardening cost per piece is
                calculated from the same drivers as any quote — component weight, required case depth, steel grade,
                geometry and batch quantity. A small, simple, high-volume part costs far less per piece than a large,
                complex, or single trial component that needs a dedicated coil.
              </p>
              <p>
                As a practical guide: simple parts in large batches reach the lowest per-piece cost; medium parts in
                standard batches sit in the middle; and complex profiles or one-off prototypes are the highest per
                piece because setup is not shared. Share your component, material grade, weight and quantity and we
                return an exact per-piece (or per-kg) figure within 24 hours — request it on the{' '}
                <Link href="/get-quote" className="text-primary font-bold hover:underline">get a quote</Link> page or{' '}
                <Link href="/contact" className="text-primary font-bold hover:underline">contact us</Link> directly.
              </p>
            </div>
          </section>

          {/* Minimum Order Quantity */}
          <section id="minimum-order-quantity" className="py-12 md:py-16 border-t border-border scroll-mt-24 max-w-4xl mx-auto">
            <p className="section-label text-center">// MINIMUM ORDER //</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center leading-none">
              Minimum Order <span className="text-primary">Quantity</span>
            </h2>
            <div className="space-y-6 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                There is <strong>no rigid minimum order quantity (MOQ)</strong> for induction hardening job work at
                {' '}{SITE_NAME}. We accept everything from a <strong>single trial piece</strong> for design validation
                to <strong>multi-thousand-piece bulk lots</strong> for OEM production. This flexibility lets you prove
                a part before committing to volume.
              </p>
              <p>
                Pricing simply reflects scale: single and small batches carry a higher per-piece cost because coil
                setup is not shared, while batches of 50+ pieces — and recurring monthly contracts — receive
                progressively better per-piece and per-kg rates. Whatever your run size, you receive the same hardness
                consistency and included Rockwell (HRC) test reports.
              </p>
            </div>
          </section>

          {/* Turnaround Time for Heat Treatment Job Work */}
          <section id="turnaround-time" className="py-12 md:py-16 border-t border-border scroll-mt-24">
            <p className="section-label text-center">// LEAD TIME //</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 text-center leading-none">
              Turnaround Time for <span className="text-primary">Heat Treatment Job Work</span>
            </h2>
            <p className="text-center text-muted-foreground font-medium max-w-3xl mx-auto mb-10">
              Standard <strong>turnaround time for heat treatment job work</strong> is <strong>2–4 working days</strong>
              {' '}after we receive your components and an approved specification, with urgent same-week processing
              available for time-critical orders.
            </p>
            <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-primary/10">
                    <th scope="col" className="py-4 px-5 font-black uppercase italic tracking-tight text-foreground text-sm md:text-base">Job Type</th>
                    <th scope="col" className="py-4 px-5 font-black uppercase italic tracking-tight text-foreground text-sm md:text-base">Typical Turnaround</th>
                    <th scope="col" className="py-4 px-5 font-black uppercase italic tracking-tight text-foreground text-sm md:text-base hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  {turnaroundRows.map((row, i) => (
                    <tr key={row[0]} className={i % 2 === 0 ? 'bg-secondary/30' : 'bg-card'}>
                      <th scope="row" className="py-4 px-5 font-black uppercase italic tracking-tight text-foreground align-top">{row[0]}</th>
                      <td className="py-4 px-5 text-primary font-bold align-top">{row[1]}</td>
                      <td className="py-4 px-5 text-muted-foreground font-medium align-top hidden sm:table-cell">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Get Your Exact Quote CTA */}
          <section id="get-quote" className="py-12 md:py-16 border-t border-border scroll-mt-24">
            <div className="max-w-4xl mx-auto p-8 md:p-12 bg-secondary/20 border border-primary/20 rounded-3xl text-center">
              <p className="section-label">// NEXT STEP //</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 leading-none">
                Get Your Exact Quote <span className="text-primary">in 24 Hours</span>
              </h2>
              <p className="text-muted-foreground font-medium max-w-2xl mx-auto mb-8">
                Share your component, material grade, weight and quantity. We return a competitive per-kg or per-piece
                induction hardening rate within 24 hours — no obligation. Pickup and delivery available across Punjab.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-black uppercase italic tracking-tight hover:opacity-90 transition-opacity"
                >
                  <Phone className="h-5 w-5" /> Call: {SITE_PHONE_NUMBER}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-xl font-black uppercase italic tracking-tight hover:opacity-90 transition-opacity"
                >
                  <MessageSquare className="h-5 w-5" /> WhatsApp a Rate Request
                </a>
                <Link
                  href="/get-quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-primary text-primary rounded-xl font-black uppercase italic tracking-tight hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Get a Detailed Quote
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-tight text-muted-foreground">
                {servicePages.map((s) => (
                  <Link key={s.name} href={s.href} className="hover:text-primary transition-colors">{s.name} →</Link>
                ))}
                <Link href="/quality-certifications" className="hover:text-primary transition-colors">Quality Certifications →</Link>
                <Link href="/induction-heat-treatment" className="hover:text-primary transition-colors">Heat Treatment Guide →</Link>
              </div>
            </div>
          </section>

          {/* Why our pricing earns trust */}
          <section className="py-12 md:py-16 border-t border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: IndianRupee, title: 'Transparent Basis', desc: 'Clear per-kg or per-piece quoting — never a hidden flat rate.' },
                { icon: PackageCheck, title: 'No Minimum Order', desc: 'Single trial pieces to multi-thousand-piece bulk lots welcome.' },
                { icon: Clock, title: 'Fast Turnaround', desc: '2–4 day standard delivery, urgent same-week on request.' },
                { icon: ShieldCheck, title: 'Reports Included', desc: 'Rockwell HRC test reports with every batch at no extra cost.' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-2xl border border-border">
                  <item.icon className="h-9 w-9 text-primary mb-4" />
                  <h3 className="text-base font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-tight text-muted-foreground">
                <Award className="h-4 w-4 text-primary" /> 4.8★ from 127 reviews
              </span>
            </div>
          </section>

          {/* FAQ — synced FAQPage schema emitted by ServiceFAQ */}
          <div id="faq" className="scroll-mt-24">
            <ServiceFAQ heading="Cost & Rate FAQs" faqItems={COST_FAQ} />
          </div>

          {/* Authority outbound reference + freshness signal */}
          <div className="pb-12 pt-4 text-center text-xs text-muted-foreground font-medium">
            <p className="mb-2">
              Learn more about the metallurgy behind surface hardening from the{' '}
              <a
                href="https://www.asminternational.org/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-primary hover:underline font-bold"
              >
                ASM International
              </a>{' '}
              heat-treatment resources.
            </p>
            <p className="uppercase tracking-widest">Last updated: June 2026 · {SITE_NAME}, Ludhiana, Punjab</p>
          </div>

        </div>
        <CTASection />

        {/* Mobile sticky CTA bar — hidden on md+ (CSS only, no hooks) */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur border-t border-border px-4 py-3 flex gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase text-xs py-3 rounded-lg"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-black uppercase text-xs py-3 rounded-lg"
          >
            <MessageSquare className="h-4 w-4" /> WhatsApp
          </a>
          <Link
            href="/get-quote"
            className="flex-1 flex items-center justify-center gap-2 bg-secondary text-foreground font-black uppercase text-xs py-3 rounded-lg border border-border"
          >
            Quote
          </Link>
        </div>
      </div>
    </>
  );
}
