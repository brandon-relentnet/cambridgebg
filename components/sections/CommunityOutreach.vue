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
  return Math.floor(value).toLocaleString();
};
</script>

<template>
  <section
    id="community-outreach"
    class="relative bg-slate-100 px-8 2xl:px-60 py-section"
  >
    <div class="py-block mx-auto container">
      <div class="mx-auto mb-12 w-full md:w-2/3 text-center">
        <div class="flex justify-center items-center mb-4">
          <HeartIcon class="mr-4 size-10 text-navy" />
          <h2 class="font-bold text-navy text-5xl">Community Impact</h2>
        </div>
        <p class="text-slate-700 text-xl">
          At Cambridge Building Group, we believe in building more than
          structures—we build communities. Our commitment to social
          responsibility drives us to give back to the communities where we live
          and work.
        </p>
      </div>

      <!-- Impact Statistics -->
      <div class="gap-8 grid grid-cols-1 md:grid-cols-2 mb-16">
        <div
          v-for="(stat, index) in stats"
          :key="stat.id"
          class="bg-white shadow-lg p-8 border-navy border-b-4 text-center"
        >
          <p class="mb-3 font-bold text-navy text-5xl">
            {{ formatValue(stat.value, index) }}
          </p>
          <p class="text-slate-700 text-xl">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Community Initiatives -->
      <h3 class="mb-8 font-bold text-navy text-3xl text-center">
        Our Community Initiatives
      </h3>
      <div class="gap-8 grid grid-cols-1 md:grid-cols-2 mb-16">
        <div
          v-for="initiative in initiatives"
          :key="initiative.id"
          class="group relative bg-white shadow-lg p-6 border-navy border-t-4 overflow-hidden"
        >
          <!-- Icon background -->
          <component
            :is="initiative.icon"
            class="-right-6 -bottom-6 absolute opacity-50 size-40 text-slate-200 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 transform"
          />

          <div class="z-10 relative">
            <span
              class="inline-block bg-slate-200 mb-3 px-3 py-1 font-semibold text-navy text-sm"
            >
              {{ initiative.category }}
            </span>
            <h4 class="mb-3 font-bold text-navy text-2xl">
              {{ initiative.title }}
            </h4>
            <p class="mb-4 text-slate-700">{{ initiative.description }}</p>
            <div class="mt-4 pt-3 border-slate-200 border-t">
              <p class="font-semibold text-navy">
                Impact: {{ initiative.impact }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div
        class="flex md:flex-row flex-col justify-between items-center bg-white shadow-lg p-8 border-navy border-l-4"
      >
        <div class="mb-6 md:mb-0">
          <h3 class="mb-2 font-bold text-navy text-2xl">
            Join Us in Making a Difference
          </h3>
          <p class="text-slate-700 text-lg">
            Learn more about our community initiatives and how you can get
            involved.
          </p>
        </div>
        <NuxtLink
          to="/about"
          class="group flex items-center bg-navy shadow-lg px-6 py-3 border-2 border-navy font-semibold text-slate-300 hover:scale-115 transition duration-200"
        >
          Community Programs
          <ChevronRightIcon
            class="ml-2 size-5 transition-transform group-hover:translate-x-1 duration-200"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
