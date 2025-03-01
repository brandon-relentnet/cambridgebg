<script setup>
import { BoltIcon, HandRaisedIcon, UsersIcon } from "@heroicons/vue/24/solid";

// Page metadata
useHead({
  title: "About Us | Cambridge Construction",
  meta: [
    {
      name: "description",
      content:
        "Learn about Cambridge Construction - our history, values, leadership team, and commitment to excellence in the construction industry.",
    },
  ],
});

const missionVision = {
  mission:
    "To transform the built environment through exceptional craftsmanship, innovative solutions, and unwavering integrity.",
  vision:
    "To be the most trusted name in construction, recognized for creating spaces that inspire, endure, and enhance the communities we serve.",
};

const companyStats = [
  { label: "Years in Business", value: "25+" },
  { label: "Completed Projects", value: "350+" },
  { label: "Industry Awards", value: "42" },
  { label: "Team Members", value: "175" },
];
</script>

<template>
  <div>
    <!-- Page Header -->
    <section
      class="relative h-[40vh] flex items-center justify-center bg-slate-800"
    >
      <div
        class="absolute inset-0 z-0 opacity-30 bg-[url('/about-header.jpg')] bg-cover bg-center"
      ></div>
      <div class="relative z-10 text-center px-8">
        <h1 class="text-5xl md:text-6xl font-bold text-slate-300 mb-4">
          About Us
        </h1>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto">
          Building excellence through innovation, integrity, and dedicated
          craftsmanship since 1985.
        </p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-16 px-8 2xl:px-60 bg-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-navy mb-6">
              Our Mission & Vision
            </h2>
            <div class="mb-8">
              <h3
                class="text-2xl font-semibold text-navy mb-3 flex items-center"
              >
                <BoltIcon class="size-6 text-navy mr-2" />
                Mission
              </h3>
              <p
                class="text-lg text-slate-700 border-l-4 border-navy pl-4 py-2 bg-slate-50"
              >
                {{ missionVision.mission }}
              </p>
            </div>
            <div>
              <h3
                class="text-2xl font-semibold text-navy mb-3 flex items-center"
              >
                <HandRaisedIcon class="size-6 text-navy mr-2" />
                Vision
              </h3>
              <p
                class="text-lg text-slate-700 border-l-4 border-navy pl-4 py-2 bg-slate-50"
              >
                {{ missionVision.vision }}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <div
              v-for="(stat, index) in companyStats"
              :key="index"
              class="bg-slate-100 p-6 text-center border-t-4 border-navy"
            >
              <p class="text-4xl font-bold text-navy mb-2">{{ stat.value }}</p>
              <p class="text-slate-700">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who is Cambridge Construction -->
    <SectionsWhoIsCC />

    <!-- Core Values -->
    <SectionsCoreValues />

    <!-- Milestones -->
    <SectionsMilestones />

    <!-- Leadership Team -->
    <SectionsLeadershipBios />

    <!-- Board of Directors -->
    <SectionsBoardOfDirectors />

    <!-- Company Culture -->
    <section class="py-16 px-8 2xl:px-60 bg-slate-100">
      <div class="container mx-auto">
        <div class="flex items-center mb-8">
          <UsersIcon class="size-10 text-navy mr-4" />
          <h2 class="text-4xl font-bold text-navy">Our Company Culture</h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p class="text-lg text-slate-700 mb-6">
              At Cambridge Construction, our culture is built on collaboration,
              respect, and a passion for excellence. We believe that our people
              are our greatest asset, and we invest in their growth and
              well-being.
            </p>
            <p class="text-lg text-slate-700 mb-6">
              We foster an environment where innovation thrives, ideas are
              valued, and continuous improvement is pursued. Our team members
              are empowered to contribute their unique perspectives and talents
              to every project.
            </p>
            <p class="text-lg text-slate-700">
              Safety is paramount in our culture. We maintain rigorous standards
              and provide comprehensive training to ensure everyone returns home
              safely each day. This commitment to safety extends to our clients,
              partners, and communities.
            </p>
          </div>
          <div class="bg-white p-8 shadow-lg border-l-4 border-navy">
            <h3 class="text-2xl font-bold text-navy mb-4">
              Our Core Principles
            </h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-navy text-slate-300 flex items-center justify-center rounded-full mr-3 mt-1"
                  >1</span
                >
                <div>
                  <h4 class="text-lg font-semibold text-navy">People First</h4>
                  <p class="text-slate-700">
                    We prioritize the well-being, development, and safety of our
                    team members and everyone we work with.
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-navy text-slate-300 flex items-center justify-center rounded-full mr-3 mt-1"
                  >2</span
                >
                <div>
                  <h4 class="text-lg font-semibold text-navy">
                    Collaborative Spirit
                  </h4>
                  <p class="text-slate-700">
                    We believe in the power of teamwork and partnership to
                    achieve exceptional results.
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-navy text-slate-300 flex items-center justify-center rounded-full mr-3 mt-1"
                  >3</span
                >
                <div>
                  <h4 class="text-lg font-semibold text-navy">
                    Continuous Learning
                  </h4>
                  <p class="text-slate-700">
                    We embrace opportunities to learn, grow, and evolve both as
                    individuals and as an organization.
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <span
                  class="flex-shrink-0 w-6 h-6 bg-navy text-slate-300 flex items-center justify-center rounded-full mr-3 mt-1"
                  >4</span
                >
                <div>
                  <h4 class="text-lg font-semibold text-navy">
                    Community Connection
                  </h4>
                  <p class="text-slate-700">
                    We actively engage with and contribute to the communities
                    where we live and work.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <SectionsContactCTA />
  </div>
</template>
