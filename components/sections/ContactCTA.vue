<script setup>
import { EnvelopeIcon, PhoneIcon, CalendarIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <section
    id="contact-cta"
    class="relative bg-slate-800 px-8 2xl:px-60 py-section text-slate-300"
  >
    <div class="py-block mx-auto container">
      <div class="items-center gap-12 grid grid-cols-1 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <h2 class="mb-4 font-bold text-5xl">
            Ready to Build Something Extraordinary?
          </h2>
          <p class="mb-6 text-xl">
            Let's transform your vision into reality. Contact Cambridge Building
            Group today for a consultation and experience the difference that
            expertise, dedication, and craftsmanship can make.
          </p>
          <div class="gap-6 grid grid-cols-1 md:grid-cols-2 mt-8">
            <div class="flex items-center">
              <PhoneIcon class="mr-4 size-8 text-slate-400" />
              <div>
                <p class="text-slate-400 text-sm">Call Us Directly</p>
                <p class="font-semibold text-lg">(615) 747-7007</p>
              </div>
            </div>
            <div class="flex items-center">
              <EnvelopeIcon class="mr-4 size-8 text-slate-400" />
              <div>
                <p class="text-slate-400 text-sm">Email Us</p>
                <p class="font-semibold text-lg">info@cambridgebg.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-navy shadow-lg p-8 border-slate-500 border-l-4">
          <h3 class="mb-4 font-bold text-2xl">Schedule a Consultation</h3>
          <p class="mb-6">
            Fill out the form below and our team will contact you within 24
            hours.
          </p>
          <form class="space-y-4">
            <div>
              <label
                for="name"
                class="block mb-1 font-medium text-slate-500 text-sm"
                >Name</label
              >
              <input
                type="text"
                id="name"
                class="bg-slate-700 p-3 border border-slate-600 focus:border-slate-300 focus:outline-none focus:ring-0 w-full text-slate-300"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-1 font-medium text-slate-400 text-sm"
                >Email</label
              >
              <input
                type="email"
                id="email"
                class="bg-slate-700 p-3 border border-slate-600 focus:border-slate-300 focus:outline-none focus:ring-0 w-full text-slate-300"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                for="phone"
                class="block mb-1 font-medium text-slate-400 text-sm"
                >Phone</label
              >
              <input
                type="tel"
                id="phone"
                class="bg-slate-700 p-3 border border-slate-600 focus:border-slate-300 focus:outline-none focus:ring-0 w-full text-slate-300"
                placeholder="Your Phone"
              />
            </div>
            <div>
              <label
                for="message"
                class="block mb-1 font-medium text-slate-400 text-sm"
                >Project Details</label
              >
              <textarea
                id="message"
                rows="4"
                class="bg-slate-700 p-3 border border-slate-600 focus:border-slate-300 focus:outline-none focus:ring-0 w-full text-slate-300"
                placeholder="Tell us about your project"
              ></textarea>
            </div>
            <button
              type="submit"
              class="flex justify-center items-center bg-slate-300 hover:bg-transparent shadow-lg px-6 py-3 border-2 border-slate-300 w-full font-semibold text-navy hover:text-slate-300 transition duration-200"
            >
              Schedule Consultation
              <CalendarIcon class="ml-2 size-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
