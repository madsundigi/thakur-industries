
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

export const metadata: Metadata = {
  title: 'Induction Hardening for Automotive Axles in Punjab',
  description: 'Find out how induction hardening improves wear resistance and load capacity in automotive axles.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening for Automotive Axles in Punjab",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Automotive Heat Treatment",
  "keywords": ["automotive axle hardening", "rear axle heat treatment Ludhiana", "differential shaft hardening Punjab"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/induction-hardening-for-automotive-axles",
  "inLanguage": "en"
};

const axleTypesData = [
    { axleType: "Rear Axle Shafts", application: "Tractors, Trucks", material: "EN19 / 4140 Steel" },
    { axleType: "Front Axles", application: "Passenger Cars, Utility Vehicles", material: "EN8 / EN24" },
    { axleType: "Differential Shafts", application: "Gearboxes & Power Transmission", material: "20MnCr5 / EN36" },
    { axleType: "Drive Axles", application: "Light Commercial Vehicles", material: "4340 / 4140" },
    { axleType: "Stub Axles & Spindles", application: "Steering Assemblies", material: "EN19 / EN24" },
];

const technicalParamsData = [
    { parameter: "Frequency Range", value: "10–30 kHz (Medium Frequency)" },
    { parameter: "Heating Temperature", value: "880–900°C" },
    { parameter: "Case Depth", value: "2.5–5.0 mm" },
    { parameter: "Surface Hardness", value: "55–60 HRC" },
    { parameter: "Quenching Medium", value: "8–12% Polymer or Water" },
    { parameter: "Cycle Time", value: "20–45 seconds (depending on size)" },
    { parameter: "Cooling Type", value: "Spray or Immersion" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogAutomotiveAxles');

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
                    <span className='truncate'>Automotive Axle Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening for Automotive Axles in Punjab</h1>
                <p className="mt-4 text-xl text-muted-foreground">Find out how induction hardening improves wear resistance and load capacity in automotive axles.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Induction hardening of automotive axles"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: Strength at the Core of Every Vehicle</h2>
            <p>The automotive axle is one of the most critical load-bearing components in any vehicle. Whether it’s a rear axle of a tractor, front axle of a truck, or differential shaft in a car, the axle must withstand torsional stress, shock loads, and continuous rotation under varying conditions.</p>
            <p>To achieve long-term durability and consistent performance, these components must have hard, wear-resistant surfaces combined with a tough, ductile core — and that’s exactly what induction hardening delivers.</p>
            <p>At {SITE_NAME}, Ludhiana, we specialize in automotive axle hardening and differential shaft heat treatment for manufacturers across Punjab, Haryana, and Delhi NCR — using medium-frequency induction systems that ensure precise case depth, uniform hardness, and zero distortion.</p>

            <h2 className="text-3xl font-bold mt-12">Why Induction Hardening Is Ideal for Automotive Axles</h2>
            <h3 className="text-2xl font-semibold mt-6">Localized Hardening for Functional Areas</h3>
            <p className='text-muted-foreground'>Only the load-bearing or wear zones of the axle — such as bearing journals, spline ends, and gear seating areas — are heated and hardened, preserving the ductile core.</p>
            <h3 className="text-2xl font-semibold mt-6">Enhanced Wear Resistance</h3>
            <p className='text-muted-foreground'>The hardened surface resists wear from continuous contact with bearings and rotating parts, ensuring long service life even under heavy loads.</p>
            <h3 className="text-2xl font-semibold mt-6">Improved Fatigue Strength</h3>
            <p className='text-muted-foreground'>Induction hardening induces compressive stresses on the surface, significantly improving fatigue resistance under cyclic torsional stresses.</p>
            <h3 className="text-2xl font-semibold mt-6">Minimal Distortion</h3>
            <p className='text-muted-foreground'>Unlike furnace hardening, induction heating is fast and localized, preventing warping and maintaining dimensional accuracy for perfect assembly fit.</p>
            <h3 className="text-2xl font-semibold mt-6">Energy & Process Efficiency</h3>
            <p className='text-muted-foreground'>Induction hardening offers faster cycle times and higher energy efficiency — making it the most cost-effective and sustainable choice for axle treatment.</p>

            <h2 className="text-3xl font-bold mt-12">The Induction Hardening Process for Automotive Axles</h2>
            <p>Here’s how we ensure metallurgical precision for every axle:</p>
            <ol className='list-decimal list-inside space-y-2 text-muted-foreground'>
                <li><strong>Pre-Cleaning:</strong> Axles are cleaned to remove oil, rust, or residue for uniform heat transfer.</li>
                <li><strong>Induction Heating:</strong> Medium-frequency electromagnetic fields heat the axle surface to ~880–900°C.</li>
                <li><strong>Quenching:</strong> Polymer or water quenching immediately follows to form a hard martensitic layer.</li>
                <li><strong>Tempering (Optional):</strong> A low-temperature heat treatment relieves residual stress.</li>
                <li><strong>Inspection:</strong> Hardness, case depth, and straightness are verified for every part.</li>
            </ol>
            
            <h2 className="text-3xl font-bold mt-12">Technical Parameters for Axle Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Typical Range / Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {technicalParamsData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Common Types of Automotive Axles Treated</h2>
            <div className="my-8 overflow-x-auto">
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Axle Type</TableHead>
                            <TableHead>Application</TableHead>
                            <TableHead>Material</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {axleTypesData.map((row) => (
                            <TableRow key={row.axleType}>
                                <TableCell className="font-medium">{row.axleType}</TableCell>
                                <TableCell>{row.application}</TableCell>
                                <TableCell>{row.material}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Case Study: Induction Hardening of Tractor Rear Axle Shafts</h2>
            <p>A tractor OEM in Ludhiana faced surface wear and bending in EN19 rear axle shafts after just 8 months of field use. We implemented a medium-frequency induction process with 10% polymer quenching, achieving a surface hardness of 58 HRC and a case depth of 3.5mm. The result was a 2.7x increase in service life and a 35% improvement in fatigue strength, with zero distortion.</p>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Stronger Axles, Longer Vehicle Life</h2>
            <p>A vehicle’s reliability depends heavily on the strength and durability of its axles. Through induction hardening, automotive manufacturers can achieve increased surface hardness, superior wear resistance, longer fatigue life, and minimal distortion. At {SITE_NAME}, Ludhiana, we offer precision-controlled axle and shaft hardening services for the automotive, tractor, and industrial equipment sectors — ensuring each part performs under pressure.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Automotive Axle Hardening?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for induction hardening job work for automotive axles, rear shafts, or differential parts.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/component-hardening">Explore Component Hardening</Link>
                    </Button>
                </div>
            </div>
          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}
