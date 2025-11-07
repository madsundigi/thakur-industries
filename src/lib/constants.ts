export const SITE_NAME = 'Thakur Industries';
export const SITE_TAGLINE = 'Your Durability is Our Responsibility.';
export const SITE_DESCRIPTION = 'Precision induction heat treatment & case hardening in Ludhiana. Get 1 free testing sample. Call +91 7900000776.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://thakurinduction.com';
export const SITE_PHONE_NUMBER = '+91 7900000776';
export const SITE_ADDRESS = '1486/5, Street Number 1, Harkrishan Nagar, Shimlapuri, Ludhiana, Punjab 141003';
export const CTA_PRIMARY = 'Get 1 Free Testing Sample';
export const CTA_SECONDARY = 'Call For Free Trial';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const SERVICES = [
  {
    id: 'induction-hardening',
    title: 'Induction Hardening',
    description: 'Precision surface hardening process to increase the hardness, wear resistance, and fatigue life of steel components.',
    image: 'serviceInductionHardening'
  },
  {
    id: 'case-hardening',
    title: 'Case Hardening',
    description: 'Hardening the surface of a metal object while allowing the metal deeper underneath to remain soft, thus forming a thin layer of harder metal (the "case") at the surface.',
    image: 'serviceCaseHardening'
  },
  {
    id: 'heat-treatment',
    title: 'Heat Treatment',
    description: 'A group of industrial, thermal and metalworking processes used to alter the physical, and sometimes chemical, properties of a material.',
    image: 'serviceHeatTreatment'
  },
  {
    id: 'custom-solutions',
    title: 'Custom Industrial Solutions',
    description: 'Tailored heat treatment solutions to meet unique client specifications and complex industrial requirements.',
    image: 'serviceCustomSolutions'
  },
];

export const INDUSTRIES = [
  {
    id: 'automotive',
    title: 'Automotive',
    description: 'Providing critical heat treatment for engine components, transmission parts, and structural elements to enhance performance and durability.',
    image: 'industryAutomotive'
  },
  {
    id: 'aerospace',
    title: 'Aerospace',
    description: 'Meeting stringent aerospace standards with precise heat treatments for landing gear, turbine blades, and other flight-critical components.',
    image: 'industryAerospace'
  },
  {
    id: 'railway',
    title: 'Railway',
    description: 'Enhancing the strength and wear resistance of railway components like axles, wheels, and tracks for improved safety and longevity.',
    image: 'industryRailway'
  },
  {
    id: 'agriculture',
    title: 'Agriculture',
    description: 'Hardening agricultural machinery parts such as plowshares, harvester blades, and gearbox components to withstand harsh field conditions.',
    image: 'industryAgriculture'
  },
  {
    id: 'construction',
    title: 'Construction',
    description: 'Treating heavy equipment components, including gears, pins, and shafts, to ensure reliability and performance on the construction site.',
    image: 'industryConstruction'
  },
];
