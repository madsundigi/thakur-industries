
'use client';

import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';
import { JsonLd } from '@/components/shared/JsonLd';

const locations = [
  'Ludhiana', 'Mandi Gobindgarh', 'Rajpura', 'Patiala', 'Khanna', 'Jalandhar', 'Ambala', 'Panipat', 'Delhi NCR'
];

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

export function ServiceArea() {
    
  const serviceAreaSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Induction Hardening',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Thakur Induction'
    },
    'areaServed': [
        { '@type': 'AdministrativeArea', 'name': 'Punjab'},
        ...locations.map(loc => ({
            '@type': 'City',
            'name': loc
        }))
    ],
    'description': 'Providing induction hardening and heat treatment job work services to key industrial hubs in Punjab, Haryana, and Delhi NCR.'
  };

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <JsonLd data={serviceAreaSchema} />
      
      {/* Decorative Map Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <Globe className="w-[800px] h-[800px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInBottom}
        >
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground uppercase italic leading-none">
                Serving <span className="text-primary">Punjab</span> & North India
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Strategically located in Ludhiana to serve all major industrial hubs in the region.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-secondary/30 p-10 rounded-2xl border border-primary/10 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter">Strategic Coverage</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              We provide timely and reliable heat treatment job work to key industrial centers. Our proximity to major manufacturing zones allows for fast turnaround times.
            </p>
            {/* Updated Shadow to Red */}
            <div className="flex items-center gap-3 p-6 bg-primary/10 rounded-xl border border-primary/30 shadow-[0_0_20px_rgba(255,50,50,0.1)]">
              <CheckCircle className="h-8 w-8 text-primary shrink-0" />
              <p className="text-primary font-black uppercase tracking-tight text-sm">
                Serving Punjab, Haryana, Himachal & Delhi NCR
              </p>
            </div>
          </motion.div>

          <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
          >
            {locations.map((location) => (
              <motion.div 
                  key={location} 
                  variants={fadeInBottom}
                  whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                  className="bg-secondary/50 p-6 rounded-xl border border-border text-center flex flex-col items-center justify-center transition-all group"
              >
                  <MapPin className="h-5 w-5 text-primary mb-3 transition-transform group-hover:scale-125" />
                  <span className="font-bold text-foreground uppercase tracking-tight text-xs">{location}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Globe(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20" />
      <path d="M2 12h20" />
      <path d="M12 2a14.5 14.5 0 0 1 0 20" />
      <path d="M2 12a14.5 14.5 0 0 0 20 0" />
      <path d="M2 12a14.5 14.5 0 0 1 20 0" />
    </svg>
  )
}
