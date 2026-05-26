import { ImageResponse } from 'next/og';
import { makeOgJsx } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'EN19 Steel Induction Hardening Ludhiana Punjab — Thakur Industries';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    makeOgJsx({
      title: 'EN19 Steel',
      highlight: 'Induction Hardening — Punjab',
      subtitle: '709M40 · AISI 4140 equivalent · Gearbox shafts, crankshafts, hydraulic rods · 55–62 HRC',
      stats: [
        { value: '55–62 HRC', label: 'Hardness' },
        { value: '0.5–4 mm', label: 'Case Depth' },
        { value: 'Cr-Mo Alloy', label: 'Grade' },
        { value: '2–4 Days', label: 'Turnaround' },
      ],
    }),
    { ...size }
  );
}
