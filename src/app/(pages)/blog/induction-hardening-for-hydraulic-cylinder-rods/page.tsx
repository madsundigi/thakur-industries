
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
  title: 'Induction Hardening for Hydraulic Cylinder Rods',
  description: 'Explore induction hardening methods used to enhance wear resistance in hydraulic and pneumatic rods.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening for Hydraulic Cylinder Rods",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Industrial Heat Treatment",
  "keywords": ["hydraulic rod hardening", "chrome rod heat treatment", "hydraulic component hardening Punjab"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/induction-hardening-for-hydraulic-cylinder-rods",
  "inLanguage": "en"
};

const technicalParams = [
    { parameter: "Frequency Range", value: "15–50 kHz (Medium Frequency)" },
    { parameter: "Surface Temperature", value: "850–900°C" },
    { parameter: "Case Depth", value: "2.0–3.5 mm" },
    { parameter: "Surface Hardness", value: "56–60 HRC" },
    { parameter: "Quenching Medium", value: "Polymer (8–12%) or Water" },
    { parameter: "Core Hardness (Post Process)", value: "25–35 HRC" },
];

const materialsData = [
    { grade: "EN8 / C45", use: "Standard hydraulic rods", hardness: "52–56" },
    { grade: "EN19 / 4140", use: "High-load rods", hardness: "55–58" },
    { grade: "EN24 / 4340", use: "Heavy-duty industrial rods", hardness: "58–60" },
    { grade: "20MnCr5", use: "Case-hardened chrome rods", hardness: "60–62" },
];

const applicationsData = [
    { industry: "Construction Equipment", examples: "Excavator and crane rods" },
    { industry: "Agricultural Machinery", examples: "Tractor lift and loader cylinders" },
    { industry: "Manufacturing Presses", examples: "Hydraulic press rods and plungers" },
    { industry: "Automotive Systems", examples: "Power steering and suspension cylinders" },
    { industry: "Industrial Automation", examples: "Pneumatic actuator rods" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogHydraulicRods');

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
                    <span className='truncate'>Hydraulic Rod Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening for Hydraulic Cylinder Rods</h1>
                <p className="mt-4 text-xl text-muted-foreground">Explore induction hardening methods used to enhance wear resistance in hydraulic and pneumatic rods.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Induction hardening of hydraulic cylinder rods"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: Why Hydraulic Rods Need Hardening</h2>
            <p>Hydraulic and pneumatic systems rely on cylinder rods to perform repetitive, high-pressure movements. These rods operate in harsh conditions — enduring constant friction, high stress, and exposure to oil and moisture. Without proper surface treatment, hydraulic rods can wear, corrode, or bend under pressure, leading to equipment downtime and expensive replacements.</p>
            <p>That’s why induction hardening is the preferred process for hydraulic rod hardening — it improves surface hardness, wear resistance, and fatigue strength while maintaining the rod’s internal flexibility. At {SITE_NAME}, Ludhiana, we provide specialized induction hardening job work for hydraulic and chrome-plated rods, serving industries across Punjab, Haryana, and North India.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Induction Hardening for Hydraulic Rods?</h2>
            <p>Induction hardening is a surface heat treatment process that selectively hardens the outer layer of steel components without affecting the inner structure. The result is a hard, wear-resistant surface layer (martensite) with a tough core that resists bending and shock. This method ensures the rod can handle both pressure and motion without losing straightness or polish.</p>

            <h2 className="text-3xl font-bold mt-12">Why Induction Hardening Is Ideal for Hydraulic Cylinder Rods</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><span className="font-bold text-foreground">Superior Wear Resistance:</span> Creates a high-hardness surface (up to 58–60 HRC) that protects against abrasive wear from seals and pistons.</li>
                <li><span className="font-bold text-foreground">High Fatigue Strength:</span> Compressive stresses from surface hardening reduce microcrack formation and fatigue failure.</li>
                <li><span className="font-bold text-foreground">Corrosion Resistance:</span> Hardened rods can be chrome-plated for added corrosion protection.</li>
                <li><span className="font-bold text-foreground">Dimensional Stability:</span> Localized heating minimizes distortion, ensuring precise straightness.</li>
                <li><span className="font-bold text-foreground">Extended Service Life:</span> Hardened rods last 2–3 times longer, reducing maintenance costs.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Technical Parameters for Hydraulic Rod Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Typical Range / Specification</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {technicalParams.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Common Materials Used for Hydraulic Rods</h2>
            <div className="my-8 overflow-x-auto">
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material Grade</TableHead>
                            <TableHead>Typical Use</TableHead>
                            <TableHead>Surface Hardness (HRC)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map((row) => (
                            <TableRow key={row.grade}>
                                <TableCell className="font-medium">{row.grade}</TableCell>
                                <TableCell>{row.use}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Applications of Hydraulic Rod Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Industry</TableHead>
                            <TableHead>Typical Components</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {applicationsData.map((row) => (
                            <TableRow key={row.industry}>
                                <TableCell className="font-medium">{row.industry}</TableCell>
                                <TableCell>{row.examples}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Stronger, Smoother, More Reliable Hydraulic Rods</h2>
            <p>Hydraulic systems depend on precision and durability — and induction hardening provides both. By optimizing surface hardness, case depth, and residual stress, hydraulic rods can withstand high loads, continuous motion, and challenging environments. At {SITE_NAME}, we combine advanced induction technology, material-specific parameters, and polymer-based quenching systems to deliver reliable, distortion-free hardening services for hydraulic and chrome-plated rods.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Hydraulic Rod Hardening?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for heat treatment job work for hydraulic and chrome rods in Ludhiana, Punjab.</p>
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
