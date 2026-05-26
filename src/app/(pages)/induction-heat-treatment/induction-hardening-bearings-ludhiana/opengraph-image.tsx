import { ImageResponse } from 'next/og';
import { makeOgJsx } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Bearing Race Induction Hardening Ludhiana — Thakur Industries';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    makeOgJsx({
      title: 'Bearing Race',
      highlight: 'Hardening — Ludhiana',
      subtitle: 'Inner & outer races · Needle tracks · Wheel hub bearings · 60–64 HRC',
      stats: [
        { value: '60–64 HRC', label: 'Hardness' },
        { value: '0.5–2mm', label: 'Case Depth' },
        { value: 'All Types', label: 'Bearings' },
        { value: '2–4 Days', label: 'Turnaround' },
      ],
    }),
    { ...size }
  );
}
