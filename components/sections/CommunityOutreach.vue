<script setup>
import { reactive, onMounted } from "vue";
import { HeartIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import { initiatives, impactStats } from "~/data/siteData";

// Initialize the value property for each stat
const stats = reactive(
  impactStats.map((stat) => ({
    ...stat,
    value: 0, // Initialize value to 0 for animation
  }))
);

onMounted(() => {
  // Animate stats
  stats.forEach((stat) => {
    const duration = 2000; // Animation duration in ms
    const increment = stat.target / (duration / 50);

    const interval = setInterval(() => {
      // With reactive, direct property changes should be detected
      stat.value += increment;

      if (stat.value >= stat.target) {
        stat.value = stat.target;
        clearInterval(interval);
      }
    }, 50);
  });
});

const formatValue = (value, index) => {
  // Format stats values with commas for thousands and dollar sign for the contribution amount
  if (index === 2) {
    return "$" + Math.floor(value).toLocaleString();
  }
  return Math.floor(value).toLocaleString();
};
</script>

<template>
  <section
    id="community-outreach"
    class="relative px-8 2xl:px-60 py-section bg-slate-100"
  >
    <div class="container mx-auto py-block">
      <div class="w-full md:w-2/3 mx-auto text-center mb-12">
        <div class="flex items-center justify-center mb-4">
          <HeartIcon class="size-10 text-navy mr-4" />
          <h2 class="text-5xl font-bold text-navy">Community Impact</h2>
        </div>
        <p class="text-xl text-slate-700">
          At Cambridge Building Group, we believe in building more than
          structures—we build communities. Our commitment to social
          responsibility drives us to give back to the communities where we live
          and work.
        </p>
      </div>

      <!-- Impact Statistics -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div
          v-for="(stat, index) in stats"
          :key="stat.id"
          class="bg-white p-8 shadow-lg text-center border-b-4 border-navy"
        >
          <p class="text-5xl font-bold text-navy mb-3">
            {{ formatValue(stat.value, index) }}
          </p>
          <p class="text-xl text-slate-700">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Community Initiatives -->
      <h3 class="text-3xl font-bold text-navy mb-8 text-center">
        Our Community Initiatives
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div
          v-for="initiative in initiatives"
          :key="initiative.id"
          class="bg-white p-6 shadow-lg overflow-hidden relative group border-t-4 border-navy"
        >
          <!-- Icon background -->
          <component
            :is="initiative.icon"
            class="size-40 text-slate-200 absolute -bottom-6 -right-6 opacity-50 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-12"
          />

          <div class="relative z-10">
            <span
              class="inline-block px-3 py-1 bg-slate-200 text-navy text-sm font-semibold mb-3"
            >
              {{ initiative.category }}
            </span>
            <h4 class="text-2xl font-bold text-navy mb-3">
              {{ initiative.title }}
            </h4>
            <p class="text-slate-700 mb-4">{{ initiative.description }}</p>
            <div class="border-t border-slate-200 pt-3 mt-4">
              <p class="font-semibold text-navy">
                Impact: {{ initiative.impact }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div
        class="bg-white p-8 shadow-lg border-l-4 border-navy flex flex-col md:flex-row items-center justify-between"
      >
        <div class="mb-6 md:mb-0">
          <h3 class="text-2xl font-bold text-navy mb-2">
            Join Us in Making a Difference
          </h3>
          <p class="text-lg text-slate-700">
            Learn more about our community initiatives and how you can get
            involved.
          </p>
        </div>
        <NuxtLink
          to="/about"
          class="bg-navy group text-slate-300 font-semibold px-6 py-3 border-2 border-navy shadow-lg transition duration-200 hover:scale-115 flex items-center"
        >
          Community Programs
          <ChevronRightIcon
            class="size-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
