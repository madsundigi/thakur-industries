import { ImageResponse } from 'next/og';
import { makeOgJsx } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Case Hardening Services Ludhiana, Punjab — Thakur Industries';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    makeOgJsx({
      title: 'Case Hardening',
      highlight: 'Job Work — Punjab',
      subtitle: 'Carburizing & nitriding for EN8, 20MnCr5, mild steel · Hard surface, tough core',
      stats: [
        { value: '58–65 HRC', label: 'Surface' },
        { value: '0.2–2mm', label: 'Case Depth' },
        { value: 'Batch Jobs', label: 'Welcome' },
        { value: '2–4 Days', label: 'Turnaround' },
      ],
    }),
    { ...size }
  );
}
