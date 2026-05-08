
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Understanding the Role of Polymer & Water Quenching in Induction Hardening',
  description: 'Explore how polymer and water quenching affect the hardness, cooling rate, and structure of heat-treated metals.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Understanding the Role of Polymer & Water Quenching in Induction Hardening",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": "2024-08-15",
  "articleSection": "Heat Treatment Processes",
  "keywords": ["role of quenching in induction hardening", "polymer quenching", "water quenching", "induction cooling process"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/role-of-quenching-in-induction-hardening",
  "inLanguage": "en"
};

const comparisonData = [
    { feature: "Cooling Speed", water: "Very Fast", polymer: "Adjustable (Medium to Slow)" },
    { feature: "Distortion Risk", water: "Higher", polymer: "Lower" },
    { feature: "Hardness Uniformity", water: "High", polymer: "Controlled" },
    { feature: "Best For", water: "Heavy parts (shafts, axles)", polymer: "Precision parts (gears, pins)" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogQuenchingRole');

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
                    <span className='truncate'>Role of Quenching</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Understanding the Role of Polymer & Water Quenching in Induction Hardening</h1>
                <p className="mt-4 text-xl text-muted-foreground">When it comes to induction heat treatment, achieving the perfect balance between hardness and toughness depends on one crucial stage — quenching.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Polymer and water quenching process"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>For manufacturers in Ludhiana and Punjab, where automotive and industrial job work demand consistency and performance, understanding the role of quenching in induction hardening is essential for process optimization and quality assurance.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Is Quenching in Induction Hardening?</h2>
            <p>In simple terms, quenching is the rapid cooling of a metal component immediately after it has been heated to a specific temperature during the induction hardening process. It locks in the martensitic structure that gives steel its hardness, defines the case depth, and prevents undesired structural transformations that can lead to weakness or warping.</p>
            
            <h2 className="text-3xl font-bold mt-12">Types of Quenching in Induction Hardening</h2>
            <p>At {SITE_NAME}, two main types of quenching are used for induction heat treatment — water quenching and polymer quenching. Both are effective, but their cooling rates and applications differ based on component geometry and material type.</p>

            <h3 className="text-2xl font-semibold mt-6">1. Water Quenching</h3>
            <p>Water quenching is the traditional and most aggressive cooling method. It delivers the fastest cooling rate, ideal for components made of medium-carbon steels (EN8, EN9) where deep case hardness is required.</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Rapid cooling for maximum surface hardness</li>
                <li>Ideal for thick and heavy components</li>
                <li>Excellent for achieving deeper case depths (up to 5 mm)</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6">2. Polymer Quenching</h3>
            <p>Polymer quenching is a more controlled and flexible cooling technique. Here, water is mixed with a polymer solution, creating a cooling rate that can be adjusted by changing the polymer concentration.</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Smooth, controlled cooling rate</li>
                <li>Reduced distortion and cracking risk</li>
                <li>Ideal for thin or complex-shaped components</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">The Induction Cooling Process: Step-by-Step</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Induction Heating:</strong> The metal part is placed inside a coil and heated rapidly to 850–950°C.</li>
                <li><strong>Immediate Quenching:</strong> A spray or immersion quenching system activates, cooling the surface instantly.</li>
                <li><strong>Cooling Control:</strong> Polymer concentration or water flow rate is adjusted to achieve the desired hardness.</li>
                <li><strong>Tempering (Optional):</strong> The hardened part may be reheated slightly to relieve internal stress.</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12">Polymer vs. Water Quenching — A Practical Comparison</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold">Feature</TableHead>
                            <TableHead className="font-bold">Water Quenching</TableHead>
                            <TableHead className="font-bold">Polymer Quenching</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map(row => (
                            <TableRow key={row.feature}>
                                <TableCell className="font-medium">{row.feature}</TableCell>
                                <TableCell>{row.water}</TableCell>
                                <TableCell>{row.polymer}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Quenching — The Backbone of Durable Heat Treatment</h2>
            <p>The role of quenching in induction hardening goes beyond cooling — it defines the strength, hardness, and life of every treated component. By combining controlled polymer and water quenching techniques, {SITE_NAME} delivers superior heat treatment job work across Ludhiana, Punjab, and neighboring regions.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Polymer & Water Quenching Job Work in Ludhiana?</h3>
                <p className="mt-2 text-muted-foreground">Get in touch with {SITE_NAME} for expert induction heat treatment and quenching services.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/quenching-process">Learn More About Quenching</Link>
                    </Button>
                </div>
            </div>
        </article>
      </div>
    </>
  );
}
