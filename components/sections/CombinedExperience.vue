<script setup>
import { ref, onMounted } from "vue";
import { ChartPieIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import { scrollToNextSection } from "~/utils/autoScroll";

const years = ref(0);
const target = 120; // Total years of combined experience
const projects = ref(0);
const projectsTarget = 350; // Total projects completed
const duration = 2000;

onMounted(() => {
  const yearsIncrement = target / (duration / 50);
  const projectsIncrement = projectsTarget / (duration / 50);

  const yearsInterval = setInterval(() => {
    years.value += yearsIncrement;
    if (years.value >= target) {
      years.value = target;
      clearInterval(yearsInterval);
    }
  }, 50);

  const projectsInterval = setInterval(() => {
    projects.value += projectsIncrement;
    if (projects.value >= projectsTarget) {
      projects.value = projectsTarget;
      clearInterval(projectsInterval);
    }
  }, 50);
});
</script>

<template>
  <section
    id="combined-experience"
    class="relative px-8 2xl:px-60 py-section bg-slate-800 text-slate-300"
  >
    <div class="container mx-auto py-block">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-5xl font-bold mb-4">Combined Experience</h2>
          <p class="text-lg mb-6">
            At Cambridge Construction, our team brings decades of expertise to
            every project. Our combined knowledge and experience ensure each
            build benefits from time-tested wisdom and innovative approaches.
          </p>
          <div class="border-l-2 border-slate-400 pl-4 mt-8">
            <p class="text-lg mb-4">
              Our leadership team includes seasoned project managers, master
              builders, award-winning architects, and specialized engineers,
              creating a powerhouse of construction knowledge under one roof.
            </p>
            <p class="text-lg">
              From historic renovations to cutting-edge commercial spaces, our
              collective expertise allows us to tackle any challenge with
              confidence and precision.
            </p>
          </div>
          <button
            @click="scrollToNextSection('services-provided')"
            class="bg-slate-300 group text-navy font-semibold px-4 py-2 border-2 border-slate-300 shadow-lg transition duration-200 hover:scale-115 cursor-pointer mt-8"
          >
            Our Services
            <ChevronRightIcon
              class="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200"
            />
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            class="bg-navy p-8 shadow-lg border-l-4 border-slate-500 relative overflow-hidden"
          >
            <ChartPieIcon
              class="size-20 text-slate-600 absolute -bottom-2 -right-2 opacity-30"
            />
            <h3 class="text-2xl font-bold mb-2">Years of Experience</h3>
            <p class="text-6xl font-bold mb-2">{{ Math.floor(years) }}+</p>
            <p class="text-slate-400">Combined industry expertise</p>
          </div>
          <div
            class="bg-navy p-8 shadow-lg border-l-4 border-slate-500 relative overflow-hidden"
          >
            <ChartPieIcon
              class="size-20 text-slate-600 absolute -bottom-2 -right-2 opacity-30"
            />
            <h3 class="text-2xl font-bold mb-2">Projects Completed</h3>
            <p class="text-6xl font-bold mb-2">{{ Math.floor(projects) }}+</p>
            <p class="text-slate-400">Successful builds nationwide</p>
          </div>
          <div class="bg-navy p-8 shadow-lg border-l-4 border-slate-500">
            <h3 class="text-2xl font-bold mb-2">Certifications</h3>
            <ul class="list-disc list-inside">
              <li>LEED Certified Professionals</li>
              <li>Licensed Master Builders</li>
              <li>Certified Project Managers</li>
            </ul>
          </div>
          <div class="bg-navy p-8 shadow-lg border-l-4 border-slate-500">
            <h3 class="text-2xl font-bold mb-2">Industry Expertise</h3>
            <ul class="list-disc list-inside">
              <li>Commercial Construction</li>
              <li>Luxury Residential</li>
              <li>Industrial & Manufacturing</li>
              <li>Historic Renovation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
