<script setup>
import { ref, computed } from "vue";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import { scrollToNextSection } from "~/utils/autoScroll";
import { coreValues } from "~/data/siteData";

const activeValue = ref(coreValues[0].id);

function setActiveValue(id) {
  activeValue.value = id;
}

const getActiveValue = computed(() => {
  return coreValues.find((val) => val.id === activeValue.value);
});
</script>

<template>
  <section
    id="core-values"
    class="relative px-8 2xl:px-60 py-section bg-slate-800 text-slate-300"
  >
    <div class="container mx-auto py-block">
      <div class="w-full md:w-1/3 text-left md:text-center mx-auto mb-12">
        <h2 class="text-5xl font-bold mb-4">Our Core Values</h2>
        <p class="text-lg">
          The guiding principles that shape our work and define our legacy.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <!-- Values Navigation - Sidebar -->
        <div class="lg:col-span-1 flex flex-col space-y-2">
          <button
            v-for="value in coreValues"
            :key="`nav-${value.id}`"
            @click="setActiveValue(value.id)"
            class="flex items-center p-4 text-left transition-all duration-200 border-l-4"
            :class="
              activeValue === value.id
                ? 'bg-navy border-slate-300 shadow-md'
                : 'bg-transparent border-transparent hover:border-slate-600 hover:bg-slate-700'
            "
          >
            <component
              :is="value.icon"
              class="size-5 mr-3"
              :class="
                activeValue === value.id ? 'text-slate-300' : 'text-slate-400'
              "
            />
            <span
              class="font-semibold"
              :class="
                activeValue === value.id ? 'text-slate-300' : 'text-slate-400'
              "
            >
              {{ value.title }}
            </span>
          </button>
        </div>

        <!-- Active Value Content - Main Content -->
        <div class="lg:col-span-4">
          <div
            class="bg-navy shadow-lg border-l-4 border-slate-400 p-8 h-full relative overflow-hidden"
          >
            <!-- Background Icon -->
            <component
              :is="getActiveValue.icon"
              class="absolute -bottom-10 -right-10 size-60 text-slate-800 opacity-10"
            />

            <!-- Content -->
            <div class="relative z-10">
              <div class="flex items-center mb-6">
                <component
                  :is="getActiveValue.icon"
                  class="size-10 text-slate-300 mr-4"
                />
                <div>
                  <h3 class="text-3xl font-bold">{{ getActiveValue.title }}</h3>
                  <p class="text-xl text-slate-400 italic">
                    {{ getActiveValue.tagline }}
                  </p>
                </div>
              </div>

              <div
                class="text-lg leading-relaxed"
                v-html="getActiveValue.description"
              ></div>

              <!-- Example of how the value is applied -->
              <div class="mt-8 pt-6 border-t border-slate-700">
                <h4 class="text-xl font-semibold mb-3">
                  How We Apply This Value:
                </h4>
                <div class="flex items-start">
                  <span class="bg-slate-700 p-1 rounded-full mr-3">
                    <ChevronRightIcon class="size-4 text-slate-300" />
                  </span>
                  <p>
                    {{
                      getActiveValue.application ||
                      "This core value guides our approach to every project, influencing how we interact with clients, collaborate with partners, and deliver our services."
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center mt-12">
        <button
          @click="scrollToNextSection('milestones')"
          class="bg-slate-300 group text-navy font-semibold px-4 py-2 border-2 border-slate-300 shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
        >
          Milestones
          <ChevronRightIcon
            class="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200"
          />
        </button>
      </div>
    </div>
  </section>
</template>
