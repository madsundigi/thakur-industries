import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Car, Tractor, HardHat } from 'lucide-react';
import { SITE_NAME } from '@/lib/constants';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'Induction Hardening Job Work for Automotive Components in Ludhiana & Punjab',
  description: "We provide specialized induction hardening services for automotive gears, shafts, and crankshafts for Punjab's automotive industry.",
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening for Automotive Parts — Strength That Drives Performance",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": "2024-07-30",
  "articleSection": "Automotive Heat Treatment",
  "keywords": ["induction hardening for automotive parts", "automotive shaft heat treatment", "gear hardening", "crankshaft hardening Ludhiana"],
  "mainEntityOfPage": "https://thakurinduction.com/blog/induction-hardening-for-automotive-parts",
  "inLanguage": "en"
};

const materialData = [
    { material: "EN8 (C40)", equivalent: "Medium Carbon Steel", application: "Shafts, Pins, Gears" },
    { material: "EN19 (4140)", equivalent: "Alloy Steel", application: "Crankshafts, Shafts" },
    { material: "EN24 (4340)", equivalent: "High Strength Alloy", application: "Gears, Axles" },
    { material: "20MnCr5 / 16MnCr5", equivalent: "Case Hardening Steel", application: "Transmission Gears" },
    { material: "Tool Steels (D2, O1)", equivalent: "Die & Mould Components", application: "Wear Surfaces" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogAutomotiveParts');

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
                    <span className='truncate'>Automotive Parts Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening for Automotive Parts — Strength That Drives Performance</h1>
                <p className="mt-4 text-xl text-muted-foreground">The automotive industry relies on components that operate under extreme stress. To ensure long-lasting reliability, these parts must be hardened with precision. That’s where induction hardening comes in.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Induction hardening of automotive components"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>At {SITE_NAME}, Ludhiana, we specialize in induction hardening for automotive parts, offering surface strengthening solutions for gears, shafts, crankshafts, axles, and pinions used across Punjab’s leading vehicle and tractor manufacturing units.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Is Induction Hardening for Automotive Components?</h2>
            <p>Induction hardening is a surface heat treatment method that uses electromagnetic induction to rapidly heat a specific area of a steel component, followed by quenching (cooling) to harden the surface. In automotive manufacturing, this process is used to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Strengthen high-wear components like gears and shafts</li>
                <li>Improve fatigue resistance under torque loads</li>
                <li>Maintain tough, flexible cores that absorb shocks</li>
            </ul>
            <p>The result? Parts that last longer, perform better, and reduce maintenance costs — essential for both passenger and commercial vehicles.</p>

            <h2 className="text-3xl font-bold mt-12">Key Automotive Parts Suitable for Induction Hardening</h2>
            
            <h3 className="text-2xl font-semibold mt-6">1. Shafts (Drive, Cam, and Axle Shafts)</h3>
            <p>Shafts experience continuous torsional stress. By hardening only the surface layer, induction ensures maximum wear resistance without compromising the shaft’s flexibility. Benefits include improved fatigue strength, reduced wear on bearing surfaces, and enhanced torsional load capacity.</p>

            <h3 className="text-2xl font-semibold mt-6">2. Gears (Transmission, Differential, and Pinion Gears)</h3>
            <p>Gears are constantly under rolling and sliding contact. Induction hardening increases their surface hardness, leading to a longer operational life, enhanced power transmission efficiency, and quieter operation. We treat both spur and helical gears with precise coil design.</p>
            
            <h3 className="text-2xl font-semibold mt-6">3. Crankshafts and Camshafts</h3>
            <p>Crankshafts convert linear motion into rotational power. Induction hardening of crankshaft journals and fillets prevents fatigue failure. Camshafts benefit from localized lobe and journal hardening, improving wear resistance and valve timing precision.</p>

            <h3 className="text-2xl font-semibold mt-6">4. Axles and CV Joints</h3>
            <p>Axles and Constant Velocity (CV) joints endure both bending and rotational loads. Surface hardening increases durability, especially under dynamic suspension and torque variations, leading to longer axle life and better performance in tractors and heavy vehicles.</p>
            
            <h3 className="text-2xl font-semibold mt-6">5. Spindles, Pins & Couplings</h3>
            <p>For components like king pins, spindles, and couplings, induction hardening improves mechanical integrity and prevents wear at pivot points, which is vital for vehicle safety in steering, braking, and suspension assemblies.</p>

            <h2 className="text-3xl font-bold mt-12">Benefits of Induction Hardening for Automotive Manufacturing</h2>
            <p>The automotive industry in Punjab has embraced induction hardening due to its precision and repeatability. Key benefits include:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><span className="font-semibold text-foreground">Targeted Hardening:</span> Only critical zones are hardened, minimizing distortion.</li>
                <li><span className="font-semibold text-foreground">Consistent Results:</span> Automated temperature control ensures uniform hardness.</li>
                <li><span className="font-semibold text-foreground">Improved Durability:</span> Components resist wear, fatigue, and friction.</li>
                <li><span className="font-semibold text-foreground">Efficient Cooling:</span> Polymer and water quenching enable accurate case depth control.</li>
                <li><span className="font-semibold text-foreground">Eco-Friendly Process:</span> No gas furnaces or open flames.</li>
            </ul>
             <p>Each treated component undergoes hardness testing and case depth verification at {SITE_NAME} to meet OEM standards.</p>

            <h2 className="text-3xl font-bold mt-12">Materials Commonly Used in Automotive Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Equivalent Grade</TableHead>
                            <TableHead>Common Application</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialData.map(row => (
                            <TableRow key={row.material}>
                                <TableCell className="font-medium">{row.material}</TableCell>
                                <TableCell>{row.equivalent}</TableCell>
                                <TableCell>{row.application}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Driving Performance Through Precision Heat Treatment</h2>
            <p>The future of automotive manufacturing depends on durable, precisely treated components. For automotive manufacturers in Ludhiana and across Punjab, partnering with {SITE_NAME} ensures components meet the highest performance standards — every time.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Automotive Induction Hardening Services?</h3>
                <p className="mt-2 text-muted-foreground">{SITE_NAME} offers custom induction hardening job work for gears, shafts, and crankshafts.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
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