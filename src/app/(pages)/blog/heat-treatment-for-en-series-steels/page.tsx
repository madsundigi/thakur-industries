
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
  title: 'Heat Treatment & Induction Hardening for EN Series Steels - EN8, EN19, EN24',
  description: 'Detailed guide on induction hardening & heat treatment processes for EN steels widely used in Punjab\'s industries.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Heat Treatment & Induction Hardening for EN Series Steels — EN8, EN19, EN24",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": "2024-08-25",
  "articleSection": "Heat Treatment Materials",
  "keywords": ["heat treatment for EN steels", "EN8 heat treatment", "EN19 induction hardening", "EN24 steel hardening Punjab"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/heat-treatment-for-en-series-steels",
  "inLanguage": "en"
};

const enSeriesData = [
    { grade: "EN8", equivalent: "C40 / 1040", carbon: "0.40", alloy: "None (Plain Carbon)", application: "Shafts, Pins, Gears" },
    { grade: "EN19", equivalent: "4140", carbon: "0.40", alloy: "Cr, Mo", application: "Gears, Crankshafts, Shafts" },
    { grade: "EN24", equivalent: "4340", carbon: "0.40", alloy: "Ni, Cr, Mo", application: "Axles, Spindles, Heavy Gears" },
];

const quenchingData = [
    { type: "Water Quenching", suitable: "EN8, large parts", rate: "Fast", benefit: "Deep case hardness" },
    { type: "Polymer Quenching", suitable: "EN19, EN24, precision parts", rate: "Controlled", benefit: "Reduced distortion & cracking" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogEnSeries');

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
                    <span className='truncate'>EN Series Steel Heat Treatment</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Heat Treatment & Induction Hardening for EN Series Steels — EN8, EN19, EN24</h1>
                <p className="mt-4 text-xl text-muted-foreground">From automotive shafts to industrial gears and axles, the EN series steels are among the most widely used materials in Punjab’s manufacturing ecosystem.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Various EN series steel components"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <p>At {SITE_NAME}, Ludhiana, we specialize in heat treatment for EN steels, optimizing hardness, fatigue resistance, and wear strength through advanced induction processes tailored to each grade.</p>

            <h2 className="text-3xl font-bold mt-12">What Are EN Series Steels?</h2>
            <p>The “EN” in EN steels stands for European Norms, a classification for engineering steels. Each EN grade has specific mechanical properties and alloy compositions, making it suitable for different applications and heat treatment techniques.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Steel Grade</TableHead>
                            <TableHead>Equivalent (AISI)</TableHead>
                            <TableHead>Carbon %</TableHead>
                            <TableHead>Key Alloying Elements</TableHead>
                            <TableHead>Typical Application</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {enSeriesData.map(row => (
                            <TableRow key={row.grade}>
                                <TableCell className="font-medium">{row.grade}</TableCell>
                                <TableCell>{row.equivalent}</TableCell>
                                <TableCell>{row.carbon}</TableCell>
                                <TableCell>{row.alloy}</TableCell>
                                <TableCell>{row.application}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">EN8 Heat Treatment – Medium Carbon Steel</h2>
            <p>EN8 is a medium carbon steel known for its excellent balance of strength, hardness, and toughness. It is one of the most commonly used steels in Ludhiana’s automotive and machine part manufacturing industries.</p>
            <h3 className="text-2xl font-semibold mt-6">EN8 Heat Treatment Process:</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Induction Heating:</strong> Heated to ~850°C using medium frequency for surface hardening.</li>
                <li><strong>Quenching:</strong> Rapidly cooled using polymer or water, creating a hard martensitic layer.</li>
                <li><strong>Tempering (Optional):</strong> Reheated to ~150–200°C to relieve stress and enhance ductility.</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12">EN19 Induction Hardening – Chromium-Molybdenum Alloy Steel</h2>
            <p>EN19, equivalent to AISI 4140, is an alloy steel with chromium and molybdenum additions that provide deep hardenability and high fatigue strength. It is widely used in components that experience torsional and bending loads.</p>
            <h3 className="text-2xl font-semibold mt-6">EN19 Induction Hardening Process:</h3>
             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Induction Heating:</strong> Heated to 850–900°C using medium frequency.</li>
                <li><strong>Quenching:</strong> Polymer quenching used for controlled cooling and reduced distortion.</li>
                <li><strong>Tempering:</strong> Carried out at ~200°C to enhance impact toughness.</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12">EN24 Steel Hardening – Nickel-Chromium-Molybdenum Alloy Steel</h2>
            <p>EN24 (AISI 4340) is a high-strength alloy steel known for exceptional toughness and deep hardenability. It is used in critical, high-stress parts that must endure impact, bending, and rotational forces.</p>
            <h3 className="text-2xl font-semibold mt-6">EN24 Heat Treatment Process:</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Induction Heating:</strong> Surface heated to 870–900°C using high frequency.</li>
                <li><strong>Polymer Quenching:</strong> Ensures deep hardening with minimal distortion.</li>
                <li><strong>Tempering:</strong> Carried out at ~250°C for stability and shock resistance.</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12">Role of Quenching in EN Steel Hardening</h2>
            <p>The quenching stage plays a crucial role in determining surface hardness and structure. At {SITE_NAME}, both water and polymer quenching systems are used depending on component geometry and alloy composition.</p>
             <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Quenching Type</TableHead>
                            <TableHead>Suitable For</TableHead>
                            <TableHead>Cooling Rate</TableHead>
                            <TableHead>Key Benefit</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {quenchingData.map(row => (
                            <TableRow key={row.type}>
                                <TableCell className="font-medium">{row.type}</TableCell>
                                <TableCell>{row.suitable}</TableCell>
                                <TableCell>{row.rate}</TableCell>
                                <TableCell>{row.benefit}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Reliable Heat Treatment for EN Steels in Punjab</h2>
            <p>The heat treatment for EN steels is the foundation of high-quality manufacturing in Punjab’s industrial ecosystem. Through precise induction hardening, controlled quenching, and tempering, {SITE_NAME} ensures that each component achieves optimal hardness, fatigue strength, and dimensional stability.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Induction Hardening for EN Steels?</h3>
                <p className="mt-2 text-muted-foreground">Get in touch with {SITE_NAME} for professional heat treatment and induction hardening job work for EN8, EN19, and EN24 materials.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/material-heat-treatment">View Material Services</Link>
                    </Button>
                </div>
            </div>
          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}
