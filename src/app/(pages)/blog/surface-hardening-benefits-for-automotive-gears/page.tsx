
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Zap, Shield, Car, Tractor, HardHat } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

export const metadata: Metadata = {
  title: 'Surface Hardening Benefits for Automotive Gears',
  description: 'Learn how surface hardening boosts gear life and performance in Punjab’s automotive industry.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Surface Hardening Benefits for Automotive Gears",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Automotive Heat Treatment",
  "keywords": ["surface hardening for gears", "automotive gear heat treatment", "Punjab"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/surface-hardening-benefits-for-automotive-gears",
  "inLanguage": "en"
};

const steelData = [
    { grade: "EN8 (C40)", type: "Medium Carbon Steel", hardness: "50–55", depth: "1.5–3.0" },
    { grade: "EN19 (4140)", type: "Alloy Steel", hardness: "52–58", depth: "2.0–3.5" },
    { grade: "EN24 (4340)", type: "Nickel-Chromium Alloy", hardness: "55–60", depth: "2.5–5.0" },
    { grade: "20MnCr5", type: "Case Hardening Steel", hardness: "58–62", depth: "0.8–1.5" },
];

const comparisonData = [
    { parameter: "Wear Resistance", nonHardened: "Low", surfaceHardened: "High" },
    { parameter: "Load Carrying Capacity", nonHardened: "Medium", surfaceHardened: "Excellent" },
    { parameter: "Fatigue Strength", nonHardened: "Moderate", surfaceHardened: "Very High" },
    { parameter: "Service Life", nonHardened: "Short", surfaceHardened: "Extended" },
    { parameter: "Maintenance Frequency", nonHardened: "High", surfaceHardened: "Low" },
    { parameter: "Cost Efficiency", nonHardened: "Short-term", surfaceHardened: "Long-term benefit" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogAutomotiveGears');

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
                    <span className='truncate'>Surface Hardening for Automotive Gears</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Surface Hardening Benefits for Automotive Gears</h1>
                <p className="mt-4 text-xl text-muted-foreground">Learn how surface hardening boosts gear life and performance in Punjab’s automotive industry.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Surface hardening of automotive gears"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: The Role of Surface Hardening in Automotive Gears</h2>
            <p>Automotive gears are the heart of power transmission systems, converting engine torque into rotational motion efficiently. However, gears operate under constant stress, friction, and impact, which gradually leads to surface wear, pitting, and fatigue failure if not properly treated.</p>
            <p>That’s where surface hardening comes in — a precision-controlled heat treatment process that enhances the durability, wear resistance, and load-bearing capacity of automotive gears.</p>
            <p>In Ludhiana and across Punjab, where automotive manufacturing thrives, {SITE_NAME} provides specialized surface hardening job work for gears, pinions, and shafts, helping OEMs achieve longer component life and smoother performance.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Surface Hardening?</h2>
            <p>Surface hardening is a heat treatment technique that strengthens only the outer layer of a metal component while keeping the core tough and ductile. This is achieved through methods like Induction Hardening, Case Hardening, and Flame Hardening. For gears, induction surface hardening is the most widely used method, as it provides controlled case depth, uniform hardness, minimal distortion, and high production speed. {SITE_NAME} uses medium- and high-frequency induction systems to harden gear teeth precisely, ensuring perfect contact surfaces and fatigue resistance.</p>

            <h2 className="text-3xl font-bold mt-12">Why Surface Hardening Is Critical for Automotive Gears</h2>
            <h3 className="text-2xl font-semibold mt-6">1. Improved Wear Resistance</h3>
            <p>Gear teeth constantly mesh under high load and sliding friction. Surface hardening creates a hard martensitic layer (55–62 HRC) that resists abrasion and pitting, extending gear life dramatically.</p>
            <h3 className="text-2xl font-semibold mt-6">2. Higher Load-Bearing Capacity</h3>
            <p>A hardened surface supports higher torque and load transmission. The tough core underneath ensures that the gear does not crack or deform under shock loads.</p>
            <h3 className="text-2xl font-semibold mt-6">3. Reduced Fatigue Failures</h3>
            <p>Repeated loading causes micro-cracks on untreated gears. Induction-hardened gears can handle millions of load cycles due to their stress-resistant hardened layer.</p>
            <h3 className="text-2xl font-semibold mt-6">4. Dimensional Stability</h3>
            <p>With induction heating, the process is localized — meaning no bulk heating or distortion of the entire gear body. This ensures accurate gear geometry and smooth meshing after treatment.</p>
            <h3 className="text-2xl font-semibold mt-6">5. Extended Service Life</h3>
            <p>Surface-hardened gears typically last 2–3 times longer than non-hardened ones, reducing maintenance costs and improving vehicle reliability.</p>

            <h2 className="text-3xl font-bold mt-12">How the Automotive Gear Heat Treatment Process Works</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Pre-cleaning & Preparation:</strong> Gears are cleaned to remove oil, rust, or carbon deposits before hardening.</li>
                <li><strong>Induction Heating:</strong> The gear’s teeth are exposed to a controlled electromagnetic field, heating only the contact surfaces to 850–950°C.</li>
                <li><strong>Quenching:</strong> The heated area is quenched with polymer or water, instantly forming a martensitic layer on the gear surface.</li>
                <li><strong>Tempering (Optional):</strong> A controlled reheating process is done to relieve internal stresses and balance toughness with hardness.</li>
                <li><strong>Hardness & Case Depth Testing:</strong> Each gear undergoes Rockwell hardness testing and microstructural examination to verify results.</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12">Common Steels Used for Gear Surface Hardening</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material Grade</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Typical Hardness (HRC)</TableHead>
                            <TableHead>Case Depth (mm)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {steelData.map((row) => (
                            <TableRow key={row.grade}>
                                <TableCell className="font-medium">{row.grade}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p>At {SITE_NAME}, each material is treated using customized frequency, heating time, and quenching control to ensure optimum hardness and case depth.</p>

            <h2 className="text-3xl font-bold mt-12">Quality Control and Inspection</h2>
            <p>Every gear treated at {SITE_NAME}, Ludhiana undergoes comprehensive testing to ensure uniform hardness and microstructure consistency.</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Surface Hardness Testing (HRC)</li>
                <li>Microhardness Case Profile</li>
                <li>Metallographic Examination</li>
                <li>Distortion Check & Runout Measurement</li>
            </ul>
            <p>Our in-house lab ensures tight process control and traceability — essential for OEM production quality.</p>
            
            <h2 className="text-3xl font-bold mt-12">Applications of Surface Hardening in Punjab’s Automotive Industry</h2>
            <p>Surface hardening is used extensively across Punjab’s automotive and agricultural manufacturing sectors, particularly for:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><Car className="inline-block mr-2 h-5 w-5 text-primary" />Transmission Gears & Pinions</li>
                <li><Zap className="inline-block mr-2 h-5 w-5 text-primary" />Differential Gears</li>
                <li><Shield className="inline-block mr-2 h-5 w-5 text-primary" />Axles, Shafts, and Spindles</li>
                <li><Tractor className="inline-block mr-2 h-5 w-5 text-primary" />Tractor Gearboxes and PTO Components</li>
                <li><HardHat className="inline-block mr-2 h-5 w-5 text-primary" />Industrial Gear Drives and Couplings</li>
            </ul>
            <p>Ludhiana, being one of India’s largest automotive component hubs, relies heavily on induction surface hardening job work to maintain high performance standards.</p>
            
            <h2 className="text-3xl font-bold mt-12">Why {SITE_NAME} Is a Trusted Partner for Automotive Gear Hardening</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Advanced induction systems:</strong> Medium & high-frequency precision.</li>
                <li><strong>Polymer & water quenching options:</strong> Controlled cooling rates.</li>
                <li><strong>Skilled metallurgical team:</strong> Material-specific heat treatment design.</li>
                <li><strong>ISO-based process standards:</strong> Uniform results & repeatability.</li>
                <li><strong>Local service in Punjab:</strong> Fast turnaround & technical support.</li>
            </ul>
            <p>With years of expertise in automotive gear heat treatment, {SITE_NAME} delivers defect-free, dimensionally accurate, and fatigue-resistant gears for OEM clients across North India.</p>

            <h2 className="text-3xl font-bold mt-12">Comparison: Surface Hardened vs Non-Hardened Gears</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Non-Hardened Gear</TableHead>
                            <TableHead>Surface Hardened Gear</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.nonHardened}</TableCell>
                                <TableCell><CheckCircle className="inline-block mr-2 h-5 w-5 text-green-500" />{row.surfaceHardened}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Surface Hardening Is the Backbone of Gear Reliability</h2>
            <p>Surface hardening isn’t just an enhancement — it’s a necessity for automotive gear performance. By combining strength, precision, and wear resistance, the process ensures that every gear operates smoothly even under extreme conditions.</p>
            <p>For OEMs and industrial manufacturers in Ludhiana and across Punjab, {SITE_NAME} stands as a trusted heat treatment partner, offering tailor-made surface hardening services for gears, shafts, and all critical automotive components.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Automotive Gear Hardening Services in Punjab?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for specialized gear surface hardening and heat treatment job work in Ludhiana, Punjab, Haryana & Delhi NCR.</p>
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
