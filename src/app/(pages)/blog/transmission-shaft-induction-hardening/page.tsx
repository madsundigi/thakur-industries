
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
  title: 'Transmission Shaft Induction Hardening Services in Punjab',
  description: 'Learn how induction hardening increases the strength and fatigue resistance of transmission shafts.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Transmission Shaft Induction Hardening Services in Punjab",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Automotive Heat Treatment",
  "keywords": ["transmission shaft hardening", "automotive shaft heat treatment Punjab"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/transmission-shaft-induction-hardening",
  "inLanguage": "en"
};

const hardnessData = [
    { material: "EN8 / C45", hardness: "50–55", depth: "1.5–3.0", quench: "Water" },
    { material: "EN19 / 4140", hardness: "54–58", depth: "2.0–3.5", quench: "Polymer" },
    { material: "EN24 / 4340", hardness: "56–60", depth: "2.5–4.0", quench: "Polymer" },
    { material: "20MnCr5", hardness: "58–62", depth: "0.8–1.2", quench: "Polymer / Water" },
];

const shaftTypes = [
    "Main transmission shafts",
    "Input and output shafts",
    "Counter shafts",
    "Drive shafts",
    "PTO shafts for tractors",
    "Intermediate and gear shafts"
];

const whyInductionData = [
    { feature: "Localized heating", benefit: "Only the load-bearing surface is hardened, preserving core toughness" },
    { feature: "Fast processing", benefit: "Rapid heating and quenching — ideal for production lines" },
    { feature: "Precise control", benefit: "Uniform hardness and case depth" },
    { feature: "Energy efficiency", benefit: "30–50% lower energy use compared to conventional furnaces" },
    { feature: "Low distortion", benefit: "Dimensional accuracy maintained even in long shafts" }
];


export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogTransmissionShaft');

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
                    <span className='truncate'>Transmission Shaft Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Transmission Shaft Induction Hardening Services in Punjab</h1>
                <p className="mt-4 text-xl text-muted-foreground">Learn how induction hardening increases the strength and fatigue resistance of transmission shafts.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Transmission Shaft Induction Hardening Process"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: Strength Where It Matters the Most</h2>
            <p>In any vehicle or machine, the transmission shaft is one of the most critical components. It transfers torque and rotational power between the engine, gearbox, and wheels — all while withstanding enormous stresses, cyclic loading, and friction. For this reason, induction hardening has become the preferred method of enhancing surface strength, wear resistance, and fatigue life of transmission shafts used in automotive, tractor, and industrial applications.</p>
            <p>At {SITE_NAME}, Ludhiana, we specialize in precision-controlled transmission shaft hardening, offering customized job work for OEMs and component manufacturers across Punjab, ensuring consistent performance and dimensional accuracy.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Transmission Shaft Hardening?</h2>
            <p>Transmission shaft hardening is a localized surface heat treatment that strengthens the outer layer of the shaft while keeping the core tough and ductile. In induction hardening, an alternating electromagnetic field heats the surface of the shaft to around 850–950°C, transforming it into austenite. The part is then rapidly quenched (usually with polymer or water), forming martensite — a high-strength structure that resists wear and fatigue.</p>
            <p className="font-semibold text-foreground"><Zap className="inline-block mr-2 h-5 w-5 text-primary" /> The result: A hardened surface (up to 58–60 HRC) with a tough inner core — ideal for torque transmission, bending, and rotational stresses.</p>

            <h2 className="text-3xl font-bold mt-12">Step-by-Step Induction Hardening Process for Shafts</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Pre-cleaning & Inspection:</strong> The shaft is cleaned to remove oil, rust, or scale for uniform heating.</li>
                <li><strong>Induction Heating:</strong> A custom-designed coil surrounds the shaft and heats it through electromagnetic induction.</li>
                <li><strong>Controlled Quenching:</strong> The heated surface is cooled using polymer or water quenching, converting the surface to martensite.</li>
                <li><strong>Tempering (Optional):</strong> To relieve internal stresses and improve ductility, shafts may be tempered at 150–250°C.</li>
                <li><strong>Hardness & Case Depth Testing:</strong> The part undergoes Rockwell (HRC) and microhardness testing to ensure desired hardness and uniformity.</li>
            </ol>
            
            <h2 className="text-3xl font-bold mt-12">Why Choose Induction Hardening for Transmission Shafts?</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Feature</TableHead>
                            <TableHead>Benefit for Transmission Shafts</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {whyInductionData.map((row) => (
                            <TableRow key={row.feature}>
                                <TableCell className="font-medium">{row.feature}</TableCell>
                                <TableCell>{row.benefit}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p>Induction hardening delivers repeatable and distortion-free results, making it ideal for high-precision automotive components.</p>
            
            <h2 className="text-3xl font-bold mt-12">Typical Hardness & Case Depth Achieved</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Surface Hardness (HRC)</TableHead>
                            <TableHead>Case Depth (mm)</TableHead>
                            <TableHead>Quenching Medium</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {hardnessData.map((row) => (
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

            <h2 className="text-3xl font-bold mt-12">Common Types of Transmission Shafts Hardened</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {shaftTypes.map(type => <li key={type}>{type}</li>)}
            </ul>
            <p>Each part is treated to achieve uniform hardness and fatigue strength while ensuring zero distortion and perfect concentricity.</p>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Powering Precision with Induction Hardening</h2>
            <p>In today’s competitive automotive market, transmission shafts must endure extreme torque and repetitive stress. Through precision induction hardening, {SITE_NAME} helps manufacturers achieve superior surface hardness, high fatigue resistance, and perfect geometry retention. For OEMs and machining units in Ludhiana and across Punjab, we deliver dependable, distortion-free transmission shaft hardening that keeps machinery running longer and stronger.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Partner with {SITE_NAME} for Transmission Shaft Hardening</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, Ludhiana for specialized induction hardening job work for automotive and transmission components.</p>
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
