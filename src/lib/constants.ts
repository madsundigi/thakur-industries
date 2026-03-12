
export const SITE_NAME = 'Thakur Industries';
export const SITE_TAGLINE = 'Precision Induction Hardening & Heat Treatment in Ludhiana, Punjab.';
export const SITE_DESCRIPTION = 'Leading induction heat treatment and case hardening job work provider in Ludhiana & Punjab. Serving nearby Haryana & Delhi industries.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://thakurinduction.com';
export const SITE_PHONE_NUMBER = '+91 7900000776';
export const SITE_ADDRESS = '1486/5, Street Number 1, Harkrishan Nagar, Shimlapuri, Ludhiana, Punjab 141003';
export const CTA_PRIMARY = 'Get a Quote';
export const CTA_SECONDARY = 'View Our Services';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { 
    href: '/induction-heat-treatment', 
    label: 'Heat Treatment',
    subLinks: [
      { href: '/induction-heat-treatment', label: 'Main Guide (Pillar)' },
      { href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', label: 'Shaft Hardening' },
      { href: '/induction-heat-treatment/gears', label: 'Gear Hardening' },
      { href: '/induction-heat-treatment/on-site', label: 'On-site Services' },
      { href: '/induction-heat-treatment/crankshafts', label: 'Crankshaft Hardening' },
      { href: '/induction-heat-treatment/bearings', label: 'Bearing Hardening' },
    ] 
  },
  { href: '/industries', label: 'Industries' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
];

export const SERVICES = [
  {
    id: 'induction-hardening',
    title: 'Induction Hardening',
    href: '/induction-heat-treatment',
    description: 'A precision surface hardening process using electromagnetic induction to increase wear resistance and fatigue life of steel components.',
    shortDescription: 'Precision surface hardening to increase wear resistance and fatigue life of steel parts.',
    image: 'serviceInductionHardening'
  },
  {
    id: 'case-hardening-heat-treatment',
    title: 'Case Hardening',
    href: '/case-hardening-heat-treatment',
    description: 'Expert case hardening job work in Punjab, hardening the surface of a metal object while the core remains soft.',
    shortDescription: 'Hardening the surface of a metal object while the core remains soft.',
    image: 'serviceCaseHardening'
  },
  {
    id: 'shaft-hardening',
    title: 'Shaft Hardening',
    href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana',
    description: 'Specialized induction hardening for automotive, industrial, and agricultural shafts.',
    shortDescription: 'Focused heat treatment for all types of industrial shafts.',
    image: 'appShaftHardening'
  },
];
