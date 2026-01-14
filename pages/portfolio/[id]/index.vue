<script setup>
import { useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";
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
import { getProjectById, getRelatedProjects } from "~/data/portfolioData";

// Get route params
const route = useRoute();
const projectId = parseInt(route.params.id);

// Project data
const project = ref(null);
const relatedProjects = ref([]);

// Fetch project data
onMounted(() => {
  project.value = getProjectById(projectId);
  if (project.value) {
    relatedProjects.value = getRelatedProjects(projectId);
  }
});

// Page metadata
useSeoMeta({
  title: computed(() =>
    project.value ? project.value.title : "Project Details"
  ),
  description: computed(() =>
    project.value ? project.value.description : "Project details page"
  ),
  ogTitle: computed(() =>
    project.value
      ? `${project.value.title} | Cambridge Building Group Portfolio`
      : "Project Details"
  ),
  ogDescription: computed(() =>
    project.value ? project.value.description : "Project details page"
  ),
  ogImage: "/riverfront-plaza.jpg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div v-if="project">
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
  <div
    v-else
    class="min-h-screen flex items-center justify-center bg-slate-100"
  >
    <div class="text-center p-8">
      <h2 class="text-3xl font-bold text-navy mb-4">Loading Project...</h2>
      <p class="text-slate-700">
        Please wait while we fetch the project details.
      </p>
    </div>
  </div>
</template>
