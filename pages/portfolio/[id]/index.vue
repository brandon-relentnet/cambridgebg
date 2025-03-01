<script setup>
import { useRoute } from "vue-router";
import {
  CalendarDaysIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/solid";

// Get route params
const route = useRoute();
const projectId = parseInt(route.params.id);

// Project data
const project = {
  id: projectId,
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
    
    <p>Cambridge Construction implemented numerous sustainable features that earned the project LEED Platinum certification, including:</p>
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
      "Cambridge Construction exceeded our expectations at every turn. Their innovative approach to sustainable design and construction has resulted in a landmark development that perfectly aligns with our vision. The project was delivered ahead of schedule and has already become a catalyst for further investment in our riverfront district.",
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
};

// Page metadata
useHead({
  title: `${project.title} | Cambridge Construction Portfolio`,
  meta: [{ name: "description", content: project.description }],
});

// Related projects
const relatedProjects = [
  {
    id: 2,
    title: "Oakridge Corporate Center",
    description:
      "Modern office complex designed for flexibility, collaboration, and employee wellness.",
    category: "commercial",
    image: "/corporate-center.jpg",
    location: "Dallas, TX",
    year: "2022",
  },
  {
    id: 3,
    title: "Lakeview Shopping Center",
    description:
      "Modern retail development with 28 store locations and community gathering areas.",
    category: "commercial",
    image: "/lakeview-shopping.jpg",
    location: "Minneapolis, MN",
    year: "2022",
  },
  {
    id: 4,
    title: "Heritage Bank Headquarters",
    description:
      "Corporate headquarters with traditional architecture and cutting-edge technology.",
    category: "corporate",
    image: "/heritage-bank.jpg",
    location: "Charlotte, NC",
    year: "2020",
  },
];
</script>

<template>
  <div>
    <!-- Project Hero -->
    <section
      class="relative h-[60vh] flex items-center justify-center bg-slate-800"
    >
      <div
        class="absolute inset-0 z-0 opacity-40 bg-[url('/riverfront-plaza.jpg')] bg-cover bg-center"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-70"
      ></div>
      <div class="relative z-10 text-center px-8 mt-16">
        <div
          class="inline-block bg-navy px-4 py-1 text-sm text-slate-300 font-medium mb-4"
        >
          {{
            project.category.charAt(0).toUpperCase() + project.category.slice(1)
          }}
        </div>
        <h1 class="text-5xl md:text-6xl font-bold text-slate-300 mb-4">
          {{ project.title }}
        </h1>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto">
          {{ project.description }}
        </p>
      </div>
    </section>

    <!-- Navigation Bar -->
    <section class="sticky top-20 z-30 bg-white shadow-md py-4 px-8 2xl:px-60">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink
          to="/portfolio"
          class="flex items-center text-navy font-medium hover:underline"
        >
          <ArrowLeftIcon class="size-4 mr-2" />
          Back to Portfolio
        </NuxtLink>
        <div class="flex space-x-4">
          <NuxtLink
            :to="`/portfolio/${projectId - 1}`"
            class="text-navy font-medium hover:underline"
            v-if="projectId > 1"
          >
            Previous Project
          </NuxtLink>
          <NuxtLink
            :to="`/portfolio/${projectId + 1}`"
            class="text-navy font-medium hover:underline"
          >
            Next Project
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Project Overview -->
    <section class="py-16 px-8 2xl:px-60 bg-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Project Details -->
          <div class="lg:col-span-2">
            <div class="mb-8">
              <h2 class="text-3xl font-bold text-navy mb-6">
                Project Overview
              </h2>
              <div
                class="prose prose-lg max-w-none text-slate-700"
                v-html="project.fullDescription"
              ></div>
            </div>

            <div class="bg-slate-100 p-6 border-l-4 border-navy mb-8">
              <h3 class="text-xl font-bold text-navy mb-4">
                Sustainable Features
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="(feature, index) in project.sustainableFeatures"
                  :key="index"
                  class="flex items-start"
                >
                  <span
                    class="w-2 h-2 bg-navy rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span class="text-slate-700">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 class="text-xl font-bold text-navy mb-4">Challenges</h3>
                <ul class="space-y-2">
                  <li
                    v-for="(challenge, index) in project.challenges"
                    :key="index"
                    class="flex items-start"
                  >
                    <span
                      class="w-2 h-2 bg-navy rounded-full mt-2 mr-3 flex-shrink-0"
                    ></span>
                    <span class="text-slate-700">{{ challenge }}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold text-navy mb-4">Outcomes</h3>
                <ul class="space-y-2">
                  <li
                    v-for="(outcome, index) in project.outcomes"
                    :key="index"
                    class="flex items-start"
                  >
                    <span
                      class="w-2 h-2 bg-navy rounded-full mt-2 mr-3 flex-shrink-0"
                    ></span>
                    <span class="text-slate-700">{{ outcome }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Testimonial -->
            <div class="bg-navy p-8 shadow-lg mb-8">
              <blockquote class="text-xl font-light italic text-slate-300 mb-6">
                "{{ project.testimonial.quote }}"
              </blockquote>
              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-navy font-bold text-xl mr-4"
                >
                  {{ project.testimonial.author.charAt(0) }}
                </div>
                <div>
                  <p class="text-slate-300 font-semibold">
                    {{ project.testimonial.author }}
                  </p>
                  <p class="text-slate-400">{{ project.testimonial.title }}</p>
                </div>
              </div>
            </div>

            <!-- Project Gallery -->
            <div>
              <h3 class="text-2xl font-bold text-navy mb-6">Project Gallery</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                  v-for="image in project.galleryImages"
                  :key="image.id"
                  class="bg-slate-200 h-48 relative overflow-hidden group"
                >
                  <div
                    class="absolute inset-0 flex items-center justify-center text-slate-400"
                  >
                    <span class="text-lg">{{ image.title }}</span>
                  </div>
                  <div
                    class="absolute inset-0 bg-navy bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
                  >
                    <span class="text-slate-300 font-semibold">{{
                      image.title
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Project Sidebar -->
          <div>
            <div class="bg-slate-100 p-6 shadow-md mb-8">
              <h3 class="text-xl font-bold text-navy mb-4">Project Details</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <MapPinIcon
                    class="size-5 text-navy mr-3 mt-1 flex-shrink-0"
                  />
                  <div>
                    <p class="text-sm text-slate-500">Location</p>
                    <p class="text-slate-700 font-medium">
                      {{ project.location }}
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <CalendarDaysIcon
                    class="size-5 text-navy mr-3 mt-1 flex-shrink-0"
                  />
                  <div>
                    <p class="text-sm text-slate-500">Completion Year</p>
                    <p class="text-slate-700 font-medium">{{ project.year }}</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <ClockIcon class="size-5 text-navy mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p class="text-sm text-slate-500">Project Duration</p>
                    <p class="text-slate-700 font-medium">
                      {{ project.duration }}
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <CurrencyDollarIcon
                    class="size-5 text-navy mr-3 mt-1 flex-shrink-0"
                  />
                  <div>
                    <p class="text-sm text-slate-500">Project Budget</p>
                    <p class="text-slate-700 font-medium">
                      {{ project.budget }}
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <UserGroupIcon
                    class="size-5 text-navy mr-3 mt-1 flex-shrink-0"
                  />
                  <div>
                    <p class="text-sm text-slate-500">Client</p>
                    <p class="text-slate-700 font-medium">
                      {{ project.client }}
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <BuildingOfficeIcon
                    class="size-5 text-navy mr-3 mt-1 flex-shrink-0"
                  />
                  <div>
                    <p class="text-sm text-slate-500">Status</p>
                    <p class="text-slate-700 font-medium">
                      {{ project.status }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="bg-slate-100 p-6 shadow-md mb-8">
              <h3 class="text-xl font-bold text-navy mb-4">Project Team</h3>
              <ul class="space-y-3">
                <li
                  v-for="(member, index) in project.teamMembers"
                  :key="index"
                  class="border-b border-slate-200 last:border-b-0 pb-2 last:pb-0"
                >
                  <p class="font-semibold text-navy">{{ member.name }}</p>
                  <p class="text-sm text-slate-600">{{ member.role }}</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-bold text-navy mb-4">
                Request Similar Project
              </h3>
              <p class="text-slate-700 mb-4">
                Interested in creating a similar project? Contact us to discuss
                your vision.
              </p>
              <NuxtLink
                to="/contact"
                class="block w-full bg-navy text-slate-300 text-center font-semibold py-3 px-4 transition duration-200 hover:bg-opacity-90"
              >
                Get in Touch
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Projects -->
    <section class="py-16 px-8 2xl:px-60 bg-slate-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-navy mb-8">Related Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="relatedProject in relatedProjects"
            :key="relatedProject.id"
            class="bg-white shadow-md overflow-hidden group"
          >
            <!-- Project Image -->
            <div class="h-48 bg-slate-200 relative overflow-hidden">
              <div
                class="absolute inset-0 flex items-center justify-center text-slate-400"
              >
                <span class="text-lg"
                  >Project Image: {{ relatedProject.title }}</span
                >
              </div>

              <!-- View details button -->
              <div
                class="absolute inset-0 bg-navy bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
              >
                <NuxtLink
                  :to="`/portfolio/${relatedProject.id}`"
                  class="flex items-center text-slate-300 font-semibold px-4 py-2 border-2 border-slate-300 hover:bg-slate-300 hover:text-navy transition duration-200"
                >
                  View Details
                  <ArrowRightIcon class="size-4 ml-2" />
                </NuxtLink>
              </div>
            </div>

            <!-- Project Info -->
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-bold text-navy">
                  {{ relatedProject.title }}
                </h3>
                <span class="text-sm text-slate-500">{{
                  relatedProject.year
                }}</span>
              </div>
              <p class="text-slate-700 mb-4 line-clamp-2">
                {{ relatedProject.description }}
              </p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-slate-600">
                  <span class="font-semibold">Location:</span>
                  {{ relatedProject.location }}
                </span>
                <span
                  class="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                >
                  {{
                    relatedProject.category.charAt(0).toUpperCase() +
                    relatedProject.category.slice(1)
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <SectionsContactCTA />
  </div>
</template>
