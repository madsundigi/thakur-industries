
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
  title: 'Hardness Testing After Induction Hardening',
  description: 'Learn how hardness and case depth testing ensure quality and reliability in induction-treated parts.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Hardness Testing After Induction Hardening",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Quality Control",
  "keywords": ["hardness testing for induction", "case depth verification", "Rockwell test Punjab"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/hardness-testing-after-induction-hardening",
  "inLanguage": "en"
};

const objectivesData = [
    { purpose: "Quality Verification", description: "Confirms if process parameters achieved the required hardness and depth" },
    { purpose: "Process Validation", description: "Ensures correct coil frequency, heating time, and quenching rate" },
    { purpose: "Performance Prediction", description: "Correlates hardness with wear and fatigue resistance" },
    { purpose: "Consistency Control", description: "Detects deviations in large-batch production" },
    { purpose: "Customer Compliance", description: "Meets OEM and IS/ASTM standard requirements" },
];

const caseDepthData = [
    { component: "Shafts (EN8/EN19)", material: "Alloy Steel", depth: "2.0–3.5" },
    { component: "Gears (20MnCr5)", material: "Case Hardening Steel", depth: "0.8–1.2" },
    { component: "Axles (EN24)", material: "Ni-Cr-Mo Alloy", depth: "2.5–4.0" },
    { component: "Pins & Spindles", material: "EN353", depth: "1.0–2.5" },
];

const resultsData = [
    { material: "EN8 / C45", hardness: "50–55", depth: "1.5–3.0", quench: "Water" },
    { material: "EN19 / 4140", hardness: "54–58", depth: "2.0–3.5", quench: "Polymer" },
    { material: "EN24 / 4340", hardness: "56–60", depth: "2.5–5.0", quench: "Polymer" },
    { material: "20MnCr5", hardness: "58–62", depth: "0.8–1.2", quench: "Polymer / Water" },
];

const advantagesData = [
    { benefit: "Consistent Quality Assurance", description: "Ensures parts meet specification before dispatch" },
    { benefit: "Prevents Failure in Field", description: "Detects shallow or over-hardened cases" },
    { benefit: "Enhances OEM Confidence", description: "Proof of consistent results" },
    { benefit: "Supports Continuous Improvement", description: "Enables process tuning for better efficiency" },
    { benefit: "Provides Metallurgical Traceability", description: "Data-driven verification for every batch" },
];

const equipmentData = [
    "Rockwell Hardness Tester (HRC/HRB scales)",
    "Vickers Microhardness Tester with digital microscope",
    "Portable Leeb Hardness Tester (for large components)",
    "Metallographic Case Depth Analyzer",
    "Calibrated reference blocks for accuracy verification"
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogHardnessTesting');

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
                    <span className='truncate'>Hardness Testing After Induction Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Hardness Testing After Induction Hardening</h1>
                <p className="mt-4 text-xl text-muted-foreground">Learn how hardness and case depth testing ensure quality and reliability in induction-treated parts.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="A technician using a Rockwell hardness tester on a metal part."
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">Introduction: Why Hardness Testing Matters in Induction Hardening</h2>
            <p>In induction hardening, precision is everything — from heating temperature and frequency to quenching rate and case depth. But the real test of success lies in verifying the achieved hardness and case depth after the process is complete.</p>
            <p>Hardness testing ensures that each part meets the required surface hardness (HRC), the desired case depth, and the structural consistency across production batches. At {SITE_NAME}, Ludhiana, we perform comprehensive hardness and case depth testing on all induction-treated parts to ensure durability, wear resistance, and reliability.</p>

            <h2 className="text-3xl font-bold mt-12">Objectives of Hardness Testing After Induction Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Purpose</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {objectivesData.map((row) => (
                            <TableRow key={row.purpose}>
                                <TableCell className="font-medium">{row.purpose}</TableCell>
                                <TableCell>{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p>At {SITE_NAME}, these tests are not just routine — they are part of our ISO-based quality assurance process for every job.</p>

            <h2 className="text-3xl font-bold mt-12">Common Hardness Testing Methods Used</h2>
            <h3 className="text-2xl font-semibold mt-6">1. Rockwell Hardness Test (HRC/HB)</h3>
            <p>The Rockwell test is the most widely used method for checking surface hardness of induction-hardened parts. It measures resistance to indentation using a diamond cone or steel ball under a fixed load.</p>

            <h3 className="text-2xl font-semibold mt-6">2. Microhardness Test (Vickers / Knoop)</h3>
            <p>Microhardness testing is used for case depth analysis — to determine how deep the hardness extends below the surface. It involves making multiple small indentations at different depths and recording their hardness values.</p>

            <h3 className="text-2xl font-semibold mt-6">3. Brinell Hardness Test</h3>
            <p>Used for larger or softer materials, the Brinell test measures the diameter of an indentation made by a steel or tungsten ball. While less common in induction hardening, it is useful for base metal hardness testing.</p>
            
            <h3 className="text-2xl font-semibold mt-6">4. Portable Hardness Testing</h3>
            <p>For large parts such as axles, crankshafts, or industrial rollers, portable testers (like Leeb or Equotip) are used to measure hardness directly on-site.</p>

            <h2 className="text-3xl font-bold mt-12">Case Depth Verification: The Core of Quality Control</h2>
            <p>Case depth verification ensures that hardening penetrates to the required depth beneath the surface — balancing wear resistance with toughness. At {SITE_NAME}, we perform Mechanical Case Depth Testing and Microscopic Case Depth Testing.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Material</TableHead>
                            <TableHead>Effective Case Depth (mm)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {caseDepthData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.material}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Typical Hardness & Case Depth Results</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Surface Hardness (HRC)</TableHead>
                            <TableHead>Case Depth (mm)</TableHead>
                            <TableHead>Quenching Medium</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {resultsData.map((row) => (
                            <TableRow key={row.material}>
                                <TableCell className="font-medium">{row.material}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                                <TableCell>{row.quench}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Advantages of Hardness & Case Depth Testing</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Benefit</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {advantagesData.map((row) => (
                            <TableRow key={row.benefit}>
                                <TableCell className="font-medium">{row.benefit}</TableCell>
                                <TableCell>{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Testing Defines the Quality of Hardening</h2>
            <p>Induction hardening is only successful when verified through accurate hardness and case depth testing. At {SITE_NAME}, our testing systems ensure that every part meets international hardness standards, achieving the right balance between strength, durability, and precision.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Hardness Testing or Induction Hardening Services in Punjab?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, Ludhiana for complete heat treatment and hardness testing solutions.</p>
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
