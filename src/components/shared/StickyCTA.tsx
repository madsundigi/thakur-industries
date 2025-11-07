'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTA_PRIMARY, SITE_PHONE_NUMBER } from '@/lib/constants';
import Link from 'next/link';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 z-50 flex flex-col gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Button asChild size="lg" className="shadow-lg">
            <Link href="/contact">
              <FileText className="mr-2 h-5 w-5" />
              {CTA_PRIMARY}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-background shadow-lg">
             <a href={`tel:${SITE_PHONE_NUMBER}`}>
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
