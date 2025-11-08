
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
  title: 'Induction Hardening Job Work for Agricultural Implements in Punjab',
  description: "Induction hardening for agricultural & tractor components enhances strength & wear resistance for Punjab's farm sector.",
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening Job Work for Agricultural Implements in Punjab",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Agricultural Heat Treatment",
  "keywords": ["induction hardening farm equipment parts", "agricultural tool heat treatment", "tractor component hardening Punjab"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/induction-hardening-for-agricultural-implements",
  "inLanguage": "en"
};

const componentsData = [
    { component: "Tractor Shafts", application: "Power transmission", result: "Improved fatigue strength & wear resistance" },
    { component: "Axles & Spindles", application: "Load-bearing parts", result: "Higher toughness & crack resistance" },
    { component: "Gears & Pinions", application: "Transmission systems", result: "Hard gear teeth, longer life" },
    { component: "Tiller Blades & Couplers", application: "Soil cutting & attachment joints", result: "Abrasion resistance" },
    { component: "PTO Components", application: "Power take-off units", result: "Smooth, long-term operation" },
    { component: "Disc Harrow Axles", application: "Field tillage", result: "Deep surface hardening for heavy loads" },
    { component: "Hydraulic Parts", application: "Actuators & pistons", result: "Surface finish & hardness retention" },
];

const materialsData = [
    { material: "EN8 (C40)", component: "Shafts, Pins, Tines", hardness: "50–55" },
    { material: "EN19 (4140)", component: "Gears, Spindles", hardness: "52–58" },
    { material: "EN24 (4340)", component: "Axles, PTO Shafts", hardness: "55–60" },
    { material: "20MnCr5", component: "Transmission Gears", hardness: "58–62" },
    { material: "Carbon Steels", component: "Tools & Blades", hardness: "48–52" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogAgricultural');

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
                    <span className='truncate'>Agricultural Implements Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening Job Work for Agricultural Implements in Punjab</h1>
                <p className="mt-4 text-xl text-muted-foreground">Induction hardening for agricultural & tractor components enhances strength & wear resistance for Punjab's farm sector.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Induction hardening of agricultural components"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>At {SITE_NAME}, Ludhiana, we provide precision heat treatment job work for agricultural and tractor components, using advanced induction hardening technology and polymer quenching systems to achieve durability and consistency.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Is Induction Hardening in Farm Equipment Manufacturing?</h2>
            <p>Induction hardening is a localized heat treatment process used to strengthen the outer surface of steel components. It works by using electromagnetic induction to heat the surface to a high temperature (850–950°C), followed by rapid quenching (cooling with polymer or water).</p>

            <h3 className="text-2xl font-semibold mt-6">Why It’s Crucial for Agricultural Implements:</h3>
            <p>Farm equipment operates in abrasive soil, high-torque conditions, and frequent impact zones. Without surface hardening, critical parts wear out quickly — leading to breakdowns, loss of productivity, and higher maintenance costs.</p>
            
            <h2 className="text-3xl font-bold mt-12">Common Farm Equipment Parts That Undergo Induction Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Application</TableHead>
                            <TableHead>Result After Induction Hardening</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {componentsData.map((row) => (
                            <TableRow key={row.component}>
                                <TableCell className="font-medium">{row.component}</TableCell>
                                <TableCell>{row.application}</TableCell>
                                <TableCell>{row.result}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Benefits of Induction Hardening for Farm Equipment Parts</h2>
            <h3 className="text-2xl font-semibold mt-6">1. Enhanced Wear Resistance</h3>
            <p>The constant contact of farm parts with soil, sand, and rocks causes severe abrasion. Induction hardening strengthens the outer layer, ensuring parts resist surface wear for thousands of operating hours.</p>

            <h3 className="text-2xl font-semibold mt-6">2. Better Load-Bearing Capacity</h3>
            <p>Tractor shafts, spindles, and couplings face bending and torsional stress during heavy-duty operations. With proper induction heat treatment, these parts can handle higher loads without deforming.</p>

            <h3 className="text-2xl font-semibold mt-6">3. Improved Fatigue Strength</h3>
            <p>Repeated cyclic loading leads to micro-cracks in untreated components. Induction hardening refines the surface microstructure, increasing fatigue life and resistance to crack initiation.</p>

            <h2 className="text-3xl font-bold mt-12">Materials Commonly Treated for Agricultural Components</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Typical Component</TableHead>
                            <TableHead>Hardness Achieved (HRC)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map((row) => (
                            <TableRow key={row.material}>
                                <TableCell className="font-medium">{row.material}</TableCell>
                                <TableCell>{row.component}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Strength That Powers Punjab’s Farms</h2>
            <p>The agricultural sector of Punjab thrives on reliability — and that reliability begins with durable components. By implementing induction hardening for farm equipment parts, manufacturers can ensure their tractors and implements deliver greater wear resistance, fatigue strength, and service life.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Agricultural Component Hardening Job Work?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for professional induction heat treatment and surface hardening of tractor and farm implement parts.</p>
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
