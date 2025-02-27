<script setup>
import { scrollToNextSection } from "~/utils/autoScroll";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <section
    class="scroll-m-20 xl:scroll-m-70 relative mt-15 sm:mt-25 md:mt-10 lg:mt-15 xl:mt-20 2xl:mt-20 3xl:mt-30 4xl:mt-100 px-8 md:px-20 pb-section"
    id="who-is-cambridge-construction"
  >
    <div
      class="container mx-auto px-6 2xl:px-54 flex flex-col lg:flex-row items-center gap-12 py-block"
    >
      <div class="w-full lg:w-1/2">
        <NuxtImg
          src="/cambridge-team.jpg"
          alt="Cambridge Construction Team"
          class="w-full shadow-left rounded-sm"
          quality="100"
        />
      </div>
      <div class="w-full lg:w-1/2">
        <h2 class="text-5xl font-bold text-navy mb-4">
          <span class="italic">Who is</span> Cambridge Construction?
        </h2>
        <div class="border-l-2 border-slate-700 pl-4">
          <p class="text-lg text-slate-700 mb-4">
            Cambridge Construction is a premier building company renowned for
            its innovative designs and unwavering commitment to quality. With
            decades of combined experience, our team of experts transforms
            visions into structures that inspire and endure.
          </p>
          <p class="text-lg text-slate-700 mb-4">
            From modern commercial developments to timeless residential
            masterpieces, we prioritize safety, sustainability, and community
            enrichment. Our approach blends cutting‑edge technology with
            traditional craftsmanship to deliver projects that not only meet but
            exceed expectations.
          </p>
          <button
            @click="scrollToNextSection('core-values')"
            class="bg-navy group text-slate-300 font-semibold px-4 py-2 border-2 border-navy shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
          >
            Our Values
            <ChevronRightIcon
              class="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
