
export const SITE_NAME = 'Thakur Industries';
export const SITE_TAGLINE = 'Your Durability is Our Responsibility.';
export const SITE_DESCRIPTION = 'Top induction heat treatment Ludhiana. We offer induction hardening, case hardening, and steel hardening services in Punjab, India.';
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
    description: 'A precision surface hardening process to increase the hardness, wear resistance, and fatigue life of steel components. We are a leader in induction hardening in Ludhiana.',
    image: 'serviceInductionHardening'
  },
  {
    id: 'case-hardening',
    title: 'Case Hardening',
    description: 'We provide expert case hardening job work in Punjab, hardening the surface of a metal object while the core remains soft, creating a durable "case".',
    image: 'serviceCaseHardening'
  },
  {
    id: 'heat-treatment-job-work',
    title: 'Heat Treatment Job Work',
    description: 'A full range of industrial and metalworking processes to alter the physical properties of materials. Your top choice for heat treatment services in Punjab.',
    image: 'serviceHeatTreatment'
  },
  {
    id: 'custom-heat-treatment',
    title: 'Custom Heat Treatment',
    description: 'We develop tailored and custom heat treatment solutions to meet unique client specifications and complex industrial requirements in Ludhiana.',
    image: 'serviceCustomSolutions'
  },
];

export const INDUSTRIES = [
  {
    id: 'automotive',
    title: 'Automotive Industry',
    description: 'Providing critical automotive component hardening for engine parts, gears, and transmission components to enhance performance and durability in Ludhiana.',
    image: 'industryAutomotive',
    components: ['Camshafts', 'Crankshafts', 'Gear shafts', 'Axles', 'Steering racks', 'Transmission shafts', 'CV joints', 'Rocker arms', 'Valves']
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
  {
    id: 'agriculture',
    title: 'Agricultural Machinery',
    description: 'Specializing in agricultural tool heat treatment, hardening parts such as plowshares, harvester blades, and gearbox components to withstand harsh field conditions.',
    image: 'industryAgriculture',
    components: ['Harvester components', 'Tillage tools', 'Gear wheels', 'Axles', 'Shafts']
  },
  {
    id: 'construction',
    title: 'Construction & Heavy Equipment',
    description: 'Treating heavy equipment components, including gears, pins, and shafts, to ensure reliability and performance on the construction site.',
    image: 'industryConstruction',
    components: ['Hydraulic cylinder rods', 'Drive shafts', 'Gear components', 'Rollers and pins', 'Bushings']
  },
  {
    id: 'machine-tool',
    title: 'Machine Tool Manufacturing',
    description: 'Hardening precision components for machine tools to ensure accuracy and longevity.',
    image: 'industryMachineTool',
    components: ['Tool spindles', 'Lead screws', 'Guide rails', 'Hardened slides', 'Mandrels']
  },
  {
    id: 'energy',
    title: 'Energy / Power Generation',
    description: 'Providing robust heat treatment solutions for the demanding power generation sector.',
    image: 'industryEnergy',
    components: ['Turbine shafts', 'Generator rotor components', 'Gearboxes', 'Pump shafts']
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas Equipment',
    description: 'Ensuring equipment reliability in harsh environments with specialized hardening.',
    image: 'industryOilGas',
    components: ['Drill bits', 'Coupling connectors', 'Pump shafts', 'Valve parts']
  },
  {
    id: 'defense',
    title: 'Defense & Military',
    description: 'Meeting the highest standards for military and defense applications.',
    image: 'industryDefense',
    components: ['Gun barrels', 'Firing pins', 'Armored vehicle shafts', 'Transmission parts']
  },
  {
    id: 'textile',
    title: 'Textile Machinery',
    description: 'Enhancing the durability of components in high-speed textile manufacturing.',
    image: 'industryTextile',
    components: ['Rollers', 'Gears', 'Shafts', 'Spindles']
  },
  {
    id: 'marine',
    title: 'Marine & Shipbuilding',
    description: 'Protecting critical marine components from corrosion and wear.',
    image: 'industryMarine',
    components: ['Propeller shafts', 'Rudder shafts', 'Winch gears']
  },
  {
    id: 'robotics',
    title: 'Robotics & Automation',
    description: 'Precision hardening for the next generation of robotics and automation.',
    image: 'industryRobotics',
    components: ['Precision gears', 'Servo motor shafts', 'Robotic arm joints']
  },
  {
    id: 'mining',
    title: 'Mining Equipment',
    description: 'Strengthening components to withstand the extreme conditions of the mining industry.',
    image: 'industryMining',
    components: ['Drill shafts', 'Conveyor drive shafts', 'Gear assemblies']
  }
];
