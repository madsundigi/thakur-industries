
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
  title: 'Induction Heat Treatment for EN8 Steel Components',
  description: 'Find out how EN8 steel benefits from controlled induction heat treatment for superior strength and hardness.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Heat Treatment for EN8 Steel Components",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Materials",
  "keywords": ["EN8 induction heat treatment", "EN8 surface hardening Punjab", "medium carbon steel Ludhiana"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/induction-heat-treatment-for-en8-steel-components",
  "inLanguage": "en"
};

const compositionData = [
    { element: "Carbon (C)", percentage: "0.40 – 0.45" },
    { element: "Manganese (Mn)", percentage: "0.60 – 1.00" },
    { element: "Silicon (Si)", percentage: "0.05 – 0.35" },
    { element: "Sulphur (S)", percentage: "0.05 max" },
    { element: "Phosphorus (P)", percentage: "0.05 max" },
];

const resultsData = [
    { property: "Surface Hardness", before: "200–220 HB", after: "50–55 HRC" },
    { property: "Core Hardness", before: "180–200 HB", after: "180–200 HB" },
    { property: "Case Depth", before: "—", after: "1.5 – 3.0 mm" },
    { property: "Fatigue Strength", before: "Standard", after: "+40–60% Improvement" },
];

const quenchingData = [
    { medium: "Water Quenching", hardness: "55–58", risk: "Moderate", bestFor: "Shafts, gears" },
    { medium: "Polymer Quenching", hardness: "52–55", risk: "Low", bestFor: "Precision parts" },
    { medium: "Oil Quenching", hardness: "50–53", risk: "Very Low", bestFor: "Thin-walled parts" },
];

const applicationsData = [
    { industry: "Automotive", components: "Shafts, gears, crank pins, axles" },
    { industry: "Agricultural", components: "Tractor spindles, rotavator shafts, couplings" },
    { industry: "Heavy Engineering", components: "Rollers, rods, hubs" },
    { industry: "Tooling", components: "Punches, dies, pins" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogEN8Steel');

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
                    <span className='truncate'>EN8 Induction Heat Treatment</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Heat Treatment for EN8 Steel Components</h1>
                <p className="mt-4 text-xl text-muted-foreground">Find out how EN8 steel benefits from controlled induction heat treatment for superior strength and hardness.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="A close-up of a polished EN8 medium carbon steel shaft."
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: Why EN8 Steel Needs Induction Heat Treatment</h2>
            <p>EN8 is one of the most widely used medium carbon steels in the engineering and automotive industries. It offers a good balance of strength, toughness, and machinability, making it ideal for shafts, axles, studs, gears, and general-purpose mechanical parts. However, in high-wear environments, untreated EN8 components can suffer from abrasion, surface fatigue, and premature failure. That’s where induction heat treatment becomes essential.</p>
            <p>At {SITE_NAME}, Ludhiana, we specialize in EN8 induction hardening job work, offering precise surface hardening that increases wear resistance and extends component life — all while maintaining internal toughness.</p>
            <p className="font-semibold text-primary"><Zap className="inline-block mr-2 h-5 w-5" />Induction hardening turns standard EN8 steel into a performance-grade material ready for industrial demands.</p>

            <h2 className="text-3xl font-bold mt-12">What Is EN8 Steel?</h2>
            <p>EN8 is a medium carbon steel (C45 equivalent) with approximately 0.40–0.45% carbon content. It is known for its high tensile strength and ability to respond well to surface heat treatment. This composition allows EN8 to be flame or induction hardened, achieving surface hardness levels of 50–55 HRC while keeping the core ductile and impact-resistant.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Element</TableHead>
                            <TableHead>Percentage (%)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {compositionData.map((row) => (
                            <TableRow key={row.element}>
                                <TableCell className="font-medium">{row.element}</TableCell>
                                <TableCell>{row.percentage}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
             <p className="font-semibold text-foreground">💡 EN8 is ideal for parts requiring a tough core and hard, wear-resistant surface.</p>

            <h2 className="text-3xl font-bold mt-12">Induction Heat Treatment Process for EN8 Steel</h2>
            <p>At {SITE_NAME}, we use controlled electromagnetic induction to heat EN8 components to a precise temperature — typically between 850°C and 900°C — followed by rapid quenching using water or polymer.</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground my-4">
                <li><strong>Surface Cleaning:</strong> The part is cleaned to remove dirt, scale, or oil.</li>
                <li><strong>Induction Heating:</strong> The component is placed within a copper coil, where alternating magnetic fields heat the surface layer rapidly.</li>
                <li><strong>Quenching:</strong> A controlled polymer or water spray is applied immediately to transform the surface into martensitic structure.</li>
                <li><strong>Tempering (Optional):</strong> Reduces internal stress while maintaining hardness.</li>
                <li><strong>Testing:</strong> Case depth and hardness are verified to ensure process accuracy.</li>
            </ol>
            <p className="font-semibold text-foreground">Each EN8 component is processed under monitored temperature and frequency settings to ensure uniform results.</p>
            
            <h2 className="text-3xl font-bold mt-12">Typical Results for EN8 Induction Hardening</h2>
            <div className="my-8 overflow-x-auto">
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Property</TableHead>
                            <TableHead>Before Hardening</TableHead>
                            <TableHead>After Induction Hardening</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {resultsData.map((row) => (
                            <TableRow key={row.property}>
                                <TableCell className="font-medium">{row.property}</TableCell>
                                <TableCell>{row.before}</TableCell>
                                <TableCell>{row.after}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Benefits of Induction Heat Treatment for EN8 Steel</h2>
            <ul className="list-disc list-inside space-y-4 text-muted-foreground">
                <li><strong className='text-foreground'>Enhanced Surface Hardness:</strong> Induction hardening significantly improves wear and abrasion resistance — ideal for high-contact components like shafts, pins, and gears.</li>
                <li><strong className='text-foreground'>Controlled Case Depth:</strong> Accurate temperature and time control ensure precise case depth suited for your specific component design.</li>
                <li><strong className='text-foreground'>Improved Fatigue Resistance:</strong> A hardened surface with a tough core reduces fatigue cracking under cyclic loads.</li>
                <li><strong className='text-foreground'>Localized Heating:</strong> Only the functional areas (like gear teeth or shaft journals) are hardened — minimizing distortion and energy use.</li>
                <li><strong className='text-foreground'>Cost-Efficient and Repeatable:</strong> Induction hardening delivers uniform and repeatable results with minimal cycle time, improving production efficiency.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Applications of EN8 Induction Hardening</h2>
            <p>EN8 steel is used across several industries, especially in automotive, agricultural, and machinery manufacturing.</p>
            <div className="my-8 overflow-x-auto">
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Industry</TableHead>
                            <TableHead>Common Hardened Components</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {applicationsData.map((row) => (
                            <TableRow key={row.industry}>
                                <TableCell className="font-medium">{row.industry}</TableCell>
                                <TableCell>{row.components}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Quenching Options for EN8 Steel</h2>
            <p>The choice of quenching medium greatly influences the hardness and distortion control.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Quenching Medium</TableHead>
                            <TableHead>Hardness Achieved (HRC)</TableHead>
                            <TableHead>Distortion Risk</TableHead>
                            <TableHead>Best For</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {quenchingData.map((row) => (
                            <TableRow key={row.medium}>
                                <TableCell className="font-medium">{row.medium}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                                <TableCell>{row.risk}</TableCell>
                                <TableCell>{row.bestFor}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p className="font-semibold text-foreground">At {SITE_NAME}, we recommend polymer quenching for most EN8 components to balance hardness and distortion control.</p>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Unlock EN8’s Full Potential with Induction Hardening</h2>
            <p>EN8 steel, when treated through controlled induction hardening, becomes a high-performance material capable of withstanding high loads, wear, and fatigue. At {SITE_NAME}, we combine modern equipment, metallurgical expertise, and process precision to deliver consistent and reliable results across every batch.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for EN8 Heat Treatment Services?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, Ludhiana, for high-quality job work for all types of EN series materials.</p>
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
