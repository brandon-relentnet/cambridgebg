<script setup>
import { ref } from "vue";
import {
  BuildingOfficeIcon,
  HomeModernIcon,
  BuildingLibraryIcon,
  WrenchScrewdriverIcon,
  BuildingStorefrontIcon,
  CogIcon,
  ArrowRightIcon,
  SwatchIcon,
  BuildingOffice2Icon,
  CubeIcon,
  ClipboardDocumentIcon,
} from "@heroicons/vue/24/solid";

// Page metadata
useSeoMeta({
  title: "Our Services",
  description:
    "Explore Cambridge Building Group's comprehensive services including commercial construction, luxury residential, historic renovation, design-build, and more.",
  ogTitle: "Construction Services | Cambridge Building Group",
  ogDescription:
    "Explore Cambridge Building Group's comprehensive services including commercial construction, luxury residential, historic renovation, design-build, and more.",
  ogImage: "/services-header.jpg",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({
    name: "Our Services",
  }),
]);

const services = [
  {
    id: 1,
    icon: BuildingOfficeIcon,
    title: "Commercial Construction",
    description:
      "From office buildings to retail spaces, we deliver commercial properties that balance functionality, aesthetics, and long-term value. Our approach encompasses everything from ground-up construction to tenant improvements.",
    details: [
      "Office Buildings & Corporate Campuses",
      "Light Industrial",
      "Retail & Restaurant Spaces",
      "Medical Facilities & Healthcare Centers",
      "Hospitality & Entertainment Venues",
      "Financial Institutions & Banks",
    ],
    link: "/services",
  },
  {
    id: 2,
    icon: HomeModernIcon,
    title: "Luxury Residential",
    description:
      "We create distinctive homes that reflect the unique vision and lifestyle of each client. Our attention to detail and commitment to quality craftsmanship ensures residential spaces that are both beautiful and enduring.",
    details: [
      "Custom Luxury Homes",
      "Executive Estates & Properties",
      "High-End Multi-Family Developments",
      "Vacation & Second Homes",
      "Residential Community Planning",
    ],
    link: "/services",
  },
  {
    id: 3,
    icon: BuildingLibraryIcon,
    title: "Historic Renovation",
    description:
      "Our specialized team expertly blends preservation techniques with modern functionality to breathe new life into historic structures while maintaining their architectural integrity and cultural significance.",
    details: [
      "Landmark Building Restoration",
      "Adaptive Reuse Projects",
      "Historical Facade Preservation",
      "Period Detail Reconstruction",
      "Heritage Building Modernization",
    ],
    link: "/services",
  },
  {
    id: 4,
    icon: WrenchScrewdriverIcon,
    title: "Design-Build Solutions",
    description:
      "Our integrated design-build approach streamlines the construction process, reducing costs and timelines while maintaining superior quality through collaborative problem-solving and unified vision.",
    details: [
      "Single-Source Project Delivery",
      "Integrated Design & Construction Teams",
      "Early Cost Certainty & Budgeting",
      "Accelerated Project Timelines",
      "Collaborative Problem-Solving",
    ],
    link: "/services",
  },
  {
    id: 5,
    icon: BuildingStorefrontIcon,
    title: "Tenant Improvements",
    description:
      "We transform existing commercial spaces to meet the unique needs of businesses, creating environments that enhance productivity, reflect brand identity, and optimize operational efficiency.",
    details: [
      "Office Space Reconfigurations",
      "Retail & Restaurant Buildouts",
      "Commercial Interior Renovations",
      "Workspace Modernization",
      "Brand-Aligned Design Implementation",
    ],
    link: "/services",
  },
  {
    id: 6,
    icon: CogIcon,
    title: "Pre-Construction Services",
    description:
      "Our comprehensive pre-construction services include budgeting, scheduling, value engineering, and constructability reviews to identify potential challenges early and establish a solid foundation for project success.",
    details: [
      "Project Feasibility Analysis",
      "Comprehensive Budget Development",
      "Cost Optimization",
      "Schedule Development & Planning",
      "Constructability & Risk Assessment",
    ],
    link: "/services",
  },
];

const additionalServices = [
  {
    id: 7,
    icon: SwatchIcon,
    title: "Sustainable Construction",
    description:
      "Environmentally responsible building practices that reduce operational costs and environmental impact while creating healthier spaces.",
  },
  {
    id: 8,
    icon: BuildingOffice2Icon,
    title: "Industrial & Manufacturing",
    description:
      "Specialized construction for manufacturing facilities, warehouses, and industrial spaces optimized for operational efficiency.",
  },
  {
    id: 9,
    icon: CubeIcon,
    title: "Modular & Prefabrication",
    description:
      "Innovative off-site construction methods that improve quality control, reduce waste, and accelerate project timelines.",
  },
  {
    id: 10,
    icon: ClipboardDocumentIcon,
    title: "Construction Management",
    description:
      "Expert oversight of all aspects of the construction process, ensuring quality, timeliness, and cost-effectiveness.",
  },
];

const activeService = ref(null);

function toggleService(id) {
  activeService.value = activeService.value === id ? null : id;
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <section
      class="relative h-[40vh] flex items-center justify-center bg-slate-800"
    >
      <div
        class="absolute inset-0 z-0 opacity-30 bg-[url('/services-header.jpg')] bg-cover bg-center"
      ></div>
      <div class="relative z-10 text-center px-8">
        <h1 class="text-5xl md:text-6xl font-bold text-slate-300 mb-4">
          Our Services
        </h1>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto">
          Comprehensive construction solutions tailored to your unique vision
          and requirements.
        </p>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-16 px-8 2xl:px-60 bg-white">
      <div class="container mx-auto">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-4xl font-bold text-navy mb-6">What We Offer</h2>
          <p class="text-lg text-slate-700">
            Cambridge Building Group provides a full spectrum of construction
            services, from initial concept and planning through completion and
            beyond. Our integrated approach ensures seamless project delivery
            and exceptional results.
          </p>
        </div>

        <!-- Main Services -->
        <div class="space-y-8">
          <div
            v-for="service in services"
            :key="service.id"
            class="bg-slate-100 shadow-md overflow-hidden transition-all duration-300"
          >
            <div class="p-6 cursor-pointer" @click="toggleService(service.id)">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <component :is="service.icon" class="size-8 text-navy mr-4" />
                  <h3 class="text-2xl font-bold text-navy">
                    {{ service.title }}
                  </h3>
                </div>
                <ArrowRightIcon
                  class="size-5 text-navy transition-transform duration-300"
                  :class="{ 'rotate-90': activeService === service.id }"
                />
              </div>
            </div>
            <div
              v-if="activeService === service.id"
              class="px-6 pb-6 border-t border-slate-300"
            >
              <p class="text-slate-700 mb-6">{{ service.description }}</p>
              <div class="bg-white p-4 border-l-4 border-navy">
                <h4 class="text-lg font-semibold text-navy mb-3">
                  Key Features:
                </h4>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li
                    v-for="(detail, index) in service.details"
                    :key="index"
                    class="flex items-center"
                  >
                    <span class="w-2 h-2 bg-navy rounded-full mr-2"></span>
                    <span class="text-slate-700">{{ detail }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="py-16 px-8 2xl:px-60 bg-slate-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-navy mb-8 text-center">
          Additional Expertise
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="service in additionalServices"
            :key="service.id"
            class="bg-white p-6 shadow-md border-t-4 border-navy"
          >
            <component :is="service.icon" class="size-8 text-navy mb-4" />
            <h3 class="text-xl font-bold text-navy mb-2">
              {{ service.title }}
            </h3>
            <p class="text-slate-700">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Process -->
    <section class="py-16 px-8 2xl:px-60 bg-white">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-navy mb-8 text-center">
          Our Service Process
        </h2>
        <div class="max-w-3xl mx-auto">
          <div class="relative">
            <!-- Vertical line -->
            <div
              class="absolute left-[15px] top-0 bottom-0 w-0.5 bg-navy"
            ></div>

            <!-- Process steps -->
            <div class="space-y-12">
              <div class="relative pl-12">
                <div
                  class="absolute left-0 top-0 w-8 h-8 bg-navy text-slate-300 rounded-full flex items-center justify-center"
                >
                  1
                </div>
                <h3 class="text-xl font-bold text-navy mb-2">
                  Initial Consultation
                </h3>
                <p class="text-slate-700">
                  We begin by understanding your vision, requirements, and
                  objectives. This collaborative discussion forms the foundation
                  for our partnership.
                </p>
              </div>

              <div class="relative pl-12">
                <div
                  class="absolute left-0 top-0 w-8 h-8 bg-navy text-slate-300 rounded-full flex items-center justify-center"
                >
                  2
                </div>
                <h3 class="text-xl font-bold text-navy mb-2">
                  Planning & Design
                </h3>
                <p class="text-slate-700">
                  Our team develops detailed plans and designs that align with
                  your goals, timeline, and budget, incorporating your feedback
                  throughout the process.
                </p>
              </div>

              <div class="relative pl-12">
                <div
                  class="absolute left-0 top-0 w-8 h-8 bg-navy text-slate-300 rounded-full flex items-center justify-center"
                >
                  3
                </div>
                <h3 class="text-xl font-bold text-navy mb-2">
                  Preconstruction
                </h3>
                <p class="text-slate-700">
                  We conduct thorough site assessments, obtain necessary
                  permits, finalize budgets, and establish detailed schedules to
                  prepare for construction.
                </p>
              </div>

              <div class="relative pl-12">
                <div
                  class="absolute left-0 top-0 w-8 h-8 bg-navy text-slate-300 rounded-full flex items-center justify-center"
                >
                  4
                </div>
                <h3 class="text-xl font-bold text-navy mb-2">Construction</h3>
                <p class="text-slate-700">
                  Our Skilled Project Managers and Trade Partners execute the plan
                  with precision, maintaining constant communication and
                  providing regular updates.
                </p>
              </div>

              <div class="relative pl-12">
                <div
                  class="absolute left-0 top-0 w-8 h-8 bg-navy text-slate-300 rounded-full flex items-center justify-center"
                >
                  5
                </div>
                <h3 class="text-xl font-bold text-navy mb-2">
                  Project Completion
                </h3>
                <p class="text-slate-700">
                  We conduct thorough quality inspections, address any final
                  details, and ensure your complete satisfaction before formal
                  project handover.
                </p>
              </div>

              <div class="relative pl-12">
                <div
                  class="absolute left-0 top-0 w-8 h-8 bg-navy text-slate-300 rounded-full flex items-center justify-center"
                >
                  6
                </div>
                <h3 class="text-xl font-bold text-navy mb-2">
                  Ongoing Support
                </h3>
                <p class="text-slate-700">
                  Our relationship continues beyond project completion with
                  warranties, maintenance support, and assistance for future
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Markets We Serve component -->
    <SectionsMarketsWeServe />

    <!-- Competitive Advantage component -->
    <SectionsCompetitiveAdvantage />

    <!-- Contact CTA -->
    <SectionsContactCTA />
  </div>
</template>
