'use client';

import Image from 'next/image';
import { Award, Factory, Users, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { SITE_NAME } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { CTASection } from '@/components/home/CTASection';

const timelineEvents = [
  { year: '1998', event: `Founded Thakur Industries with a vision to provide top-tier heat treatment services in Ludhiana.` },
  { year: '2005', event: 'Expanded facility and invested in our first advanced induction hardening machine.' },
  { year: '2012', event: 'Achieved ISO 9001 certification, underscoring our commitment to quality.' },
  { year: '2018', event: 'Introduced specialized high-frequency induction hardening for precision aerospace parts.' },
  { year: '2023', event: 'Upgraded to next-generation automated systems for enhanced efficiency and repeatability.' },
];

const stats = [
  { icon: Award, value: '25+', label: 'Years of Experience' },
  { icon: Users, value: '500+', label: 'Satisfied Clients' },
  { icon: Zap, value: '1M+', label: 'Parts Treated' },
  { icon: Factory, value: 'ISO 9001', label: 'Certified Quality' },
];

const fadeInBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function AboutPage() {
    const aboutImage = PlaceHolderImages.find(img => img.id === 'aboutTimeline');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <PageHeader
          title="Our Story of"
          highlightedWord="Precision"
          description={`For over two decades, ${SITE_NAME} has been at the forefront of industrial innovation in Ludhiana, forging a reputation for uncompromising quality. We are a trusted induction hardening specialist in India.`}
          className="text-center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16">
          <motion.div
            className="relative h-[450px] w-full overflow-hidden rounded-2xl shadow-2xl border border-primary/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {aboutImage && (
                <Image
                    src={aboutImage.imageUrl}
                    alt="Thakur Industries factory floor"
                    data-ai-hint="factory machine"
                    fill
                    className="object-cover"
                    priority
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInBottom}>
              <p className="section-label">// ABOUT US //</p>
              <h3 className="text-3xl font-black uppercase italic tracking-tighter text-foreground">
                Our <span className="text-primary">Mission</span>
              </h3>
            </motion.div>
            <motion.p variants={fadeInBottom} className="text-xl text-muted-foreground leading-relaxed font-medium">
              To be the most reliable and technologically advanced partner for our clients, ensuring the enhanced durability and performance of their critical components through precision heat treatment.
            </motion.p>
            <motion.div variants={fadeInBottom} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Quality Consistency",
                  "Fast Turnaround",
                  "Technical Expertise",
                  "Customer Focus"
                ].map((item) => (
                  <div key={item} className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/30 transition-colors duration-300">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-bold text-foreground text-sm uppercase tracking-tight group-hover:translate-y-[-2px] transition-transform duration-300">{item}</span>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        </div>
        
        <div className="py-24 md:py-32">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInBottom}
          >
            <p className="section-label text-center">// OUR STORY //</p>
            <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
              Our <span className="text-primary">Journey</span>
            </h3>
          </motion.div>
          <div className="relative max-w-2xl mx-auto">
            <motion.div
              className="timeline-line space-y-0"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {timelineEvents.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInBottom}
                  className="animate-in fade-in slide-in-from-left-4 duration-500 flex gap-6 pb-12 last:pb-0"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-black text-sm shrink-0">
                      {index + 1}
                    </div>
                    {index < timelineEvents.length - 1 && (
                      <div className="flex-1 w-0.5 bg-primary/20 mt-2" />
                    )}
                  </div>
                  <div className="group flex-1 bg-secondary/30 p-8 rounded-xl border border-border hover:border-primary/30 transition-colors duration-300 mb-2">
                    <p className="text-2xl font-black text-primary mb-2 italic tracking-tighter">{item.year}</p>
                    <p className="text-foreground font-bold uppercase tracking-tight text-sm mb-2 group-hover:translate-y-[-2px] transition-transform duration-300">Thakur Industries Landmark</p>
                    <p className="text-muted-foreground text-lg">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        <div className="py-24 border-t border-border">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInBottom}
          >
            <p className="section-label text-center">// BY THE NUMBERS //</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
                <motion.div key={index} variants={fadeInBottom} className="flex flex-col items-center gap-4 group">
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <stat.icon className="h-8 w-8 text-primary group-hover:text-inherit" />
                    </div>
                    <div>
                        <p className="text-4xl md:text-5xl font-black tracking-tighter italic leading-none [text-shadow:0_0_20px_hsl(var(--primary)/0.3)] text-primary">{stat.value}</p>
                        <p className="text-xs font-bold text-primary uppercase tracking-widest mt-2">{stat.label}</p>
                    </div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <CTASection />
    </div>
  );
}
