
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
  title: 'Heat Treatment for Heavy-Duty Shafts and Rollers',
  description: 'Learn how heat treatment improves durability and surface strength of heavy-duty shafts and rollers in Ludhiana industries.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Heat Treatment for Heavy-Duty Shafts and Rollers",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Industrial Heat Treatment",
  "keywords": ["heavy duty shaft heat treatment", "roller induction hardening Ludhiana", "machinery shaft Punjab"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/heat-treatment-for-heavy-duty-shafts-and-rollers",
  "inLanguage": "en"
};

const benefitsData = [
    { benefit: "High Surface Hardness", description: "Up to 60 HRC for extreme wear resistance" },
    { benefit: "Tough Core", description: "Maintains ductility and flexibility under load" },
    { benefit: "Low Distortion", description: "Controlled quenching ensures dimensional accuracy" },
    { benefit: "Fast & Efficient", description: "Induction process minimizes downtime" },
    { benefit: "Clean & Eco-Friendly", description: "No open flames or toxic emissions" },
    { benefit: "Consistent Quality", description: "Computer-monitored parameters for repeatability" },
];

const applicationsData = [
    { industry: "Automotive & tractor component manufacturers", components: ["Drive shafts", "Transmission shafts", "Pinion shafts", "Crankshafts", "Axles"] },
    { industry: "Steel rolling mills & heavy machinery plants", components: ["Conveyor rollers", "Press and mill rollers"] },
    { industry: "Power transmission equipment producers", components: ["Drive shafts", "Couplings"] },
    { industry: "Forging and casting industries", components: ["Mandrels", "Dies"] },
    { industry: "Textile and paper mill roller suppliers", components: ["Calendar rollers", "Press rollers"] }
];

const materialsData = [
    { grade: "EN8", use: "General-purpose shafts", hardness: "50–55", depth: "1.5–2.5" },
    { grade: "EN19", use: "Heavy-duty rollers & spindles", hardness: "55–58", depth: "2.0–3.0" },
    { grade: "EN24", use: "Transmission shafts", hardness: "56–60", depth: "2.5–4.0" },
    { grade: "4140 / 4340", use: "Industrial machinery shafts", hardness: "55–60", depth: "3.0–4.5" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogHeavyDutyShafts');

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
                    <span className='truncate'>Heat Treatment for Heavy-Duty Shafts and Rollers</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Heat Treatment for Heavy-Duty Shafts and Rollers</h1>
                <p className="mt-4 text-xl text-muted-foreground">Learn how heat treatment improves durability and surface strength of heavy-duty shafts and rollers in Ludhiana industries.</p>
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

            <h2 className="text-3xl font-bold mt-12">Introduction: Powering Industry with Stronger Shafts and Rollers</h2>
            <p>Every manufacturing and heavy machinery setup relies on components that bear massive loads, rotational stress, and wear. Among these, shafts and rollers play a critical role — transferring power, motion, and torque in high-performance environments. But constant stress leads to surface fatigue, cracks, and premature failure. The solution? Precision heat treatment — a process that transforms ordinary shafts into high-strength, wear-resistant, and long-lasting components.</p>
            <p>At {SITE_NAME}, Ludhiana, we specialize in induction-based heat treatment for heavy-duty shafts and rollers, providing engineered durability that powers industries across Punjab, Haryana, and North India.</p>

            <h2 className="text-3xl font-bold mt-12">Why Heat Treatment Is Essential for Shafts & Rollers</h2>
            <p>Heavy-duty shafts and rollers undergo cyclic loading, friction, and torque stress every second. Without proper heat treatment, they’re prone to surface fatigue & pitting, microcracks, excessive wear, and reduced load-carrying capacity. Through controlled induction hardening, these problems are prevented by improving surface hardness, core ductility, and resistance to deformation.</p>
            <p className='font-bold'>The Result: A part that’s hard on the outside, tough on the inside, and engineered for precision and longevity.</p>

            <h2 className="text-3xl font-bold mt-12">How {SITE_NAME} Performs Shaft & Roller Heat Treatment</h2>
            <p>We use advanced medium and high-frequency induction systems designed for large, heavy, and precision shafts or rollers. Each process is fully digitally monitored to ensure uniform results across every job.</p>
            <h3 className="text-2xl font-semibold mt-6">Our Step-by-Step Heat Treatment Process:</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground mt-4">
                <li><strong>Material Analysis & Cleaning:</strong> Components like EN8, EN19, EN24, 4140, or 4340 steels are identified and cleaned for optimal heating efficiency.</li>
                <li><strong>Induction Heating:</strong> A specially designed coil generates localized heat (850°C–950°C) within seconds — ensuring only the working surface hardens.</li>
                <li><strong>Quenching (Cooling):</strong> Immediate cooling using polymer or water quenching ensures hardness without distortion.</li>
                <li><strong>Tempering (Optional):</strong> Controlled reheating relieves stress, balancing toughness and hardness.</li>
                <li><strong>Inspection & Testing:</strong> Hardness and case depth are verified using Rockwell, Vickers, and microhardness testing equipment.</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12">Benefits of Induction Heat Treatment for Shafts and Rollers</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Benefit</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {benefitsData.map((row) => (
                            <TableRow key={row.benefit}>
                                <TableCell className="font-medium">{row.benefit}</TableCell>
                                <TableCell>{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Applications: Industries That Rely on Our Heat Treatment</h2>
            <p>Our heat treatment solutions support a wide range of industrial and manufacturing applications across Ludhiana and Punjab.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Industry</TableHead>
                            <TableHead>Common Components Treated</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {applicationsData.map((row) => (
                            <TableRow key={row.industry}>
                                <TableCell className="font-medium">{row.industry}</TableCell>
                                <TableCell>{row.components.join(', ')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Material Grades We Commonly Treat</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Typical Use</TableHead>
                            <TableHead>Hardness (HRC)</TableHead>
                            <TableHead>Case Depth (mm)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map((row) => (
                            <TableRow key={row.grade}>
                                <TableCell className="font-medium">{row.grade}</TableCell>
                                <TableCell>{row.use}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Case Study: Roller Hardening for a Steel Plant in Ludhiana</h2>
            <p>A client from a steel rolling mill equipment manufacturer faced premature wear on their 200mm diameter rollers made of EN24. We implemented a medium frequency (35 kHz) induction heating process with a 10% polymer quench. The roller life improved by 45% with lower maintenance downtime, achieving a surface hardness of 58.2 HRC and a case depth of 3.18mm with zero distortion.</p>

            <h2 className="text-3xl font-bold mt-12">Why Choose {SITE_NAME}, Ludhiana for Shaft & Roller Hardening</h2>
            <p>With decades of experience in industrial heat treatment and precision hardening, we are one of Punjab’s most trusted names for induction-based job work.</p>
            <h3 className="text-2xl font-semibold mt-6">Our Strengths Include:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                <li>Modern induction systems (10–200 kHz frequency range)</li>
                <li>Polymer & water-based quenching tanks</li>
                <li>In-house hardness and metallographic testing</li>
                <li>ISO-compliant quality documentation</li>
                <li>Expertise in large-diameter and heavy components</li>
                <li>Custom coil design for uniform case depth</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Building Strength That Lasts</h2>
            <p>In the world of heavy machinery and industrial manufacturing, failure is not an option — and that’s why heat treatment is a must for every shaft and roller. At {SITE_NAME}, we don’t just harden components — we engineer endurance. Our induction heat treatment technology ensures your parts withstand continuous stress, friction, and operational loads without compromise.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Expert Shaft or Roller Heat Treatment in Punjab?</h3>
                <p className="mt-2 text-muted-foreground">Partner with {SITE_NAME}, Ludhiana’s trusted name in industrial heat treatment and component hardening.</p>
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
