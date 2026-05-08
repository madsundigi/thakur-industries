
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Zap, Shield, Thermometer, AlertTriangle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Induction Hardening for Shafts & Axles in Ludhiana, Punjab',
  description: 'Learn how induction hardening improves the strength and fatigue life of shafts and axles in Punjab’s industries.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening for Shafts & Axles in Ludhiana, Punjab",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Processes",
  "keywords": ["shaft hardening process", "axle hardening Ludhiana", "drive shaft heat treatment"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/induction-hardening-for-shafts-and-axles",
  "inLanguage": "en"
};

const materialsData = [
    { material: "EN8 (C40 Steel)", application: "Standard automotive shafts", hardness: "50–55" },
    { material: "EN19 (4140 Alloy)", application: "Heavy-duty axles & spindles", hardness: "52–58" },
    { material: "EN24 (4340 Alloy)", application: "Drive shafts & industrial rollers", hardness: "55–60" },
    { material: "20MnCr5", application: "Transmission shafts & gears", hardness: "58–62" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogShaftsAndAxles');

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
                    <span className='truncate'>Induction Hardening for Shafts & Axles</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening for Shafts & Axles in Ludhiana, Punjab</h1>
                <p className="mt-4 text-xl text-muted-foreground">Shafts and axles are critical components in automotive, industrial, and agricultural machinery. They transmit torque, handle high loads, and operate under constant friction.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Induction hardening process for industrial shafts and axles"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>At {SITE_NAME}, we specialize in the shaft hardening process, using precision-controlled induction heating and quenching to deliver uniform hardness and superior fatigue resistance.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Is the Shaft Hardening Process?</h2>
            <p>The shaft hardening process involves selectively heating the outer surface of the shaft using induction coils and then rapidly cooling it (quenching). This transforms the metal’s outer layer into a martensitic structure — making it extremely hard — while the core remains tough and ductile.</p>

            <h2 className="text-3xl font-bold mt-12">Advantages of Induction Hardening for Shafts and Axles</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><span className="font-bold text-foreground">Improved Wear Resistance:</span> Hardened surfaces withstand friction, extending service life.</li>
                <li><span className="font-bold text-foreground">High Fatigue Strength:</span> Reduces failure under cyclic loading or bending.</li>
                <li><span className="font-bold text-foreground">Dimensional Accuracy:</span> Localized heating minimizes warping and distortion.</li>
                <li><span className="font-bold text-foreground">Clean & Energy Efficient:</span> No open flames or pollution; process is fully electric.</li>
                <li><span className="font-bold text-foreground">Customizable Hardness:</span> Depth and hardness can be tailored for each material.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Axle Hardening in Ludhiana: Trusted by Punjab’s Industry</h2>
            <p>Axles bear enormous mechanical stress — especially in tractors, trucks, and heavy industrial equipment. They require hard surfaces to handle impact loads and rotational friction. At {SITE_NAME}, we provide axle hardening job work in Ludhiana using medium-frequency induction machines, polymer quenching systems, and automated rotation systems for uniform heating.</p>

            <h2 className="text-3xl font-bold mt-12">Drive Shaft Heat Treatment – Strength Where It Counts</h2>
            <p>The drive shaft is a key link in power transmission systems. Drive shaft heat treatment through induction hardening improves torsional strength, ensures consistent case depth, and reduces the risk of surface cracking. We customize the frequency, power, and quenching speed based on the shaft diameter and material composition.</p>

            <h2 className="text-3xl font-bold mt-12">Materials Commonly Used for Shaft and Axle Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Typical Application</TableHead>
                            <TableHead>Achieved Hardness (HRC)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map((row) => (
                            <TableRow key={row.material}>
                                <TableCell className="font-medium">{row.material}</TableCell>
                                <TableCell>{row.application}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Quality Control at {SITE_NAME}</h2>
            <p>Quality and repeatability are at the core of our induction heat treatment services. Each component processed undergoes multiple quality checks including material validation, hardness testing, case depth measurement, and metallurgical inspection to ensure distortion-free shafts and axles.</p>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Stronger Shafts, Reliable Axles, Long-Lasting Performance</h2>
            <p>The shaft hardening process ensures your mechanical systems perform longer, safer, and with higher precision. Whether you need axle hardening in Ludhiana or drive shaft heat treatment for Punjab’s tractor industry, {SITE_NAME} provides tailored, reliable, and high-accuracy solutions.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Shaft or Axle Hardening Services?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} today for professional induction heat treatment job work.</p>
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
