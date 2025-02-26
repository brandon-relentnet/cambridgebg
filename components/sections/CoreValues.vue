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
    class="relative px-8 2xl:px-60 py-section bg-slate-300 border-t-4 border-b-4 border-slate-400"
  >
    <div class="container mx-auto py-block">
      <div class="w-full md:w-1/3 text-left md:text-center mx-auto mb-12">
        <h2 class="text-5xl font-bold text-navy mb-4">Our Core Values</h2>
        <p class="text-lg text-slate-800">
          The guiding principles that shape our work and define our legacy.
        </p>
      </div>
      <ul class="list-style-none m-0 p-0 max-w-200 mx-auto mb-12">
        <li
          class="border-2 border-navy block overflow-hidden mb-2 cursor-pointer"
          v-for="value in coreValues"
          :key="value.id"
          v-auto-animate
        >
          <div
            class="question text-navy text-3xl font-semibold p-4"
            @click="toggleCard(value.id)"
          >
            <component
              :is="value.icon"
              class="size-6 inline-block mr-2 text-navy"
            />
            <h3 class="text-2xl font-semibold text-navy inline-block">
              {{ value.title }}
            </h3>
            <p class="text-lg text-slate-700 italic mt-2">
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
            class="text-lg pb-6 px-6 text-slate-800"
            v-if="value.id === currentCard"
            v-html="value.description"
          />
        </li>
      </ul>
      <div class="flex justify-center items-center">
        <button
          @click="scrollToNextSection('milestones')"
          class="bg-navy group text-slate-300 font-semibold px-4 py-2 border-2 border-navy shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
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
