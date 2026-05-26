import { ImageResponse } from 'next/og';
import { makeOgJsx } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Shaft Hardening Services Ludhiana — Thakur Industries';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    makeOgJsx({
      title: 'Shaft Hardening',
      highlight: 'Services — Ludhiana',
      subtitle: 'Drive, transmission & agricultural shafts · EN8, EN19, EN24 · 55–60 HRC',
      stats: [
        { value: '55–60 HRC', label: 'Hardness' },
        { value: '1–5mm', label: 'Case Depth' },
        { value: 'EN8–EN24', label: 'Materials' },
        { value: '2–4 Days', label: 'Turnaround' },
      ],
    }),
    { ...size }
  );
}
