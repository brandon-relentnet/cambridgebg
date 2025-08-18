<script setup>
import { ref, computed } from "vue";
import { ChevronRightIcon, UserCircleIcon } from "@heroicons/vue/24/solid";
import { scrollToNextSection } from "~/utils/autoScroll";
import { leadershipTeam } from "~/data/siteData";

const props = defineProps({
  showButton: {
    type: Boolean,
    default: false,
  },
});

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
    class="relative bg-slate-100 px-8 2xl:px-60 py-section"
  >
    <div class="py-block mx-auto container">
      <div
        class="flex md:flex-row flex-col justify-between items-start md:items-end mb-12"
      >
        <div class="mb-6 md:mb-0 w-full md:w-1/2">
          <div class="flex items-center mb-4">
            <UserCircleIcon class="mr-4 size-10 text-navy" />
            <h2 class="font-bold text-navy text-5xl">Our Leadership</h2>
          </div>
          <p class="text-slate-700 text-lg">
            Cambridge Building Group is led by a team of experienced industry
            professionals combining diverse expertise and a shared commitment to
            excellence, innovation, and ethical business practices.
          </p>
        </div>
      </div>

      <!-- Featured Leadership (Desktop) -->
      <div class="hidden gap-8 md:grid md:grid-cols-2 mb-12">
        <div
          v-for="leader in featuredLeaders"
          :key="`desktop-${leader.id}`"
          class="bg-white shadow-lg p-6 border-navy border-t-4 overflow-hidden"
        >
          <div class="flex justify-center items-center bg-slate-200 h-80">
            <img
              :src="leader.image"
              alt="Leader Image"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <h3 class="mb-1 font-bold text-navy text-2xl">{{ leader.name }}</h3>
            <p class="mb-4 font-medium text-slate-600">{{ leader.title }}</p>
            <p class="mb-4 text-slate-700">{{ leader.bio }}</p>
            <h4 class="mb-2 font-semibold text-navy text-lg">Education</h4>
            <p class="mb-4 text-slate-600">{{ leader.education }}</p>
            <h4 class="mb-2 font-semibold text-navy text-lg">Experience</h4>
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
      <div class="hidden gap-6 md:grid md:grid-cols-3">
        <div
          v-for="leader in otherLeaders"
          :key="`desktop-other-${leader.id}`"
          class="bg-white shadow-md p-6 border-navy border-l-4"
        >
          <div class="flex items-center mb-4">
            <div
              class="flex justify-center items-center bg-slate-200 mr-4 rounded-full w-12 h-12 font-bold text-navy text-xl"
            >
              {{ leader.name.split(" ")[0].charAt(0)
              }}{{ leader.name.split(" ")[1].charAt(0) }}
            </div>
            <div>
              <h3 class="font-bold text-navy text-xl">{{ leader.name }}</h3>
              <p class="text-slate-600">{{ leader.title }}</p>
            </div>
          </div>
          <p class="mb-3 text-slate-700">{{ leader.bio }}</p>
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
            class="flex items-center p-4 cursor-pointer"
            @click="setActiveLeader(leader.id)"
          >
            <div
              class="flex justify-center items-center bg-slate-200 mr-4 rounded-full w-12 h-12 font-bold text-navy text-xl"
            >
              {{ leader.name.split(" ")[0].charAt(0)
              }}{{ leader.name.split(" ")[1].charAt(0) }}
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-navy text-xl">{{ leader.name }}</h3>
              <p class="text-slate-600">{{ leader.title }}</p>
            </div>
            <ChevronRightIcon
              class="size-5 text-navy transition-transform duration-200"
              :class="{ 'rotate-90': activeLeader === leader.id }"
            />
          </div>
          <div
            v-if="activeLeader === leader.id"
            class="p-4 pt-0 border-slate-200 border-t"
          >
            <p class="mb-4 text-slate-700">{{ leader.bio }}</p>
            <h4 class="mb-2 font-semibold text-navy text-lg">Education</h4>
            <p class="mb-4 text-slate-600">{{ leader.education }}</p>
            <h4 class="mb-2 font-semibold text-navy text-lg">Experience</h4>
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
