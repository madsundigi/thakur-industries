import { ImageResponse } from 'next/og';
import { makeOgJsx } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'EN8 Steel Induction Hardening Ludhiana Punjab — Thakur Industries';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    makeOgJsx({
      title: 'EN8 Steel',
      highlight: 'Induction Hardening — Punjab',
      subtitle: '080M40 · Medium carbon steel · Shafts, axles, gears, agri components · 52–58 HRC',
      stats: [
        { value: '52–58 HRC', label: 'Hardness' },
        { value: '1–5 mm', label: 'Case Depth' },
        { value: 'C40 / EN8', label: 'Grade' },
        { value: '2–4 Days', label: 'Turnaround' },
      ],
    }),
    { ...size }
  );
}
