<script setup>
import { ref, computed } from "vue";
import {
  MagnifyingGlassIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/vue/24/solid";
import { projects, categories } from "~/data/portfolioData";
import { companyInfo } from "~/data/siteData";

// Page metadata
useHead({
  title: `Portfolio | ${companyInfo.name}`,
  meta: [
    {
      name: "description",
      content: `Explore ${companyInfo.name}'s portfolio of commercial, residential, and renovation projects that showcase our expertise and craftsmanship.`,
    },
  ],
});

// Active filter
const activeCategory = ref("all");

// Search functionality
const searchQuery = ref("");

// Computed filtered projects
const filteredProjects = computed(() => {
  let filtered = projects;

  // Filter by category
  if (activeCategory.value !== "all") {
    filtered = filtered.filter(
      (project) => project.category === activeCategory.value
    );
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query)
    );
  }

  return filtered;
});

// Featured projects first
const sortedProjects = computed(() => {
  return [...filteredProjects.value].sort((a, b) => {
    // Sort featured projects first
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    // Then sort by year (newest first)
    return parseInt(b.year) - parseInt(a.year);
  });
});

function setActiveCategory(categoryId) {
  activeCategory.value = categoryId;
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <section
      class="relative h-[40vh] flex items-center justify-center bg-slate-800"
    >
      <div
        class="absolute inset-0 z-0 opacity-30 bg-[url('/portfolio-header.jpg')] bg-cover bg-center"
      ></div>
      <div class="relative z-10 text-center px-8">
        <h1 class="text-5xl md:text-6xl font-bold text-slate-300 mb-4">
          Our Portfolio
        </h1>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto">
          Explore our diverse collection of projects that showcase our
          expertise, innovation, and dedication to excellence.
        </p>
      </div>
    </section>

    <!-- Portfolio Controls -->
    <section class="py-8 px-8 2xl:px-60 bg-white border-b border-slate-200">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!-- Category Filters -->
          <div class="flex flex-wrap gap-2 mb-4 md:mb-0">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="setActiveCategory(category.id)"
              class="px-4 py-2 text-sm font-medium rounded-full transition duration-200"
              :class="
                activeCategory === category.id
                  ? 'bg-navy text-slate-300'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              "
            >
              {{ category.name }}
            </button>
          </div>

          <!-- Search Box -->
          <div class="relative w-full md:w-auto">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <MagnifyingGlassIcon class="size-5 text-slate-500" />
            </div>
            <input
              type="text"
              v-model="searchQuery"
              class="pl-10 pr-4 py-2 w-full md:w-64 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
              placeholder="Search projects..."
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-16 px-8 2xl:px-60 bg-slate-100">
      <div class="container mx-auto">
        <div
          v-if="sortedProjects.length > 0"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <!-- Project Card -->
          <div
            v-for="project in sortedProjects"
            :key="project.id"
            class="bg-white shadow-md overflow-hidden group"
          >
            <!-- Project Image -->
            <div class="h-56 bg-slate-200 relative overflow-hidden">
              <div
                class="absolute inset-0 flex items-center justify-center text-slate-400"
              >
                <span class="text-lg">Project Image: {{ project.title }}</span>
              </div>

              <!-- Featured badge -->
              <div
                v-if="project.featured"
                class="absolute top-0 right-0 bg-navy text-slate-300 px-3 py-1 text-sm font-semibold"
              >
                Featured
              </div>

              <!-- View details button -->
              <div
                class="absolute inset-0 bg-navy bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
              >
                <NuxtLink
                  :to="`/portfolio/${project.id}`"
                  class="flex items-center text-slate-300 font-semibold px-4 py-2 border-2 border-slate-300 hover:bg-slate-300 hover:text-navy transition duration-200"
                >
                  View Details
                  <ArrowsPointingOutIcon class="size-4 ml-2" />
                </NuxtLink>
              </div>
            </div>

            <!-- Project Info -->
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-bold text-navy">{{ project.title }}</h3>
                <span class="text-sm text-slate-500">{{ project.year }}</span>
              </div>
              <p class="text-slate-700 mb-4 line-clamp-2">
                {{ project.description }}
              </p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-slate-600">
                  <span class="font-semibold">Location:</span>
                  {{ project.location }}
                </span>
                <span
                  class="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                >
                  {{ categories.find((c) => c.id === project.category)?.name }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results Message -->
        <div v-else class="text-center py-16">
          <h3 class="text-2xl font-bold text-navy mb-2">No Projects Found</h3>
          <p class="text-slate-700 mb-6">
            Try adjusting your filters or search query.
          </p>
          <button
            @click="
              activeCategory = 'all';
              searchQuery = '';
            "
            class="px-4 py-2 bg-navy text-slate-300 font-medium hover:bg-opacity-90 transition duration-200"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </section>

    <!-- Case Studies component -->
    <SectionsCaseStudies />

    <!-- Awards component -->
    <SectionsIndustryAwards />

    <!-- Contact CTA -->
    <SectionsContactCTA />
  </div>
</template>
