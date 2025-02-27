<script setup>
import { ref, computed } from "vue";
import { useWindowScroll } from "@vueuse/core";
import {
  DocumentCheckIcon,
  ChevronRightIcon,
  CalendarDateRangeIcon,
} from "@heroicons/vue/24/solid";

const { y } = useWindowScroll();
const imageVisible = ref(false);

const milestones = ref([
  {
    id: 1,
    year: "2000",
    title: "Founded",
    description:
      "In 2000, our company was established by a group of visionary builders who recognized the need for integrity and craftsmanship in construction. Their passion for quality laid the cornerstone of our success.",
    link: "/about/founded",
  },
  {
    id: 2,
    year: "2005",
    title: "First Major Project",
    description:
      "In 2005, we transformed an outdated office complex into a state-of-the-art, energy-efficient workspace. This breakthrough project marked our entry into large-scale developments and set the stage for innovative design.",
    link: "/portfolio/first-major-project",
  },
  {
    id: 3,
    year: "2010",
    title: "Expanded Nationally",
    description:
      "By 2010, our reputation had grown to national prominence. We expanded our operations across the country, launching regional offices and tailoring our services to meet the diverse needs of different markets.",
    link: "/about/expansion",
  },
  {
    id: 4,
    year: "2015",
    title: "Award Winning",
    description:
      "In 2015, our unwavering commitment to excellence was recognized with a prestigious industry award. This honor validated our innovative design and superior construction methods, cementing our leadership in the field.",
    link: "/awards",
  },
  {
    id: 5,
    year: "2020",
    title: "Global Reach",
    description:
      "By 2020, we had extended our expertise beyond national borders. Our international projects showcased our adaptability and set new benchmarks in quality, proving that our vision truly knows no limits.",
    link: "/global",
  },
]);

function handleImageLoad() {
  imageVisible.value = true;
}

const scrollToNextSection = () => {
  const nextSectionEl = document.getElementById("next-section");
  nextSectionEl?.scrollIntoView({ behavior: "smooth" });
};

const parallaxStyle = computed(() => {
  return { transform: `translateY(-${y.value * 0.3}px)` };
});
</script>

<template>
  <!-- *Planned sections layout* -->
  <!-- 0. Hero Section -->
  <!-- 1. Who is Cambridge Construction? -->
  <!-- 2. Core Values -->
  <!-- 3. Milestones Section -->
  <!-- 4. Combined Experience Section -->
  <!-- 5. Services Provided -->
  <!-- 6. Markets We Serve -->
  <!-- 7. Competitive Advantage -->
  <!-- 8. Safety on the Job Site -->
  <!-- 9. Industry Awards -->
  <!-- 10. Case Studies -->
  <!-- 11. Past Clients -->
  <!-- 12. Trade Partners -->
  <!-- 13. Company History -->
  <!-- 14. Leadership Bios -->
  <!-- 15. Board of Directors -->
  <!-- 16. Community Outreach -->
  <div>
    <!-- 0. Hero Section -->
    <section>
      <div class="relative h-[92vh] flex items-center justify-center text-navy">
        <div
          ref="imageRef"
          class="absolute inset-0 transition-transform duration-700 z-0 ease-out"
          :class="{
            'translate-y-[100vh] opacity-0': !imageVisible,
            'translate-y-[76vh] sm:translate-y-[66vh] md:translate-y-[59vh] lg:translate-y-[49vh] xl:translate-y-[39vh] 2xl:translate-y-[29vh] opacity-100':
              imageVisible,
          }"
          :style="parallaxStyle"
        >
          <NuxtImg
            src="/nashville-skyline.svg"
            alt="Nashville Skyline"
            class="w-full h-auto opacity-70"
            quality="100"
            @load="handleImageLoad"
          />
        </div>
        <div
          class="relative flex flex-col justify-center items-center gap-y-4 z-2 text-center px-6 md:px-12 pb-50 p-6 animate-fade-in container mx-auto"
        >
          <NuxtImg
            src="/cbg-logo-transparent.png"
            alt="Logo"
            quality="100"
            sizes="md:400px lg:600px 275px"
            format="webp"
          />
          <div class="grid grid-cols-2 gap-x-4">
            <button
              @click="scrollToNextSection"
              class="bg-navy group text-slate-300 font-semibold px-4 py-2 border-2 border-navy shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
            >
              Learn More
              <ChevronRightIcon
                class="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200"
              />
            </button>
            <NuxtLink
              to="/contact"
              class="border-2 border-navy group text-navy font-semibold px-4 py-2 shadow-lg transition duration-200 hover:scale-115 flex items-center justify-center"
            >
              Free Quote
              <DocumentCheckIcon
                class="size-5 ml-2 inline-block transition duration-200"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 1. Who is Cambridge Construction? -->
    <section
      class="relative mt-15 sm:mt-25 md:mt-10 lg:mt-15 xl:mt-20 2xl:mt-40 3xl:mt-60 4xl:mt-100 p-8 md:p-20 mb-[6vw]"
      id="who-is-cambridge-construction"
    ></section>

    <section>
      <div
        class="relative p-8 md:p-20 my-[6vw]"
        id="milestones"
      >
        <div class="container mx-auto">
          <div class="text-left md:text-center mb-12">
            <h2 class="text-3xl font-bold text-navy">Our Building Blocks</h2>
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
                    class="z-10 flex items-center justify-center size-10 rounded-full bg-slate-400 group-hover:bg-navy border-2 border-navy shrink-0 transition duration-200 ring-8 ring-slate-400"
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
        </div>
      </div>
    </section>
  </div>
</template>

<style>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}
</style>
