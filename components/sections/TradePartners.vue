<script setup>
import { ref, computed } from "vue";
import {
  ChevronRightIcon,
  BuildingStorefrontIcon,
} from "@heroicons/vue/24/solid";
import { scrollToNextSection } from "~/utils/autoScroll";
import { tradeCategories } from "~/data/siteData";

const activeCategory = ref(tradeCategories[0].id);

function setActiveCategory(id) {
  activeCategory.value = id;
}

// Computed property to get the active category
const currentCategory = computed(() => {
  return (
    tradeCategories.find((category) => category.id === activeCategory.value) ||
    tradeCategories[0]
  );
});
</script>

<template>
  <section
    id="trade-partners"
    class="relative px-8 2xl:px-60 py-section bg-slate-800 text-slate-300"
  >
    <div class="container mx-auto py-block">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <div class="flex items-center mb-4">
            <BuildingStorefrontIcon class="size-10 text-slate-300 mr-4" />
            <h2 class="text-5xl font-bold mb-4">Trade Partners</h2>
          </div>
          <p class="text-lg mb-6">
            Cambridge Construction has established strong relationships with
            best-in-class subcontractors and suppliers across every specialty.
            Our carefully vetted trade partners share our commitment to quality,
            safety, and client satisfaction.
          </p>
          <div class="border-l-2 border-slate-400 pl-4 my-8">
            <p class="text-lg italic">
              "The strength of our trade partner network allows us to assemble
              the perfect team for each project, ensuring specialized expertise
              and consistent quality across all aspects of construction."
            </p>
          </div>
          <button
            @click="scrollToNextSection('company-history')"
            class="bg-slate-300 group text-navy font-semibold px-4 py-2 border-2 border-slate-300 shadow-lg transition duration-200 hover:scale-115 cursor-pointer mt-4"
          >
            Our History
            <ChevronRightIcon
              class="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200"
            />
          </button>
        </div>

        <div class="bg-navy p-6 shadow-lg border-l-4 border-slate-400">
          <h3 class="text-2xl font-bold mb-6 pb-3 border-b border-slate-600">
            Our Trusted Network
          </h3>

          <div class="flex flex-wrap gap-2 mb-6">
            <button
              v-for="category in tradeCategories"
              :key="`nav-${category.id}`"
              @click="setActiveCategory(category.id)"
              class="px-3 py-1 text-sm font-medium rounded-full transition duration-200 cursor-pointer"
              :class="
                activeCategory === category.id
                  ? 'bg-slate-300 text-navy'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              "
            >
              {{ category.name }}
            </button>
          </div>

          <!-- Replace v-for with v-show approach with computed property -->
          <div>
            <h4 class="text-xl font-semibold mb-4">
              {{ currentCategory.name }} Partners
            </h4>
            <ul class="space-y-3">
              <li
                v-for="(partner, index) in currentCategory.partners"
                :key="index"
                class="flex items-center"
              >
                <span class="w-2 h-2 bg-slate-300 rounded-full mr-3"></span>
                <span>{{ partner }}</span>
              </li>
            </ul>
            <p class="text-slate-400 font-medium mt-6">
              * All partners undergo rigorous qualification and maintain our
              high standards for quality and safety.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
