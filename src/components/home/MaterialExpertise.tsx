'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const materials = ['EN8 Steel', 'EN19 Steel', 'EN24 Steel', '4140 Alloy', '4340 Steel', 'Tool Steel', 'Carbon Steel', 'Alloy Steels'];

const fadeInBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function MaterialExpertise() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInBottom}
        >
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground uppercase italic">
                Steel <span className="text-primary">Grades</span> We Treat
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Our induction hardening process delivers deep surface strength and precision on all steel types.
            </p>
        </motion.div>

        <motion.div 
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {materials.map((material) => (
            <motion.div 
              key={material} 
              variants={fadeInBottom}
              whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
              className="bg-secondary/50 text-foreground border border-border rounded-xl px-8 py-4 text-sm font-black uppercase italic tracking-tighter shadow-sm cursor-default transition-colors"
            >
              {material}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
            <Button asChild variant="link" className="text-primary font-black uppercase tracking-widest group">
                <Link href="/services#materials" className="flex items-center gap-2">
                    View Material Capabilities
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </Link>
            </Button>
        </motion.div>
      </div>
    </section>
  );
}
