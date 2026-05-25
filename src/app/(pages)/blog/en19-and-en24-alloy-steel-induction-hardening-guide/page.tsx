
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Zap } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'EN19 and EN24 Alloy Steel Induction Hardening Guide',
  description: 'Detailed guide on induction hardening of EN19 and EN24 steels for automotive and heavy equipment manufacturing.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "EN19 and EN24 Alloy Steel Induction Hardening Guide",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Materials",
  "keywords": ["EN19 EN24 induction hardening", "alloy steel heat treatment Punjab", "Ludhiana industrial steels"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/en19-and-en24-alloy-steel-induction-hardening-guide",
  "inLanguage": "en"
};

const steelComparisonData = [
    { property: "Carbon (%)", en19: "0.35–0.45", en24: "0.36–0.44" },
    { property: "Nickel (%)", en19: "—", en24: "1.3–1.7" },
    { property: "Chromium (%)", en19: "0.9–1.2", en24: "0.9–1.2" },
    { property: "Molybdenum (%)", en19: "0.2–0.4", en24: "0.2–0.4" },
];

const benefitsData = [
    { benefit: "Increased Surface Hardness (up to 60 HRC)", impact: "Enhances wear resistance" },
    { benefit: "Tough Core Retained", impact: "Prevents breakage under load" },
    { benefit: "Precision Control", impact: "Uniform case depth (1.5–4 mm)" },
    { benefit: "Low Distortion", impact: "Suitable for precision-machined parts" },
    { benefit: "Faster Processing", impact: "Ideal for OEM and batch production" },
    { benefit: "Cleaner Operation", impact: "No flames or fumes – environment-friendly" },
];

const applicationsData = [
    { industry: "Automotive", applications: "Drive shafts, gear hubs, transmission pins" },
    { industry: "Agriculture", applications: "Tractor spindles, axles, and PTO shafts" },
    { industry: "Heavy Machinery", applications: "Rollers, couplings, and pins" },
    { industry: "Forging Units", applications: "Tooling dies and mandrels" },
];

const paramsData = [
    { grade: "EN19 (4140)", hardness: "55–58", depth: "2.0–3.0", quench: "Polymer (10%)" },
    { grade: "EN24 (4340)", hardness: "57–60", depth: "2.5–4.0", quench: "Water or polymer (8%)" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogEN19_EN24');

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
                    <span className='truncate'>EN19 & EN24 Steel Hardening Guide</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">EN19 and EN24 Alloy Steel Induction Hardening Guide</h1>
                <p className="mt-4 text-xl text-muted-foreground">Detailed guide on induction hardening of EN19 and EN24 steels for automotive and heavy equipment manufacturing.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt={featureImage.description}
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: Strengthening the Backbone of Industrial Engineering</h2>
            <p>In the world of automotive and heavy machinery manufacturing, few materials are as reliable as EN19 and EN24 alloy steels. Known for their high tensile strength, wear resistance, and fatigue endurance, these steels are the foundation of components that operate under extreme conditions — from gears and shafts to crankshafts, axles, and spindles.</p>
            <p>At {SITE_NAME}, Ludhiana, we specialize in precision induction hardening of EN19 and EN24 steels, offering manufacturers across Punjab and North India enhanced mechanical performance and durability through advanced heat treatment techniques.</p>

            <h2 className="text-3xl font-bold mt-12">Why EN19 and EN24 Are Ideal for Induction Hardening</h2>
            <p>Both EN19 and EN24 are nickel-chromium-molybdenum alloy steels, designed for high-stress and heavy-load applications. Their chemical composition allows for deep hardenability and excellent response to induction heat treatment.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Property</TableHead>
                            <TableHead>EN19 (AISI 4140)</TableHead>
                            <TableHead>EN24 (AISI 4340)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {steelComparisonData.map(row => (
                            <TableRow key={row.property}>
                                <TableCell className="font-medium">{row.property}</TableCell>
                                <TableCell>{row.en19}</TableCell>
                                <TableCell>{row.en24}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p className="font-semibold text-foreground">EN19 is widely used for medium-load components, while EN24 is preferred for high-load and fatigue-critical parts. Both respond exceptionally well to induction hardening, producing a hard martensitic surface layer with a tough core.</p>

            <h2 className="text-3xl font-bold mt-12">How Induction Hardening Works for EN19 & EN24</h2>
            <p>At {SITE_NAME}, we utilize medium-frequency induction systems (10–50 kHz) to ensure precise heating control and uniform case depth.</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground my-4">
                <li><strong>Pre-Processing & Cleaning:</strong> The component surface is cleaned to remove oil, rust, and contaminants.</li>
                <li><strong>Induction Heating:</strong> An induction coil heats the surface layer between 850°C–950°C.</li>
                <li><strong>Quenching:</strong> Immediate cooling using polymer or water-based quenching systems transforms the heated layer into martensite.</li>
                <li><strong>Tempering (Optional):</strong> Low-temperature tempering (150–200°C) relieves internal stresses.</li>
                <li><strong>Testing & Validation:</strong> Hardness testing, case depth measurement, and metallographic inspection ensure consistency.</li>
            </ol>
            <p className="font-semibold text-primary"><Zap className="inline-block mr-2 h-5 w-5" />Every EN steel component undergoes a 100% inspection process before delivery.</p>

            <h2 className="text-3xl font-bold mt-12">Benefits of Induction Hardening for EN19 and EN24 Steels</h2>
             <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Benefit</TableHead>
                            <TableHead>Impact on Component Performance</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {benefitsData.map(row => (
                            <TableRow key={row.benefit}>
                                <TableCell className="font-medium">{row.benefit}</TableCell>
                                <TableCell>{row.impact}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Applications of EN19 and EN24 Induction Hardening</h2>
            <div className="my-8 overflow-x-auto">
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Industry</TableHead>
                            <TableHead>Applications</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {applicationsData.map(row => (
                            <TableRow key={row.industry}>
                                <TableCell className="font-medium">{row.industry}</TableCell>
                                <TableCell>{row.applications}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Material-Specific Induction Hardening Parameters</h2>
            <div className="my-8 overflow-x-auto">
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Steel Grade</TableHead>
                            <TableHead>Hardness (HRC)</TableHead>
                            <TableHead>Case Depth (mm)</TableHead>
                            <TableHead>Quenching Medium</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paramsData.map(row => (
                            <TableRow key={row.grade}>
                                <TableCell className="font-medium">{row.grade}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                                <TableCell>{row.quench}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Performance, Precision, and Reliability</h2>
            <p>EN19 and EN24 steels are ideal for induction hardening due to their high strength and alloy content. Induction heat treatment delivers the best combination of hardness, fatigue resistance, and surface integrity. {SITE_NAME}, with its advanced systems and skilled team, provides consistent, high-quality results for automotive, heavy machinery, and export-oriented industries.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for EN19 or EN24 Hardening?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for industrial alloy heat treatment and component hardening job work in Ludhiana and Punjab.</p>
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

    