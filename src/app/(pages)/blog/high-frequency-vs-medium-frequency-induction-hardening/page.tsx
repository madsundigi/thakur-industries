
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Zap, Shield, Thermometer } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'High-Frequency vs Medium-Frequency Induction Hardening Systems',
  description: 'Compare frequency systems and their influence on case depth, heating rate, and metallurgical structure.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "High-Frequency vs Medium-Frequency Induction Hardening Systems",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Processes",
  "keywords": ["high frequency vs medium frequency induction", "induction heating systems Punjab", "case depth control"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/high-frequency-vs-medium-frequency-induction-hardening",
  "inLanguage": "en"
};

const frequencyRanges = [
    { type: "High Frequency (HF)", range: "100–500 kHz", depth: "0.5 – 1.5 mm", application: "Gears, small parts, thin components" },
    { type: "Medium Frequency (MF)", range: "3–30 kHz", depth: "2 – 6 mm", application: "Shafts, axles, spindles, heavy parts" }
];

const frequencyComparisonData = [
    { parameter: "Frequency Range", high: "100–500 kHz", medium: "3–30 kHz" },
    { parameter: "Heat Penetration Depth", high: "0.5–1.5 mm", medium: "2–6 mm" },
    { parameter: "Best For", high: "Small gears, pins, tools", medium: "Shafts, axles, forged parts" },
    { parameter: "Heating Speed", high: "Very fast", medium: "Moderate" },
    { parameter: "Surface Finish", high: "Excellent", medium: "Good" },
    { parameter: "Energy Efficiency", high: "High for thin parts", medium: "High for thick parts" },
    { parameter: "Distortion Risk", high: "Very low", medium: "Low" }
];

const componentExamples = [
    { component: "Small gears, sprockets", frequency: "High Frequency", reason: "Shallow hardening, no distortion" },
    { component: "Automotive shafts, axles", frequency: "Medium Frequency", reason: "Deeper hardening for wear zones" },
    { component: "Camshafts, crankshafts", frequency: "Medium Frequency", reason: "Strong case with ductile core" },
    { component: "Tool edges, punches", frequency: "High Frequency", reason: "Quick surface hardening" },
    { component: "Forged spindles", frequency: "Medium Frequency", reason: "Controlled case depth and strength" },
];

const shaftComparison = [
    { parameter: "Case Depth", high: "1.2 mm", medium: "3.8 mm" },
    { parameter: "Surface Hardness", high: "61 HRC", medium: "58 HRC" },
    { parameter: "Distortion", high: "Negligible", medium: "Negligible" },
    { parameter: "Fatigue Life", high: "Moderate", medium: "High" },
    { parameter: "Cost", high: "Slightly higher", medium: "Optimized" },
];


export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogFrequencyComparison');

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
                    <span className='truncate'>High-Frequency vs Medium-Frequency</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">High-Frequency vs Medium-Frequency Induction Hardening Systems</h1>
                <p className="mt-4 text-xl text-muted-foreground">Compare frequency systems and their influence on case depth, heating rate, and metallurgical structure.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="High vs Medium Frequency Induction Hardening"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">Introduction: Frequency — The Backbone of Induction Hardening</h2>
            <p>Every induction hardening process relies on one crucial factor: frequency. Whether you are hardening a gear tooth, a shaft, or a large industrial roller, the frequency of the induction system determines how deep and how fast the heat penetrates the metal surface.</p>
            <p>At {SITE_NAME}, we use both high-frequency (HF) and medium-frequency (MF) induction systems to meet a wide range of industrial hardening requirements — from fine gear teeth to heavy shafts and axles.</p>

            <h2 className="text-3xl font-bold mt-12">Understanding Induction Frequency in Simple Terms</h2>
            <p>Frequency refers to how fast the current alternates in the induction coil. This alternating current produces a magnetic field that induces eddy currents in the metal surface, generating heat. The depth to which these currents penetrate — known as penetration depth or skin effect — depends on the frequency.</p>
            <Table className="my-8">
                <TableHeader>
                    <TableRow>
                        <TableHead>Type of Frequency</TableHead>
                        <TableHead>Range (kHz)</TableHead>
                        <TableHead>Typical Penetration Depth</TableHead>
                        <TableHead>Application</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {frequencyRanges.map(row => (
                        <TableRow key={row.type}>
                            <TableCell>{row.type}</TableCell>
                            <TableCell>{row.range}</TableCell>
                            <TableCell>{row.depth}</TableCell>
                            <TableCell>{row.application}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <p className='font-semibold'>Higher frequency = shallower heat penetration; lower frequency = deeper heat penetration.</p>

            <h2 className="text-3xl font-bold mt-12">High-Frequency Induction Systems: Precision for Surface Hardening</h2>
            <p>High-frequency induction systems are best suited for components requiring thin, hard surface layers and minimal distortion.</p>
            <h3 className="text-2xl font-semibold mt-6">Applications:</h3>
            <ul className="list-disc list-inside text-muted-foreground">
                <li>Gear teeth</li>
                <li>Cam lobes</li>
                <li>Small shafts or pins</li>
                <li>Bearing races</li>
                <li>Tool edges</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6">Advantages:</h3>
            <ul className="list-disc list-inside text-muted-foreground">
                <li>Precise, localized heating</li>
                <li>Excellent surface finish</li>
                <li>Short heating cycles (milliseconds)</li>
                <li>Ideal for small components with complex geometry</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Medium-Frequency Induction Systems: Power for Deeper Hardening</h2>
            <p>Medium-frequency systems are the industry standard for shaft, axle, and gear hardening where deeper case depth and uniform hardness are required.</p>
             <h3 className="text-2xl font-semibold mt-6">Applications:</h3>
            <ul className="list-disc list-inside text-muted-foreground">
                <li>Transmission shafts</li>
                <li>Automotive axles</li>
                <li>Spindles and rollers</li>
                <li>Forged components</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6">Advantages:</h3>
            <ul className="list-disc list-inside text-muted-foreground">
                <li>Deeper heat penetration (up to 6 mm)</li>
                <li>Uniform hardness distribution</li>
                <li>Suitable for large and heavy parts</li>
                <li>Lower distortion risk</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Key Differences Between High and Medium Frequency Induction Systems</h2>
            <Table className="my-8">
                <TableHeader>
                    <TableRow>
                        <TableHead>Parameter</TableHead>
                        <TableHead>High-Frequency System</TableHead>
                        <TableHead>Medium-Frequency System</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {frequencyComparisonData.map(row => (
                        <TableRow key={row.parameter}>
                            <TableCell>{row.parameter}</TableCell>
                            <TableCell>{row.high}</TableCell>
                            <TableCell>{row.medium}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <p className='font-semibold'>High frequency gives control and accuracy; medium frequency offers depth and strength.</p>

            <h2 className="text-3xl font-bold mt-12">Choosing the Right System for Your Component</h2>
            <Table className="my-8">
                <TableHeader>
                    <TableRow>
                        <TableHead>Component Type</TableHead>
                        <TableHead>Recommended Frequency</TableHead>
                        <TableHead>Reason</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {componentExamples.map(row => (
                        <TableRow key={row.component}>
                            <TableCell>{row.component}</TableCell>
                            <TableCell>{row.frequency}</TableCell>
                            <TableCell>{row.reason}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: The Right Frequency for the Right Part</h2>
            <p>Both high-frequency and medium-frequency induction systems have distinct advantages — the key is selecting the right one for your component geometry and load conditions. At {SITE_NAME}, Punjab, we bring decades of expertise in frequency selection, case depth control, and metallurgical optimization, ensuring consistent hardness, minimum distortion, and maximum component life.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Custom Frequency Hardening Solutions?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} — specialists in high-frequency and medium-frequency heat treatment for industrial and automotive components.</p>
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
