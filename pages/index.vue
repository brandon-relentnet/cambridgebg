<script setup>
import { ref, computed } from "vue";
import { useWindowScroll, useWindowSize } from "@vueuse/core";

const { y } = useWindowScroll();
const imageVisible = ref(false);
const { width } = useWindowSize();
const isMobile = computed(() => width.value < 768);

function handleImageLoad() {
  imageVisible.value = true;
}

const parallaxStyle = computed(() => {
  return !isMobile.value
    ? { transform: `translateY(-${y.value * 0.3}px)` }
    : {};
});
</script>

<template>
  <section>
    <div
      class="relative h-[92vh] flex items-center justify-center text-slate-900 bg-linear-to-b from-slate-200 to-90% to-slate-300"
    >
      <!-- Nashville Skyline SVG -->
       <div
       v-if="!isMobile"
       ref="imageRef"
       class="absolute inset-0 transition-transform duration-700 z-0 ease-out"
       :class="{
          'translate-y-[100vh] opacity-0': !imageVisible,
          'translate-y-[40vh] opacity-100': imageVisible,
        }"
       :style="parallaxStyle"
       >
        <NuxtImg
          src="/nashville-skyline.svg"
          alt="Nashville Skyline"
          class="w-full h-full opacity-70"
          quality="100"
          @load="handleImageLoad"
        />
      </div>
      
      <!-- Hero Content -->
      <div class="relative z-2 text-center px-6 md:px-12 p-6">
        <h1 class="text-4xl md:text-6xl font-bold uppercase animate-fade-in">
          Cambridge Building Group
        </h1>
        <p
          class="mt-4 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in delay-200"
        >
          Building with precision, quality, and excellence. Trusted for
          commercial and residential projects.
        </p>
        <div class="mt-6">
          <NuxtLink
            to="/contact"
            class="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 animate-fade-in"
          >
            Get a Free Quote
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="bg-[#3b3f43] p-20 relative">
      <p class="text-center text-5xl text-slate-100 container mx-auto">
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
