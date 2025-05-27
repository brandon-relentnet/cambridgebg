import {
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  LightBulbIcon,
  CogIcon,
  BoltIcon,
  TrophyIcon,
  SparklesIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  HomeIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  HomeModernIcon,
  WrenchScrewdriverIcon,
  BuildingStorefrontIcon,
} from "@heroicons/vue/24/solid";

// Core Values
export const coreValues = [
  {
    id: 1,
    title: "Communication",
    tagline: "Clear and open dialogue at every level",
    icon: ChatBubbleLeftRightIcon,
    description:
      "We believe in transparent, timely, and effective communication with our clients, partners, and team members. By fostering open dialogue, we ensure all stakeholders remain informed and engaged throughout the construction process.",
    application:
      "From initial consultations to project completion, we maintain clear communication channels to address concerns promptly and keep projects moving forward efficiently.",
  },
  {
    id: 2,
    title: "Urgency",
    tagline: "Responsive action when it matters most",
    icon: ClockIcon,
    description:
      "Urgency is in our DNA. We understand that time is valuable, and we approach every project with a sense of purpose and immediacy. Our proactive mindset allows us to anticipate challenges and respond promptly to keep projects on schedule.",
    application:
      "We prioritize quick response times to client requests and take immediate action to resolve issues that could impact project timelines or outcomes.",
  },
  {
    id: 3,
    title: "Integrity",
    tagline: "Building trust through honest practices",
    icon: ShieldCheckIcon,
    description:
      "We uphold honesty and transparency in every project. Our work stands as a testament to our ethical practices and unwavering commitment to excellence. We believe in doing the right thing even when no one is watching.",
    application:
      "From transparent pricing to honest project updates, we maintain open communication with all stakeholders throughout every project.",
  },
  {
    id: 4,
    title: "Technology",
    tagline: "Leveraging advanced tools for superior results",
    icon: CogIcon,
    description:
      "We embrace cutting-edge technology to enhance efficiency, precision, and communication across all our projects. By utilizing the latest industry tools, we deliver superior results with greater accuracy and reduced waste.",
    application:
      "Our implementation of RedTeam Go, Microsoft Project, and Bluebeam Revu ensures comprehensive project management, precise scheduling, and optimized plan coordination.",
  },
  {
    id: 5,
    title: "Innovation",
    tagline: "Finding creative solutions to complex challenges",
    icon: LightBulbIcon,
    description:
      "By embracing creative solutions and leveraging modern approaches, we continuously strive to improve our processes and outcomes. We never stop evolving, ensuring that our methods remain effective and efficient.",
    application:
      "We regularly research and adopt advanced construction methods and technologies, resulting in more efficient, sustainable, and future-ready buildings.",
  },
  {
    id: 6,
    title: "Safety",
    tagline: "Protecting our most valuable assets - our people",
    icon: ShieldCheckIcon,
    description:
      "Safety is paramount in everything we do. We maintain rigorous safety standards and protocols to ensure the wellbeing of our team members, clients, and the public. Our comprehensive approach to safety reflects our commitment to responsible construction practices.",
    application:
      "Our thorough safety compliance policy, on-site safety manuals, and third-party compliance inspections create a culture of safety that extends to all project participants.",
  },
];

// Milestones
export const milestones = [
  {
    id: 1,
    year: "2015",
    title: "Company Founded",
    description:
      "Cambridge Building Group was established by Terry Gilley in October 2015, following his successful completion of the State of Tennessee's highest Contractor licensure. Terry's vision was to create a company where customers, contractors, and employees could collaboratively develop the best possible solutions.",
    link: "/about/founded",
  },
  {
    id: 2,
    year: "2020",
    title: "Nashville Shores Project",
    description:
      "Cambridge took on a pivotal role in the expansion of Nashville Shores, constructing two major waterslides that set a new benchmark for the company's capabilities. This project became a cornerstone of Cambridge's commercial portfolio.",
    link: "/portfolio/nashville-shores",
  },
  {
    id: 3,
    year: "2020",
    title: "Tornado Recovery Efforts",
    description:
      "In response to the devastating 2020 tornadoes in Middle Tennessee, Cambridge partnered with Recover Nashville and Rebuilding Together to restore and rebuild 26 homes for impacted families, demonstrating the company's commitment to community support.",
    link: "/community/disaster-recovery",
  },
  {
    id: 4,
    year: "2023",
    title: "Unlimited License Upgrade",
    description:
      'Cambridge achieved "Unlimited" status for General Contractor licensing in Tennessee, significantly expanding its project scope and capabilities to take on projects of any size within the state.',
    link: "/about/licensing",
  },
  {
    id: 5,
    year: "2025",
    title: "Leadership Expansion & PEMB Certification",
    description:
      "Jason Hall joined as business partner and Executive Vice President, bringing 30 years of industry experience. The company also became a certified builder for pre-engineered metal buildings (PEMB) through partnerships with Capital Steel and Kirby Building Components.",
    link: "/about/leadership",
  },
];

// Leadership Team
export const leadershipTeam = [
  {
    id: 1,
    name: "Terry Gilley",
    title: "Founder & President",
    image: "/terry-gilley.jpg",
    bio: "Terry Gilley began his construction career at an early age, joining his father on job sites at just 10 years old. Over decades of hands-on experience, he developed a deep understanding of the trades, project management, and team leadership. By 22, Terry had become the youngest superintendent at Rogers Construction, one of the world's largest construction companies at the time, where he gained a reputation for exceptional site leadership and operational efficiency. With nearly 50 years of industry experience, Terry has led projects ranging from small-scale commercial builds to multi-billion dollar government installations.",
    education:
      "Extensive hands-on industry training and professional development",
    experience: [
      "Founder & President, Cambridge Building Group (2015-Present)",
      "Nearly 50 years of construction industry experience",
      "Portfolio spanning multi-family, commercial, high-rise, mid-rise, hospitality, industrial, medical, and government projects",
    ],
    featured: true,
    firstName: "Terry",
    lastName: "Gilley",
    fullName: "Terry Gilley",
    position: "Founder & President",
    department: "Executive Leadership",
    email: "terry@cambridgebuildinggroup.com",
    phone: "(615) 555-1234",
    linkedIn: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
  {
    id: 2,
    name: "Jason Hall",
    title: "Executive Vice President",
    image: "/jason-hall.jpg",
    bio: "With nearly 30 years of experience in the construction industry, Jason Hall has earned a reputation as a highly skilled leader, known for his ability to guide complex projects from concept to completion. He has managed teams on projects ranging from historic renovations to cutting-edge technology facilities, consistently delivering high-quality results across diverse market sectors. Jason's experience spans commercial, medical, hospitality, and data center projects, with successful builds throughout the Southeast and beyond.",
    education: "MBA, Vanderbilt University School of Engineering",
    experience: [
      "Executive Vice President, Cambridge Building Group (2025-Present)",
      "Nearly 30 years of construction industry experience",
      "Experience spanning commercial, medical, hospitality, and data center projects throughout the Southeast and beyond",
    ],
    featured: true,
    firstName: "Jason",
    lastName: "Hall",
    fullName: "Jason Hall",
    position: "Executive Vice President",
    department: "Executive Leadership",
    email: "jason@cambridgebuildinggroup.com",
    phone: "(615) 555-5678",
    linkedIn: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
  {
    id: 3,
    name: "Remove Me",
    title: "Remove Me",
    image: "/remove-me.jpg",
    bio: "Remove me",
    education: "Remove me",
    experience: ["Remove me", "Remove me", "Remove me"],
    featured: false,
    firstName: "Remove",
    lastName: "Me",
    fullName: "Remove Me",
    position: "Remove Me",
    department: "Remove Me",
    email: "remove@example.com",
    phone: "(000) 000-0000",
    linkedIn: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
  {
    id: 4,
    name: "Remove Me",
    title: "Remove Me",
    image: "/remove-me.jpg",
    bio: "Remove me",
    education: "Remove me",
    experience: ["Remove me", "Remove me", "Remove me"],
    featured: false,
    firstName: "Remove",
    lastName: "Me",
    fullName: "Remove Me",
    position: "Remove Me",
    department: "Remove Me",
    email: "remove@example.com",
    phone: "(000) 000-0000",
    linkedIn: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
  {
    id: 5,
    name: "Remove Me",
    title: "Remove Me",
    image: "/remove-me.jpg",
    bio: "Remove me",
    education: "Remove me",
    experience: ["Remove me", "Remove me", "Remove me"],
    featured: false,
    firstName: "Remove",
    lastName: "Me",
    fullName: "Remove Me",
    position: "Remove Me",
    department: "Remove Me",
    email: "remove@example.com",
    phone: "(000) 000-0000",
    linkedIn: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
  {
    id: 6,
    name: "Remove Me",
    title: "Remove Me",
    image: "/remove-me.jpg",
    bio: "Remove me",
    education: "Remove me",
    experience: ["Remove me", "Remove me", "Remove me"],
    featured: false,
    firstName: "Remove",
    lastName: "Me",
    fullName: "Remove Me",
    position: "Remove Me",
    department: "Remove Me",
    email: "remove@example.com",
    phone: "(000) 000-0000",
    linkedIn: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
];

// Board of Directors
// Client specified they don't have a board of directors ("No. Jason and I are those individuals.")
export const directors = [
  {
    id: 1,
    name: "Remove me",
    title: "Remove me",
    expertise: "Remove me",
    background: "Remove me",
    highlights: "Remove me",
  },
  {
    id: 2,
    name: "Remove me",
    title: "Remove me",
    expertise: "Remove me",
    background: "Remove me",
    highlights: "Remove me",
  },
  {
    id: 3,
    name: "Remove me",
    title: "Remove me",
    expertise: "Remove me",
    background: "Remove me",
    highlights: "Remove me",
  },
  {
    id: 4,
    name: "Remove me",
    title: "Remove me",
    expertise: "Remove me",
    background: "Remove me",
    highlights: "Remove me",
  },
  {
    id: 5,
    name: "Remove me",
    title: "Remove me",
    expertise: "Remove me",
    background: "Remove me",
    highlights: "Remove me",
  },
  {
    id: 6,
    name: "Remove me",
    title: "Remove me",
    expertise: "Remove me",
    background: "Remove me",
    highlights: "Remove me",
  },
];

// Case Studies
// Client specified they have no case studies
export const caseStudies = [
  {
    id: 1,
    title: "Remove me",
    category: "Remove me",
    description: "Remove me",
    image: "/remove-me.jpg",
    highlights: ["Remove me", "Remove me", "Remove me"],
    featured: false,
  },
  {
    id: 2,
    title: "Remove me",
    category: "Remove me",
    description: "Remove me",
    image: "/remove-me.jpg",
    highlights: ["Remove me", "Remove me", "Remove me"],
    featured: false,
  },
  {
    id: 3,
    title: "Remove me",
    category: "Remove me",
    description: "Remove me",
    image: "/remove-me.jpg",
    highlights: ["Remove me", "Remove me", "Remove me"],
    featured: false,
  },
  {
    id: 4,
    title: "Remove me",
    category: "Remove me",
    description: "Remove me",
    image: "/remove-me.jpg",
    highlights: ["Remove me", "Remove me", "Remove me"],
    featured: false,
  },
];

// Competitive Advantages
export const advantages = [
  {
    id: 1,
    title: "Leadership Experience",
    description:
      "With Terry Gilley's nearly 50 years and Jason Hall's 30 years in the industry, our leadership team brings unparalleled expertise to every project, ensuring exceptional results and efficient problem-solving.",
    icon: TrophyIcon,
  },
  {
    id: 2,
    title: "Personalized Service",
    description:
      "We deliver personalized attention to each client, ensuring their specific needs and vision are at the forefront of every project we undertake.",
    icon: UserGroupIcon,
  },
  {
    id: 3,
    title: "Operational Efficiency",
    description:
      "Our commitment to reducing waste, controlling costs, and maximizing efficiency ensures optimal resource utilization throughout the project lifecycle.",
    icon: ClockIcon,
  },
  {
    id: 4,
    title: "Quality Craftsmanship",
    description:
      "We deliver consistently high-quality work with meticulous attention to detail, regardless of project size or complexity.",
    icon: SparklesIcon,
  },
  {
    id: 5,
    title: "Local Relationships",
    description:
      "With deep-rooted relationships in the Middle Tennessee construction community, we collaborate closely with local subcontractors, design consultants, and regulatory agencies.",
    icon: UserGroupIcon,
  },
  {
    id: 6,
    title: "Technology Integration",
    description:
      "We leverage cutting-edge technology including RedTeam Go for comprehensive bid management, Microsoft Project for precise scheduling, and Bluebeam Revu for optimized plan coordination.",
    icon: CogIcon,
  },
];

// Community Initiatives
export const initiatives = [
  {
    id: 1,
    title: "Recover Together Nashville",
    category: "Tornado Recovery",
    description:
      "In response to the devastating 2020 tornadoes in Middle Tennessee, Cambridge partnered with Recover Nashville to restore and rebuild homes for impacted families. Our team provided construction expertise, resources, and support to help rebuild homes and communities.",
    impact:
      "Successfully restored and rebuilt 26 homes for families impacted by the 2020 tornadoes.",
    icon: HomeIcon,
  },
  {
    id: 2,
    title: "Rebuilding Together",
    category: "Disaster Recovery",
    description:
      "We work with Rebuilding Together to restore homes and communities affected by natural disasters. This ongoing initiative focuses on providing construction assistance to those most in need following devastating events.",
    impact:
      "Completed eight home restorations after the December 2023 tornado, with additional projects planned for 2025.",
    icon: BuildingLibraryIcon,
  },
  {
    id: 3,
    title: "Remove me",
    category: "Remove me",
    description: "Remove me",
    impact: "Remove me",
    icon: AcademicCapIcon,
  },
];

// Community Impact Stats
export const impactStats = [
  { id: 1, value: 0, target: 80, label: "Years of Combined Experience" },
  { id: 2, value: 0, target: 26, label: "Homes Rebuilt After 2020 Tornadoes" },
  { id: 3, value: 0, target: 8, label: "Homes Restored After 2023 Tornado" },
];

// Markets We Serve
export const markets = [
  {
    id: 1,
    title: "Tennessee",
    description:
      "Comprehensive construction services throughout the state of Tennessee.",
    projects: 15,
    bgClass: "bg-blue-100",
  },
  {
    id: 2,
    title: "Georgia",
    description:
      "Actively pursuing Contractor License for construction services in Georgia.",
    projects: 0,
    bgClass: "bg-green-100",
  },
  {
    id: 3,
    title: "Alabama",
    description:
      "Actively pursuing Contractor License for construction services in Alabama.",
    projects: 0,
    bgClass: "bg-yellow-100",
  },
  {
    id: 4,
    title: "Commercial",
    description:
      "Construction and management services for commercial developments.",
    projects: 12,
    bgClass: "bg-orange-100",
  },
  {
    id: 5,
    title: "Hospitality",
    description: "Specialized construction for hotels and hospitality venues.",
    projects: 1,
    bgClass: "bg-purple-100",
  },
  {
    id: 6,
    title: "Industrial",
    description:
      "Construction services for industrial facilities and operations.",
    projects: 8,
    bgClass: "bg-red-100",
  },
  {
    id: 7,
    title: "Multifamily",
    description:
      "Construction services for apartment complexes and living communities.",
    projects: 5,
    bgClass: "bg-indigo-100",
  },
  {
    id: 8,
    title: "Residential",
    description:
      "Premium construction services for select residential projects.",
    projects: 3,
    bgClass: "bg-teal-100",
  },
];

// Industry Awards
export const awards = [
  {
    id: 1,
    year: "Current",
    title: "Better Business Bureau Member",
    organization: "Better Business Bureau",
    project: "Company-wide Recognition",
    description:
      "Recognized as a member of the Better Business Bureau, demonstrating our commitment to trust and ethical business practices.",
    featured: true,
  },
  {
    id: 2,
    year: "Current",
    title: "ISN Network Member",
    organization: "ISN Network",
    project: "Company-wide Recognition",
    description:
      "Selected for membership in the exclusive ISN Network, a resource for industrial companies to find contractors held to higher standards. Over 750 Industrial Companies select their performers from this select group.",
    featured: true,
  },
];

// Services
export const services = [
  {
    id: 1,
    icon: BuildingOfficeIcon,
    title: "Commercial Construction",
    description:
      "We provide comprehensive construction and management services for commercial developments, delivering functional and aesthetically pleasing spaces that meet business needs and enhance operations.",
    details: [
      "Office Buildings",
      "Retail Spaces",
      "Medical Facilities",
      "Restaurant Developments",
      "Turnkey Construction Services",
    ],
    link: "/services/commercial",
  },
  {
    id: 2,
    icon: HomeModernIcon,
    title: "Hospitality Construction",
    description:
      "Our expertise in hospitality construction ensures comfortable, efficient, and appealing spaces for guests and staff alike, with particular attention to the unique requirements of the hospitality industry.",
    details: [
      "Hotels",
      "Resorts",
      "Restaurants",
      "Entertainment Venues",
      "Hospitality Renovations",
    ],
    link: "/services/hospitality",
  },
  {
    id: 3,
    icon: BuildingStorefrontIcon,
    title: "Industrial Construction",
    description:
      "We deliver industrial facilities designed for optimal functionality, efficiency, and safety, meeting the specific needs of manufacturing, distribution, and processing operations.",
    details: [
      "Manufacturing Facilities",
      "Warehouses & Distribution Centers",
      "Processing Plants",
      "Industrial Retrofits",
      "Specialized Industrial Spaces",
    ],
    link: "/services/industrial",
  },
  {
    id: 4,
    icon: BuildingLibraryIcon,
    title: "Multifamily Construction",
    description:
      "Our multifamily construction services create comfortable, attractive living spaces that balance durability, aesthetics, and community needs, resulting in developments that residents are proud to call home.",
    details: [
      "Apartment Complexes",
      "Condominiums",
      "Senior Living Facilities",
      "Student Housing",
      "Mixed-Use Developments",
    ],
    link: "/services/multifamily",
  },
  {
    id: 5,
    icon: HomeIcon,
    title: "Select Residential",
    description:
      "We offer premium construction services for select residential projects, bringing the same level of quality, attention to detail, and professional management that distinguishes our commercial work.",
    details: [
      "Custom Homes",
      "High-End Residential",
      "Residential Communities",
      "Luxury Renovations",
      "Estate Construction",
    ],
    link: "/services/residential",
  },
  {
    id: 6,
    icon: WrenchScrewdriverIcon,
    title: "Pre-Engineered Metal Buildings",
    description:
      "As a certified builder for pre-engineered metal buildings (PEMB) through partnerships with Capital Steel and Kirby Building Components, we offer flexible, cost-effective construction solutions for a wide range of applications.",
    details: [
      "Commercial PEMB Structures",
      "Industrial Facilities",
      "Warehouses & Storage",
      "Agricultural Buildings",
      "Customized PEMB Solutions",
    ],
    link: "/services/pemb",
  },
];

// Clients
export const clients = [
  {
    id: 1,
    name: "Thompson Machinery",
    industry: "Industrial Equipment",
    quote:
      "Cambridge Building Group delivered our project with professionalism and attention to detail. Their team's communication and urgency ensured our needs were met efficiently.",
    contact: "Management Team, Thompson Machinery",
  },
  {
    id: 2,
    name: "Remove me",
    industry: "Remove me",
    quote: "Remove me",
    contact: "Remove me",
  },
  {
    id: 3,
    name: "Remove me",
    industry: "Remove me",
    quote: "Remove me",
    contact: "Remove me",
  },
  {
    id: 4,
    name: "Remove me",
    industry: "Remove me",
    quote: "Remove me",
    contact: "Remove me",
  },
  {
    id: 5,
    name: "Remove me",
    industry: "Remove me",
    quote: "Remove me",
    contact: "Remove me",
  },
  {
    id: 6,
    name: "Remove me",
    industry: "Remove me",
    quote: "Remove me",
    contact: "Remove me",
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    company: "Thompson Machinery",
    text: "Cambridge Building Group has been an excellent partner for our construction needs. Their commitment to communication, urgency, and quality craftsmanship makes them a standout in the industry.",
    author: "Management Team",
    title: "Thompson Machinery",
    rating: 5,
  },
  {
    id: 2,
    company: "Remove me",
    text: "Remove me",
    author: "Remove me",
    title: "Remove me",
    rating: 5,
  },
  {
    id: 3,
    company: "Remove me",
    text: "Remove me",
    author: "Remove me",
    title: "Remove me",
    rating: 5,
  },
];

// Trade Partners Categories
export const tradeCategories = [
  {
    id: 1,
    name: "Equipment & Machinery",
    partners: ["Thompson Machinery"],
  },
  {
    id: 2,
    name: "Building Materials",
    partners: ["84 Lumber", "Builders First Source", "Huskey Lumber"],
  },
  {
    id: 3,
    name: "Specialty Contractors",
    partners: ["Valley Drywall"],
  },
  {
    id: 4,
    name: "PEMB Partners",
    partners: ["Capital Steel", "Kirby Building Systems"],
  },
  {
    id: 5,
    name: "Excavation & Site Work",
    partners: [
      "Gilley Trucking",
      "Dillard and Maynard Excavation",
      "D&G Excavating",
    ],
  },
  {
    id: 6,
    name: "Hospitality",
    partners: ["Choice Hotel Brands"],
  },
  {
    id: 7,
    name: "Repair & Maintenance",
    partners: ["Gilley's Repair Service"],
  },
];

// Footer Links
export const footerLinks = {
  about: [
    { name: "Our Story", url: "/about" },
    { name: "Core Values", url: "/#core-values" },
    { name: "Leadership Team", url: "/#leadership-bios" },
    { name: "Careers", url: "/careers" },
  ],
  services: [
    { name: "Commercial Construction", url: "/services/commercial" },
    { name: "Hospitality Construction", url: "/services/hospitality" },
    { name: "Industrial Construction", url: "/services/industrial" },
    { name: "Multifamily Construction", url: "/services/multifamily" },
    { name: "Select Residential", url: "/services/residential" },
    {
      name: "Construction Management",
      url: "/services/construction-management",
    },
  ],
  projects: [
    { name: "Portfolio", url: "/portfolio" },
    { name: "Testimonials", url: "/#past-clients" },
    { name: "Markets We Serve", url: "/#markets-we-serve" },
  ],
  connect: [
    { name: "Contact Us", url: "/contact" },
    { name: "Community Outreach", url: "/#community-outreach" },
    { name: "Trade Partners", url: "/#trade-partners" },
    { name: "News & Events", url: "/news" },
  ],
};

// Social Links
export const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com", icon: "i-mdi-linkedin" },
  { name: "Facebook", url: "https://facebook.com", icon: "i-mdi-facebook" },
];

// Company Info
export const companyInfo = {
  name: "Cambridge Building Group LLC",
  tagline:
    "Building excellence through communication, integrity, and dedicated craftsmanship since 2015.",
  address: "Nashville, Tennessee", // Updated to Nashville based on documents
  phone: "(615) 555-1234", // Placeholder - not provided in client information
  email: "info@cambridgebuildinggroup.com", // Placeholder - not provided in client information
  hours: "Monday-Friday: 8am-5pm CST", // Assumed based on industry standard
};

// Navigation Items
export const navItems = {
  home: {
    title: "Home",
    link: "/",
  },
  about: {
    title: "About",
    link: "/about",
  },
  services: {
    title: "Services",
    link: "/services",
  },
  portfolio: {
    title: "Portfolio",
    link: "/portfolio",
  },
  contact: {
    title: "Contact",
    link: "/contact",
  },
};

// Safety Metrics
export const safetyMetrics = [
  {
    id: 1,
    label: "Safety Compliance Policies",
    value: "100%",
    icon: "DocumentCheckIcon",
  },
  {
    id: 2,
    label: "Monthly Safety Inspections",
    value: "Yes",
    icon: "ClipboardCheckIcon",
  },
  {
    id: 3,
    label: "On-site Safety Manuals",
    value: "All Sites",
    icon: "BookOpenIcon",
  },
  {
    id: 4,
    label: "Third-Party Compliance",
    value: "Active",
    icon: "ShieldCheckIcon",
  },
];

// Safety Practices
export const safetyPractices = [
  {
    id: 1,
    title: "Comprehensive Safety Policy",
    description:
      "Cambridge has in place a thorough safety compliance policy for all company activities, ensuring consistent safety standards across all projects.",
  },
  {
    id: 2,
    title: "On-site Safety Resources",
    description:
      "We maintain safety policy manuals and compliance binders at every project site for immediate access to critical safety information.",
  },
  {
    id: 3,
    title: "Digital Safety Documentation",
    description:
      "Our digital company files can be accessed by computer or phone as needed to comply with any issue that could arise.",
  },
  {
    id: 4,
    title: "Third-Party Compliance Inspections",
    description:
      "We have procured the services of a 3rd party compliance company that conducts monthly jobsite compliance inspections.",
  },
  {
    id: 5,
    title: "Subcontractor Oversight",
    description:
      "Our compliance inspections ensure that all jobsite personnel, including subcontractors, are being safely managed according to our high standards.",
  },
];
