<script setup>
import { ref } from "vue";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import { scrollToNextSection } from "~/utils/autoScroll";
import { services } from "~/data/siteData";

const props = defineProps({
  showButton: {
    type: Boolean,
    default: false,
  },
});

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
          Cambridge Building Group offers a comprehensive suite of construction
          services tailored to meet the diverse needs of our clients. From
          concept to completion, we apply our expertise at every stage of the
          building process.
        </p>
        <div class="flex">
          <button
            v-if="showButton"
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
