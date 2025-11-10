
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
  title: 'Surface Finish and Machining After Induction Hardening',
  description: 'Know how finishing operations restore dimensional accuracy and maintain surface quality post-hardening.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Surface Finish and Machining After Induction Hardening",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Quality Control",
  "keywords": ["surface finish after heat treatment", "grinding after induction hardening", "hardness uniformity Punjab"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/surface-finish-and-machining-after-induction-hardening",
  "inLanguage": "en"
};

const surfaceFinishData = [
    { component: "Gear Teeth", asHardened: "1.5–2.0", afterGrinding: "0.6–0.8", finalFinish: "Ground Finish" },
    { component: "Shaft Journals", asHardened: "1.0–1.5", afterGrinding: "0.4–0.6", finalFinish: "Mirror Finish" },
    { component: "Spindles / Pins", asHardened: "1.2–1.8", afterGrinding: "0.5–0.7", finalFinish: "Polished Finish" }
];

const qualityParamsData = [
    { parameter: "Hardness Uniformity", advantage: "±2 HRC variation across surface" },
    { parameter: "Case Depth Control", advantage: "2.0–4.0 mm (±0.1 mm accuracy)" },
    { parameter: "Surface Oxidation", advantage: "Controlled atmosphere minimizes scaling" },
    { parameter: "Distortion", advantage: "<0.05 mm for standard shafts" },
    { parameter: "Post-Process Finish", advantage: "Ground & polished, assembly-ready finish" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogSurfaceFinish');

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
                    <span className='truncate'>Surface Finish After Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Surface Finish and Machining After Induction Hardening</h1>
                <p className="mt-4 text-xl text-muted-foreground">In precision manufacturing, the surface finish of a component plays a crucial role in its performance, fit, and durability. This guide explains how finishing operations restore dimensional accuracy and maintain surface quality post-hardening.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="A perfectly polished metal shaft after induction hardening and grinding."
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: Why Surface Finish Matters After Heat Treatment</h2>
            <p>After undergoing induction hardening, parts experience surface changes like oxidation, scale formation, or slight dimensional variations. That’s why post-hardening surface finishing is an essential step to restore the smoothness, accuracy, and functionality of components. At {SITE_NAME}, Ludhiana, we combine precision induction hardening with controlled finishing processes to ensure clients across Punjab and North India receive components that are both metallurgically superior and dimensionally precise.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Happens to the Surface During Induction Hardening</h2>
            <p>Induction hardening heats the surface to around 850–900°C before rapid quenching. This process, while hardening the surface, also causes thermal expansion and rapid cooling, which can affect the surface microstructure and texture.</p>
            <h3 className="text-2xl font-semibold mt-6">Common Surface Effects:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Minor Oxidation or Scale Formation:</strong> Due to surface contact with oxygen during heating.</li>
                <li><strong>Slight Surface Roughness Increase:</strong> Caused by phase transformation stresses.</li>
                <li><strong>Dimensional Deviation:</strong> Due to localized heating or quenching unevenness.</li>
                <li><strong>Residual Stress Development:</strong> Which can affect grinding or machining afterward.</li>
            </ul>
            <p className="font-semibold">These effects are minimal with well-controlled induction parameters, but finishing ensures precision restoration.</p>

            <h2 className="text-3xl font-bold mt-12">Ideal Surface Finish After Induction Hardening</h2>
            <p>The surface roughness (Ra) after induction hardening typically ranges from 0.8–2.0 µm. For critical components like shafts and gears, a smoother finish is required. A properly ground and polished surface after hardening improves bearing contact, reduces noise, and prevents premature wear.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component Type</TableHead>
                            <TableHead>As-Hardened Ra (µm)</TableHead>
                            <TableHead>After Grinding Ra (µm)</TableHead>
                            <TableHead>Final Finish Type</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {surfaceFinishData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.asHardened}</TableCell>
                                <TableCell>{row.afterGrinding}</TableCell>
                                <TableCell>{row.finalFinish}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Post-Hardening Machining and Grinding</h2>
            <p>Once a component is hardened to 55–60 HRC, further machining must be performed carefully. At {SITE_NAME}, we ensure the hardened layer is thick enough to allow post-grinding without reducing core hardness.</p>
             <h3 className="text-2xl font-semibold mt-6">Key Post-Processing Steps:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Cylindrical Grinding:</strong> Restores dimensional accuracy and removes oxide scale.</li>
                <li><strong>Surface Grinding:</strong> Used for flat or planar components.</li>
                <li><strong>Honing or Superfinishing:</strong> Achieves ultra-smooth surfaces (Ra < 0.2 µm).</li>
                <li><strong>Polishing:</strong> Improves aesthetics and reduces micro-abrasion points.</li>
            </ul>
            
            <h2 className="text-3xl font-bold mt-12">Best Practices for Machining After Induction Hardening</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use Correct Grinding Wheels: CBN or aluminum oxide wheels perform best for hardened steels.</li>
                <li>Avoid Excessive Feed or Pressure: Prevents burning and microcracks.</li>
                <li>Use Flood Cooling: Ensures temperature control during grinding.</li>
                <li>Check Case Depth Before Grinding: Avoids removing the hardened material.</li>
                <li>Perform Microhardness Checks: Ensures consistency after finishing.</li>
            </ul>
            <p className="font-semibold">A controlled finishing setup converts a hardened part into a ready-to-assemble precision component.</p>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: The Perfect Blend of Hardness and Smoothness</h2>
            <p>A good surface finish after induction hardening is not just about appearance—it’s about performance. It ensures precise fits, reduced friction, better wear resistance, and longer component life. At {SITE_NAME}, Ludhiana, we ensure every part achieves uniform hardness, stable dimensions, and mirror-smooth surfaces ready for assembly.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Precision Hardening & Finishing?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for induction hardening job work with precision surface finishing in Ludhiana, Punjab.</p>
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
