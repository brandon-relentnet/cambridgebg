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
      <div class="mx-auto container">
        <div class="gap-12 grid grid-cols-1 lg:grid-cols-5">
          <!-- Company Info -->
          <div class="lg:col-span-2">
            <NuxtImg
              src="/cbg-logo-transparent-inverted.png"
              alt="Cambridge Building Group Logo"
              class="mb-6 w-auto h-16"
              quality="100"
            />
            <p class="mb-6">
              {{ companyInfo.tagline }}
            </p>
            <div class="space-y-4">
              <div class="flex items-start">
                <MapPinIcon
                  class="flex-shrink-0 mt-1 mr-3 size-5 text-slate-300"
                />
                <p>{{ companyInfo.address }}</p>
              </div>
              <div class="flex items-start">
                <PhoneIcon
                  class="flex-shrink-0 mt-1 mr-3 size-5 text-slate-300"
                />
                <p>{{ companyInfo.phone }}</p>
              </div>
              <div class="flex items-start">
                <EnvelopeIcon
                  class="flex-shrink-0 mt-1 mr-3 size-5 text-slate-300"
                />
                <p>{{ companyInfo.email }}</p>
              </div>
              <div class="flex items-start">
                <ClockIcon
                  class="flex-shrink-0 mt-1 mr-3 size-5 text-slate-300"
                />
                <p>{{ companyInfo.hours }}</p>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="mb-6 font-bold text-slate-300 text-xl">About</h3>
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
            <h3 class="mb-6 font-bold text-slate-300 text-xl">Services</h3>
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
            <h3 class="mb-6 font-bold text-slate-300 text-xl">Connect</h3>
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
              <h4 class="mb-4 font-semibold text-slate-300 text-lg">
                Follow Us
              </h4>
              <div class="flex space-x-4">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-slate-200 hover:bg-slate-400 p-3 rounded-full text-slate-300 transition duration-200"
                  :aria-label="social.name"
                >
                  <NuxtImg
                    :src="social.icon"
                    :alt="social.name"
                    class="w-6 h-6"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer Bar -->
    <div class="bg-slate-950 px-8 2xl:px-60 py-6">
      <div
        class="flex md:flex-row flex-col justify-between items-center mx-auto container"
      >
        <p class="mb-4 md:mb-0">
          &copy; {{ currentYear }} {{ companyInfo.name }}
          <span class="ml-2 italic">All rights reserved.</span>
        </p>
      </div>
    </div>
  </footer>
</template>
