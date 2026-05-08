
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
  title: 'Induction Hardening for Crankshafts in Automotive Engines',
  description: 'Understand how induction hardening enhances durability and torque performance of automotive crankshafts.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening for Crankshafts in Automotive Engines",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Automotive Heat Treatment",
  "keywords": ["automotive crankshaft hardening", "engine component heat treatment Ludhiana", "precision hardening Punjab"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/induction-hardening-for-crankshafts-and-camshafts",
  "inLanguage": "en"
};

const materialsData = [
    { material: "EN8", type: "Medium Carbon Steel", application: "Light vehicle crankshafts" },
    { material: "EN19 (AISI 4140)", type: "Alloy Steel", application: "Automotive & industrial crankshafts" },
    { material: "EN24 (AISI 4340)", type: "Nickel Chromium Steel", application: "Heavy-duty crankshafts" },
    { material: "42CrMo4", type: "Alloy Steel", application: "High-torque engine crankshafts" },
    { material: "20MnCr5", type: "Case Hardening Steel", application: "Tractor and gear-driven engines" },
];

const caseStudyResults = {
    surfaceHardness: "59 HRC",
    caseDepth: "2.82 mm",
    fatigueLifeImprovement: "35%",
    dimensionalAccuracy: "within ±0.05 mm"
};


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
                    <span className='truncate'>Crankshaft Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening for Crankshafts in Automotive Engines</h1>
                <p className="mt-4 text-xl text-muted-foreground">In an automotive engine, the crankshaft is the heart of the powertrain — converting linear piston motion into rotational torque. It operates under extreme pressure, load, and friction, making surface durability essential for engine efficiency and longevity.</p>
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
            
            <h2 className="text-3xl font-bold mt-12">Introduction: Building the Heart of Every Engine</h2>
            <p>That’s where induction hardening comes in. This advanced localized heat treatment process enhances the fatigue strength, wear resistance, and lifespan of crankshafts used in cars, tractors, and heavy vehicles.</p>
            <p>At {SITE_NAME}, Ludhiana, we provide precision crankshaft hardening services for OEMs and industrial manufacturers across Punjab and North India, ensuring unmatched strength and performance.</p>

            <h2 className="text-3xl font-bold mt-12">Why Induction Hardening Is Ideal for Crankshafts</h2>
            <p>Crankshafts experience constant cyclic stress and torsional load. The surface of bearing journals and fillets must resist wear, bending, and fatigue while maintaining a tough, shock-absorbing core. Induction hardening provides the perfect metallurgical solution by hardening only the surface layer, leaving the core ductile for flexibility.</p>
            <h3 className="text-2xl font-semibold mt-6">Key Advantages:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Improved fatigue strength and torsional durability</li>
                <li>Increased wear resistance of journals and fillets</li>
                <li>Controlled case depth (1.5–3 mm) for optimized hardness</li>
                <li>Minimal distortion or warping after treatment</li>
                <li>Fast, energy-efficient, and repeatable process</li>
            </ul>
            <p className="font-semibold text-foreground mt-4">💡 Every hardened layer means more revolutions per minute — with less wear per cycle.</p>

            <h2 className="text-3xl font-bold mt-12">The Induction Hardening Process for Crankshafts</h2>
            <p>At {SITE_NAME}, we use custom-designed coils and medium-frequency induction systems to precisely harden specific zones of the crankshaft — mainly bearing journals, pins, and fillets.</p>
            <h3 className="text-2xl font-semibold mt-6">Step-by-Step Process:</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Pre-Cleaning and Inspection:</strong> The crankshaft is cleaned to remove oil, rust, or scale for uniform heating.</li>
                <li><strong>Induction Heating:</strong> Using a medium-frequency electromagnetic field (10–30 kHz), the crankshaft surface is rapidly heated to 850–950°C.</li>
                <li><strong>Quenching:</strong> Immediate polymer or water quenching transforms the heated surface into hard martensite, achieving surface hardness up to 58–60 HRC.</li>
                <li><strong>Tempering (Optional):</strong> Tempering at 150–200°C relieves internal stress and improves structural balance.</li>
                <li><strong>Hardness and Case Depth Testing:</strong> Each crankshaft undergoes Rockwell hardness testing and microhardness inspection to verify uniformity.</li>
            </ol>
             <p className="font-semibold text-foreground mt-4">🔍 Every journal and fillet receives precision heat treatment — micrometer by micrometer.</p>
            
            <h2 className="text-3xl font-bold mt-12">Materials Suitable for Induction Hardening Crankshafts</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Common Applications</TableHead>
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
             <p className="font-semibold text-foreground">We adjust frequency, power, and quenching based on each steel’s metallurgical response.</p>

            <h2 className="text-3xl font-bold mt-12">Case Study: Crankshaft Hardening for Tractor Engine Manufacturer</h2>
             <ul className="list-disc list-inside space-y-2 text-muted-foreground my-4">
                <li><strong>Surface hardness achieved:</strong> {caseStudyResults.surfaceHardness}</li>
                <li><strong>Fatigue life improved by:</strong> {caseStudyResults.fatigueLifeImprovement}</li>
                <li><strong>Dimensional accuracy maintained:</strong> {caseStudyResults.dimensionalAccuracy}</li>
             </ul>
             <p className="font-semibold text-foreground">🏅 A perfect balance of strength, surface hardness, and precision — achieved through controlled induction.</p>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Powering Performance with Induction Hardening</h2>
            <p>In today’s high-performance automotive world, precision heat treatment defines engine reliability. Through controlled induction hardening, crankshafts gain the strength to handle high torque, friction, and continuous stress — ensuring smooth power delivery and extended engine life.</p>
            <p>At {SITE_NAME}, Ludhiana, we bring engineering excellence and metallurgical precision to every crankshaft we treat — powering Punjab’s automotive growth with technology and trust.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Crankshaft Induction Hardening Job Work in Punjab?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, your reliable name in industrial and automotive heat treatment solutions.</p>
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

    