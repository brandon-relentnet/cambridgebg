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
    <div class="relative flex justify-center items-center h-[92vh] text-navy">
      <div
        ref="imageRef"
        class="z-0 absolute inset-0 transition-transform duration-700 ease-out"
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
          class="opacity-70 w-full h-auto"
          quality="100"
          @load="handleImageLoad"
        />
      </div>
      <div
        class="z-2 relative flex flex-col justify-center items-center gap-y-4 mx-auto p-6 px-6 md:px-12 pb-50 text-center animate-fade-in container"
      >
        <NuxtImg
          src="/cbg-secondary-logo.png"
          alt="Logo"
          quality="100"
          sizes="md:400px lg:450px 275px"
          format="webp"
        />
        <div class="gap-x-4 grid grid-cols-2">
          <button
            @click="scrollToNextSection('who-is-cambridge-construction')"
            class="group bg-navy shadow-lg px-4 py-2 border-2 border-navy font-semibold text-slate-300 hover:scale-115 transition duration-200 cursor-pointer"
          >
            Learn More
            <ChevronRightIcon
              class="inline-block -mt-0.5 size-5 group-hover:rotate-90 transition duration-200"
            />
          </button>
          <NuxtLink
            to="/contact"
            class="group flex justify-center items-center shadow-lg px-4 py-2 border-2 border-navy font-semibold text-navy hover:scale-115 transition duration-200"
          >
            Free Quote
            <DocumentCheckIcon
              class="inline-block ml-2 size-5 transition duration-200"
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
