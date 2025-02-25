<template>
  <section
    class="relative h-[92vh] flex items-center justify-center text-white bg-white"
  >
    <!-- Hero Content -->
    <div
      class="relative z-2 text-center px-6 md:px-12 bg-black/50 backdrop-blur-sm p-6 rounded-lg shadow-lg"
    >
      <h1 class="text-4xl md:text-6xl font-bold uppercase animate-fade-in">
        Cambridge Building Group
      </h1>
      <p
        class="mt-4 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in delay-200"
      >
        Building with precision, quality, and excellence. Trusted for commercial
        and residential projects.
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

    <!-- Nashville Skyline SVG -->
    <div class="absolute bottom-[-50%] left-0 w-full h-auto">
      <img
        src="/nashville-skyline.svg"
        alt="Nashville Skyline"
        class="w-full h-auto opacity-80"
      />
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
