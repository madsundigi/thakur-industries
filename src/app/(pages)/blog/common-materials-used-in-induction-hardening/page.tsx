
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

export const metadata: Metadata = {
  title: 'Common Steels Used for Induction Hardening',
  description: 'A guide to materials that respond best to induction hardening and their ideal applications.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Common Steels Used for Induction Hardening",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Materials",
  "keywords": ["induction hardening materials", "EN8 heat treatment", "EN19 heat treatment", "4140 steel hardening"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/common-materials-used-in-induction-hardening",
  "inLanguage": "en"
};

const materialsData = [
    { grade: "EN8", application: "Shafts, axles, couplings, crank pins", hardness: "50–55 HRC" },
    { grade: "EN19 (AISI 4140)", application: "Gears, shafts, connecting rods, crankshafts", hardness: "52–58 HRC" },
    { grade: "EN24 (AISI 4340)", application: "Transmission shafts, gears, axles, heavy-duty spindles", hardness: "55–60 HRC" },
    { grade: "4140", application: "Gears, rollers, and automotive shafts", hardness: "52–58 HRC" },
    { grade: "4340", application: "Axles, crankshafts, and aircraft parts", hardness: "55–60 HRC" },
    { grade: "20MnCr5", application: "Gears, pinions, and shafts for transmissions", hardness: "58–62 HRC" },
    { grade: "Tool Steels (D2, H13, M2)", application: "Dies, punches, cutting tools, and forming molds", hardness: "58–64 HRC" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogCommonMaterials');

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
                    <span className='truncate'>Common Materials for Induction Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Common Steels Used for Induction Hardening</h1>
                <p className="mt-4 text-xl text-muted-foreground">A guide to materials that respond best to induction hardening and their ideal applications.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="An assortment of different steel bars and components suitable for induction hardening"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">What Makes a Material Suitable for Induction Hardening?</h2>
            <p>A steel is suitable for induction hardening if it has:</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Adequate carbon content (0.35–0.55%) for forming martensite upon quenching.</li>
                <li>Alloying elements (like Cr, Mo, Ni, Mn) that enhance hardenability and toughness.</li>
                <li>Stable microstructure that can be consistently heat treated and quenched.</li>
            </ol>
            <p>Materials outside this range may not achieve desired hardness or may distort after heat treatment.</p>

            <h2 className="text-3xl font-bold mt-12">Most Common Induction Hardening Materials</h2>
            
            <h3 className="text-2xl font-bold mt-8">1. EN8 (C40 or AISI 1040) – Medium Carbon Steel</h3>
            <p><strong>Composition:</strong> 0.35–0.45% Carbon.</p>
            <p>EN8 is a go-to steel grade for Ludhiana’s automotive and agricultural OEMs, offering both machinability and durability.</p>

            <h3 className="text-2xl font-bold mt-8">2. EN19 (AISI 4140) – Alloy Steel</h3>
            <p><strong>Composition:</strong> Chromium-Molybdenum (Cr-Mo) alloy steel with 0.40% Carbon.</p>
            <p>EN19’s versatility makes it one of the most widely used steels for induction hardening job work in Punjab, especially in gear and shaft manufacturing.</p>
            
            <h3 className="text-2xl font-bold mt-8">3. EN24 (AISI 4340) – Nickel-Chromium-Molybdenum Steel</h3>
            <p><strong>Composition:</strong> 0.40% Carbon with Ni, Cr, and Mo.</p>
            <p>EN24 is ideal for heavy engineering and transmission applications where both surface wear resistance and core strength are required.</p>

            <h3 className="text-2xl font-bold mt-8">4. 4140 – Chromium-Molybdenum Steel</h3>
            <p><strong>Composition:</strong> Similar to EN19 (0.40% Carbon, Cr-Mo base).</p>
            <p>4140 offers reliable heat treatment consistency, especially in precision-engineered gearbox and spindle components.</p>
            
            <h3 className="text-2xl font-bold mt-8">5. 4340 – Nickel-Chromium-Molybdenum Steel</h3>
            <p><strong>Composition:</strong> 0.40% Carbon, 1.8% Nickel.</p>
            <p>4340 is preferred for high-performance industrial applications and critical rotating parts in machinery.</p>

            <h3 className="text-2xl font-bold mt-8">6. 20MnCr5 – Case Hardening Steel</h3>
            <p><strong>Composition:</strong> 0.20% Carbon, 1.25% Manganese, and 1% Chromium.</p>
            <p>20MnCr5 is the industry-standard material for precision gear and pinion induction hardening in automotive and tractor industries.</p>
            
            <h3 className="text-2xl font-bold mt-8">7. Tool Steels (D2, H13, M2)</h3>
            <p>These steels are used for specialized tooling in forging and manufacturing industries across Punjab.</p>

            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material Grade</TableHead>
                            <TableHead>Typical Application</TableHead>
                            <TableHead>Hardness After Induction</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map((row) => (
                            <TableRow key={row.grade}>
                                <TableCell className="font-medium">{row.grade}</TableCell>
                                <TableCell>{row.application}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Material Matters in Induction Hardening</h2>
            <p>The success of induction heat treatment depends as much on the material composition as on the process itself. At {SITE_NAME}, we combine scientific metallurgy with modern induction systems to ensure every material grade achieves its maximum performance.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Material-Specific Induction Hardening?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for custom heat treatment services for all steel grades.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/material-heat-treatment">Explore Services</Link>
                    </Button>
                </div>
            </div>
          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}

    