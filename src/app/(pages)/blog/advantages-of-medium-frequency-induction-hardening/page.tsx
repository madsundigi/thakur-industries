
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Zap } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Advantages of Medium Frequency Induction Hardening',
  description: 'Discover why medium frequency induction hardening is ideal for shafts, gears, and heavy components in Punjab.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Advantages of Medium Frequency Induction Hardening",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Processes",
  "keywords": ["medium frequency induction hardening", "induction heat treatment frequency Punjab", "heat penetration control"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/advantages-of-medium-frequency-induction-hardening",
  "inLanguage": "en"
};

const frequencyTableData = [
    { frequency: "High Frequency", range: "100–400 kHz", depth: "0.5–2.0", applications: "Small gears, pins, splines" },
    { frequency: "Medium Frequency", range: "10–50 kHz", depth: "2.0–5.0", applications: "Shafts, axles, rollers" },
    { frequency: "Low Frequency", range: "1–10 kHz", depth: "5.0–10.0", applications: "Large forgings, crankshafts" }
];

const materialsData = [
    "EN8 / C45",
    "EN19 / 4140",
    "EN24 / 4340",
    "20MnCr5, 42CrMo4, and other alloy steels"
];

const componentsData = [
    "Transmission shafts",
    "Axles and rollers",
    "Couplings and spindles",
    "Gear hubs and crankshafts"
];

const applicationsData = [
    { industry: "Automotive & Tractor Manufacturing", icon: '🚗' },
    { industry: "Machine Tools & Forging Units", icon: '⚙️' },
    { industry: "Heavy Industrial Equipment", icon: '🧱' },
    { industry: "Roller & Shaft Manufacturing", icon: '🧲' }
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogMediumFrequency');

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
                    <span className='truncate'>Advantages of Medium Frequency Induction Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Advantages of Medium Frequency Induction Hardening</h1>
                <p className="mt-4 text-xl text-muted-foreground">Discover why medium frequency induction hardening is ideal for shafts, gears, and heavy components in Punjab.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Medium frequency induction hardening in action"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">Introduction: Balancing Depth and Precision</h2>
            <p>In the world of induction heat treatment, frequency plays a crucial role in determining how deeply and uniformly a part is hardened. While high-frequency induction is suitable for small, precise parts like gear teeth, and low-frequency systems are used for very large components, the medium frequency range (10–50 kHz) offers the perfect balance for industrial parts like shafts, axles, and gears.</p>
            <p>At {SITE_NAME}, Ludhiana, we specialize in medium frequency induction hardening services, helping industries across Punjab achieve deep, uniform case hardening with minimal distortion — ideal for automotive, agricultural, and machine tool components.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Is Medium Frequency Induction Hardening?</h2>
            <p>Medium frequency induction hardening is a surface hardening process where alternating electromagnetic fields heat the metal’s surface to its austenitizing temperature (850–950°C) before rapid quenching. In this frequency range, the heat penetrates deeper (typically 2–5 mm), the process offers precise temperature control, and it ensures consistent case depth and hardness without overheating or cracking.</p>

            <h2 className="text-3xl font-bold mt-12">How Frequency Affects Heat Treatment</h2>
            <p>The depth of heating in induction hardening depends directly on the frequency of the current applied to the induction coil.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Frequency Type</TableHead>
                            <TableHead>Range (kHz)</TableHead>
                            <TableHead>Approx. Case Depth (mm)</TableHead>
                            <TableHead>Typical Applications</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {frequencyTableData.map((row) => (
                            <TableRow key={row.frequency}>
                                <TableCell className="font-medium">{row.frequency}</TableCell>
                                <TableCell>{row.range}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                                <TableCell>{row.applications}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Advantages of Medium Frequency Induction Hardening</h2>
            <h3 className="text-2xl font-semibold mt-6">1. Optimal Case Depth and Heat Penetration</h3>
            <p>Medium frequency provides moderate heating depth (2–5 mm), perfect for automotive shafts, rollers, and gears. It ensures even hardness distribution and controlled heating, eliminating overheating on thin surfaces.</p>

            <h3 className="text-2xl font-semibold mt-6">2. Improved Energy Efficiency</h3>
            <p>Compared to conventional furnaces or flame hardening, medium frequency induction heating reduces energy waste, delivers heat directly to the part surface, and achieves 85–90% electrical efficiency.</p>

            <h3 className="text-2xl font-semibold mt-6">3. Uniform Heating and Hardness</h3>
            <p>Medium frequency systems maintain uniform temperature distribution, preventing hot spots or soft zones. This leads to consistent metallurgical structure, precise case depth, and improved product reliability.</p>

            <h3 className="text-2xl font-semibold mt-6">4. Reduced Distortion and Cracking</h3>
            <p>Medium frequency systems minimize warping and cracking through gradual heating, controlled quenching, and custom coil design for uniform heat coverage.</p>
            
            <h3 className="text-2xl font-semibold mt-6">5. Versatility Across Components and Materials</h3>
            <p>Medium frequency hardening is suitable for various steel grades and component types used in Ludhiana’s industries, including:</p>
            <h4 className="font-bold mt-4">Compatible Materials:</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {materialsData.map(material => <li key={material}>{material}</li>)}
            </ul>
            <h4 className="font-bold mt-4">Component Examples:</h4>
             <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {componentsData.map(component => <li key={component}>{component}</li>)}
            </ul>
            
            <h3 className="text-2xl font-semibold mt-6">6. Better Control Over Heat Penetration</h3>
            <p>By adjusting the frequency and power density, operators can precisely control case depth, temperature rise rate, and quenching time. This makes medium frequency hardening ideal for components that need customized hardness profiles.</p>

            <h3 className="text-2xl font-semibold mt-6">7. Lower Operating Costs and Maintenance</h3>
            <p>Medium frequency induction equipment offers lower coil wear, reduced cooling system stress, and a long equipment lifespan, resulting in lower production costs.</p>

            <h2 className="text-3xl font-bold mt-12">Conclusion: The Smart Choice for Industrial Heat Treatment</h2>
            <p>Medium frequency induction hardening bridges the gap between speed and depth — making it the most balanced and efficient heat treatment technique for modern manufacturing. For automotive, forging, and machinery industries in Ludhiana and Punjab, it offers unmatched strength, efficiency, and dimensional accuracy.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Contact {SITE_NAME} Today</h3>
                <p className="mt-2 text-muted-foreground">For professional medium frequency induction hardening services in Punjab, contact {SITE_NAME}, Ludhiana.</p>
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
