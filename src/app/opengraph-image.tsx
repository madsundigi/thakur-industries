import { ImageResponse } from 'next/og';
import { makeOgJsx } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Thakur Industries — Precision Induction Hardening & Heat Treatment, Ludhiana, Punjab';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(makeOgJsx(), { ...size });
}
