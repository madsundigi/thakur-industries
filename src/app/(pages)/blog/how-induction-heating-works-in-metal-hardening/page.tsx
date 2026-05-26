
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
  title: 'How Induction Heating Works in Metal Hardening',
  description: 'A detailed explanation of electromagnetic heating used in industrial hardening processes.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How Induction Heating Works in Metal Hardening",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Processes",
  "keywords": ["induction heating working principle", "electromagnetic heat treatment", "industrial induction process"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/how-induction-heating-works-in-metal-hardening",
  "inLanguage": "en"
};

const frequencyData = [
    { frequency: "100–400 kHz (High)", depth: "0.5–2.0", application: "Gear teeth, tools, small parts" },
    { frequency: "10–50 kHz (Medium)", depth: "2–5", application: "Shafts, axles, crankshafts" },
    { frequency: "1–10 kHz (Low)", depth: "5–10", application: "Large forgings, rollers" }
];

const comparisonData = [
    { parameter: "Heating Method", induction: "Electromagnetic", conventional: "Convection / Radiation" },
    { parameter: "Heating Speed", induction: "Seconds", conventional: "Minutes to Hours" },
    { parameter: "Energy Efficiency", induction: "85–95%", conventional: "30–40%" },
    { parameter: "Heat Area", induction: "Localized", conventional: "Whole component" },
    { parameter: "Emissions", induction: "None", conventional: "High" },
    { parameter: "Distortion Risk", induction: "Low", conventional: "High" },
    { parameter: "Control", induction: "Precise (digital)", conventional: "Manual or limited" },
];


export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogInductionHeatingWorks');

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
                    <span className='truncate'>How Induction Heating Works</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">How Induction Heating Works in Metal Hardening</h1>
                <p className="mt-4 text-xl text-muted-foreground">A detailed explanation of electromagnetic heating used in industrial hardening processes.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Diagram showing the working principle of induction heating"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">Introduction: The Science Behind Induction Heating</h2>
            <p>In modern manufacturing, induction heating has revolutionized the way metals are hardened, tempered, and treated. Unlike conventional furnaces that heat the entire workpiece and surrounding air, induction systems heat the metal directly — from within. At {SITE_NAME}, Ludhiana, we use electromagnetic induction to heat and harden components like shafts, gears, and forgings with pinpoint accuracy and energy efficiency.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Is Induction Heating?</h2>
            <p>Induction heating is a non-contact process that uses electromagnetic fields to generate heat inside an electrically conductive material — typically steel or other ferrous alloys. When a metal part is placed inside a coil carrying alternating current (AC), the changing current produces a rapidly alternating magnetic field. This magnetic field induces eddy currents within the metal, and the resistance of the metal to these currents causes localized heating.</p>

            <h2 className="text-3xl font-bold mt-12">The Working Principle of Induction Heating</h2>
            <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
                <li><strong>Alternating Current (AC) Generation:</strong> A high-frequency AC current is passed through a copper coil, creating an oscillating magnetic field around it.</li>
                <li><strong>Electromagnetic Induction:</strong> When a metal part is placed in this field, eddy currents are induced inside the metal’s surface. These currents flow in closed loops, similar to small electric circuits.</li>
                <li><strong>Joule Heating (Resistance Heating):</strong> As these eddy currents encounter the electrical resistance of the metal, they generate Joule heat (I²R losses). This heat increases the temperature of the surface layer of the metal.</li>
                <li><strong>Skin Effect:</strong> The induced currents are concentrated near the surface of the metal — this is known as the skin effect. By adjusting the frequency of the current, we control how deep the heat penetrates.</li>
            </ol>

            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Frequency Range</TableHead>
                            <TableHead>Approx. Case Depth (mm)</TableHead>
                            <TableHead>Common Applications</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {frequencyData.map((row) => (
                            <TableRow key={row.frequency}>
                                <TableCell className="font-medium">{row.frequency}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                                <TableCell>{row.application}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Why Induction Heating Is Ideal for Metal Hardening</h2>
             <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><span className="font-semibold text-foreground">Localized heating:</span> Only specific areas are heated, preventing distortion.</li>
                <li><span className="font-semibold text-foreground">Rapid temperature rise:</span> Reaches hardening temperature within seconds.</li>
                <li><span className="font-semibold text-foreground">Precise control:</span> Easy to manage heating time, frequency, and depth.</li>
                <li><span className="font-semibold text-foreground">Energy efficiency:</span> 85–95% energy transfer directly into the part.</li>
                <li><span className="font-semibold text-foreground">Environmentally clean:</span> No flame, no smoke, no emissions.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Induction Heating vs Traditional Furnace Heating</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Induction Heating</TableHead>
                            <TableHead>Conventional Furnace</TableHead>
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

            <h2 className="text-3xl font-bold mt-12">Conclusion: Induction Heating — The Future of Metal Hardening</h2>
            <p>Understanding the induction heating working principle helps industries appreciate its speed, efficiency, and precision. By using electromagnetic energy to directly heat metals, it eliminates inefficiencies found in older methods, making it the preferred hardening technique for modern engineering. {SITE_NAME}, with its advanced induction systems and metallurgical expertise, provides consistent, distortion-free heat treatment solutions to industries across Ludhiana and Punjab.</p>

            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Induction Heat Treatment in Punjab?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, Ludhiana for expert induction heating and hardening job work for automotive and industrial components.</p>
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
