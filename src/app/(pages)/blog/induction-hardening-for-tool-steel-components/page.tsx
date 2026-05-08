
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
  title: 'Tool Steel Induction Hardening Services in Ludhiana',
  description: 'Learn how induction hardening enhances D2, H13, and M2 tool steels for superior strength and durability.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Tool Steel Induction Hardening Services in Ludhiana",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Materials",
  "keywords": ["tool steel induction hardening", "D2 heat treatment Ludhiana", "H13 heat treatment Ludhiana", "M2 heat treatment Ludhiana"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/induction-hardening-for-tool-steel-components",
  "inLanguage": "en"
};

const toolSteelData = [
    { grade: "D2 (High Carbon, High Chromium)", properties: "Excellent wear resistance", effect: "Improves surface hardness to 58–62 HRC; perfect for dies and punches." },
    { grade: "H13 (Chromium-Molybdenum Hot Work Steel)", properties: "High thermal resistance", effect: "Enhances hot strength and fatigue life for forging dies and extrusion tools." },
    { grade: "M2 (High-Speed Steel)", properties: "Red hardness and toughness", effect: "Increases wear resistance while preserving high-temperature performance." },
];

const heatTreatmentParams = [
    { steelType: "D2", temp: "1000–1050", quench: "Polymer / Air", hardness: "58–62" },
    { steelType: "H13", temp: "1020–1050", quench: "Polymer / Air", hardness: "50–54" },
    { steelType: "M2", temp: "1180–1220", quench: "Polymer / Oil", hardness: "60–65" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogToolSteel');

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
                    <span className='truncate'>Tool Steel Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Tool Steel Induction Hardening Services in Ludhiana</h1>
                <p className="mt-4 text-xl text-muted-foreground">Used in dies, punches, molds, and cutting tools, materials like D2, H13, and M2 require exceptional hardness and wear resistance to handle extreme mechanical stress.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Induction hardening of tool steel components"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">Why Induction Hardening for D2, H13, and M2 Steels?</h2>
            <p>Each tool steel grade has unique mechanical and chemical properties that make it suitable for specific applications. Here’s how induction hardening enhances their performance:</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Tool Steel</TableHead>
                            <TableHead>Properties</TableHead>
                            <TableHead>Effect of Induction Hardening</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {toolSteelData.map((row) => (
                            <TableRow key={row.grade}>
                                <TableCell className="font-medium">{row.grade}</TableCell>
                                <TableCell>{row.properties}</TableCell>
                                <TableCell>{row.effect}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">The Tool Steel Hardening Process</h2>
             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Pre-Inspection:</strong> Components are cleaned and checked for surface contaminants, geometry, and pre-machining tolerances.</li>
                <li><strong>Induction Heating:</strong> The part’s surface is heated using a medium or high-frequency coil tuned to the material’s properties and section thickness.</li>
                <li><strong>Controlled Quenching:</strong> Instant cooling through polymer or water quenching ensures rapid transformation to martensite without cracking.</li>
                <li><strong>Tempering:</strong> Post-hardening tempering relieves internal stresses and refines hardness uniformity.</li>
                <li><strong>Testing & Verification:</strong> Hardness and case depth are validated using Rockwell HRC and microstructural testing.</li>
            </ol>
            
            <h2 className="text-3xl font-bold mt-12">Heat Treatment Parameters for D2, H13, and M2 Steels</h2>
             <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Steel Type</TableHead>
                            <TableHead>Austenitizing Temperature (°C)</TableHead>
                            <TableHead>Quenching Medium</TableHead>
                            <TableHead>Target Hardness (HRC)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {heatTreatmentParams.map((row) => (
                            <TableRow key={row.steelType}>
                                <TableCell className="font-medium">{row.steelType}</TableCell>
                                <TableCell>{row.temp}</TableCell>
                                <TableCell>{row.quench}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Benefits of Tool Steel Induction Hardening</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Improved Surface Hardness:</strong> Increases resistance to wear and impact.</li>
                <li><strong>Localized Heating:</strong> Only functional zones are hardened, minimizing distortion.</li>
                <li><strong>Enhanced Tool Life:</strong> Reduces wear and micro-cracking in dies and punches.</li>
                <li><strong>Energy Efficiency:</strong> Lower power consumption compared to furnace hardening.</li>
                <li><strong>Consistent Results:</strong> Automated parameters for uniform hardness and depth.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Precision Hardening for High-Performance Tool Steels</h2>
            <p>Whether it’s D2 punches, H13 dies, or M2 cutting tools, induction hardening provides the perfect balance of strength, hardness, and thermal stability. At {SITE_NAME}, our tool steel induction hardening job work combines scientific precision, temperature control, and quenching expertise — ensuring tools last longer, perform better, and resist wear under extreme conditions.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Tool Steel Hardening Services?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} today for D2, H13, and M2 induction heat treatment services in Ludhiana.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/material-heat-treatment">Explore Material Services</Link>
                    </Button>
                </div>
            </div>
        </article>
      </div>
    </>
  );
}
