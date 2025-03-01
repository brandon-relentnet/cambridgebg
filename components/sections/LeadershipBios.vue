<script setup>
import { ref } from "vue";
import { ChevronRightIcon, UserCircleIcon } from "@heroicons/vue/24/solid";
import { scrollToNextSection } from "~/utils/autoScroll";

const leadershipTeam = [
  {
    id: 1,
    name: "Robert Cambridge",
    title: "Chief Executive Officer",
    image: "/robert-cambridge.jpg",
    bio: "Robert Cambridge, son of founder James Cambridge, has led the company since 2018. With over 20 years of industry experience and an architectural engineering background, Robert brings both technical expertise and visionary leadership to Cambridge Construction.",
    education:
      "MBA, Harvard Business School; B.S. Architectural Engineering, MIT",
    experience: [
      "Director of Operations, Cambridge Construction (2010-2018)",
      "Project Executive, Cambridge Construction (2005-2010)",
      "Project Manager, Turner Construction (2000-2005)",
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    title: "Chief Operating Officer",
    image: "/sarah-mitchell.jpg",
    bio: "Sarah Mitchell oversees all operational aspects of Cambridge Construction, ensuring project excellence and organizational efficiency. With a background in civil engineering and construction management, Sarah has implemented innovative processes that have significantly improved project outcomes.",
    education:
      "MBA, Wharton School; B.S. Civil Engineering, Stanford University",
    experience: [
      "VP of Operations, Cambridge Construction (2015-2020)",
      "Senior Project Manager, Cambridge Construction (2012-2015)",
      "Project Engineer, Skanska USA (2008-2012)",
    ],
    featured: true,
  },
  {
    id: 3,
    name: "David Herrera",
    title: "Chief Financial Officer",
    image: "/david-herrera.jpg",
    bio: "David Herrera manages Cambridge Construction's financial strategy and operations. His forward-thinking approach to financial management has strengthened the company's fiscal health while supporting strategic growth initiatives.",
    education:
      "MBA, Finance, University of Chicago; B.A. Economics, Northwestern University",
    experience: [
      "Controller, Cambridge Construction (2014-2018)",
      "Financial Analyst, Morgan Stanley (2010-2014)",
      "Consultant, Deloitte (2007-2010)",
    ],
    featured: true,
  },
  {
    id: 4,
    name: "Jennifer Zhao",
    title: "Director of Sustainable Construction",
    image: "/jennifer-zhao.jpg",
    bio: "Jennifer Zhao leads Cambridge Construction's sustainable building initiatives. A LEED Fellow and recognized expert in green building practices, Jennifer has spearheaded numerous award-winning sustainable projects.",
    education:
      "M.S. Environmental Engineering, UC Berkeley; B.S. Architecture, Cornell University",
    experience: [
      "Sustainability Manager, Cambridge Construction (2015-2019)",
      "Green Building Consultant, Arup (2011-2015)",
      "LEED Project Coordinator, HOK (2008-2011)",
    ],
    featured: false,
  },
  {
    id: 5,
    name: "Michael Rodriguez",
    title: "Director of Technology & Innovation",
    image: "/michael-rodriguez.jpg",
    bio: "Michael Rodriguez directs Cambridge Construction's technology strategy and implementation. His expertise in construction technology and BIM has positioned the company at the forefront of digital transformation in the industry.",
    education:
      "M.S. Construction Management, Georgia Tech; B.S. Computer Science, University of Texas",
    experience: [
      "BIM Manager, Cambridge Construction (2016-2020)",
      "Virtual Design & Construction Specialist, McCarthy Building Companies (2012-2016)",
      "Software Developer, Autodesk (2009-2012)",
    ],
    featured: false,
  },
  {
    id: 6,
    name: "Richard Thompson",
    title: "Director of Preconstruction",
    image: "/richard-thompson.jpg",
    bio: "Richard Thompson leads Cambridge Construction's preconstruction services. With extensive experience in estimating, scheduling, and value engineering, Richard ensures projects are set up for success from the earliest planning stages.",
    education: "B.S. Construction Management, Purdue University",
    experience: [
      "Senior Estimator, Cambridge Construction (2012-2017)",
      "Project Controller, Whiting-Turner (2008-2012)",
      "Field Engineer, Gilbane Building Company (2004-2008)",
    ],
    featured: false,
  },
];

// Filter featured leaders for top row
const featuredLeaders = leadershipTeam.filter((leader) => leader.featured);
// Filter non-featured leaders for second row
const otherLeaders = leadershipTeam.filter((leader) => !leader.featured);

// Active leader for mobile view
const activeLeader = ref(null);

function setActiveLeader(id) {
  activeLeader.value = activeLeader.value === id ? null : id;
}
</script>

<template>
  <section
    id="leadership-bios"
    class="relative px-8 2xl:px-60 py-section bg-slate-100"
  >
    <div class="container mx-auto py-block">
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
      >
        <div class="w-full md:w-1/2 mb-6 md:mb-0">
          <div class="flex items-center mb-4">
            <UserCircleIcon class="size-10 text-navy mr-4" />
            <h2 class="text-5xl font-bold text-navy">Our Leadership</h2>
          </div>
          <p class="text-lg text-slate-700">
            Cambridge Construction is led by a team of experienced industry
            professionals combining diverse expertise and a shared commitment to
            excellence, innovation, and ethical business practices.
          </p>
        </div>
        <button
          @click="scrollToNextSection('board-of-directors')"
          class="bg-navy group text-slate-300 font-semibold px-4 py-2 border-2 border-navy shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
        >
          Board of Directors
          <ChevronRightIcon
            class="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200"
          />
        </button>
      </div>

      <!-- Featured Leadership (Desktop) -->
      <div class="hidden md:grid md:grid-cols-3 gap-8 mb-12">
        <div
          v-for="leader in featuredLeaders"
          :key="`desktop-${leader.id}`"
          class="bg-white p-6 shadow-lg border-t-4 border-navy overflow-hidden"
        >
          <div class="h-48 bg-slate-200 flex items-center justify-center">
            <div class="text-4xl font-bold text-slate-400 opacity-50">
              {{ leader.name.split(" ")[0].charAt(0)
              }}{{ leader.name.split(" ")[1].charAt(0) }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-navy mb-1">{{ leader.name }}</h3>
            <p class="text-slate-600 font-medium mb-4">{{ leader.title }}</p>
            <p class="text-slate-700 mb-4">{{ leader.bio }}</p>
            <h4 class="text-lg font-semibold text-navy mb-2">Education</h4>
            <p class="text-slate-600 mb-4">{{ leader.education }}</p>
            <h4 class="text-lg font-semibold text-navy mb-2">Experience</h4>
            <ul class="text-slate-600">
              <li
                v-for="(item, index) in leader.experience"
                :key="index"
                class="mb-1"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Other Leadership (Desktop) -->
      <div class="hidden md:grid md:grid-cols-3 gap-6">
        <div
          v-for="leader in otherLeaders"
          :key="`desktop-other-${leader.id}`"
          class="bg-white p-6 shadow-md border-l-4 border-navy"
        >
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-navy font-bold text-xl mr-4"
            >
              {{ leader.name.split(" ")[0].charAt(0)
              }}{{ leader.name.split(" ")[1].charAt(0) }}
            </div>
            <div>
              <h3 class="text-xl font-bold text-navy">{{ leader.name }}</h3>
              <p class="text-slate-600">{{ leader.title }}</p>
            </div>
          </div>
          <p class="text-slate-700 mb-3">{{ leader.bio }}</p>
          <p class="text-slate-600 text-sm italic">{{ leader.education }}</p>
        </div>
      </div>

      <!-- Mobile View -->
      <div class="md:hidden space-y-4">
        <div
          v-for="leader in leadershipTeam"
          :key="`mobile-${leader.id}`"
          class="bg-white shadow-md overflow-hidden"
        >
          <div
            class="p-4 flex items-center cursor-pointer"
            @click="setActiveLeader(leader.id)"
          >
            <div
              class="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-navy font-bold text-xl mr-4"
            >
              {{ leader.name.split(" ")[0].charAt(0)
              }}{{ leader.name.split(" ")[1].charAt(0) }}
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-navy">{{ leader.name }}</h3>
              <p class="text-slate-600">{{ leader.title }}</p>
            </div>
            <ChevronRightIcon
              class="size-5 text-navy transition-transform duration-200"
              :class="{ 'rotate-90': activeLeader === leader.id }"
            />
          </div>
          <div
            v-if="activeLeader === leader.id"
            class="p-4 pt-0 border-t border-slate-200"
          >
            <p class="text-slate-700 mb-4">{{ leader.bio }}</p>
            <h4 class="text-lg font-semibold text-navy mb-2">Education</h4>
            <p class="text-slate-600 mb-4">{{ leader.education }}</p>
            <h4 class="text-lg font-semibold text-navy mb-2">Experience</h4>
            <ul class="text-slate-600">
              <li
                v-for="(item, index) in leader.experience"
                :key="index"
                class="mb-1"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
