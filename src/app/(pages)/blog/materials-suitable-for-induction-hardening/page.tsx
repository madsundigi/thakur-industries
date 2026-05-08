
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle } from 'lucide-react';
import { SITE_NAME } from '@/lib/constants';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'Top Materials Suitable for Induction Hardening - EN8, EN19, 4140, and More',
  description: 'Find out which steel materials give the best results under induction hardening for industrial components in Punjab.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Top Materials Suitable for Induction Hardening — EN8, EN19, 4140 & More",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": "2024-01-15",
  "articleSection": "Heat Treatment Materials",
  "keywords": ["materials suitable for induction hardening", "EN8 heat treatment", "EN19 heat treatment", "4140 steel hardening"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/materials-suitable-for-induction-hardening",
  "inLanguage": "en"
};

const materialData = [
    { material: "EN8", equivalent: "C40", carbon: "0.40", application: "Shafts, Pins, Gears", hardness: "50–55 HRC" },
    { material: "EN19", equivalent: "4140", carbon: "0.40", application: "Gears, Shafts, Axles", hardness: "52–58 HRC" },
    { material: "EN24", equivalent: "4340", carbon: "0.40", application: "Crankshafts, Spindles", hardness: "55–60 HRC" },
    { material: "4140", equivalent: "EN19", carbon: "0.40", application: "Heavy Shafts, Rollers", hardness: "50–58 HRC" },
    { material: "4340", equivalent: "EN24", carbon: "0.40", application: "Aerospace & Heavy Gear", hardness: "55–60 HRC" },
    { material: "Tool Steels", equivalent: "D2, O1, H13", carbon: "Varies", application: "Dies, Tools, Molds", hardness: "Up to 62 HRC" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogPost5');

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
                    <span className='truncate'>Materials for Induction Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Top Materials Suitable for Induction Hardening — EN8, EN19, 4140 & More</h1>
                <p className="mt-4 text-xl text-muted-foreground">The induction hardening process is one of the most effective ways to increase the surface hardness and wear resistance of steel components. However, not every steel performs equally under induction heating — selecting the right material is critical for achieving consistent and durable results.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Various steel components suitable for induction hardening"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>Industries across Ludhiana and Punjab — from automotive to agricultural and engineering sectors — rely on materials like EN8, EN19, EN24, 4140, and 4340 for high-performance applications. This article explains which materials are suitable for induction hardening, why they work best, and how {SITE_NAME} optimizes the heat treatment process for each grade.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Makes a Material Suitable for Induction Hardening?</h2>
            <p>Not all metals respond equally to heat treatment. The main factor determining whether a material is suitable for induction hardening is its carbon content and alloy composition.</p>
            <h3 className="text-2xl font-semibold mt-6">Ideal Characteristics:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Carbon content: between 0.3% and 0.6%</li>
                <li>Low to moderate alloying elements for hardenability</li>
                <li>Magnetic (ferrous) structure to interact with induction fields</li>
            </ul>
            <p>Steels with sufficient carbon form a martensitic structure upon quenching, creating a hard outer layer while maintaining a ductile core — the hallmark of high-quality induction hardening.</p>

            <h2 className="text-3xl font-bold mt-12">1. EN8 Steel (Medium Carbon Steel)</h2>
            <p><strong>Composition:</strong> ~0.4% Carbon | Low Alloy Content</p>
            <p>EN8 is one of the most widely used materials for induction hardening in Ludhiana’s engineering and automotive workshops. Its balanced carbon content provides excellent hardness and strength without making the steel brittle.</p>
            <h3 className="text-2xl font-semibold mt-6">Key Advantages of EN8:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Suitable for shafts, gears, pins, and axles</li>
                <li>Achieves hardness levels of 50–55 HRC</li>
                <li>Good wear and fatigue resistance</li>
                <li>Ideal for both water and polymer quenching</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">2. EN19 Steel (4140 Equivalent Alloy Steel)</h2>
            <p><strong>Composition:</strong> 0.4% Carbon | Chromium-Molybdenum Alloy</p>
            <p>EN19 (AISI 4140) is a high-tensile alloy steel popular in heavy engineering and automotive applications across Punjab. It offers high toughness, fatigue resistance, and tensile strength, making it ideal for parts exposed to dynamic loads.</p>
            <h3 className="text-2xl font-semibold mt-6">Induction Hardening Benefits for EN19:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Case depth: 1.5–3 mm</li>
                <li>Achievable hardness: 52–58 HRC</li>
                <li>Excellent strength-to-weight ratio</li>
                <li>Resistant to bending and torsional stresses</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">3. EN24 Steel (4340 Equivalent Alloy Steel)</h2>
            <p><strong>Composition:</strong> 0.4% Carbon | Nickel-Chromium-Molybdenum Alloy</p>
            <p>EN24 (AISI 4340) is an ultra-tough, high-strength alloy steel ideal for high-stress industrial and automotive components. It offers deep hardenability, excellent impact resistance, and fatigue life after induction hardening.</p>
             <h3 className="text-2xl font-semibold mt-6">Benefits of Induction Hardening EN24:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Case depth: 2–5 mm (deep case possible)</li>
                <li>Hardness: up to 60 HRC</li>
                <li>Very high tensile and yield strength</li>
                <li>Excellent dimensional stability after quenching</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">4. 4140 & 4340 Alloy Steels</h2>
            <p>4140 and 4340 are chromium-molybdenum alloy steels that provide an ideal balance of toughness, strength, and wear resistance. When subjected to induction hardening, they develop a hard martensitic case with excellent core toughness.</p>
             <h3 className="text-2xl font-semibold mt-6">Key Highlights:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>High fatigue strength for rotating components</li>
                <li>Case hardness of 50–60 HRC</li>
                <li>Compatible with polymer quenching to minimize distortion</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">5. Tool Steels (D2, H13, O1 Grades)</h2>
            <p>Tool steels are specifically designed for cutting, forming, and wear-intensive operations. They respond extremely well to localized induction hardening, especially for edge or tip hardening.</p>
            <h3 className="text-2xl font-semibold mt-6">Benefits for Tool Steels:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>High wear and abrasion resistance</li>
                <li>Minimal distortion under controlled quenching</li>
                <li>Enhanced cutting-edge life and durability</li>
            </ul>
            
            <h2 className="text-3xl font-bold mt-12">Material Comparison Summary</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold">Material</TableHead>
                            <TableHead className="font-bold">Equivalent</TableHead>
                            <TableHead className="font-bold">Carbon %</TableHead>
                            <TableHead className="font-bold">Application</TableHead>
                            <TableHead className="font-bold">Hardness</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialData.map(row => (
                            <TableRow key={row.material}>
                                <TableCell className="font-medium">{row.material}</TableCell>
                                <TableCell>{row.equivalent}</TableCell>
                                <TableCell>{row.carbon}</TableCell>
                                <TableCell>{row.application}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">How {SITE_NAME} Optimizes Heat Treatment</h2>
            <p>At {SITE_NAME}, Ludhiana, each steel grade undergoes a customized induction heat treatment process based on its carbon level and composition. Our key practices include precise frequency selection, tailored quenching methods, and automated temperature regulation to ensure every batch meets ISO standards with minimal distortion and maximum performance.</p>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Material Selection Defines Hardening Quality</h2>
            <p>Choosing the right material suitable for induction hardening determines the final strength, case depth, and fatigue resistance of your component. At {SITE_NAME}, we combine deep metallurgical knowledge with advanced induction systems to ensure the best possible outcomes — every single time.</p>

            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Material-Specific Heat Treatment in Ludhiana?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for professional induction hardening job work on EN8, EN19, EN24, 4140, 4340, and tool steels.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/material-heat-treatment">View Material Services</Link>
                    </Button>
                </div>
            </div>
        </article>
      </div>
    </>
  );
}
