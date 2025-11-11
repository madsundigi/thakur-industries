
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
  title: 'Case Hardening for Automotive Transmission Components',
  description: 'Enhance transmission performance and reliability through case hardening of gears, shafts, and couplings.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Case Hardening for Automotive Transmission Components",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Automotive Heat Treatment",
  "keywords": ["case hardening transmission components", "gearbox heat treatment Ludhiana", "automotive case depth Punjab"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/case-hardening-for-automotive-transmission-components",
  "inLanguage": "en"
};

const componentsData = [
    { component: "Transmission Gears", purpose: "Torque transmission and speed control", hardness: "58–60 HRC" },
    { component: "Gear Shafts", purpose: "Power delivery and rotation", hardness: "56–58 HRC" },
    { component: "Couplings", purpose: "Connect rotating shafts", hardness: "55–57 HRC" },
    { component: "Synchronizer Hubs", purpose: "Smooth gear shifting", hardness: "52–56 HRC" },
    { component: "Input & Output Shafts", purpose: "Power input/output transfer", hardness: "55–58 HRC" },
];

const materialsData = [
    { grade: "EN8 (C40)", use: "For shafts and couplings" },
    { grade: "EN19 (4140)", use: "For high-strength drive shafts" },
    { grade: "EN24 (4340)", use: "For heavy-duty transmission gears" },
    { grade: "20MnCr5 / 16MnCr5", use: "For carburized gear components" },
];

const comparisonData = [
    { feature: "Heating Zone", induction: "Localized (surface only)", conventional: "Full surface exposure" },
    { feature: "Process Time", induction: "Rapid (seconds to minutes)", conventional: "Long (hours)" },
    { feature: "Energy Efficiency", induction: "High", conventional: "Low" },
    { feature: "Distortion Control", induction: "Excellent", conventional: "Moderate" },
    { feature: "Automation Compatibility", induction: "Fully automated", conventional: "Limited" },
    { feature: "Environmental Impact", induction: "Clean, smoke-free", conventional: "Requires gas handling" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogTransmissionComponents');

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
                    <span className='truncate'>Case Hardening for Transmission Components</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Case Hardening for Automotive Transmission Components</h1>
                <p className="mt-4 text-xl text-muted-foreground">In modern automotive systems, transmission components — such as gears, shafts, and couplings — operate under continuous load, friction, and high torque conditions. To withstand these stresses, the surface of these components must be hard and wear-resistant, while their core remains tough and shock-absorbent.</p>
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
            
            <p>At {SITE_NAME}, Ludhiana, we specialize in induction-based case hardening for automotive components, delivering precision hardness, superior wear resistance, and optimal case depth for every part.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Is Case Hardening?</h2>
            <p>Case hardening is a surface heat treatment process that increases the hardness of the outer layer (the case) while maintaining the ductility of the inner core (the core). In induction case hardening, high-frequency electromagnetic energy is used to heat the surface rapidly, followed by controlled quenching (using polymer or water) to create a martensitic structure on the surface.</p>
            
            <h2 className="text-3xl font-bold mt-12">Case Hardening Process for Transmission Components</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Surface Heating by Induction:</strong> A high-frequency coil generates electromagnetic energy that heats only the surface of the part. Temperature typically ranges between 850°C to 950°C.</li>
                <li><strong>Controlled Quenching:</strong> The heated surface is rapidly cooled using polymer or water quenching. This transforms the surface layer into martensite, achieving hardness levels of 55–60 HRC.</li>
                <li><strong>Tempering (Optional):</strong> Components may undergo tempering to reduce internal stresses and balance hardness with toughness.</li>
                <li><strong>Case Depth Verification:</strong> Microhardness testing ensures the hardened layer meets the desired case depth, usually 1–3 mm for transmission components.</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12">Common Transmission Components That Undergo Case Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Purpose</TableHead>
                            <TableHead>Typical Hardness</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {componentsData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.purpose}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Materials Suitable for Transmission Component Hardening</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {materialsData.map((material) => (
                    <li key={material.grade}><strong>{material.grade}:</strong> {material.use}</li>
                ))}
            </ul>

            <h2 className="text-3xl font-bold mt-12">Advantages of Induction Case Hardening Over Conventional Methods</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Feature</TableHead>
                            <TableHead>Induction Case Hardening</TableHead>
                            <TableHead>Gas/Carburizing Methods</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map((row) => (
                            <TableRow key={row.feature}>
                                <TableCell className="font-medium">{row.feature}</TableCell>
                                <TableCell>{row.induction}</TableCell>
                                <TableCell>{row.conventional}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Strength That Drives Performance</h2>
            <p>In automotive manufacturing, the reliability of every transmission component depends on the strength beneath the surface. Through precision case hardening, we make sure that gears, shafts, and couplings endure the harshest mechanical stress while maintaining performance and durability.</p>
            <p>At {SITE_NAME}, Ludhiana, we deliver consistent, distortion-free, and certified case-hardened transmission components — ensuring smooth rides and long-lasting reliability.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Case Hardening for Transmission Components?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for reliable case hardening job work for automotive and industrial parts.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/services">Explore Our Services</Link>
                    </Button>
                </div>
            </div>
        </article>
      </div>
    </>
  );
}
