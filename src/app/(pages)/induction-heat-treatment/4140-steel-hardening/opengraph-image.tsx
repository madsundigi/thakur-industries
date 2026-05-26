import { ImageResponse } from 'next/og';
import { makeOgJsx } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'AISI 4140 Steel Induction Hardening OEM Grade — Thakur Industries Ludhiana';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    makeOgJsx({
      title: 'AISI 4140 Steel',
      highlight: 'Hardening — OEM & Export',
      subtitle: 'EN19 · 42CrMo4 · SCM440 · Shafts, tooling, dies, mold bases · 54–60 HRC',
      stats: [
        { value: '54–60 HRC', label: 'Hardness' },
        { value: '0.5–4 mm', label: 'Case Depth' },
        { value: 'OEM Grade', label: 'Quality' },
        { value: '2–4 Days', label: 'Turnaround' },
      ],
    }),
    { ...size }
  );
}
