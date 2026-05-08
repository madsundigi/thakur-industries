
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
  title: 'Surface Hardening vs. Through Hardening: Which is Right for You?',
  description: 'Learn the difference between surface hardening and through hardening and which process is right for your industrial components.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Surface Hardening vs. Through Hardening: Which is Right for You?",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": "2024-08-20",
  "articleSection": "Heat Treatment Processes",
  "keywords": ["surface hardening vs through hardening", "induction hardening", "heat treatment ludhiana"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/surface-vs-through-hardening",
  "inLanguage": "en"
};

const comparisonData = [
    { aspect: "Depth of Hardness", surface: "Outer layer only (0.5–5 mm)", through: "Entire section hardened" },
    { aspect: "Core Structure", surface: "Tough and ductile", through: "Hard and rigid" },
    { aspect: "Wear Resistance", surface: "Excellent", through: "High, but less localized" },
    { aspect: "Impact Resistance", surface: "Very high", through: "Moderate to low" },
    { aspect: "Process Type", surface: "Induction or Flame Hardening", through: "Furnace or Oil Quenching" },
    { aspect: "Distortion Risk", surface: "Low (localized heating)", through: "High (full heating)" },
    { aspect: "Applications", surface: "Shafts, Gears, Axles", through: "Dies, Tools, Heavy Parts" },
    { aspect: "Material Compatibility", surface: "Medium-carbon & alloy steels", through: "High-carbon & tool steels" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogHardeningComparison');

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
                    <span className='truncate'>Surface vs. Through Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Surface Hardening vs. Through Hardening: Which is Right for You?</h1>
                <p className="mt-4 text-xl text-muted-foreground">When it comes to heat treatment, many engineers face a common question: “Should I use surface hardening or through hardening for my parts?” This blog by {SITE_NAME}, Ludhiana, explains both methods.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Comparison of surface hardening and through hardening"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">What Is Surface Hardening?</h2>
            <p>Surface hardening strengthens only the outer layer (case) of a component while keeping the core tough and ductile. It is widely used in automotive and machinery parts that require a hard, wear-resistant surface with a shock-absorbing interior.</p>
            <h3 className="text-2xl font-semibold mt-6">Process Overview:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>The component’s surface is heated rapidly using induction heat treatment or flame hardening.</li>
                <li>The temperature is controlled to transform only the surface into austenite.</li>
                <li>The heated layer is immediately quenched using water or polymer, forming a hard martensitic case.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">What Is Through Hardening?</h2>
            <p>Through hardening, also known as full hardening, is a process where the entire component — both surface and core — is hardened throughout its thickness. This process provides uniform hardness and is suitable for parts that require high strength across their entire cross-section.</p>
             <h3 className="text-2xl font-semibold mt-6">Process Overview:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>The component is heated to its austenitizing temperature (800–900°C) in a furnace.</li>
                <li>It is then quenched completely, cooling both surface and core at a similar rate.</li>
                <li>The structure becomes fully martensitic throughout.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Surface Hardening vs Through Hardening: Key Differences</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold">Feature</TableHead>
                            <TableHead className="font-bold">Surface Hardening</TableHead>
                            <TableHead className="font-bold">Through Hardening</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map(row => (
                            <TableRow key={row.aspect}>
                                <TableCell className="font-medium">{row.aspect}</TableCell>
                                <TableCell>{row.surface}</TableCell>
                                <TableCell>{row.through}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">When to Choose Surface Hardening</h2>
            <p>You should opt for surface hardening when your part:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Is exposed to friction, sliding, or rolling wear.</li>
                <li>Needs to absorb shocks or vibrations.</li>
                <li>Must retain core flexibility and toughness.</li>
                <li>Is used in automotive or rotating machinery.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">When to Choose Through Hardening</h2>
            <p>Through hardening is best for parts that require:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>High uniform strength across their entire body.</li>
                <li>Resistance to bending or deformation under constant load.</li>
                <li>High wear and static stress performance.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Conclusion: The Right Hardening Process Builds Reliability</h2>
            <p>The debate of surface hardening vs through hardening isn’t about which is better — it’s about which is right for your component. At {SITE_NAME}, we help clients determine the most efficient heat treatment method for their material, geometry, and performance needs — ensuring strength, precision, and reliability every time.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Hardening Services in Ludhiana, Punjab?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for induction hardening, surface hardening, and heat treatment job work for automotive and industrial components.</p>
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
