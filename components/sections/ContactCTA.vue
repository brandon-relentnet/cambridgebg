<script setup>
import { EnvelopeIcon, PhoneIcon, CalendarIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <section
    id="contact-cta"
    class="relative px-8 2xl:px-60 py-section bg-slate-800 text-slate-300"
  >
    <div class="container mx-auto py-block">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div class="lg:col-span-2">
          <h2 class="text-5xl font-bold mb-4">
            Ready to Build Something Extraordinary?
          </h2>
          <p class="text-xl mb-6">
            Let's transform your vision into reality. Contact Cambridge
            Construction today for a consultation and experience the difference
            that expertise, dedication, and craftsmanship can make.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div class="flex items-center">
              <PhoneIcon class="size-8 text-slate-400 mr-4" />
              <div>
                <p class="text-sm text-slate-400">Call Us Directly</p>
                <p class="text-lg font-semibold">(615) 555-7890</p>
              </div>
            </div>
            <div class="flex items-center">
              <EnvelopeIcon class="size-8 text-slate-400 mr-4" />
              <div>
                <p class="text-sm text-slate-400">Email Us</p>
                <p class="text-lg font-semibold">info@cambridgebg.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-navy p-8 shadow-lg border-l-4 border-slate-500">
          <h3 class="text-2xl font-bold mb-4">Schedule a Consultation</h3>
          <p class="mb-6">
            Fill out the form below and our team will contact you within 24
            hours.
          </p>
          <form class="space-y-4">
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-slate-500 mb-1"
                >Name</label
              >
              <input
                type="text"
                id="name"
                class="w-full p-3 bg-slate-700 border border-slate-600 focus:border-slate-300 focus:outline-none focus:ring-0 text-slate-300"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-slate-400 mb-1"
                >Email</label
              >
              <input
                type="email"
                id="email"
                class="w-full p-3 bg-slate-700 border border-slate-600 focus:border-slate-300 focus:outline-none focus:ring-0 text-slate-300"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                for="phone"
                class="block text-sm font-medium text-slate-400 mb-1"
                >Phone</label
              >
              <input
                type="tel"
                id="phone"
                class="w-full p-3 bg-slate-700 border border-slate-600 focus:border-slate-300 focus:outline-none focus:ring-0 text-slate-300"
                placeholder="Your Phone"
              />
            </div>
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-slate-400 mb-1"
                >Project Details</label
              >
              <textarea
                id="message"
                rows="4"
                class="w-full p-3 bg-slate-700 border border-slate-600 focus:border-slate-300 focus:outline-none focus:ring-0 text-slate-300"
                placeholder="Tell us about your project"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-slate-300 text-navy font-semibold px-6 py-3 border-2 border-slate-300 shadow-lg transition duration-200 hover:bg-transparent hover:text-slate-300 flex items-center justify-center"
            >
              Schedule Consultation
              <CalendarIcon class="size-5 ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
