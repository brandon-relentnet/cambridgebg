<script setup>
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/vue/24/solid";
import { footerLinks, socialLinks, companyInfo } from "~/data/siteData";

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-slate-900 text-slate-400">
    <!-- Main Footer Content -->
    <div class="px-8 2xl:px-60 pt-16 pb-12">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <!-- Company Info -->
          <div class="lg:col-span-2">
            <NuxtImg
              src="/cbg-logo-transparent-inverted.png"
              alt="Cambridge Building Group Logo"
              class="h-16 w-auto mb-6"
              quality="100"
            />
            <p class="mb-6">
              {{ companyInfo.tagline }}
            </p>
            <div class="space-y-4">
              <div class="flex items-start">
                <MapPinIcon
                  class="size-5 mr-3 text-slate-300 flex-shrink-0 mt-1"
                />
                <p>{{ companyInfo.address }}</p>
              </div>
              <div class="flex items-start">
                <PhoneIcon
                  class="size-5 mr-3 text-slate-300 flex-shrink-0 mt-1"
                />
                <p>{{ companyInfo.phone }}</p>
              </div>
              <div class="flex items-start">
                <EnvelopeIcon
                  class="size-5 mr-3 text-slate-300 flex-shrink-0 mt-1"
                />
                <p>{{ companyInfo.email }}</p>
              </div>
              <div class="flex items-start">
                <ClockIcon
                  class="size-5 mr-3 text-slate-300 flex-shrink-0 mt-1"
                />
                <p>{{ companyInfo.hours }}</p>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-xl font-bold text-slate-300 mb-6">About</h3>
            <ul class="space-y-3">
              <li v-for="link in footerLinks.about" :key="link.name">
                <NuxtLink
                  :to="link.url"
                  class="hover:text-slate-300 transition duration-200"
                >
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold text-slate-300 mb-6">Services</h3>
            <ul class="space-y-3">
              <li v-for="link in footerLinks.services" :key="link.name">
                <NuxtLink
                  :to="link.url"
                  class="hover:text-slate-300 transition duration-200"
                >
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold text-slate-300 mb-6">Connect</h3>
            <ul class="space-y-3">
              <li v-for="link in footerLinks.connect" :key="link.name">
                <NuxtLink
                  :to="link.url"
                  class="hover:text-slate-300 transition duration-200"
                >
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>

            <!-- Social Media Links -->
            <div class="mt-8">
              <h4 class="text-lg font-semibold text-slate-300 mb-4">
                Follow Us
              </h4>
              <div class="flex space-x-4">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-slate-800 hover:bg-navy p-2 rounded-full text-slate-300 transition duration-200"
                  :aria-label="social.name"
                >
                  <span class="w-6 h-6 block">{{ social.name.charAt(0) }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer Bar -->
    <div class="bg-slate-950 py-6 px-8 2xl:px-60">
      <div
        class="container mx-auto flex flex-col md:flex-row justify-between items-center"
      >
        <p class="mb-4 md:mb-0">
          &copy; {{ currentYear }} {{ companyInfo.name }}
          <span class="italic ml-2">All rights reserved.</span>
        </p>
        <div class="flex space-x-6">
          <NuxtLink
            to="/privacy-policy"
            class="hover:text-slate-300 transition duration-200"
          >
            Privacy Policy
          </NuxtLink>
          <NuxtLink
            to="/terms-of-service"
            class="hover:text-slate-300 transition duration-200"
          >
            Terms of Service
          </NuxtLink>
          <NuxtLink
            to="/sitemap"
            class="hover:text-slate-300 transition duration-200"
          >
            Sitemap
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
