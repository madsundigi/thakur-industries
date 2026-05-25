
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Droplet, Thermometer, Zap, CheckCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Role of Quenching Flow Rate in Heat Treatment Quality',
  description: 'Understand how precise control of quenching flow rate influences surface hardness and distortion control.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Role of Quenching Flow Rate in Heat Treatment Quality",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Quality Control",
  "keywords": ["quenching flow rate control", "polymer cooling Ludhiana", "quenching quality Punjab"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/role-of-quenching-flow-rate-in-heat-treatment-quality",
  "inLanguage": "en"
};

const flowRateData = [
    { component: "Shafts / Axles", material: "EN8 / EN19", medium: "Water", rate: "20–30" },
    { component: "Gears / Pinions", material: "EN24 / 20MnCr5", medium: "Polymer (10%)", rate: "15–25" },
    { component: "Crankshafts", material: "EN19 / EN24", medium: "Polymer (5–10%)", rate: "25–40" },
    { component: "Spindles / Rollers", material: "4140 / 4340", medium: "Water", rate: "30–45" },
];

const comparisonData = [
    { parameter: "Cooling Rate", water: "Very fast", polymer: "Adjustable" },
    { parameter: "Flow Rate", water: "High", polymer: "Moderate" },
    { parameter: "Distortion Risk", water: "Higher", polymer: "Lower" },
    { parameter: "Environmental Impact", water: "Excellent", polymer: "Excellent" },
];

const issuesData = [
    { problem: "Soft Spots", cause: "Insufficient flow", effect: "Uneven cooling, reduced hardness" },
    { problem: "Cracking", cause: "Excessive flow rate", effect: "Thermal shock" },
    { problem: "Distortion", cause: "Uneven flow distribution", effect: "Warped surfaces" },
    { problem: "Case Depth Variability", cause: "Inconsistent flow", effect: "Inaccurate hardening" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogQuenchingFlowRate');

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
                    <span className='truncate'>Role of Quenching Flow Rate</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Role of Quenching Flow Rate in Heat Treatment Quality</h1>
                <p className="mt-4 text-xl text-muted-foreground">Understand how precise control of quenching flow rate influences surface hardness and distortion control.</p>
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

            <h2 className="text-3xl font-bold mt-12">Introduction: Cooling Speed Defines Hardness Quality</h2>
            <p>In induction heat treatment, quenching is as critical as the heating itself. The flow rate of the quenching medium—whether water or polymer—determines how quickly heat is extracted from the surface, directly influencing hardness, microstructure, and dimensional accuracy.</p>
            <p>At {SITE_NAME}, Ludhiana, we understand that precision-controlled quenching flow is essential to achieve uniform case hardness, prevent cracks or distortion, and maintain component integrity for industries across Punjab and North India.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Quenching Flow Rate Control?</h2>
            <p>The quenching flow rate refers to the volume and speed of quenching fluid (water or polymer) delivered per unit of time during the cooling stage of heat treatment. In induction hardening, this flow rate determines how efficiently the heated metal surface is cooled, influencing cooling speed, final surface hardness, depth of hardened layer (case depth), and distortion/crack prevention.</p>

            <h2 className="text-3xl font-bold mt-12">How Quenching Flow Rate Affects Heat Treatment Quality</h2>
            <h3 className="text-2xl font-semibold mt-6">1. Surface Hardness</h3>
            <p>If the flow rate is too low, cooling happens too slowly, resulting in under-hardening or soft spots. Too high a flow rate can cause thermal shock, leading to cracks. The right balance ensures complete martensitic transformation and uniform surface hardness.</p>
            <h3 className="text-2xl font-semibold mt-6">2. Distortion Control</h3>
            <p>Uneven flow distribution or excessive speed can cause warping in long or thin components. Optimizing the flow rate maintains dimensional stability.</p>
            <h3 className="text-2xl font-semibold mt-6">3. Case Depth Consistency</h3>
            <p>Flow rate impacts how heat is extracted. Faster flow means shallower case depth; slower flow allows deeper transformation. Consistency is key.</p>
            <h3 className="text-2xl font-semibold mt-6">4. Surface Integrity and Crack Prevention</h3>
            <p>A sudden temperature drop from high-speed flow can induce microcracks. By monitoring flow pressure and direction, surface stress can be minimized.</p>

            <h2 className="text-3xl font-bold mt-12">Typical Flow Rates for Induction Hardening Systems</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component Type</TableHead>
                            <TableHead>Material</TableHead>
                            <TableHead>Quenching Medium</TableHead>
                            <TableHead>Optimal Flow Rate (L/min)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {flowRateData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell>{row.component}</TableCell>
                                <TableCell>{row.material}</TableCell>
                                <TableCell>{row.medium}</TableCell>
                                <TableCell>{row.rate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Polymer vs Water Quenching: Flow Rate Sensitivity</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Water Quenching</TableHead>
                            <TableHead>Polymer Quenching</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell>{row.parameter}</TableCell>
                                <TableCell>{row.water}</TableCell>
                                <TableCell>{row.polymer}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Common Issues When Flow Rate Is Not Controlled</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Problem</TableHead>
                            <TableHead>Cause</TableHead>
                            <TableHead>Effect</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {issuesData.map((row) => (
                            <TableRow key={row.problem}>
                                <TableCell>{row.problem}</TableCell>
                                <TableCell>{row.cause}</TableCell>
                                <TableCell>{row.effect}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Precision Cooling Ensures Precision Hardness</h2>
            <p>The flow rate of quenching media determines how heat-treated components perform in real-world applications. With the right control systems, every part can be perfectly hardened. At {SITE_NAME}, we take pride in delivering precisely controlled, PLC-monitored quenching systems that ensure flawless surface hardening for every material and component type.</p>

            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Heat Treatment with Controlled Quenching?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for the most reliable, digitally monitored heat treatment solutions in Ludhiana, Punjab.</p>
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
