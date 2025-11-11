
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Zap, Shield, Flame } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Why Induction Hardening is Preferred Over Flame Hardening',
  description: 'Compare flame and induction hardening processes to see why induction is the superior choice for modern industries.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Why Induction Hardening is Preferred Over Flame Hardening",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Processes",
  "keywords": ["induction hardening vs flame hardening", "industrial hardening process Punjab", "heat treatment comparison Ludhiana"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/induction-hardening-vs-flame-hardening",
  "inLanguage": "en"
};

const comparisonData = [
    { aspect: "Heat Source", induction: "Electromagnetic Field", flame: "Oxy-Fuel Flame" },
    { aspect: "Heating Speed", induction: "2–10 seconds", flame: "1–5 minutes" },
    { aspect: "Surface Control", induction: "Precise (±0.1 mm)", flame: "Limited" },
    { aspect: "Temperature Monitoring", induction: "Digital / Automated", flame: "Manual" },
    { aspect: "Energy Efficiency", induction: "85–90%", flame: "40–50%" },
    { aspect: "Distortion Risk", induction: "Very Low", flame: "Moderate to High" },
    { aspect: "Environmental Impact", induction: "Clean / No Emissions", flame: "Polluting" },
    { aspect: "Repeatability", induction: "Excellent", flame: "Inconsistent" },
    { aspect: "Case Depth Uniformity", induction: "Highly Controllable", flame: "Variable" },
];

const caseStudyData = [
    { parameter: "Cycle Time", flame: "6 minutes", induction: "30 seconds" },
    { parameter: "Surface Hardness", flame: "50–54 HRC", induction: "58–60 HRC" },
    { parameter: "Distortion", flame: "Moderate", induction: "Minimal" },
    { parameter: "Repeatability", flame: "Inconsistent", induction: "Excellent" },
    { parameter: "Energy Consumption", flame: "High", induction: "40% Lower" },
];


export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogFlameVsInduction');

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
                    <span className='truncate'>Induction vs Flame Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Why Induction Hardening is Preferred Over Flame Hardening</h1>
                <p className="mt-4 text-xl text-muted-foreground">In the world of industrial heat treatment, the demand for precision, consistency, and energy efficiency has led many manufacturers to replace traditional flame hardening with induction hardening.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Comparison of induction hardening coil and flame hardening torch"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>At {SITE_NAME}, Ludhiana, we specialize in modern induction hardening services for automotive, agricultural, and industrial components across Punjab — helping manufacturers move beyond conventional methods.</p>
            <p className='font-semibold text-foreground'><Zap className="inline-block mr-2 h-5 w-5 text-primary" />Induction hardening delivers cleaner, faster, and more accurate results than flame hardening — the preferred choice for modern industries.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Is Flame Hardening?</h2>
            <p>Flame hardening is a traditional surface heat treatment process that uses oxy-acetylene or oxy-gas flames to heat a specific area of the metal surface. Once the surface reaches the desired temperature (usually between 850°C and 950°C), it is rapidly quenched using water or oil.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Induction Hardening?</h2>
            <p>Induction hardening uses electromagnetic induction to heat metal surfaces without direct contact. A coil generates alternating magnetic fields, inducing heat only in the desired area. The surface is then quenched using water or polymer, producing a hard martensitic layer while keeping the inner core tough.</p>

            <h2 className="text-3xl font-bold mt-12">Key Differences Between Induction and Flame Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Induction Hardening</TableHead>
                            <TableHead>Flame Hardening</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map((row) => (
                            <TableRow key={row.aspect}>
                                <TableCell className="font-medium">{row.aspect}</TableCell>
                                <TableCell>{row.induction}</TableCell>
                                <TableCell>{row.flame}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Advantages of Induction Hardening Over Flame Hardening</h2>
            <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Superior Precision:</span> Induction hardening provides targeted heating only to the critical wear zones, maintaining dimensional accuracy.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">High Energy Efficiency:</span> Induction systems convert up to 90% of input energy into usable heat, compared to 40–50% in flame systems.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Shorter Cycle Time:</span> Parts can be hardened in seconds, not minutes, improving throughput and reducing costs.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Cleaner & Safer:</span> No flames, fumes, or combustion gases, making it environmentally friendly and operator-safe.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Automated & Repeatable:</span> Computer-controlled parameters ensure every part receives identical heat treatment.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Reduced Distortion:</span> Localized heating minimizes warping — a major drawback of flame hardening.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Perfect for Complex Shapes:</span> Custom coils can precisely heat gears, shafts, and irregular profiles.</div></li>
            </ul>
            
            <h2 className="text-3xl font-bold mt-12">Case Study: Automotive Shaft Hardening (Flame vs Induction)</h2>
             <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Aspect</TableHead>
                            <TableHead>Flame Hardening</TableHead>
                            <TableHead>Induction Hardening</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {caseStudyData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.flame}</TableCell>
                                <TableCell>{row.induction}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p><strong>Result:</strong> After switching to induction hardening, the client reported a 25% increase in part life and 30% reduction in energy use.</p>

            <h2 className="text-3xl font-bold mt-12">Conclusion: The Clear Winner — Induction Hardening</h2>
            <p>In the debate of induction hardening vs flame hardening, the verdict is clear. Induction hardening offers unmatched precision, speed, and energy efficiency, making it the preferred choice for modern automotive and industrial applications.</p>
            <p>At {SITE_NAME}, Ludhiana, we combine advanced machinery and metallurgical expertise to deliver superior heat treatment services trusted by manufacturers across Punjab and North India.</p>

            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Upgrade Your Heat Treatment Process Today</h3>
                <p className="mt-2 text-muted-foreground">Get in touch with {SITE_NAME}, Ludhiana’s trusted name in industrial induction hardening and heat treatment job work.</p>
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
