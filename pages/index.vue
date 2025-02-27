<script setup>
import { ref, computed } from "vue";
import { useWindowScroll } from "@vueuse/core";
import {
  DocumentCheckIcon,
  ChevronRightIcon,
  CalendarDateRangeIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  StarIcon,
  ChevronDownIcon,
} from "@heroicons/vue/24/solid";
import { vAutoAnimate } from "@formkit/auto-animate";

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

const coreValues = ref([
  {
    id: 1,
    title: "Integrity",
    tagline: "Honesty is our foundation",
    icon: ShieldCheckIcon,
    description:
      "We uphold honesty and transparency in every project. Our work stands as a testament to our ethical practices and unwavering commitment to excellence. We believe in doing the right thing even when no one is watching, ensuring lasting trust with our clients and partners.",
  },
  {
    id: 2,
    title: "Innovation",
    tagline: "Building tomorrow, today",
    icon: LightBulbIcon,
    description:
      "By embracing creative solutions and leveraging cutting‑edge technology, we continuously redefine industry standards and pioneer new approaches in construction. We never stop evolving, ensuring that our designs remain at the forefront of modern architecture.",
  },
  {
    id: 3,
    title: "Excellence",
    tagline: "Perfection in every detail",
    icon: StarIcon,
    description:
      "We strive for perfection in every project, blending advanced technology with artisanal craftsmanship to deliver results that exceed expectations. Our pursuit of excellence is reflected in every brick we lay and every structure we create.",
  },
]);

const currentCard = ref(null);

function toggleCard(id) {
  currentCard.value = currentCard.value === id ? null : id;
}

function handleImageLoad() {
  imageVisible.value = true;
}

const scrollToNextSection = () => {
  const nextSectionEl = document.getElementById(
    "who-is-cambridge-construction"
  );
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
      class="relative mt-15 sm:mt-25 md:mt-10 lg:mt-15 xl:mt-20 2xl:mt-20 3xl:mt-30 4xl:mt-100 p-8 md:p-20 pb-section"
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
            <p class="text-lg text-slate-700">
              From modern commercial developments to timeless residential
              masterpieces, we prioritize safety, sustainability, and community
              enrichment. Our approach blends cutting‑edge technology with
              traditional craftsmanship to deliver projects that not only meet
              but exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Core Values -->
    <section id="core-values" class="relative px-8 2xl:px-60 py-section bg-slate-300 border-t-4 border-b-4 border-slate-400">
      <div class="container mx-auto py-block">
        <div class="w-full md:w-1/3 text-left md:text-center mx-auto mb-12">
          <h2 class="text-5xl font-bold text-navy mb-4">Our Core Values</h2>
          <p class="text-lg text-slate-800">
            The guiding principles that shape our work and define our legacy.
          </p>
        </div>
        <ul class="list-style-none m-0 p-0 max-w-200 mx-auto">
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
      </div>
    </section>

    <!-- 3. Milestones -->
    <section class="relative p-8 md:p-20 py-[6vw]" id="milestones">
      <div class="container mx-auto">
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
                  class="z-10 flex items-center justify-center size-10 rounded-full bg-slate-300 group-hover:bg-navy border-2 border-navy shrink-0 transition duration-200 ring-8 ring-slate-300"
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

[data-dark-mode="true"] li {
  background-color: var(--purple-d);
}
</style>
