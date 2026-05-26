export const SITE_NAME = 'Thakur Industries';
export const SITE_TAGLINE = 'Precision Induction Hardening & Heat Treatment in Ludhiana, Punjab.';
export const SITE_DESCRIPTION = 'Leading induction heat treatment and case hardening job work provider in Ludhiana & Punjab. Serving nearby Haryana & Delhi industries.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://thakurindustries.in';
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
      { href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', label: 'Gear Hardening' },
      { href: '/induction-heat-treatment/on-site', label: 'On-site Services' },
      { href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana', label: 'Crankshaft Hardening' },
      { href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana', label: 'Bearing Hardening' },
    ] 
  },
  {
    href: '/locations',
    label: 'Locations We Serve',
    subLinks: [
      { href: '/induction-heat-treatment/malerkotla', label: 'Malerkotla' },
      { href: '/induction-heat-treatment/jagraon', label: 'Jagraon' },
      { href: '/induction-heat-treatment/samrala', label: 'Samrala' },
      { href: '/induction-heat-treatment/khanna', label: 'Khanna' },
      { href: '/induction-heat-treatment/mandi-gobindgarh', label: 'Mandi Gobindgarh' },
      { href: '/induction-heat-treatment/patiala', label: 'Patiala' },
      { href: '/induction-heat-treatment/phagwara', label: 'Phagwara' },
      { href: '/induction-heat-treatment/sangrur', label: 'Sangrur' },
      { href: '/induction-heat-treatment/dhuri', label: 'Dhuri' },
      { href: '/induction-heat-treatment/dehlon', label: 'Dehlon' },
      { href: '/induction-heat-treatment/sirhind', label: 'Sirhind' },
      { href: '/induction-heat-treatment/jalandhar', label: 'Jalandhar' },
      { href: '/induction-heat-treatment/nawanshahr', label: 'Nawanshahr' },
      { href: '/induction-heat-treatment/focal-point-ludhiana', label: 'Focal Point Ludhiana' },
      { href: '/induction-heat-treatment/sherpur-ludhiana', label: 'Sherpur Ludhiana' },
      { href: '/induction-heat-treatment/ambala', label: 'Ambala' },
      { href: '/induction-heat-treatment/yamunanagar', label: 'Yamunanagar' },
      { href: '/induction-heat-treatment/panipat', label: 'Panipat' },
      { href: '/induction-heat-treatment/faridabad', label: 'Faridabad' },
      { href: '/induction-heat-treatment/gurugram', label: 'Gurugram' },
      { href: '/induction-heat-treatment/chandigarh', label: 'Chandigarh' },
      { href: '/induction-heat-treatment/delhi', label: 'Delhi' },
      { href: '/induction-heat-treatment/noida', label: 'Noida' },
    ]
  },
  {
    href: '/industries',
    label: 'Industries',
    subLinks: [
      { href: '/industries', label: 'All Industries' },
      { href: '/industries/automotive', label: 'Automotive' },
      { href: '/industries/agricultural', label: 'Agricultural' },
    ]
  },
  { href: '/our-work', label: 'Our Work' },
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
