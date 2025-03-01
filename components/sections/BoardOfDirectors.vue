<script setup>
import { ref } from "vue";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import { scrollToNextSection } from "~/utils/autoScroll";
import { vAutoAnimate } from "@formkit/auto-animate";

const directors = [
  {
    id: 1,
    name: "James Cambridge",
    title: "Founder & Chairman",
    expertise: "Construction Management, Business Development",
    background:
      "Founded Cambridge Construction in 1985 after 15 years working in various roles within the construction industry. Under James's leadership, Cambridge grew from a small local contractor to a regional leader in commercial construction.",
    highlights:
      "Recipient of the Lifetime Achievement Award from the National Association of General Contractors",
  },
  {
    id: 2,
    name: "Robert Cambridge",
    title: "Chief Executive Officer",
    expertise: "Strategic Planning, Architectural Engineering",
    background:
      "Son of founder James Cambridge, Robert assumed the role of CEO in 2018 after serving in various leadership positions within the company. His dual expertise in business management and architectural engineering has been instrumental in the company's continued growth and innovation.",
    highlights:
      "Named among 'Top 40 Under 40' in Construction Executive magazine",
  },
  {
    id: 3,
    name: "Eleanor Winters",
    title: "Independent Director",
    expertise: "Finance, Real Estate Development",
    background:
      "Former CFO of Landmark Properties, a national real estate development firm. Eleanor brings extensive financial expertise and industry knowledge to the board, with particular focus on fiscal responsibility and strategic expansion opportunities.",
    highlights:
      "Certified Public Accountant with over 25 years of experience in financial leadership",
  },
  {
    id: 4,
    name: "Dr. Thomas Wright",
    title: "Independent Director",
    expertise: "Sustainable Construction, Academic Research",
    background:
      "Professor of Sustainable Construction Practices at the University of Michigan and author of several influential books on green building technologies. Dr. Wright provides valuable insight on sustainability initiatives and emerging construction technologies.",
    highlights:
      "Lead researcher on multiple National Science Foundation grants focused on sustainable building materials",
  },
  {
    id: 5,
    name: "Patricia Lopez",
    title: "Independent Director",
    expertise: "Legal, Corporate Governance",
    background:
      "Partner at Hayes & Lopez Law Firm, specializing in construction law and corporate governance. Patricia's legal expertise helps ensure Cambridge Construction maintains compliance with industry regulations while minimizing risk exposure.",
    highlights:
      "Named to 'Best Lawyers in America' for Construction Law for five consecutive years",
  },
  {
    id: 6,
    name: "Marcus Johnson",
    title: "Independent Director",
    expertise: "Technology Integration, Digital Transformation",
    background:
      "Former CTO of BuildTech Solutions, a construction technology firm. Marcus provides guidance on technology adoption and digital transformation strategies that keep Cambridge at the forefront of industry innovation.",
    highlights:
      "Pioneer in implementing AI and machine learning applications in construction management",
  },
];

const expandedDirector = ref(null);

function toggleDirector(id) {
  expandedDirector.value = expandedDirector.value === id ? null : id;
}
</script>

<template>
  <section
    id="board-of-directors"
    class="relative px-8 2xl:px-60 py-section bg-slate-800 text-slate-300"
  >
    <div class="container mx-auto py-block">
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
      >
        <div class="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 class="text-5xl font-bold mb-4">Board of Directors</h2>
          <p class="text-lg">
            Cambridge Construction is guided by a diverse board of directors
            with extensive experience in construction, business management,
            finance, and innovation—ensuring strong governance and strategic
            direction.
          </p>
        </div>
        <button
          @click="scrollToNextSection('community-outreach')"
          class="bg-slate-300 group text-navy font-semibold px-4 py-2 border-2 border-slate-300 shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
        >
          Community Impact
          <ChevronRightIcon
            class="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200"
          />
        </button>
      </div>

      <!-- Board Structure Overview -->
      <div class="bg-navy p-6 shadow-lg mb-10 border-l-4 border-slate-400">
        <h3 class="text-2xl font-bold mb-4">Board Structure</h3>
        <p class="mb-4">
          Cambridge Construction maintains a balanced board composition with
          both company leadership and independent directors, ensuring effective
          oversight and diverse perspectives. The board operates through the
          following committees:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
          <div class="bg-slate-700 p-4">
            <h4 class="text-lg font-semibold mb-2">Audit Committee</h4>
            <p class="text-slate-400">
              Oversees financial reporting, risk management, and compliance
            </p>
          </div>
          <div class="bg-slate-700 p-4">
            <h4 class="text-lg font-semibold mb-2">Governance Committee</h4>
            <p class="text-slate-400">
              Manages board composition, governance policies, and succession
              planning
            </p>
          </div>
          <div class="bg-slate-700 p-4">
            <h4 class="text-lg font-semibold mb-2">
              Strategic Planning Committee
            </h4>
            <p class="text-slate-400">
              Guides long-term strategy, growth initiatives, and market
              positioning
            </p>
          </div>
        </div>
      </div>

      <!-- Board Members -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="director in directors"
          :key="director.id"
          v-auto-animate
          class="bg-navy shadow-md relative overflow-hidden cursor-pointer group"
          :class="
            expandedDirector === director.id
              ? 'border-l-4 border-slate-300'
              : 'border-l-4 border-transparent hover:border-slate-600'
          "
          style="height: fit-content"
        >
          <div
            class="p-5 flex items-center justify-between"
            @click="toggleDirector(director.id)"
          >
            <div>
              <h3 class="text-xl font-bold">{{ director.name }}</h3>
              <p class="text-slate-400">{{ director.title }}</p>
            </div>
            <div>
              <ChevronRightIcon
                class="size-5 text-slate-300 transition-transform duration-200"
                :class="{ 'rotate-90': expandedDirector === director.id }"
              />
            </div>
          </div>

          <div
            v-if="expandedDirector === director.id"
            class="px-5 pb-5 border-t border-slate-700 z-10 relative"
          >
            <div class="mt-3">
              <h4 class="text-lg font-semibold mb-1">Areas of Expertise</h4>
              <p class="text-slate-400 mb-3">{{ director.expertise }}</p>

              <h4 class="text-lg font-semibold mb-1">Background</h4>
              <p class="text-slate-400 mb-3">{{ director.background }}</p>

              <h4 class="text-lg font-semibold mb-1">Notable Achievements</h4>
              <p class="text-slate-400">{{ director.highlights }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid > div {
  align-self: flex-start;
}
</style>
