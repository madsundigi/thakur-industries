
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Zap, Shield } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Induction Hardening for Crankshafts & Camshafts',
  description: 'Explore how induction hardening improves crankshaft and camshaft durability in tractors and engines.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening for Crankshafts & Camshafts",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Automotive Heat Treatment",
  "keywords": ["crankshaft induction hardening", "camshaft heat treatment Punjab", "engine component hardening"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/induction-hardening-for-crankshafts-and-camshafts",
  "inLanguage": "en"
};

const benefitsData = [
    { benefit: "High Surface Hardness (50–62 HRC)", result: "Improved wear resistance & load capacity" },
    { benefit: "Deep Case Hardening", result: "Longer fatigue life" },
    { benefit: "Tough, Ductile Core", result: "Resistance to bending & torsion" },
    { benefit: "Minimal Distortion", result: "Precision geometry for smooth rotation" },
    { benefit: "Localized Hardening", result: "Efficient and energy-saving process" },
    { benefit: "Consistent Quality", result: "Ideal for OEM and batch production" },
];

const materialsData = [
    { material: "EN8 (C40)", type: "Medium Carbon Steel", application: "Light-duty crankshafts" },
    { material: "EN19 (4140)", type: "Alloy Steel", application: "Heavy-duty shafts & pins" },
    { material: "EN24 (4340)", type: "Ni-Cr-Mo Steel", application: "Tractor & industrial crankshafts" },
    { material: "20MnCr5", type: "Case Hardening Steel", application: "Camshafts, pinions" },
    { material: "SG Iron / Cast Iron", type: "Chilled camshafts", application: "Selective heat treatment on lobes" },
];

const comparisonData = [
    { parameter: "Heating Method", induction: "Localized electromagnetic", conventional: "Full furnace heating" },
    { parameter: "Cycle Time", induction: "Seconds", conventional: "Hours" },
    { parameter: "Distortion Risk", induction: "Low", conventional: "High" },
    { parameter: "Energy Efficiency", induction: "High", conventional: "Moderate" },
    { parameter: "Repeatability", induction: "Excellent", conventional: "Variable" },
    { parameter: "Cost Efficiency", induction: "Suitable for mass OEM production", conventional: "Expensive for selective zones" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogCrankshafts');

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
                    <span className='truncate'>Crankshaft & Camshaft Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening for Crankshafts & Camshafts</h1>
                <p className="mt-4 text-xl text-muted-foreground">Explore how induction hardening improves crankshaft and camshaft durability in tractors and engines.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Crankshaft and camshaft components ready for induction hardening"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">Introduction: The Importance of Crankshaft and Camshaft Hardening</h2>
            <p>The crankshaft and camshaft are two of the most critical components in any internal combustion engine. They are subjected to extreme dynamic loads, friction, and cyclic stresses during engine operation. Without proper hardening, these components quickly wear out, causing reduced engine efficiency, increased friction and vibration, and premature part failure.</p>
            <p>That’s why induction hardening has become the industry standard for enhancing durability and performance of crankshafts and camshafts — especially in automotive, tractor, and industrial engines. At {SITE_NAME}, Ludhiana, we specialize in precision-controlled crankshaft induction hardening and camshaft heat treatment job work, serving OEMs and component suppliers across Punjab and North India.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Induction Hardening for Crankshafts and Camshafts?</h2>
            <p>Induction hardening is a surface heat treatment process that strengthens the outer layer of steel components by using electromagnetic induction to heat specific areas to the hardening temperature (typically 850–950°C), followed by controlled quenching. The result is a hard martensitic layer that resists wear, while the core remains tough and elastic to absorb shocks and torsional stresses.</p>

            <h2 className="text-3xl font-bold mt-12">Crankshaft Induction Hardening Process</h2>
            <p>The crankshaft induction hardening process involves selective hardening of main journals and crank pins using rotational and progressive scanning techniques.</p>
            <h3 className="text-2xl font-semibold mt-6">Step-by-Step Process:</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Preparation & Cleaning:</strong> The crankshaft is cleaned and pre-checked for surface defects.</li>
                <li><strong>Induction Heating:</strong> Coils are positioned around each journal or pin, heating them precisely to hardening temperature.</li>
                <li><strong>Polymer or Water Quenching:</strong> Controlled cooling forms a martensitic case layer (50–60 HRC).</li>
                <li><strong>Tempering (Optional):</strong> Reduces internal stress for better toughness.</li>
                <li><strong>Testing & Inspection:</strong> Hardness, case depth, and roundness are verified post-treatment.</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12">Camshaft Heat Treatment Process</h2>
            <p>The camshaft controls the opening and closing of engine valves — requiring extreme surface wear resistance on its lobes and bearing journals.</p>
             <h3 className="text-2xl font-semibold mt-6">Step-by-Step Process:</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Setup & Coil Alignment:</strong> Coils are positioned on cam lobes or full-length scanning is applied.</li>
                <li><strong>Localized Heating:</strong> Only the cam lobe area is heated to hardening temperature.</li>
                <li><strong>Quenching:</strong> Rapid cooling ensures hard martensitic layer formation.</li>
                <li><strong>Polishing & Testing:</strong> Post-hardening, cam lobes are ground to precise profiles.</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12">Benefits of Induction Hardening for Crankshafts & Camshafts</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Benefit</TableHead>
                            <TableHead>Resulting Improvement</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {benefitsData.map((row) => (
                            <TableRow key={row.benefit}>
                                <TableCell className="font-medium">{row.benefit}</TableCell>
                                <TableCell>{row.result}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Materials Suitable for Crankshaft and Camshaft Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Applications</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map((row) => (
                            <TableRow key={row.material}>
                                <TableCell className="font-medium">{row.material}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.application}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Comparison: Induction Hardening vs Traditional Heat Treatment</h2>
             <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Induction Hardening</TableHead>
                            <TableHead>Conventional Heat Treatment</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell><CheckCircle className="inline-block mr-2 h-5 w-5 text-green-500" />{row.induction}</TableCell>
                                <TableCell>{row.conventional}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Reliable Hardening for Engine Longevity</h2>
            <p>A well-hardened crankshaft and camshaft are the foundation of a strong, reliable engine. Through precision induction hardening, {SITE_NAME} ensures these components can withstand millions of stress cycles, providing smooth performance, wear resistance, and long service life.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Crankshaft & Camshaft Hardening Job Work in Punjab?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, Ludhiana — your trusted partner for induction hardening services for crankshafts, camshafts, and automotive components.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/shaft-hardening">Explore Shaft Hardening</Link>
                    </Button>
                </div>
            </div>
        </article>
      </div>
    </>
  );
}
