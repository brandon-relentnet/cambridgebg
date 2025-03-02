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
      class="w-full h-20 fixed top-0 left-0 z-50 transition-all bg-slate-100 duration-300"
      :class="[
        isScrolled
          ? 'shadow-md'
          : 'shadow-none',
        isMobileMenuOpen ? 'bg-slate-100' : '',
      ]"
    >
      <div
        class="container mx-auto px-6 h-full flex justify-between items-center"
      >
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center" @click="closeMobileMenu">
          <NuxtImg
            src="/cbg-logo-transparent.png"
            alt="Cambridge Building Group Logo"
            class="h-14 w-auto"
            quality="100"
          />
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <ul
            class="flex gap-x-6 justify-center items-center text-navy font-bold uppercase"
          >
            <li
              v-for="item in Object.values(navItems)"
              :key="item.title"
              class="relative group"
            >
              <NuxtLink
                :to="item.link"
                class="py-2 transition-colors duration-300 hover:text-slate-500 relative"
              >
                {{ item.title }}
                <span
                  class="absolute bottom-0 left-0 w-0 h-0.5 bg-navy transition-all duration-300 group-hover:w-full"
                ></span>
              </NuxtLink>
            </li>
          </ul>

          <!-- CTA Button -->
          <NuxtLink
            to="/contact"
            class="bg-navy text-slate-300 font-semibold px-4 py-2 border border-navy shadow transition duration-200 hover:bg-transparent hover:text-navy flex items-center"
          >
            <PhoneIcon class="size-4 mr-2" />
            Get a Quote
          </NuxtLink>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button
          class="md:hidden text-navy focus:outline-none"
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
      class="fixed inset-0 bg-slate-900/50 z-40"
      @click="closeMobileMenu"
    ></div>

    <!-- Mobile Menu Panel -->
    <div
      class="fixed top-20 right-0 bottom-0 w-4/5 max-w-sm bg-slate-100 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto"
      :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="px-6 py-8">
        <ul class="space-y-6">
          <li v-for="item in Object.values(navItems)" :key="item.title">
            <NuxtLink
              :to="item.link"
              class="block text-xl font-bold text-navy hover:text-slate-500 transition duration-200"
              @click="closeMobileMenu"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>

        <div class="mt-12 border-t border-slate-300 pt-6">
          <NuxtLink
            to="/contact"
            class="block w-full bg-navy text-slate-300 font-semibold px-4 py-3 text-center shadow transition duration-200 hover:bg-slate-700"
            @click="closeMobileMenu"
          >
            Get a Free Quote
          </NuxtLink>

          <div class="mt-8 space-y-4">
            <div class="flex items-center">
              <PhoneIcon class="size-5 text-navy mr-3" />
              <a href="tel:6155557890" class="text-navy">(615) 555-7890</a>
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
