import { ImageResponse } from 'next/og';
import { makeOgJsx } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Gear Hardening Services Ludhiana — Thakur Industries';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    makeOgJsx({
      title: 'Gear Hardening',
      highlight: 'Services — Ludhiana',
      subtitle: 'Tooth-by-tooth induction hardening · Spur, helical & bevel gears · 58–62 HRC',
      stats: [
        { value: '58–62 HRC', label: 'Hardness' },
        { value: '1–2mm', label: 'Case Depth' },
        { value: 'Zero Distortion', label: 'Precision' },
        { value: '2–4 Days', label: 'Turnaround' },
      ],
    }),
    { ...size }
  );
}
