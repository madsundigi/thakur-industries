
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
  title: 'How Case Depth Impacts Component Performance',
  description: 'Understand how controlling case depth enhances component strength and fatigue life.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How Case Depth Impacts Component Performance",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Quality Control",
  "keywords": ["case depth control in heat treatment", "case hardening results", "metallurgical performance Punjab"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/case-depth-control-in-induction-hardening",
  "inLanguage": "en"
};

const caseDepthRequirementsData = [
    { component: "Shafts (EN8/EN19)", material: "Alloy Steel", depth: "2.0–3.5 mm" },
    { component: "Gears (20MnCr5)", material: "Case Hardening Steel", depth: "0.8–1.2 mm" },
    { component: "Axles (EN24)", material: "Ni-Cr-Mo Alloy", depth: "2.5–4.0 mm" },
    { component: "Pins & Spindles", material: "EN353", depth: "1.0–2.5 mm" },
];

const factorsData = [
    { parameter: "Heating Frequency", effect: "Lower frequency → deeper case; higher frequency → shallow case" },
    { parameter: "Power Density", effect: "Higher power → faster heating, affects depth" },
    { parameter: "Heating Time (Dwell Time)", effect: "Longer time → deeper heat penetration" },
    { parameter: "Material Composition", effect: "Alloy steels (EN19, EN24, 4340) harden deeper than mild steels" },
    { parameter: "Quenching Medium", effect: "Polymer or water controls cooling rate and hardness gradient" },
    { parameter: "Part Geometry", effect: "Large or thick parts require longer exposure for uniform hardening" },
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
                    <span className='truncate'>How Case Depth Affects Performance</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">How Case Depth Impacts Component Performance</h1>
                <p className="mt-4 text-xl text-muted-foreground">Understand how controlling case depth enhances component strength and fatigue life.</p>
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
            
            <h2 className="text-3xl font-bold mt-12">Introduction: Why Case Depth Matters in Heat Treatment</h2>
            <p>When it comes to induction hardening or case hardening, one factor that directly determines a component’s performance, durability, and fatigue resistance is case depth.</p>
            <p>The case depth defines how deep the hardened layer extends beneath the surface of a component. Too shallow — and the part may wear out prematurely. Too deep — and the core may lose its ductility.</p>
            <p>At {SITE_NAME}, Ludhiana, we specialize in precise case depth control using advanced induction hardening systems. Our metallurgical expertise ensures every part achieves optimal hardness, toughness, and fatigue life, especially for industrial and automotive applications across Punjab and North India.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Case Depth in Induction Hardening?</h2>
            <p>In simple terms, case depth is the distance from the surface to the point where the hardness starts to drop significantly after heat treatment. During induction hardening, the surface of the steel component is rapidly heated by electromagnetic energy and then quenched (using polymer or water). This converts the outer layer into martensite, a hard crystalline structure, while keeping the inner core tough and flexible.</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Effective Case Depth:</strong> Depth where hardness remains above a defined threshold (usually 50 HRC).</li>
              <li><strong>Total Case Depth:</strong> Depth where microstructural changes are visible under metallographic inspection.</li>
            </ul>
            <p>Case depth is the key to achieving the perfect balance between wear resistance and structural toughness.</p>

            <h2 className="text-3xl font-bold mt-12">Why Case Depth Is Important for Component Performance</h2>
            <p>The performance of heat-treated parts depends on how well the case depth matches the part’s functional requirements. Here’s why controlling it matters so much:</p>
            <h3 className="text-2xl font-semibold mt-6">1. Wear Resistance</h3>
            <p>The hardened surface resists friction and abrasion. If case depth is too shallow, the surface wears out quickly during operation. Example: Gear teeth with insufficient case depth can fail under repeated stress.</p>
            <h3 className="text-2xl font-semibold mt-6">2. Fatigue Strength</h3>
            <p>A deeper case increases the compressive residual stresses on the surface, improving fatigue strength. Example: Shafts and spindles used in tractors or heavy equipment last longer when case depth is optimized.</p>
            <h3 className="text-2xl font-semibold mt-6">3. Core Toughness</h3>
            <p>While the surface should be hard, the inner core must stay ductile to absorb shock loads. Example: Axles and crankshafts require a tough core to avoid brittle fracture.</p>
            <h3 className="text-2xl font-semibold mt-6">4. Dimensional Stability</h3>
            <p>Uneven case depth can cause distortion or cracks after hardening. Controlling heating and quenching ensures precision.</p>
            <h3 className="text-2xl font-semibold mt-6">5. Load-Bearing Capacity</h3>
            <p>The correct case depth ensures that surface hardness extends deep enough to support mechanical loads under pressure.</p>

            <h2 className="text-3xl font-bold mt-12">Factors Affecting Case Depth in Induction Hardening</h2>
            <p>Controlling case depth requires engineering precision. Multiple process variables play a role in determining the final hardness profile.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Effect on Case Depth</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {factorsData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.effect}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Measuring Case Depth – How It’s Verified</h2>
            <p>After induction hardening, case depth measurement ensures the part meets design and performance standards. Common methods used at {SITE_NAME}, Ludhiana include:</p>
            <h3 className="text-2xl font-semibold mt-6">Microhardness Testing:</h3>
            <p>Cross-sectional hardness profile using Vickers or Knoop method. Hardness measured at 0.1 mm intervals. Effective case depth defined at 50 HRC cutoff.</p>
            <h3 className="text-2xl font-semibold mt-6">Metallographic Analysis:</h3>
            <p>Etching the cross-section and observing under a microscope to visually determine the structural boundary between martensitic and core regions.</p>
            <h3 className="text-2xl font-semibold mt-6">Magnetic Induction Methods:</h3>
            <p>Used for non-destructive inspection in production runs. Each part undergoes hardness verification before dispatch to ensure metallurgical consistency.</p>

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
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Case Depth Defines Performance</h2>
            <p>Case depth isn’t just a metallurgical parameter — it’s the foundation of component durability, load capacity, and fatigue life. At {SITE_NAME}, we ensure accurate heat penetration, controlled quenching, and verified hardness consistency, so that every gear, shaft, or axle performs reliably under demanding industrial conditions.</p>
            <p>Precision in case depth is the secret to performance, and performance is the promise of {SITE_NAME}.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Case Depth-Controlled Induction Hardening?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, Ludhiana for precision case hardening job work.</p>
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
