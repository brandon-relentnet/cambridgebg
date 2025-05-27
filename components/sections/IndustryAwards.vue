<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import { scrollToNextSection } from "~/utils/autoScroll";
import { awards } from "~/data/siteData";

const props = defineProps({
  showButton: {
    type: Boolean,
    default: false,
  },
});

// Filter featured awards
const featuredAwards = awards.filter((award) => award.featured);
// Filter non-featured awards
const otherAwards = awards.filter((award) => !award.featured);
</script>

<template>
  <section
    id="industry-awards"
    class="relative px-8 2xl:px-60 py-section bg-slate-100"
  >
    <div class="container mx-auto py-block">
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
      >
        <div class="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 class="text-5xl font-bold text-navy mb-4">
            Industry Recognition
          </h2>
          <p class="text-lg text-slate-700">
            Cambridge Building Group's commitment to excellence has been
            recognized through numerous prestigious industry awards, reflecting
            our dedication to quality, innovation, and client satisfaction.
          </p>
        </div>
        <button
          v-if="showButton"
          @click="scrollToNextSection('case-studies')"
          class="bg-navy group text-slate-300 font-semibold px-4 py-2 border-2 border-navy shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
        >
          Case Studies
          <ChevronRightIcon
            class="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200"
          />
        </button>
      </div>

      <!-- Featured Awards -->
      <div class="mb-16">
        <h3
          class="text-3xl font-bold text-navy mb-8 border-b-2 border-slate-300 pb-2"
        >
          Featured Awards
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="award in featuredAwards"
            :key="award.id"
            class="bg-white shadow-lg border-t-4 border-navy relative overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 bg-navy text-slate-300 px-4 py-1 text-sm font-semibold"
            >
              {{ award.year }}
            </div>
            <div class="p-6 pt-10">
              <h4 class="text-xl font-bold text-navy mb-2">
                {{ award.title }}
              </h4>
              <p class="text-slate-600 italic mb-4">{{ award.organization }}</p>
              <p class="text-navy font-semibold mb-2">
                Project: {{ award.project }}
              </p>
              <p class="text-slate-700">{{ award.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Awards -->
      <div>
        <h3
          class="text-3xl font-bold text-navy mb-8 border-b-2 border-slate-300 pb-2"
        >
          Additional Recognition
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="award in otherAwards"
            :key="award.id"
            class="bg-white p-4 shadow-md flex flex-col"
          >
            <div class="flex justify-between items-center mb-2">
              <h4 class="text-lg font-semibold text-navy">{{ award.title }}</h4>
              <span class="bg-slate-200 text-navy px-2 py-1 text-xs">{{
                award.year
              }}</span>
            </div>
            <p class="text-slate-600 text-sm italic mb-2">
              {{ award.organization }}
            </p>
            <p class="text-slate-700 text-sm">{{ award.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
