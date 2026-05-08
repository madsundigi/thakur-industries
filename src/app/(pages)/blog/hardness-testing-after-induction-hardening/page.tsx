
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Shield } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Role of Hardness Testing in Quality Control',
  description: 'Understand the importance of hardness testing for validating induction hardening results and quality assurance.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Role of Hardness Testing in Quality Control",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Quality Control",
  "keywords": ["hardness testing quality control", "Rockwell test Punjab", "case depth verification Ludhiana"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/hardness-testing-after-induction-hardening",
  "inLanguage": "en"
};

const hardnessMethods = [
    { method: "Rockwell Hardness Test", use: "Quick, accurate, widely used for finished components.", scale: "C Scale (HRC) & B Scale (HRB)" },
    { method: "Vickers Hardness Test", use: "For smaller or thin components requiring precise measurement.", scale: "HV" },
    { method: "Microhardness / Case Depth Testing", use: "To determine the thickness of the hardened layer.", scale: "HV with light loads" }
];

const qcParams = [
    { parameter: "Surface Hardness", purpose: "To verify strength and wear resistance", method: "Rockwell HRC" },
    { parameter: "Case Depth", purpose: "To ensure sufficient hardened zone", method: "Microhardness profiling" },
    { parameter: "Core Hardness", purpose: "To confirm ductility and support", method: "Rockwell HRB" },
    { parameter: "Hardness Uniformity", purpose: "To detect over/under-heating", method: "Multi-point testing" },
    { parameter: "Heat-Affected Zone Integrity", purpose: "To check metallurgical structure", method: "Microstructural analysis" }
];

const caseStudyResults = {
    surfaceHardness: "57 HRC",
    caseDepth: "2.05 mm",
    uniformity: "±0.05 mm"
};


export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogHardnessTesting');

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
                    <span className='truncate'>Role of Hardness Testing in Quality Control</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Role of Hardness Testing in Quality Control</h1>
                <p className="mt-4 text-xl text-muted-foreground">In the world of induction hardening, achieving the desired surface hardness and case depth is not a matter of guesswork — it’s a science built on measurement and validation. Every hardened component, whether a gear, shaft, or roller, must meet specific hardness standards to ensure reliability in real-world conditions.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="A technician using a Rockwell hardness tester on a metal part."
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">What Is Hardness Testing in Heat Treatment?</h2>
            <p>Hardness testing measures a material’s resistance to deformation — typically using an indenter that applies controlled pressure on the surface. In induction hardening, hardness reflects how effectively the surface has been transformed from softer ferrite or pearlite into hard martensitic structures.</p>
            <h3 className="text-2xl font-semibold mt-6">Why It Matters:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Confirms that the heating and quenching process worked correctly</li>
                <li>Verifies that the case depth and surface hardness meet specifications</li>
                <li>Ensures the part will withstand wear, load, and fatigue in actual use</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Common Hardness Testing Methods Used</h2>
            
            <h3 className="text-2xl font-bold mt-8">1. Rockwell Hardness Test (Most Common in Punjab Industries)</h3>
            <p><strong>Purpose:</strong> Quick, accurate, and widely used for finished components.</p>
            <p><strong>Scales Used:</strong> C Scale (HRC) for hardened steels (50–62 HRC) and B Scale (HRB) for softer metals.</p>
            <p><strong>Advantage:</strong> Non-destructive and ideal for batch inspection.</p>

            <h3 className="text-2xl font-bold mt-8">2. Vickers Hardness Test</h3>
            <p><strong>Purpose:</strong> For smaller or thin components requiring precise hardness measurement.</p>
            <p><strong>Advantage:</strong> Ideal for laboratory verification and detailed quality analysis.</p>

            <h3 className="text-2xl font-bold mt-8">3. Microhardness or Case Depth Testing</h3>
            <p><strong>Purpose:</strong> To determine the case depth — the thickness of the hardened layer.</p>
            <p><strong>Advantage:</strong> Provides complete metallurgical profile — a must for OEM and export-grade components.</p>

            <h2 className="text-3xl font-bold mt-12">Key Quality Control Parameters Verified</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Purpose</TableHead>
                            <TableHead>Method Used</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {qcParams.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.purpose}</TableCell>
                                <TableCell>{row.method}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Case Study: Hardness Validation for Automotive Gear Shafts</h2>
            <p>For an Automotive Gear Shaft (EN19), we achieved a surface hardness of <strong>{caseStudyResults.surfaceHardness}</strong> with a case depth of <strong>{caseStudyResults.caseDepth}</strong> and uniformity of <strong>{caseStudyResults.uniformity}</strong>, passing export quality inspection with 100% acceptance.</p>

            <h2 className="text-3xl font-bold mt-12">Benefits of Hardness Testing</h2>
            <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Consistent Product Quality:</span> Ensures uniformity across large production batches.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Prevents Failure in Service:</span> Detects soft spots, over-hardening, or insufficient case depth early.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Ensures Compliance:</span> Meets customer specifications and global standards.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Provides Process Traceability:</span> Each test record links to a specific job or component batch.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Builds Client Confidence:</span> OEMs and exporters rely on data-backed testing to guarantee part performance.</div></li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Hardness Testing – The Backbone of Reliability</h2>
            <p>At {SITE_NAME}, our commitment to quality control through precise hardness testing helps industries across Punjab, Haryana, and Delhi NCR build products that last longer, perform better, and meet international benchmarks. Hardness verified. Quality certified.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Verified Hardness Testing?</h3>
                <p className="mt-2 text-muted-foreground">Partner with {SITE_NAME} for reliable, tested, and certified surface hardening solutions.</p>
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
