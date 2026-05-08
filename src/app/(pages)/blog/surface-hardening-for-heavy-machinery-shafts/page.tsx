
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
  title: 'Surface Hardening for Heavy Machinery Shafts',
  description: 'Improve load-bearing capacity and wear resistance of heavy-duty shafts using induction hardening.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Surface Hardening for Heavy Machinery Shafts",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Industrial Heat Treatment",
  "keywords": ["surface hardening for shafts", "machinery shaft heat treatment", "industrial shaft hardening Ludhiana"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/surface-hardening-for-heavy-machinery-shafts",
  "inLanguage": "en"
};

const shaftTypesData = [
    { component: "Transmission Shafts", material: "EN8 / EN19", method: "Induction + Polymer Quenching", purpose: "High torque and load" },
    { component: "Drive Shafts", material: "EN24 / 4340", method: "Surface Hardening", purpose: "Strength + fatigue life" },
    { component: "Spindles & Axles", material: "EN19 / 4140", method: "Medium-Frequency Induction", purpose: "Wear resistance" },
    { component: "Hydraulic Shafts", material: "EN24 / 4340", method: "Precision Induction", purpose: "Smooth finish and durability" },
    { component: "Industrial Rollers", material: "EN8 / EN19", method: "Full Surface Hardening", purpose: "Surface compression strength" },
];

const processParamsData = [
    { parameter: "Frequency Range", value: "10–50 kHz (Medium Frequency)" },
    { parameter: "Surface Temperature", value: "850–950°C" },
    { parameter: "Case Depth", value: "2.0–5.0 mm" },
    { parameter: "Surface Hardness", value: "55–60 HRC" },
    { parameter: "Quenching Medium", value: "Polymer (8–12%) or Water" },
    { parameter: "Core Hardness (Post Process)", value: "25–35 HRC" },
];

const materialsData = [
    { grade: "EN8 / C45", type: "Medium carbon steel", application: "Standard machine shafts" },
    { grade: "EN19 / 4140", type: "Alloy steel", application: "Transmission and axles" },
    { grade: "EN24 / 4340", type: "Nickel-chrome-molybdenum steel", application: "Drive and hydraulic shafts" },
    { grade: "20MnCr5", type: "Case hardening steel", application: "Gears and coupling shafts" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogHeavyMachineryShafts');

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
                    <span className='truncate'>Surface Hardening for Heavy Machinery Shafts</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Surface Hardening for Heavy Machinery Shafts</h1>
                <p className="mt-4 text-xl text-muted-foreground">Improve load-bearing capacity and wear resistance of heavy-duty shafts using induction hardening.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Surface Hardening of Heavy Machinery Shafts"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: Strength Where It Matters Most</h2>
            <p>In heavy industrial applications, shafts are the backbone of power transmission systems — carrying torque, rotation, and load in presses, mills, conveyors, pumps, and construction machinery. These shafts are constantly subjected to friction, bending stress, and surface fatigue, leading to wear and mechanical failure if untreated. To extend their operational life and prevent premature breakdown, manufacturers use surface hardening — specifically induction hardening — to strengthen the outer surface while maintaining a tough, shock-resistant core.</p>
            <p>At {SITE_NAME}, Ludhiana, we specialize in industrial shaft hardening services, providing precision-controlled induction heat treatment for machinery and heavy-duty applications across Punjab and North India.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Surface Hardening for Shafts?</h2>
            <p>Surface hardening is a metallurgical process where only the outer layer of a steel component is hardened by heating and rapid cooling (quenching), while the inner core remains soft and ductile. In the case of induction surface hardening, the process involves localized electromagnetic heating — using induction coils designed to match the shaft geometry, rapid heating to the austenitizing temperature (850–950°C), and instant polymer or water quenching, forming a hard martensitic layer on the surface. The result: A wear-resistant outer surface with a strong, flexible core — perfect for heavy-duty shafts.</p>
            
            <h2 className="text-3xl font-bold mt-12">Why Induction Hardening Is Ideal for Heavy Machinery Shafts</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Localized Hardening:</strong> Only the functional zones of the shaft (journals, splines, bearing areas) are hardened, leaving other areas unaffected.</li>
                <li><strong>Superior Wear Resistance:</strong> A hardened surface minimizes friction and abrasion under load-bearing conditions.</li>
                <li><strong>High Fatigue Strength:</strong> The compressive stress generated during hardening improves fatigue resistance and prevents surface cracking.</li>
                <li><strong>Low Distortion:</strong> Induction hardening provides controlled heating and cooling — minimizing warping, even in long shafts.</li>
                <li><strong>Faster Process:</strong> Compared to furnace methods, induction hardening is 5–10 times faster, making it ideal for high-volume or large-batch industrial applications.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Common Shaft Types Treated at {SITE_NAME}</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component Type</TableHead>
                            <TableHead>Material</TableHead>
                            <TableHead>Hardening Method</TableHead>
                            <TableHead>Purpose</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {shaftTypesData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.material}</TableCell>
                                <TableCell>{row.method}</TableCell>
                                <TableCell>{row.purpose}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Technical Process Parameters for Shaft Surface Hardening</h2>
             <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Range / Specification</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {processParamsData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Common Challenges in Shaft Hardening — and How We Solve Them</h2>
            <h3 className='text-xl font-semibold mt-4'>Uneven Case Depth</h3>
            <p className='text-muted-foreground'><CheckCircle className="inline-block mr-2 h-5 w-5 text-green-500" />Solution: Custom coil geometry designed for uniform magnetic coupling and optimized heating duration.</p>
            <h3 className='text-xl font-semibold mt-4'>Distortion or Warping</h3>
            <p className='text-muted-foreground'><CheckCircle className="inline-block mr-2 h-5 w-5 text-green-500" />Solution: Balanced heating rotation and polymer quenching for smoother cooling.</p>
            <h3 className='text-xl font-semibold mt-4'>Cracking on Surface</h3>
            <p className='text-muted-foreground'><CheckCircle className="inline-block mr-2 h-5 w-5 text-green-500" />Solution: Controlled heating rates and use of 10% polymer quenching to prevent thermal shock.</p>
            <h3 className='text-xl font-semibold mt-4'>Soft Zones or Overheating</h3>
            <p className='text-muted-foreground'><CheckCircle className="inline-block mr-2 h-5 w-5 text-green-500" />Solution: Real-time temperature monitoring and automatic frequency control systems.</p>

            <h2 className="text-3xl font-bold mt-12">Materials Suitable for Shaft Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Steel Grade</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Application</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map((row) => (
                            <TableRow key={row.grade}>
                                <TableCell className="font-medium">{row.grade}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.application}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Industries We Serve in Punjab</h2>
            <p>We proudly serve Ludhiana’s industrial ecosystem and beyond, including: machine tool manufacturers, heavy equipment producers, automotive and tractor OEMs, forging and fabrication units, and hydraulic machinery manufacturers. From Ludhiana to Mandi Gobindgarh and Jalandhar, {SITE_NAME} is a trusted partner in precision heat treatment.</p>

            <h2 className="text-3xl font-bold mt-12">Quality Control & Testing at {SITE_NAME}</h2>
            <p>Every shaft hardened at {SITE_NAME} undergoes: surface hardness testing (Rockwell HRC), microhardness profile analysis (Vickers), case depth verification through cut-section inspection, crack detection via magnetic particle testing, and dimensional accuracy validation post-quenching. We follow strict quality control protocols to meet OEM and ISO standards for industrial heat treatment.</p>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Harder Surfaces, Longer Machine Life</h2>
            <p>Surface hardening for heavy machinery shafts is not just a process — it’s an investment in reliability, efficiency, and performance. At {SITE_NAME}, Ludhiana, we combine advanced induction systems, customized coil design, and controlled polymer quenching, to deliver consistent, distortion-free shaft hardening that meets the demands of Punjab’s high-load industrial operations. When strength and precision matter, {SITE_NAME} ensures your machinery performs flawlessly.</p>

            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Contact {SITE_NAME} for Industrial Shaft Hardening in Punjab</h3>
                <p className="mt-2 text-muted-foreground">Looking for surface hardening job work for machinery shafts in Punjab? Contact {SITE_NAME}, Ludhiana — specialists in induction hardening, quenching, and surface treatment for industrial and heavy machinery components.</p>
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
