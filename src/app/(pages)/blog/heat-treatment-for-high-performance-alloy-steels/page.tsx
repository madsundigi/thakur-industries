
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Zap } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

export const metadata: Metadata = {
  title: 'Heat Treatment for High-Performance Alloy Steels',
  description: 'Discover the heat treatment process that strengthens EN and alloy steels for industrial machinery and automotive parts.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Heat Treatment for High-Performance Alloy Steels",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Materials",
  "keywords": ["high performance alloy heat treatment", "EN19 EN24 heat treatment Punjab", "alloy steel induction hardening Ludhiana"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/heat-treatment-for-high-performance-alloy-steels",
  "inLanguage": "en"
};

const materialsData = [
    { material: "EN19 (AISI 4140)", applications: "Shafts, gears, crankshafts", purpose: "Improves toughness and tensile strength" },
    { material: "EN24 (AISI 4340)", applications: "Spindles, axles, connecting rods", purpose: "Increases fatigue strength and wear resistance" },
    { material: "EN8", applications: "Pins, machine parts", purpose: "Provides hardness and machinability" },
    { material: "EN36 / 20MnCr5", applications: "Gears, camshafts", purpose: "Case hardening for surface wear resistance" },
];

const comparisonData = [
    { parameter: "Heating Method", induction: "Electromagnetic", conventional: "Furnace / Flame" },
    { parameter: "Time Required", induction: "Seconds", conventional: "Hours" },
    { parameter: "Case Depth Control", induction: "Precise (±0.1 mm)", conventional: "Variable" },
    { parameter: "Energy Efficiency", induction: "High (up to 90%)", conventional: "Moderate" },
    { parameter: "Distortion Risk", induction: "Very Low", conventional: "High" },
    { parameter: "Process Repeatability", induction: "Excellent", conventional: "Limited" },
];

const resultsData = [
    { material: "EN19", hardness: "55–58 HRC", depth: "2.0–3.0 mm", quench: "Polymer" },
    { material: "EN24", hardness: "58–62 HRC", depth: "2.5–4.0 mm", quench: "Polymer / Water" },
    { material: "4140", hardness: "54–58 HRC", depth: "2.0–3.5 mm", quench: "Polymer" },
    { material: "4340", hardness: "56–60 HRC", depth: "2.5–4.5 mm", quench: "Polymer" },
    { material: "EN8", hardness: "50–55 HRC", depth: "1.5–2.5 mm", quench: "Water" },
];

const applicationsData = [
    { industry: "Automotive Industry", components: "Shafts, gears, crankshafts, connecting rods" },
    { industry: "Construction & Machinery", components: "Hydraulic rods, rollers, pins" },
    { industry: "Aerospace & Defense", components: "Spindles, couplings, tool parts" },
    { industry: "Agricultural Equipment", components: "Tractor axles, tiller shafts, rotavator gears" },
];


export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogAlloySteels');

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
                    <span className='truncate'>Heat Treatment for Alloy Steels</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Heat Treatment for High-Performance Alloy Steels</h1>
                <p className="mt-4 text-xl text-muted-foreground">Discover the heat treatment process that strengthens EN and alloy steels for industrial machinery and automotive parts.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="High-performance alloy steel components"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: The Importance of Heat Treatment for Alloy Steels</h2>
            <p>Modern engineering industries rely on high-performance alloy steels like EN8, EN19, EN24, 4140, and 4340 to achieve both strength and flexibility in critical components. However, their mechanical properties depend heavily on one key process — heat treatment.</p>
            <p>Through controlled heating and cooling, the internal structure of these steels can be transformed to deliver higher tensile strength, greater fatigue resistance, improved wear protection, and long-term durability. At {SITE_NAME}, Ludhiana’s trusted industrial heat treatment company, we specialize in precision induction hardening for alloy steels used in automotive, power transmission, and machinery industries across Punjab.</p>

            <h2 className="text-3xl font-bold mt-12">Understanding Alloy Steels and Their Heat Treatment Needs</h2>
            <p>Alloy steels are iron-based materials containing one or more alloying elements such as chromium, molybdenum, nickel, and manganese. These elements enhance the steel’s hardenability, allowing it to respond efficiently to heat treatment.</p>
            <h3 className="text-2xl font-semibold mt-6">Common Alloy Steel Grades Treated at {SITE_NAME}:</h3>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Applications</TableHead>
                            <TableHead>Heat Treatment Purpose</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map((row) => (
                            <TableRow key={row.material}>
                                <TableCell className="font-medium">{row.material}</TableCell>
                                <TableCell>{row.applications}</TableCell>
                                <TableCell>{row.purpose}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Heat Treatment Process for High-Performance Alloy Steels</h2>
            <p>At {SITE_NAME}, we follow a scientifically controlled induction heat treatment process to achieve consistent metallurgical properties.</p>
            <ol className='list-decimal list-inside space-y-4 text-muted-foreground'>
                <li><strong>Pre-Heating & Preparation:</strong> The component is cleaned and preheated to remove moisture and impurities. Fixtures or rotation systems are used to ensure even heating.</li>
                <li><strong>Induction Heating:</strong> The surface is heated using electromagnetic induction to the desired temperature range (EN19 / EN8: 850°C–900°C; EN24 / 4340: 870°C–930°C). The heating is quick and localized, minimizing distortion.</li>
                <li><strong>Quenching:</strong> Components are immediately quenched using polymer or water-based media to form a hard martensitic layer. Quenching rate and pressure are digitally controlled for uniform cooling.</li>
                <li><strong>Tempering:</strong> Post-quenching tempering restores ductility and reduces internal stresses without sacrificing hardness.</li>
            </ol>
            
            <h2 className="text-3xl font-bold mt-12">Induction Hardening vs. Conventional Heat Treatment</h2>
             <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Induction Hardening</TableHead>
                            <TableHead>Conventional Heat Treatment</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.induction}</TableCell>
                                <TableCell>{row.conventional}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Typical Results of Alloy Steel Heat Treatment</h2>
            <div className="my-8 overflow-x-auto">
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Surface Hardness (HRC)</TableHead>
                            <TableHead>Case Depth (mm)</TableHead>
                            <TableHead>Quenching Type</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {resultsData.map((row) => (
                            <TableRow key={row.material}>
                                <TableCell className="font-medium">{row.material}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                                <TableCell>{row.quench}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p className='text-muted-foreground'>Each steel grade’s parameters are customized for strength, wear resistance, and fatigue performance.</p>

            <h2 className="text-3xl font-bold mt-12">Applications of Heat-Treated Alloy Steels</h2>
            <p>Alloy steel components are essential in industries where mechanical reliability and toughness are critical.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Industry</TableHead>
                            <TableHead>Key Application Areas</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {applicationsData.map((row) => (
                            <TableRow key={row.industry}>
                                <TableCell className="font-medium">{row.industry}</TableCell>
                                <TableCell>{row.components}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
             <p className='text-muted-foreground'>With proper heat treatment, these components achieve 2–3× longer operational life.</p>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Alloy Steel Strength Starts with Controlled Heat Treatment</h2>
            <p>From gears and shafts to machinery spindles, the performance of every critical part depends on its heat treatment quality. Induction hardening gives alloy steels the surface strength they need — without compromising flexibility or toughness. At {SITE_NAME}, Ludhiana, we deliver customized heat treatment services for EN19, EN24, 4140, and 4340 steels, helping industries across Punjab achieve world-class reliability and performance.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for reliable EN19 or EN24 induction hardening job work in Punjab?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, Ludhiana’s trusted heat treatment service provider for automotive and industrial alloy components.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/services">Explore Services</Link>
                    </Button>
                </div>
            </div>
          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}
