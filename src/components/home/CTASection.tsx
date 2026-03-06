'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_PHONE_NUMBER } from '@/lib/constants';

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden border-t border-primary/20">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase italic leading-none">
            Ready to <span className="text-primary">Harden</span> Your Quality?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
            Contact us for a free consultation. Send your component details or drawings and get a quick quotation within 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="w-full sm:w-auto px-10 py-8 text-xl bg-primary hover:bg-primary/80 text-primary-foreground font-black group shadow-[0_0_20px_rgba(125,249,255,0.3)]">
                <Link href="/contact" className="flex items-center gap-2">
                  Send Inquiry
                  <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto px-10 py-8 text-xl border-white text-white hover:bg-white hover:text-black font-black">
                <a href={`tel:${SITE_PHONE_NUMBER}`} className="flex items-center gap-2">
                  <Phone className="h-6 w-6" />
                  Call: {SITE_PHONE_NUMBER}
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="w-full sm:w-auto px-10 py-8 text-xl bg-[#25D366] hover:bg-[#25D366]/90 text-white font-black border-none shadow-[0_0_20px_rgba(37,211,102,0.2)]">
                <a href="https://wa.me/917900000776" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageSquare className="h-6 w-6" />
                  WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
