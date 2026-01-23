
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
    href: '/services', 
    label: 'Services',
    subLinks: [
      { href: '/induction-hardening', label: 'Induction Hardening' },
      { href: '/case-hardening-heat-treatment', label: 'Case Hardening' },
      { href: '/surface-hardening', label: 'Surface Hardening' },
      { href: '/quenching-process', label: 'Quenching Process' },
      { href: '/material-heat-treatment', label: 'Material Treatment' },
      { href: '/component-hardening', label: 'Component Hardening' },
      { href: '/gear-hardening', label: 'Gear Hardening' },
      { href: '/shaft-hardening', label: 'Shaft Hardening' },
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
    href: '/induction-hardening',
    description: 'A precision surface hardening process using electromagnetic induction to increase wear resistance and fatigue life of steel components. We are a leader in induction hardening in Ludhiana.',
    shortDescription: 'Precision surface hardening to increase wear resistance and fatigue life of steel parts.',
    image: 'serviceInductionHardening'
  },
  {
    id: 'case-hardening-heat-treatment',
    title: 'Case Hardening',
    href: '/case-hardening-heat-treatment',
    description: 'We provide expert case hardening job work in Punjab, hardening the surface of a metal object while the core remains soft, creating a durable "case". Ideal for gears and shafts.',
    shortDescription: 'Hardening the surface of a metal object while the core remains soft, creating a durable "case".',
    image: 'serviceCaseHardening'
  },
  {
    id: 'surface-hardening',
    title: 'Surface Hardening',
    href: '/surface-hardening',
    description: 'Our surface hardening services in Punjab cover a range of processes to improve the mechanical properties of component surfaces for enhanced durability.',
    shortDescription: 'A range of processes to improve the mechanical properties of component surfaces.',
    image: 'serviceHeatTreatment'
  },
];

export const INDUSTRIES = [
  {
    id: 'automotive',
    title: 'Automotive Parts',
    description: 'Providing critical automotive component hardening for engine parts, gears, and transmission components to enhance performance and durability in Ludhiana.',
    image: 'industryAutomotive',
    components: ['Gears', 'Shafts', 'Axles', 'Camshafts', 'Crankshafts', 'Steering racks', 'Transmission shafts', 'CV joints']
  },
  {
    id: 'agriculture',
    title: 'Agricultural Implements',
    description: 'Specializing in agricultural tool heat treatment, hardening parts such as plowshares, harvester blades, and gearbox components to withstand harsh field conditions.',
    image: 'industryAgriculture',
    components: ['Tractor Parts', 'Farm Tools', 'Harvester components', 'Tillage tools', 'Gear wheels', 'Axles', 'Shafts']
  },
  {
    id: 'machine-tool',
    title: 'Machinery & Engineering',
    description: 'Hardening precision components for machine tools, engineering components, and other industrial machinery to ensure accuracy and longevity.',
    image: 'industryMachineTool',
    components: ['Tool spindles', 'Lead screws', 'Guide rails', 'Hardened slides', 'Mandrels', 'Precision Gears']
  },
   {
    id: 'custom-job-work',
    title: 'Custom Job Work for OEMs',
    description: 'We partner with Original Equipment Manufacturers (OEMs) to provide custom heat treatment solutions tailored to their unique specifications and production needs.',
    image: 'serviceCustomSolutions',
    components: ['Custom Gears', 'Specialized Shafts', 'OEM Components', 'Bespoke Parts', 'High-volume production runs']
  },
  {
    id: 'aerospace',
    title: 'Aerospace Industry',
    description: 'Meeting stringent standards with precise aerospace part hardening for landing gear, turbine blades, and other flight-critical components for clients across India.',
    image: 'industryAerospace',
    components: ['Landing gear components', 'Actuator parts', 'Drive shafts', 'Helicopter transmission parts', 'Jet engine components']
  },
  {
    id: 'railway',
    title: 'Railway Industry',
    description: 'Enhancing the strength and wear resistance of railway components like axles, wheels, and tracks with specialized metal heat treatment in Punjab.',
    image: 'industryRailway',
    components: ['Axles', 'Gear wheels', 'Coupling rods', 'Rail pins', 'Brake discs']
  },
];
