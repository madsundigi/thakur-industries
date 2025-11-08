
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
  title: 'How Induction Hardening Extends the Life of Shafts, Gears, and Tools',
  description: 'Learn how surface hardening and induction processes enhance wear resistance and durability of metal components.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How Induction Hardening Extends the Life of Shafts, Gears, and Tools",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": "2024-09-05",
  "articleSection": "Heat Treatment Benefits",
  "keywords": ["how induction hardening increases component life", "advantages of heat treatment", "surface hardening benefits"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/how-induction-hardening-increases-component-life",
  "inLanguage": "en"
};

const applicationsData = [
    { component: "Gear Teeth", problem: "Wear & pitting under load", result: "Longer life, reduced friction" },
    { component: "Drive Shafts", problem: "Torsional fatigue", result: "Higher fatigue strength" },
    { component: "Crankshafts", problem: "Bending & cracking", result: "Improved durability under stress" },
    { component: "Spindles", problem: "Dimensional distortion", result: "Better alignment & stability" },
    { component: "Axles", problem: "Surface scuffing", result: "Smoother performance & longer life" },
];

const materialsData = [
    { material: "EN8", application: "Shafts, Pins, Gears", result: "Strong surface, tough core" },
    { material: "EN19 / 4140", application: "Crankshafts, Axles", result: "High fatigue strength" },
    { material: "EN24 / 4340", application: "Spindles, Heavy Gears", result: "Deep hardening, impact resistance" },
    { material: "Tool Steels (D2, O1)", application: "Dies, Tools", result: "Edge durability & wear resistance" },
];


export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogComponentLife');

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
                    <span className='truncate'>How Induction Hardening Increases Component Life</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">How Induction Hardening Extends the Life of Shafts, Gears, and Tools</h1>
                <p className="mt-4 text-xl text-muted-foreground">Every moving machine part — whether it’s a shaft, gear, or cam — is constantly under stress. Friction, load, and vibration gradually wear away metal surfaces, reducing efficiency and lifespan.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Diagram showing increased component life after induction hardening"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>At {SITE_NAME}, Ludhiana, we specialize in precision surface hardening using induction heat treatment, helping industries across Punjab enhance the life and reliability of their parts.</p>
            
            <h2 className="text-3xl font-bold mt-12">How Induction Hardening Increases Component Life</h2>
            <p>The real advantage of heat treatment lies in how it transforms the metal’s properties to handle stress, wear, and fatigue. Let’s look at how induction hardening directly contributes to longer component life:</p>

            <h3 className="text-2xl font-semibold mt-6">1. Improved Surface Hardness and Wear Resistance</h3>
            <p>Induction hardening creates a high-hardness surface layer (50–60 HRC), which significantly reduces wear from friction, sliding, and impact. For gears and shafts, this means less surface damage under repetitive motion, reduced friction, and longer intervals between maintenance cycles.</p>

            <h3 className="text-2xl font-semibold mt-6">2. Increased Fatigue Strength</h3>
            <p>Fatigue failure — caused by cyclic loading — is a major reason for part replacement. By hardening the surface while keeping the core ductile, induction hardening provides higher resistance to crack formation, improved load-bearing capability, and better tolerance for vibration and shock.</p>

            <h3 className="text-2xl font-semibold mt-6">3. Dimensional Stability and Reduced Distortion</h3>
            <p>Unlike furnace-based hardening, induction heating is localized and rapid, minimizing heat exposure to non-functional areas. This means parts maintain their shape, dimensions, and tolerances — a crucial factor for precision components.</p>
            
            <h2 className="text-3xl font-bold mt-12">Surface Hardening Benefits in Real-World Applications</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Problem Before Hardening</TableHead>
                            <TableHead>Result After Induction Hardening</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {applicationsData.map(row => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.problem}</TableCell>
                                <TableCell>{row.result}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Materials Best Suited for Induction Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Application</TableHead>
                            <TableHead>Result After Induction Hardening</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map(row => (
                            <TableRow key={row.material}>
                                <TableCell className="font-medium">{row.material}</TableCell>
                                <TableCell>{row.application}</TableCell>
                                <TableCell>{row.result}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Conclusion: The Smart Way to Build Stronger Components</h2>
            <p>The secret to longer-lasting, high-performance parts lies in effective induction hardening. By transforming the surface microstructure while maintaining internal toughness, manufacturers can achieve superior wear resistance, fatigue strength, and dimensional stability.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Component Hardening Services in Ludhiana?</h3>
                <p className="mt-2 text-muted-foreground">Get in touch with {SITE_NAME} — your trusted partner for induction hardening and heat treatment job work.</p>
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
