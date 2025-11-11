
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
  title: 'Factors Affecting Case Depth in Induction Hardening',
  description: 'Understand the variables that influence case depth, including power, frequency, and quenching conditions.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Factors Affecting Case Depth in Induction Hardening",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Quality Control",
  "keywords": ["factors affecting case depth", "case depth control Punjab", "induction hardening parameters Ludhiana"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/case-depth-control-in-induction-hardening",
  "inLanguage": "en"
};

const frequencyData = [
    { frequency: "Low Frequency (1–10 kHz)", depth: "3.0 – 6.0", application: "Axles, rollers" },
    { frequency: "Medium Frequency (10–100 kHz)", depth: "1.5 – 3.0", application: "Shafts, gears" },
    { frequency: "High Frequency (100–500 kHz)", depth: "0.5 – 1.5", application: "Small components, teeth" }
];

const powerData = [
    { parameter: "Low Power", heating: "Slow", depth: "Easier", risk: "Low" },
    { parameter: "High Power", heating: "Fast", depth: "Complex", risk: "High" },
];

const materialsData = [
    { material: "EN8 (C45)", carbon: "0.40–0.45", depth: "Moderate case depth (1.5–3 mm)" },
    { material: "EN19 (AISI 4140)", carbon: "0.40", depth: "Deep and uniform case" },
    { material: "EN24 (4340)", carbon: "0.40–0.45", depth: "Excellent hardenability" },
    { material: "Low Carbon Steels", carbon: "<0.25", depth: "Poor response, shallow case" },
];

const quenchingData = [
    { medium: "Water", speed: "Very Fast", control: "Shallow", risk: "Higher" },
    { medium: "Polymer (Aquaquench)", speed: "Controlled", control: "Customizable", risk: "Low" },
    { medium: "Oil", speed: "Slow", control: "Deep", risk: "Minimal" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogCaseDepth');

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
                    <span className='truncate'>Factors Affecting Case Depth</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Factors Affecting Case Depth in Induction Hardening</h1>
                <p className="mt-4 text-xl text-muted-foreground">In induction hardening, case depth — the thickness of the hardened surface layer — is one of the most critical quality parameters. It determines wear resistance, load-bearing capacity, and fatigue strength of components like shafts, gears, axles, and rollers.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Diagram showing case depth control in induction hardening"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">What Is Case Depth in Induction Hardening?</h2>
            <p>Case depth refers to the distance from the surface to the point where hardness drops to a specified value, usually 50 HRC. It is the zone transformed into martensite during induction heating and quenching.</p>
            <ul className='list-disc list-inside text-muted-foreground space-y-2 my-4'>
                <li><strong>Effective Case Depth:</strong> The depth where hardness remains ≥ 50 HRC.</li>
                <li><strong>Total Case Depth:</strong> The complete depth of the transformed layer, including transition zones.</li>
            </ul>
            <p className="font-semibold text-foreground">The right case depth balances surface hardness with core toughness.</p>

            <h2 className="text-3xl font-bold mt-12">Key Factors Affecting Case Depth</h2>
            <p>Achieving the desired case depth involves managing several variables — from equipment settings to material properties. Let’s explore each factor in detail.</p>
            
            <h3 className="text-2xl font-bold mt-8">1. Frequency of Induction Current</h3>
            <p>The frequency of the alternating current in the induction coil controls how deeply heat penetrates into the material.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Frequency Type</TableHead>
                            <TableHead>Typical Case Depth (mm)</TableHead>
                            <TableHead>Applications</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {frequencyData.map((row) => (
                            <TableRow key={row.frequency}>
                                <TableCell className="font-medium">{row.frequency}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                                <TableCell>{row.application}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p className="font-semibold text-foreground">Higher frequency = shallower case depth; lower frequency = deeper case depth. At {SITE_NAME}, we select frequencies based on the component geometry and hardness requirement.</p>
            
            <h3 className="text-2xl font-bold mt-8">2. Power Density (Heating Power)</h3>
            <p>Power density, measured in kW/cm², determines the rate of heat generation. High power inputs raise surface temperature quickly, but if excessive, can lead to overheating and uneven case depth. Controlled power delivery ensures uniform heating and prevents distortion or soft zones.</p>

            <h3 className="text-2xl font-bold mt-8">3. Heating Time</h3>
            <p>Heating time directly influences the diffusion of heat into the surface. A longer heating time results in deeper case depth, while shorter times produce shallower cases. However, excessive time can cause grain growth and distortion. Our CNC-controlled induction systems maintain precise time intervals to ensure repeatable hardness profiles.</p>

            <h3 className="text-2xl font-bold mt-8">4. Material Composition</h3>
            <p>Different materials respond differently to induction hardening due to their carbon content and alloying elements.</p>
             <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Carbon Content (%)</TableHead>
                            <TableHead>Hardening Response</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map((row) => (
                            <TableRow key={row.material}>
                                <TableCell className="font-medium">{row.material}</TableCell>
                                <TableCell>{row.carbon}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p className='font-semibold text-foreground'>Medium carbon steels like EN8, EN19, and EN24 offer the best balance of core strength and surface hardness.</p>

            <h3 className="text-2xl font-bold mt-8">5. Coil Design and Positioning</h3>
            <p>The shape, number of turns, and spacing of the induction coil determine how magnetic flux interacts with the component. Improper coil alignment can cause uneven heating and variable case depth. At {SITE_NAME}, we design custom coils for specific components like gears, spindles, and shafts, ensuring uniform heating around the entire surface.</p>

            <h3 className="text-2xl font-bold mt-8">6. Quenching Medium and Cooling Rate</h3>
            <p>The quenching process transforms heated austenite into martensite. The medium (water, polymer, or oil) and its cooling rate directly affect the case microstructure and depth.</p>
            <p className='mt-4 font-semibold text-foreground'>We use polymer-based quenching for EN-series steels to balance hardness, depth, and dimensional stability.</p>

            <h3 className="text-2xl font-bold mt-8">7. Component Geometry</h3>
            <p>Complex shapes like gears and splines require adaptive heating control. Sharp edges or thin sections absorb heat differently, influencing case depth uniformity. Using rotating fixtures and adjustable coil spacing, we ensure even heating for irregular shapes.</p>

            <h3 className="text-2xl font-bold mt-8">8. Pre-Heat and Tempering Cycles</h3>
            <p>Sometimes, pre-heating or post-hardening tempering is done to refine grain structure and relieve stresses. Improper preheating can cause shallow case or surface cracking. At {SITE_NAME}, every batch undergoes temperature verification before and after hardening for consistency.</p>

            <h2 className="text-3xl font-bold mt-12">Case Study: Gear Hardening in Ludhiana</h2>
            <p>An industrial gear made of EN24 steel required an effective case depth of 2.5 mm. By using a 60 kHz frequency, 80 kW power for 6 seconds, and a 12% polymer quench, we achieved a surface hardness of 58–60 HRC with a case depth between 2.45–2.6 mm, showing a variation of only ±0.1 mm with no distortion.</p>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Case Depth — The Science Behind Surface Strength</h2>
            <p>Case depth in induction hardening is not random — it’s the result of precision engineering and scientific process control. From frequency selection to quenching management, every parameter contributes to achieving consistent, reliable results. At {SITE_NAME}, we combine advanced systems with metallurgical expertise to deliver accurate case depth control for all industrial components.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Case Depth-Controlled Induction Hardening?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, Ludhiana for precision heat treatment job work tailored to your component and material needs.</p>
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
