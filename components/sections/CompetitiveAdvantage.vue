<script setup>
import { ref } from "vue";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import { scrollToNextSection } from "~/utils/autoScroll";
import { advantages } from "~/data/siteData";

const props = defineProps({
  showButton: {
    type: Boolean,
    default: false,
  },
});

const activeAdvantage = ref(1);

function setActiveAdvantage(id) {
  activeAdvantage.value = id;
}

const getActiveAdvantage = () => {
  return advantages.find((adv) => adv.id === activeAdvantage.value);
};
</script>

<template>
  <section
    id="competitive-advantage"
    class="relative px-8 2xl:px-60 py-section"
  >
    <div class="container mx-auto py-block">
      <div class="flex flex-col lg:flex-row gap-12">
        <div class="w-full lg:w-1/3">
          <h2 class="text-5xl font-bold text-navy mb-4">
            Our Competitive Advantage
          </h2>
          <p class="text-lg text-slate-700 mb-6">
            What sets Cambridge Building Group apart is our unwavering
            commitment to excellence, innovation, and client satisfaction. Our
            competitive advantages drive successful outcomes for every project
            we undertake.
          </p>
          <div class="border-l-2 border-navy pl-4 my-8">
            <p class="text-lg text-slate-700 italic">
              "Building with Cambridge means partnering with a team that doesn't
              just meet industry standards—we exceed them. Our competitive edge
              translates directly to value and satisfaction for our clients."
            </p>
          </div>
          <button
            v-if="showButton"
            @click="scrollToNextSection('safety-on-the-job')"
            class="bg-navy group text-slate-300 font-semibold px-4 py-2 border-2 border-navy shadow-lg transition duration-200 hover:scale-115 cursor-pointer mt-4"
          >
            Safety First
            <ChevronRightIcon
              class="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200"
            />
          </button>
        </div>
        <div class="w-full lg:w-2/3">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <button
              v-for="advantage in advantages.slice(0, 3)"
              :key="advantage.id"
              @click="setActiveAdvantage(advantage.id)"
              class="py-3 px-4 text-left border-b-2 transition duration-200 flex items-center cursor-pointer"
              :class="
                activeAdvantage === advantage.id
                  ? 'border-navy text-navy font-semibold'
                  : 'border-slate-300 text-slate-600 hover:border-slate-500'
              "
            >
              <component
                :is="advantage.icon"
                class="size-5 mr-2"
                :class="
                  activeAdvantage === advantage.id
                    ? 'text-navy'
                    : 'text-slate-500'
                "
              />
              {{ advantage.title }}
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button
              v-for="advantage in advantages.slice(3)"
              :key="advantage.id"
              @click="setActiveAdvantage(advantage.id)"
              class="py-3 px-4 text-left border-b-2 transition duration-200 flex items-center cursor-pointer"
              :class="
                activeAdvantage === advantage.id
                  ? 'border-navy text-navy font-semibold'
                  : 'border-slate-300 text-slate-600 hover:border-slate-500'
              "
            >
              <component
                :is="advantage.icon"
                class="size-5 mr-2"
                :class="
                  activeAdvantage === advantage.id
                    ? 'text-navy'
                    : 'text-slate-500'
                "
              />
              {{ advantage.title }}
            </button>
          </div>
          <div
            class="bg-slate-100 p-8 shadow-lg border-l-4 border-navy relative overflow-hidden"
          >
            <component
              :is="getActiveAdvantage().icon"
              class="size-36 text-slate-200 absolute -bottom-6 -right-6 opacity-30"
            />
            <h3 class="text-3xl font-bold text-navy mb-4">
              {{ getActiveAdvantage().title }}
            </h3>
            <p class="text-lg text-slate-700 relative z-10">
              {{ getActiveAdvantage().description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
