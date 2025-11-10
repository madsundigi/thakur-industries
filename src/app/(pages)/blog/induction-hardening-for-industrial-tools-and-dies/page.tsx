
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
  title: 'Induction Hardening for Industrial Tools & Dies',
  description: 'Enhance the lifespan and performance of dies and industrial tools through precision induction hardening.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening for Industrial Tools & Dies",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Industrial Heat Treatment",
  "keywords": ["tool and die hardening", "industrial tool heat treatment Punjab", "die hardening Ludhiana"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/induction-hardening-for-industrial-tools-and-dies",
  "inLanguage": "en"
};

const toolsData = [
    { tool: "Punch Dies", material: "D2 / H13", hardness: "56–60 HRC", application: "Sheet metal forming, cutting" },
    { tool: "Forging Dies", material: "H13 / 4140", hardness: "50–55 HRC", application: "Forging of automotive parts" },
    { tool: "Mould Inserts", material: "EN24 / H13", hardness: "55–58 HRC", application: "Plastic moulds, casting dies" },
    { tool: "Cutting Tools", material: "M2 / D2", hardness: "58–62 HRC", application: "Shearing, punching" },
    { tool: "Forming Rolls", material: "EN19 / EN31", hardness: "55–59 HRC", application: "Tube forming, rolling mills" },
];

const technicalParams = [
    { parameter: "Heating Frequency", value: "10–100 kHz (Material-specific)" },
    { parameter: "Surface Temperature", value: "850–950°C" },
    { parameter: "Quenching Medium", value: "8–12% Polymer" },
    { parameter: "Case Depth", value: "1.5–5.0 mm" },
    { parameter: "Surface Hardness", value: "55–62 HRC" },
    { parameter: "Cycle Time", value: "10–60 seconds" },
    { parameter: "Distortion Control", value: "<0.05 mm" },
];

const applicationsData = [
    { industry: "Forging & Casting Units", components: "Dies, punches, and moulds" },
    { industry: "Agricultural Equipment Manufacturers", components: "Cutting blades, spindles" },
    { industry: "Automotive Component Producers", components: "Tooling fixtures and stamping dies" },
    { industry: "Machine Tool Builders", components: "Rollers, slides, and mandrels" },
    { industry: "Metal Fabrication Plants", components: "Press tools and cutters" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogToolAndDie');

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
                    <span className='truncate'>Tool & Die Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening for Industrial Tools & Dies</h1>
                <p className="mt-4 text-xl text-muted-foreground">Enhance the lifespan and performance of dies and industrial tools through precision induction hardening.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Induction hardening of industrial tools and dies"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: Why Tools and Dies Need Hardening</h2>
            <p>In the world of manufacturing and forging, tools and dies are the silent heroes — continuously cutting, forming, shaping, or pressing metal parts under extreme conditions. These components face intense wear, impact, and thermal stress every day. Without proper heat treatment, even the best tool steels like D2, H13, or M2 can lose hardness, chip, or deform — leading to downtime and costly replacements.</p>
            <p>That’s where induction hardening makes the difference. It strengthens the working surfaces of dies, punches, and forming tools — without affecting their internal toughness.</p>
            <p>At {SITE_NAME}, Ludhiana, we specialize in industrial tool heat treatment that delivers precision hardness, minimal distortion, and maximum tool life — trusted by industries across Punjab, Haryana, and North India.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Induction Hardening for Tools and Dies?</h2>
            <p>Induction hardening is a process in which the surface of a metallic tool or die is heated rapidly by electromagnetic induction and then quenched to achieve a hard, wear-resistant martensitic layer. The core remains ductile, ensuring the tool can absorb stress and impact without cracking.</p>
            <h3 className="text-2xl font-semibold mt-6">The Process in Brief:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Surface Heating:</strong> Using an induction coil tuned for the die’s geometry.</li>
                <li><strong>Rapid Heating:</strong> The surface reaches ~900°C within seconds.</li>
                <li><strong>Controlled Quenching:</strong> Polymer or water cooling to form a hardened case.</li>
                <li><strong>Tempering (if required):</strong> For stress relief and toughness balancing.</li>
            </ul>
            <p className="font-semibold text-foreground">Only the working zones are hardened — preserving the die’s flexibility and inner strength.</p>

            <h2 className="text-3xl font-bold mt-12">Common Tools and Dies Treated Using Induction Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Tool/Die Type</TableHead>
                            <TableHead>Material Used</TableHead>
                            <TableHead>Typical Hardness (HRC)</TableHead>
                            <TableHead>Application</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {toolsData.map((row) => (
                            <TableRow key={row.tool}>
                                <TableCell className="font-medium">{row.tool}</TableCell>
                                <TableCell>{row.material}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                                <TableCell>{row.application}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Why Choose Induction Hardening for Tool & Die Applications</h2>
            <h3 className="text-2xl font-semibold mt-6">1. Superior Wear Resistance</h3>
            <p className="text-muted-foreground">The hardened surface resists abrasion, metal-to-metal contact, and erosion, extending the life of tools in continuous operations.</p>
            <h3 className="text-2xl font-semibold mt-6">2. High Impact Strength</h3>
            <p className="text-muted-foreground">Since only the outer layer is hardened, the core retains its ductility — preventing cracking under heavy press loads.</p>
            <h3 className="text-2xl font-semibold mt-6">3. Minimal Distortion</h3>
            <p className="text-muted-foreground">Local heating avoids warping or dimensional deviation, maintaining precise tool geometry for high-tolerance applications.</p>
            <h3 className="text-2xl font-semibold mt-6">4. Customizable Hardness Profiles</h3>
            <p className="text-muted-foreground">By adjusting power, frequency, and coil design, different zones of the die can be hardened to varying depths (2–6 mm).</p>
            <h3 className="text-2xl font-semibold mt-6">5. Cost-Effective and Reusable</h3>
            <p className="text-muted-foreground">Old dies can often be re-hardened by induction, restoring their surface performance without full remanufacturing.</p>
            <p className="font-semibold text-foreground">Induction hardening increases tool lifespan by up to 3× compared to conventional furnace hardening.</p>

            <h2 className="text-3xl font-bold mt-12">Case Study: Induction Hardening of H13 Forging Dies</h2>
            <p>A forging unit in Ludhiana faced premature surface wear on H13 upper and lower forging dies after just 3,000 cycles. We implemented a controlled induction hardening process:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground my-4">
                <li><strong>Frequency:</strong> 15 kHz (medium frequency)</li>
                <li><strong>Heating temperature:</strong> 890°C</li>
                <li><strong>Quenching:</strong> 12% polymer solution</li>
                <li><strong>Case depth:</strong> 3.5 mm</li>
                <li><strong>Surface hardness achieved:</strong> 56–58 HRC</li>
            </ul>
            <p className="font-semibold text-foreground">Result: Die life increased from 3,000 to 9,500 cycles, wear reduced by 70%, and there was no dimensional distortion. Controlled induction hardening tripled productivity while maintaining die precision.</p>

            <h2 className="text-3xl font-bold mt-12">Technical Parameters for Tool and Die Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Range / Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {technicalParams.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Extend Tool Life with Precision Hardening</h2>
            <p>Every tool or die’s value lies in its strength, precision, and durability. With induction hardening, you can achieve longer operational life, higher hardness and wear resistance, better consistency and performance, and lower tooling replacement costs. At {SITE_NAME}, Ludhiana, we combine advanced induction systems with decades of metallurgical expertise to deliver flawless tool and die hardening for industries across Punjab and North India.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Tool & Die Hardening Services?</h3>
                <p className="mt-2 text-muted-foreground">Get in touch with {SITE_NAME}, Punjab’s trusted name in industrial tool hardening and surface engineering.</p>
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
