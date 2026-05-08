
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
  title: 'Induction Hardening for Gearbox Components',
  description: 'Discover how induction heat treatment improves the durability and performance of gearbox parts.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening for Gearbox Components",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Automotive Heat Treatment",
  "keywords": ["gearbox hardening Ludhiana", "gear heat treatment Punjab", "case hardening for transmissions"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/induction-hardening-for-gearbox-components",
  "inLanguage": "en"
};

const componentsData = [
    { component: "Gears & Pinions", function: "Transmit torque between shafts", objective: "Surface wear resistance" },
    { component: "Input & Output Shafts", function: "Carry rotational load", objective: "Fatigue & torsional strength" },
    { component: "Synchronizer Rings", function: "Smooth gear shifting", objective: "Edge hardness & wear control" },
    { component: "Bearing Seats", function: "Support shafts & reduce friction", objective: "Dimensional stability" },
    { component: "Splines & Couplings", function: "Connect components", objective: "Hardness for wear-free fit" },
];

const benefitsData = [
    { benefit: "High Surface Hardness", effect: "Reduces tooth wear and abrasion." },
    { benefit: "Improved Fatigue Strength", effect: "Handles cyclic loading without cracking." },
    { benefit: "Dimensional Stability", effect: "Eliminates distortion during hardening." },
    { benefit: "Enhanced Torque Transmission", effect: "Improves efficiency and durability." },
    { benefit: "Longer Service Life", effect: "Reduces maintenance costs and downtime." },
];

const materialsData = [
    { grade: "EN8 (C40 Steel)", application: "Shafts & couplings", hardness: "50–55" },
    { grade: "EN19 (4140)", application: "Transmission shafts & gears", hardness: "52–58" },
    { grade: "EN24 (4340)", application: "Heavy-duty gearbox components", hardness: "55–60" },
    { grade: "20MnCr5", application: "Precision gears & pinions", hardness: "58–62" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogGearbox');

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
                    <span className='truncate'>Gearbox Component Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening for Gearbox Components</h1>
                <p className="mt-4 text-xl text-muted-foreground">Discover how induction heat treatment improves the durability and performance of gearbox parts.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Close-up of industrial gearbox components"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>A gearbox is the powerhouse of every mechanical system — from tractors and automobiles to industrial machines. Its gears, shafts, and bearings constantly endure rotational friction, torque transmission, and dynamic loads. Without proper hardening, gearbox parts face premature wear, surface fatigue, and failure under stress. That’s where induction hardening plays a vital role — providing surface durability, dimensional stability, and long-term performance.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Gearbox Hardening?</h2>
            <p>Gearbox hardening is a controlled heat treatment process that enhances the wear resistance of gearbox components — such as gears, shafts, and sleeves — by hardening only their outer surface while preserving a ductile core. At {SITE_NAME}, this is achieved using induction hardening technology, which uses electromagnetic induction to heat specific zones of a metal part to 850–950°C, followed by rapid quenching.</p>
            
            <h2 className="text-3xl font-bold mt-12">Key Gearbox Components That Require Induction Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Function</TableHead>
                            <TableHead>Hardening Objective</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {componentsData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.function}</TableCell>
                                <TableCell>{row.objective}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Benefits of Induction Hardening for Gearbox Components</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Advantage</TableHead>
                            <TableHead>Effect on Gearbox Reliability</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {benefitsData.map((row) => (
                            <TableRow key={row.benefit}>
                                <TableCell className="font-medium">{row.benefit}</TableCell>
                                <TableCell>{row.effect}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Materials Commonly Used in Gearbox Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material Grade</TableHead>
                            <TableHead>Application</TableHead>
                            <TableHead>Hardness (HRC)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map((row) => (
                            <TableRow key={row.grade}>
                                <TableCell className="font-medium">{row.grade}</TableCell>
                                <TableCell>{row.application}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Induction Hardening Ensures Gearbox Durability</h2>
            <p>A gearbox’s reliability depends on the strength and surface quality of its components. Through induction hardening, {SITE_NAME} delivers components that are wear-resistant, fatigue-proof, and performance-optimized. Our gearbox hardening job work in Ludhiana is trusted by OEMs and manufacturers for its accuracy, speed, and defect-free results — ensuring every gearbox lasts longer and performs better in the field.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Gearbox Hardening Services in Punjab?</h3>
                <p className="mt-2 text-muted-foreground">Get in touch with {SITE_NAME} for gearbox and transmission component hardening job work in Ludhiana and across Punjab.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/gear-hardening">Explore Gear Hardening</Link>
                    </Button>
                </div>
            </div>
        </article>
      </div>
    </>
  );
}

    