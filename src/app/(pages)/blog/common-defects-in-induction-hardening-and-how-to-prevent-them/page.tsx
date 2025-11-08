
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Shield, Zap, Thermometer, AlertTriangle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Top 5 Common Defects in Induction Hardening and How to Avoid Them',
  description: 'Know the main reasons behind defects like soft spots and cracks in induction hardening, and how to prevent them.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Top 5 Common Defects in Induction Hardening and How to Avoid Them",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Quality Control",
  "keywords": ["induction hardening defects prevention", "heat treatment defects", "surface cracking", "overheating issues"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/common-defects-in-induction-hardening-and-how-to-prevent-them",
  "inLanguage": "en"
};

const defectsData = [
    { defect: "Surface Cracking", cause: "Overheating, aggressive quench", prevention: "Use polymer quench, optimize heating time" },
    { defect: "Soft Spots", cause: "Uneven heating, inconsistent quench", prevention: "Align coil, calibrate power, ensure consistent quench flow" },
    { defect: "Overheating", cause: "Excessive power, coil too close", prevention: "Use temperature feedback, adjust coil spacing" },
    { defect: "Distortion", cause: "Uneven heating/cooling", prevention: "Use polymer quench, proper fixturing, tempering" },
    { defect: "Shallow Case Depth", cause: "Incorrect frequency, short heating time", prevention: "Match frequency to depth, optimize coil design" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogDefects');

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
                    <span className='truncate'>Common Defects in Induction Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Top 5 Common Defects in Induction Hardening and How to Avoid Them</h1>
                <p className="mt-4 text-xl text-muted-foreground">Understanding the common defects in induction hardening and how to prevent them is critical to maintaining quality and reliability.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Illustration showing common induction hardening defects like cracks and soft spots"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>At ${SITE_NAME}, we combine ISO-certified process control, precision instrumentation, and real-time monitoring to eliminate these issues before they occur.</p>
            
            <h2 className="text-3xl font-bold mt-12">1. Surface Cracking — The Most Critical Defect</h2>
            <p>Fine cracks appear on the surface or edges of the hardened area. This is often caused by overheating, an excessive quenching rate, or sharp geometric transitions.</p>
            <h3 className="text-2xl font-semibold mt-6">Prevention Tips:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use polymer quenching for controlled cooling.</li>
                <li>Optimize heating frequency and dwell time.</li>
                <li>Apply post-hardening tempering to relieve stress.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">2. Soft Spots or Uneven Hardness</h2>
            <p>Patches or areas with low hardness occur when parts of the surface do not reach transformation temperature or cool too slowly. This can be due to uneven heating, insufficient power, or inconsistent quench flow.</p>
             <h3 className="text-2xl font-semibold mt-6">Prevention Tips:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Ensure precise coil-to-component alignment.</li>
                <li>Calibrate power and timing for each batch.</li>
                <li>Maintain consistent quench nozzle pressure and positioning.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">3. Overheating and Surface Melting</h2>
            <p>Discoloration, surface melting, or a rough burnt appearance can be caused by excessive power input, long heating times, or a coil positioned too close to the surface.</p>
            <h3 className="text-2xl font-semibold mt-6">Prevention Tips:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use temperature-controlled induction systems with feedback loops.</li>
                <li>Adjust coil spacing and scanning speed.</li>
                <li>Monitor surface temperature using non-contact pyrometers.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">4. Distortion or Warping</h2>
            <p>Component bending or dimensional deviation after hardening is typically caused by uneven heating or cooling, high internal stress during quenching, or improper fixturing.</p>
            <h3 className="text-2xl font-semibold mt-6">Prevention Tips:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use polymer quenching for gradual cooling.</li>
                <li>Employ proper fixturing to maintain part geometry.</li>
                <li>Conduct tempering to stabilize internal stresses.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">5. Shallow or Inconsistent Case Depth</h2>
            <p>If the hardness depth does not meet specifications or varies across the part, it may be due to incorrect frequency, short heating duration, or an unoptimized coil design.</p>
            <h3 className="text-2xl font-semibold mt-6">Prevention Tips:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Match frequency to desired case depth (low frequency = deeper case).</li>
                <li>Customize coil design for each component type.</li>
                <li>Control quenching delay to start immediately after heating.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Summary of Common Issues</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Defect</TableHead>
                            <TableHead>Likely Cause</TableHead>
                            <TableHead>Prevention</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {defectsData.map((row) => (
                            <TableRow key={row.defect}>
                                <TableCell className="font-medium">{row.defect}</TableCell>
                                <TableCell>{row.cause}</TableCell>
                                <TableCell>{row.prevention}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Prevention Is the Best Quality Assurance</h2>
            <p>While heat treatment defects can be costly, they are preventable with the right process control. At ${SITE_NAME}, we ensure defect-free induction hardening job work by combining skilled operators, advanced machines, and controlled quenching systems.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Reliable Induction Hardening Job Work in Ludhiana?</h3>
                <p className="mt-2 text-muted-foreground">Partner with ${SITE_NAME} for defect-free induction hardening and heat treatment services.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/services">Our Services</Link>
                    </Button>
                </div>
            </div>
        </article>
      </div>
    </>
  );
}
