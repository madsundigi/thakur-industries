
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
  title: 'Preventing Soft Spots in Induction Hardening',
  description: 'Understand causes of soft spots in induction hardening and how to ensure uniform surface hardness for industrial parts.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Preventing Soft Spots in Induction Hardening",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Quality Control",
  "keywords": ["induction hardening defects", "surface uniformity Punjab", "quality heat treatment Ludhiana"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/preventing-soft-spots-in-induction-hardening",
  "inLanguage": "en"
};

const causesData = [
    { cause: "Improper Coil Design or Alignment", solution: "Use custom-designed coils calibrated for each component’s geometry to ensure balanced heat distribution." },
    { cause: "Inconsistent Power or Frequency", solution: "Employ PLC-controlled power regulation to ensure consistent electromagnetic penetration." },
    { cause: "Surface Contamination or Oxidation", solution: "Perform pre-cleaning and degreasing of every component before induction treatment." },
    { cause: "Non-Uniform Quenching", solution: "Use automated polymer and water quenching systems with controlled flow pressure for consistent cooling coverage." },
    { cause: "Material Composition Variability", solution: "Conduct material certification and testing before processing to verify steel grades." },
    { cause: "Improper Tempering or Post-Heat Stress", solution: "Apply precision tempering to stabilize the microstructure and eliminate stress gradients." }
];

const bestPracticesData = [
    { step: "Pre-Cleaning", action: "Remove oil, dust, oxide", purpose: "Uniform heating" },
    { step: "Coil Calibration", action: "Set distance & symmetry", purpose: "Balanced heat coverage" },
    { step: "Frequency Optimization", action: "Match to material grade", purpose: "Accurate case depth" },
    { step: "Controlled Quenching", action: "Maintain flow & pressure", purpose: "Even cooling" },
    { step: "Hardness Testing", action: "Verify 100% coverage", purpose: "Detect soft spots early" },
];


export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogSoftSpots');

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
                    <span className='truncate'>Preventing Soft Spots</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Preventing Soft Spots in Induction Hardening</h1>
                <p className="mt-4 text-xl text-muted-foreground">Understand the causes of soft spots in induction hardening and how to ensure uniform surface hardness for industrial parts.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="A magnified view of a metal surface showing uniform hardness versus one with soft spots."
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: The Challenge of Consistent Hardness</h2>
            <p>In induction hardening, achieving uniform hardness across every treated surface is the key to a high-quality result. However, one of the most common quality issues faced by heat treatment facilities and manufacturers is the formation of soft spots — localized areas where hardness is lower than the surrounding region.</p>
            <p>At {SITE_NAME}, we specialize in precision induction induction heat treatment with a focus on eliminating defects like soft spots, ensuring consistent surface hardness, repeatability, and quality control across every component.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Are Soft Spots in Induction Hardening?</h2>
            <p>Soft spots are localized regions of reduced hardness on a metal surface after the induction hardening process. They occur when heating, quenching, or metallurgical transformation doesn’t happen uniformly. These imperfections can reduce the wear resistance, fatigue strength, and load-bearing capacity of a component, compromising the reliability of gears, shafts, axles, and other critical parts.</p>

            <h2 className="text-3xl font-bold mt-12">Top Causes of Soft Spots and How to Prevent Them</h2>
            <div className="my-8 overflow-x-auto">
              <Table>
                  <TableHeader>
                      <TableRow>
                          <TableHead>Cause</TableHead>
                          <TableHead>Solution at {SITE_NAME}</TableHead>
                      </TableRow>
                  </TableHeader>
                  <TableBody>
                      {causesData.map((row, index) => (
                          <TableRow key={index}>
                              <TableCell className="font-medium">{row.cause}</TableCell>
                              <TableCell>{row.solution}</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">How {SITE_NAME} Prevents Soft Spots</h2>
            <p>At {SITE_NAME}, Ludhiana, we combine advanced equipment and process discipline to eliminate induction hardening defects. Our quality control practices include:</p>
            <ul className='list-disc list-inside space-y-2 text-muted-foreground my-4'>
                <li>Computerized temperature monitoring during heating cycles</li>
                <li>Real-time coil-to-surface distance control</li>
                <li>Digital quenching flow meters for pressure consistency</li>
                <li>Case depth verification (metallographic inspection)</li>
                <li>Hardness testing (Rockwell, Vickers, and microhardness)</li>
            </ul>
             <p className="font-semibold text-foreground">Every process parameter is logged digitally for traceability and quality audits.</p>


            <h2 className="text-3xl font-bold mt-12">Case Study: Eliminating Soft Spots in Automotive Gear Shafts</h2>
            <p>An automotive OEM in Ludhiana faced non-uniform hardness (soft zones near spline ends) in an EN19 Gear Shaft. Our analysis found inconsistent heating due to coil misalignment and uneven quenching flow. By redesigning the coil geometry, adjusting quenching spray angles, and calibrating the system for a consistent 20 kHz frequency, we achieved uniform surface hardness of 58.5–59.5 HRC and eliminated all soft spots, improving component life by 30%.</p>

            <h2 className="text-3xl font-bold mt-12">Best Practices to Prevent Induction Hardening Defects</h2>
            <div className="my-8 overflow-x-auto">
              <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Step</TableHead>
                        <TableHead>Action</TableHead>
                        <TableHead>Purpose</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bestPracticesData.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell className='font-medium'>{row.step}</TableCell>
                            <TableCell>{row.action}</TableCell>
                            <TableCell>{row.purpose}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: From Soft Spots to Strong Surfaces</h2>
            <p>Preventing soft spots is not just about avoiding defects — it’s about ensuring reliability, strength, and quality consistency in every component. At {SITE_NAME}, our blend of technology, metallurgy, and process control guarantees surface uniformity across every job — from automotive gears to heavy machinery shafts.</p>

            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Reliable, Defect-Free Induction Hardening?</h3>
                <p className="mt-2 text-muted-foreground">Get in touch with {SITE_NAME}, the specialists in precision heat treatment and quality hardening services in Ludhiana.</p>
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
