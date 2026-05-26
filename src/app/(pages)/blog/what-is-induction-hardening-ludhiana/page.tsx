
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

export const metadata: Metadata = {
  title: 'Step-by-Step Guide to the Induction Hardening Process',
  description: 'Learn about the induction hardening process, frequency selection, quenching types, and its use for gears and shafts.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Step-by-Step Guide to the Induction Hardening Process",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": "2024-10-25",
  "articleSection": "Heat Treatment Processes",
  "keywords": ["induction hardening process", "induction heat treatment process", "how induction hardening works"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/what-is-induction-hardening-ludhiana",
  "inLanguage": "en"
};

const frequencyData = [
    { frequency: "Low (1–10 kHz)", depth: "Deep case (3–10 mm)", application: "Shafts, axles, crankshafts" },
    { frequency: "Medium (10–100 kHz)", depth: "Moderate case (1–5 mm)", application: "Gears, rollers, pins" },
    { frequency: "High (100–500 kHz)", depth: "Shallow case (<2 mm)", application: "Small precision parts" }
];


export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogPost1');

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
                    <span className='truncate'>Guide to Induction Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Step-by-Step Guide to the Induction Hardening Process</h1>
                <p className="mt-4 text-xl text-muted-foreground">In the competitive world of manufacturing and automotive engineering, component reliability depends on one critical factor — surface strength. That’s where the induction hardening process plays a major role.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Induction hardening process visualization"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>From gears and shafts to crankshafts and pins, manufacturers across Ludhiana and Punjab rely on induction hardening to enhance durability, wear resistance, and performance without compromising flexibility. Let’s break down how induction hardening works, what makes it superior to conventional heat treatment, and why it’s the preferred process for precision job work.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Is Induction Hardening?</h2>
            <p>Induction hardening is a surface heat treatment process that uses electromagnetic induction to heat the outer layer of a steel component. The heat is then followed by rapid quenching, which hardens the surface while keeping the inner core tough. This method is most commonly applied to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Gears</li>
                <li>Shafts</li>
                <li>Axles</li>
                <li>Spindles</li>
                <li>Pins and Rollers</li>
            </ul>
            <p>Because the process is localized, it allows engineers to strengthen only the wear zones of a component — saving time, energy, and material life.</p>

            <h2 className="text-3xl font-bold mt-12">Step 1: Heating by Electromagnetic Induction</h2>
            <p>The process begins when the metal component is placed inside a copper induction coil. When a high-frequency alternating current flows through the coil, it creates a magnetic field around the component. This field induces eddy currents on the component’s surface, heating it rapidly to the desired temperature (usually between 850°C and 950°C, depending on the steel grade).</p>
            <h3 className="text-2xl font-semibold mt-6">Key Parameters:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Power Frequency:</strong> Determines how deeply heat penetrates</li>
                <li><strong>Heating Time:</strong> Controls surface temperature and case depth</li>
                <li><strong>Coil Design:</strong> Ensures uniform heat distribution</li>
            </ul>
            <p>At {SITE_NAME}, Ludhiana, advanced medium and high-frequency machines are used to achieve precise, uniform heating for every part — whether EN8, EN19, EN24, or 4340 steel.</p>

            <h2 className="text-3xl font-bold mt-12">Step 2: Quenching (Rapid Cooling)</h2>
            <p>Once the desired temperature is reached, the heated surface is immediately quenched using a water or polymer solution. This step cools the outer layer of the steel so quickly that the austenitic structure transforms into martensite, resulting in high hardness.</p>
            <h3 className="text-2xl font-semibold mt-6">Types of Quenching:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>💧 <strong>Water Quenching:</strong> Provides rapid cooling; best for tough steels and deep case hardness.</li>
                <li>🧪 <strong>Polymer Quenching:</strong> Offers controlled cooling for precision components with minimal distortion.</li>
            </ul>
            <p>The induction heat treatment process achieves hardness values between 50–60 HRC depending on the steel composition and desired performance.</p>

            <h2 className="text-3xl font-bold mt-12">Step 3: Tempering (Optional but Recommended)</h2>
            <p>After hardening, the part may be tempered — a controlled reheating step to relieve internal stresses and improve toughness. Tempering ensures:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Stable microstructure</li>
                <li>Reduced brittleness</li>
                <li>Long-term wear performance</li>
            </ul>
            <p>For example, gears hardened in Ludhiana’s automotive workshops are often tempered to ensure quiet operation and extended fatigue life.</p>

            <h2 className="text-3xl font-bold mt-12">Understanding Frequency Selection in Induction Hardening</h2>
            <p>The frequency of the induction current determines how deeply heat penetrates into the material — an essential aspect for engineers.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold">Frequency Type</TableHead>
                            <TableHead className="font-bold">Depth of Hardening</TableHead>
                            <TableHead className="font-bold">Typical Application</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {frequencyData.map(row => (
                            <TableRow key={row.frequency}>
                                <TableCell className="font-medium">{row.frequency}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                                <TableCell>{row.application}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p>By adjusting frequency and heating duration, {SITE_NAME}’s specialists customize the hardness depth and profile for each job work component.</p>
            
            <h2 className="text-3xl font-bold mt-12">Advantages of the Induction Hardening Process</h2>
            <p>The benefits of the induction heat treatment process make it ideal for high-volume production and precision manufacturing.</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Localized Hardening</strong> — Only the functional surface is treated, minimizing distortion.</li>
                <li><strong>Repeatable Results</strong> — Digital process controls ensure identical results for every batch.</li>
                <li><strong>Energy Efficiency</strong> — Faster heating saves energy and reduces cost per component.</li>
                <li><strong>Enhanced Durability</strong> — Hardened surfaces withstand friction, wear, and fatigue.</li>
                <li><strong>Clean & Eco-Friendly</strong> — No open flames or toxic emissions.</li>
            </ol>
            <p>Industries in Punjab’s manufacturing hubs use induction hardening to meet tight tolerances, improve strength, and extend component life.</p>

            <h2 className="text-3xl font-bold mt-12">Applications: Where Induction Hardening Is Used</h2>
            <p>The induction hardening process is widely used in:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Automotive Manufacturing</strong> – Gears, shafts, axles, crankshafts</li>
                <li><strong>Agricultural Equipment</strong> – Tractor spindles, PTO shafts, transmission gears</li>
                <li><strong>Industrial Machinery</strong> – Rollers, couplings, cams, and die components</li>
            </ul>
            <p>In Ludhiana’s engineering industries, this process supports high-precision job work for both OEM production and after-market requirements.</p>

            <h2 className="text-3xl font-bold mt-12">Why Industries in Punjab Prefer Induction Over Conventional Hardening</h2>
            <p>Traditional flame or furnace hardening methods heat the entire component, causing excessive energy consumption and potential distortion. Induction hardening, however, is fast, localized, and highly controllable, ensuring:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Minimal material deformation</li>
                <li>Improved metallurgical uniformity</li>
                <li>Better repeatability for mass production</li>
            </ul>
            <p>For businesses in Ludhiana, Rajpura, Khanna, and Mandi Gobindgarh, these advantages make induction the preferred heat treatment solution.</p>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Induction Hardening — The Future of Heat Treatment</h2>
            <p>The induction hardening process represents the future of industrial metallurgy — combining precision, energy efficiency, and consistent quality. For industries across Ludhiana and Punjab, it offers a proven way to increase component life, reduce failure rates, and achieve superior product performance.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Induction Hardening Job Work in Ludhiana, Punjab?</h3>
                <p className="mt-2 text-muted-foreground">Partner with {SITE_NAME} — a trusted name in induction hardening, case hardening, and surface heat treatment job work across Punjab.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/services">Explore Our Services</Link>
                    </Button>
                </div>
            </div>
          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}
