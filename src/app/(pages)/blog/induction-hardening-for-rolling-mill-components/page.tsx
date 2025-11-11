
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
  title: 'Induction Hardening for Rolling Mill Components',
  description: 'Enhance durability and surface wear resistance of rolling mill rolls using precision induction hardening.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening for Rolling Mill Components",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Industrial Heat Treatment",
  "keywords": ["rolling mill component hardening", "roller surface hardening Ludhiana", "industrial roller treatment Punjab"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/induction-hardening-for-rolling-mill-components",
  "inLanguage": "en"
};

const componentsData = [
    { component: "Work Rolls / Mill Rolls", material: "EN8, EN9, EN19", purpose: "Improve surface wear resistance" },
    { component: "Backup Rolls", material: "EN24, 4340", purpose: "Enhance fatigue life under pressure" },
    { component: "Guide Rollers", material: "4140, Tool Steel", purpose: "Maintain precision under friction" },
    { component: "Mill Shafts / Spindles", material: "EN24, 4340", purpose: "Strengthen against torsional stress" },
    { component: "Couplings & Mandrels", material: "EN19", purpose: "Prevent failure under cyclic load" },
];

const comparisonData = [
    { parameter: 'Heating Source', induction: 'Electromagnetic Field', flame: 'Gas Flame' },
    { parameter: 'Heating Speed', induction: 'Very Fast (Seconds)', flame: 'Slow (Minutes)' },
    { parameter: 'Surface Uniformity', induction: 'Excellent', flame: 'Variable' },
    { parameter: 'Energy Efficiency', induction: 'High', flame: 'Low' },
    { parameter: 'Distortion Risk', induction: 'Minimal', flame: 'High' },
    { parameter: 'Environmental Impact', induction: 'Clean', flame: 'Polluting' },
];

const resultsData = [
    { component: "Mill Roll", hardness: "58–62", depth: "2.5–5.0", quench: "Polymer" },
    { component: "Backup Roll", hardness: "55–60", depth: "3.0–6.0", quench: "Polymer" },
    { component: "Shaft", hardness: "52–58", depth: "2.0–4.0", quench: "Water / Polymer" },
    { component: "Mandrel", hardness: "54–58", depth: "1.5–3.0", quench: "Water" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogRollingMill');

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
                    <span className='truncate'>Rolling Mill Component Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening for Rolling Mill Components</h1>
                <p className="mt-4 text-xl text-muted-foreground">Enhance durability and surface wear resistance of rolling mill rolls using precision induction hardening.</p>
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
            
            <h2 className="text-3xl font-bold mt-12">Introduction: The Importance of Hardening in Rolling Mill Components</h2>
            <p>In the steel and metal forming industry, rolling mills play a critical role in shaping and processing materials through continuous mechanical pressure. However, their rollers and shafts are subjected to extreme surface wear, friction, and thermal stress — leading to deformation or premature failure.</p>
            <p>To overcome these challenges, induction hardening has become the most effective surface treatment technique. At {SITE_NAME}, Ludhiana, we provide specialized induction hardening job work for rolling mill rolls, shafts, and guide components, ensuring improved wear resistance, fatigue strength, and longevity.</p>
            <p className='font-semibold'>💡 Induction hardening is the backbone of reliable, long-lasting rolling mill performance.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Is Induction Hardening for Rolling Mill Components?</h2>
            <p>Induction hardening is a localized surface heat treatment process where a high-frequency electromagnetic field rapidly heats the roller surface. The heated area is immediately quenched using water or polymer, converting the surface structure into hard martensite, while retaining a ductile, shock-resistant core. This ensures the roller can withstand constant rolling pressure and surface abrasion without cracking or deforming.</p>

            <h2 className="text-3xl font-bold mt-12">Why Rolling Mill Components Need Hardening</h2>
            <p>Rolling mill rollers and shafts operate under high compressive loads, repetitive contact stress, and continuous temperature variations. Without proper surface hardening, these parts may develop pitting, microcracks, material wear, or out-of-roundness. Induction hardening provides a solution by increasing surface hardness to 55–62 HRC, extending component life up to 3–5 times longer than untreated rollers.</p>
            <p className='font-semibold'>⚙️ Hard on the surface, tough inside — the ideal combination for rolling mills.</p>

            <h2 className="text-3xl font-bold mt-12">Rolling Mill Components Suitable for Induction Hardening</h2>
            <p>At {SITE_NAME}, we specialize in induction hardening of the following components used in steel and metal rolling applications:</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Material Type</TableHead>
                            <TableHead>Purpose of Hardening</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {componentsData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.material}</TableCell>
                                <TableCell>{row.purpose}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p className='font-semibold'>🧠 Each part is treated using precise frequency and quenching parameters to match its load-bearing requirement.</p>
            
            <h2 className="text-3xl font-bold mt-12">The Induction Hardening Process for Rolling Mill Components</h2>
            <p>Here’s how {SITE_NAME} ensures precision at every step:</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Component Preparation:</strong> Surface cleaning and alignment for uniform heating.</li>
                <li><strong>Induction Heating:</strong> Using medium or high-frequency induction, the surface is heated to 850–950°C.</li>
                <li><strong>Quenching:</strong> Controlled polymer or water quenching to form a hard martensitic layer.</li>
                <li><strong>Tempering (Optional):</strong> Post-hardening tempering to relieve internal stresses.</li>
                <li><strong>Hardness Testing:</strong> Surface hardness and case depth are verified using Rockwell and micro-hardness testing.</li>
            </ol>
            <p className='font-semibold'>🔍 Every roller undergoes complete digital process monitoring to ensure consistent results.</p>
            
            <h2 className="text-3xl font-bold mt-12">Benefits of Induction Hardening for Rolling Mill Components</h2>
            <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Extended Service Life:</span> Hardened rollers last significantly longer under continuous industrial use, reducing replacement frequency.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Improved Surface Hardness:</span> Achieves hardness up to 62 HRC, protecting the component from wear, indentation, and pitting.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Enhanced Fatigue Resistance:</span> Maintains structural integrity even under high load and thermal cycling conditions.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Reduced Downtime:</span> Less wear means fewer maintenance shutdowns — maximizing plant productivity.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Localized Treatment:</span> Only specific surfaces are heated, minimizing distortion and maintaining balance.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Environmentally Clean Process:</span> No open flames, gases, or pollution — making it a cleaner and safer alternative to conventional flame hardening.</div></li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Induction Hardening vs Flame Hardening for Rolling Mill Components</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Induction Hardening</TableHead>
                            <TableHead>Flame Hardening</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.induction}</TableCell>
                                <TableCell>{row.flame}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p className="font-semibold">🔩 For precision components like rollers and shafts, induction hardening is far superior in performance and efficiency.</p>

            <h2 className="text-3xl font-bold mt-12">Typical Heat Treatment Results</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Surface Hardness (HRC)</TableHead>
                            <TableHead>Case Depth (mm)</TableHead>
                            <TableHead>Quenching Medium</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {resultsData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                                <TableCell>{row.quench}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Why Choose {SITE_NAME} for Industrial Roller Hardening</h2>
            <p>{SITE_NAME}, based in Ludhiana, has built a reputation for delivering reliable and consistent heat treatment job work for heavy industrial components across Punjab and Haryana.</p>
            <p>Our Key Strengths:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Advanced induction machines for small to large-diameter rolls</li>
                <li>Custom coil design for uniform surface heating</li>
                <li>Polymer and water-based quenching systems</li>
                <li>Digital case depth and hardness verification</li>
                <li>Expertise in EN8, EN9, EN19, EN24, and 4340 materials</li>
            </ul>
            <p className="font-semibold">🏆 We combine technology and metallurgy to deliver durability that lasts.</p>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Induction Hardening — The Future of Rolling Mill Reliability</h2>
            <p>Rolling mill components demand extreme durability and precision. Induction hardening not only meets but exceeds these demands by improving wear resistance, reducing downtime, and ensuring consistency. At {SITE_NAME}, Ludhiana, we deliver industrial-grade hardening services that help manufacturers across Punjab and North India enhance the performance and longevity of their equipment.</p>
            <p className="font-semibold">⚙️ Reliable rollers, efficient mills — powered by precision heat treatment.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Professional Rolling Mill Component Hardening?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} today for customized induction hardening job work for rollers, shafts, and industrial components.</p>
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
