
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
  title: 'Optimizing Case Depth for Gear Components',
  description: 'Learn how controlled case depth enhances wear resistance and fatigue life in automotive gear components.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Optimizing Case Depth for Gear Components",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Quality Control",
  "keywords": ["case depth optimization gears", "gear heat treatment Punjab", "automotive gear hardening Ludhiana"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/case-depth-control-in-induction-hardening",
  "inLanguage": "en"
};

const hardnessData = [
    { material: "EN8", depth: "1.5 – 2.0", hardness: "52 – 55", application: "Medium-duty gears" },
    { material: "EN19", depth: "2.0 – 3.0", hardness: "55 – 58", application: "Transmission shafts & gears" },
    { material: "EN24", depth: "2.5 – 3.5", hardness: "58 – 60", application: "Automotive gears" },
    { material: "20MnCr5", depth: "0.8 – 1.2 (carburized)", hardness: "60 – 62", application: "Precision automotive gears" }
];

const caseStudyResults = {
    surfaceHardness: "59 HRC",
    caseDepthUniformity: "±0.1 mm",
    gearLifespanImprovement: "40%",
};

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
                    <span className='truncate'>Optimizing Case Depth for Gears</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Optimizing Case Depth for Gear Components</h1>
                <p className="mt-4 text-xl text-muted-foreground">Learn how controlled case depth enhances wear resistance and fatigue life in automotive gear components.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="A diagram illustrating case depth in a gear tooth"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">Introduction: Why Case Depth Matters for Gears</h2>
            <p>In automotive and industrial machinery, gears play a vital role in transmitting power and motion under high stress and friction. Their performance depends not only on their design and material but also on their surface hardness and core toughness — both of which are controlled by case depth achieved during induction hardening.</p>
            <p>At {SITE_NAME}, Ludhiana, we specialize in precise case depth optimization for gears, ensuring the perfect balance between wear resistance, fatigue strength, and structural stability.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Case Depth in Induction Hardening?</h2>
            <p>Case depth refers to the thickness of the hardened layer produced on the surface of a metal component during heat treatment. For gears, the goal is to achieve a hard, wear-resistant surface (case) while maintaining a tough, ductile core that can absorb shocks without cracking.</p>

            <h2 className="text-3xl font-bold mt-12">The Science Behind Case Depth Optimization</h2>
            <p>During induction hardening, an electromagnetic coil rapidly heats the surface layer of the gear tooth to 850–950°C. The heated area is then quenched, forming a martensitic case with a specific hardness and depth.</p>
            <p>At {SITE_NAME}, we use PLC-controlled medium-frequency induction systems to precisely control parameters like power input, heating time, and quenching rate, ensuring consistent and accurate case depths for every gear batch.</p>

            <h2 className="text-3xl font-bold mt-12">Why Case Depth Optimization Is Critical for Gears</h2>
            <p>A properly hardened case provides resistance against surface wear and fatigue, while a tough core supports the stresses transmitted during gear operation.</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                <li>Enhanced Wear Resistance</li>
                <li>Fatigue Strength Improvement</li>
                <li>Dimensional Stability</li>
                <li>Longer Service Life</li>
                <li>Reduced Noise and Vibration</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Case Depth Standards for Common Gear Materials</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Typical Case Depth (mm)</TableHead>
                            <TableHead>Hardness (HRC)</TableHead>
                            <TableHead>Application</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {hardnessData.map((row) => (
                            <TableRow key={row.material}>
                                <TableCell className="font-medium">{row.material}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                                <TableCell>{row.application}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Case Study: Automotive Gear Hardening for OEM Client</h2>
            <p>An automotive gearbox manufacturer in Ludhiana needed to increase gear wear resistance and reduce tooth failure under cyclic load. Our process on EN24 Alloy Steel using medium-frequency induction and 10% polymer quenching achieved:</p>
             <ul className="list-disc list-inside space-y-2 text-muted-foreground my-4">
                <li>Surface Hardness: {caseStudyResults.surfaceHardness}</li>
                <li>Case Depth Uniformity: {caseStudyResults.caseDepthUniformity}</li>
                <li>Gear Lifespan Improvement: {caseStudyResults.gearLifespanImprovement}</li>
                <li>Result: Gear durability improved under real-world stress conditions with zero distortion or cracking.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">How {SITE_NAME} Ensures Precise Case Depth Control</h2>
            <p>We combine advanced induction heating systems with metallurgical expertise to achieve consistent case depth and hardness results.</p>
             <ul className="list-disc list-inside space-y-2 text-muted-foreground my-4">
                <li>Digital temperature monitoring with real-time adjustment</li>
                <li>Infrared thermal scanning for uniform heat zones</li>
                <li>Microhardness testing to measure case depth accuracy</li>
                <li>Metallographic analysis for structural verification</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Perfect Case Depth Means Perfect Performance</h2>
            <p>For automotive and industrial gears, case depth optimization is more than a technical process — it’s the key to ensuring durability, efficiency, and smooth operation. At {SITE_NAME}, we bring together technology, precision, and quality control to deliver heat-treated gears that perform flawlessly — every time, under every condition.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Gear Hardening & Case Depth Optimization?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for gear hardening job work tailored to your component and material needs.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/gear-hardening">Explore Gear Hardening</Link>
                    </Button>
                </div>
            </div>
        </article>
      </div>
    </>
  );
}
