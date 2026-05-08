
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
  title: 'Polymer Quenching vs Water Quenching in Induction Hardening',
  description: 'Compare polymer and water quenching methods for achieving precise cooling and minimal distortion.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Polymer Quenching vs Water Quenching in Induction Hardening",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Processes",
  "keywords": ["polymer vs water quenching", "quenching efficiency Punjab", "heat treatment cooling comparison"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/polymer-vs-water-quenching",
  "inLanguage": "en"
};

const comparisonData = [
    { parameter: "Cooling Speed", water: "Very Fast", polymer: "Moderate (adjustable)" },
    { parameter: "Distortion Risk", water: "High", polymer: "Low" },
    { parameter: "Cracking Risk", water: "High", polymer: "Low" },
    { parameter: "Surface Finish", water: "Moderate (oxidation possible)", polymer: "Excellent" },
    { parameter: "Hardness Control", water: "Difficult", polymer: "Precise" },
    { parameter: "Maintenance", water: "Simple", polymer: "Requires concentration monitoring" },
    { parameter: "Ideal Materials", water: "EN8, C45, carbon steels", polymer: "EN19, EN24, 4140, 4340" },
    { parameter: "Applications", water: "Simple parts", polymer: "Complex, heavy, or alloy parts" },
];

const concentrationData = [
    { concentration: "5%", rate: "Faster (close to water)", example: "EN8 shafts, axles" },
    { concentration: "10%", rate: "Moderate", example: "EN19, EN24 gears" },
    { concentration: "15%", rate: "Slower", example: "4340 crankshafts, large rollers" },
    { concentration: "20%", rate: "Gentle cooling", example: "Thin or complex parts" },
];

const metallurgicalImpact = [
    { property: "Martensite Formation", water: "Complete", polymer: "Controlled" },
    { property: "Case Depth", water: "Slightly higher", polymer: "Uniform" },
    { property: "Grain Structure", water: "Fine but risk of cracks", polymer: "Balanced" },
    { property: "Residual Stresses", water: "High", polymer: "Low" },
    { property: "Distortion", water: "Common", polymer: "Minimal" },
];

const applicationsData = [
    { industry: "Automotive", medium: "Polymer", examples: "Shafts, gears, axles" },
    { industry: "Agricultural Machinery", medium: "Polymer", examples: "Tractor spindles, PTO shafts" },
    { industry: "Forging Units", medium: "Water", examples: "EN8 forgings" },
    { industry: "Machinery Components", medium: "Polymer", examples: "Rollers, couplings, spindles" },
    { industry: "Tool & Die", medium: "Polymer", examples: "Dies, molds, and cutting tools" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogQuenchingComparison');

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
                    <span className='truncate'>Polymer vs Water Quenching</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Polymer Quenching vs Water Quenching in Induction Hardening</h1>
                <p className="mt-4 text-xl text-muted-foreground">Compare polymer and water quenching methods for achieving precise cooling and minimal distortion.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Comparison of Polymer and Water Quenching in Induction Hardening"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">Introduction: The Role of Quenching in Induction Hardening</h2>
            <p>In induction heat treatment, quenching is the final and most critical stage — it determines the final hardness, strength, and dimensional accuracy of the component. After heating the metal surface to its austenitizing temperature (850–950°C), the part is rapidly cooled (quenched) to transform the structure into martensite, the hard phase responsible for wear resistance.</p>
            <p>Two of the most widely used quenching media in Punjab’s automotive and industrial heat treatment shops are water and polymer solutions. At {SITE_NAME}, Ludhiana, both methods are used strategically, depending on component geometry, material composition, and required hardness depth — ensuring optimal performance and minimal distortion.</p>

            <h2 className="text-3xl font-bold mt-12">Water Quenching: Fast and Aggressive Cooling</h2>
            <p>Water quenching is the oldest and simplest method of cooling in heat treatment. It offers maximum cooling speed, which helps achieve high surface hardness but can also cause cracking or distortion if not controlled properly.</p>
            <h3 className="text-2xl font-semibold mt-6">Advantages of Water Quenching</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Extremely fast cooling — ideal for low-to-medium carbon steels (like EN8/C45)</li>
                <li>Simple and cost-effective setup</li>
                <li>Produces high surface hardness (up to 60 HRC)</li>
            </ul>
             <h3 className="text-2xl font-semibold mt-6">Limitations</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>High risk of thermal shock and cracking</li>
                <li>Can cause distortion in thin or complex components</li>
                <li>Less suitable for alloy steels (EN19, EN24, 4340) which need controlled cooling</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Polymer Quenching: Controlled and Customizable Cooling</h2>
            <p>Polymer quenching uses a water-soluble polymer (such as PAG – Polyalkylene Glycol) mixed in water, typically in concentrations between 5% and 20%, to create a controlled cooling medium. It offers slower, more uniform cooling compared to water, making it ideal for complex parts and high-alloy steels used in Punjab’s precision engineering and automotive sectors.</p>
            <h3 className="text-2xl font-semibold mt-6">Advantages of Polymer Quenching</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Adjustable cooling rate (via polymer concentration)</li>
                <li>Reduced distortion and cracking risk</li>
                <li>Cleaner process with less oxidation</li>
                <li>Suitable for EN19, EN24, 4140, 4340, and tool steels</li>
                <li>Environmentally safe and easy to maintain</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Cooling Rate Comparison: Polymer vs Water Quenching</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Water Quenching</TableHead>
                            <TableHead>Polymer Quenching (10%)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.water}</TableCell>
                                <TableCell>{row.polymer}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">How Polymer Concentration Affects Cooling Performance</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Polymer Concentration</TableHead>
                            <TableHead>Cooling Rate</TableHead>
                            <TableHead>Application Example</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {concentrationData.map((row) => (
                            <TableRow key={row.concentration}>
                                <TableCell className="font-medium">{row.concentration}</TableCell>
                                <TableCell>{row.rate}</TableCell>
                                <TableCell>{row.example}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Metallurgical Impact of Quenching Media</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Property</TableHead>
                            <TableHead>Water Quenching</TableHead>
                            <TableHead>Polymer Quenching</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {metallurgicalImpact.map((row) => (
                            <TableRow key={row.property}>
                                <TableCell className="font-medium">{row.property}</TableCell>
                                <TableCell>{row.water}</TableCell>
                                <TableCell>{row.polymer}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Applications Across Punjab’s Industries</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Industry</TableHead>
                            <TableHead>Preferred Quenching Medium</TableHead>
                            <TableHead>Examples</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {applicationsData.map((row) => (
                            <TableRow key={row.industry}>
                                <TableCell className="font-medium">{row.industry}</TableCell>
                                <TableCell>{row.medium}</TableCell>
                                <TableCell>{row.examples}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Precision Cooling, Perfect Hardness</h2>
            <p>Both polymer and water quenching have their place in induction hardening. However, for modern industrial and automotive components in Punjab, polymer quenching provides better dimensional control, reduced cracking risk, higher repeatability, and cleaner, safer operations. {SITE_NAME}, Ludhiana continues to lead in precision polymer quenching for EN8, EN19, EN24, and 4340 alloy steels, delivering superior results for every part.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Controlled Quenching Job Work in Punjab?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for polymer and water-based quenching services tailored for your materials and components.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/quenching-process">Explore Quenching Services</Link>
                    </Button>
                </div>
            </div>
        </article>
      </div>
    </>
  );
}
