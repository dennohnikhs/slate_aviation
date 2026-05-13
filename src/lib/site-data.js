const siteConfig = {
  name: 'Slate Aviation Services Africa',
  tagline: 'Precision flight support across Africa, with specialist coverage in Kenya.',
  email: 'info@slateaviationservicesafrica.com',
  phone: '+254 700 000 000',
  whatsapp: '+254 700 000 000',
  address: 'Nairobi, Kenya',
  social: {
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com',
  },
  url: process.env.SITE_URL || 'http://localhost:3000',
};

const servicePages = [
  { label: 'Meet & Greet', path: '/meet-and-greet' },
  { label: 'Ground Handling', path: '/ground-handling' },
  { label: 'Fuel Coordination', path: '/fuel-coordination' },
  { label: 'Permits', path: '/permits' },
  { label: 'Helicopter Charter Kenya', path: '/helicopter-charter-kenya' },
];

const locationPages = [
  { label: 'Jomo Kenyatta International Airport', path: '/meet-and-greet/kenya/jomo-kenyatta-airport' },
  { label: 'Murtala Muhammed International Airport', path: '/meet-and-greet/nigeria/murtala-muhammed-airport' },
  { label: 'OR Tambo International Airport', path: '/meet-and-greet/south-africa/or-tambo-airport' },
  { label: 'HKJK Ground Handling', path: '/ground-handling/kenya/hkjk' },
  { label: 'HKNW Ground Handling', path: '/ground-handling/kenya/hknw' },
];

const pages = [
  {
    slug: 'home',
    path: '/',
    title: 'Slate Aviation Services Africa | Meet & Greet, Ground Handling & Permits',
    description: 'Slate Aviation Services Africa provides aviation support across Africa, with priority meet & greet, ground handling, fuel coordination, permits, and helicopter charter in Kenya.',
    heading: 'African flight support, built for speed, precision, and client confidence.',
    intro: 'We support operators, private aviation clients, and corporate travel teams with responsive aviation services across key African airports.',
    sectionName: 'Home',
    priority: '1.0',
    schemaType: 'Organization',
    sections: [
      {
        heading: 'Priority aviation support services',
        body: 'Our core offering is organized around high-value services that help flights move smoothly and clients experience a premium arrival or departure process.',
        bullets: ['Meet & greet at strategic African airports', 'Ground handling across key Kenya airports', 'Fuel coordination with reliable local partners', 'Overflight and landing permits', 'Helicopter charter for domestic Kenya movement'],
      },
      {
        heading: 'Why clients choose Slate Aviation',
        body: 'We combine local airport knowledge, fast coordination, and clear communication to reduce delays and improve passenger experience.',
        bullets: ['Regional coverage focused on Africa', 'Kenya expertise at HKJK and HKNW', 'Responsive inquiry handling', 'SEO-friendly local landing pages for each airport'],
      },
    ],
  },
  {
    slug: 'services',
    path: '/services',
    title: 'Aviation Services in Africa | Slate Aviation Services Africa',
    description: 'Explore Slate Aviation Services Africa’s full aviation support offering: meet & greet, ground handling, fuel coordination, permits, and helicopter charter in Kenya.',
    heading: 'Aviation services across Africa designed to win repeat bookings.',
    intro: 'Our services are structured to support inbound and outbound flights with consistent standards, local coordination, and quick turnaround.',
    sectionName: 'Services',
    priority: '0.9',
    schemaType: 'Service',
    sections: [
      {
        heading: 'What we do',
        body: 'We manage the service layer that makes flight operations smoother for passengers, crew, and handlers.',
        bullets: ['Dedicated airport support', 'Local compliance coordination', 'Client-facing passenger care', 'Operations follow-up and dispatch updates'],
      },
      {
        heading: 'Lead generation focus',
        body: 'Each service connects to a dedicated conversion path so search traffic lands on the most relevant page.',
        bullets: ['Unique title tags and descriptions', 'Clean URLs for every service and airport page', 'Strong call-to-action placement', 'Contact and quote forms on every page'],
      },
    ],
  },
  {
    slug: 'meet-and-greet',
    path: '/meet-and-greet',
    title: 'Meet & Greet Services in Africa | Slate Aviation Services Africa',
    description: 'Premium meet and greet services across African airports with dedicated pages for major airports in Kenya, Nigeria, and South Africa.',
    heading: 'Meet & greet services across Africa for smoother arrivals and departures.',
    intro: 'Our meet & greet service is designed to support VIP passengers, corporate travelers, families, and delegation movements at key airports across Africa.',
    sectionName: 'Meet & Greet',
    priority: '0.95',
    schemaType: 'Service',
    sections: [
      {
        heading: 'What is included',
        body: 'We coordinate a polished airport experience from curbside arrival through passenger assistance and onward transfer.',
        bullets: ['Arrival and departure assistance', 'Fast-tracked passenger coordination', 'VIP handling and escort support', 'Transfer coordination with ground transport'],
      },
      {
        heading: 'Airport-specific support',
        body: 'We build location-specific pages so clients searching by airport name find exactly the service they need.',
        bullets: ['Jomo Kenyatta International Airport', 'Murtala Muhammed International Airport', 'OR Tambo International Airport'],
      },
    ],
  },
  {
    slug: 'meet-and-greet-kenya-jomo-kenyatta-airport',
    path: '/meet-and-greet/kenya/jomo-kenyatta-airport',
    title: 'Meet and Greet Jomo Kenyatta International Airport | Slate Aviation Services Africa',
    description: 'Book meet and greet services at Jomo Kenyatta International Airport in Nairobi with rapid coordination, VIP assistance, and seamless passenger support.',
    heading: 'Meet and Greet Jomo Kenyatta International Airport',
    intro: 'At Jomo Kenyatta International Airport, we assist with premium passenger handling for private, corporate, and diplomatic movements entering or leaving Nairobi.',
    sectionName: 'Meet & Greet',
    priority: '0.8',
    schemaType: 'Service',
    sections: [
      {
        heading: 'Why this airport page exists',
        body: 'Travelers often search by airport name, so this page targets the exact query while answering operational questions clearly and concisely.',
        bullets: ['Arrival and departure passenger support', 'VIP escort coordination', 'Transfer handoff in Nairobi', 'Clear communication with flight teams'],
      },
      {
        heading: 'Why Slate for Kenya',
        body: 'Our Nairobi coverage is built for responsiveness, airport familiarity, and smooth passenger flow.',
        bullets: ['Local Kenyan coordination', 'Fast confirmation for bookings', 'Service tailored to private aviation'],
      },
    ],
  },
  {
    slug: 'meet-and-greet-nigeria-murtala-muhammed-airport',
    path: '/meet-and-greet/nigeria/murtala-muhammed-airport',
    title: 'Meet and Greet Murtala Muhammed International Airport | Slate Aviation Services Africa',
    description: 'Meet and greet services at Murtala Muhammed International Airport with coordinated passenger assistance for arrivals, departures, and VIP transfers.',
    heading: 'Meet and Greet Murtala Muhammed International Airport',
    intro: 'We support high-value passenger movements in Lagos with a dependable meet & greet workflow that improves the airport experience from first contact to onward transfer.',
    sectionName: 'Meet & Greet',
    priority: '0.75',
    schemaType: 'Service',
    sections: [
      {
        heading: 'Local service coverage',
        body: 'This page is tailored to Lagos travel demand and reflects the way operators and passengers search for support in Nigeria.',
        bullets: ['Passenger greeting and escort', 'Departure support and timing updates', 'VIP coordination for delegation travel'],
      },
      {
        heading: 'Operational value',
        body: 'Clear coordination reduces wait time, improves confidence, and keeps traveler handoffs organized.',
        bullets: ['Responsive booking workflow', 'Airport-specific support language', 'Ideal for corporate and private flights'],
      },
    ],
  },
  {
    slug: 'meet-and-greet-south-africa-or-tambo-airport',
    path: '/meet-and-greet/south-africa/or-tambo-airport',
    title: 'Meet and Greet OR Tambo International Airport | Slate Aviation Services Africa',
    description: 'Professional meet and greet support at OR Tambo International Airport for smooth arrivals, departures, and high-touch passenger handling.',
    heading: 'Meet and Greet OR Tambo International Airport',
    intro: 'OR Tambo passengers benefit from structured meet & greet support for streamlined arrivals, transfers, and departures in Johannesburg.',
    sectionName: 'Meet & Greet',
    priority: '0.75',
    schemaType: 'Service',
    sections: [
      {
        heading: 'Built for visibility',
        body: 'This page helps searchers find the exact location they need while giving them a concise explanation of the service.',
        bullets: ['Johannesburg airport passenger support', 'VIP and corporate travel assistance', 'Transfer handoff support'],
      },
      {
        heading: 'Why choose Slate',
        body: 'We pair efficient communication with a polished passenger experience and focused service coverage.',
        bullets: ['Fast inquiry responses', 'Professional aviation tone', 'Regional service consistency'],
      },
    ],
  },
  {
    slug: 'ground-handling',
    path: '/ground-handling',
    title: 'Ground Handling Across Africa | Slate Aviation Services Africa',
    description: 'Ground handling services across Africa with special focus on HKJK and HKNW in Kenya for private and corporate aviation.',
    heading: 'Ground handling built for reliable ramp-side execution.',
    intro: 'Our ground handling coordination supports aircraft turnaround, crew support, and passenger movement with a practical focus on Kenya and wider African airport coverage.',
    sectionName: 'Ground Handling',
    priority: '0.92',
    schemaType: 'Service',
    sections: [
      {
        heading: 'Main handling capabilities',
        body: 'We handle the essential airport tasks that keep flights on schedule and crews informed.',
        bullets: ['Ramp and turnaround support', 'Passenger and crew assistance', 'Coordination with airport services', 'Operational updates and handoff management'],
      },
      {
        heading: 'Kenya priority airports',
        body: 'Kenya coverage is central to our offering, especially in Nairobi and Wilson Airport where demand is high.',
        bullets: ['HKJK – Jomo Kenyatta International Airport', 'HKNW – Wilson Airport'],
      },
    ],
  },
  {
    slug: 'ground-handling-kenya-hkjk',
    path: '/ground-handling/kenya/hkjk',
    title: 'HKJK Ground Handling | Jomo Kenyatta International Airport',
    description: 'Ground handling at HKJK with dependable airport coordination, passenger support, and aircraft turnaround assistance in Nairobi.',
    heading: 'HKJK Ground Handling',
    intro: 'At Jomo Kenyatta International Airport, we coordinate handling that supports private aviation schedules, ramp efficiency, and clear communication with your team.',
    sectionName: 'Ground Handling',
    priority: '0.82',
    schemaType: 'Service',
    sections: [
      {
        heading: 'What we provide at HKJK',
        body: 'This page focuses on the Nairobi handling workflow and the operational tasks commonly needed at the airport.',
        bullets: ['Aircraft handling coordination', 'Crew and passenger support', 'Arrival and departure service updates', 'Nairobi ground-side handoff'],
      },
      {
        heading: 'Why operators book us',
        body: 'Our Kenya team is positioned for fast response, local airport familiarity, and efficient follow-up.',
        bullets: ['Dedicated Kenya coverage', 'Clear service communication', 'Ideal for private and corporate operators'],
      },
    ],
  },
  {
    slug: 'ground-handling-kenya-hknw',
    path: '/ground-handling/kenya/hknw',
    title: 'HKNW Ground Handling | Wilson Airport Nairobi',
    description: 'Wilson Airport ground handling with local expertise, aircraft turnaround coordination, and responsive support for Kenya operations.',
    heading: 'HKNW Ground Handling',
    intro: 'Wilson Airport is a major point for domestic and regional aviation in Nairobi, and our handling support is structured around quick, efficient coordination.',
    sectionName: 'Ground Handling',
    priority: '0.82',
    schemaType: 'Service',
    sections: [
      {
        heading: 'Why HKNW matters',
        body: 'Wilson Airport is frequently searched for handling services, so we provide a dedicated page that speaks directly to that demand.',
        bullets: ['Handling for domestic movement', 'Crew support for Nairobi missions', 'Operational coordination for departures and arrivals'],
      },
      {
        heading: 'Our advantage',
        body: 'We position Wilson Airport as a main handler location with clear, practical support details for operators.',
        bullets: ['Fast coordination', 'Local Nairobi airport focus', 'Strong operational follow-up'],
      },
    ],
  },
  {
    slug: 'fuel-coordination',
    path: '/fuel-coordination',
    title: 'Fuel Coordination Across Africa | Slate Aviation Services Africa',
    description: 'Reliable fuel coordination services across Africa with competitive coordination, local oversight, and responsive operational support.',
    heading: 'Fuel coordination that keeps aircraft moving reliably.',
    intro: 'We coordinate aviation fuel services with a focus on dependable supply support, schedule alignment, and clear operational communication across Africa.',
    sectionName: 'Fuel Coordination',
    priority: '0.84',
    schemaType: 'Service',
    sections: [
      {
        heading: 'Why fuel coordination matters',
        body: 'A strong fuel coordination partner reduces delays and helps operators plan with confidence.',
        bullets: ['Schedule-aware coordination', 'Competitive local sourcing', 'Operational updates for dispatch', 'Support across African airports'],
      },
      {
        heading: 'Why Slate Aviation',
        body: 'We combine local relationships with a responsive inquiry process so fuel support stays simple to arrange.',
        bullets: ['Transparent communication', 'Quick quote handling', 'Africa-wide service reach'],
      },
    ],
  },
  {
    slug: 'permits',
    path: '/permits',
    title: 'Overflight and Landing Permits in Africa | Slate Aviation Services Africa',
    description: 'Fast overflight and landing permit coordination across African countries, with regulatory expertise and careful operational handling.',
    heading: 'Overflight & landing permit coordination across Africa.',
    intro: 'We help operators secure permits quickly with a focus on accuracy, speed, and country-specific regulatory requirements.',
    sectionName: 'Permits',
    priority: '0.84',
    schemaType: 'Service',
    sections: [
      {
        heading: 'What the service covers',
        body: 'Our permit coordination service is designed for operators that need a reliable point of contact for African routes.',
        bullets: ['Overflight permits', 'Landing permits', 'Country-by-country coordination', 'Document follow-up and timing updates'],
      },
      {
        heading: 'Why operators choose us',
        body: 'We reduce friction by understanding common turnaround issues and managing communication clearly.',
        bullets: ['Speed-focused handling', 'Experienced aviation support', 'Ideal for private, charter, and corporate flights'],
      },
    ],
  },
  {
    slug: 'helicopter-charter-kenya',
    path: '/helicopter-charter-kenya',
    title: 'Helicopter Charter Kenya | Slate Aviation Services Africa',
    description: 'Helicopter charter in Kenya for executive movement, site visits, and urgent regional travel with responsive trip coordination.',
    heading: 'Helicopter charter Kenya for fast domestic movement.',
    intro: 'Our helicopter charter service supports executive travel, project access, and time-sensitive movement within Kenya.',
    sectionName: 'Helicopter Charter Kenya',
    priority: '0.86',
    schemaType: 'Service',
    sections: [
      {
        heading: 'Typical use cases',
        body: 'This service is ideal where road travel is slow or where a direct helicopter transfer improves the trip schedule.',
        bullets: ['Executive charters', 'Remote site access', 'Event and inspection travel', 'Urgent regional transfers'],
      },
      {
        heading: 'Why book Slate',
        body: 'We deliver practical coordination, clear timelines, and a polished client experience for helicopter movement in Kenya.',
        bullets: ['Kenya-focused support', 'Fast booking response', 'Concise trip planning'],
      },
    ],
  },
  {
    slug: 'contact',
    path: '/contact',
    title: 'Contact Slate Aviation Services Africa',
    description: 'Contact Slate Aviation Services Africa for aviation support, bookings, and service inquiries across Africa.',
    heading: 'Contact Slate Aviation Services Africa',
    intro: 'Send us your request and our team will respond with the best service option, timing, and next steps.',
    sectionName: 'Contact',
    priority: '0.7',
    schemaType: 'LocalBusiness',
    sections: [
      {
        heading: 'How to reach us',
        body: 'Use the form on this page to request handling, charter, permits, or aviation support details.',
        bullets: ['Name and contact details', 'Service interest', 'Flight or trip details', 'Preferred response timing'],
      },
    ],
  },
  {
    slug: 'quote',
    path: '/quote',
    title: 'Request a Quote | Slate Aviation Services Africa',
    description: 'Request a quote for meet and greet, ground handling, fuel coordination, permits, or helicopter charter in Kenya.',
    heading: 'Request a quote for your next aviation service.',
    intro: 'Share the trip details and we will return a clear quote or service recommendation.',
    sectionName: 'Quote Request',
    priority: '0.7',
    schemaType: 'LocalBusiness',
    sections: [
      {
        heading: 'Quote details we need',
        body: 'The more accurate the trip details, the faster we can respond with a practical estimate.',
        bullets: ['Aircraft type', 'Date and location', 'Passenger or crew requirements', 'Service interest and route'],
      },
    ],
  },
  {
    slug: 'locations',
    path: '/locations',
    title: 'Airport Coverage Across Africa | Slate Aviation Services Africa',
    description: 'Browse our airport and country coverage for meet and greet, ground handling, fuel coordination, and permits across Africa.',
    heading: 'Airport and country coverage across Africa.',
    intro: 'Use this index to jump to the most relevant airport or country page for your service needs.',
    sectionName: 'Locations',
    priority: '0.7',
    schemaType: 'CollectionPage',
    sections: [
      {
        heading: 'Covered locations',
        body: 'We have built specific landing pages for high-intent search terms and important African aviation hubs.',
        bullets: [
          'Jomo Kenyatta International Airport',
          'Murtala Muhammed International Airport',
          'OR Tambo International Airport',
          'HKJK and HKNW in Nairobi',
        ],
      },
    ],
  },
];

function buildCanonical(pathname) {
  return `${siteConfig.url.replace(/\/$/, '')}${pathname}`;
}

function getPageBySlug(slug) {
  if (slug.startsWith('/')) return pages.find((page) => page.path === slug);
  return pages.find((page) => page.slug === slug);
}

function buildSchema(page) {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': page.schemaType || 'WebPage',
      name: page.title,
      description: page.description,
      url: buildCanonical(page.path),
    },
  ];

  if (page.schemaType === 'Organization' || page.schemaType === 'LocalBusiness') {
    schema.push({
      '@context': 'https://schema.org',
      '@type': page.schemaType,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nairobi',
        addressCountry: 'KE',
      },
      areaServed: 'Africa',
    });
  }

  return schema;
}

module.exports = {
  siteConfig,
  servicePages,
  locationPages,
  pages,
  allPages: pages,
  buildCanonical,
  getPageBySlug,
  buildSchema,
};
