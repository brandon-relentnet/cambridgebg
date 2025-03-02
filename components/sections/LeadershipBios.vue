<script setup>
import { ref, computed } from "vue";
import { ChevronRightIcon, UserCircleIcon } from "@heroicons/vue/24/solid";
import { scrollToNextSection } from "~/utils/autoScroll";
import { leadershipTeam } from "~/data/siteData";

// Filter featured leaders for top row
const featuredLeaders = computed(() =>
  leadershipTeam.filter((leader) => leader.featured)
);
// Filter non-featured leaders for second row
const otherLeaders = computed(() =>
  leadershipTeam.filter((leader) => !leader.featured)
);

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
            Cambridge Building Group is led by a team of experienced industry
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
