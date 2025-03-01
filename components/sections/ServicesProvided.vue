<script setup>
import { ref } from "vue";
import {
  ChevronRightIcon,
  CogIcon,
  BuildingOfficeIcon,
  HomeModernIcon,
  BuildingLibraryIcon,
  WrenchScrewdriverIcon,
  BuildingStorefrontIcon,
} from "@heroicons/vue/24/solid";
import { scrollToNextSection } from "~/utils/autoScroll";

const services = [
  {
    id: 1,
    icon: BuildingOfficeIcon,
    title: "Commercial Construction",
    description:
      "From office buildings to retail spaces, we deliver commercial properties that balance functionality, aesthetics, and long-term value. Our approach encompasses everything from ground-up construction to tenant improvements.",
  },
  {
    id: 2,
    icon: HomeModernIcon,
    title: "Luxury Residential",
    description:
      "We create distinctive homes that reflect the unique vision and lifestyle of each client. Our attention to detail and commitment to quality craftsmanship ensures residential spaces that are both beautiful and enduring.",
  },
  {
    id: 3,
    icon: BuildingLibraryIcon,
    title: "Historic Renovation",
    description:
      "Our specialized team expertly blends preservation techniques with modern functionality to breathe new life into historic structures while maintaining their architectural integrity and cultural significance.",
  },
  {
    id: 4,
    icon: WrenchScrewdriverIcon,
    title: "Design-Build Solutions",
    description:
      "Our integrated design-build approach streamlines the construction process, reducing costs and timelines while maintaining superior quality through collaborative problem-solving and unified vision.",
  },
  {
    id: 5,
    icon: BuildingStorefrontIcon,
    title: "Tenant Improvements",
    description:
      "We transform existing commercial spaces to meet the unique needs of businesses, creating environments that enhance productivity, reflect brand identity, and optimize operational efficiency.",
  },
  {
    id: 6,
    icon: CogIcon,
    title: "Pre-Construction Services",
    description:
      "Our comprehensive pre-construction services include budgeting, scheduling, value engineering, and constructability reviews to identify potential challenges early and establish a solid foundation for project success.",
  },
];

const hoveredService = ref(null);

function setHoveredService(id) {
  hoveredService.value = id;
}

function clearHoveredService() {
  hoveredService.value = null;
}
</script>

<template>
  <section
    id="services-provided"
    class="relative px-8 2xl:px-60 py-section bg-slate-100"
  >
    <div class="container mx-auto py-block">
      <div class="w-full md:w-1/2 mb-12">
        <h2 class="text-5xl font-bold text-navy mb-4">Services Provided</h2>
        <p class="text-lg text-slate-700 mb-6">
          Cambridge Construction offers a comprehensive suite of construction
          services tailored to meet the diverse needs of our clients. From
          concept to completion, we apply our expertise at every stage of the
          building process.
        </p>
        <div class="flex">
          <button
            @click="scrollToNextSection('markets-we-serve')"
            class="bg-navy group text-slate-300 font-semibold px-4 py-2 border-2 border-navy shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
          >
            Markets We Serve
            <ChevronRightIcon
              class="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200"
            />
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in services"
          :key="service.id"
          class="relative overflow-hidden group border-2 border-slate-300 transition-all duration-300 hover:border-navy bg-white shadow-md"
          @mouseenter="setHoveredService(service.id)"
          @mouseleave="clearHoveredService()"
        >
          <div class="p-6 z-10 relative h-full">
            <component :is="service.icon" class="size-12 text-navy mb-4" />
            <h3 class="text-2xl font-bold text-navy mb-3">
              {{ service.title }}
            </h3>
            <p class="text-slate-700">{{ service.description }}</p>
          </div>
          <div
            class="absolute inset-0 bg-navy opacity-0 transition-opacity duration-300 z-0"
            :class="{ 'opacity-5': hoveredService === service.id }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
