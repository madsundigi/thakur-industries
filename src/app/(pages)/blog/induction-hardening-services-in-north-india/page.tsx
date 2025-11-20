
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Zap, Shield, Thermometer, AlertTriangle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Thakur Industries - Induction Hardening Services in North India',
  description: 'Serving Ludhiana, Punjab, Haryana & Delhi NCR with professional induction heat treatment & case hardening services.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Thakur Industries – Leading Induction Hardening Services in North India",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurinduction.com/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Services",
  "keywords": ["induction hardening north india", "heat treatment Punjab", "Haryana", "Delhi", "North India job work"],
  "mainEntityOfPage": "https://www.thakurinduction.com/blog/induction-hardening-services-in-north-india",
  "inLanguage": "en"
};

const industriesData = [
    { industry: "Automotive", components: "Shafts, gears, axles, spindles", locations: "Ludhiana, Delhi NCR" },
    { industry: "Agriculture", components: "Tractor parts, tiller blades, PTO shafts", locations: "Punjab, Haryana" },
    { industry: "Industrial Machinery", components: "Rollers, couplings, pins, tools", locations: "Rajpura, Ambala" },
    { industry: "Forging & Tooling", components: "Dies, punches, molds", locations: "Ludhiana, Faridabad" },
    { industry: "Defense & Railways", components: "Bushes, rods, pins", locations: "North India region" },
];

const materialsData = [
    { grade: "EN8 (C40)", applications: "Shafts, rods, rollers" },
    { grade: "EN19 (4140)", applications: "Automotive & tractor components" },
    { grade: "EN24 (4340)", applications: "Axles, gears, and spindles" },
    { grade: "20MnCr5", applications: "Case hardening gears" },
    { grade: "Tool Steels", applications: "Dies, punches, and cutting parts" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogNorthIndia');

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
                    <span className='truncate'>Induction Hardening Services in North India</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">{SITE_NAME} – Leading Induction Hardening Services in North India</h1>
                <p className="mt-4 text-xl text-muted-foreground">In the heart of North India’s industrial belt — stretching from Ludhiana (Punjab) to Gurugram (Haryana) and Delhi NCR — manufacturing excellence depends on one critical process: induction hardening.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Map of North India highlighting industrial regions"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>From automotive parts and tractor components to industrial machinery, every metal part that faces friction, load, or wear must undergo precise surface hardening to achieve performance and reliability. That’s where {SITE_NAME}, based in Ludhiana, Punjab, leads the way — offering state-of-the-art induction hardening job work to industries across North India.</p>

            <h2 className="text-3xl font-bold mt-12">Industries We Serve Across North India</h2>
             <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Industry</TableHead>
                            <TableHead>Components Hardened</TableHead>
                            <TableHead>Service Locations</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {industriesData.map((row) => (
                            <TableRow key={row.industry}>
                                <TableCell className="font-medium">{row.industry}</TableCell>
                                <TableCell>{row.components}</TableCell>
                                <TableCell>{row.locations}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Key Materials We Treat</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material Grade</TableHead>
                            <TableHead>Common Applications</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {materialsData.map((row) => (
                            <TableRow key={row.grade}>
                                <TableCell className="font-medium">{row.grade}</TableCell>
                                <TableCell>{row.applications}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Reliable Heat Treatment Partner for North India’s Industries</h2>
            <p>Whether you’re an automotive part manufacturer in Gurgaon, a tractor component producer in Ludhiana, or a machine builder in Delhi, {SITE_NAME} is your trusted partner for professional induction hardening job work.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Induction Hardening Services in North India?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} today for precision heat treatment, case hardening, and surface hardening job work.</p>
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
