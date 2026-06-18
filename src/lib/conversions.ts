// Google Ads conversion labels (account AW-11523491329).
// Fill leadForm with the "Lead form submit" label when it's available.
export const ADS_CONVERSIONS = {
  // WhatsApp click conversion (live)
  whatsapp: 'AW-11523491329/XYyeCJneg8EcEIGM6vYq',
  // Lead form submit conversion (live)
  leadForm: 'AW-11523491329/ptlMCK6Sm7YaEIGM6vYq',
  // Call-button click conversion (live)
  call: 'AW-11523491329/2QPiCJrhpMEcEIGM6vYq',
} as const;

/**
 * Fire a Google Ads conversion via the gtag already loaded in the root layout.
 * No-ops safely if gtag isn't ready or the label hasn't been set yet.
 */
export function fireConversion(sendTo: string): void {
  if (!sendTo) return;
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== 'function') return;
  gtag('event', 'conversion', { send_to: sendTo });
}
