
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Zap, Shield, Thermometer, AlertTriangle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

export const metadata: Metadata = {
  title: 'Precision Induction Hardening Services for OEMs',
  description: 'Delivering OEM-standard induction hardening services with tight tolerance and high-quality assurance across Punjab.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Precision Induction Hardening Services for OEMs",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "OEM Heat Treatment",
  "keywords": ["OEM induction hardening services", "industrial job work Punjab", "automotive OEM Ludhiana"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/induction-hardening-job-work-for-oems",
  "inLanguage": "en"
};

const industriesData = [
    { industry: "Automotive Manufacturing", components: "Gears, shafts, axles, and transmission parts" },
    { industry: "Agricultural Equipment", components: "Tractor axles, PTO shafts, rotavator spindles" },
    { industry: "Industrial Machinery", components: "Rollers, pins, couplings, and machine tools" },
    { industry: "Aerospace & Railways", components: "Bushings, rods, pins, and drive assemblies" },
    { industry: "Forging & Tooling OEMs", components: "Dies, punches, and molds" },
];

const materialsData = [
    { grade: "EN8 (C40)", use: "Automotive shafts & couplings" },
    { grade: "EN19 (4140)", use: "Transmission gears & axles" },
    { grade: "EN24 (4340)", use: "Drive shafts & heavy-duty parts" },
    { grade: "20MnCr5", use: "Precision gears & pinions" },
    { grade: "Tool Steels (D2, H13)", use: "Dies, punches, and forming tools" },
];

const oemBenefitsData = [
    { feature: "Automated process control", benefit: "Consistent hardness and repeatability" },
    { feature: "Localized surface treatment", benefit: "Minimal distortion and dimensional stability" },
    { feature: "Rapid production cycles", benefit: "Faster delivery and reduced downtime" },
    { feature: "Certified processes", benefit: "Meets automotive and industrial standards" },
    { feature: "Full traceability", benefit: "Quality documentation for every batch" },
];

const comparisonData = [
    { aspect: "Precision", induction: "High (±0.05 mm control)", conventional: "Moderate" },
    { aspect: "Process Speed", induction: "Rapid, localized", conventional: "Time-consuming" },
    { aspect: "Surface Quality", induction: "Clean, distortion-free", conventional: "Higher oxidation" },
    { aspect: "Repeatability", induction: "Excellent with automation", conventional: "Variable" },
    { aspect: "Energy Efficiency", induction: "High", conventional: "Low" },
    { aspect: "Documentation", induction: "Digitally traceable", conventional: "Manual logs" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogOem');

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
                    <span className='truncate'>OEM Induction Hardening Services</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Precision Induction Hardening Services for OEMs</h1>
                <p className="mt-4 text-xl text-muted-foreground">In today’s competitive manufacturing landscape, OEMs (Original Equipment Manufacturers) demand more than just heat treatment — they demand repeatable precision, process reliability, and certified quality.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="OEM components being prepared for induction hardening"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>Whether it’s automotive shafts, transmission gears, spindles, or machine parts, even a slight deviation in hardness or case depth can affect performance, wear resistance, and long-term reliability. At {SITE_NAME}, Ludhiana, we provide precision induction hardening services tailored specifically for OEM manufacturers across Punjab and North India, ensuring every component meets stringent OEM-grade quality standards.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Are OEM Induction Hardening Services?</h2>
            <p>OEM induction hardening is a specialized heat treatment process that enhances the surface hardness and fatigue strength of metal parts while maintaining core toughness — all within the tight tolerances required by OEM drawings and international standards. The process uses controlled electromagnetic heating followed by polymer or water quenching to achieve uniform and precise hardening across critical areas like shafts, gears, pins, couplings, axles, and rollers. Each job undergoes process validation, hardness testing, and documentation, ensuring full traceability and repeatability.</p>

            <h2 className="text-3xl font-bold mt-12">Why OEMs Choose Induction Hardening Over Other Processes</h2>
            <p>For large-scale or export-grade manufacturing, induction hardening offers several advantages over conventional methods like carburizing or flame hardening.</p>
            <div className='my-8 overflow-x-auto'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Feature</TableHead>
                            <TableHead>Induction Hardening</TableHead>
                            <TableHead>Carburizing/Flame Hardening</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map((row) => (
                            <TableRow key={row.aspect}>
                                <TableCell className="font-medium">{row.aspect}</TableCell>
                                <TableCell>{row.induction}</TableCell>
                                <TableCell>{row.conventional}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Applications of OEM-Grade Induction Hardening</h2>
            <p>Our precision induction hardening services support a wide range of industrial and automotive OEMs across Punjab, Haryana, and Delhi NCR.</p>
            <h3 className='text-2xl font-semibold mt-4'>Automotive Components</h3>
            <p className='text-muted-foreground'>Gear shafts, camshafts, crankshafts, axles, drive shafts, pinions, synchronizer hubs and couplings.</p>
            <h3 className='text-2xl font-semibold mt-4'>Industrial Machinery Parts</h3>
            <p className='text-muted-foreground'>Spindles, rollers, mandrels, tooling and mechanical assemblies.</p>
            <h3 className='text-2xl font-semibold mt-4'>Agricultural Implements</h3>
            <p className='text-muted-foreground'>Tractor parts, rotavator shafts, blades, and gear components.</p>
            
            <h2 className="text-3xl font-bold mt-12">Precision That Meets OEM Specifications</h2>
            <p>At {SITE_NAME}, every job work project is engineered to match the exact metallurgical and dimensional requirements of OEM clients.</p>
             <ul className="list-disc list-inside space-y-2 text-muted-foreground my-4">
                <li>Case Depth: ±0.05 mm accuracy</li>
                <li>Surface Hardness: 55–62 HRC (as per material grade)</li>
                <li>Core Hardness: Controlled for flexibility and impact strength</li>
                <li>Distortion Control: &lt;0.02 mm through optimized quenching</li>
                <li>Surface Finish: Clean, oxidation-free finish</li>
            </ul>
            <p>All results are verified through Rockwell and microhardness testing, supported by detailed test reports and inspection records.</p>
            
            <h2 className="text-3xl font-bold mt-12">Technologies Behind Our OEM Induction Hardening Services</h2>
            <p>We use state-of-the-art, PLC-controlled induction systems equipped with digital monitoring tools that ensure consistency and reliability in every cycle.</p>
             <ul className="list-disc list-inside space-y-2 text-muted-foreground my-4">
                <li>Medium & high-frequency induction systems (10 kHz–200 kHz)</li>
                <li>Polymer & water quenching tanks with temperature control</li>
                <li>Customized induction coils for varied component geometries</li>
                <li>Automatic part rotation and feed systems for uniform heating</li>
                <li>Real-time temperature and power monitoring</li>
            </ul>
             <p>Each machine at {SITE_NAME} is calibrated to OEM standards for process repeatability and energy efficiency.</p>

            <h2 className="text-3xl font-bold mt-12">Quality Control: Meeting International OEM Standards</h2>
            <p>We follow a zero-defect quality policy designed for OEM-level manufacturing. Our QA/QC procedures align with ISO and automotive quality management systems.</p>
            <h3 className='text-2xl font-semibold mt-4'>Testing & Inspection Includes:</h3>
            <ul className='list-disc list-inside space-y-2 text-muted-foreground my-4'>
                <li>Surface and core hardness (Rockwell HRC/HRB)</li>
                <li>Case depth microhardness profiling</li>
                <li>Metallographic and structural analysis</li>
                <li>Distortion and concentricity verification</li>
                <li>Surface integrity and finish inspection</li>
            </ul>
            <p>Each batch undergoes digital documentation and traceability — a must for export and OEM validation.</p>

            <h2 className="text-3xl font-bold mt-12">Why Exporters Choose Thakur Industries</h2>
            <p>Based in Ludhiana, Punjab’s industrial hub, {SITE_NAME} provides specialized heat treatment job work designed for exporters, OEM suppliers, and precision engineering firms.</p>
            <h3 className='text-2xl font-semibold mt-4'>Our Competitive Advantages:</h3>
             <ul className="list-disc list-inside space-y-2 text-muted-foreground my-4">
                <li>State-of-the-art induction systems</li>
                <li>Polymer & water-based quenching for precise control</li>
                <li>Tight tolerance control & distortion-free results</li>
                <li>In-house testing & inspection lab</li>
                <li>Transparent documentation for OEM validation</li>
                <li>Commitment to energy-efficient and sustainable operations</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Partnering with OEMs for Precision & Performance</h2>
            <p>The future of manufacturing depends on precision-driven partnerships. By combining advanced induction technology with quality control and documentation, {SITE_NAME} ensures every OEM client receives hardened components that meet global benchmarks. From automotive gears to industrial shafts, we’re proud to help Punjab’s manufacturing sector produce components that compete globally — built to last, tested to perform.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need OEM-Grade Induction Hardening Job Work?</h3>
                <p className="mt-2 text-muted-foreground">Partner with {SITE_NAME} for certified quality, consistency, and performance.</p>
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

    