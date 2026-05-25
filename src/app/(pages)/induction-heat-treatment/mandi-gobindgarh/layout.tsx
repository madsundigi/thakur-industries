import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Induction Hardening for Steel Industry in Mandi Gobindgarh | Thakur Industries',
  description: 'Induction hardening & heat treatment job work for Mandi Gobindgarh\'s rolling mills, tool rooms & steel manufacturers. Serving Punjab\'s Steel City with certified hardness testing & reports.',
  alternates: { canonical: '/induction-heat-treatment/mandi-gobindgarh' },
  openGraph: {
    title: 'Induction Hardening for Steel Industry in Mandi Gobindgarh | Thakur Industries',
    description: 'Induction hardening for Mandi Gobindgarh rolling mills, tool rooms & steel manufacturers. Punjab\'s Steel City specialists.',
    url: 'https://thakurindustries.in/induction-heat-treatment/mandi-gobindgarh',
  },
};

export default function MandiGobindgarhLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
