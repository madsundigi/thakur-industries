
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Zap } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

export const metadata: Metadata = {
  title: 'Induction Hardening for Agricultural Equipment Parts',
  description: 'Increase the strength and life of agricultural machinery parts like spindles, axles, and blades using induction hardening.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening for Agricultural Equipment Parts",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Agricultural Heat Treatment",
  "keywords": ["agricultural equipment heat treatment", "tractor component hardening Punjab", "spindle heat treatment Ludhiana"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/induction-hardening-for-agricultural-implements",
  "inLanguage": "en"
};

const componentsData = [
    { component: "Tractor Spindles & Axles", material: "EN19, EN24", purpose: "Improved fatigue and bending strength" },
    { component: "Tiller Blades & Shafts", material: "EN8, EN9", purpose: "Surface hardness for soil abrasion" },
    { component: "Rotavator Shafts", material: "4140, 4340", purpose: "Enhanced torsional strength" },
    { component: "Couplings & Hubs", material: "EN19", purpose: "Longer service under load" },
    { component: "Gear & Pinion Sets", material: "EN36, 20MnCr5", purpose: "Increased surface wear resistance" },
];

const hardnessData = [
    { component: "Tractor Spindle", material: "EN19", hardness: "55–58", depth: "2.5–3.0", quench: "Polymer" },
    { component: "Axle Shaft", material: "EN24", hardness: "58–60", depth: "3.0–4.0", quench: "Water" },
    { component: "Rotavator Shaft", material: "4140", hardness: "54–57", depth: "2.0–3.5", quench: "Polymer" },
    { component: "Tiller Blade", material: "EN8", hardness: "50–54", depth: "1.5–2.0", quench: "Water" },
];

const comparisonData = [
    { parameter: 'Heating Method', induction: 'Electromagnetic', flame: 'Flame / Furnace' },
    { parameter: 'Cycle Time', induction: '10–30 seconds', flame: '1–2 hours' },
    { parameter: 'Energy Efficiency', induction: '85–90%', flame: '40–50%' },
    { parameter: 'Surface Control', induction: 'Precise', flame: 'Variable' },
    { parameter: 'Distortion', induction: 'Minimal', flame: 'Moderate to High' },
    { parameter: 'Environmental Impact', induction: 'Clean', flame: 'Polluting' }
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogAgricultural');

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
                    <span className='truncate'>Agricultural Equipment Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening for Agricultural Equipment Parts</h1>
                <p className="mt-4 text-xl text-muted-foreground">Punjab, known as the agricultural hub of India, depends on reliable and high-performance machinery — from tractors and tillers to harvesters and ploughing tools. The performance and lifespan of these machines depend on the durability of critical metal parts, which undergo constant wear and tear in harsh conditions.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Induction hardening of agricultural equipment parts"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>That’s where induction hardening becomes a game changer. At {SITE_NAME}, Ludhiana, we specialize in heat treatment job work for agricultural machinery components, ensuring enhanced hardness, toughness, and wear resistance.</p>
            <p className='font-semibold text-foreground'>We harden the heart of every machine that feeds the nation.</p>
            
            <h2 className="text-3xl font-bold mt-12">Why Induction Hardening for Agricultural Equipment?</h2>
            <p>Agricultural equipment operates under heavy load, abrasive soil contact, and frequent impact. Standard steel components can quickly wear down without proper surface hardening. Induction hardening offers an ideal solution by transforming the surface into a hardened martensitic layer, while keeping the inner structure tough and flexible.</p>
            <h3 className="text-2xl font-semibold mt-6">Benefits for Farm Machinery Components:</h3>
            <ul className='list-disc list-inside space-y-2 text-muted-foreground'>
                <li>Increased wear and abrasion resistance</li>
                <li>Improved fatigue strength and load-bearing capacity</li>
                <li>Reduced downtime and replacement costs</li>
                <li>Enhanced resistance to bending and deformation</li>
            </ul>
            <p className='font-semibold text-foreground mt-4'>When farm work gets tough, induction-hardened parts stay tougher.</p>
            
            <h2 className="text-3xl font-bold mt-12">Common Agricultural Components Treated with Induction Hardening</h2>
            <p>At {SITE_NAME}, we handle a wide range of tractor and implement components used in tillage, seeding, harvesting, and soil preparation.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Typical Material</TableHead>
                            <TableHead>Purpose of Hardening</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {componentsData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.material}</TableCell>
                                <TableCell>{row.purpose}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
             <p className='font-semibold text-foreground'>From small spindles to large shafts, our induction systems are calibrated for precision and consistency.</p>

            <h2 className="text-3xl font-bold mt-12">The Induction Hardening Process for Agricultural Parts</h2>
            <p>At {SITE_NAME}, Ludhiana, we follow a controlled electromagnetic process customized for agricultural-grade steels.</p>
            <h3 className='text-2xl font-semibold mt-4'>Step-by-Step Process:</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground mt-4">
                <li><strong>Pre-cleaning & Setup:</strong> Remove rust, oil, and contaminants before heating.</li>
                <li><strong>Induction Heating:</strong> Electromagnetic coils generate heat in the desired surface zone (typically 850°C–950°C).</li>
                <li><strong>Rapid Quenching:</strong> Polymer or water quenching transforms the structure into hard martensite.</li>
                <li><strong>Tempering (Optional):</strong> Reduces internal stress, maintaining toughness.</li>
                <li><strong>Testing:</strong> Surface hardness and case depth verified using digital testers.</li>
            </ol>
            <p className='font-semibold text-foreground mt-4'>Each part undergoes digitally controlled heating and cooling cycles for uniform hardness and zero distortion.</p>

            <h2 className="text-3xl font-bold mt-12">Typical Hardness Results for Agricultural Components</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Material</TableHead>
                            <TableHead>Surface Hardness (HRC)</TableHead>
                            <TableHead>Case Depth (mm)</TableHead>
                            <TableHead>Quenching Medium</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {hardnessData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.material}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                                <TableCell>{row.quench}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p className='font-semibold text-foreground'>We match the hardening parameters with the working load and application of each part.</p>

            <h2 className="text-3xl font-bold mt-12">Advantages of Induction Hardening for Agricultural Industries</h2>
            <ul className='list-disc list-inside space-y-2 text-muted-foreground'>
                <li><span className='font-bold text-foreground'>Extended Component Life:</span> Hardened surfaces resist abrasive wear caused by soil, stones, and constant rotation.</li>
                <li><span className='font-bold text-foreground'>Reduced Maintenance Costs:</span> Longer-lasting components mean fewer breakdowns and replacements.</li>
                <li><span className='font-bold text-foreground'>Improved Field Performance:</span> Toughened shafts, axles, and spindles ensure smoother and more efficient operation in demanding terrains.</li>
                <li><span className='font-bold text-foreground'>Localized Heating:</span> Only specific zones are treated, minimizing energy use and distortion.</li>
                <li><span className='font-bold text-foreground'>Eco-Friendly & Clean Process:</span> No open flames or fumes — ideal for sustainable manufacturing setups.</li>
            </ul>
             <p className='font-semibold text-foreground mt-4'>Harder parts mean stronger harvests and reduced downtime for farmers.</p>

            <h2 className="text-3xl font-bold mt-12">Induction vs Conventional Hardening for Agricultural Equipment</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Induction Hardening</TableHead>
                            <TableHead>Flame / Furnace Hardening</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.induction}</TableCell>
                                <TableCell>{row.flame}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p className='font-semibold text-foreground'>Induction hardening is faster, cleaner, and far more precise — ideal for modern agricultural manufacturing.</p>
            
            <h2 className="text-3xl font-bold mt-12">Why Choose Thakur Industries in Ludhiana</h2>
            <p>As one of Punjab’s leading induction hardening service providers, {SITE_NAME} works closely with tractor OEMs, implement manufacturers, and farm machinery suppliers to deliver reliable, high-quality heat treatment job work.</p>
            <h3 className="text-2xl font-semibold mt-6">Our Capabilities Include:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>State-of-the-art induction machines (medium & high-frequency)</li>
                <li>Custom coil designs for spindles, axles, and gears</li>
                <li>Water & polymer quenching systems for controlled cooling</li>
                <li>Expertise in EN-series and 41XX steels</li>
                <li>Digital process control and hardness testing</li>
            </ul>
            <p className='font-semibold text-foreground mt-4'>Trusted by Punjab’s leading tractor and implement manufacturers for precision heat treatment.</p>

            <h2 className="text-3xl font-bold mt-12">Conclusion: The Backbone of Stronger Agricultural Equipment</h2>
            <p>In agriculture, equipment reliability directly affects productivity and profits. Induction hardening ensures that essential components like spindles, axles, and shafts remain strong, precise, and long-lasting — even under harsh field conditions.</p>
            <p>At {SITE_NAME}, Ludhiana, we provide agricultural component heat treatment job work that meets OEM standards and helps farmers get more value from their machinery.</p>
             <p className='font-semibold text-foreground mt-4'>Precision hardening for the parts that power Punjab’s fields.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Reliable Tractor Component Hardening?</h3>
                <p className="mt-2 text-muted-foreground">Connect with {SITE_NAME}, Ludhiana’s trusted partner for industrial heat treatment services.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/services">Explore Services</Link>
                    </Button>
                </div>
            </div>
          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}
