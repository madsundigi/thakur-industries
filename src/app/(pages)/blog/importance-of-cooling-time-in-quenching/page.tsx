
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Droplet } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Importance of Cooling Time in Quenching',
  description: 'Discover how quenching delay and cooling time affect final hardness and structural integrity.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Importance of Cooling Time in Quenching",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Quality Control",
  "keywords": ["cooling time in quenching", "heat treatment cooling control", "quenching delay Punjab"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/importance-of-cooling-time-in-quenching",
  "inLanguage": "en"
};

const coolingRateData = [
    { rate: "Very Fast Cooling (Short time)", structure: "Martensite", properties: "High hardness, brittle" },
    { rate: "Moderate Cooling (Controlled time)", structure: "Martensite + Bainite", properties: "Balanced hardness & toughness" },
    { rate: "Slow Cooling (Long time)", structure: "Pearlite / Ferrite", properties: "Soft, low hardness" }
];

const quenchingMediaData = [
    { medium: "Water", rate: "Very Fast", advantages: "Maximum hardness, cost-effective", use: "Small parts, non-critical shapes" },
    { medium: "Polymer Solution (5–15%)", rate: "Moderate", advantages: "Controlled cooling, minimal cracking", use: "Shafts, gears, spindles" },
    { medium: "Oil", rate: "Slow", advantages: "Gentle cooling, less distortion", use: "Low-carbon steels, complex parts" },
    { medium: "Air / Mist", rate: "Very Slow", advantages: "For delicate alloys", use: "Aerospace, tool steels" },
];

const coolingParamsData = [
    { parameter: "Quenching Medium", value: "8–12% Polymer" },
    { parameter: "Spray Pressure", value: "1.5–3.0 bar" },
    { parameter: "Cooling Duration", value: "3–6 seconds" },
    { parameter: "Component Surface Temp (Pre-Quench)", value: "880–900°C" },
    { parameter: "Final Surface Hardness", value: "56–60 HRC" },
    { parameter: "Case Depth Range", value: "2.5–4.0 mm" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogCoolingTime');

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
                    <span className='truncate'>Importance of Cooling Time</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Importance of Cooling Time in Quenching</h1>
                <p className="mt-4 text-xl text-muted-foreground">In any heat treatment process, the cooling phase—known as quenching—plays a decisive role in determining the final properties of the material.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Importance of Cooling Time in Quenching"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: Why Cooling Time Defines Hardness and Quality</h2>
            <p>When a steel component is heated to its austenitizing temperature (around 850–900°C) during induction hardening, it must be cooled quickly to transform the surface into a hard, wear-resistant martensitic structure. But here’s the catch—the cooling time and rate must be controlled precisely. Too fast, and you risk cracks and distortion. Too slow, and the hardness drops due to incomplete martensitic transformation. At {SITE_NAME}, Ludhiana, we use digitally monitored quenching systems to control the cooling time in quenching, ensuring consistent hardness and zero distortion across all components.</p>

            <h2 className="text-3xl font-bold mt-12">What Is Cooling Time in Quenching?</h2>
            <p>Cooling time refers to the duration between the end of heating and the completion of quenching, during which the temperature of the component drops from austenitizing (850–900°C) to below 200°C. This period determines how the microstructure of the steel changes—whether it forms hard martensite, soft pearlite, or a combination of both.</p>
            <h3 className="text-2xl font-semibold mt-6">Typical Cooling Time Stages in Quenching:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Vapor Phase Cooling (Initial stage): The surface is surrounded by vapor bubbles, slowing heat transfer.</li>
                <li>Boiling Phase Cooling: Rapid heat removal as vapor collapses and liquid contacts the metal surface.</li>
                <li>Convection Cooling: Gradual cooling to room temperature, ensuring uniformity.</li>
            </ul>
            <p className="font-semibold text-foreground">💡 Precise control of these stages ensures the correct hardness profile and prevents cracking.</p>

            <h2 className="text-3xl font-bold mt-12">The Science: How Cooling Time Affects Metallurgical Transformation</h2>
            <p>The rate of cooling determines which microstructure the steel forms after quenching:</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Cooling Rate / Time</TableHead>
                            <TableHead>Microstructure Formed</TableHead>
                            <TableHead>Resulting Properties</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {coolingRateData.map((row) => (
                            <TableRow key={row.rate}>
                                <TableCell className="font-medium">{row.rate}</TableCell>
                                <TableCell>{row.structure}</TableCell>
                                <TableCell>{row.properties}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p className="font-semibold text-foreground">The goal is to cool fast enough for martensite formation—but not so fast that internal stresses cause cracks.</p>
            
            <h2 className="text-3xl font-bold mt-12">Role of Quenching Delay and Its Impact</h2>
            <p>In induction hardening, the time between heating and quenching—called quenching delay—also impacts final properties. If there’s a delay after heating, the steel surface may begin to transform back into ferrite or pearlite, reducing the achievable hardness.</p>
            <h3 className="text-2xl font-semibold mt-6">Recommended Practices:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Quenching should start within 1–2 seconds of heating completion.</li>
                <li>Automated quenching heads ensure instant spray activation after heating.</li>
                <li>No manual delay should occur between induction heating and quenching.</li>
            </ul>
            <p className="font-semibold text-foreground">🕒 Even a few seconds’ delay can reduce hardness by 10–15%.</p>

            <h2 className="text-3xl font-bold mt-12">Cooling Media and Their Influence on Cooling Time</h2>
            <p>Different quenching media have distinct heat extraction capabilities. The choice of coolant directly affects cooling speed, surface hardness, and distortion risk.</p>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Quenching Medium</TableHead>
                            <TableHead>Cooling Rate</TableHead>
                            <TableHead>Advantages</TableHead>
                            <TableHead>Typical Use</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {quenchingMediaData.map((row) => (
                            <TableRow key={row.medium}>
                                <TableCell className="font-medium">{row.medium}</TableCell>
                                <TableCell>{row.rate}</TableCell>
                                <TableCell>{row.advantages}</TableCell>
                                <TableCell>{row.use}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p className="font-semibold text-foreground"><Droplet className="inline-block mr-2 h-5 w-5 text-primary" /> At {SITE_NAME}, we primarily use polymer quenching for precision control and distortion-free results.</p>
            
            <h2 className="text-3xl font-bold mt-12">Key Factors Influencing Cooling Time</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Material Composition:</strong> Higher alloy steels (EN19, 4340) require slower cooling for uniform results.</li>
              <li><strong>Component Geometry:</strong> Thicker sections cool slower — hence require longer quenching duration.</li>
              <li><strong>Temperature of Quenching Medium:</strong> Warm media reduce cooling rate; cooler media increase it drastically.</li>
              <li><strong>Agitation Speed:</strong> Constant stirring or spray flow ensures consistent heat removal.</li>
              <li><strong>Initial Surface Temperature:</strong> The higher the starting temperature, the longer the required cooling phase.</li>
            </ul>
            <p className='mt-4 font-semibold text-foreground'>🧠 Every degree and every second can change the final structure of the metal.</p>

            <h2 className="text-3xl font-bold mt-12">Optimized Cooling Parameters Used at {SITE_NAME}</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Typical Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {coolingParamsData.map((row) => (
                            <TableRow key={row.parameter}>
                                <TableCell className="font-medium">{row.parameter}</TableCell>
                                <TableCell>{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <p>We fine-tune these parameters for each job based on material, geometry, and hardness requirements.</p>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Cooling Time — The Silent Quality Factor</h2>
            <p>While heating gets the spotlight in induction hardening, cooling time is what ultimately decides the success or failure of the process. Controlled cooling ensures uniform surface hardness, a stress-free structure, accurate case depth, and a crack-free finish. At {SITE_NAME}, Ludhiana, we use computer-controlled quenching systems and polymer-based cooling technology to deliver consistent, distortion-free hardening results — tailored to your steel grade and component geometry.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Need Controlled Quenching & Heat Treatment?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, trusted by leading automotive, forging, and machinery manufacturers for reliable hardening results.</p>
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

    