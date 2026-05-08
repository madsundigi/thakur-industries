
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
  title: 'Understanding Power Density in Induction Hardening',
  description: 'Learn how adjusting power density controls heating efficiency and surface hardness depth.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Understanding Power Density in Induction Hardening",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Processes",
  "keywords": ["power density in induction heating", "heating rate control", "energy transfer Punjab"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/power-density-in-induction-hardening",
  "inLanguage": "en"
};

const heatingRateData = [
    { density: "Low (5–10 W/cm²)", rate: "Slow", effect: "Deeper heat penetration, but longer process time" },
    { density: "Medium (10–30 W/cm²)", rate: "Moderate", effect: "Balanced heating and case depth" },
    { density: "High (30–80 W/cm²)", rate: "Fast", effect: "Shallow case depth, suitable for small or precision parts" }
];

const powerDensityExamples = [
    { component: "Gear Teeth", material: "EN8 / EN24", density: "25–40", duration: "2–3", depth: "1.5–2.5" },
    { component: "Shaft", material: "4140 / EN19", density: "15–25", duration: "4–6", depth: "2.5–4.0" },
    { component: "Axle", material: "4340", density: "10–20", duration: "6–8", depth: "3.5–5.0" },
    { component: "Bearing Race", material: "EN31", density: "30–45", duration: "1–2", depth: "1.2–2.0" }
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogPowerDensity');

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
                    <span className='truncate'>Understanding Power Density</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Understanding Power Density in Induction Hardening</h1>
                <p className="mt-4 text-xl text-muted-foreground">In the world of induction heat treatment, one of the most critical — yet often overlooked — parameters is power density.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Diagram showing power density in induction heating"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: Why Power Density Matters</h2>
            <p>Power density defines how much energy per unit area or volume is delivered to the component during heating. It determines how fast, how deep, and how uniformly a metal surface heats up before quenching. For industries in Ludhiana and across Punjab, where components like shafts, gears, and spindles undergo precise hardening, understanding and controlling power density is key to achieving consistent metallurgical results.</p>
            <p>At {SITE_NAME}, we use digitally controlled induction systems to optimize power density for each component — ensuring uniform hardness, energy efficiency, and crack-free results.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Power Density in Induction Heating?</h2>
            <p>Power Density (W/cm² or W/cm³) is the rate at which electrical power is delivered to the surface of the component being treated. It depends on multiple factors including: the frequency of the current, the power output of the induction system, the size and geometry of the part, the coil design, and the material's properties.</p>

            <h2 className="text-3xl font-bold mt-12">The Relationship Between Power Density and Heating Rate</h2>
            <p>In induction hardening, heating rate — the speed at which a part reaches its target temperature (usually 850–900°C) — is directly influenced by power density.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Power Density</TableHead>
                            <TableHead>Heating Rate</TableHead>
                            <TableHead>Effect on Case Depth & Hardness</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {heatingRateData.map((row) => (
                            <TableRow key={row.density}>
                                <TableCell className="font-medium">{row.density}</TableCell>
                                <TableCell>{row.rate}</TableCell>
                                <TableCell>{row.effect}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p className="font-semibold text-foreground">Too low power density results in underheating and poor hardness; too high can cause overheating and surface cracks.</p>
            
            <h2 className="text-3xl font-bold mt-12">How Power Density Affects Quality</h2>
            <ul className="list-disc list-inside space-y-4 text-muted-foreground">
                <li><strong className='text-foreground'>Case Depth Control:</strong> Higher power densities lead to faster heating and shallower case depths, whereas lower power densities allow deeper heat penetration.</li>
                <li><strong className='text-foreground'>Hardness Uniformity:</strong> Uniform energy transfer ensures consistent hardness across the treated surface, avoiding soft spots or overheated areas.</li>
                <li><strong className='text-foreground'>Energy Efficiency:</strong> Optimized power density reduces energy loss, improving heating efficiency by up to 30%.</li>
                <li><strong className='text-foreground'>Surface Integrity:</strong> Accurate control prevents issues like scaling, overheating, or cracking during quenching.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Power Density Settings for Common Industrial Parts</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component Type</TableHead>
                            <TableHead>Material</TableHead>
                            <TableHead>Power Density (W/cm²)</TableHead>
                            <TableHead>Heating Duration (sec)</TableHead>
                            <TableHead>Case Depth (mm)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {powerDensityExamples.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.material}</TableCell>
                                <TableCell>{row.density}</TableCell>
                                <TableCell>{row.duration}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Precision Power = Precision Hardening</h2>
            <p>The success of any induction hardening process depends on understanding how power density affects heat flow, case depth, and material transformation. By controlling power density with precision, you achieve uniform hardness, avoid defects, and improve energy efficiency. At {SITE_NAME}, we use advanced process control to deliver the most consistent and energy-efficient hardening results for all alloy steel components in Ludhiana and Punjab.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Precision-Controlled Heat Treatment?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, Punjab’s leading name in energy-efficient, precision hardening technology.</p>
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
