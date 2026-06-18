'use client';

import { useEffect } from 'react';
import { ADS_CONVERSIONS, fireConversion } from '@/lib/conversions';

/**
 * Mounts a single document-level click listener that fires the Google Ads
 * WhatsApp conversion whenever any WhatsApp link (wa.me / api.whatsapp.com)
 * is clicked — anywhere on the site, without editing each button.
 */
export function ConversionTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
        fireConversion(ADS_CONVERSIONS.whatsapp);
      } else if (href.startsWith('tel:')) {
        fireConversion(ADS_CONVERSIONS.call);
      }
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
