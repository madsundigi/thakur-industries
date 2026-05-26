/**
 * Shared helper for generating Open Graph images via next/og.
 * Each opengraph-image.tsx file imports makeOgImage() and wraps
 * the result in ImageResponse.
 *
 * Usage:
 *   import { makeOgImage } from '@/lib/og-image';
 *   export default function Image() {
 *     return makeOgImage({ title: 'Shaft Hardening', subtitle: 'Drive & Transmission Shafts' });
 *   }
 */

interface OgImageProps {
  /** Main headline (1–2 words, ALL CAPS rendered automatically) */
  title?: string;
  /** Highlighted secondary line (shown in red) */
  highlight?: string;
  /** Body subtitle under the headline */
  subtitle?: string;
  /** Override the stat badges row */
  stats?: Array<{ value: string; label: string }>;
}

const defaultStats = [
  { value: '55–62 HRC', label: 'Hardness' },
  { value: '25+ Years', label: 'Experience' },
  { value: '500+ OEMs', label: 'Clients' },
  { value: '24 Hr', label: 'Quote' },
];

export function makeOgJsx(props: OgImageProps = {}) {
  const {
    title = 'Induction Hardening\n& Heat Treatment',
    highlight,
    subtitle = 'Ludhiana, Punjab — Serving Punjab, Haryana & Delhi NCR',
    stats = defaultStats,
  } = props;

  const lines = title.split('\n');

  return (
    <div
      style={{
        background: '#09090b',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Top red accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 8,
          background: '#ef4444',
          display: 'flex',
        }}
      />

      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          left: -80,
          top: '40%',
          width: 500,
          height: 500,
          background: 'rgba(239,68,68,0.08)',
          borderRadius: '50%',
          display: 'flex',
        }}
      />

      {/* Main content area */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 80px',
          height: '100%',
        }}
      >
        {/* Brand tag */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 44,
              height: 4,
              background: '#ef4444',
              display: 'flex',
            }}
          />
          <span
            style={{
              color: '#ef4444',
              fontSize: 17,
              fontWeight: 800,
              letterSpacing: 5,
              textTransform: 'uppercase',
            }}
          >
            THAKUR INDUSTRIES · LUDHIANA
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            marginBottom: 20,
          }}
        >
          {lines.map((line, i) => (
            <div
              key={i}
              style={{
                fontSize: lines.length > 1 ? 58 : 66,
                fontWeight: 900,
                color: '#ffffff',
                textTransform: 'uppercase',
                lineHeight: 1.05,
                letterSpacing: -1,
                display: 'flex',
              }}
            >
              {line}
            </div>
          ))}
          {highlight && (
            <div
              style={{
                fontSize: lines.length > 1 ? 58 : 66,
                fontWeight: 900,
                color: '#ef4444',
                textTransform: 'uppercase',
                lineHeight: 1.05,
                letterSpacing: -1,
                display: 'flex',
              }}
            >
              {highlight}
            </div>
          )}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: '#a1a1aa',
            marginBottom: 44,
            display: 'flex',
          }}
        >
          {subtitle}
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 14 }}>
          {stats.map((stat) => (
            <div
              key={stat.value}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10,
                padding: '12px 22px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <span
                style={{ color: '#ef4444', fontSize: 21, fontWeight: 800, display: 'flex' }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  color: '#71717a',
                  fontSize: 12,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  display: 'flex',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right side decorative element */}
      <div
        style={{
          position: 'absolute',
          right: 60,
          top: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              width: 3,
              height: 36 + (i % 3) * 12,
              background: i % 2 === 0 ? '#ef4444' : 'rgba(239,68,68,0.2)',
              borderRadius: 2,
              display: 'flex',
            }}
          />
        ))}
      </div>

      {/* Bottom accent bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 8,
          background: '#991b1b',
          display: 'flex',
        }}
      />
    </div>
  );
}
