<script setup>
import { ref, computed } from "vue";
import { useWindowScroll } from "@vueuse/core";
import { DocumentCheckIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import { scrollToNextSection } from "~/utils/autoScroll";

const { y } = useWindowScroll();
const imageVisible = ref(false);

function handleImageLoad() {
  imageVisible.value = true;
}

const parallaxStyle = computed(() => {
  return { transform: `translateY(-${y.value * 0.3}px)` };
});
</script>

<template>
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
            @click="scrollToNextSection('who-is-cambridge-construction')"
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
