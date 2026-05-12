export const site = {
  name: 'econstruct',
  url: 'https://www.econstructinc.com',
  phoneDisplay: '888.990.0303',
  phoneHref: '+18889900303',
  email: 'frank@econstructinc.com',
  license: 'CA License #964015',
  address: {
    street: 'Los Angeles',
    locality: 'Los Angeles',
    region: 'CA',
    postalCode: '90001',
    country: 'US'
  },
  social: {
    yelp: 'https://www.yelp.com/biz/econstruct-los-angeles'
  }
};

export const navItems = [
  {
    href: '/industries/',
    label: 'Industries',
    children: [
      { href: '/industries/#restaurant-construction', label: 'Restaurant' },
      { href: '/fast-casual-construction-los-angeles/', label: 'Fast Casual' },
      { href: '/bar-construction-los-angeles-ca/', label: 'Bar Construction' },
      { href: '/retail-construction-los-angeles/', label: 'Retail' },
      { href: '/office-building-ti-contractor-los-angeles/', label: 'Office TI' },
      { href: '/los-angeles-residential-construction-services/', label: 'Residential' },
      { href: '/adu-construction-los-angeles/', label: 'ADU Construction' },
      { href: '/industries/#food-manufacturing', label: 'Food Manufacturing' }
    ]
  },
  {
    href: '/services/',
    label: 'Services',
    children: [
      { href: '/commercial-construction-los-angeles/', label: 'Commercial TI' },
      { href: '/adu-construction-los-angeles/', label: 'ADU Construction' },
      { href: '/los-angeles-residential-construction-services/', label: 'Fire Rebuild' },
      { href: '/bar-construction-los-angeles-ca/', label: 'Bar Construction' },
      { href: '/construction-management-los-angeles/', label: 'Construction Management' },
      { href: '/general-contracting-los-angeles/', label: 'General Contracting' },
      { href: '/entitlement-expediting/', label: 'Entitlement/Expediting' },
      { href: '/equipment-procurement/', label: 'Equipment Procurement' }
    ]
  },
  {
    href: '/about-us/',
    label: 'Our Company',
    children: [
      { href: '/about-us/', label: 'About Us' },
      { href: '/construction-projects/', label: 'Our Work' },
      { href: '/construction-case-studies-los-angeles/', label: 'Case Studies' },
      { href: '/blogs/', label: 'Blogs' },
      { href: '/econstruct-reviews/', label: 'Reviews' }
    ]
  },
  { href: '/video/', label: 'Videos' },
  { href: '/econstruct-reviews/', label: 'Reviews' },
  { href: '/contact/', label: 'Contact Us' }
];

export const serviceAreas = [
  'Los Angeles',
  'Santa Monica',
  'Glendale',
  'Pasadena',
  'Burbank',
  'Hollywood Hills',
  'Culver City',
  'West Hollywood'
];

export const faqs = [
  {
    question: 'What areas does econstruct serve?',
    answer:
      'econstruct serves Los Angeles and nearby communities including Santa Monica, Glendale, Pasadena, Burbank, Hollywood Hills, Culver City, and West Hollywood.'
  },
  {
    question: 'What construction services does econstruct provide?',
    answer:
      'econstruct provides commercial tenant improvements, ADU construction, fire rebuild work, bar construction, restaurant construction, retail improvements, and residential construction.'
  },
  {
    question: 'How do I request a construction consultation?',
    answer:
      'Use the contact form or call 888.990.0303 with the project address, project type, timeline, and any available drawings or scope notes.'
  }
];

export const industryLinks = [
  {
    id: 'restaurant-construction',
    title: 'Restaurant Construction',
    href: '/services/bar-construction/',
    summary: 'Restaurant, kitchen, dining room, and hospitality buildouts for Los Angeles operators.'
  },
  {
    id: 'fast-casual-construction',
    title: 'Fast Casual Construction',
    href: '/services/bar-construction/',
    summary: 'Fast-casual tenant improvements built around equipment, inspections, and launch schedules.'
  },
  {
    id: 'retail-construction',
    title: 'Retail Construction',
    href: '/services/commercial-ti/',
    summary: 'Retail tenant improvements, fixture coordination, storefront updates, and finish work.'
  },
  {
    id: 'office-ti',
    title: 'Office TI Construction',
    href: '/services/commercial-ti/',
    summary: 'Office tenant improvements, workplace refreshes, conference rooms, and occupied-space phasing.'
  },
  {
    id: 'residential-construction',
    title: 'Residential Construction',
    href: '/services/fire-rebuild/',
    summary: 'Luxury home remodels, hillside work, rebuilds, and residential construction management.'
  },
  {
    id: 'food-manufacturing',
    title: 'Food Manufacturing Plants',
    href: '/services/commercial-ti/',
    summary: 'Specialty commercial construction with utility, equipment, workflow, and inspection coordination.'
  }
];
