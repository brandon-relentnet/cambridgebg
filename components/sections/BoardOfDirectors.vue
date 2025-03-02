<script setup>
import { ref } from "vue";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import { scrollToNextSection } from "~/utils/autoScroll";
import { vAutoAnimate } from "@formkit/auto-animate";
import { directors } from "~/data/siteData";

const props = defineProps({
  showButton: {
    type: Boolean,
    default: false
  }
});

const expandedDirector = ref(null);

function toggleDirector(id) {
  expandedDirector.value = expandedDirector.value === id ? null : id;
}
</script>

<template>
  <section
    id="board-of-directors"
    class="relative px-8 2xl:px-60 py-section bg-slate-800 text-slate-300"
  >
    <div class="container mx-auto py-block">
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
      >
        <div class="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 class="text-5xl font-bold mb-4">Board of Directors</h2>
          <p class="text-lg">
            Cambridge Building Group is guided by a diverse board of directors
            with extensive experience in construction, business management,
            finance, and innovation—ensuring strong governance and strategic
            direction.
          </p>
        </div>
        <button
          v-if="showButton"
          @click="scrollToNextSection('community-outreach')"
          class="bg-slate-300 group text-navy font-semibold px-4 py-2 border-2 border-slate-300 shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
        >
          Community Impact
          <ChevronRightIcon
            class="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200"
          />
        </button>
      </div>

      <!-- Board Structure Overview -->
      <div class="bg-navy p-6 shadow-lg mb-10 border-l-4 border-slate-400">
        <h3 class="text-2xl font-bold mb-4">Board Structure</h3>
        <p class="mb-4">
          Cambridge Building Group maintains a balanced board composition with
          both company leadership and independent directors, ensuring effective
          oversight and diverse perspectives. The board operates through the
          following committees:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
          <div class="bg-slate-700 p-4">
            <h4 class="text-lg font-semibold mb-2">Audit Committee</h4>
            <p class="text-slate-400">
              Oversees financial reporting, risk management, and compliance
            </p>
          </div>
          <div class="bg-slate-700 p-4">
            <h4 class="text-lg font-semibold mb-2">Governance Committee</h4>
            <p class="text-slate-400">
              Manages board composition, governance policies, and succession
              planning
            </p>
          </div>
          <div class="bg-slate-700 p-4">
            <h4 class="text-lg font-semibold mb-2">
              Strategic Planning Committee
            </h4>
            <p class="text-slate-400">
              Guides long-term strategy, growth initiatives, and market
              positioning
            </p>
          </div>
        </div>
      </div>

      <!-- Board Members -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="director in directors"
          :key="director.id"
          v-auto-animate
          class="bg-navy shadow-md relative overflow-hidden cursor-pointer group"
          :class="
            expandedDirector === director.id
              ? 'border-l-4 border-slate-300'
              : 'border-l-4 border-transparent hover:border-slate-600'
          "
          style="height: fit-content"
        >
          <div
            class="p-5 flex items-center justify-between"
            @click="toggleDirector(director.id)"
          >
            <div>
              <h3 class="text-xl font-bold">{{ director.name }}</h3>
              <p class="text-slate-400">{{ director.title }}</p>
            </div>
            <div>
              <ChevronRightIcon
                class="size-5 text-slate-300 transition-transform duration-200"
                :class="{ 'rotate-90': expandedDirector === director.id }"
              />
            </div>
          </div>

          <div
            v-if="expandedDirector === director.id"
            class="px-5 pb-5 border-t border-slate-700 z-10 relative"
          >
            <div class="mt-3">
              <h4 class="text-lg font-semibold mb-1">Areas of Expertise</h4>
              <p class="text-slate-400 mb-3">{{ director.expertise }}</p>

              <h4 class="text-lg font-semibold mb-1">Background</h4>
              <p class="text-slate-400 mb-3">{{ director.background }}</p>

              <h4 class="text-lg font-semibold mb-1">Notable Achievements</h4>
              <p class="text-slate-400">{{ director.highlights }}</p>
            </div>
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
