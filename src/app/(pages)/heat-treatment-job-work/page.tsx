
'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Award, 
  Factory, 
  Zap, 
  ShieldCheck, 
  CheckCircle, 
  ChevronRight, 
  ArrowRight, 
  Phone, 
  MessageSquare,
  MapPin,
  Cpu,
  History,
  Droplet,
  Boxes,
  Wrench,
  Search,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { JsonLd } from '@/components/shared/JsonLd';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SITE_NAME, SITE_PHONE_NUMBER, SITE_ADDRESS } from '@/lib/constants';
import PageHeader from '@/components/shared/PageHeader';

// Animation variants
const fadeInBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const hoverGlow = {
  whileHover: { 
    scale: 1.03, 
    boxShadow: "0 0 20px rgba(125, 249, 255, 0.3)",
    transition: { duration: 0.2 }
  }
};

export default function HeatTreatmentJobWorkPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'serviceInductionHardening');
  const whatIsImage = PlaceHolderImages.find(img => img.id === 'serviceInductionHardening'); // Re-using or choose similar
  
  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Heat Treatment Job Work in Ludhiana",
    "serviceType": "Induction Hardening & Heat Treatment",
    "provider": {
      "@type": "LocalBusiness",
      "name": SITE_NAME,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ludhiana",
        "addressRegion": "Punjab",
        "addressCountry": "IN"
      }
    },
    "description": "Professional heat treatment job work and induction hardening services in Ludhiana for shafts, gears and steel components."
  };

  return (
    <>
      <JsonLd data={seoSchema} />
      <div className="bg-background relative">
        
        {/* 1. HERO SECTION */}
        <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          >
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt="heat treatment job work Ludhiana"
                fill
                priority
                className="object-cover"
                data-ai-hint="induction hardening shaft"
              />
            )}
            <div className="absolute inset-0 bg-black/75" />
          </motion.div>

          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInBottom}
            >
              <h1 className="text-4xl font-black tracking-tighter text-white sm:text-6xl md:text-7xl uppercase italic">
                Heat Treatment <span className="text-primary">Job Work</span> in Ludhiana
              </h1>
              <p className="mt-6 text-xl font-bold text-primary/90 uppercase tracking-widest">
                Precision Induction Hardening & Heat Treatment Services for Industrial Components
              </p>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
                Thakur Industries provides reliable heat treatment job work for steel components including shafts, gears, axles, and machine parts. Serving manufacturers across Punjab and nearby industrial regions.
              </p>
            </motion.div>

            <motion.div 
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button asChild size="lg" className="w-full sm:w-auto px-8 py-7 text-lg bg-primary hover:bg-primary/80 text-primary-foreground font-bold">
                <Link href="/contact">Request Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto px-8 py-7 text-lg border-white text-white hover:bg-white hover:text-black font-bold">
                <a href="https://wa.me/917900000776" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Send Drawing
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 2. TRUST / INDUSTRIAL CREDENTIALS */}
        <section className="py-12 bg-secondary border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Award, text: "Industrial Heat Treatment Experts" },
                { icon: Factory, text: "Serving Punjab Manufacturers" },
                { icon: Cpu, text: "Precision Hardening Technology" },
                { icon: ShieldCheck, text: "Reliable Job Work Support" }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInBottom} className="flex flex-col items-center text-center gap-3">
                  <item.icon className="h-10 w-10 text-primary" />
                  <span className="text-sm font-bold uppercase tracking-tight text-foreground/80">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 3. WHAT IS HEAT TREATMENT JOB WORK */}
        <section className="py-24 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-6 uppercase italic">
                  What is <span className="text-primary">Heat Treatment</span> Job Work?
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Heat treatment job work involves controlled heating and cooling of steel components to improve hardness, wear resistance, and durability. By altering the microstructure of the metal, we ensure your components can withstand extreme mechanical stress.
                  </p>
                  <p className="font-bold text-foreground">Our specialization includes:</p>
                  <ul className="grid grid-cols-1 gap-4">
                    {['Induction Hardening', 'Surface Hardening', 'Case Hardening'].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="h-2 w-2 bg-primary rounded-full" />
                        <span className="font-semibold text-foreground uppercase tracking-wide">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div 
                className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-primary/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {whatIsImage && (
                  <Image 
                    src={whatIsImage.imageUrl} 
                    alt="industrial heat treatment process" 
                    fill 
                    className="object-cover"
                    data-ai-hint="industrial heat treatment process"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. COMPONENTS WE HARDEN */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <PageHeader 
              title="Components Suitable for Heat Treatment" 
              description="We provide precision surface hardening for a variety of critical mechanical parts."
              className="mb-16"
            />
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { title: "Shaft Hardening", href: "/shaft-hardening", icon: Settings },
                { title: "Gear Hardening", href: "/gear-hardening", icon: Boxes },
                { title: "Pinion Hardening", href: "/gear-hardening", icon: Wrench },
                { title: "Camshaft Hardening", href: "/shaft-hardening", icon: History },
                { title: "Axle Hardening", href: "/component-hardening", icon: Cpu },
                { title: "Roller Hardening", href: "/component-hardening", icon: Settings }
              ].map((item, i) => (
                <Link key={i} href={item.href}>
                  <motion.div 
                    variants={fadeInBottom}
                    {...hoverGlow}
                    className="bg-card p-8 rounded-xl border border-border group h-full transition-all"
                  >
                    <item.icon className="h-12 w-12 text-primary mb-6 transition-transform group-hover:rotate-12" />
                    <h3 className="text-2xl font-bold text-foreground mb-4 uppercase italic tracking-tighter group-hover:text-primary transition-colors">{item.title}</h3>
                    <div className="flex items-center text-primary font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 5. MATERIALS WE TREAT */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-12 uppercase italic text-center">
              Steel Grades We <span className="text-primary">Heat Treat</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  { name: "EN8 Steel", range: "50-55 HRC", desc: "Commonly used for medium carbon steel parts requiring decent surface hardness." },
                  { name: "EN19 Steel", range: "52-58 HRC", desc: "High-quality alloy steel for high-stress components like shafts and axles." },
                  { name: "EN24 Steel", range: "55-60 HRC", desc: "Superior alloy steel with high core strength and deep hardenability." },
                  { name: "4140 Alloy Steel", range: "54-58 HRC", desc: "Excellent fatigue and wear resistance, ideal for precision industrial gears." },
                  { name: "4340 Steel", range: "56-60 HRC", desc: "Tough alloy steel suitable for heavy-duty drive components." },
                  { name: "Carbon Steel", range: "45-55 HRC", desc: "Standard carbon steels treated for improved surface integrity and load capacity." }
                ].map((material, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl bg-secondary/30 px-6">
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex justify-between w-full pr-8">
                        <span className="text-xl font-bold uppercase italic tracking-tight">{material.name}</span>
                        <span className="text-primary font-mono font-bold tracking-widest">{material.range}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-lg pb-6">
                      {material.desc}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* 6. OUR HEAT TREATMENT PROCESS */}
        <section className="py-24 bg-background border-y border-border relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-16 uppercase italic text-center">
              Our <span className="text-primary">Process</span> Workflow
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2 z-0" />
              
              {[
                { title: "Component Inspection", icon: Search },
                { title: "Surface Preparation", icon: Wrench },
                { title: "Induction Heating", icon: Flame },
                { title: "Controlled Quenching", icon: Droplet },
                { title: "Hardness Testing", icon: Settings },
                { title: "Final Quality Inspection", icon: ShieldCheck }
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  className="flex flex-col items-center text-center relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(125,249,255,0.4)] border-2 border-background">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-foreground/90">{step.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. INDUSTRIES WE SERVE */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-16 uppercase italic text-center">
              Industries <span className="text-primary">We Serve</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: "Automotive Components", icon: Cpu },
                { title: "Agricultural Machinery", icon: History },
                { title: "Industrial Equipment", icon: Factory },
                { title: "Engineering Components", icon: Settings },
                { title: "Machine Manufacturers", icon: Wrench }
              ].map((industry, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-card p-6 rounded-xl border border-border text-center flex flex-col items-center gap-4 transition-all"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-tighter">{industry.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. SERVICE AREA */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border bg-secondary flex items-center justify-center group">
                <MapPin className="h-24 w-24 text-primary opacity-20 transition-all group-hover:scale-110 group-hover:opacity-40" />
                <div className="absolute bottom-8 left-8 p-6 bg-background/80 backdrop-blur-md rounded-lg border border-primary/20 max-w-xs">
                  <h3 className="font-bold text-primary uppercase tracking-widest mb-2">Coverage Area</h3>
                  <p className="text-sm text-muted-foreground">Strategically located in Ludhiana to serve all major industrial hubs in North India.</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-8 uppercase italic leading-none">
                  Heat Treatment Job Work in <span className="text-primary">Punjab</span> & Nearby Regions
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {['Ludhiana', 'Khanna', 'Mandi Gobindgarh', 'Sangrur', 'Phillaur', 'Rajpura', 'Ambala', 'Baddi'].map((city) => (
                    <div key={city} className="flex items-center gap-3 p-4 bg-secondary rounded-lg border border-border">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-bold text-foreground uppercase tracking-tight">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. WHY CHOOSE THAKUR INDUSTRIES */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Consistent Hardness Control", desc: "Digital process monitoring for every single cycle." },
                { title: "Modern Induction Equipment", desc: "Medium & High frequency machines for precision." },
                { title: "Reliable Industrial Job Work", desc: "Two decades of technical metallurgical expertise." },
                { title: "Fast Turnaround Time", desc: "Efficient workflows to meet tight OEM deadlines." }
              ].map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-secondary/50 p-8 rounded-xl border border-primary/10 h-full"
                >
                  <h3 className="text-xl font-black text-foreground mb-4 uppercase italic tracking-tighter leading-tight">{point.title}</h3>
                  <p className="text-muted-foreground">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. CLIENT TESTIMONIAL */}
        <section className="py-24 bg-primary/5 text-center">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <Zap className="h-12 w-12 text-primary mx-auto mb-8 animate-pulse" />
            <blockquote className="text-2xl md:text-4xl font-extrabold italic tracking-tight text-foreground leading-tight">
              "Reliable heat treatment partner for our shaft hardening requirements. Consistent results and timely delivery. Their process control is unmatched in Ludhiana."
            </blockquote>
            <div className="mt-8">
              <p className="font-black text-primary uppercase tracking-widest">Managing Director</p>
              <p className="text-sm text-muted-foreground uppercase">Precision Engineering Hub</p>
            </div>
          </div>
        </section>

        {/* 11. FAQ SECTION */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-12 uppercase italic text-center">
              Job Work <span className="text-primary">FAQs</span>
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "What hardness can be achieved through induction hardening?", a: "Depending on the steel grade (EN8, EN19, EN24, etc.), we can achieve surface hardness ranging from 50 HRC up to 62 HRC while maintaining a ductile core." },
                { q: "Which materials are suitable for heat treatment?", a: "Medium carbon steels (EN8, C45), alloy steels (EN19, EN24, 4140, 4340), and case hardening steels (20MnCr5) are ideal for our induction process." },
                { q: "Is heat treatment required before machining?", a: "Typically, components are semi-finished, then induction hardened, followed by final grinding or finishing to ensure perfect dimensional accuracy." },
                { q: "How long does heat treatment take?", a: "Our induction process is extremely rapid, with cycle times measured in seconds. Overall turnaround for job work batches depends on quantity and complexity, usually ranging from 24-48 hours." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b last:border-0">
                  <AccordionTrigger className="text-lg font-bold text-left hover:text-primary transition-colors py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 12. STRONG CALL TO ACTION */}
        <section className="py-24 bg-card border-t border-primary/20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase italic">
                Need Heat Treatment <span className="text-primary">Job Work?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Send your component details or drawing and get a quick quotation within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button asChild size="lg" className="w-full sm:w-auto px-10 py-8 text-xl bg-primary hover:bg-primary/80 text-primary-foreground font-black group">
                  <Link href="/contact" className="flex items-center gap-2">
                    Request Quote 
                    <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto px-10 py-8 text-xl border-primary text-primary hover:bg-primary/10 font-black animate-pulse">
                  <Link href="/contact">Upload Drawing</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sticky Bottom CTA for Mobile */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-border shadow-2xl">
          <a href={`tel:${SITE_PHONE_NUMBER}`} className="flex-1 bg-accent text-accent-foreground py-4 text-center font-bold flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" /> Call Now
          </a>
          <Link href="/contact" className="flex-1 bg-primary text-primary-foreground py-4 text-center font-bold flex items-center justify-center gap-2">
            <CheckCircle className="h-5 w-5" /> Get Quote
          </Link>
        </div>

      </div>
    </>
  );
}
