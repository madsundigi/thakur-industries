
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
  title: 'Induction Heat Treatment for 4140 & 4150 Steel Grades',
  description: 'Detailed guide to hardening processes and ideal temperatures for 4140 and 4150 alloy steels.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Heat Treatment for 4140 & 4150 Steel Grades",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Materials",
  "keywords": ["4140 steel induction hardening", "4150 heat treatment Ludhiana", "alloy steel hardening Punjab"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/induction-heat-treatment-for-4140-and-4150-steel-grades",
  "inLanguage": "en"
};

const steelComparisonData = [
    { property: "Carbon (%)", steel4140: "0.38–0.43", steel4150: "0.48–0.53" },
    { property: "Chromium (%)", steel4140: "0.8–1.1", steel4150: "0.8–1.1" },
    { property: "Molybdenum (%)", steel4140: "0.15–0.25", steel4150: "0.15–0.25" },
    { property: "Tensile Strength (After Treatment)", steel4140: "850–1000 MPa", steel4150: "900–1100 MPa" },
    { property: "Machinability", steel4140: "Good", steel4150: "Moderate" },
    { property: "Hardenability", steel4140: "Excellent", steel4150: "Very high" },
];

const heatTreatmentParamsData = [
    { parameter: "Austenitizing Temperature", steel4140: "840–880°C", steel4150: "850–900°C" },
    { parameter: "Quenching Medium", steel4140: "8–12% Polymer Solution or Water", steel4150: "8–10% Polymer Solution" },
    { parameter: "Tempering Range", steel4140: "150–250°C", steel4150: "150–250°C" },
    { parameter: "Resulting Hardness (HRC)", steel4140: "55–60", steel4150: "56–62" },
    { parameter: "Case Depth", steel4140: "2.5–4.0 mm", steel4150: "3.0–5.0 mm" },
    { parameter: "Core Hardness (Post Treatment)", steel4140: "25–35 HRC", steel4150: "28–38 HRC" },
];

const applicationsData = [
    { industry: "Automotive", components: "Shafts, gears, axles", purpose: "Wear resistance and fatigue strength" },
    { industry: "Agriculture", components: "Tractor pins, spindles", purpose: "Load-bearing capability" },
    { industry: "Industrial Equipment", components: "Hydraulic rods, rollers", purpose: "Smooth surface and wear protection" },
    { industry: "Forging & Tooling", components: "Dies, punches", purpose: "Strength and crack resistance" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blog4140_4150');

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
                    <span className='truncate'>4140 & 4150 Steel Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Heat Treatment for 4140 & 4150 Steel Grades</h1>
                <p className="mt-4 text-xl text-muted-foreground">Detailed guide to hardening processes and ideal temperatures for 4140 and 4150 alloy steels.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="4140 and 4150 alloy steel bars"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: Why 4140 & 4150 Steels Are Industry Favorites</h2>
            <p>In Punjab’s rapidly growing industrial manufacturing sector — especially Ludhiana, known for its engineering and automotive components — 4140 and 4150 alloy steels are among the most widely used materials. These steels offer a perfect balance of strength, ductility, and wear resistance, making them ideal for shafts, gears, axles, bolts, and tooling components. However, to unlock their full mechanical potential, these steels require precision-controlled heat treatment — specifically induction hardening.</p>
            <p>At {SITE_NAME}, we specialize in 4140 steel induction hardening and 4150 heat treatment job work, serving automotive, machinery, and forging industries across Punjab and North India.</p>

            <h2 className="text-3xl font-bold mt-12">Understanding 4140 & 4150 Alloy Steels</h2>
            <p>Both 4140 and 4150 are chromium-molybdenum (Cr-Mo) alloy steels known for excellent toughness, strength, and fatigue resistance.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Property</TableHead>
                            <TableHead>4140 Steel</TableHead>
                            <TableHead>4150 Steel</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {steelComparisonData.map((row) => (
                            <TableRow key={row.property}>
                                <TableCell className="font-medium">{row.property}</TableCell>
                                <TableCell>{row.steel4140}</TableCell>
                                <TableCell>{row.steel4150}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p>The slightly higher carbon content in 4150 allows deeper hardening and higher achievable hardness levels.</p>

            <h2 className="text-3xl font-bold mt-12">Why Induction Hardening Is Ideal for 4140 & 4150 Steels</h2>
            <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><strong>Localized Hardening with Core Toughness:</strong> Induction hardening allows precise heating of specific areas like journals, gear teeth, or bearing surfaces — achieving high surface hardness while preserving the ductile core.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><strong>Deeper Hardness Penetration:</strong> These steels respond well to medium-frequency induction systems (10–30 kHz), enabling case depths of 2.5–5.0 mm depending on application.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><strong>Excellent Fatigue and Impact Strength:</strong> The combination of a hard case and a tough core ensures superior fatigue life — ideal for shafts, gears, and spindles that experience repetitive stress.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><strong>Distortion-Free Results:</strong> Controlled heating and quenching reduce dimensional changes, which is critical for precision-machined components.</div></li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Ideal Heat Treatment Parameters for 4140 & 4150 Steels</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                     <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>4140 Steel</TableHead>
                            <TableHead>4150 Steel</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {heatTreatmentParamsData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.steel4140}</TableCell>
                                <TableCell>{row.steel4150}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                 <p className="text-sm text-muted-foreground mt-2">Polymer quenching provides a more uniform cooling rate — essential for avoiding cracks or distortion.</p>
            </div>

            <h2 className="text-3xl font-bold mt-12">Induction Hardening Process for 4140 & 4150 Components</h2>
            <p>At {SITE_NAME}, Ludhiana, we follow a multi-stage controlled process for all alloy steel hardening operations:</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Pre-cleaning:</strong> Removal of oil, scale, and contaminants.</li>
                <li><strong>Coil Design:</strong> Custom-designed coils ensure even magnetic coupling for the part geometry.</li>
                <li><strong>Induction Heating:</strong> Localized heating to 850–900°C using medium-frequency systems.</li>
                <li><strong>Quenching:</strong> Immediate polymer or water spray cooling.</li>
                <li><strong>Tempering:</strong> Post-hardening tempering relieves stresses and enhances toughness.</li>
                <li><strong>Quality Testing:</strong> Hardness and case depth are verified for every batch.</li>
            </ol>
            <p><CheckCircle className="inline-block mr-2 h-5 w-5 text-green-500" /> We maintain ±10°C temperature control and ±0.1 sec dwell time accuracy for consistent results.</p>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Controlled Hardening = Long-Lasting Performance</h2>
            <p>Both 4140 and 4150 alloy steels deliver exceptional performance when heat-treated correctly. Through precise induction hardening, controlled case depth, and polymer quenching, we enhance their strength, fatigue resistance, dimensional accuracy, and service life. At {SITE_NAME}, Ludhiana, we combine engineering precision with metallurgical excellence to ensure your components perform reliably under demanding conditions.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Heat Treatment for 4140 & 4150?</h3>
                <p className="mt-2 text-muted-foreground">Partner with Punjab’s leading industrial heat treatment service provider. Contact {SITE_NAME} for your job work needs.</p>
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
