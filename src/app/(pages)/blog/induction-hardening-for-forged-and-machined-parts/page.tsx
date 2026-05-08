
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Induction Hardening for Forged Shafts and Spindles',
  description: 'Boost the fatigue resistance of forged shafts and spindles with localized induction hardening.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening for Forged Shafts and Spindles",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Processes",
  "keywords": ["forged shaft hardening", "spindle heat treatment Punjab", "induction heating Ludhiana"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/induction-hardening-for-forged-and-machined-parts",
  "inLanguage": "en"
};

const processComparisonData = [
    { parameter: 'Heating Speed', induction: 'Seconds', flame: 'Minutes to hours' },
    { parameter: 'Distortion Risk', induction: 'Minimal', flame: 'High' },
    { parameter: 'Energy Efficiency', induction: '80–90%', flame: '40–60%' },
    { parameter: 'Surface Uniformity', induction: 'Excellent', flame: 'Uneven' },
    { parameter: 'Automation Feasibility', induction: 'Fully automatic', flame: 'Manual control' }
];

const shaftTypesData = [
    { industry: "Automotive", components: "Axles, drive shafts, steering spindles", purpose: "Wear & fatigue resistance" },
    { industry: "Agricultural Equipment", components: "Tractor spindles, PTO shafts", purpose: "Load-bearing endurance" },
    { industry: "Industrial Machinery", components: "Gear shafts, coupling rods", purpose: "Surface strength" },
    { industry: "Construction Machinery", components: "Hydraulic shafts", purpose: "Pressure resistance" },
];

const heatTreatmentParamsData = [
    { parameter: "Frequency Range", value: "10–30 kHz (medium frequency)" },
    { parameter: "Surface Temperature", value: "850–900°C" },
    { parameter: "Case Depth", value: "2.5–5.0 mm" },
    { parameter: "Surface Hardness", value: "55–60 HRC" },
    { parameter: "Cooling Medium", value: "10% Polymer or Water" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogForgedParts');

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
                    <span className='truncate'>Induction Hardening for Forged Shafts and Spindles</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening for Forged Shafts and Spindles</h1>
                <p className="mt-4 text-xl text-muted-foreground">Boost the fatigue resistance of forged shafts and spindles with localized induction hardening.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Induction hardening of forged shafts and spindles"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: Forged Shafts Demand Toughness and Precision</h2>
            <p>Forged shafts and spindles form the core strength of mechanical power transmission systems — from tractors and automobiles to heavy industrial machinery. They bear torsional loads, bending forces, and constant rotation, making surface strength and fatigue resistance absolutely critical.</p>
            <p>While forging provides structural integrity and grain flow alignment, induction hardening further enhances the component’s performance by creating a wear-resistant surface layer with a tough ductile core.</p>
            <p>At {SITE_NAME}, Ludhiana, we specialize in forged shaft hardening and spindle heat treatment using precision-controlled induction heating systems, serving industries across Punjab, Haryana, and North India.</p>

            <h2 className="text-3xl font-bold mt-12">Why Induction Hardening Is Ideal for Forged Shafts & Spindles</h2>
            <p>Forged components already possess strong mechanical properties due to their compact grain structure. However, they still require surface hardening to resist friction and fatigue during long-term service. Induction hardening is the most energy-efficient, accurate, and distortion-free method to achieve this.</p>
            <h3 className="text-2xl font-semibold mt-6">Key Benefits of Induction Hardening for Forged Parts</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Improved Surface Hardness (55–60 HRC) – Enhances resistance to wear and abrasion.</li>
                <li>Superior Fatigue Strength – Creates compressive residual stresses that extend service life.</li>
                <li>Dimensional Stability – Controlled heating prevents distortion or warping.</li>
                <li>Selective Hardening – Only the required area (journal, bearing surface, or spline) is hardened.</li>
                <li>Energy Efficiency – Faster heating and cooling cycles with less power consumption.</li>
            </ul>
            <p className="font-semibold">This precision hardening method transforms a tough forged base into a long-lasting performance component.</p>
            
            <h2 className="text-3xl font-bold mt-12">How Induction Hardening Works for Forged Shafts</h2>
            <p>The process uses localized electromagnetic induction to heat the surface layer of the forged shaft to its austenitizing temperature (around 850–900°C), followed by immediate polymer or water quenching.</p>
            <h3 className="text-2xl font-semibold mt-6">Step-by-Step Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Pre-cleaning & Alignment: Shafts are cleaned and properly centered for uniform rotation.</li>
                <li>Induction Heating: An induction coil surrounds the shaft area, generating controlled surface heat.</li>
                <li>Austenitization: The surface layer converts to austenite at ~900°C.</li>
                <li>Rapid Quenching: A polymer or water jet cools the surface, forming martensite (hard structure).</li>
                <li>Tempering (Optional): Reduces internal stress and stabilizes hardness.</li>
                <li>Inspection: Surface hardness, case depth, and straightness are verified.</li>
            </ol>
            <p className="font-semibold">Localized heating allows precise control, minimizing distortion and ensuring consistency.</p>
            
            <h2 className="text-3xl font-bold mt-12">Technical Parameters for Forged Shaft Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Typical Range / Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {heatTreatmentParamsData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.value}</TableCell>
                            </TableRow>
                        ))}
                         <TableRow>
                            <TableCell className="font-medium">Material Types</TableCell>
                            <TableCell>EN8, EN19, EN24, 4140, 4340</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">Component Sizes</TableCell>
                            <TableCell>Ø25 mm to Ø150 mm, up to 1.5 m length</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <p className='text-sm text-muted-foreground mt-2'>{SITE_NAME}’s fully automated systems ensure consistent results for every forged shaft batch.</p>
            </div>

            <h2 className="text-3xl font-bold mt-12">Common Applications: Where Induction Hardening Adds Value</h2>
            <p>Forged shafts and spindles are integral to many mechanical systems. Here’s where induction hardening plays a vital role:</p>
            <div className="my-8 overflow-x-auto">
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Industry</TableHead>
                            <TableHead>Typical Components</TableHead>
                            <TableHead>Purpose of Hardening</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {shaftTypesData.map((row) => (
                            <TableRow key={row.industry}>
                                <TableCell className="font-medium">{row.industry}</TableCell>
                                <TableCell>{row.components}</TableCell>
                                <TableCell>{row.purpose}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <p className='text-sm text-muted-foreground mt-2'>Serving Ludhiana’s manufacturing sector with precision hardening solutions trusted by OEMs and Tier-1 suppliers.</p>
            </div>

            <h2 className="text-3xl font-bold mt-12">Advantages Over Conventional Hardening Methods</h2>
             <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Induction Hardening</TableHead>
                            <TableHead>Flame/Furnace Hardening</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {processComparisonData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.induction}</TableCell>
                                <TableCell>{row.flame}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <p className='text-sm text-muted-foreground mt-2'>Induction hardening provides unmatched control, repeatability, and metallurgical precision.</p>
            </div>

            <h2 className="text-3xl font-bold mt-12">Case Study: Induction Hardening of EN19 Forged Spindles</h2>
            <p>A client from an agricultural equipment manufacturer in Punjab faced premature wear at the bearing area of EN19 forged spindles. The challenge was inconsistent hardness from their previous vendor.</p>
            <h3 className="text-2xl font-semibold mt-4">Solution Implemented:</h3>
            <ul className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
                <li>Applied induction hardening at 25 kHz frequency.</li>
                <li>Used 12% polymer quenching to control the cooling rate.</li>
                <li>Achieved surface hardness of 58 HRC and case depth of 3.2 mm.</li>
                <li>Tempered at 180°C for 2 hours to relieve stress.</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-4">Result:</h3>
            <p className="text-muted-foreground">Component life improved by 2.5× with zero distortion, ensuring perfect concentricity for post-machining. Precision induction hardening improved quality and productivity without design changes.</p>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Forged Strength Meets Induction Precision</h2>
            <p>When it comes to forged shafts and spindles, strength starts with the material and finishes with precision heat treatment. Induction hardening ensures consistent hardness, long fatigue life, and crack-free, distortion-free performance. At {SITE_NAME}, Ludhiana, we combine advanced induction systems, custom coil design, and AI-based process monitoring to deliver accurate, repeatable hardening results for forged components of all sizes.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Heat Treatment for Forged Shafts or Spindles?</h3>
                <p className="mt-2 text-muted-foreground">Partner with {SITE_NAME} — specialists in induction heating and hardening job work for forged and machined components.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/services">Explore Services</Link>
                    </Button>
                </div>
            </div>
        </article>
      </div>
    </>
  );
}
