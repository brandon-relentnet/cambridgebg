<script setup>
import { ref } from "vue";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import { vAutoAnimate } from "@formkit/auto-animate";
import { scrollToNextSection } from "~/utils/autoScroll";
import { markets } from "~/data/siteData";

const activeMarket = ref(null);

function setActiveMarket(id) {
  activeMarket.value = activeMarket.value === id ? null : id;
}
</script>

<template>
  <section
    id="markets-we-serve"
    class="relative px-8 2xl:px-60 py-section bg-slate-800 text-slate-300"
  >
    <div class="container mx-auto py-block">
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
      >
        <div class="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 class="text-5xl font-bold mb-4">Markets We Serve</h2>
          <p class="text-lg">
            Cambridge Construction delivers specialized expertise across diverse
            industry sectors, understanding the unique challenges and
            requirements of each market.
          </p>
        </div>
        <button
          @click="scrollToNextSection('competitive-advantage')"
          class="bg-slate-300 group text-navy font-semibold px-4 py-2 border-2 border-slate-300 shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
        >
          Our Advantage
          <ChevronRightIcon
            class="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200"
          />
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="market in markets"
          :key="market.id"
          v-auto-animate
          :class="[
            market.bgClass,
            'relative overflow-hidden shadow-lg cursor-pointer group',
            { 'has-active-content': activeMarket === market.id },
          ]"
          style="height: fit-content"
        >
          <div class="p-6 z-10 relative" @click="setActiveMarket(market.id)">
            <div class="flex justify-between items-start">
              <h3 class="text-2xl font-bold text-navy mb-1">
                {{ market.title }}
              </h3>
              <div
                class="bg-navy text-slate-300 px-2 py-1 text-sm font-semibold whitespace-nowrap"
              >
                {{ market.projects }} projects
              </div>
            </div>
            <div
              class="h-1 w-12 bg-navy mt-3 transition-all duration-300"
              :class="{ 'w-full': activeMarket === market.id }"
            ></div>
          </div>
          <div
            v-if="activeMarket === market.id"
            class="px-6 pb-6 z-10 relative"
          >
            <p class="text-slate-700 transition-all duration-300">
              {{ market.description }}
            </p>
          </div>
          <div
            class="absolute top-0 right-0 opacity-10 transition-transform duration-500"
            :class="{ 'scale-110': activeMarket === market.id }"
          >
            <ChevronRightIcon class="size-24 text-navy transform rotate-45" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid > div {
  align-self: flex-start;
}
</style>
