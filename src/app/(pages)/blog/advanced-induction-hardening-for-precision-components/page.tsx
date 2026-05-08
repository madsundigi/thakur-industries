
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Advanced Induction Hardening for Precision Components',
  description: 'Discover how advanced induction hardening enhances precision component reliability and performance in Punjab industries.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Advanced Induction Hardening for Precision Components",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Industrial Heat Treatment",
  "keywords": ["precision induction hardening", "industrial heat treatment Punjab", "component hardening Ludhiana"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/advanced-induction-hardening-for-precision-components",
  "inLanguage": "en"
};

const benefitsData = [
    { feature: "Precision control", advantage: "Achieves exact case depth and hardness" },
    { feature: "Localized heating", advantage: "Prevents distortion and saves energy" },
    { feature: "Faster process time", advantage: "Ideal for batch and continuous production" },
    { feature: "Environmentally clean", advantage: "No open flame or harmful emissions" },
    { feature: "Repeatable results", advantage: "Perfect for OEM and export-grade consistency" },
    { feature: "Adaptable", advantage: "Works on various steel grades including EN8, EN19, EN24, and 4340" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'serviceInductionHardening');

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
                    <span className='truncate'>Advanced Induction Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Advanced Induction Hardening for Precision Components</h1>
                <p className="mt-4 text-xl text-muted-foreground">Discover how advanced induction hardening enhances precision component reliability and performance in Punjab industries.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Advanced Induction Hardening for Precision Components"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: The Evolution of Precision Component Hardening</h2>
            <p>In today’s fast-moving manufacturing world, precision and durability are everything. From automotive gears to industrial shafts, every component must meet strict performance standards. That’s where advanced induction hardening comes into play — a modern, efficient, and highly accurate surface heat treatment process that enhances the mechanical strength and wear resistance of precision components.</p>
            <p>At {SITE_NAME}, Ludhiana, we specialize in precision induction hardening services designed for OEMs, automotive manufacturers, and heavy machinery industries across Punjab. Our process ensures each component receives the exact hardness, depth, and structural consistency it needs to perform flawlessly in real-world conditions.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Precision Induction Hardening?</h2>
            <p>Precision induction hardening is a localized heat treatment technique where a component’s surface is rapidly heated using electromagnetic induction and then immediately quenched. This creates a hardened outer layer (case) while maintaining a tough and ductile core — the perfect combination for parts that endure continuous stress, torque, and friction.</p>
            <p>Unlike conventional methods like flame or furnace hardening, induction hardening is:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Highly controllable — for exact heating zones.</li>
                <li>Faster and cleaner — with minimal oxidation.</li>
                <li>Consistent and repeatable — ideal for batch and OEM production.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">How the Advanced Induction Hardening Process Works</h2>
            <p>At {SITE_NAME}, we employ computer-controlled induction systems that ensure accuracy, repeatability, and zero deviation from client specifications. Here’s a simplified breakdown of our precision induction hardening process:</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Component Preparation:</strong> Parts are thoroughly cleaned and inspected for geometry, size, and metallurgical composition.</li>
                <li><strong>Induction Heating:</strong> An induction coil generates a magnetic field around the component. This induces eddy currents that heat only the surface region to the desired temperature (typically 850°C–950°C).</li>
                <li><strong>Quenching:</strong> Immediately after heating, the component is quenched using water or polymer-based solutions to rapidly cool the surface. This transforms the microstructure into martensite, achieving hardness values up to 60 HRC.</li>
                <li><strong>Tempering (if required):</strong> To relieve residual stress and improve toughness, parts may undergo tempering for a controlled balance between hardness and ductility.</li>
            </ol>
            <p>Every stage is digitally monitored for temperature, frequency, and dwell time — ensuring precision without compromise.</p>
            
            <h2 className="text-3xl font-bold mt-12">Applications: Where Precision Hardening Makes the Difference</h2>
            <p>Precision induction hardening is widely used across automotive, aerospace, toolmaking, and heavy machinery sectors in Punjab and beyond. Commonly hardened components include:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Shafts and axles</li>
                <li>Gears and pinions</li>
                <li>Spindles and rollers</li>
                <li>Camshafts and crankshafts</li>
                <li>Machine tools and dies</li>
                <li>Transmission components</li>
            </ul>
            <p>Each part benefits from increased surface hardness, reduced wear, and extended fatigue life, ensuring longer equipment uptime and lower maintenance costs.</p>

            <h2 className="text-3xl font-bold mt-12">Benefits of Advanced Induction Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Feature</TableHead>
                            <TableHead>Advantage</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {benefitsData.map((row) => (
                            <TableRow key={row.feature}>
                                <TableCell className="font-medium">{row.feature}</TableCell>
                                <TableCell>{row.advantage}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Case Study: Precision Shaft Hardening for an Automotive OEM</h2>
            <p>An automotive component manufacturer in Ludhiana required surface hardening for a drive shaft made of EN19 material with a target surface hardness of 58 HRC and a case depth of 2.5 mm. Using medium-frequency induction hardening with polymer quenching, we achieved:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Consistent case depth of 2.48–2.52 mm</li>
                <li>Surface hardness of 58 HRC</li>
                <li>40% improvement in fatigue life</li>
            </ul>
            <p>The batch had 100% acceptance in the OEM quality audit.</p>

            <h2 className="text-3xl font-bold mt-12">Why {SITE_NAME} Leads in Precision Hardening</h2>
            <p>As one of Punjab’s most trusted industrial heat treatment companies, {SITE_NAME} stands out with modern infrastructure, custom coil designs, and experienced metallurgical engineers who understand both science and performance. Our core strengths include:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Advanced PLC-controlled induction machines</li>
                <li>In-house hardness and metallography testing</li>
                <li>Custom quenching systems (polymer and water)</li>
                <li>ISO-standard process validation and reporting</li>
                <li>Precision up to ±0.05 mm case depth control</li>
            </ul>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: The Future of Precision Heat Treatment in Punjab</h2>
            <p>As manufacturing evolves, precision induction hardening continues to redefine quality standards for industrial components in Punjab. It combines the science of metallurgy with the art of control, producing components that not only meet OEM expectations but exceed them in durability and performance. At {SITE_NAME}, Ludhiana, our commitment to technological excellence and process precision ensures that your components perform better, last longer, and deliver real value to your customers.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Precision Induction Hardening?</h3>
                <p className="mt-2 text-muted-foreground">Get in touch with {SITE_NAME} for OEM-grade heat treatment solutions.</p>
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
