import { ImageResponse } from 'next/og';
import { makeOgJsx } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Crankshaft Induction Hardening Ludhiana — Thakur Industries';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    makeOgJsx({
      title: 'Crankshaft',
      highlight: 'Induction Hardening',
      subtitle: 'Journal & pin hardening · Selective zone treatment · Engine components Punjab',
      stats: [
        { value: '55–58 HRC', label: 'Hardness' },
        { value: '2–4mm', label: 'Case Depth' },
        { value: 'EN19/EN24', label: 'Materials' },
        { value: '2–4 Days', label: 'Turnaround' },
      ],
    }),
    { ...size }
  );
}
