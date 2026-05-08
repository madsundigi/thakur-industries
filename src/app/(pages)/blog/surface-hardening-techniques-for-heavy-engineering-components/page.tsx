
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Surface Hardening Techniques for Heavy Engineering Components',
  description: 'Learn about surface hardening processes that provide heavy engineering components with wear-resistant strength.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Surface Hardening Techniques for Heavy Engineering Components",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Industrial Heat Treatment",
  "keywords": ["surface hardening techniques", "industrial component hardening Ludhiana", "alloy surface heat treatment Punjab"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/surface-hardening-techniques-for-heavy-engineering-components",
  "inLanguage": "en"
};

const techniquesComparisonData = [
    { method: "Induction Hardening", heatingSource: "Electromagnetic", caseDepth: "1–5 mm", distortionRisk: "Low", idealApplication: "Shafts, gears, rollers" },
    { method: "Flame Hardening", heatingSource: "Gas Flame", caseDepth: "1–3 mm", distortionRisk: "Medium", idealApplication: "Large simple components" },
    { method: "Carburizing", heatingSource: "Furnace", caseDepth: "1–3 mm", distortionRisk: "High", idealApplication: "Gears, pins" },
    { method: "Nitriding", heatingSource: "Nitrogen Gas", caseDepth: "0.3–0.8 mm", distortionRisk: "Very Low", idealApplication: "Tool steels, dies" },
    { method: "Laser Hardening", heatingSource: "Laser Beam", caseDepth: "0.5–1.5 mm", distortionRisk: "Very Low", idealApplication: "Precision parts" },
];

const industriesData = [
    { industry: "Heavy Engineering", components: "Shafts, rollers, couplings" },
    { industry: "Automotive", components: "Gears, axles, spindles" },
    { industry: "Agriculture", components: "Tractor parts, tiller shafts" },
    { industry: "Power Generation", components: "Turbine shafts, rotors" },
    { industry: "Construction", components: "Hydraulic rods, excavator pins" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogSurfaceHardeningTechniques');

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
                    <span className='truncate'>Surface Hardening Techniques</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Surface Hardening Techniques for Heavy Engineering Components</h1>
                <p className="mt-4 text-xl text-muted-foreground">In the world of heavy machinery and industrial manufacturing, components such as rollers, shafts, gears, and spindles are constantly exposed to friction, load, and stress. To maintain long-term reliability and performance, these parts require surface hardening — a specialized heat treatment process that improves wear resistance and fatigue strength without compromising the ductility of the core.</p>
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
            
            <p>At {SITE_NAME}, Ludhiana, we specialize in industrial component hardening through advanced induction surface heat treatment techniques, delivering superior results for industries across Punjab and North India.</p>
            <p className="font-semibold text-foreground">Surface hardening builds the strength your components need to perform longer under pressure.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Surface Hardening?</h2>
            <p>Surface hardening is a controlled heat treatment process used to modify only the outer surface of metal components, increasing hardness and wear resistance while keeping the inner core tough and impact-resistant. The result? A part that’s hard on the outside and strong inside — ideal for heavy-duty applications.</p>

            <h2 className="text-3xl font-bold mt-12">Why Heavy Engineering Components Need Surface Hardening</h2>
            <p>Heavy machinery components like mill rolls, hydraulic shafts, axles, and gear drives operate under extreme mechanical loads and abrasive conditions. Without surface hardening, such parts can face excessive wear, scoring, loss of dimensional accuracy, and premature failure due to fatigue. Surface hardening helps by increasing surface hardness (up to 60 HRC), reducing friction and wear, enhancing resistance to deformation and cracking, and extending component service life.</p>
            <p className="font-semibold text-foreground">Hard surfaces mean longer uptime, lower maintenance, and improved operational reliability.</p>
            
            <h2 className="text-3xl font-bold mt-12">Top Surface Hardening Techniques Used in Heavy Industry</h2>
            <p>At {SITE_NAME}, we employ several surface hardening methods depending on material type, part geometry, and application requirement. Below are the most effective techniques for industrial component hardening:</p>

            <h3 className="text-2xl font-semibold mt-8">1. Induction Hardening</h3>
            <p className='text-muted-foreground'>Uses high-frequency electromagnetic fields to heat specific surface zones rapidly, followed by immediate quenching (usually with polymer or water). It's best for shafts, gears, axles, spindles, rollers, and alloy steels like EN8, EN19, EN24, 4140, and 4340. Advantages include precise heat control, minimal distortion, quick processing times, and high repeatability.</p>
            <p className="font-semibold text-primary"><Zap className="inline-block h-5 w-5 mr-2" />Induction hardening is the most advanced and efficient surface hardening solution for modern industries.</p>

            <h3 className="text-2xl font-semibold mt-8">2. Flame Hardening</h3>
            <p className='text-muted-foreground'>Uses an oxy-acetylene flame to heat the surface, followed by quenching. Best for large and simple-shaped parts like rollers and plates. While suitable for on-site repairs with lower equipment cost, it has limitations in precision and energy efficiency compared to induction hardening.</p>
            
            <h3 className="text-2xl font-semibold mt-8">3. Carburizing</h3>
            <p className='text-muted-foreground'>Carbon is diffused into the steel surface at high temperatures (900–950°C), then quenched to form a hardened case. Best for low-carbon steels used in gears and pins. It provides deep case hardening and strong wear resistance but is time-consuming.</p>

            <h3 className="text-2xl font-semibold mt-8">4. Nitriding</h3>
            <p className='text-muted-foreground'>Nitrogen is introduced to the surface at 500–550°C, creating a hard nitride layer. Best for tool steels and alloy steels (like 4140, 4340, H13). It requires no quenching, offering minimal distortion and excellent corrosion resistance, but it's an expensive process with limited case depth.</p>

            <h3 className="text-2xl font-semibold mt-8">5. Laser Surface Hardening</h3>
            <p className='text-muted-foreground'>Uses a high-energy laser beam to heat and harden selected surface areas. It's extremely precise and localized with no distortion, but the high capital cost makes it suitable for niche applications.</p>

            <h2 className="text-3xl font-bold mt-12">Comparison of Surface Hardening Techniques</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Method</TableHead>
                            <TableHead>Heating Source</TableHead>
                            <TableHead>Case Depth (mm)</TableHead>
                            <TableHead>Distortion Risk</TableHead>
                            <TableHead>Ideal Application</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {techniquesComparisonData.map((row) => (
                            <TableRow key={row.method}>
                                <TableCell className="font-medium">{row.method}</TableCell>
                                <TableCell>{row.heatingSource}</TableCell>
                                <TableCell>{row.caseDepth}</TableCell>
                                <TableCell>{row.distortionRisk}</TableCell>
                                <TableCell>{row.idealApplication}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <p className="mt-2 text-sm text-muted-foreground">Among all, induction hardening offers the best combination of accuracy, speed, and cost efficiency.</p>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Industries Benefiting from Surface Hardening</h2>
            <p>At {SITE_NAME}, our surface hardening solutions cater to diverse sectors:</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Industry</TableHead>
                            <TableHead>Common Hardened Components</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {industriesData.map((row) => (
                            <TableRow key={row.industry}>
                                <TableCell className="font-medium">{row.industry}</TableCell>
                                <TableCell>{row.components}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Why {SITE_NAME} Is Punjab’s Surface Hardening Expert</h2>
            <p>Located in Ludhiana, the industrial capital of North India, {SITE_NAME} is equipped with modern induction hardening machines and digital process control systems to handle components of all sizes. Our key advantages include custom coil design, polymer & water-based quenching systems, digital temperature and case depth monitoring, and expertise in EN-series and 41XX alloy steels, serving Punjab, Haryana & Delhi NCR industries.</p>
            <p className='font-semibold'>We combine metallurgy and technology to deliver precision, durability, and performance.</p>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Surface Hardening — Building the Future of Heavy Engineering</h2>
            <p>Surface hardening is not just a process — it’s the foundation of mechanical reliability in every heavy machine. Among all techniques, induction hardening stands out for its speed, accuracy, and energy efficiency, making it ideal for modern industrial manufacturing in Ludhiana and Punjab. At {SITE_NAME}, we ensure that your rollers, shafts, gears, and heavy components achieve the strength and longevity needed to power industrial progress.</p>
            <p className='font-semibold'>Precision Hardening for Precision Engineering.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Industrial Component Hardening?</h3>
                <p className="mt-2 text-muted-foreground">Partner with {SITE_NAME} — specialists in surface hardening and induction heat treatment services for heavy machinery parts.</p>
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
