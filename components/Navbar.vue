<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/vue/24/solid";
import { navItems } from "~/data/siteData";

// State for mobile menu
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

// Function to toggle mobile menu
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;

  // Prevent scrolling when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

// Function to close mobile menu
function closeMobileMenu() {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = "";
}

// Function to check scroll position and update navbar style
function handleScroll() {
  isScrolled.value = window.scrollY > 50;
}

// Set up scroll event listener
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header>
    <!-- Main Navigation Bar -->
    <nav
      class="top-0 left-0 z-50 fixed bg-slate-100 w-full h-20 transition-all duration-300"
      :class="[
        isScrolled ? 'shadow-md' : 'shadow-none',
        isMobileMenuOpen ? 'bg-slate-100' : '',
      ]"
    >
      <div
        class="flex justify-between items-center mx-auto px-6 h-full container"
      >
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center" @click="closeMobileMenu">
          <NuxtImg
            src="/cbg-logo-transparent.png"
            alt="Cambridge Building Group Logo"
            class="w-auto h-14"
            quality="100"
          />
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <ul
            class="flex justify-center items-center gap-x-6 font-bold text-navy uppercase"
          >
            <li
              v-for="item in Object.values(navItems)"
              :key="item.title"
              class="group relative"
            >
              <NuxtLink
                :to="item.link"
                class="relative py-2 hover:text-slate-500 transition-colors duration-300"
              >
                {{ item.title }}
                <span
                  class="bottom-0 left-0 absolute bg-navy w-0 group-hover:w-full h-0.5 transition-all duration-300"
                ></span>
              </NuxtLink>
            </li>
          </ul>

          <!-- CTA Button -->
          <NuxtLink
            to="/contact"
            class="flex items-center bg-navy hover:bg-transparent shadow px-4 py-2 border border-navy font-semibold text-slate-300 hover:text-navy transition duration-200"
          >
            <PhoneIcon class="mr-2 size-4" />
            Get a Quote
          </NuxtLink>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button
          class="md:hidden focus:outline-none text-navy"
          @click="toggleMobileMenu"
          aria-label="Toggle navigation menu"
        >
          <Bars3Icon v-if="!isMobileMenuOpen" class="size-8" />
          <XMarkIcon v-else class="size-8" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="isMobileMenuOpen"
      class="z-40 fixed inset-0 bg-slate-900/50"
      @click="closeMobileMenu"
    ></div>

    <!-- Mobile Menu Panel -->
    <div
      class="top-20 right-0 bottom-0 z-50 fixed bg-slate-100 w-4/5 max-w-sm overflow-y-auto transition-transform duration-300 ease-in-out transform"
      :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="px-6 py-8">
        <ul class="space-y-6">
          <li v-for="item in Object.values(navItems)" :key="item.title">
            <NuxtLink
              :to="item.link"
              class="block font-bold text-navy hover:text-slate-500 text-xl transition duration-200"
              @click="closeMobileMenu"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>

        <div class="mt-12 pt-6 border-slate-300 border-t">
          <NuxtLink
            to="/contact"
            class="block bg-navy hover:bg-slate-700 shadow px-4 py-3 w-full font-semibold text-slate-300 text-center transition duration-200"
            @click="closeMobileMenu"
          >
            Get a Free Quote
          </NuxtLink>

          <div class="space-y-4 mt-8">
            <div class="flex items-center">
              <PhoneIcon class="mr-3 size-5 text-navy" />
              <a href="tel:6155557890" class="text-navy">(615) 747-7007</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Spacer to prevent content from hiding behind fixed navbar -->
    <div class="h-20"></div>
  </header>
</template>

<style scoped>
body.no-scroll {
  overflow: hidden;
}
</style>
