
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
  title: 'Importance of Temperature Control in Induction Hardening',
  description: 'Discover how temperature control ensures hardness accuracy and prevents metallurgical defects.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Importance of Temperature Control in Induction Hardening",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Quality Control",
  "keywords": ["temperature control in heat treatment", "induction heating monitoring", "quality consistency"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/importance-of-temperature-control-in-induction-hardening",
  "inLanguage": "en"
};

const tempStagesData = [
    { stage: "Pre-heating", temp: "200–400", effect: "Reduces thermal shock" },
    { stage: "Austenitizing", temp: "850–950", effect: "Converts ferrite/pearlite to austenite" },
    { stage: "Quenching", temp: "Rapid cooling", effect: "Forms martensite (hard surface)" },
    { stage: "Tempering", temp: "150–250", effect: "Relieves stress and stabilizes hardness" },
];

const defectsData = [
    { type: "Underheating (<850°C)", issue: "Insufficient austenitization", result: "Low hardness, shallow case" },
    { type: "Overheating (>950°C)", issue: "Excessive grain growth", result: "Brittle surface, cracking" },
    { type: "Uneven heating", issue: "Non-uniform heat zones", result: "Distortion, hardness variation" },
    { type: "Rapid temperature rise", issue: "High thermal stress", result: "Surface cracking" },
    { type: "Incorrect quenching timing", issue: "Delayed cooling", result: "Soft surface or mixed microstructure" },
];

const equipmentData = [
    { equipment: "Infrared Pyrometers", purpose: "Non-contact temperature measurement during heating" },
    { equipment: "PLC Control Panels", purpose: "Automated heat control and process timing" },
    { equipment: "Digital Recorders", purpose: "Real-time temperature logging" },
    { equipment: "Thermal Cameras", purpose: "Process visualization and hotspot detection" },
    { equipment: "Thermocouples", purpose: "Secondary verification of temperature accuracy" },
];


export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogTemperatureControl');

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
                    <span className='truncate'>Temperature Control Importance</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Importance of Temperature Control in Induction Hardening</h1>
                <p className="mt-4 text-xl text-muted-foreground">Discover how temperature control ensures hardness accuracy and prevents metallurgical defects.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Technician monitoring temperature control panel for induction hardening"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">Introduction: The Role of Temperature in Precision Hardening</h2>
            <p>In induction hardening, achieving the perfect balance between surface hardness and core toughness depends on one critical factor — temperature control. A small variation in heating temperature, even by ±20°C, can drastically affect the case depth, hardness level, and metallurgical structure of the component.</p>

            <h2 className="text-3xl font-bold mt-12">Why Temperature Control Is Crucial in Induction Hardening</h2>
            <p>The process of induction hardening involves heating the surface of a metal component to its austenitizing temperature (usually between 850°C to 950°C) before rapidly quenching it to form martensite.</p>
            <p>If this temperature is not properly controlled, it can lead to underheating (incomplete hardening), overheating (grain growth, cracking), or uneven heating (warping).</p>

            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Stage</TableHead>
                            <TableHead>Temperature Range (°C)</TableHead>
                            <TableHead>Effect</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tempStagesData.map((row) => (
                            <TableRow key={row.stage}>
                                <TableCell className="font-medium">{row.stage}</TableCell>
                                <TableCell>{row.temp}</TableCell>
                                <TableCell>{row.effect}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Effects of Improper Temperature Control</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Error Type</TableHead>
                            <TableHead>Temperature Range Issue</TableHead>
                            <TableHead>Resulting Defect</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {defectsData.map((row) => (
                            <TableRow key={row.type}>
                                <TableCell className="font-medium">{row.type}</TableCell>
                                <TableCell>{row.issue}</TableCell>
                                <TableCell>{row.result}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">How {SITE_NAME} Controls Temperature Accurately</h2>
            <p>At {SITE_NAME}, we combine technology, experience, and metallurgy to achieve precision control throughout the heating and quenching stages.</p>
            <ul className="list-disc list-inside space-y-4 text-muted-foreground">
                <li><span className='font-bold text-foreground'>Infrared Temperature Sensors:</span> Real-time infrared pyrometers monitor surface temperature during heating with ±5°C accuracy.</li>
                <li><span className='font-bold text-foreground'>PLC-Based Automation:</span> Programmable logic controllers (PLCs) continuously regulate power, frequency, and heating duration based on material and geometry.</li>
                <li><span className='font-bold text-foreground'>Closed-Loop Control Systems:</span> Feedback loops automatically adjust coil current and frequency to maintain target temperature consistently.</li>
                <li><span className='font-bold text-foreground'>Digital Temperature Profiling:</span> Every component’s heating profile is digitally recorded, ensuring traceability and repeatability — essential for OEMs.</li>
                <li><span className='font-bold text-foreground'>Predefined Recipes for Each Material:</span> Each material (EN8, EN19, EN24, 4140, etc.) has a stored set of temperature parameters in our system for optimized hardening results.</li>
            </ul>

             <h2 className="text-3xl font-bold mt-12">Temperature Monitoring Tools Used at {SITE_NAME}</h2>
            <div className="my-8 overflow-x-auto">
                 <Table>
                     <TableHeader>
                        <TableRow>
                            <TableHead>Equipment</TableHead>
                            <TableHead>Purpose</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {equipmentData.map((row) => (
                            <TableRow key={row.equipment}>
                                <TableCell className="font-medium">{row.equipment}</TableCell>
                                <TableCell>{row.purpose}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Precision Temperature = Perfect Hardness</h2>
            <p>Temperature control in heat treatment is the cornerstone of reliable induction hardening. By maintaining consistent and accurate temperatures, {SITE_NAME} ensures uniform hardness, controlled case depth, and dimensional accuracy for every part.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Precision Temperature-Controlled Heat Treatment?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, Ludhiana for temperature-monitored induction hardening job work.</p>
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
