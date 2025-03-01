<script setup>
import { vAutoAnimate } from "@formkit/auto-animate";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import { coreValues } from "~/data/siteData";
import { scrollToNextSection } from "~/utils/autoScroll";

const currentCard = ref(null);

function toggleCard(id) {
  currentCard.value = currentCard.value === id ? null : id;
}
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
      <ul class="list-style-none m-0 p-0 max-w-200 mx-auto mb-10">
        <li
          class="border-l-4 border-slate-400 block overflow-hidden mb-2 cursor-pointer bg-navy"
          v-for="value in coreValues"
          :key="value.id"
          v-auto-animate
        >
          <div
            class="question text-3xl font-semibold p-6"
            @click="toggleCard(value.id)"
          >
            <component :is="value.icon" class="size-6 inline-block mr-2" />
            <h3 class="text-2xl font-semibold inline-block">
              {{ value.title }}
            </h3>
            <p class="text-lg text-slate-400 italic mt-2">
              {{ value.tagline }}
            </p>
            <ChevronDownIcon
              class="size-5 absolute top-11 right-4 ml-2 transition-transform duration-200"
              :class="{
                'rotate-180': value.id === currentCard,
              }"
            />
          </div>
          <p
            class="text-lg pb-6 px-6"
            v-if="value.id === currentCard"
            v-html="value.description"
          />
        </li>
      </ul>
      <div class="flex justify-center items-center">
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
