
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Check, X, Circle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Common Misconceptions About Induction Hardening',
  description: 'Debunk myths about induction hardening and learn why it\'s the most effective surface hardening method available.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Common Misconceptions About Induction Hardening",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Facts",
  "keywords": ["induction hardening myths", "heat treatment facts Punjab", "industrial process clarity Ludhiana"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/common-misconceptions-about-induction-hardening",
  "inLanguage": "en"
};

const mythBusterData = [
    { myth: "Induction Hardening Is Only for Small Parts", fact: "Modern induction equipment can treat components of all sizes, from tiny pins to large industrial shafts up to 2 meters long. We handle heavy components for rolling mills, tractors, and machinery." },
    { myth: "Induction Hardening Is Too Expensive", fact: "While initial setup uses advanced tech, the process is highly cost-effective due to its speed, energy efficiency (85-90% conversion), and reduced scrap rates, making it ideal for mass production." },
    { myth: "Induction Hardening Causes Distortion", fact: "Induction hardening actually reduces distortion. Rapid, localized heating means the core remains cool and stable, minimizing warping. Controlled polymer quenching further prevents thermal shock." },
    { myth: "It’s Difficult to Control Case Depth", fact: "Our digitally controlled systems allow precise case depth management (from 0.5 mm to over 5 mm) by adjusting frequency, power density, and heating time. All results are verified with microhardness testing." },
    { myth: "It Only Works on Certain Materials", fact: "Induction hardening is effective for most medium and high-carbon steels, including EN8, EN19 (4140), EN24 (4340), 20MnCr5, and various tool steels. We tailor parameters for each material." },
    { myth: "It Doesn’t Improve Fatigue Strength", fact: "Induction hardening significantly enhances fatigue strength by creating compressive surface stresses. This resists crack propagation, making it perfect for rotating parts like gears and shafts." },
    { myth: "Induction Hardening Is Hard to Automate", fact: "Modern induction systems are fully compatible with CNC and PLC integration. Our automated setups ensure repeatability, real-time monitoring, and traceable quality for OEM production." },
    { myth: "Induction Hardening Is Outdated", fact: "Induction hardening is a modern, evolving technology central to Industry 4.0. It's clean, energy-efficient, and supports digital process automation, making it the future of metallurgy." },
];

const summaryData = [
    { myth: "Too costly", reality: "Fast, efficient, and economical" },
    { myth: "Causes distortion", reality: "Controlled, localized heating minimizes distortion" },
    { myth: "Only for small parts", reality: "Works for large and small components" },
    { myth: "Hard to control depth", reality: "Digitally controlled for accuracy" },
    { myth: "Only for high-carbon steels", reality: "Works on most medium-carbon alloys" },
    { myth: "Not automation-friendly", reality: "Ideal for PLC-based production lines" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogMisconceptions');

  return (
    <>
      <JsonLd data={blogSchema} />
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <article className="prose prose-lg dark:prose-invert max-w-none">
            <div className="mb-8">
                <div className="text-sm text-muted-foreground mb-4">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <ChevronRight className="inline-block w-4 h-4 mx-1" />
                    <Link href="/blog" className="hover:text-primary">Blog</Link>
                    <ChevronRight className="inline-block w-4 h-4 mx-1" />
                    <span className='truncate'>Common Misconceptions About Induction Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Common Misconceptions About Induction Hardening</h1>
                <p className="mt-4 text-xl text-muted-foreground">Debunking myths about induction hardening and learning why it's a highly effective surface hardening method.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Debunking myths about induction hardening"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">Introduction: Clearing the Air Around Induction Hardening</h2>
            <p>Despite being one of the most advanced and precise surface hardening processes, induction hardening is often misunderstood. Many manufacturers still believe it’s expensive, complex, or suitable only for specific metals. In reality, induction heat treatment is a highly efficient, clean, and repeatable process that provides unmatched surface strength and wear resistance — especially for automotive, agricultural, and industrial components.</p>
            <p>At {SITE_NAME}, Ludhiana, we help industries across Punjab, Haryana, and Delhi NCR understand the science behind induction hardening and how it outperforms traditional methods like flame or furnace hardening.</p>
            <p className='font-semibold'>💡 Myths fade when facts meet precision engineering.</p>

            {mythBusterData.map((item, index) => (
                <div key={index}>
                    <h2 className="text-3xl font-bold mt-12">Myth #{index + 1}: {item.myth}</h2>
                    <div className='flex items-start gap-4 my-4'>
                        <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                        <p className='font-semibold'>The Myth: <span className='font-normal italic text-muted-foreground'>{item.myth}</span></p>
                    </div>
                    <div className='flex items-start gap-4'>
                        <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                        <p className='font-semibold'>The Fact: <span className='font-normal text-muted-foreground'>{item.fact}</span></p>
                    </div>
                </div>
            ))}
            
            <h2 className="text-3xl font-bold mt-12">Quick Summary: Myths vs Facts</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Myth</TableHead>
                            <TableHead>Reality</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {summaryData.map((row) => (
                            <TableRow key={row.myth}>
                                <TableCell className="font-medium text-red-400">{row.myth}</TableCell>
                                <TableCell className="text-green-400">{row.reality}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: The Truth About Induction Hardening</h2>
            <p>The myths surrounding induction hardening often come from outdated information or lack of process understanding. In reality, it’s the most precise, energy-efficient, and repeatable surface hardening method available for industrial metals today. At {SITE_NAME}, we continue to educate, innovate, and deliver — ensuring every part we harden stands up to global standards.</p>
            <p className='font-semibold'>⚙️ Forget the myths — trust the facts. Choose {SITE_NAME} for reliable hardening solutions.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Industrial-Grade Heat Treatment?</h3>
                <p className="mt-2 text-muted-foreground">Connect with {SITE_NAME} for accurate, consistent, and certified induction hardening job work in Ludhiana and across Punjab.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/services">Explore Our Services</Link>
                    </Button>
                </div>
            </div>
        </article>
      </div>
    </>
  );
}
