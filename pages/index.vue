<script setup>
import { ref, computed } from "vue";
import { useWindowScroll } from "@vueuse/core";
import { DocumentCheckIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";

const { y } = useWindowScroll();
const imageVisible = ref(false);

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
  <section>
    <div
      class="relative h-[92vh] flex items-center justify-center text-slate-900"
    >
      <!-- Nashville Skyline SVG -->
      <div
        ref="imageRef"
        class="absolute inset-0 transition-transform duration-700 z-0 ease-out"
        :class="{
          'translate-y-[100vh] opacity-0': !imageVisible,
          'translate-y-[50vh] opacity-100': imageVisible,
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

      <!-- Hero Content -->
      <div
        class="relative flex flex-col justify-center items-center gap-y-4 z-2 text-center px-6 md:px-12 pb-50 p-6 animate-fade-in"
      >
        <NuxtImg
          src="/cbg-logo-transparent.png"
          alt="Logo"
          class="w-128 h-auto"
          quality="100"
        />
        <div class="flex justify-center items-center gap-x-4">
          <button
            @click="scrollToNextSection"
            class="bg-navy group text-slate-300 font-semibold w-50 h-12 shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
          >
            Learn More
            <ChevronRightIcon class="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200" />
          </button>
          <NuxtLink
            to="/contact"
            class="border-2 border-navy group text-navy font-semibold w-50 h-12 shadow-lg transition duration-200 hover:scale-115 flex items-center justify-center"
          >
            Get a Free Quote
            <DocumentCheckIcon class="size-5 ml-2 inline-block transition duration-200" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="relative -mt-20 sm:-mt-5 md:mt-20 lg:mt-40 xl:mt-60 2xl:mt-100 3xl:mt-120 4xl:mt-200 p-20"
      id="next-section"
    >
      <p class="text-center text-5xl text-navy container mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, vel
        minus? Dicta quod, quibusdam debitis ipsa consectetur nemo neque
        provident! Non, distinctio quo laboriosam ad eos omnis officiis
        molestias, esse voluptate porro culpa? Voluptas ipsum quod, labore
        numquam facere eos! Facere ab enim natus libero voluptate dolorem
        cupiditate doloribus. Enim dolorum culpa eos et illum porro accusantium
        dolorem quo ut. Provident totam porro delectus vel similique. Tenetur,
        ratione maxime at quidem accusamus architecto autem sed sit, quam quos
        cupiditate assumenda? Est sunt amet, natus voluptas cumque temporibus
        atque blanditiis esse repellendus impedit inventore nesciunt quo sint
        explicabo fugit reprehenderit soluta?
      </p>
    </div>
  </section>
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
