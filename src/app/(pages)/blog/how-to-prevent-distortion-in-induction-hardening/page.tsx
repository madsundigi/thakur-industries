
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
  title: 'How to Prevent Distortion in Induction Hardening',
  description: 'Explore techniques to control distortion and maintain dimensional accuracy during heat treatment.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Prevent Distortion in Induction Hardening",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Quality Control",
  "keywords": ["induction hardening distortion control", "part warping prevention", "heat treatment accuracy"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/how-to-prevent-distortion-in-induction-hardening",
  "inLanguage": "en"
};

const techniquesData = [
    { feature: 'Custom coil engineering', advantage: 'Matches the part’s geometry and delivers balanced heat flow.' },
    { feature: 'Controlled heating parameters', advantage: 'Gradual and uniform temperature rise to minimize thermal shock.' },
    { feature: 'Use of polymer quenching', advantage: 'Gentler cooling rate reduces thermal stress and cracking.' },
    { feature: 'Preheating & tempering cycles', advantage: 'Minimizes temperature gradients and relieves internal stresses.' },
    { feature: 'Symmetrical fixturing', advantage: 'Ensures even heating and cooling, preventing localized distortion.' },
];

const caseStudyData = {
    surfaceHardness: "56 HRC",
    caseDepth: "3.2 mm",
    finalRunout: "<0.05 mm",
    rejectRate: "from 12% to 1%",
};

const whyChooseData = [
    { feature: "Advanced Induction Systems", advantage: "Medium & high-frequency precision control" },
    { feature: "Polymer Quenching Setup", advantage: "Controlled cooling for distortion prevention" },
    { feature: "Custom Coil Engineering", advantage: "Perfect heating distribution" },
    { feature: "In-house Testing Lab", advantage: "Case depth & microhardness verification" },
    { feature: "Experienced Metallurgical Team", advantage: "10+ years of process optimization" },
    { feature: "Local Service Network", advantage: "Fast turnaround across Punjab & NCR" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogDistortionControl');

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
                    <span className='truncate'>Distortion Control</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">How to Prevent Distortion in Induction Hardening</h1>
                <p className="mt-4 text-xl text-muted-foreground">Explore techniques to control distortion and maintain dimensional accuracy during heat treatment.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="An engineer measuring a metal part with calipers to ensure dimensional accuracy."
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">Introduction: The Challenge of Distortion in Induction Hardening</h2>
            <p>In modern manufacturing, induction hardening has become the go-to process for improving wear resistance and fatigue strength in steel components. However, one of the biggest challenges engineers face is distortion — the unwanted warping or dimensional change that occurs during heating and quenching.</p>
            <p>At {SITE_NAME} (Ludhiana), we specialize in induction hardening distortion control, using advanced process design, coil engineering, and quenching techniques to achieve uniform hardness with minimal shape deviation.</p>

            <h2 className="text-3xl font-bold mt-12">What Causes Distortion During Induction Hardening?</h2>
            <p>Distortion occurs due to uneven heating, thermal stresses, or rapid cooling, which induce internal stresses within the metal. Common causes include non-uniform heating, incorrect quenching rate, material inconsistencies, and improper fixturing.</p>

            <h2 className="text-3xl font-bold mt-12">Techniques to Prevent Distortion in Induction Hardening</h2>
            <div className="my-8 space-y-4">
                {techniquesData.map(item => (
                    <div key={item.feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-foreground">{item.feature}</h3>
                            <p className="text-muted-foreground">{item.advantage}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-3xl font-bold mt-12">Case Study: Distortion Control in EN19 Shafts</h2>
            <p>A Ludhiana-based automotive OEM faced recurring issues with shaft bending (0.4–0.6 mm) post-hardening using conventional furnaces. After switching to induction hardening at {SITE_NAME}, we implemented a custom process. The results were:</p>
            <div className="my-8 overflow-x-auto">
                 <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Surface Hardness</TableCell>
                            <TableCell>{caseStudyData.surfaceHardness}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Case Depth</TableCell>
                            <TableCell>{caseStudyData.caseDepth}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Final Runout</TableCell>
                            <TableCell>{caseStudyData.finalRunout}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Reject Rate Reduced</TableCell>
                            <TableCell>{caseStudyData.rejectRate}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
             <p className="font-semibold text-foreground"><CheckCircle className="inline-block mr-2 h-5 w-5 text-green-500" /> Result: Perfect hardness uniformity and distortion-free components ready for OEM assembly.</p>

            <h2 className="text-3xl font-bold mt-12">Why Choose {SITE_NAME} for Precision Heat Treatment</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Feature</TableHead>
                            <TableHead>Advantage</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {whyChooseData.map(row => (
                            <TableRow key={row.feature}>
                                <TableCell className="font-medium">{row.feature}</TableCell>
                                <TableCell>{row.advantage}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Precision Control = Zero Distortion</h2>
            <p>Distortion-free induction hardening is not luck — it’s science, process, and control. By combining intelligent coil design, controlled heating parameters, and polymer quenching, {SITE_NAME} delivers uniformly hardened, dimensionally stable parts trusted by Punjab’s top automotive and engineering industries.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Distortion-Free Induction Hardening Services in Punjab?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, Ludhiana for precision-controlled induction hardening and polymer quenching services.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/quenching-process">Our Quenching Process</Link>
                    </Button>
                </div>
            </div>
        </article>
      </div>
    </>
  );
}
