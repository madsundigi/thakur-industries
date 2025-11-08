import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Zap, Shield, Thermometer, AlertTriangle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Professional Induction Hardening Job Work for OEMs in Punjab',
  description: 'Learn why OEM manufacturers in Punjab choose Thakur Induction for reliable, high-quality heat treatment services.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Professional Induction Hardening Job Work for OEMs in Punjab",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "OEM Heat Treatment",
  "keywords": ["induction hardening job work Punjab", "OEM component hardening", "industrial heat treatment"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/induction-hardening-job-work-for-oems",
  "inLanguage": "en"
};

const industriesData = [
    { industry: "Automotive Manufacturing", components: "Gears, shafts, axles, and transmission parts" },
    { industry: "Agricultural Equipment", components: "Tractor axles, PTO shafts, rotavator spindles" },
    { industry: "Industrial Machinery", components: "Rollers, pins, couplings, and machine tools" },
    { industry: "Aerospace & Railways", components: "Bushings, rods, pins, and drive assemblies" },
    { industry: "Forging & Tooling OEMs", components: "Dies, punches, and molds" },
];

const materialsData = [
    { grade: "EN8 (C40)", use: "Automotive shafts & couplings" },
    { grade: "EN19 (4140)", use: "Transmission gears & axles" },
    { grade: "EN24 (4340)", use: "Drive shafts & heavy-duty parts" },
    { grade: "20MnCr5", use: "Precision gears & pinions" },
    { grade: "Tool Steels (D2, H13)", use: "Dies, punches, and forming tools" },
];

const oemBenefitsData = [
    { feature: "Automated process control", benefit: "Consistent hardness and repeatability" },
    { feature: "Localized surface treatment", benefit: "Minimal distortion and dimensional stability" },
    { feature: "Rapid production cycles", benefit: "Faster delivery and reduced downtime" },
    { feature: "Certified processes", benefit: "Meets automotive and industrial standards" },
    { feature: "Full traceability", benefit: "Quality documentation for every batch" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogOem');

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
                    <span className='truncate'>OEM Induction Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Professional Induction Hardening Job Work for OEMs in Punjab</h1>
                <p className="mt-4 text-xl text-muted-foreground">Learn why OEM manufacturers in Punjab choose {SITE_NAME} for reliable, high-quality heat treatment services.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="OEM components being prepared for induction hardening"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>Original Equipment Manufacturers (OEMs) rely heavily on precision-engineered components that must meet stringent performance and durability standards. Whether it’s automotive, agricultural, or industrial machinery, components like shafts, gears, axles, and rollers undergo immense mechanical stress.</p>
            <p>To ensure these parts last longer and perform consistently, they require accurate and repeatable surface hardening — and that’s where induction hardening job work becomes essential.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Is Induction Hardening Job Work?</h2>
            <p>Induction hardening is a localized heat treatment process that strengthens the outer surface of a metal part while keeping its inner core tough and ductile. It uses electromagnetic induction to rapidly heat selected areas of the component, followed by controlled quenching to form a hardened, wear-resistant surface layer.</p>

            <h2 className="text-3xl font-bold mt-12">Why OEMs in Punjab Choose Induction Hardening</h2>
            <p>Punjab’s industrial ecosystem — especially Ludhiana, Rajpura, and Jalandhar — is home to hundreds of OEM and Tier-1 suppliers catering to sectors like automotive, tractors, and heavy equipment. These manufacturers need high-volume, defect-free heat treatment job work that ensures dimensional accuracy, wear resistance, and uniform hardness across production batches.</p>

            <h2 className="text-3xl font-bold mt-12">Industries Served by {SITE_NAME}</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Industry</TableHead>
                            <TableHead>Common OEM Components Hardened</TableHead>
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

            <h2 className="text-3xl font-bold mt-12">The OEM Component Hardening Process</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Component Evaluation</strong> – Each part is inspected for material, geometry, and hardness requirements.</li>
                <li><strong>Coil Design & Setup</strong> – Custom coils ensure uniform heating based on the part’s geometry.</li>
                <li><strong>Induction Heating</strong> – Medium or high-frequency power heats the surface zone precisely.</li>
                <li><strong>Polymer or Water Quenching</strong> – Rapid cooling forms a martensitic layer with desired hardness.</li>
                <li><strong>Tempering & Finishing</strong> – Optional tempering to balance hardness and ductility.</li>
                <li><strong>Testing & Quality Check</strong> – Each part undergoes hardness, case depth, and microstructure testing.</li>
            </ol>
            <p>This meticulous process guarantees accuracy and repeatability — critical for OEM component production.</p>

            <h2 className="text-3xl font-bold mt-12">Benefits for OEM Manufacturers in Punjab</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Feature</TableHead>
                            <TableHead>OEM Benefit</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {oemBenefitsData.map((row) => (
                            <TableRow key={row.feature}>
                                <TableCell className="font-medium">{row.feature}</TableCell>
                                <TableCell>{row.benefit}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Materials We Commonly Process</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material Grade</TableHead>
                            <TableHead>Typical Use</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map((row) => (
                            <TableRow key={row.grade}>
                                <TableCell className="font-medium">{row.grade}</TableCell>
                                <TableCell>{row.use}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Precision and Reliability for OEM Production</h2>
            <p>For OEMs in Punjab, consistency, durability, and quality are non-negotiable. With {SITE_NAME}’s induction hardening job work, manufacturers get the perfect combination of advanced technology, metallurgical accuracy, and timely delivery. Whether it’s automotive shafts, industrial gears, or tractor components, our team ensures every part performs beyond expectations — job after job.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for OEM Induction Hardening Services?</h3>
                <p className="mt-2 text-muted-foreground">Partner with {SITE_NAME} for industrial heat treatment and surface hardening job work.</p>
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