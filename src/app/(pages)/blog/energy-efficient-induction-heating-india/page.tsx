
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Zap, Shield, Flame, BatteryCharging, Leaf, Wind } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Energy-Efficient Induction Hardening for Punjab Industries',
  description: 'Learn how induction heating saves energy and supports sustainable manufacturing.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Energy-Efficient Induction Hardening for Punjab Industries",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Sustainable Manufacturing",
  "keywords": ["energy efficient heat treatment", "green manufacturing Punjab", "eco-friendly hardening"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/energy-efficient-induction-heating-india",
  "inLanguage": "en"
};

const energyComparisonData = [
    { parameter: "Energy Transfer Efficiency", induction: "85–95%", conventional: "35–45%" },
    { parameter: "Preheating Required", induction: "No", conventional: "Yes" },
    { parameter: "Heating Speed", induction: "Seconds", conventional: "Hours" },
    { parameter: "Localized Heating", induction: "Yes", conventional: "No" },
    { parameter: "Emission Output", induction: "Zero", conventional: "High" },
    { parameter: "Cooling Efficiency", induction: "Closed-loop, minimal water use", conventional: "Open-loop, wasteful" },
    { parameter: "Overall Energy Savings", induction: "✅ 30–50%", conventional: "❌ Energy-intensive" },
];

const sustainabilityData = [
    { feature: "Medium & high-frequency induction machines", benefit: "Precision energy use" },
    { feature: "PLC-based automation", benefit: "No overheating or energy waste" },
    { feature: "Closed-loop polymer cooling", benefit: "Zero discharge system" },
    { feature: "Fast production cycles", benefit: "Reduced energy per component" },
    { feature: "Localized hardening", benefit: "Lower environmental impact" },
];

const caseStudyData = {
    before: { heatingTime: '45 mins', cost: '₹120', issues: 'High distortion and scaling' },
    after: { heatingTime: '2 mins', cost: '₹38', issues: 'No scaling, uniform hardness', savings: '~68%', reworkReduction: '25%' }
};

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogEnergyEfficient');

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
                    <span className='truncate'>Energy-Efficient Induction Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Energy-Efficient Induction Hardening for Punjab Industries</h1>
                <p className="mt-4 text-xl text-muted-foreground">Learn how induction heating saves energy and supports sustainable manufacturing.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Energy efficient induction hardening diagram"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>As industries evolve, energy efficiency and sustainable production have become essential to modern manufacturing. With rising electricity costs, carbon regulations, and increasing competition, manufacturers are shifting toward green and eco-friendly processes that save energy without compromising quality.</p>
            <p>At {SITE_NAME} (Ludhiana), we help OEMs and manufacturers reduce their energy footprint through high-efficiency induction hardening systems, offering precise, clean, and cost-effective surface treatment solutions.</p>

            <h2 className="text-3xl font-bold mt-12">How Induction Heat Treatment Improves Energy Efficiency</h2>
            <h3 className="text-2xl font-semibold mt-6">1. Direct Heating — No Heat Loss</h3>
            <p>Traditional furnaces heat an entire chamber, wasting energy on heating air, walls, and fixtures. In contrast, induction systems generate heat directly inside the metal, with up to 95% energy transfer efficiency.</p>
            <h3 className="text-2xl font-semibold mt-6">2. Localized Heating</h3>
            <p>Induction targets only the functional area — such as gear teeth, shafts, or bearing surfaces — instead of the entire component.</p>
            <h3 className="text-2xl font-semibold mt-6">3. Instant On/Off Operation</h3>
            <p>Unlike gas or resistance furnaces that require preheating, induction systems are ready instantly. Power is used only during active heating, eliminating standby losses.</p>

            <h2 className="text-3xl font-bold mt-12">Eco-Friendly & Green Manufacturing Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="flex items-start gap-4"><Leaf className="h-6 w-6 text-primary mt-1" /><div><h4 className="font-bold">No Fossil Fuel Emissions</h4><p className="text-muted-foreground">Reduces CO₂ and NOx emissions.</p></div></div>
                <div className="flex items-start gap-4"><Wind className="h-6 w-6 text-primary mt-1" /><div><h4 className="font-bold">Low Noise and No Smoke</h4><p className="text-muted-foreground">Ideal for urban and indoor production units.</p></div></div>
                <div className="flex items-start gap-4"><Zap className="h-6 w-6 text-primary mt-1" /><div><h4 className="font-bold">Recyclable Cooling Mediums</h4><p className="text-muted-foreground">Biodegradable, water-based polymers.</p></div></div>
                <div className="flex items-start gap-4"><BatteryCharging className="h-6 w-6 text-primary mt-1" /><div><h4 className="font-bold">Reduced Carbon Footprint</h4><p className="text-muted-foreground">Minimal scrap generation and sustainable material use.</p></div></div>
            </div>

            <h2 className="text-3xl font-bold mt-12">Energy Efficiency Comparison</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Induction Heat Treatment</TableHead>
                            <TableHead>Conventional Furnace</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {energyComparisonData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.induction}</TableCell>
                                <TableCell>{row.conventional}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">How {SITE_NAME} Supports Sustainable Manufacturing</h2>
             <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Feature</TableHead>
                            <TableHead>Sustainability Benefit</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sustainabilityData.map((row) => (
                            <TableRow key={row.feature}>
                                <TableCell className="font-medium">{row.feature}</TableCell>
                                <TableCell>{row.benefit}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Smarter, Cleaner, and Greener Heat Treatment</h2>
            <p>Energy-efficient induction hardening is more than a production process — it’s a sustainable manufacturing revolution. By combining precision, efficiency, and eco-friendliness, {SITE_NAME} helps Punjab’s industries achieve superior product quality while lowering their environmental footprint.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Partner with {SITE_NAME} for Energy-Efficient Heat Treatment</h3>
                <p className="mt-2 text-muted-foreground">Contact us for eco-friendly and energy-efficient heat treatment solutions.</p>
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
