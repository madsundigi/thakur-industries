import { ImageResponse } from 'next/og';
import { makeOgJsx } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'EN24 Steel Induction Hardening Ludhiana Punjab — Thakur Industries';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    makeOgJsx({
      title: 'EN24 Steel',
      highlight: 'Induction Hardening — Punjab',
      subtitle: '817M40 · SAE 4340 equivalent · High-stress shafts, spindles, aerospace-grade · 55–62 HRC',
      stats: [
        { value: '55–62 HRC', label: 'Hardness' },
        { value: '0.5–3 mm', label: 'Case Depth' },
        { value: 'Ni-Cr-Mo', label: 'Grade' },
        { value: '2–4 Days', label: 'Turnaround' },
      ],
    }),
    { ...size }
  );
}
