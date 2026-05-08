
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
  title: 'Induction Hardening for Powertrain Components in Punjab',
  description: 'Learn how induction hardening enhances powertrain durability and strength for automotive applications in Ludhiana and Punjab.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening for Powertrain Components in Punjab",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Automotive Heat Treatment",
  "keywords": ["powertrain component hardening", "automotive heat treatment Punjab", "gear and shaft hardening Ludhiana"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/induction-hardening-for-powertrain-components",
  "inLanguage": "en"
};

const componentsData = [
    { component: "Transmission Shafts", material: "EN19, EN24", depth: "2–4", purpose: "Strength under torsional load" },
    { component: "Gears & Pinions", material: "EN353, 20MnCr5", depth: "1.5–3", purpose: "Wear resistance & tooth strength" },
    { component: "Axle Shafts", material: "4340, 4140", depth: "2–5", purpose: "Impact & load endurance" },
    { component: "Couplings / Yokes", material: "EN8, EN9", depth: "1–2.5", purpose: "Reduced surface fatigue" },
    { component: "Drive Rods & Spindles", material: "EN19, EN24", depth: "2–4", purpose: "Long service life under stress" },
];

const comparisonData = [
    { aspect: "Heat Source", induction: "Electromagnetic Field", conventional: "Furnace or flame" },
    { aspect: "Cycle Time", induction: "30–60 seconds", conventional: "1–2 hours" },
    { aspect: "Case Depth Accuracy", induction: "± 0.1 mm", conventional: "Variable" },
    { aspect: "Energy Efficiency", induction: "85–90%", conventional: "40–50%" },
    { aspect: "Distortion Risk", induction: "Very Low", conventional: "Moderate to High" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogPowertrain');

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
                    <span className='truncate'>Powertrain Component Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening for Powertrain Components in Punjab</h1>
                <p className="mt-4 text-xl text-muted-foreground">Learn how induction hardening enhances powertrain durability and strength for automotive applications in Ludhiana and Punjab.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Induction hardening of powertrain components"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: Why Powertrain Components Need Hardening</h2>
            <p>The powertrain is the heart of any vehicle — consisting of gears, shafts, axles, and couplings that transmit power from the engine to the wheels. These components operate under high torque, friction, and repetitive stress, demanding exceptional surface hardness and fatigue strength. Induction hardening has emerged as the most reliable process for strengthening these powertrain elements without altering their core toughness. At {SITE_NAME}, Ludhiana, we specialize in precision induction hardening job work for automotive manufacturers across Punjab and North India, ensuring enhanced wear resistance and durability.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Induction Hardening for Powertrain Components?</h2>
            <p>Induction hardening is a localized surface heat treatment where an alternating magnetic field heats the component’s surface rapidly, followed by immediate quenching. This transforms the metal’s outer layer into a hard martensitic structure, while keeping the inner core tough and ductile. Key benefits for powertrain parts include improved surface hardness (up to 60 HRC), high fatigue and torsional strength, minimal distortion, and controlled case depth for specific wear zones. Induction hardening provides the perfect balance — a strong surface with a flexible core.</p>

            <h2 className="text-3xl font-bold mt-12">Common Powertrain Components Treated by Induction Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Typical Material</TableHead>
                            <TableHead>Case Depth (mm)</TableHead>
                            <TableHead>Purpose</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {componentsData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.material}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                                <TableCell>{row.purpose}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p className='text-muted-foreground'>Each component is heat-treated to exact frequency and temperature parameters for optimum performance.</p>

            <h2 className="text-3xl font-bold mt-12">The Induction Hardening Process Step-by-Step</h2>
            <ol className='list-decimal list-inside space-y-2 text-muted-foreground'>
                <li><strong>Component Preparation:</strong> The surface is cleaned and positioned precisely under a custom-designed induction coil.</li>
                <li><strong>Induction Heating:</strong> Alternating current flows through the coil, generating electromagnetic heat on the metal surface.</li>
                <li><strong>Temperature Control:</strong> Surface temperature reaches about 850–900°C, controlled via infrared pyrometers.</li>
                <li><strong>Immediate Quenching:</strong> The component is quenched using polymer or water, converting the heated zone to martensite.</li>
                <li><strong>Tempering (Optional):</strong> Reduces internal stress and fine-tunes hardness balance.</li>
            </ol>
            <p className='mt-4 text-muted-foreground'>At {SITE_NAME}, every process parameter is digitally logged for consistency and traceability.</p>

            <h2 className="text-3xl font-bold mt-12">Advantages of Induction Hardening for Powertrain Parts</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Aspect</TableHead>
                            <TableHead>Induction Hardening</TableHead>
                            <TableHead>Conventional Methods</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map((row) => (
                            <TableRow key={row.aspect}>
                                <TableCell className="font-medium">{row.aspect}</TableCell>
                                <TableCell>{row.induction}</TableCell>
                                <TableCell>{row.conventional}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p className='text-muted-foreground'>Quick, clean, and efficient — induction hardening provides metallurgical precision that modern powertrain systems demand.</p>

            <h2 className="text-3xl font-bold mt-12">Case Study: Transmission Gear & Shaft Hardening</h2>
            <p>A Tier-1 Automotive Supplier in Ludhiana needed to improve the fatigue life of EN19 gear shafts. We implemented a medium-frequency induction hardening process at 15 kHz with a 10% polymer solution quench. The results were a surface hardness of 58–60 HRC, a case depth of 3.2 mm, and a 25% increase in component fatigue life with zero visible distortion. {SITE_NAME} delivered ISO-grade precision for this critical automotive application.</p>

            <h2 className="text-3xl font-bold mt-12">Why {SITE_NAME} is Punjab’s Preferred Heat Treatment Partner</h2>
            <p>Located in Ludhiana, close to major OEM and auto component clusters, {SITE_NAME} offers advanced induction hardening machines, polymer & water-based quenching systems, digital process monitoring, and deep expertise in automotive shafts, gears, and axles. We don’t just heat-treat metal — we build reliability into every component.</p>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Reliable Powertrain Strength Starts with Induction Hardening</h2>
            <p>Every automotive component in the powertrain depends on its ability to withstand friction, stress, and load. By using induction hardening, manufacturers can achieve the perfect combination of strength and durability — ensuring performance and longevity. At {SITE_NAME}, Ludhiana, we help automotive manufacturers across Punjab, Haryana, and North India achieve global-grade heat treatment results. Precision surface hardening for the heart of every vehicle — that’s the {SITE_NAME} promise.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Contact Us for Powertrain Heat Treatment Solutions</h3>
                <p className="mt-2 text-muted-foreground">Looking to improve the performance and life of your gears or shafts? Contact {SITE_NAME} for specialized induction hardening services tailored to automotive powertrain needs.</p>
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

    