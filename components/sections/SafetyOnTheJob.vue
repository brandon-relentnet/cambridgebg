<script setup>
import { ref } from "vue";
import { ChevronRightIcon, ShieldCheckIcon } from "@heroicons/vue/24/solid";
import { scrollToNextSection } from "~/utils/autoScroll";

const safetyMetrics = [
  { id: 1, label: "Incident Free Days", value: "850+", icon: "CalendarIcon" },
  {
    id: 2,
    label: "Safety Training Hours",
    value: "8,500+",
    icon: "AcademicCapIcon",
  },
  {
    id: 3,
    label: "Safety Certifications",
    value: "100%",
    icon: "DocumentCheckIcon",
  },
  {
    id: 4,
    label: "Industry Safety Rating",
    value: "Top 5%",
    icon: "ChartBarIcon",
  },
];

const safetyPractices = [
  {
    id: 1,
    title: "Comprehensive Training",
    description:
      "Every team member completes extensive safety training before entering any job site, with regular refresher courses to keep safety knowledge current.",
  },
  {
    id: 2,
    title: "Daily Safety Briefings",
    description:
      "Each workday begins with a detailed safety briefing addressing site-specific risks and hazard mitigation strategies.",
  },
  {
    id: 3,
    title: "Regular Safety Audits",
    description:
      "Our dedicated safety officers conduct weekly inspections across all projects to identify and address potential safety concerns.",
  },
  {
    id: 4,
    title: "Advanced Equipment",
    description:
      "We invest in the latest safety equipment and personal protective gear to ensure optimal protection for our workforce.",
  },
  {
    id: 5,
    title: "Incident Response Protocol",
    description:
      "In the rare event of an incident, our comprehensive response protocols ensure immediate action and thorough investigation to prevent recurrence.",
  },
  {
    id: 6,
    title: "Subcontractor Vetting",
    description:
      "We partner only with subcontractors who demonstrate the same unwavering commitment to safety excellence.",
  },
];
</script>

<template>
  <section
    id="safety-on-the-job"
    class="relative px-8 2xl:px-60 py-section bg-slate-800 text-slate-300"
  >
    <div class="container mx-auto py-block">
      <div class="flex flex-col md:flex-row justify-between items-start mb-16">
        <div class="w-full md:w-2/3 mb-6 md:mb-0">
          <div class="flex items-center mb-4">
            <ShieldCheckIcon class="size-12 text-slate-300 mr-4" />
            <h2 class="text-5xl font-bold">Safety on the Job Site</h2>
          </div>
          <p class="text-xl">
            At Cambridge Construction, safety isn't just a priority—it's a core
            value ingrained in every aspect of our operations. We maintain an
            unwavering commitment to creating and maintaining safe work
            environments for our team members, clients, and communities.
          </p>
        </div>
        <button
          @click="scrollToNextSection('industry-awards')"
          class="bg-slate-300 group text-navy font-semibold px-4 py-2 border-2 border-slate-300 shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
        >
          Our Achievements
          <ChevronRightIcon
            class="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200"
          />
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <div
          v-for="metric in safetyMetrics"
          :key="metric.id"
          class="bg-navy p-6 shadow-lg border-l-4 border-slate-500 text-center"
        >
          <component
            :is="metric.icon"
            class="size-12 text-slate-300 mx-auto mb-4"
          />
          <p class="text-5xl font-bold mb-2">{{ metric.value }}</p>
          <p class="text-lg text-slate-400">{{ metric.label }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div
          v-for="practice in safetyPractices"
          :key="practice.id"
          class="bg-slate-700 p-6 shadow-lg"
        >
          <h3 class="text-2xl font-bold mb-3 border-b border-slate-600 pb-3">
            {{ practice.title }}
          </h3>
          <p class="text-slate-300">{{ practice.description }}</p>
        </div>
      </div>

      <div class="bg-navy p-10 shadow-lg border-l-4 border-slate-300">
        <blockquote class="text-2xl italic font-light">
          "Our perfect safety record isn't achieved by chance—it's the result of
          rigorous standards, continuous improvement, and a culture where every
          team member is empowered to prioritize safety above all else."
        </blockquote>
        <p class="text-right mt-4 text-slate-400">
          — Jason Hall, Director of Safety Operations
        </p>
      </div>
    </div>
  </section>
</template>
