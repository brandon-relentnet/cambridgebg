// Project categories
export const categories = [
    { id: "all", name: "All Projects" },
    { id: "commercial", name: "Commercial" },
    { id: "residential", name: "Residential" },
    { id: "renovation", name: "Historic Renovation" },
    { id: "healthcare", name: "Healthcare" },
    { id: "corporate", name: "Corporate" },
    { id: "hospitality", name: "Hospitality" },
];

// Portfolio projects list (summary data for listing page)
export const projects = [
    {
        id: 1,
        title: "Riverfront Commercial Plaza",
        description:
            "A 250,000 sq ft mixed-use development featuring innovative sustainable design elements and LEED Platinum certification.",
        category: "commercial",
        image: "/riverfront-plaza.jpg",
        location: "Nashville, TN",
        year: "2023",
        featured: true,
    },
    {
        id: 2,
        title: "Madison Opera House Restoration",
        description:
            "Meticulous restoration of a 1920s landmark theater, preserving historical elements while implementing modern amenities and safety features.",
        category: "renovation",
        image: "/opera-house.jpg",
        location: "Madison, WI",
        year: "2022",
        featured: true,
    },
    {
        id: 3,
        title: "Hawthorne Medical Center",
        description:
            "State-of-the-art medical facility featuring advanced technology infrastructure and patient-centered design principles.",
        category: "healthcare",
        image: "/medical-center.jpg",
        location: "Chicago, IL",
        year: "2021",
        featured: true,
    },
    {
        id: 4,
        title: "Oakridge Corporate Center",
        description:
            "Modern office complex designed for flexibility, collaboration, and employee wellness with sustainable features throughout.",
        category: "corporate",
        image: "/corporate-center.jpg",
        location: "Dallas, TX",
        year: "2022",
        featured: false,
    },
    {
        id: 5,
        title: "The Wellington Residence",
        description:
            "Luxury custom home featuring contemporary design, smart home technology, and indoor-outdoor living spaces.",
        category: "residential",
        image: "/wellington-residence.jpg",
        location: "Aspen, CO",
        year: "2023",
        featured: false,
    },
    {
        id: 6,
        title: "Harborview Hotel & Spa",
        description:
            "Upscale waterfront hospitality property with 180 rooms, conference facilities, and a signature restaurant.",
        category: "hospitality",
        image: "/harborview-hotel.jpg",
        location: "Seattle, WA",
        year: "2021",
        featured: false,
    },
    {
        id: 7,
        title: "Parkside Residences",
        description:
            "Multi-family luxury condominium development with 48 units, featuring premium amenities and park views.",
        category: "residential",
        image: "/parkside-residences.jpg",
        location: "Boston, MA",
        year: "2022",
        featured: false,
    },
    {
        id: 8,
        title: "Heritage Bank Headquarters",
        description:
            "Corporate headquarters with traditional architecture and cutting-edge technology infrastructure.",
        category: "corporate",
        image: "/heritage-bank.jpg",
        location: "Charlotte, NC",
        year: "2020",
        featured: false,
    },
    {
        id: 9,
        title: "Westside Medical Plaza",
        description:
            "Outpatient medical complex with specialty clinics, diagnostic imaging center, and pharmacy services.",
        category: "healthcare",
        image: "/westside-medical.jpg",
        location: "Phoenix, AZ",
        year: "2023",
        featured: false,
    },
    {
        id: 10,
        title: "Victorian Theater Renovation",
        description:
            "Historic restoration of an 1890s theater, preserving ornate architectural details while updating systems.",
        category: "renovation",
        image: "/victorian-theater.jpg",
        location: "San Francisco, CA",
        year: "2021",
        featured: false,
    },
    {
        id: 11,
        title: "Lakeview Shopping Center",
        description:
            "Modern retail development with 28 store locations, restaurant spaces, and community gathering areas.",
        category: "commercial",
        image: "/lakeview-shopping.jpg",
        location: "Minneapolis, MN",
        year: "2022",
        featured: false,
    },
    {
        id: 12,
        title: "The Grand Hotel Restoration",
        description:
            "Renovation of a historic 1930s hotel, preserving art deco elements while adding modern luxury amenities.",
        category: "hospitality",
        image: "/grand-hotel.jpg",
        location: "Miami, FL",
        year: "2020",
        featured: false,
    },
];

// Detailed project data (for individual project pages)
export const projectDetails = {
    1: {
        id: 1,
        title: "Riverfront Commercial Plaza",
        description:
            "A 250,000 sq ft mixed-use development featuring innovative sustainable design elements and LEED Platinum certification.",
        category: "commercial",
        image: "/riverfront-plaza.jpg",
        location: "Nashville, TN",
        year: "2023",
        client: "Riverfront Development Corporation",
        duration: "24 months",
        budget: "$47 million",
        status: "Completed",
        featured: true,
        fullDescription: `
      <p>The Riverfront Commercial Plaza represents the pinnacle of modern sustainable commercial development. This ambitious project transformed a formerly underutilized waterfront area into a vibrant mixed-use destination that serves as both an economic catalyst and community gathering space.</p>
      
      <p>Spanning 250,000 square feet, the development includes Class A office space, upscale retail outlets, dining establishments, and public plazas with direct river access. The design seamlessly integrates indoor and outdoor environments, creating a harmonious relationship between the built environment and the natural waterfront setting.</p>
      
      <p>Cambridge Building Group implemented numerous sustainable features that earned the project LEED Platinum certification, including:</p>
    `,
        sustainableFeatures: [
            "Rooftop solar array generating 30% of the building's power needs",
            "State-of-the-art rainwater harvesting and graywater recycling systems",
            "High-efficiency HVAC systems with energy recovery ventilation",
            "Locally sourced and recycled construction materials",
            "Green roof installations that reduce heat island effect and manage stormwater",
            "Smart building systems that optimize energy usage and occupant comfort",
        ],
        challenges: [
            "Complex site conditions requiring specialized foundation work",
            "Coordination of multiple stakeholders including city officials, community groups, and tenants",
            "Integration of historical elements from the site's industrial past",
            "Maintaining construction schedule despite supply chain disruptions",
            "Meeting stringent LEED Platinum requirements while adhering to budget constraints",
        ],
        outcomes: [
            "Achieved LEED Platinum certification with one of the highest point totals in the region",
            "Completed two months ahead of schedule despite pandemic-related challenges",
            "Created over 800 permanent jobs and 350 construction jobs",
            "Established a new benchmark for sustainable commercial development in the region",
            "Won three industry awards for design excellence and sustainability",
        ],
        testimonial: {
            quote:
                "Cambridge Building Group exceeded our expectations at every turn. Their innovative approach to sustainable design and construction has resulted in a landmark development that perfectly aligns with our vision. The project was delivered ahead of schedule and has already become a catalyst for further investment in our riverfront district.",
            author: "Miranda Jennings",
            title: "Executive Director, Riverfront Development Corporation",
        },
        teamMembers: [
            { name: "Robert Cambridge", role: "Executive Sponsor" },
            { name: "Sarah Mitchell", role: "Project Executive" },
            { name: "Jennifer Zhao", role: "Sustainability Director" },
            { name: "Michael Rodriguez", role: "Technology Integration Lead" },
            { name: "Richard Thompson", role: "Preconstruction Manager" },
        ],
        galleryImages: [
            { id: 1, title: "Exterior View", image: "/riverfront-plaza-1.jpg" },
            { id: 2, title: "Main Lobby", image: "/riverfront-plaza-2.jpg" },
            { id: 3, title: "Riverside Plaza", image: "/riverfront-plaza-3.jpg" },
            { id: 4, title: "Office Space", image: "/riverfront-plaza-4.jpg" },
            { id: 5, title: "Retail Area", image: "/riverfront-plaza-5.jpg" },
            { id: 6, title: "Green Roof", image: "/riverfront-plaza-6.jpg" },
        ],
        relatedProjects: [2, 4, 11],
    },
    2: {
        id: 2,
        title: "Madison Opera House Restoration",
        description:
            "Meticulous restoration of a 1920s landmark theater, preserving historical elements while implementing modern amenities and safety features.",
        category: "renovation",
        image: "/opera-house.jpg",
        location: "Madison, WI",
        year: "2022",
        client: "Madison Historical Society",
        duration: "18 months",
        budget: "$32 million",
        status: "Completed",
        featured: true,
        fullDescription: `
      <p>The Madison Opera House restoration project represented a perfect balance between honoring architectural history and incorporating modern functionality. This cherished local landmark, originally built in 1924, had fallen into disrepair over decades of neglect before Cambridge Building Group undertook its comprehensive restoration.</p>
      
      <p>Our team of preservation specialists worked closely with historians, acoustical engineers, and theatrical consultants to revive the venue's grandeur while ensuring it could meet the demands of contemporary performances and audiences.</p>
      
      <p>The project's success has not only returned a historic gem to the community but has also sparked broader revitalization efforts in the surrounding downtown district.</p>
    `,
        sustainableFeatures: [
            "Energy-efficient LED lighting systems designed to replicate historic fixtures",
            "Modern HVAC system hidden within historical architectural features",
            "Reclaimed and refurbished original materials where possible",
            "Water-saving plumbing fixtures integrated into period-appropriate designs",
            "Improved building envelope insulation without compromising historic aesthetics",
            "Acoustic enhancements using sustainable materials"
        ],
        challenges: [
            "Extensive water and structural damage requiring specialized remediation",
            "Balancing historical authenticity with modern building codes and ADA requirements",
            "Recreating lost architectural elements using traditional craftsmanship techniques",
            "Integrating modern theatrical technology within a historic structure",
            "Complex coordination with preservation authorities and historical societies"
        ],
        outcomes: [
            "Preserved 90% of original ornate plasterwork and decorative elements",
            "Modern acoustics and lighting systems integrated without compromising historic integrity",
            "Increased seating capacity while improving comfort and sightlines",
            "Enhanced backstage and technical capabilities to accommodate contemporary productions",
            "Received Historic Preservation Excellence Award from the National Trust"
        ],
        testimonial: {
            quote:
                "The Cambridge Building Group team demonstrated extraordinary sensitivity to the historical significance of our beloved Opera House while incorporating the technical innovations necessary for its continued use. Their craftsmanship and attention to detail have ensured that this cultural landmark will serve our community for generations to come.",
            author: "Eleanor Richards",
            title: "President, Madison Historical Society",
        },
        teamMembers: [
            { name: "Sarah Mitchell", role: "Project Director" },
            { name: "Timothy Wells", role: "Historical Preservation Specialist" },
            { name: "Rebecca Chen", role: "Interior Restoration Lead" },
            { name: "Jonathan Hayes", role: "Structural Engineering Lead" },
            { name: "Sophia Martinez", role: "Architectural Documentation Specialist" },
        ],
        galleryImages: [
            { id: 1, title: "Grand Facade", image: "/opera-house-1.jpg" },
            { id: 2, title: "Main Theatre", image: "/opera-house-2.jpg" },
            { id: 3, title: "Restored Ceiling Mural", image: "/opera-house-3.jpg" },
            { id: 4, title: "Grand Staircase", image: "/opera-house-4.jpg" },
            { id: 5, title: "Original Box Seating", image: "/opera-house-5.jpg" },
            { id: 6, title: "Modern Stage Technology", image: "/opera-house-6.jpg" },
        ],
        relatedProjects: [10, 12, 1],
    },
    // Additional projects would be defined here
};

// Function to get related projects data
export function getRelatedProjects(projectId) {
    const project = projectDetails[projectId];
    if (!project || !project.relatedProjects) {
        return [];
    }

    return project.relatedProjects.map(id => {
        const relatedProject = projects.find(p => p.id === id);
        return relatedProject || null;
    }).filter(Boolean); // Remove any null entries
}

// Function to get project by ID
export function getProjectById(id) {
    return projectDetails[id] || null;
}