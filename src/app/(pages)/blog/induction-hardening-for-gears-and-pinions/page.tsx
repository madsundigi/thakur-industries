
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
  title: 'Gear & Pinion Induction Hardening Services in Punjab',
  description: 'Explore gear and pinion hardening processes that enhance wear resistance for automotive and farm machinery parts.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Gear & Pinion Induction Hardening Services in Punjab",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Processes",
  "keywords": ["gear induction hardening Punjab", "pinion hardening process", "gear teeth heat treatment"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/induction-hardening-for-gears-and-pinions",
  "inLanguage": "en"
};

const materialsData = [
    { grade: "EN8 (C40)", use: "Light-duty gears", hardness: "50–54" },
    { grade: "EN19 (4140)", use: "Transmission shafts & pinions", hardness: "52–58" },
    { grade: "EN24 (4340)", use: "Heavy-duty automotive gears", hardness: "55–60" },
    { grade: "20MnCr5", use: "Case hardening steel for precision gears", hardness: "58–62" },
    { grade: "16MnCr5", use: "Pinions & sprockets", hardness: "58–60" },
];

const benefitsData = [
    { benefit: "Enhanced Surface Hardness", description: "Increases gear tooth resistance against wear and fatigue." },
    { benefit: "Improved Load Bearing Capacity", description: "Hardened surfaces sustain heavy torque without deformation." },
    { benefit: "Longer Service Life", description: "Reduces maintenance frequency and downtime." },
    { benefit: "Localized Hardening", description: "Only functional areas are hardened, maintaining the core’s ductility." },
    { benefit: "Excellent Repeatability", description: "PLC-controlled process ensures consistency for mass production." },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogGearsAndPinions');

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
                    <span className='truncate'>Gear & Pinion Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Gear & Pinion Induction Hardening Services in Punjab</h1>
                <p className="mt-4 text-xl text-muted-foreground">Explore gear and pinion hardening processes that enhance wear resistance for automotive and farm machinery parts.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Induction hardening of gears and pinions"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>Gears and pinions are the backbone of motion and power transmission systems — from tractors and industrial machinery to automobiles and heavy equipment. They operate under extreme loads, high torque, and constant friction, making them prone to surface wear, pitting, and fatigue failure if not properly hardened.</p>
            
            <h2 className="text-3xl font-bold mt-12">Understanding Gear Induction Hardening</h2>
            <p>Induction hardening is a localized heat treatment process that strengthens the surface of metal components using electromagnetic induction. In gear induction hardening, only the gear teeth or specific contact zones are heated and quenched — ensuring that the core remains tough and ductile while the surface achieves high hardness (up to 60 HRC).</p>

            <h2 className="text-3xl font-bold mt-12">Pinion Hardening Process Explained</h2>
            <p>Pinions, typically smaller gears that engage larger gears, experience high rotational stress and load concentration. For these components, the pinion hardening process is optimized for fine tooth geometry, controlled case depth, and minimal distortion.</p>

            <h2 className="text-3xl font-bold mt-12">Materials Used in Gear & Pinion Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material Grade</TableHead>
                            <TableHead>Common Use</TableHead>
                            <TableHead>Achievable Hardness (HRC)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map((row) => (
                            <TableRow key={row.grade}>
                                <TableCell className="font-medium">{row.grade}</TableCell>
                                <TableCell>{row.use}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Benefits of Gear Induction Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Benefit</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {benefitsData.map((row) => (
                            <TableRow key={row.benefit}>
                                <TableCell className="font-medium">{row.benefit}</TableCell>
                                <TableCell>{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Stronger Gears, Reliable Performance</h2>
            <p>Induction hardening for gears and pinions is more than a heat treatment — it’s an engineering upgrade that ensures your components last longer, perform better, and handle higher torque loads without failure. Whether you’re producing tractor gears in Ludhiana or industrial gearboxes in Rajpura, {SITE_NAME} provides custom, high-accuracy heat treatment job work for all your gear and pinion requirements.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Gear & Pinion Hardening Services in Punjab?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} today for professional gear induction hardening and pinion heat treatment job work.</p>
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
