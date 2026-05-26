import { ImageResponse } from 'next/og';
import { makeOgJsx } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Induction Hardening Rate & Free Quote — Thakur Industries Ludhiana';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    makeOgJsx({
      title: 'Induction Hardening',
      highlight: 'Rate & Free Quote',
      subtitle: 'Competitive job work rates · Quote in 24 hours · Pickup across Punjab',
      stats: [
        { value: 'Free Quote', label: 'In 24 Hours' },
        { value: 'No MOQ', label: 'Min. Order' },
        { value: 'Punjab-Wide', label: 'Pickup' },
        { value: 'OEM Grade', label: 'Quality' },
      ],
    }),
    { ...size }
  );
}
