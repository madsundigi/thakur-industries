
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
  title: 'Automotive Gear and Shaft Induction Hardening',
  description: 'Understand how induction hardening improves fatigue life and reduces wear in automotive gears and shafts.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Automotive Gear and Shaft Induction Hardening",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Automotive Heat Treatment",
  "keywords": ["automotive gear and shaft hardening", "gear induction heat treatment Punjab", "automotive shafts Ludhiana"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/automotive-gear-and-shaft-induction-hardening",
  "inLanguage": "en"
};

const materialsData = [
    { material: "EN19 (AISI 4140)", use: "Shafts, Axles", hardness: "55–58", depth: "2.0–3.5" },
    { material: "EN24 (AISI 4340)", use: "Transmission Shafts", hardness: "56–60", depth: "2.5–4.0" },
    { material: "20MnCr5", use: "Gears & Pinions", hardness: "58–62", depth: "1.5–3.0" },
    { material: "EN8 / EN9", use: "Spindles, Couplings", hardness: "50–55", depth: "1.5–2.5" },
];

const resultsData = [
    { component: "Transmission Shaft", material: "EN19", frequency: "15 kHz", result: "Surface Hardness: 58 HRC, Case Depth: 3 mm" },
    { component: "Gear Pinion", material: "20MnCr5", frequency: "30 kHz", result: "Surface Hardness: 60 HRC, Case Depth: 2 mm" },
    { component: "Drive Axle", material: "EN24", frequency: "10 kHz", result: "Improved fatigue life by 25%" },
];

const comparisonData = [
    { aspect: "Heating Speed", induction: "Seconds", furnace: "Hours" },
    { aspect: "Energy Efficiency", induction: "85–90%", furnace: "40–50%" },
    { aspect: "Surface Control", induction: "Excellent", furnace: "Average" },
    { aspect: "Distortion", induction: "Minimal", furnace: "High" },
    { aspect: "Repeatability", induction: "High", furnace: "Variable" },
    { aspect: "Environmental Impact", induction: "Clean", furnace: "Polluting" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogAutomotiveGearShaft');

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
                    <span className='truncate'>Automotive Gear and Shaft Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Automotive Gear and Shaft Induction Hardening</h1>
                <p className="mt-4 text-xl text-muted-foreground">Automotive components like gears, shafts, and axles operate under immense mechanical stress, high speeds, and continuous load cycles. Without proper hardening, these parts quickly wear out or fail — resulting in costly downtime and replacements.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Automotive gears and shafts"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>At {SITE_NAME}, Ludhiana, we specialize in precision heat treatment job work for automotive parts across Punjab, Haryana, and Delhi NCR. Our automotive gear and shaft induction hardening process ensures superior surface strength, longer service life, and reliable performance on the road.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Is Induction Hardening for Automotive Gears and Shafts?</h2>
            <p>Induction hardening is a controlled surface heat treatment process that uses electromagnetic induction to heat the component’s outer layer quickly, followed by rapid quenching (cooling). This forms a hard martensitic surface while maintaining a tough and flexible core. In automotive applications, it is mainly used for transmission gears, drive shafts, camshafts, axle shafts, pinions and spindles. The process provides an ideal blend of surface hardness and internal strength.</p>

            <h2 className="text-3xl font-bold mt-12">Why Automotive Gears and Shafts Need Hardening</h2>
            <p>Automotive powertrains depend on continuous torque transfer between rotating parts. Gears and shafts are therefore exposed to cyclic stress, friction, and heat. Without hardening, gear teeth wear down faster, shafts lose dimensional accuracy, and fatigue cracks appear over time. With induction hardening, the component’s surface gains high hardness (up to 60 HRC), which significantly improves fatigue strength and wear resistance.</p>
            
            <h2 className="text-3xl font-bold mt-12">The Induction Hardening Process for Automotive Components</h2>
            <p>At {SITE_NAME}, we use state-of-the-art medium and high-frequency induction systems designed specifically for gear and shaft hardening.</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Preparation:</strong> Component is cleaned and positioned inside a custom coil.</li>
                <li><strong>Induction Heating:</strong> The surface is heated to ~850–950°C using controlled electromagnetic fields.</li>
                <li><strong>Quenching:</strong> Rapid cooling with polymer or water to create a hard surface.</li>
                <li><strong>Tempering:</strong> Post-hardening tempering relieves stresses and ensures toughness.</li>
                <li><strong>Testing:</strong> Hardness and case depth are verified through Rockwell and micro-hardness testing.</li>
            </ol>
            <p className="font-semibold text-foreground">Every part undergoes a controlled, repeatable process — ensuring OEM-level consistency.</p>
            
            <h2 className="text-3xl font-bold mt-12">Materials Commonly Treated</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Typical Use</TableHead>
                            <TableHead>Hardness (HRC)</TableHead>
                            <TableHead>Case Depth (mm)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map((row) => (
                            <TableRow key={row.material}>
                                <TableCell className="font-medium">{row.material}</TableCell>
                                <TableCell>{row.use}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Performance Results at {SITE_NAME}</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Material</TableHead>
                            <TableHead>Process Frequency</TableHead>
                            <TableHead>Result</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {resultsData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.material}</TableCell>
                                <TableCell>{row.frequency}</TableCell>
                                <TableCell>{row.result}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Reliable Automotive Performance Starts with Induction Hardening</h2>
            <p>Every gear and shaft in a vehicle plays a vital role in power transmission. By using induction hardening, automotive manufacturers can achieve components that deliver precision, durability, and long service life. At {SITE_NAME}, Ludhiana, we combine modern induction systems with decades of metallurgical expertise to deliver the best heat treatment job work in Punjab.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Automotive Gear and Shaft Hardening?</h3>
                <p className="mt-2 text-muted-foreground">Connect with {SITE_NAME}, Ludhiana’s trusted partner for precision induction heat treatment services.</p>
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
