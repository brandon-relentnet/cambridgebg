<script setup>
import { ref, computed } from "vue";
import {
  ChevronRightIcon,
  BuildingStorefrontIcon,
} from "@heroicons/vue/24/solid";
import { scrollToNextSection } from "~/utils/autoScroll";
import { tradeCategories } from "~/data/siteData";

const props = defineProps({
  showButton: {
    type: Boolean,
    default: false,
  },
});

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
    class="relative bg-slate-800 px-8 2xl:px-60 py-section text-slate-300"
  >
    <div class="py-block mx-auto container">
      <div class="items-start gap-12 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div class="flex items-center mb-4">
            <BuildingStorefrontIcon class="mr-4 size-10 text-slate-300" />
            <h2 class="mb-4 font-bold text-5xl">Trade Partners</h2>
          </div>
          <p class="mb-6 text-lg">
            Cambridge Building Group has established strong relationships with
            best-in-class subcontractors and suppliers across every specialty.
            Our carefully vetted trade partners share our commitment to quality,
            safety, and client satisfaction.
          </p>
          <div class="my-8 pl-4 border-slate-400 border-l-2">
            <p class="text-lg italic">
              "The strength of our trade partner network allows us to assemble
              the perfect team for each project, ensuring specialized expertise
              and consistent quality across all aspects of construction."
            </p>
          </div>
        </div>

        <div class="bg-navy shadow-lg p-6 border-slate-400 border-l-4">
          <h3 class="mb-6 pb-3 border-slate-600 border-b font-bold text-2xl">
            Our Trusted Network
          </h3>

          <div class="flex flex-wrap gap-2 mb-6">
            <button
              v-for="category in tradeCategories"
              :key="`nav-${category.id}`"
              @click="setActiveCategory(category.id)"
              class="px-3 py-1 rounded-full font-medium text-sm transition duration-200 cursor-pointer"
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
            <h4 class="mb-4 font-semibold text-xl">
              {{ currentCategory.name }}
            </h4>
            <ul class="space-y-3">
              <li
                v-for="(partner, index) in currentCategory.partners"
                :key="index"
                class="flex items-center"
              >
                <span class="bg-slate-300 mr-3 rounded-full w-2 h-2"></span>
                <span>{{ partner }}</span>
              </li>
            </ul>
            <p class="mt-6 font-medium text-slate-400">
              * All partners undergo rigorous qualification and maintain our
              high standards for quality and safety.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
