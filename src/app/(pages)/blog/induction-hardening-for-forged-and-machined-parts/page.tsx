
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
  title: 'Induction Hardening for Forged and Machined Parts',
  description: 'Strengthen forged components with precise induction hardening and polymer quenching techniques.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening for Forged and Machined Parts",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Processes",
  "keywords": ["forged component heat treatment", "forging hardening process Ludhiana"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/induction-hardening-for-forged-and-machined-parts",
  "inLanguage": "en"
};

const processComparisonData = [
    { feature: 'Localized heating', advantage: 'No damage to the core structure' },
    { feature: 'Rapid processing', advantage: 'Ideal for high-volume production' },
    { feature: 'Precise control', advantage: 'Consistent hardness and case depth' },
    { feature: 'Minimal distortion', advantage: 'Maintains tight tolerances' },
    { feature: 'Clean, eco-friendly process', advantage: 'No scale or emissions' },
];

const forgedComponentsData = [
    { component: "Drive Shafts & Axles", material: "EN8, EN19, EN24", hardness: "52–58" },
    { component: "Gears & Pinions", material: "20MnCr5, EN353", hardness: "55–62" },
    { component: "Connecting Rods", material: "EN8D, 4140", hardness: "50–56" },
    { component: "Spindles & Couplings", material: "4340, EN19", hardness: "54–60" },
    { component: "Crankshafts & Yokes", material: "EN24", hardness: "50–58" },
];

const heatTreatmentParamsData = [
    { material: "EN8 / C45", temp: "850–880", quench: "Water", hardness: "52–56", depth: "1.5–3.0" },
    { material: "EN19 / 4140", temp: "850–900", quench: "Polymer", hardness: "54–58", depth: "2.0–3.5" },
    { material: "EN24 / 4340", temp: "870–930", quench: "Polymer", hardness: "56–60", depth: "2.5–5.0" },
    { material: "20MnCr5", temp: "860–900", quench: "Water / Polymer", hardness: "58–62", depth: "0.8–1.5" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogForgedParts');

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
                    <span className='truncate'>Induction Hardening for Forged Parts</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening for Forged and Machined Parts</h1>
                <p className="mt-4 text-xl text-muted-foreground">Strengthen forged components with precise induction hardening and polymer quenching techniques.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Induction hardening of forged components"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>Forging produces strong and dense metal parts — but to unlock their true mechanical strength, hardness, and wear resistance, they must undergo proper heat treatment. Forged parts like shafts, axles, gears, and connecting rods endure extreme loads and friction in automotive, tractor, and industrial machinery. Without proper surface hardening, even forged metals can experience premature wear, fatigue, or deformation.</p>
            <p>That’s why induction hardening has become the preferred process for forged component heat treatment across Ludhiana and Punjab. At {SITE_NAME}, we specialize in precision-controlled induction hardening and polymer quenching, ensuring deep surface hardness, minimal distortion, and extended component life for both forged and machined parts.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Induction Hardening for Forged Components?</h2>
            <p>Induction hardening is a localized surface heat treatment process where a forged steel component is exposed to a high-frequency electromagnetic field, heating the surface to its transformation temperature (typically 850–950°C). The part is then quenched with water or polymer, transforming the outer layer into hard martensite while retaining a tough, ductile core. This method is ideal for forged steels, as it enhances wear resistance without affecting the internal grain structure or toughness developed during forging.</p>

            <h2 className="text-3xl font-bold mt-12">Step-by-Step Forging Hardening Process</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Pre-Cleaning & Inspection:</strong> The forged part is cleaned to remove oil, scale, or debris before heat treatment.</li>
                <li><strong>Induction Heating:</strong> Using an induction coil, the surface of the part is heated rapidly and uniformly to the austenitizing temperature.</li>
                <li><strong>Polymer or Water Quenching:</strong> Controlled quenching converts the heated layer to martensite, achieving high surface hardness.</li>
                <li><strong>Tempering (Optional):</strong> The part may be tempered at 150–250°C to relieve internal stresses while maintaining hardness.</li>
                <li><strong>Testing & Quality Check:</strong> Surface hardness, case depth, and dimensional accuracy are verified through metallurgical testing.</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12">Why Induction Hardening Is Ideal for Forged Parts</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Feature</TableHead>
                            <TableHead>Advantage for Forged Components</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {processComparisonData.map((row) => (
                            <TableRow key={row.feature}>
                                <TableCell className="font-medium">{row.feature}</TableCell>
                                <TableCell>{row.advantage}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p>Forged components like EN8, EN19, EN24, 4140, and 4340 steels respond extremely well to induction heat treatment, offering optimal hardness-to-strength balance.</p>

            <h2 className="text-3xl font-bold mt-12">Common Forged Components Hardened by {SITE_NAME}</h2>
            <p>At {SITE_NAME}, Ludhiana, we perform heat treatment job work for a wide range of forged parts used in industrial and automotive applications.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component Type</TableHead>
                            <TableHead>Material</TableHead>
                            <TableHead>Typical Hardness (HRC)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {forgedComponentsData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.material}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Forged Component Heat Treatment Parameters</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Heating Temp (°C)</TableHead>
                            <TableHead>Quenching Medium</TableHead>
                            <TableHead>Surface Hardness (HRC)</TableHead>
                            <TableHead>Case Depth (mm)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {heatTreatmentParamsData.map((row) => (
                            <TableRow key={row.material}>
                                <TableCell className="font-medium">{row.material}</TableCell>
                                <TableCell>{row.temp}</TableCell>
                                <TableCell>{row.quench}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p>The {SITE_NAME} team fine-tunes these parameters based on component geometry, material composition, and hardness requirements.</p>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: The Perfect Blend of Strength and Efficiency</h2>
            <p>Forged components already possess strength from deformation — but induction hardening takes it further by improving wear resistance, fatigue life, and reliability. By offering localized hardening, minimal distortion, and faster processing, {SITE_NAME} ensures every forged component meets OEM-grade performance standards.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Forged Component Heat Treatment in Punjab?</h3>
                <p className="mt-2 text-muted-foreground">Partner with {SITE_NAME}, Ludhiana for professional induction hardening and polymer quenching job work.</p>
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
