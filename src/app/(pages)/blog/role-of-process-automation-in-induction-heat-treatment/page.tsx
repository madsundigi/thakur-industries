
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
  title: 'Role of Process Automation in Induction Heat Treatment',
  description: 'Learn how PLC and sensor-based systems improve repeatability and efficiency in heat treatment.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Role of Process Automation in Induction Heat Treatment",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Technology",
  "keywords": ["automation in induction heat treatment", "digital heat control Punjab", "process monitoring Ludhiana"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/role-of-process-automation-in-induction-heat-treatment",
  "inLanguage": "en"
};

const componentsData = [
    { element: "PLC (Programmable Logic Controller)", function: "Controls heating cycle, timing, and quenching logic" },
    { element: "HMI (Human Machine Interface)", function: "Displays process parameters and alarms" },
    { element: "Temperature Sensors (Infrared / Pyrometer)", function: "Monitor surface temperature in real-time" },
    { element: "Data Logger", function: "Records power, temperature, and quench data" },
    { element: "Frequency Converter", function: "Adjusts induction coil output for material type" },
    { element: "Quenching Control System", function: "Maintains pressure and flow consistency" },
    { element: "SCADA Integration", function: "Enables remote monitoring and data storage" },
];

const comparisonData = [
    { aspect: "Temperature Control", manual: "Operator Judged", automated: "Sensor-based, ±5°C accuracy" },
    { aspect: "Case Depth Consistency", manual: "Variable", automated: "±0.1 mm accuracy" },
    { aspect: "Energy Efficiency", manual: "Moderate", automated: "10–15% energy savings" },
    { aspect: "Productivity", manual: "Moderate", automated: "20–30% higher throughput" },
    { aspect: "Traceability", manual: "Limited", automated: "100% digital process logs" },
    { aspect: "Error Rate", manual: "Higher", automated: "Significantly reduced" },
];

const caseStudyData = {
    caseDepthUniformity: "Improved from ±0.4 mm to ±0.1 mm",
    surfaceHardness: "Stabilized at 58–60 HRC",
    energySavings: "12%",
    processRepeatability: "98.7%",
};

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogAutomation');

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
                    <span className='truncate'>Process Automation in Heat Treatment</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Role of Process Automation in Induction Heat Treatment</h1>
                <p className="mt-4 text-xl text-muted-foreground">In today’s competitive industrial landscape, precision and consistency are the cornerstones of manufacturing quality. At {SITE_NAME}, Ludhiana, we have implemented PLC-based induction heat treatment systems that use real-time sensors, temperature feedback, and digital monitoring to deliver unmatched consistency and metallurgical accuracy.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="An automated industrial control panel showing graphs and data"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">What Is Process Automation in Induction Heat Treatment?</h2>
            <p>Process automation refers to the use of Programmable Logic Controllers (PLC), temperature sensors, and computer interfaces to monitor and control every stage of the induction heating and quenching process. Instead of relying on operator judgment, the system automatically adjusts parameters like heating temperature, power output, and cooling time for each component.</p>
            
            <h2 className="text-3xl font-bold mt-12">How Automation Improves Heat Treatment Quality</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Consistent Heating & Case Depth:</strong> Real-time temperature monitoring ensures uniform hardness and case depth accuracy within ±0.1 mm.</li>
                <li><strong className="text-foreground">Energy Efficiency:</strong> Automated systems adjust power output dynamically, reducing wastage.</li>
                <li><strong className="text-foreground">Reduced Human Error:</strong> Eliminates inconsistencies from manual operations.</li>
                <li><strong className="text-foreground">Real-Time Feedback:</strong> Sensors track coil current, surface temperature, and quench pressure.</li>
                <li><strong className="text-foreground">Improved Traceability:</strong> Every process run is digitally recorded for OEM quality audits.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Key Components of Automated Induction Systems</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>System Element</TableHead>
                            <TableHead>Function</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {componentsData.map((row) => (
                            <TableRow key={row.element}>
                                <TableCell className="font-medium">{row.element}</TableCell>
                                <TableCell>{row.function}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Benefits of Automation in Induction Heat Treatment</h2>
            <div className="my-8 overflow-x-auto">
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Aspect</TableHead>
                            <TableHead>Manual System</TableHead>
                            <TableHead>Automated System ({SITE_NAME})</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map((row) => (
                            <TableRow key={row.aspect}>
                                <TableCell className="font-medium">{row.aspect}</TableCell>
                                <TableCell>{row.manual}</TableCell>
                                <TableCell>{row.automated}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Case Study: Automated Heat Treatment of EN19 Shafts</h2>
            <p>A Tier-1 Automotive OEM in Punjab faced inconsistent hardness and case depth using a manual heating system. After switching to our automated PLC-based induction system, the results were remarkable:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Case depth uniformity improved from ±0.4 mm to ±0.1 mm</li>
                <li>Surface hardness stabilized at 58–60 HRC</li>
                <li>Energy savings of 12% were achieved</li>
                <li>Process repeatability reached 98.7%</li>
            </ul>
            <p className="font-semibold"><CheckCircle className="inline-block mr-2 h-5 w-5 text-green-500" />Automation transformed their process control into predictable, consistent, and certifiable results.</p>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Automation — The Future of Precision Heat Treatment</h2>
            <p>The integration of automation in induction heat treatment is revolutionizing how industries achieve accuracy, quality, and efficiency. By replacing manual judgment with data-driven control, manufacturers can guarantee consistent hardness, lower energy consumption, full process traceability, and greater repeatability for OEM compliance. At {SITE_NAME}, our automated systems ensure every component meets global standards.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Upgrade to Automated Induction Hardening</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for PLC-controlled induction heat treatment job work to ensure consistent quality and efficiency.</p>
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
