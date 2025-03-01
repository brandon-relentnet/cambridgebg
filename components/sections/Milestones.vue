<script setup>
import { ChevronRightIcon, CalendarDateRangeIcon } from "@heroicons/vue/24/solid";
import { milestones } from "~/data/siteData";
</script>

<template>
    <section class="relative px-8 md:px-20 py-section" id="milestones">
      <div class="container mx-auto py-block">
        <div class="text-left md:text-center mb-12">
          <h2 class="text-5xl mb-4 font-bold text-navy">The Building Blocks</h2>
          <p class="text-lg text-slate-700">
            Discover the milestones that have shaped our journey and built the
            foundation of our success.
          </p>
        </div>
        <ol
          class="items-start lg:flex border-s-2 lg:border-none border-slate-700"
        >
          <li
            v-for="milestone in milestones"
            :key="milestone.id"
            class="relative mb-6 lg:mb-0 group cursor-pointer"
          >
            <NuxtLink :to="milestone.link" class="flex items-center lg:block">
              <div class="flex items-center -ml-5 mr-2 lg:mr-0 lg:ml-0">
                <div
                  class="z-10 flex items-center justify-center size-10 rounded-full bg-slate-200 group-hover:bg-navy border-2 border-navy shrink-0 transition duration-200 ring-8 ring-slate-200"
                >
                  <CalendarDateRangeIcon
                    class="size-5 text-navy group-hover:text-slate-300 transition duration-200"
                  />
                </div>
                <div class="hidden lg:flex w-full h-0.5 bg-slate-700"></div>
              </div>
              <div
                class="mt-3 lg:pe-2 border-2 group-hover:border-slate-700 p-4 border-transparent transition duration-200 mr-2"
              >
                <ChevronRightIcon
                  class="size-5 hidden group-hover:block text-navy transition duration-200 absolute lg:top-18 top-8 right-6"
                />
                <h3 class="text-lg font-semibold text-navy">
                  {{ milestone.title }}
                </h3>
                <time
                  class="block mb-2 text-md font-normal italic leading-none text-slate-500"
                >
                  {{ milestone.year }}
                </time>
                <p class="text-base font-normal text-slate-700">
                  {{ milestone.description }}
                </p>
              </div>
            </NuxtLink>
          </li>
        </ol>
        <div class="flex justify-center items-center">
        <button
          @click="scrollToNextSection('combined-experience')"
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