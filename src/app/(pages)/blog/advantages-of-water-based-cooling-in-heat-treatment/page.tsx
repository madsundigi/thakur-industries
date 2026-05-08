
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Advantages of Water-Based Cooling in Heat Treatment',
  description: 'See how water-based cooling improves energy efficiency and reduces environmental impact in induction hardening.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Advantages of Water-Based Cooling in Heat Treatment",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Processes",
  "keywords": ["water cooling heat treatment", "polymer quenching alternatives Punjab", "eco-friendly cooling Ludhiana"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/advantages-of-water-based-cooling-in-heat-treatment",
  "inLanguage": "en"
};

const comparisonData = [
    { parameter: "Cooling Speed", water: "Very Fast", polymer: "Moderate (adjustable)" },
    { parameter: "Control Over Distortion", water: "Moderate", polymer: "High" },
    { parameter: "Surface Cleanliness", water: "Excellent", polymer: "Very Good" },
    { parameter: "Eco-Friendliness", water: "Excellent", polymer: "Good" },
    { parameter: "Cost", water: "Low", polymer: "Medium" },
    { parameter: "Typical Applications", water: "Shafts, Gears, Axles", polymer: "Dies, Complex Parts, Thick Sections" },
];

const applicationsData = [
    { component: "Shafts & Axles", quenchType: "Water", result: "Deep, rapid hardness" },
    { component: "Gears & Pinions", quenchType: "Polymer", result: "Controlled case hardness" },
    { component: "Spindles & Rollers", quenchType: "Polymer", result: "Uniform surface finish" },
    { component: "Tools & Dies", quenchType: "Water", result: "High surface strength" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogWaterCooling');

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
                    <span className='truncate'>Advantages of Water-Based Cooling</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Advantages of Water-Based Cooling in Heat Treatment</h1>
                <p className="mt-4 text-xl text-muted-foreground">In every heat treatment process, the cooling stage—also known as quenching—is critical for determining the hardness, strength, and structural integrity of the treated metal.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt={featureImage.description}
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">Introduction: The Role of Cooling in Heat Treatment</h2>
            <p>At {SITE_NAME}, Ludhiana, we specialize in precision-controlled water cooling systems that deliver consistent hardness results while maintaining environmental safety and operational efficiency across industries in Punjab and North India.</p>
            <p className="font-semibold text-primary">💡 Simple, clean, and sustainable — water-based cooling represents the future of responsible heat treatment.</p>

            <h2 className="text-3xl font-bold mt-12">How Water Cooling Works in the Induction Hardening Process</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Heating Stage:</strong> The component surface is heated using an induction coil to a specific temperature (typically 850°C–950°C), depending on the material type.</li>
                <li><strong>Immediate Quenching:</strong> Water jets or spray nozzles are directed precisely on the heated zones. This rapid cooling transforms the austenite phase into martensite, producing high surface hardness.</li>
                <li><strong>Control Mechanism:</strong> Advanced PLC systems regulate the water flow rate, temperature, and spray pressure to prevent distortion or cracking.</li>
            </ol>
            <p className="mt-4">At {SITE_NAME}, we use customized quenching setups—including adjustable nozzles and flow controls—to ensure uniform cooling across complex geometries.</p>
            
            <h2 className="text-3xl font-bold mt-12">Top Advantages of Water-Based Cooling in Heat Treatment</h2>
            <h3 className="text-2xl font-semibold mt-6">1. Eco-Friendly and Safe</h3>
            <p className="text-muted-foreground">Water is a non-toxic, non-flammable cooling medium that eliminates the fire hazards associated with oil quenching. It also avoids chemical waste, aligning with eco-friendly manufacturing standards in Punjab’s industrial sector.</p>
            
            <h3 className="text-2xl font-semibold mt-6">2. High Cooling Efficiency</h3>
            <p className="text-muted-foreground">Water has one of the highest heat transfer rates among all quenching media. This ensures faster cooling, resulting in higher surface hardness—ideal for automotive shafts, axles, and gears that require a tough outer shell.</p>

            <h3 className="text-2xl font-semibold mt-6">3. Better Surface Cleanliness</h3>
            <p className="text-muted-foreground">Unlike oil-based quenching, water cooling leaves no oily residue or carbon deposits, reducing the need for post-cleaning and improving surface finish quality.</p>
            
            <h3 className="text-2xl font-semibold mt-6">4. Cost-Effective Operation</h3>
            <p className="text-muted-foreground">Water is economical and easily available, making it a low-cost cooling solution. It also reduces maintenance expenses since it doesn’t degrade like oil or require frequent replacement.</p>

            <h3 className="text-2xl font-semibold mt-6">5. Energy and Process Control</h3>
            <p className="text-muted-foreground">When combined with automated circulation and filtration systems, water cooling ensures stable temperature control throughout the process. This leads to repeatable results, essential for OEM and export-grade heat treatment job work.</p>

            <h2 className="text-3xl font-bold mt-12">Water vs Polymer Cooling: A Quick Comparison</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Water-Based Cooling</TableHead>
                            <TableHead>Polymer-Based Cooling</TableHead>
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
            
            <h2 className="text-3xl font-bold mt-12">Applications of Water-Based Cooling in Induction Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component Type</TableHead>
                            <TableHead>Quenching Type</TableHead>
                            <TableHead>Result</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {applicationsData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.quenchType}</TableCell>
                                <TableCell>{row.result}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Cooling the Smart Way</h2>
            <p>Water-based cooling isn’t just an alternative — it’s a smart, sustainable solution that aligns with modern industry standards. By combining speed, safety, and consistency, it delivers the perfect finish for induction-hardened parts while reducing environmental impact.</p>
            <p>At {SITE_NAME}, we’re proud to lead Punjab’s industrial heat treatment sector with next-generation cooling technologies that redefine quality and sustainability.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Water-Based Cooling Services?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for customized, precision-engineered solutions.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/quenching-process">Explore Quenching</Link>
                    </Button>
                </div>
            </div>
        </article>
      </div>
    </>
  );
}
