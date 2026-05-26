
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
  title: 'Induction Hardening for Aerospace Industry Components',
  description: 'Understand how induction hardening ensures fatigue strength and dimensional control in aerospace parts.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening for Aerospace Industry Components",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Aerospace Heat Treatment",
  "keywords": ["aerospace component heat treatment", "precision hardening Ludhiana", "lightweight alloy treatment Punjab"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/induction-hardening-for-aerospace-industry-components",
  "inLanguage": "en"
};

const aerospaceComponentsData = [
    { component: "Landing Gear Shafts", material: "4340 / 300M", purpose: "Fatigue resistance under cyclic loads" },
    { component: "Actuator Rods", material: "EN24 / 4140", purpose: "Surface hardness and corrosion resistance" },
    { component: "Bearing Races", material: "52100 / EN31", purpose: "High wear resistance" },
    { component: "Gear Teeth (Helical & Spur)", material: "8620 / EN36", purpose: "Surface wear protection" },
    { component: "Couplings & Pins", material: "4340 / 17-4PH", purpose: "Strength and dimensional accuracy" },
    { component: "Turbine Shafts", material: "Nickel-based Alloys", purpose: "Heat and fatigue strength" },
];

const technicalParamsData = [
    { parameter: "Frequency", value: "10–100 kHz (part-specific)" },
    { parameter: "Surface Temperature", value: "850–950°C" },
    { parameter: "Case Depth", value: "1.5–3.5 mm" },
    { parameter: "Surface Hardness", value: "55–62 HRC (steel alloys)" },
    { parameter: "Cooling Medium", value: "10% Polymer or Water" },
    { parameter: "Temperature Control Tolerance", value: "±10°C" },
];

const materialsData = [
    { material: "4340 Steel", application: "Shafts, landing gear", hardness: "56–60" },
    { material: "300M Alloy Steel", application: "High-load structural parts", hardness: "58–62" },
    { material: "4140 / 4150", application: "Actuators, pins", hardness: "55–60" },
    { material: "17-4PH Stainless", application: "Precision rods, linkages", hardness: "45–50" },
    { material: "Titanium Alloys (Ti-6Al-4V)", application: "Lightweight aerospace structures", hardness: "Modified surface hardening" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogAerospace');

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
                    <span className='truncate'>Aerospace Component Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening for Aerospace Industry Components</h1>
                <p className="mt-4 text-xl text-muted-foreground">The aerospace industry operates in an environment where failure is not an option. Every part — from a landing gear shaft to a turbine bearing — must perform reliably under extreme mechanical stress, vibration, and temperature variations.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Induction hardening for aerospace components"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>Achieving such performance depends heavily on precise heat treatment — and induction hardening stands out as one of the most efficient, controllable, and repeatable processes for aerospace-grade materials.</p>
            <p>At {SITE_NAME}, Ludhiana, we provide precision induction hardening and aerospace component heat treatment solutions that meet the industry’s highest metallurgical and quality standards, supporting manufacturers across Punjab and North India.</p>

            <h2 className="text-3xl font-bold mt-12">Why Induction Hardening Is Essential for Aerospace Components</h2>
            <p>Aerospace components are often made from high-strength alloys like 4140, 4340, 300M, and titanium, where performance depends on surface hardness, fatigue resistance, and dimensional integrity.</p>
            <p>Induction hardening provides localized, repeatable, and distortion-free heat treatment, perfectly suited for aerospace applications where precision is critical.</p>
            <h3 className="text-2xl font-semibold mt-6">Key Benefits:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><span className="font-bold text-foreground">Superior Surface Hardness:</span> Increases wear resistance for parts exposed to friction.</li>
                <li><span className="font-bold text-foreground">Enhanced Fatigue Strength:</span> Creates a compressive surface layer that resists micro-cracking under stress.</li>
                <li><span className="font-bold text-foreground">Dimensional Stability:</span> Localized heating prevents distortion — crucial for close-tolerance parts.</li>
                <li><span className="font-bold text-foreground">Energy Efficiency:</span> Induction heating is faster and cleaner than conventional furnaces.</li>
                <li><span className="font-bold text-foreground">Process Control:</span> Real-time temperature and dwell-time monitoring ensure repeatable quality.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Common Aerospace Components Hardened by Induction</h2>
            <p>At {SITE_NAME}, we treat a wide range of critical aerospace components requiring both surface strength and structural flexibility.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Material</TableHead>
                            <TableHead>Purpose of Hardening</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {aerospaceComponentsData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.material}</TableCell>
                                <TableCell>{row.purpose}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">The Induction Hardening Process for Aerospace Parts</h2>
            <p>The aerospace industry demands high repeatability, traceability, and tight control over every heat treatment parameter. At {SITE_NAME}, we follow a six-step precision process:</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Component Preparation:</strong> Surface cleaning removes oils, oxides, and contaminants to ensure uniform heat absorption.</li>
                <li><strong>Coil Design & Setup:</strong> Custom induction coils are engineered for each part geometry — from slender rods to complex gear profiles.</li>
                <li><strong>Induction Heating:</strong> High-frequency or medium-frequency current (10–100 kHz) generates localized heating at 850–950°C within seconds.</li>
                <li><strong>Controlled Quenching:</strong> Polymer or water quenching is applied instantly for surface transformation without causing warping or cracks.</li>
                <li><strong>Tempering:</strong> Tempering at 150–250°C relieves residual stresses and improves structural stability.</li>
                <li><strong>Testing & Validation:</strong> Post-process hardness, case depth, and structural integrity are tested as per aerospace quality standards.</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12">Technical Parameters for Aerospace Component Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Range / Value</TableHead>
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
            
            <h2 className="text-3xl font-bold mt-12">Materials Used in Aerospace Heat Treatment</h2>
            <p>Aerospace components often use high-strength, low-weight materials that respond differently to induction hardening.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Typical Application</TableHead>
                            <TableHead>Post-Treatment Hardness (HRC)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map((row) => (
                            <TableRow key={row.material}>
                                <TableCell className="font-medium">{row.material}</TableCell>
                                <TableCell>{row.application}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Challenges in Aerospace Heat Treatment — and How We Solve Them</h2>
            <h3 className="text-2xl font-semibold mt-6">Distortion or Warping</h3>
            <p className="text-muted-foreground">High-frequency heating can distort thin-walled parts. ✅ Solution: Rotational heating and uniform quenching ensure balanced stress distribution.</p>
            <h3 className="text-2xl font-semibold mt-6">Surface Cracking</h3>
            <p className="text-muted-foreground">Occurs due to rapid temperature changes. ✅ Solution: Controlled polymer quenching and post-tempering to relieve residual stress.</p>
            <h3 className="text-2xl font-semibold mt-6">Uneven Case Depth</h3>
            <p className="text-muted-foreground">Varying geometry can lead to inconsistent hardness. ✅ Solution: Advanced coil design simulations to ensure even heat distribution.</p>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Precision Hardening for Aerospace Reliability</h2>
            <p>Aerospace components must withstand enormous mechanical loads, cyclic stress, and temperature extremes. Through induction hardening, we ensure accurate case depth control, crack-free and distortion-free results, and consistent hardness with metallurgical integrity.</p>
            <p>At {SITE_NAME}, we deliver precision hardening solutions that support the performance, safety, and reliability demanded by the aerospace sector.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Aerospace Component Hardening?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, Ludhiana — specialists in precision alloy hardening, polymer quenching, and surface treatment for aerospace and industrial components.</p>
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

    