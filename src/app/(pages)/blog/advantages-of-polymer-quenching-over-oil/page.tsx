
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
  title: 'Advantages of Polymer Quenching Over Oil Cooling',
  description: 'See how polymer quenching provides better control, safety, and environmental benefits over traditional oil cooling.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Advantages of Using Polymer Quenching Over Oil",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Processes",
  "keywords": ["polymer quenching vs oil", "heat treatment cooling Ludhiana", "industrial quenching Punjab"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/advantages-of-polymer-quenching-over-oil",
  "inLanguage": "en"
};

const comparisonData = [
    { feature: "Cooling Control", polymer: "Adjustable by polymer concentration", oil: "Fixed cooling rate" },
    { feature: "Safety", polymer: "Non-flammable", oil: "High fire risk" },
    { feature: "Surface Cleanliness", polymer: "Clean, residue-free", oil: "Leaves oily surface" },
    { feature: "Environmental Impact", polymer: "Biodegradable and eco-friendly", oil: "Polluting and hard to dispose" },
    { feature: "Distortion", polymer: "Controlled, minimal", oil: "Often higher due to uneven cooling" },
    { feature: "Maintenance", polymer: "Simple and low-cost", oil: "Requires filtration and replacement" },
    { feature: "Odor and Smoke", polymer: "Odorless, smokeless", oil: "Strong odor, smoke generation" },
];

const caseStudyResults = {
    surfaceHardness: "57 HRC",
    caseDepth: "2.2 mm",
    distortion: "<0.02 mm",
    surfaceFinish: "Clean, residue-free"
};

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogPolymerVsOil');

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
                    <span className='truncate'>Advantages of Polymer Quenching</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Advantages of Using Polymer Quenching Over Oil</h1>
                <p className="mt-4 text-xl text-muted-foreground">The shift toward cleaner, smarter cooling in heat treatment processes.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Polymer quenching vs oil quenching"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: The Shift Toward Cleaner, Smarter Cooling</h2>
            <p>In induction hardening and heat treatment, cooling plays as crucial a role as heating. Once the steel is heated to its transformation temperature, it must be rapidly cooled to form the desired martensitic microstructure that gives it strength and hardness.</p>
            <p>Traditionally, industries have relied on oil-based quenching — but as technology, safety, and sustainability demands have evolved, polymer quenching solutions have become the modern standard.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Polymer Quenching?</h2>
            <p>Polymer quenching is a process where components are cooled in a water-soluble polymer solution instead of oil. The polymer concentration and agitation determine the cooling rate — allowing engineers to fine-tune hardness and minimize distortion.</p>
            
            <h2 className="text-3xl font-bold mt-12">Key Differences: Polymer Quenching vs. Oil Quenching</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Feature</TableHead>
                            <TableHead>Polymer Quenching</TableHead>
                            <TableHead>Oil Quenching</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map((row) => (
                            <TableRow key={row.feature}>
                                <TableCell className="font-medium">{row.feature}</TableCell>
                                <TableCell>{row.polymer}</TableCell>
                                <TableCell>{row.oil}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Top Advantages of Polymer Quenching</h2>
            <h3 className="text-2xl font-semibold mt-6">1. Better Control Over Cooling Rate</h3>
            <p>Unlike oil, polymer quenching allows operators to adjust the cooling rate simply by changing the polymer concentration in the water. This flexibility makes it suitable for different materials and thicknesses.</p>
            
            <h3 className="text-2xl font-semibold mt-6">2. Enhanced Safety and Fire Prevention</h3>
            <p>Oil quenching carries a high risk of fire. Polymer quenching, however, is non-flammable and significantly safer for operators and equipment.</p>

            <h3 className="text-2xl font-semibold mt-6">3. Cleaner and Environmentally Friendly Process</h3>
            <p>Polymer quenching is water-based, leaves no residue or odor, and the solution is biodegradable and non-toxic.</p>

            <h3 className="text-2xl font-semibold mt-6">4. Reduced Distortion and Cracking</h3>
            <p>Polymer quenching ensures uniform cooling because it forms a vapor blanket around the hot part, slowing heat transfer evenly, which reduces warping and bending.</p>

            <h3 className="text-2xl font-semibold mt-6">5. Better Surface Finish and Component Cleanliness</h3>
            <p>With polymer quenching, parts emerge clean, residue-free, and ready for post-processing like grinding or assembly.</p>

            <h2 className="text-3xl font-bold mt-12">Case Study: Polymer Quenching for EN19 Shafts</h2>
            <p>For a transmission shaft made of EN19 steel, we aimed to achieve 56 HRC hardness with zero distortion using a 10% polymer solution.</p>
             <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Result</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Surface Hardness</TableCell><TableCell>{caseStudyResults.surfaceHardness}</TableCell></TableRow>
                        <TableRow><TableCell>Case Depth</TableCell><TableCell>{caseStudyResults.caseDepth}</TableCell></TableRow>
                        <TableRow><TableCell>Distortion</TableCell><TableCell>{caseStudyResults.distortion}</TableCell></TableRow>
                        <TableRow><TableCell>Surface Finish</TableCell><TableCell>{caseStudyResults.surfaceFinish}</TableCell></TableRow>
                    </TableBody>
                </Table>
             </div>
            <p>Polymer quenching achieved precision hardening with no post-cleaning required.</p>

            <h2 className="text-3xl font-bold mt-12">Conclusion: The Smart Choice for the Future of Heat Treatment</h2>
            <p>With superior control, safety, cleanliness, and environmental compliance, polymer quenching is the future of industrial heat treatment. At {SITE_NAME}, we’ve embraced this evolution — providing our clients in Ludhiana, Punjab, and beyond with precise, clean, and globally compliant induction hardening solutions.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Polymer Quenching Services?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for precision hardening and safe, modern cooling solutions.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/quenching-process">Explore Quenching</Link>
                    </Button>
                </div>
            </div>
        </article>
      </div>
    </>
  );
}
