import {
    ShieldCheckIcon,
    LightBulbIcon,
    StarIcon,
    TrophyIcon,
    BoltIcon,
    ClockIcon,
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
    CogIcon,
} from "@heroicons/vue/24/solid";

// Core Values
export const coreValues = [
    {
        id: 1,
        title: "Integrity",
        tagline: "Honesty is our foundation",
        icon: ShieldCheckIcon,
        description:
            "We uphold honesty and transparency in every project. Our work stands as a testament to our ethical practices and unwavering commitment to excellence. We believe in doing the right thing even when no one is watching, ensuring lasting trust with our clients and partners.",
        application: "From transparent pricing to honest project updates, we maintain open communication with all stakeholders throughout every project."
    },
    {
        id: 2,
        title: "Innovation",
        tagline: "Building tomorrow, today",
        icon: LightBulbIcon,
        description:
            "By embracing creative solutions and leveraging cutting‑edge technology, we continuously redefine industry standards and pioneer new approaches in construction. We never stop evolving, ensuring that our designs remain at the forefront of modern architecture.",
        application: "We regularly research and adopt advanced construction methods and technologies, resulting in more efficient, sustainable, and future-ready buildings."
    },
    {
        id: 3,
        title: "Excellence",
        tagline: "Perfection in every detail",
        icon: StarIcon,
        description:
            "We strive for perfection in every project, blending advanced technology with artisanal craftsmanship to deliver results that exceed expectations. Our pursuit of excellence is reflected in every brick we lay and every structure we create.",
        application: "Our rigorous quality control processes and attention to detail ensure that every project meets or exceeds both industry standards and client expectations."
    },
];

// Milestones
export const milestones = [
    {
        id: 1,
        year: "2000",
        title: "Founded",
        description:
            "In 2000, our company was established by a group of visionary builders who recognized the need for integrity and craftsmanship in construction. Their passion for quality laid the cornerstone of our success.",
        link: "/about/founded",
    },
    {
        id: 2,
        year: "2005",
        title: "First Major Project",
        description:
            "In 2005, we transformed an outdated office complex into a state-of-the-art, energy-efficient workspace. This breakthrough project marked our entry into large-scale developments and set the stage for innovative design.",
        link: "/portfolio/1",
    },
    {
        id: 3,
        year: "2010",
        title: "Expanded Nationally",
        description:
            "By 2010, our reputation had grown to national prominence. We expanded our operations across the country, launching regional offices and tailoring our services to meet the diverse needs of different markets.",
        link: "/about/expansion",
    },
    {
        id: 4,
        year: "2015",
        title: "Award Winning",
        description:
            "In 2015, our unwavering commitment to excellence was recognized with a prestigious industry award. This honor validated our innovative design and superior construction methods, cementing our leadership in the field.",
        link: "/awards",
    },
    {
        id: 5,
        year: "2020",
        title: "Global Reach",
        description:
            "By 2020, we had extended our expertise beyond national borders. Our international projects showcased our adaptability and set new benchmarks in quality, proving that our vision truly knows no limits.",
        link: "/global",
    },
];

// Leadership Team
export const leadershipTeam = [
    {
        id: 1,
        name: "Robert Cambridge",
        title: "Chief Executive Officer",
        image: "/robert-cambridge.jpg",
        bio: "Robert Cambridge, son of founder James Cambridge, has led the company since 2018. With over 20 years of industry experience and an architectural engineering background, Robert brings both technical expertise and visionary leadership to Cambridge Building Group.",
        education: "MBA, Harvard Business School; B.S. Architectural Engineering, MIT",
        experience: [
            "Director of Operations, Cambridge Building Group (2010-2018)",
            "Project Executive, Cambridge Building Group (2005-2010)",
            "Project Manager, Turner Construction (2000-2005)",
        ],
        featured: true,
    },
    {
        id: 2,
        name: "Sarah Mitchell",
        title: "Chief Operating Officer",
        image: "/sarah-mitchell.jpg",
        bio: "Sarah Mitchell oversees all operational aspects of Cambridge Building Group, ensuring project excellence and organizational efficiency. With a background in civil engineering and construction management, Sarah has implemented innovative processes that have significantly improved project outcomes.",
        education: "MBA, Wharton School; B.S. Civil Engineering, Stanford University",
        experience: [
            "VP of Operations, Cambridge Building Group (2015-2020)",
            "Senior Project Manager, Cambridge Building Group (2012-2015)",
            "Project Engineer, Skanska USA (2008-2012)",
        ],
        featured: true,
    },
    {
        id: 3,
        name: "David Herrera",
        title: "Chief Financial Officer",
        image: "/david-herrera.jpg",
        bio: "David Herrera manages Cambridge Building Group's financial strategy and operations. His forward-thinking approach to financial management has strengthened the company's fiscal health while supporting strategic growth initiatives.",
        education: "MBA, Finance, University of Chicago; B.A. Economics, Northwestern University",
        experience: [
            "Controller, Cambridge Building Group (2014-2018)",
            "Financial Analyst, Morgan Stanley (2010-2014)",
            "Consultant, Deloitte (2007-2010)",
        ],
        featured: true,
    },
    {
        id: 4,
        name: "Jennifer Zhao",
        title: "Director of Sustainable Construction",
        image: "/jennifer-zhao.jpg",
        bio: "Jennifer Zhao leads Cambridge Building Group's sustainable building initiatives. A LEED Fellow and recognized expert in green building practices, Jennifer has spearheaded numerous award-winning sustainable projects.",
        education: "M.S. Environmental Engineering, UC Berkeley; B.S. Architecture, Cornell University",
        experience: [
            "Sustainability Manager, Cambridge Building Group (2015-2019)",
            "Green Building Consultant, Arup (2011-2015)",
            "LEED Project Coordinator, HOK (2008-2011)",
        ],
        featured: false,
    },
    {
        id: 5,
        name: "Michael Rodriguez",
        title: "Director of Technology & Innovation",
        image: "/michael-rodriguez.jpg",
        bio: "Michael Rodriguez directs Cambridge Building Group's technology strategy and implementation. His expertise in construction technology and BIM has positioned the company at the forefront of digital transformation in the industry.",
        education: "M.S. Construction Management, Georgia Tech; B.S. Computer Science, University of Texas",
        experience: [
            "BIM Manager, Cambridge Building Group (2016-2020)",
            "Virtual Design & Construction Specialist, McCarthy Building Companies (2012-2016)",
            "Software Developer, Autodesk (2009-2012)",
        ],
        featured: false,
    },
    {
        id: 6,
        name: "Richard Thompson",
        title: "Director of Preconstruction",
        image: "/richard-thompson.jpg",
        bio: "Richard Thompson leads Cambridge Building Group's preconstruction services. With extensive experience in estimating, scheduling, and value engineering, Richard ensures projects are set up for success from the earliest planning stages.",
        education: "B.S. Construction Management, Purdue University",
        experience: [
            "Senior Estimator, Cambridge Building Group (2012-2017)",
            "Project Controller, Whiting-Turner (2008-2012)",
            "Field Engineer, Gilbane Building Company (2004-2008)",
        ],
        featured: false,
    },
];

// Board of Directors
export const directors = [
    {
        id: 1,
        name: "James Cambridge",
        title: "Founder & Chairman",
        expertise: "Construction Management, Business Development",
        background: "Founded Cambridge Building Group in 1985 after 15 years working in various roles within the construction industry. Under James's leadership, Cambridge grew from a small local contractor to a regional leader in commercial construction.",
        highlights: "Recipient of the Lifetime Achievement Award from the National Association of General Contractors",
    },
    {
        id: 2,
        name: "Robert Cambridge",
        title: "Chief Executive Officer",
        expertise: "Strategic Planning, Architectural Engineering",
        background: "Son of founder James Cambridge, Robert assumed the role of CEO in 2018 after serving in various leadership positions within the company. His dual expertise in business management and architectural engineering has been instrumental in the company's continued growth and innovation.",
        highlights: "Named among 'Top 40 Under 40' in Construction Executive magazine",
    },
    {
        id: 3,
        name: "Eleanor Winters",
        title: "Independent Director",
        expertise: "Finance, Real Estate Development",
        background: "Former CFO of Landmark Properties, a national real estate development firm. Eleanor brings extensive financial expertise and industry knowledge to the board, with particular focus on fiscal responsibility and strategic expansion opportunities.",
        highlights: "Certified Public Accountant with over 25 years of experience in financial leadership",
    },
    {
        id: 4,
        name: "Dr. Thomas Wright",
        title: "Independent Director",
        expertise: "Sustainable Construction, Academic Research",
        background: "Professor of Sustainable Construction Practices at the University of Michigan and author of several influential books on green building technologies. Dr. Wright provides valuable insight on sustainability initiatives and emerging construction technologies.",
        highlights: "Lead researcher on multiple National Science Foundation grants focused on sustainable building materials",
    },
    {
        id: 5,
        name: "Patricia Lopez",
        title: "Independent Director",
        expertise: "Legal, Corporate Governance",
        background: "Partner at Hayes & Lopez Law Firm, specializing in construction law and corporate governance. Patricia's legal expertise helps ensure Cambridge Building Group maintains compliance with industry regulations while minimizing risk exposure.",
        highlights: "Named to 'Best Lawyers in America' for Construction Law for five consecutive years",
    },
    {
        id: 6,
        name: "Marcus Johnson",
        title: "Independent Director",
        expertise: "Technology Integration, Digital Transformation",
        background: "Former CTO of BuildTech Solutions, a construction technology firm. Marcus provides guidance on technology adoption and digital transformation strategies that keep Cambridge at the forefront of industry innovation.",
        highlights: "Pioneer in implementing AI and machine learning applications in construction management",
    },
];

// Case Studies
export const caseStudies = [
    {
        id: 1,
        title: "Riverfront Commercial Plaza",
        category: "Commercial",
        description: "A 250,000 sq ft mixed-use development featuring innovative sustainable design elements and LEED Platinum certification.",
        image: "/riverfront-plaza.jpg",
        highlights: [
            "30% reduction in energy consumption compared to similar buildings",
            "Rainwater harvesting system for irrigation and non-potable uses",
            "Completed 2 months ahead of schedule despite supply chain challenges",
        ],
        featured: true,
    },
    {
        id: 2,
        title: "Madison Opera House Restoration",
        category: "Historic Renovation",
        description: "Meticulous restoration of a 1920s landmark theater, preserving historical elements while implementing modern amenities and safety features.",
        image: "/opera-house.jpg",
        highlights: [
            "Preserved 90% of original ornate plasterwork and decorative elements",
            "Modern acoustics and lighting systems integrated without compromising historic integrity",
            "Seismic retrofitting to ensure long-term structural stability",
        ],
        featured: true,
    },
    {
        id: 3,
        title: "Hawthorne Medical Center",
        category: "Healthcare",
        description: "State-of-the-art medical facility featuring advanced technology infrastructure and patient-centered design principles.",
        image: "/medical-center.jpg",
        highlights: [
            "120,000 sq ft facility completed in just 14 months through innovative prefabrication",
            "Specialized isolation and containment systems for infectious disease management",
            "Healing garden and natural light integration for improved patient outcomes",
        ],
        featured: true,
    },
    {
        id: 4,
        title: "Oakridge Corporate Center",
        category: "Corporate",
        description: "Modern office complex designed for flexibility, collaboration, and employee wellness with sustainable features throughout.",
        image: "/corporate-center.jpg",
        highlights: [
            "Open concept design with modular spaces adaptable to changing business needs",
            "Geothermal heating and cooling system reducing energy costs by 45%",
            "On-site amenities including fitness center, dining options, and outdoor workspaces",
        ],
        featured: false,
    },
];

// Competitive Advantages
export const advantages = [
    {
        id: 1,
        title: "Excellence in Execution",
        description: "Our proven construction methodologies and rigorous quality control processes ensure every project is completed to the highest standards, on time and within budget.",
        icon: TrophyIcon,
    },
    {
        id: 2,
        title: "Innovative Solutions",
        description: "We employ cutting-edge technologies and creative approaches to overcome complex challenges, delivering innovative solutions that set industry benchmarks.",
        icon: BoltIcon,
    },
    {
        id: 3,
        title: "Efficiency & Timeliness",
        description: "Our streamlined processes and dedicated project management ensure optimal resource utilization and adherence to schedules, minimizing disruptions and maximizing value.",
        icon: ClockIcon,
    },
    {
        id: 4,
        title: "Superior Craftsmanship",
        description: "Our skilled craftsmen bring generations of expertise to every project, combining traditional techniques with modern methods to achieve exceptional results.",
        icon: SparklesIcon,
    },
    {
        id: 5,
        title: "Value Engineering",
        description: "We identify opportunities to enhance project value while maintaining quality and performance, optimizing budgets without compromising on excellence.",
        icon: CurrencyDollarIcon,
    },
    {
        id: 6,
        title: "Collaborative Approach",
        description: "Our transparent communication and partnership-focused relationships with clients, designers, and subcontractors create a cohesive team dedicated to project success.",
        icon: UserGroupIcon,
    },
];

// Community Initiatives
export const initiatives = [
    {
        id: 1,
        title: "Homes for Heroes",
        category: "Housing",
        description: "Cambridge Building Group partners with local veterans' organizations to provide home renovations and repairs for military veterans in need. Our team volunteers time, expertise, and materials to ensure veterans have safe, accessible living environments.",
        impact: "Completed renovations for 35 veterans' homes over the past five years.",
        icon: HomeIcon,
    },
    {
        id: 2,
        title: "Building Tomorrow Scholarship",
        category: "Education",
        description: "Our annual scholarship program provides financial support to students pursuing degrees in construction management, engineering, and architectural fields, with a focus on increasing diversity within the industry. Recipients also receive mentoring and internship opportunities.",
        impact: "Awarded $500,000 in scholarships to 50 students since program inception.",
        icon: AcademicCapIcon,
    },
    {
        id: 3,
        title: "Community Infrastructure Grants",
        category: "Public Spaces",
        description: "Cambridge provides pro-bono construction services and matching grants for community infrastructure projects, including playgrounds, community centers, and public spaces in underserved neighborhoods. These projects create gathering spaces that foster community connections.",
        impact: "Contributed to 12 community projects with a combined value of over $2 million.",
        icon: BuildingLibraryIcon,
    },
];

// Community Impact Stats
export const impactStats = [
    { id: 1, value: 0, target: 1250, label: "Volunteer Hours Annually" },
    { id: 2, value: 0, target: 15, label: "Community Partners" },
    { id: 3, value: 0, target: 350000, label: "Annual Charitable Contributions ($)" }
];

// Markets We Serve
export const markets = [
    {
        id: 1,
        title: "Healthcare",
        description: "Specialized facilities designed with precision for optimal patient care and medical efficiency.",
        projects: 45,
        bgClass: "bg-blue-100",
    },
    {
        id: 2,
        title: "Education",
        description: "Modern learning environments that inspire creativity and support educational excellence.",
        projects: 38,
        bgClass: "bg-green-100",
    },
    {
        id: 3,
        title: "Hospitality",
        description: "Luxurious spaces that enhance guest experiences through thoughtful design and craftsmanship.",
        projects: 62,
        bgClass: "bg-yellow-100",
    },
    {
        id: 4,
        title: "Industrial",
        description: "Functional facilities engineered for operational efficiency and productivity.",
        projects: 53,
        bgClass: "bg-orange-100",
    },
    {
        id: 5,
        title: "Corporate",
        description: "Innovative workspaces that foster collaboration and reflect corporate identity.",
        projects: 93,
        bgClass: "bg-purple-100",
    },
    {
        id: 6,
        title: "Retail",
        description: "Engaging environments that enhance customer experiences and drive business success.",
        projects: 64,
        bgClass: "bg-red-100",
    },
    {
        id: 7,
        title: "Residential",
        description: "Custom homes and multi-family complexes built with attention to detail and quality.",
        projects: 92,
        bgClass: "bg-indigo-100",
    },
    {
        id: 8,
        title: "Government",
        description: "Secure and efficient facilities that serve the public and institutional needs.",
        projects: 41,
        bgClass: "bg-teal-100",
    },
];

// Industry Awards
export const awards = [
    {
        id: 1,
        year: "2024",
        title: "Excellence in Sustainable Construction",
        organization: "National Green Building Council",
        project: "Riverfront Commercial Plaza",
        description: "Recognized for innovative sustainable practices and achieving LEED Platinum certification.",
        featured: true,
    },
    {
        id: 2,
        year: "2023",
        title: "Commercial Project of the Year",
        organization: "Construction Excellence Awards",
        project: "Oakridge Corporate Center",
        description: "Honored for outstanding design, quality craftsmanship, and client satisfaction.",
        featured: true,
    },
    {
        id: 3,
        year: "2023",
        title: "Safety Achievement Award",
        organization: "Construction Safety Association",
        project: "Company-wide Recognition",
        description: "Acknowledged for exceptional safety protocols and five consecutive years without a lost-time incident.",
        featured: true,
    },
    {
        id: 4,
        year: "2022",
        title: "Historic Preservation Excellence",
        organization: "Heritage Conservation Trust",
        project: "Madison Opera House Restoration",
        description: "Awarded for meticulous restoration work that maintained historical integrity while implementing modern functionality.",
        featured: false,
    },
    {
        id: 5,
        year: "2022",
        title: "Builder of the Year",
        organization: "Metropolitan Contractors Association",
        project: "Company-wide Recognition",
        description: "Selected from among hundreds of competitors for consistently delivering exceptional construction services across all sectors.",
        featured: true,
    },
    {
        id: 6,
        year: "2021",
        title: "Innovation in Construction Technology",
        organization: "Construction Technology Symposium",
        project: "Hawthorne Medical Center",
        description: "Recognized for pioneering use of advanced modeling and prefabrication technologies to reduce construction time by 30%.",
        featured: false,
    },
    {
        id: 7,
        year: "2021",
        title: "Community Impact Award",
        organization: "Chamber of Commerce",
        project: "Veterans' Housing Initiative",
        description: "Honored for pro-bono work providing housing renovations for veterans in need throughout the community.",
        featured: false,
    },
];

// Services
export const services = [
    {
        id: 1,
        icon: BuildingOfficeIcon,
        title: "Commercial Construction",
        description: "From office buildings to retail spaces, we deliver commercial properties that balance functionality, aesthetics, and long-term value. Our approach encompasses everything from ground-up construction to tenant improvements.",
        details: [
            "Office Buildings & Corporate Campuses",
            "Retail & Restaurant Spaces",
            "Medical Facilities & Healthcare Centers",
            "Hospitality & Entertainment Venues",
            "Financial Institutions & Banks",
        ],
        link: "/services/commercial",
    },
    {
        id: 2,
        icon: HomeModernIcon,
        title: "Luxury Residential",
        description: "We create distinctive homes that reflect the unique vision and lifestyle of each client. Our attention to detail and commitment to quality craftsmanship ensures residential spaces that are both beautiful and enduring.",
        details: [
            "Custom Luxury Homes",
            "Executive Estates & Properties",
            "High-End Multi-Family Developments",
            "Vacation & Second Homes",
            "Residential Community Planning",
        ],
        link: "/services/residential",
    },
    {
        id: 3,
        icon: BuildingLibraryIcon,
        title: "Historic Renovation",
        description: "Our specialized team expertly blends preservation techniques with modern functionality to breathe new life into historic structures while maintaining their architectural integrity and cultural significance.",
        details: [
            "Landmark Building Restoration",
            "Adaptive Reuse Projects",
            "Historical Facade Preservation",
            "Period Detail Reconstruction",
            "Heritage Building Modernization",
        ],
        link: "/services/renovation",
    },
    {
        id: 4,
        icon: WrenchScrewdriverIcon,
        title: "Design-Build Solutions",
        description: "Our integrated design-build approach streamlines the construction process, reducing costs and timelines while maintaining superior quality through collaborative problem-solving and unified vision.",
        details: [
            "Single-Source Project Delivery",
            "Integrated Design & Construction Teams",
            "Early Cost Certainty & Budgeting",
            "Accelerated Project Timelines",
            "Collaborative Problem-Solving",
        ],
        link: "/services/design-build",
    },
    {
        id: 5,
        icon: BuildingStorefrontIcon,
        title: "Tenant Improvements",
        description: "We transform existing commercial spaces to meet the unique needs of businesses, creating environments that enhance productivity, reflect brand identity, and optimize operational efficiency.",
        details: [
            "Office Space Reconfigurations",
            "Retail & Restaurant Buildouts",
            "Commercial Interior Renovations",
            "Workspace Modernization",
            "Brand-Aligned Design Implementation",
        ],
        link: "/services/tenant-improvements",
    },
    {
        id: 6,
        icon: CogIcon,
        title: "Pre-Construction Services",
        description: "Our comprehensive pre-construction services include budgeting, scheduling, value engineering, and constructability reviews to identify potential challenges early and establish a solid foundation for project success.",
        details: [
            "Project Feasibility Analysis",
            "Comprehensive Budget Development",
            "Value Engineering & Cost Optimization",
            "Schedule Development & Planning",
            "Constructability & Risk Assessment",
        ],
        link: "/services/pre-construction",
    },
];

// Clients
export const clients = [
    {
        id: 1,
        name: "Northstar Development Group",
        industry: "Real Estate Development",
        quote: "Cambridge Building Group delivered our mixed-use development on time and on budget. Their attention to detail and commitment to quality exceeded our expectations.",
        contact: "Michael Harrison, Director of Projects",
    },
    {
        id: 2,
        name: "Metropolitan Healthcare Systems",
        industry: "Healthcare",
        quote: "From planning to completion, Cambridge Building Group's healthcare expertise was evident. They understood our specialized needs and delivered a facility that enhances patient care.",
        contact: "Dr. Elizabeth Chen, Facilities Director",
    },
    {
        id: 3,
        name: "Pinnacle Hotels & Resorts",
        industry: "Hospitality",
        quote: "Our luxury hotel renovation required meticulous attention to detail while maintaining operations. Cambridge Building Group managed this complexity flawlessly.",
        contact: "James Morris, Property Development Manager",
    },
    {
        id: 4,
        name: "Westfield Public School District",
        industry: "Education",
        quote: "The new STEM building Cambridge constructed has transformed our educational capabilities. Their understanding of academic environments created a space that inspires learning.",
        contact: "Amanda Peterson, Superintendent",
    },
    {
        id: 5,
        name: "Summit Financial Group",
        industry: "Financial Services",
        quote: "Our corporate headquarters needed to reflect our brand's prestige while meeting strict security requirements. Cambridge delivered a sophisticated space that does both beautifully.",
        contact: "Robert Townsend, COO",
    },
    {
        id: 6,
        name: "Heritage Conservation Trust",
        industry: "Non-profit",
        quote: "The restoration of our historic building required specialized knowledge and craftsmanship. Cambridge Building Group's preservation expertise was invaluable to this project's success.",
        contact: "Victoria Mills, Executive Director",
    },
];

// Testimonials
export const testimonials = [
    {
        id: 1,
        company: "Northstar Development Group",
        text: "Cambridge Building Group has been our trusted partner across multiple developments. Their expertise, reliability, and transparent communication make complex projects manageable. They consistently deliver exceptional value while maintaining the highest quality standards.",
        author: "Michael Harrison",
        title: "Director of Projects",
        rating: 5,
    },
    {
        id: 2,
        company: "Metropolitan Healthcare Systems",
        text: "Working with Cambridge on our medical center expansion was a seamless experience. Their specialized knowledge of healthcare construction regulations and requirements saved us time and resources. The Cambridge team anticipated challenges before they became issues and kept our project on track throughout.",
        author: "Dr. Elizabeth Chen",
        title: "Facilities Director",
        rating: 5,
    },
    {
        id: 3,
        company: "Summit Financial Group",
        text: "What sets Cambridge apart is their ability to truly understand our business needs. They didn't just build our space—they created an environment that enhances our operations and impresses our clients. Their attention to detail and commitment to excellence is evident in every aspect of our headquarters.",
        author: "Robert Townsend",
        title: "Chief Operating Officer",
        rating: 5,
    },
];

// Trade Partners Categories
export const tradeCategories = [
    {
        id: 1,
        name: "Architectural & Engineering",
        partners: [
            "Summit Architectural Group",
            "Precision Engineering Associates",
            "Westfield Structural Engineers",
            "Mason & Associates Architectural Firm",
            "Integrated Building Systems Design",
        ],
    },
    {
        id: 2,
        name: "Mechanical & Electrical",
        partners: [
            "Elite Mechanical Systems",
            "PowerGrid Electrical Contractors",
            "Climate Control Solutions",
            "Advanced Electrical Technologies",
            "Metropolitan HVAC Specialists",
        ],
    },
    {
        id: 3,
        name: "Specialty Contractors",
        partners: [
            "Premier Glass & Glazing",
            "Cornerstone Masonry",
            "Heritage Woodworking & Millwork",
            "AlphaSteel Fabricators",
            "Innovative Roofing Systems",
        ],
    },
    {
        id: 4,
        name: "Interior Finishes",
        partners: [
            "Designer Drywall & Acoustics",
            "Elite Flooring Solutions",
            "Spectrum Paint & Coatings",
            "Custom Cabinetry Craftsmen",
            "Prestige Interior Specialties",
        ],
    },
    {
        id: 5,
        name: "Site Work & Foundation",
        partners: [
            "Groundworks Excavation",
            "Concrete Foundations Plus",
            "Terra Landscaping & Hardscapes",
            "Precision Paving Contractors",
            "Environmental Site Services",
        ],
    },
    {
        id: 6,
        name: "Technology Integration",
        partners: [
            "Smart Building Systems",
            "Security Solutions Integrators",
            "DataComm Network Specialists",
            "Automated Controls Technology",
            "Audio-Visual Design Experts",
        ],
    },
];

// Footer Links
export const footerLinks = {
    about: [
        { name: "Our Story", url: "/about" },
        { name: "Core Values", url: "/#core-values" },
        { name: "Leadership Team", url: "/#leadership-bios" },
        { name: "Board of Directors", url: "/#board-of-directors" },
        { name: "Careers", url: "/careers" },
    ],
    services: [
        { name: "Commercial Construction", url: "/services/commercial" },
        { name: "Luxury Residential", url: "/services/residential" },
        { name: "Historic Renovation", url: "/services/renovation" },
        { name: "Design-Build Solutions", url: "/services/design-build" },
        { name: "Pre-Construction Services", url: "/services/pre-construction" },
    ],
    projects: [
        { name: "Case Studies", url: "/#case-studies" },
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
    { name: "Twitter", url: "https://twitter.com", icon: "i-mdi-twitter" },
    { name: "Facebook", url: "https://facebook.com", icon: "i-mdi-facebook" },
    { name: "Instagram", url: "https://instagram.com", icon: "i-mdi-instagram" },
];

// Company Info
export const companyInfo = {
    name: "Cambridge Building Group LLC",
    tagline: "Building excellence through innovation, integrity, and dedicated craftsmanship since 1985.",
    address: "1234 Construction Way, Nashville, TN 37203",
    phone: "(615) 555-7890",
    email: "info@cambridgebuildinggroup.com",
    hours: "Monday-Friday: 8am-5pm CST"
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
    { id: 1, label: "Incident Free Days", value: "850+", icon: "CalendarIcon" },
    { id: 2, label: "Safety Training Hours", value: "8,500+", icon: "AcademicCapIcon" },
    { id: 3, label: "Safety Certifications", value: "100%", icon: "DocumentCheckIcon" },
    { id: 4, label: "Industry Safety Rating", value: "Top 5%", icon: "ChartBarIcon" },
];

// Safety Practices
export const safetyPractices = [
    {
        id: 1,
        title: "Comprehensive Training",
        description: "Every team member completes extensive safety training before entering any job site, with regular refresher courses to keep safety knowledge current.",
    },
    {
        id: 2,
        title: "Daily Safety Briefings",
        description: "Each workday begins with a detailed safety briefing addressing site-specific risks and hazard mitigation strategies.",
    },
    {
        id: 3,
        title: "Regular Safety Audits",
        description: "Our dedicated safety officers conduct weekly inspections across all projects to identify and address potential safety concerns.",
    },
    {
        id: 4,
        title: "Advanced Equipment",
        description: "We invest in the latest safety equipment and personal protective gear to ensure optimal protection for our workforce.",
    },
    {
        id: 5,
        title: "Incident Response Protocol",
        description: "In the rare event of an incident, our comprehensive response protocols ensure immediate action and thorough investigation to prevent recurrence.",
    },
    {
        id: 6,
        title: "Subcontractor Vetting",
        description: "We partner only with subcontractors who demonstrate the same unwavering commitment to safety excellence.",
    },
];