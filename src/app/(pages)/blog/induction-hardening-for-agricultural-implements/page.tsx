
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
  title: 'Induction Hardening for Tractor Components in Punjab',
  description: "Learn how induction hardening improves durability and performance of tractor shafts and implements.",
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening for Tractor Components in Punjab",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Agricultural Heat Treatment",
  "keywords": ["tractor component hardening", "agricultural implements heat treatment Punjab", "spindle hardening Ludhiana"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/induction-hardening-for-agricultural-implements",
  "inLanguage": "en"
};

const componentsData = [
    { component: "Front & Rear Axles", material: "EN8 / EN19", process: "Induction + Polymer Quenching", purpose: "Wear & fatigue resistance" },
    { component: "Spindles & Kingpins", material: "EN24 / 4140", process: "Medium-Frequency Hardening", purpose: "Surface hardness + impact strength" },
    { component: "PTO Shafts", material: "EN8 / 20MnCr5", process: "Progressive Induction Hardening", purpose: "Torque resistance" },
    { component: "Gear Shafts & Couplings", material: "EN19 / EN24", process: "Case Hardening + Induction", purpose: "Tooth durability" },
    { component: "Lift Arms & Levers", material: "EN8", process: "Localized Surface Hardening", purpose: "Shock absorption" },
    { component: "Hydraulic Rods", material: "4340 / EN24", process: "Induction + Polishing", purpose: "Corrosion & wear resistance" },
];

const materialsData = [
    { grade: "EN8 / C45", use: "Shafts, axles", hardness: "52–56" },
    { grade: "EN19 / 4140", use: "Gear shafts, couplings", hardness: "54–58" },
    { grade: "EN24 / 4340", use: "Spindles, PTO shafts", hardness: "56–60" },
    { grade: "20MnCr5", use: "Gears, hubs", hardness: "58–62" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogAgricultural');

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
                    <span className='truncate'>Tractor Component Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening for Tractor Components in Punjab</h1>
                <p className="mt-4 text-xl text-muted-foreground">Learn how induction hardening improves durability and performance of tractor shafts and implements.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Induction hardening of tractor components"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">Introduction: Strengthening the Backbone of Punjab’s Agriculture</h2>
            <p>Punjab is known as the agricultural powerhouse of India, and Ludhiana is its manufacturing hub for tractors, spares, and implements. From Mahindra, Swaraj, and Preet, to numerous local OEMs and ancillary suppliers, the need for durable, wear-resistant tractor parts has never been greater.</p>
            <p>Tractor components endure extreme mechanical stress, vibration, and continuous loading, especially in ploughing, tilling, and harvesting operations. That’s where induction hardening plays a critical role — transforming standard steel parts into high-performance, long-lasting components that can withstand the toughest farm conditions.</p>
            <p>At {SITE_NAME}, Ludhiana, we specialize in tractor component hardening job work, providing precision-controlled heat treatment services for manufacturers across Punjab and North India.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Induction Hardening for Tractor Components?</h2>
            <p>Induction hardening is a surface heat treatment process that strengthens only the outer layer of a component, keeping the inner core tough and ductile. The result: A part with a tough core to handle shock and a hard surface to resist wear.</p>

            <h2 className="text-3xl font-bold mt-12">Tractor Components Commonly Hardened by Induction Process</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Material</TableHead>
                            <TableHead>Process Used</TableHead>
                            <TableHead>Purpose</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {componentsData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.material}</TableCell>
                                <TableCell>{row.process}</TableCell>
                                <TableCell>{row.purpose}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Why Tractor Components Need Induction Hardening</h2>
            <h3 className="text-2xl font-semibold mt-6">1. Increased Wear Resistance</h3>
            <p>The hardened surface resists friction and abrasion during field operation.</p>
            <h3 className="text-2xl font-semibold mt-6">2. Improved Fatigue Life</h3>
            <p>The tough core absorbs dynamic stresses, preventing cracks and fractures.</p>
            <h3 className="text-2xl font-semibold mt-6">3. Reduced Maintenance Costs</h3>
            <p>Longer service life means fewer replacements and lower operational costs for farmers.</p>
            <h3 className="text-2xl font-semibold mt-6">4. High Dimensional Accuracy</h3>
            <p>Induction hardening produces minimal distortion compared to furnace or flame hardening.</p>
            <h3 className="text-2xl font-semibold mt-6">5. Localized Hardening</h3>
            <p>Only specific areas (gear teeth, shaft ends, journals) are heated — saving time and energy.</p>
            
            <h2 className="text-3xl font-bold mt-12">Case Study: Induction Hardening of Tractor Spindles in Ludhiana</h2>
            <p>A leading agricultural OEM supplier in Ludhiana faced premature wear and bending on EN24 Front Spindles after only 500 hours of operation. After switching to Thakur Induction, we optimized the process with a 25 kHz medium-frequency induction system and 10% polymer quenching. The results were a 45% improvement in fatigue life and a 70% reduction in distortion, with surface hardness maintained at 58 HRC and a case depth of 3.2 mm.</p>

            <h2 className="text-3xl font-bold mt-12">Materials Commonly Used for Tractor Hardening in Punjab</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material Grade</TableHead>
                            <TableHead>Typical Use</TableHead>
                            <TableHead>Hardness Range (HRC)</TableHead>
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

            <h2 className="text-3xl font-bold mt-12">Conclusion: Hardening That Powers Punjab’s Fields</h2>
            <p>From shafts and axles to spindles and PTO assemblies, induction hardening ensures that tractor components deliver maximum performance and durability under rugged conditions. At {SITE_NAME}, we combine material-specific heat treatment expertise, precision coil design, and automated polymer quenching systems to deliver reliable, repeatable, and distortion-free hardening solutions for Punjab’s growing tractor and agricultural machinery industry.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Contact Thakur Induction for Tractor Component Hardening Services</h3>
                <p className="mt-2 text-muted-foreground">For tractor spindle, shaft, and implement hardening job work, contact {SITE_NAME}, Ludhiana. We offer high-quality induction heat treatment services for OEMs and suppliers across Punjab and North India.</p>
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
