
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const materials = ['EN8', 'EN19', 'EN24', '4140', '4340', 'Tool Steel', 'Mild Steel', 'Alloy Steels'];

export function MaterialExpertise() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut' } },
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                We Work with All Steel Grades & Alloys
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Our induction hardening process delivers deep surface strength and precision on all steel types. We have the expertise to handle a diverse range of materials for your specific needs.
            </p>
        </div>

        <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {materials.map((material) => (
            <motion.div key={material} variants={itemVariants}>
              <div className="bg-card text-card-foreground border rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                {material}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
            <Button asChild variant="outline">
                <Link href="/services#materials">View Material Capabilities</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
