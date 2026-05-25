
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
  title: 'Induction Hardening Job Work for Export Units',
  description: 'Providing precise induction heat treatment solutions tailored for export and OEM-grade industrial components.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening Job Work for Export Units",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "OEM Heat Treatment",
  "keywords": ["induction hardening export services", "heat treatment for exporters Punjab", "OEM hardening Ludhiana"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/induction-hardening-job-work-for-export-units",
  "inLanguage": "en"
};

const materialsData = [
    { material: "EN8", use: "Shafts, pins, rods", hardness: "50–55", depth: "1.5–2.5" },
    { material: "EN19 (4140)", use: "Axles, gears, rollers", hardness: "55–58", depth: "2.0–3.5" },
    { material: "EN24 (4340)", use: "Crankshafts, spindles", hardness: "56–60", depth: "2.5–4.0" },
    { material: "20MnCr5", use: "Gears, pinions", hardness: "58–62", depth: "0.8–1.5" },
    { material: "Tool Steels", use: "Dies, punches", hardness: "55–60", depth: "0.5–2.0" },
];

const industriesData = [
    { industry: "Automotive", components: "Gears, axles, shafts, crankshafts" },
    { industry: "Agriculture", components: "Tractor spindles, rotavator shafts, hubs" },
    { industry: "Industrial Machinery", components: "Rollers, couplings, drive shafts" },
    { industry: "Power Transmission", components: "Pinions, splines, sleeves" },
    { industry: "Tooling & Forging", components: "Dies, mandrels, tool steels" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogExport');

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
                    <span className='truncate'>Induction Hardening for Export Units</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening Job Work for Export Units</h1>
                <p className="mt-4 text-xl text-muted-foreground">Providing precise induction heat treatment solutions tailored for export and OEM-grade industrial components.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Induction hardening for export units"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">Introduction: Precision Heat Treatment for Global Standards</h2>
            <p>Export-oriented industries in Punjab and Ludhiana are playing a major role in supplying automotive, agricultural, and industrial components worldwide. To meet international quality and durability standards, these components must undergo precise and consistent surface hardening.</p>
            <p>At {SITE_NAME}, we offer export-grade induction hardening job work designed for OEMs and export manufacturers. Our goal: global quality, locally delivered.</p>

            <h2 className="text-3xl font-bold mt-12">Why Export Units Need Precision Induction Hardening</h2>
            <p>In global markets, component buyers demand exact metallurgical properties, uniform hardness, and repeatable results. Induction hardening offers the control, cleanliness, and consistency required to meet such standards.</p>
            <h3 className="text-2xl font-semibold mt-6">Key Requirements for Export-Grade Components:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Accurate case depth control</li>
                <li>Consistent surface hardness (HRC)</li>
                <li>Zero distortion or warping</li>
                <li>Traceable quality documentation</li>
                <li>Compatibility with ISO, DIN, and ASTM standards</li>
            </ul>
            <p className="font-semibold text-foreground mt-4">From Ludhiana to Latin America — your components deserve world-class heat treatment.</p>

            <h2 className="text-3xl font-bold mt-12">The Induction Hardening Process for Export Applications</h2>
            <ol className='list-decimal list-inside space-y-2 text-muted-foreground'>
                <li><strong>Material Identification:</strong> Confirm grade (EN8, EN19, EN24, 4140, 4340, etc.).</li>
                <li><strong>Cleaning & Pre-inspection:</strong> Remove any oil, dirt, or scale.</li>
                <li><strong>Induction Heating:</strong> Controlled electromagnetic heating (850°C–950°C).</li>
                <li><strong>Quenching:</strong> Polymer or water quenching to achieve required hardness.</li>
                <li><strong>Tempering (if required):</strong> Relieves internal stress.</li>
                <li><strong>Testing & Validation:</strong> Hardness and case depth measured for quality certification.</li>
            </ol>
            <p className="mt-4 font-semibold text-foreground">All results are logged digitally to maintain process traceability — essential for export documentation and OEM audits.</p>
            
            <h2 className="text-3xl font-bold mt-12">Materials We Treat for Exporters</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Common Use</TableHead>
                            <TableHead>Hardness (HRC)</TableHead>
                            <TableHead>Case Depth (mm)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map((row) => (
                            <TableRow key={row.material}>
                                <TableCell className="font-medium">{row.material}</TableCell>
                                <TableCell>{row.use}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Export Industries Served by {SITE_NAME}</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Industry</TableHead>
                            <TableHead>Common Export Components</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {industriesData.map((row) => (
                            <TableRow key={row.industry}>
                                <TableCell className="font-medium">{row.industry}</TableCell>
                                <TableCell>{row.components}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Benefits of Induction Hardening for Export Units</h2>
            <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">ISO-Grade Consistency:</span> Precision-controlled process ensures compliance with global OEM standards.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Reduced Rejection Rates:</span> Automated temperature and time control minimize variations and defects.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Environmentally Friendly Process:</span> No flames, emissions, or contamination — meeting export eco-regulations.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">High Repeatability:</span> Every part is treated under identical conditions for batch uniformity.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Shorter Lead Times:</span> Faster heating cycles mean higher productivity and faster export deliveries.</div></li>
            </ul>
            <p className="mt-4 font-semibold text-foreground">We harden your parts — and your reputation in the export market.</p>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Export-Grade Precision, Local Expertise</h2>
            <p>In the competitive global marketplace, quality and reliability make all the difference. With {SITE_NAME}’s induction hardening export services, you get OEM-level surface hardening, documented traceability, and batch consistency that meets the toughest international standards.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Export-Grade Hardening Services?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, your trusted partner for OEM-grade surface hardening for export components.</p>
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

    