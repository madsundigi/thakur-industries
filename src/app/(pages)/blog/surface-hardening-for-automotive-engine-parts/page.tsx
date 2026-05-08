
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
  title: 'Surface Hardening for Automotive Engine Parts',
  description: 'See how surface hardening strengthens automotive engine components for improved wear resistance and performance.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Surface Hardening for Automotive Engine Parts",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Automotive Heat Treatment",
  "keywords": ["surface hardening engine components", "automotive engine parts Ludhiana", "surface treatment Punjab"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/surface-hardening-for-automotive-engine-parts",
  "inLanguage": "en"
};

const engineComponentsData = [
    { component: "Crankshafts", material: "EN19 / EN24", benefit: "Fatigue resistance, wear prevention" },
    { component: "Camshafts", material: "EN8 / 1045", benefit: "Surface wear resistance" },
    { component: "Connecting Rods", material: "4140", benefit: "Increased tensile strength" },
    { component: "Valve Stems", material: "Tool Steel", benefit: "Heat and friction endurance" },
    { component: "Rocker Arms", material: "Alloy Steel", benefit: "Surface life extension" },
    { component: "Timing Gears", material: "20MnCr5", benefit: "Consistent hardness and precision" },
];

const benefitsData = [
    { benefit: "Improved Wear Resistance", impact: "Reduces surface friction and material loss" },
    { benefit: "Fatigue Life Enhancement", impact: "Withstands repetitive mechanical stress" },
    { benefit: "Low Distortion", impact: "Controlled heating ensures dimensional accuracy" },
    { benefit: "High Production Efficiency", impact: "Quick, localized heating ideal for OEM volumes" },
    { benefit: "Environmentally Safe", impact: "No flames, fumes, or pollutants" },
    { benefit: "Material Versatility", impact: "Compatible with steels like EN8, EN19, EN24, and 4140" },
];

const materialsData = [
    { grade: "EN8", type: "Medium Carbon Steel", application: "General automotive parts" },
    { grade: "EN19", type: "Alloy Steel", application: "Crankshafts, axles" },
    { grade: "EN24", type: "Nickel Chromium Steel", application: "Gears, shafts" },
    { grade: "4140 / 4340", type: "Alloy Steel", application: "Powertrain components" },
    { grade: "20MnCr5", type: "Case Hardening Steel", application: "Timing gears, spindles" },
];


export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogEngineParts');

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
                    <span className='truncate'>Surface Hardening for Automotive Engine Parts</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Surface Hardening for Automotive Engine Parts</h1>
                <p className="mt-4 text-xl text-muted-foreground">See how surface hardening strengthens automotive engine components for improved wear resistance and performance.</p>
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

            <h2 className="text-3xl font-bold mt-12">Introduction: Power and Precision in Every Engine Component</h2>
            <p>Automotive engines are the heart of every vehicle — built to perform under high temperature, load, and friction conditions. Components like crankshafts, camshafts, valves, and connecting rods must withstand thousands of stress cycles daily. To ensure these parts stay strong and reliable, manufacturers rely on surface hardening — a precise induction-based heat treatment that enhances wear resistance, fatigue strength, and dimensional stability.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Surface Hardening and Why It’s Important for Engine Parts</h2>
            <p>Surface hardening is a heat treatment technique where only the outer layer of a metal part is hardened, while the core remains soft and tough. This gives engine components the perfect combination — a wear-resistant surface and a ductile core that absorbs impact.</p>

            <h2 className="text-3xl font-bold mt-12">Surface Hardening Process at {SITE_NAME}</h2>
            <p>At our Ludhiana facility, we use induction-based surface hardening systems tailored for complex automotive geometries and high-volume production.</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Pre-Cleaning and Surface Preparation: Components are cleaned to remove oil and impurities for even heating.</li>
                <li>Induction Heating: A custom-designed induction coil generates an electromagnetic field that rapidly heats the component surface to 850°C–950°C.</li>
                <li>Quenching: The surface is instantly cooled using polymer or water quenching, converting its structure into martensite for maximum hardness.</li>
                <li>Tempering (Optional): Controlled reheating relieves stress and fine-tunes the balance between hardness and ductility.</li>
                <li>Testing & Quality Control: Final hardness and case depth are verified using Rockwell and microhardness testing.</li>
            </ol>
            <p className="font-semibold text-foreground mt-4"><CheckCircle className="inline-block mr-2 h-5 w-5 text-green-500" />Every heat cycle is digitally monitored for uniformity, ensuring repeatable results for automotive OEMs.</p>

            <h2 className="text-3xl font-bold mt-12">Engine Components That Benefit from Surface Hardening</h2>
            <p>Surface hardening is vital for any component exposed to friction, rotation, or repetitive stress in an engine.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Material</TableHead>
                            <TableHead>Process Benefit</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {engineComponentsData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.material}</TableCell>
                                <TableCell>{row.benefit}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p className="font-semibold text-foreground">From tractors to passenger cars — our induction hardening protects every revolution.</p>

            <h2 className="text-3xl font-bold mt-12">Benefits of Induction Surface Hardening for Engine Components</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Advantage</TableHead>
                            <TableHead>Impact on Performance</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {benefitsData.map((row) => (
                            <TableRow key={row.benefit}>
                                <TableCell className="font-medium">{row.benefit}</TableCell>
                                <TableCell>{row.impact}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Material Grades Best Suited for Surface Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material Grade</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Application</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map((row) => (
                            <TableRow key={row.grade}>
                                <TableCell className="font-medium">{row.grade}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.application}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Reinforcing Engine Strength with Induction Precision</h2>
            <p>In a world where efficiency and durability define performance, surface hardening is essential to ensure every engine part works longer, smoother, and stronger. At {SITE_NAME}, we merge advanced induction technology with metallurgical expertise, ensuring superior heat treatment results for automotive components across Punjab’s growing manufacturing base.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Surface Hardening for Engine Parts?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, your trusted expert in induction heat treatment and case hardening services in Ludhiana.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/component-hardening">Explore Component Services</Link>
                    </Button>
                </div>
            </div>
        </article>
      </div>
    </>
  );
}
