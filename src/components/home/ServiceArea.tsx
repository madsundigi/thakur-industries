
'use client';

import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';
import { JsonLd } from '@/components/shared/JsonLd';

const locations = [
  'Ludhiana', 'Mandi Gobindgarh', 'Rajpura', 'Patiala', 'Khanna', 'Jalandhar', 'Ambala', 'Panipat', 'Delhi NCR'
];

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { ease: 'easeOut' } },
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <JsonLd data={serviceAreaSchema} />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Serving Punjab, Haryana & Delhi NCR
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Strategically located in Ludhiana, we provide timely and reliable heat treatment job work to key industrial hubs across the region.
            </p>
        </div>

        <motion.div 
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div 
                variants={itemVariants}
                className="bg-primary/10 border-2 border-primary/50 p-6 rounded-lg flex flex-col items-center justify-center sm:col-span-2 lg:col-span-3 shadow-lg"
            >
                <CheckCircle className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-bold text-xl text-primary">Servicing All of Punjab & Nearby Locations</h3>
                <p className="text-primary/80 mt-1">We offer comprehensive coverage across the entire state of Punjab and its surrounding industrial areas.</p>
            </motion.div>
          {locations.map((location) => (
            <motion.div 
                key={location} 
                variants={itemVariants}
                className="bg-card p-4 rounded-lg shadow-sm flex flex-col items-center justify-center"
            >
                <MapPin className="h-6 w-6 text-primary mb-2" />
                <span className="font-semibold text-foreground">{location}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
