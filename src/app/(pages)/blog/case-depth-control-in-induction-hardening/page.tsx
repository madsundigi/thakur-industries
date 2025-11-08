
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
  title: 'Case Depth Control & Accuracy in Induction Hardening',
  description: 'Understand how case depth and hardness control determine the success of induction heat treatment.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Case Depth Control & Accuracy in Induction Hardening",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Quality Control",
  "keywords": ["case depth in induction hardening", "heat treatment control parameters", "hardness testing"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/case-depth-control-in-induction-hardening",
  "inLanguage": "en"
};

const caseDepthRequirementsData = [
    { component: "Automotive Shaft", material: "EN8 / EN19", depth: "2–3 mm" },
    { component: "Gear or Pinion", material: "20MnCr5", depth: "1–1.5 mm" },
    { component: "Axle or Spindle", material: "EN24", depth: "3–5 mm" },
    { component: "Camshaft", material: "4140", depth: "2.5–3.5 mm" },
    { component: "Roller or Coupling", material: "4340", depth: "3–4 mm" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogCaseDepth');

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
                    <span className='truncate'>Case Depth Control</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Case Depth Control & Accuracy in Induction Hardening</h1>
                <p className="mt-4 text-xl text-muted-foreground">Understand how case depth and hardness control determine the success of induction heat treatment.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Diagram showing case depth control in induction hardening"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <p>In the world of induction heat treatment, achieving the correct case depth is one of the most critical quality factors. For industries across Ludhiana and Punjab, precision in case depth directly determines component performance, service life, and fatigue strength.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Case Depth in Induction Hardening?</h2>
            <p>The case depth refers to how deeply the heat treatment affects the metal surface. In induction hardening, only the outer layer of a component is heated and rapidly quenched. This layer transforms into martensite, achieving very high hardness (typically 50–60 HRC), while the inner core remains tough and ductile.</p>

            <h2 className="text-3xl font-bold mt-12">Factors Affecting Case Depth</h2>
            <p>Achieving consistent and accurate case depth requires precise control over several parameters:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Power Density & Frequency:</strong> Low frequency provides deeper heat penetration for shafts, while high frequency is for shallow depths on gears.</li>
              <li><strong>Heating Time & Power Input:</strong> Longer heating increases depth but risks overheating.</li>
              <li><strong>Material Composition:</strong> Steels like EN8, EN19, and EN24 respond differently.</li>
              <li><strong>Quenching Method:</strong> Water offers faster cooling, while polymer provides more control.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Hardness Testing and Case Depth Verification</h2>
            <p>After hardening, testing validates the process. Common methods include:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Rockwell or Vickers Hardness Test:</strong> Measures surface and subsurface hardness.</li>
                <li><strong>Microhardness Profile Test:</strong> Maps hardness via cross-sectional indentation.</li>
                <li><strong>Metallographic Analysis:</strong> Microscopic verification after etching.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Typical Case Depth Requirements</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component Type</TableHead>
                            <TableHead>Material</TableHead>
                            <TableHead>Typical Case Depth</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {caseDepthRequirementsData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.material}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Precision That Defines Performance</h2>
            <p>Accurate case-depth control in induction hardening is not just a quality metric—it’s a performance guarantee. At {SITE_NAME}, we ensure micron-level consistency and defect-free results for every job.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Reliable Case-Depth Control?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} in Ludhiana for precision heat treatment job work.</p>
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
