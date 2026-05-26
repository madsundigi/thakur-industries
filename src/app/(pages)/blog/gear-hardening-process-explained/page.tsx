
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
  title: 'Understanding the Gear Hardening Process in Induction Heat Treatment',
  description: 'Step-by-step explanation of induction gear hardening, quenching, and hardness testing in Ludhiana & Punjab.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Understanding the Gear Hardening Process in Induction Heat Treatment",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Processes",
  "keywords": ["gear hardening process", "gear teeth heat treatment", "induction gear hardening Ludhiana"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/gear-hardening-process-explained",
  "inLanguage": "en"
};

const advantagesData = [
    { advantage: "High Wear Resistance", description: "Hardened teeth resist abrasion and pitting" },
    { advantage: "Improved Fatigue Life", description: "Withstands repeated torque and stress" },
    { advantage: "Minimal Distortion", description: "Localized heating avoids warping" },
    { advantage: "Consistent Quality", description: "Computer-controlled heating ensures repeatability" },
    { advantage: "Energy & Cost Efficiency", description: "Faster, cleaner, and less wasteful than furnace hardening" },
    { advantage: "Better Dimensional Accuracy", description: "Perfect for precision gears and pinions" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogGearProcess');

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
                    <span className='truncate'>Gear Hardening Process Explained</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Understanding the Gear Hardening Process in Induction Heat Treatment</h1>
                <p className="mt-4 text-xl text-muted-foreground">Gears are at the heart of every machine, tractor, and automotive transmission. They transfer power, handle torque, and ensure smooth rotation under extreme loads. But with constant meshing and friction, gear teeth are highly prone to wear, pitting, and fatigue — leading to failure if not properly hardened.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Illustration showing the gear hardening process"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>At {SITE_NAME}, Ludhiana, we specialize in induction gear hardening — a precision-controlled process that strengthens gear teeth surfaces while keeping the core tough and flexible. This ensures durability, accuracy, and longer life for gears used in automotive, agricultural, and industrial applications across Punjab.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Is Gear Hardening?</h2>
            <p>Gear hardening is a surface heat treatment process that increases the wear resistance and strength of gear teeth. Only the outer layer (case) of the gear is hardened, while the inner core remains tough and ductile. This combination allows gears to handle high stress and repetitive motion without cracking or deforming.</p>

            <h2 className="text-3xl font-bold mt-12">Induction Gear Hardening — The Modern Approach</h2>
            <p>Among all hardening methods, induction hardening is the most advanced, precise, and efficient technique for gears. It uses electromagnetic induction to heat specific areas — typically the gear teeth — followed by rapid quenching to create a hard martensitic structure on the surface.</p>

            <h2 className="text-3xl font-bold mt-12">Step-by-Step: The Gear Hardening Process</h2>
            
            <h3 className="text-2xl font-semibold mt-6">Step 1: Pre-Inspection and Cleaning</h3>
            <p>Before hardening, gears are inspected for material composition, machining accuracy, and surface finish. Any oil, dust, or contaminants are removed to ensure uniform heat absorption during the process. Typical materials include EN8, EN19 (4140), EN24 (4340), 20MnCr5, and carbon/alloy steels.</p>

            <h3 className="text-2xl font-semibold mt-6">Step 2: Induction Heating</h3>
            <p>The gear is placed inside an induction coil precisely designed for its geometry. High-frequency alternating current flows through the coil, creating eddy currents in the gear teeth surface — heating it rapidly to 850–950°C. Key parameters like frequency, heating time, and coil design are controlled to transform the surface layer into austenite, ready for hardening.</p>

            <h3 className="text-2xl font-semibold mt-6">Step 3: Quenching</h3>
            <p>Immediately after heating, the gear surface is cooled rapidly using polymer or water quenching. This transforms the heated austenitic layer into martensite, giving it extreme hardness (typically 55-60 HRC) and wear resistance with a case depth of 1.0–3.0 mm.</p>

            <h3 className="text-2xl font-semibold mt-6">Step 4: Tempering (Optional but Recommended)</h3>
            <p>After quenching, the hardened gear is reheated slightly to 150–250°C to relieve internal stresses. This reduces brittleness and improves toughness and fatigue resistance, especially for gears used in tractors and heavy-duty machines.</p>

            <h3 className="text-2xl font-semibold mt-6">Step 5: Hardness & Case Depth Testing</h3>
            <p>Post-treatment, each gear undergoes quality control checks including Surface Hardness (HRC), Case Depth Measurement, and Microstructure Analysis to ensure it meets the required OEM or industrial standards before delivery.</p>

            <h2 className="text-3xl font-bold mt-12">Key Advantages of Induction Gear Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Advantage</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {advantagesData.map((row) => (
                            <TableRow key={row.advantage}>
                                <TableCell className="font-medium">{row.advantage}</TableCell>
                                <TableCell>{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Precision That Powers Performance</h2>
            <p>The gear hardening process is more than just heat treatment — it’s a precision-driven science that determines how long your machinery runs without failure. By combining advanced induction heating, controlled quenching, and meticulous testing, {SITE_NAME} ensures gears perform reliably under the toughest industrial and agricultural conditions.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Gear Hardening Job Work in Ludhiana, Punjab?</h3>
                <p className="mt-2 text-muted-foreground">Get in touch with {SITE_NAME} — your trusted partner for induction gear hardening, case hardening, and heat treatment services.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/gear-hardening">Explore Gear Hardening Service</Link>
                    </Button>
                </div>
            </div>
          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}
