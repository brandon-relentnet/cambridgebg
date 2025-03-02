<script setup>
import { ref, computed } from "vue";
import { ChevronRightIcon, ArrowRightIcon } from "@heroicons/vue/24/solid";
import { scrollToNextSection } from "~/utils/autoScroll";
import { caseStudies } from "~/data/siteData";

const activeStudy = ref(caseStudies[0].id);

function setActiveStudy(id) {
  activeStudy.value = id;
}

const getActiveStudy = computed(() => {
  return (
    caseStudies.find((study) => study.id === activeStudy.value) ||
    caseStudies[0]
  );
});
</script>

<template>
  <section
    id="case-studies"
    class="relative px-8 2xl:px-60 py-section bg-slate-800 text-slate-300"
  >
    <div class="container mx-auto py-block">
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
      >
        <div class="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 class="text-5xl font-bold mb-4">Case Studies</h2>
          <p class="text-lg">
            Explore our featured projects to see how Cambridge Building Group
            transforms challenges into successful outcomes through expertise,
            innovation, and dedication to excellence.
          </p>
        </div>
        <button
          @click="scrollToNextSection('past-clients')"
          class="bg-slate-300 group text-navy font-semibold px-4 py-2 border-2 border-slate-300 shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
        >
          Our Clients
          <ChevronRightIcon
            class="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200"
          />
        </button>
      </div>
      <div class="flex flex-wrap gap-4 mb-10">
        <button
          v-for="study in caseStudies"
          :key="`nav-${study.id}`"
          @click="setActiveStudy(study.id)"
          class="px-4 py-2 text-sm font-semibold transition duration-200 border-b-2 cursor-pointer"
          :class="
            activeStudy === study.id
              ? 'border-slate-300 text-slate-300'
              : 'border-transparent text-slate-500 hover:text-slate-300 hover:border-slate-500'
          "
        >
          {{ study.title }}
        </button>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div class="order-2 lg:order-1">
          <div class="bg-navy p-6 shadow-lg border-l-4 border-slate-400 h-full">
            <div
              class="inline-block bg-slate-600 text-slate-300 px-3 py-1 text-sm font-semibold mb-4"
            >
              {{ getActiveStudy.category }}
            </div>
            <h3 class="text-3xl font-bold mb-4">{{ getActiveStudy.title }}</h3>
            <p class="text-lg mb-6">{{ getActiveStudy.description }}</p>

            <h4 class="text-xl font-semibold mb-3">Project Highlights:</h4>
            <ul class="list-none space-y-3 mb-6">
              <li
                v-for="(highlight, index) in getActiveStudy.highlights"
                :key="index"
                class="flex items-start"
              >
                <ArrowRightIcon
                  class="size-5 text-slate-300 mr-2 mt-1 flex-shrink-0"
                />
                <span>{{ highlight }}</span>
              </li>
            </ul>

            <NuxtLink
              to="/projects"
              class="inline-block text-slate-300 font-semibold mt-4 group"
            >
              View Full Case Study
              <ArrowRightIcon
                class="size-5 inline-block ml-1 group-hover:translate-x-1 transition-transform duration-200"
              />
            </NuxtLink>
          </div>
        </div>
        <div
          class="relative order-1 lg:order-2 h-80 lg:h-auto overflow-hidden bg-slate-700"
        >
          <div
            class="absolute inset-0 flex items-center justify-center text-slate-400"
          >
            <span class="text-lg"
              >Project Image: {{ getActiveStudy.title }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
