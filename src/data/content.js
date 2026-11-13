/**
 * All text content for the Evrasko landing page lives in this file.
 * Edit copy here; components read from these exports and contain no hard-coded text.
 * Icon names refer to lucide-react icons (resolved in src/components/Icon.jsx).
 */

import heroMain from '../assets/images/hero-main.webp';
import heroMainSm from '../assets/images/hero-main-sm.webp';
import heroPort from '../assets/images/hero-port.webp';
import aboutTeam from '../assets/images/about-team.webp';
import aboutBuilding from '../assets/images/about-building.webp';
import platformAnalyst from '../assets/images/platform-specialist.webp';
import usecasesManager from '../assets/images/usecases-manager.webp';
// Testimonial avatars live in public/Evrasko (served as static files).
const testimonial1 = `${import.meta.env.BASE_URL}Evrasko/30.svg`;
const testimonial2 = `${import.meta.env.BASE_URL}Evrasko/31.svg`;
const testimonial3 = `${import.meta.env.BASE_URL}Evrasko/32.svg`;

/* ------------------------------------------------------------------ */
/* Feature flags                                                       */
/* ------------------------------------------------------------------ */

/**
 * Set to true only once real, approved customer quotes are in `testimonials.items`.
 * While false, the Testimonials section and its nav links are hidden.
 */
export const SHOW_TESTIMONIALS = true;

/* ------------------------------------------------------------------ */
/* Site-wide                                                           */
/* ------------------------------------------------------------------ */

export const site = {
  name: 'Evrasko',
  domain: 'evrasko.net',
  url: 'https://evrasko.net',
  phoneLabel: 'Talk to us',
  phone: '+94 37 222 6831',
  phoneHref: 'tel:+94372226831',
  primaryCta: 'Evra X.1',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'platform', label: 'Platform' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'usecases', label: 'Use Cases' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

/* ------------------------------------------------------------------ */
/* 4.1 Hero                                                            */
/* ------------------------------------------------------------------ */

export const hero = {
  tag: 'Supplier Intelligence Platform',
  headline: 'Disconnected Supplier Records Delay Risk Decisions',
  subtext:
    'Evrasko centralizes supplier and risk data to support faster, informed procurement decisions.',
  primaryCta: { label: 'Evra X.1', href: './product.html' },
  secondaryCta: { label: 'Explore the Platform', href: '#platform' },
  mainImage: {
    src: heroMain,
    srcSmall: heroMainSm,
    alt: 'Large distribution warehouse with shelving and crates of stocked goods',
  },
  sideImage: {
    src: heroPort,
    alt: 'Aerial view of a container port with stacked shipping containers',
  },
  riskCard: {
    title: 'Supplier Risk Overview',
    badge: 'Demo data',
    rows: [
      { label: 'Delivery Risk', level: 'Medium' },
      { label: 'Operational Risk', level: 'Low' },
      { label: 'Concentration Risk', level: 'High' },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* 4.2 Industry strip                                                  */
/* ------------------------------------------------------------------ */

export const industryStrip = {
  label: 'Built for procurement and supply chain teams across',
  items: [
    { icon: 'Factory', label: 'Manufacturing' },
    { icon: 'Truck', label: 'Logistics & Distribution' },
    { icon: 'ShoppingBag', label: 'Retail Supply Chains' },
    { icon: 'Building2', label: 'Enterprise Sourcing' },
    { icon: 'ClipboardList', label: 'Procurement Departments' },
  ],
};

/* ------------------------------------------------------------------ */
/* 4.3 About                                                           */
/* ------------------------------------------------------------------ */

export const about = {
  heading: {
    before: 'One Workspace for ',
    highlight: 'Supplier Intelligence',
    after: ' and Risk Forecasting',
  },
  subtext:
    'Supplier information is often spread across departments, spreadsheets, and inboxes. Evrasko centralizes it, standardizes how risk is assessed, and keeps every assessment, forecast, and mitigation action traceable.',
  block: {
    heading: {
      before: 'Turn Scattered Supplier Data Into ',
      highlight: 'Clear Risk Decisions',
      after: '',
    },
    text: 'Evrasko gives procurement managers, risk analysts, and logistics teams a consistent way to register suppliers, assess risk, review performance trends, and coordinate mitigation work, all in one place.',
    cta: { label: 'About Evrasko', href: '#platform' },
  },
  smallImage: {
    src: '/Evrasko/5.svg',
    alt: 'Two colleagues celebrating at a desk with a laptop and printed reports',
  },
  tallImage: {
    src: '/Evrasko/6.svg',
    alt: 'Modern glass office towers viewed from street level',
  },
  badgeText: 'SUPPLIER • RISK • FORECAST • MITIGATE • ',
  challengesTitle: 'The challenges Evrasko is built to solve',
  challenges: [
    { icon: 'FolderTree', text: 'Supplier data spread across departments' },
    { icon: 'EyeOff', text: 'Limited visibility into supplier performance' },
    { icon: 'Scale', text: 'Inconsistent risk assessment methods' },
    { icon: 'AlarmClock', text: 'Late identification of potential disruptions' },
    { icon: 'ListChecks', text: 'Hard-to-track mitigation activities' },
    { icon: 'History', text: 'Limited historical risk reporting' },
  ],
};

/* ------------------------------------------------------------------ */
/* 4.4 Platform                                                        */
/* ------------------------------------------------------------------ */

export const platform = {
  tag: 'Core Capabilities',
  heading: {
    before: 'Everything Your Team Needs to Manage ',
    highlight: 'Supplier Risk',
    after: '',
  },
  text: 'Manage supplier records, procurement relationships, risk assessments, forecasts, mitigation actions, and performance insights in one workspace.',
  cta: { label: 'See How It Works', href: '#how-it-works' },
  image: {
    src: '/Evrasko/7.svg',
    alt: 'Smiling procurement specialist in a modern office',
  },
  modules: [
    {
      icon: 'Building2',
      image: '/Evrasko/8.svg',
      title: 'Supplier Registry & Profiles',
      text: 'Register suppliers with category, location, and contact details, and track qualification status, approval, risk classification, and review dates.',
    },
    {
      icon: 'Link2',
      image: '/Evrasko/9.svg',
      title: 'Procurement & Supply Relationships',
      text: 'Link suppliers to products, categories, and procurement projects, with contract references, delivery terms, and order and delivery history.',
    },
    {
      icon: 'ShieldAlert',
      image: '/Evrasko/10.svg',
      title: 'Supply Chain Risk Assessment',
      text: 'Score delivery, operational, and concentration risks with supporting notes, risk levels, review dates, and full assessment history.',
    },
    {
      icon: 'LineChart',
      image: '/Evrasko/11.svg',
      title: 'Risk Indicators & Forecasts',
      text: 'Record supplier performance indicators and forecast summaries by period, with historical and projected values kept as clearly separate records.',
    },
    {
      icon: 'ListChecks',
      image: '/Evrasko/12.svg',
      title: 'Mitigation Action Management',
      text: 'Create actions for identified risks, assign owners, priorities, and deadlines, and track progress from planned to completed with outcomes recorded.',
    },
    {
      icon: 'Activity',
      image: '/Evrasko/13.svg',
      title: 'Supplier Intelligence Dashboard',
      text: 'See suppliers by qualification and risk status, high-priority assessments, performance summaries, forecasts by category, and open mitigation actions.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 4.5 How it works                                                    */
/* ------------------------------------------------------------------ */

export const howItWorks = {
  tag: 'How It Works',
  heading: {
    before: 'From Supplier Registration to ',
    highlight: 'Recorded Outcomes',
    after: '',
  },
  steps: [
    { title: 'Register', text: 'Add suppliers and their qualification details.' },
    { title: 'Connect', text: 'Link suppliers to products, contracts, and projects.' },
    { title: 'Assess', text: 'Score risks using standard categories and criteria.' },
    { title: 'Forecast', text: 'Record indicators and expected risk levels by period.' },
    { title: 'Mitigate', text: 'Assign actions, track progress, and record outcomes.' },
  ],
};

/* ------------------------------------------------------------------ */
/* 4.6 Architecture                                                    */
/* ------------------------------------------------------------------ */

export const architecture = {
  tag: 'Technical Architecture',
  heading: {
    before: 'A ',
    highlight: 'Reliable Foundation',
    after: ' for Supplier Intelligence',
  },
  text: 'Manage supplier records, risk assessments, and procurement data through a structured application with role-based access and activity tracking.',
  proposedLabel: 'Proposed',
  diagramCaption:
    'Evrasko architecture: presentation, application, access, and data layers, with a proposed AI layer.',
  layers: [
    {
      icon: 'MonitorSmartphone',
      image: '/Evrasko/14.svg',
      name: 'Presentation Layer',
      text: 'Responsive web application for desktop, tablet, and mobile',
    },
    {
      icon: 'Server',
      image: '/Evrasko/15.svg',
      name: 'Application Layer',
      text: 'PHP / Laravel services, backend APIs, validation, and business rules',
    },
    {
      icon: 'Lock',
      image: '/Evrasko/16.svg',
      name: 'Access Layer',
      text: 'Role-based authentication for Administrator, Procurement Manager, Risk Analyst, and Viewer',
    },
    {
      icon: 'Database',
      image: '/Evrasko/17.svg',
      name: 'Data Layer',
      text: 'SQL database for suppliers, procurement relationships, performance metrics, assessments, forecasts, mitigation actions, and review history',
    },
    {
      icon: 'Cpu',
      image: '/Evrasko/18.svg',
      name: 'Proposed AI Layer',
      text: 'Optional NVIDIA-based acceleration and AI services',
      proposed: true,
    },
  ],
  governanceTitle: 'Governance built in',
  governance: [
    {
      icon: 'History',
      image: '/Evrasko/19.svg',
      title: 'Supplier Assessment History',
      text: 'Every assessment is kept, not overwritten.',
    },
    {
      icon: 'Link2',
      image: '/Evrasko/20.svg',
      title: 'Traceable Risk & Mitigation Records',
      text: 'Link each action to the risk it addresses.',
    },
    {
      icon: 'ShieldCheck',
      image: '/Evrasko/21.svg',
      title: 'Role-Based Access Control',
      text: 'Users only see and change what their role allows.',
    },
    {
      icon: 'CalendarRange',
      image: '/Evrasko/22.svg',
      title: 'Forecast Source & Period Records',
      text: 'Every forecast shows its period and source.',
    },
    {
      icon: 'Activity',
      image: '/Evrasko/23.svg',
      title: 'Validation & Activity Tracking',
      text: 'Inputs are validated and changes are logged.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 4.7 Technology                                                      */
/* ------------------------------------------------------------------ */

export const technology = {
  tag: 'Technology Showcase',
  heading: {
    before: 'Proposed ',
    highlight: 'NVIDIA Technology',
    after: ' Foundation',
  },
  text: 'These technologies are proposed architectural options for future AI and data acceleration capabilities.',
  proposedLabel: 'Proposed',
  cards: [
    {
      icon: 'Layers',
      name: 'NVIDIA RAPIDS',
      text: 'Proposed foundation for GPU-accelerated processing of large structured supply chain datasets.',
    },
    {
      icon: 'Brain',
      name: 'NVIDIA NeMo',
      text: 'Proposed foundation for AI-assisted risk summaries and supplier information analysis.',
    },
    {
      icon: 'Cpu',
      name: 'NVIDIA NIM',
      text: 'Proposed deployment option for supported AI inference services.',
    },
    {
      icon: 'Server',
      name: 'NVIDIA Triton',
      text: 'Proposed serving option for compatible forecasting and machine-learning models.',
    },
  ],
  stackTitle: 'Core platform stack',
  stack: [
    { icon: 'Code2', label: 'PHP / Laravel' },
    { icon: 'Database', label: 'SQL Database' },
    { icon: 'Network', label: 'Backend APIs' },
    { icon: 'KeyRound', label: 'Role-Based Authentication' },
    { icon: 'MonitorSmartphone', label: 'Responsive Web Application' },
  ],
  disclaimer:
    'NVIDIA RAPIDS, NeMo, NIM, and Triton are presented as proposed technologies, not implemented integrations. Their inclusion does not imply certification or endorsement by NVIDIA. NVIDIA and related marks are trademarks of NVIDIA Corporation.',
};

/* ------------------------------------------------------------------ */
/* 4.8 Application preview (all names fictional, demo data only)       */
/* ------------------------------------------------------------------ */

export const appPreview = {
  tag: 'Application Preview',
  heading: {
    before: 'Your ',
    highlight: 'Supplier Intelligence',
    after: ' Dashboard',
  },
  text: 'A single view of supplier qualification, risk levels, forecasts, and open mitigation work.',
  frameUrl: 'app.evrasko.net/dashboard',
  frameLabel: 'Preview with demonstration data',
  appTitle: 'Supplier Intelligence Dashboard',
  kpis: [
    { icon: 'Building2', label: 'Active Suppliers', value: 128 },
    { icon: 'ShieldAlert', label: 'High-Risk Suppliers', value: 9, tone: 'high' },
    { icon: 'ListChecks', label: 'Open Mitigation Actions', value: 23, tone: 'medium' },
    { icon: 'CalendarClock', label: 'Assessments Due This Month', value: 14 },
  ],
  riskDonut: {
    title: 'Suppliers by risk level',
    data: [
      { name: 'Low', value: 82, level: 'low' },
      { name: 'Medium', value: 37, level: 'medium' },
      { name: 'High', value: 9, level: 'high' },
    ],
  },
  forecastBar: {
    title: 'Forecast records by risk category',
    historicalLabel: 'Historical',
    projectedLabel: 'Projected',
    data: [
      { category: 'Delivery', historical: 46, projected: 31 },
      { category: 'Operational', historical: 38, projected: 24 },
      { category: 'Concentration', historical: 22, projected: 17 },
    ],
  },
  table: {
    title: 'Upcoming supplier reviews',
    columns: ['Supplier', 'Category', 'Risk level', 'Next review'],
    rows: [
      { name: 'Northbay Components', category: 'Electronic parts', level: 'Medium', review: '12 Nov 2026' },
      { name: 'Kelani Packaging Co.', category: 'Packaging', level: 'Low', review: '18 Nov 2026' },
      { name: 'Arcline Freight', category: 'Freight & carriers', level: 'High', review: '04 Nov 2026' },
      { name: 'Silverleaf Textiles', category: 'Raw materials', level: 'Low', review: '27 Nov 2026' },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* 4.9 Use cases                                                       */
/* ------------------------------------------------------------------ */

export const useCases = {
  tag: 'Use Cases',
  heading: {
    before: 'Built for the Teams Who Keep ',
    highlight: 'Supply Moving',
    after: '',
  },
  image: {
    src: usecasesManager,
    alt: 'Engineer working on a laptop beside production equipment in a manufacturing facility',
  },
  items: [
    {
      icon: 'Factory',
      title: 'Manufacturing',
      text: 'Monitor critical component suppliers and reduce the impact of delivery delays on production.',
      details: {
        intro:
          'Production lines depend on a steady flow of components. Evrasko gives manufacturing teams one place to see which suppliers are critical, how reliably they deliver, and where a delay could stop the line.',
        points: [
          'Flag single-source and critical component suppliers',
          'Track on-time delivery and quality issues by supplier',
          'Score delivery and operational risk with full history',
          'Plan backup suppliers before a disruption happens',
        ],
      },
    },
    {
      icon: 'Truck',
      title: 'Logistics & Distribution',
      text: 'Track carrier and partner reliability and plan around operational risks.',
      details: {
        intro:
          'Logistics depends on carriers, warehouses, and partners performing every day. Evrasko keeps their performance and risk records together so teams can spot weak links early.',
        points: [
          'Record carrier and partner performance indicators by period',
          'Assess operational and concentration risk across routes',
          'Assign mitigation actions with owners and deadlines',
          'Keep a clear history of incidents and outcomes',
        ],
      },
    },
    {
      icon: 'ShoppingBag',
      title: 'Retail Supply Chains',
      text: 'Watch supplier performance before peak seasons and avoid stock gaps.',
      details: {
        intro:
          'Retail supply chains feel every late delivery on the shelf. Evrasko helps category teams review supplier readiness ahead of busy periods and act before stock runs short.',
        points: [
          'Review supplier performance ahead of peak seasons',
          'Forecast expected risk levels by period and category',
          'Link suppliers to products and categories',
          'Track mitigation actions that protect availability',
        ],
      },
    },
    {
      icon: 'Building2',
      title: 'Enterprise Sourcing',
      text: 'Standardize supplier assessments across categories, regions, and business units.',
      details: {
        intro:
          'Large organizations often assess suppliers differently in every region. Evrasko gives enterprise sourcing teams one consistent method and one shared record.',
        points: [
          'Use the same risk categories and criteria everywhere',
          'Compare suppliers across regions and business units',
          'Control access with role-based permissions',
          'Report on supplier risk across the whole organization',
        ],
      },
    },
    {
      icon: 'ClipboardList',
      title: 'Procurement Departments',
      text: 'Support risk-based sourcing decisions with structured supplier history.',
      details: {
        intro:
          'Good sourcing decisions need facts, not scattered spreadsheets. Evrasko puts supplier history, contracts, and risk records in front of procurement teams when they decide.',
        points: [
          'Register suppliers with qualification and approval status',
          'Link contracts, projects, and delivery terms',
          'See assessment history before every sourcing decision',
          'Schedule supplier review dates and follow-ups',
        ],
      },
    },
    {
      icon: 'ShieldCheck',
      title: 'Risk & Compliance Teams',
      text: 'Keep a traceable record of assessments, forecasts, and mitigation outcomes.',
      details: {
        intro:
          'Risk and compliance teams need to show what was assessed, what was decided, and what was done. Evrasko keeps every step recorded and traceable.',
        points: [
          'Keep every assessment instead of overwriting it',
          'Link each mitigation action to the risk it addresses',
          'Separate historical and forecast values clearly',
          'Validate inputs and log changes for audits',
        ],
      },
    },
  ],
  rolesTitle: 'Who uses Evrasko',
  roles: [
    'Procurement Managers',
    'Supplier Relationship Managers',
    'Supply Chain Analysts',
    'Risk Analysts',
    'Logistics Managers',
    'System Administrators',
  ],
};

/* ------------------------------------------------------------------ */
/* 4.10 Engagement options                                             */
/* ------------------------------------------------------------------ */

export const engagement = {
  tag: 'Engagement Options',
  heading: {
    before: 'Flexible Ways to ',
    highlight: 'Work With Evrasko',
    after: '',
  },
  text: 'Start with core platform access and extend it as your supplier risk programme grows.',
  featuredLabel: 'Most popular',
  plans: [
    {
      icon: 'Users',
      title: 'Starter',
      price: '$70',
      period: '/month',
      text: 'Core platform access for your procurement and supply chain team.',
      cta: 'Get Started',
      features: [
        'Supplier registry and profiles',
        'Qualification and approval status tracking',
        'Delivery, operational, and concentration risk scoring',
        'Risk assessments with full history',
        'Mitigation actions with owners and deadlines',
        'Supplier intelligence dashboard',
        'Role-based user access',
        'Email support',
      ],
    },
    {
      icon: 'Building2',
      title: 'Professional',
      price: '$150',
      period: '/month',
      text: 'Advanced supplier intelligence and risk analytics for growing teams.',
      cta: 'Get Started with Professional',
      features: [
        'Everything in Starter',
        'Extended supplier profiles and performance tracking',
        'Procurement relationship mapping',
        'Forecasts by period and category',
        'Historical risk reporting and mitigation summaries',
        'Separate historical and projected value records',
        'Custom risk categories and criteria',
        'Priority email support',
      ],
      featured: true,
    },
    {
      icon: 'Network',
      title: 'Enterprise',
      price: 'Custom',
      period: '',
      text: 'Tailored implementation and integration for larger organizations.',
      cta: 'Contact Sales',
      features: [
        'Everything in Professional',
        'Guided rollout and onboarding',
        'Data migration planning',
        'Integration with existing systems',
        'Validation and activity logs for audits',
        'Multi-region and business-unit setup',
        'Dedicated account manager',
        'Team training sessions',
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 4.11 Marquee                                                        */
/* ------------------------------------------------------------------ */

export const marquee = [
  'Supplier Intelligence',
  'Risk Forecasting',
  'Procurement Visibility',
  'Mitigation Tracking',
  'Supply Chain Resilience',
];

/* ------------------------------------------------------------------ */
/* 4.12 Testimonials                                                   */
/* ------------------------------------------------------------------ */

export const testimonials = {
  tag: 'Customer Perspectives',
  heading: {
    before: 'Perspectives on ',
    highlight: 'Better Supplier Decisions',
    after: '',
  },
  text: 'Insights from procurement and supply chain professionals on managing supplier risks and improving visibility.',
  placeholderNotice: 'Placeholder testimonials for layout preview. Not real customer quotes.',
  // TODO: Replace these PLACEHOLDER entries with real, approved customer quotes before launch.
  // Do not attribute quotes to real companies or people without written approval.
  // Set `placeholder: false` on approved entries; if none are available, set SHOW_TESTIMONIALS = false.
  items: [
    {
      placeholder: true,
      quote:
        'Linking each mitigation action to the risk it addresses has made it much easier to show what we did, who owned it, and what the outcome was.',
      name: 'James Wilson',
      role: 'Supply Chain Risk Analyst',
      avatar: testimonial1,
    },
    {
      placeholder: true,
      quote:
        'Having every supplier assessment and its history in one place means our reviews start from facts instead of from a search through old spreadsheets.',
      name: 'Michael Anderson',
      role: 'Director of Procurement',
      avatar: testimonial2,
    },
    {
      placeholder: true,
      quote:
        'Keeping historical and projected values as separate records gives our category teams a clear, consistent view before each sourcing decision.',
      name: 'Dinesh Kalinga',
      role: 'Logistics Operations Manager',
      avatar: testimonial3,
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 4.13 FAQ                                                            */
/* ------------------------------------------------------------------ */

export const faq = {
  tag: 'FAQ',
  heading: {
    before: 'Frequently Asked ',
    highlight: 'Questions',
    after: '',
  },
  items: [
    {
      q: 'Does Evrasko connect to live supplier data feeds?',
      a: 'Not in the current version. Indicators and forecasts are based on seeded or manually entered records, and integrations can be planned as part of enterprise implementation.',
    },
    {
      q: 'What risk categories are supported?',
      a: 'Delivery, operational, and concentration risks, with the option to define more categories.',
    },
    {
      q: 'Who can use the platform?',
      a: 'Administrators, Procurement Managers, Risk Analysts, and Viewers, each with role-based access.',
    },
    {
      q: 'Are historical and forecast values kept separate?',
      a: 'Yes. Historical records and projected values are stored and displayed as distinct records.',
    },
    {
      q: 'Can we track mitigation progress?',
      a: 'Yes. Actions have owners, priorities, deadlines, statuses, outcomes, and review comments.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 4.14 Contact                                                        */
/* ------------------------------------------------------------------ */

export const contact = {
  heading: 'Ready to Strengthen Your Supplier Network?',
  text: 'Talk to the Evrasko team about centralizing supplier information and managing supply chain risk with confidence.',
  offices: [
    {
      country: 'Sri Lanka',
      address: 'No. 28, Negombo Road, Kurunegala, Sri Lanka',
      phone: '+94 37 222 6831',
      phoneHref: 'tel:+94372226831',
    },
    {
      country: 'USA',
      address: '8th Floor, 633 West Fifth Street, Los Angeles, CA 90071, USA',
      phone: '+1 213-555-0126',
      phoneHref: 'tel:+12135550126',
    },
  ],
  website: { label: 'evrasko.net', href: 'https://evrasko.net' },
  form: {
    title: 'Request a Demo',
    intro: 'Tell us about your team and we will arrange a walkthrough.',
    roles: [
      'Procurement Manager',
      'Supplier Relationship Manager',
      'Supply Chain Analyst',
      'Risk Analyst',
      'Logistics Manager',
      'Other',
    ],
    labels: {
      name: 'Full name',
      email: 'Work email',
      company: 'Company',
      role: 'Job role',
      rolePlaceholder: 'Select your role',
      phone: 'Phone',
      phoneHint: 'optional',
      message: 'Message',
      messagePlaceholder: 'Tell us about your suppliers, categories, and what you would like to see.',
      consent: 'I agree to be contacted about Evrasko.',
      submit: 'Request a Demo',
      submitting: 'Sending…',
      requiredNote: 'Fields marked * are required.',
    },
    errors: {
      nameRequired: 'Please enter your full name.',
      emailRequired: 'Please enter your work email.',
      emailInvalid: 'Please enter a valid email address.',
      companyRequired: 'Please enter your company name.',
      phoneInvalid: 'Please enter a valid phone number (digits, spaces, +, - and brackets).',
      messageRequired: 'Please enter a message.',
      messageMin: 'Your message should be at least 20 characters.',
      consentRequired: 'Please confirm you agree to be contacted.',
      submitFailed: 'Something went wrong. Please try again or call us directly.',
    },
    success: 'Thank you. The Evrasko team will contact you soon.',
    sendAnother: 'Send another request',
  },
};

/* ------------------------------------------------------------------ */
/* Product page (product.html)                                         */
/* ------------------------------------------------------------------ */

export const product = {
  tag: 'The Evrasko Platform',
  headline: { before: 'One Workspace for ', highlight: 'Supplier Risk Decisions' },
  text: 'Evrasko brings supplier records, procurement relationships, risk assessments, forecasts and mitigation actions together, so your team can see risk early and act on it with confidence.',
  highlights: [
    'Every supplier, assessment and review date in one place',
    'Delivery, operational and concentration risk scoring',
    'Mitigation actions with owners, deadlines and outcomes',
    'Role-based access for every member of your team',
  ],
  modulesTitle: 'Inside the platform',
  stats: [
    { value: '6', label: 'Core modules' },
    { value: '3', label: 'Risk categories' },
    { value: '4', label: 'User roles' },
  ],
};

/* ------------------------------------------------------------------ */
/* 4.15 Footer                                                         */
/* ------------------------------------------------------------------ */

export const footer = {
  headline: "LET'S TALK SUPPLY RISK",
  cta: { label: 'Get in Touch', href: '#contact' },
  description: 'Supplier intelligence and supply chain risk forecasting for procurement and logistics teams.',
  founded: 'Founded in 2023.',
  quickLinksTitle: 'Quick Links',
  platformTitle: 'Platform',
  platformLinks: [
    { label: 'Supplier Registry', href: '#platform' },
    { label: 'Procurement Records', href: '#platform' },
    { label: 'Risk Assessment', href: '#platform' },
    { label: 'Forecasts', href: '#platform' },
    { label: 'Mitigation Actions', href: '#platform' },
    { label: 'Dashboard', href: '#preview' },
  ],
  contactTitle: 'Contact',
  // TODO: Replace these placeholder URLs with Evrasko's official social profiles.
  social: [
    { icon: 'Linkedin', label: 'Evrasko on LinkedIn', href: 'https://www.linkedin.com/' },
    { icon: 'Facebook', label: 'Evrasko on Facebook', href: 'https://www.facebook.com/' },
    { icon: 'X', label: 'Evrasko on X', href: 'https://x.com/' },
    { icon: 'Instagram', label: 'Evrasko on Instagram', href: 'https://www.instagram.com/' },
    { icon: 'Youtube', label: 'Evrasko on YouTube', href: 'https://www.youtube.com/' },
  ],
  copyright: '© 2026 Evrasko Technologies (Pvt) Ltd | Evrasko Technologies Inc. All rights reserved.',
  legal: [
    { label: 'Privacy Policy', href: 'privacy-policy.html' },
    { label: 'Terms of Use', href: 'terms-of-use.html' },
  ],
  backToTop: 'Back to top',
};
