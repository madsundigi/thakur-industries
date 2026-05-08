
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Zap, Shield, Thermometer } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Choosing the Right Frequency for Induction Hardening Applications',
  description: 'Learn how frequency impacts heat penetration, case depth, and hardness during the induction hardening process.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Choosing the Right Frequency for Induction Hardening Applications",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Processes",
  "keywords": ["frequency in induction hardening", "high frequency hardening", "medium frequency induction heat treatment"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/importance-of-frequency-in-induction-hardening",
  "inLanguage": "en"
};

const frequencyTableData = [
    { frequency: "High Frequency (HF)", range: "100–500 kHz", depth: "0.5 – 2 mm", application: "Gears, pins, thin components" },
    { frequency: "Medium Frequency (MF)", range: "10–100 kHz", depth: "1.5 – 6 mm", application: "Shafts, spindles, camshafts" },
    { frequency: "Low Frequency (LF)", range: "1–10 kHz", depth: "5 – 20 mm", application: "Large rollers, axles, crankshafts" }
];

const frequencyComparisonData = [
    { parameter: "Case Depth", low: "Deep (up to 20 mm)", medium: "Medium (1.5–6 mm)", high: "Shallow (0.5–2 mm)" },
    { parameter: "Heating Speed", low: "Slow", medium: "Moderate", high: "Very Fast" },
    { parameter: "Distortion Risk", low: "Low (slow heating)", medium: "Controlled", high: "Very Low" },
    { parameter: "Precision", low: "Low", medium: "Moderate", high: "High" },
    { parameter: "Typical Application", low: "Axles, rollers", medium: "Shafts, spindles", high: "Gears, pins, tools" },
];

const practicalExamplesData = [
    { component: "Gear Teeth", steel: "EN8", frequency: "High (300 kHz)", depth: "1 mm", result: "Hard surface, no distortion" },
    { component: "Drive Shaft", steel: "EN19 (4140)", frequency: "Medium (30 kHz)", depth: "3 mm", result: "Deep, fatigue-resistant case" },
    { component: "Axle Roller", steel: "EN24 (4340)", frequency: "Low (5 kHz)", depth: "8 mm", result: "Uniform deep hardness" },
    { component: "Camshaft Lobe", steel: "EN19", frequency: "Medium (20 kHz)", depth: "2 mm", result: "High wear resistance" },
];


export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogFrequency');

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
                    <span className='truncate'>Importance of Frequency</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Choosing the Right Frequency for Induction Hardening Applications</h1>
                <p className="mt-4 text-xl text-muted-foreground">Learn how frequency impacts heat penetration, case depth, and hardness during the induction hardening process.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Diagram showing different frequencies for induction hardening"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <p>In induction hardening, one parameter makes all the difference between a perfect case depth and a failed part — frequency. It directly controls how deep and fast heat penetrates into the metal surface, determining the hardness, strength, and fatigue life of the component.</p>
            <p>At {SITE_NAME}, we customize frequency selection for every component and material to ensure optimal hardening depth, minimal distortion, and superior surface finish.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Frequency in Induction Hardening?</h2>
            <p>Frequency refers to the number of times the alternating current (AC) changes direction per second in the induction coil, measured in Hertz (Hz). Higher frequency leads to shallow heat penetration, while lower frequency results in deeper heat penetration due to the "skin effect."</p>

            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Frequency</TableHead>
                            <TableHead>Typical Range</TableHead>
                            <TableHead>Heating Depth</TableHead>
                            <TableHead>Application</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {frequencyTableData.map((row) => (
                            <TableRow key={row.frequency}>
                                <TableCell className="font-medium">{row.frequency}</TableCell>
                                <TableCell>{row.range}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                                <TableCell>{row.application}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">High Frequency Induction Hardening</h2>
            <p>High frequency (100–500 kHz) is used for shallow case depths (0.5–2 mm). It's ideal for small or thin components like gears and pins, offering rapid heating and minimal distortion.</p>

            <h2 className="text-3xl font-bold mt-12">Medium Frequency Induction Hardening</h2>
            <p>Medium frequency (10–100 kHz) is the most common method, providing case depths between 1.5 mm and 6 mm. It's perfect for automotive shafts, crankshafts, and agricultural parts made from EN8, EN19, and EN24 steels.</p>

            <h2 className="text-3xl font-bold mt-12">Low Frequency Induction Hardening</h2>
            <p>Low frequency (1–10 kHz) is for large, heavy-duty components requiring deep hardening up to 20 mm, such as large axles and rollers. The heating is slower but penetrates deeper.</p>

            <h2 className="text-3xl font-bold mt-12">How Frequency Affects Case Depth and Hardness</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Low Frequency</TableHead>
                            <TableHead>Medium Frequency</TableHead>
                            <TableHead>High Frequency</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {frequencyComparisonData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.low}</TableCell>
                                <TableCell>{row.medium}</TableCell>
                                <TableCell>{row.high}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Practical Examples from Industrial Applications</h2>
             <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Steel Grade</TableHead>
                            <TableHead>Frequency Used</TableHead>
                            <TableHead>Case Depth</TableHead>
                            <TableHead>Result</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {practicalExamplesData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.steel}</TableCell>
                                <TableCell>{row.frequency}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                                <TableCell>{row.result}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Conclusion: The Right Frequency Defines the Right Hardness</h2>
            <p>Choosing the right frequency is the key to achieving the perfect balance between surface hardness and core toughness. At {SITE_NAME}, we use advanced frequency control systems to deliver industry-leading heat treatment job work for Ludhiana and all of Punjab.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Frequency-Controlled Induction Hardening?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for precision induction hardening job work using the right frequency for your material and component type.</p>
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
