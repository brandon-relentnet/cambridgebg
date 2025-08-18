<script setup>
import { ref } from "vue";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  HomeModernIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/vue/24/solid";

// Page metadata
useHead({
  title: "Contact Us | Cambridge Building Group",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with Cambridge Building Group for your construction needs. Request a quote, discuss a project, or inquire about our services.",
    },
  ],
});

// Form data
const form = ref({
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  timeframe: "",
  message: "",
  privacy: false,
});

// Form submission
const isSubmitting = ref(false);
const isSubmitted = ref(false);
const hasError = ref(false);

// Project types
const projectTypes = [
  { value: "commercial", label: "Commercial Construction" },
  { value: "residential", label: "Luxury Residential" },
  { value: "renovation", label: "Historic Renovation" },
  { value: "design-build", label: "Design-Build Project" },
  { value: "tenant-improvements", label: "Tenant Improvements" },
  { value: "pre-construction", label: "Pre-Construction Services" },
  { value: "other", label: "Other/Not Sure" },
];

// Budget ranges
const budgetRanges = [
  { value: "under-500k", label: "Under $500K" },
  { value: "500k-1m", label: "$500K - $1M" },
  { value: "1m-5m", label: "$1M - $5M" },
  { value: "5m-10m", label: "$5M - $10M" },
  { value: "over-10m", label: "Over $10M" },
  { value: "not-sure", label: "Not Sure Yet" },
];

// Timeframe options
const timeframeOptions = [
  { value: "immediate", label: "Immediate (1-3 months)" },
  { value: "soon", label: "Soon (3-6 months)" },
  { value: "planning", label: "Planning Phase (6-12 months)" },
  { value: "future", label: "Future Consideration (1+ years)" },
  { value: "not-sure", label: "Not Sure Yet" },
];

// Office locations
const officeLocations = [
  {
    city: "Nashville (Headquarters)",
    address: "PO Box: 160036, Nashville, TN 37216",
    phone: "(615) 747-7007",
    email: "nashville@cambridgebg.com",
    hours: "Monday-Friday: 8am-5pm CST",
  },
];

// FAQ questions
const faqs = [
  {
    question: "What types of projects does Cambridge Building Group handle?",
    answer:
      "Cambridge Building Group specializes in commercial construction, luxury residential projects, historic renovations, design-build solutions, and tenant improvements. Our experienced team can handle projects of various sizes and complexities across multiple sectors.",
  },
  {
    question: "How do I request a quote for my project?",
    answer:
      "You can request a quote by filling out our contact form on this page, calling our main office, or sending an email with your project details. Our team will get back to you within 24 hours to discuss your project requirements and schedule an initial consultation.",
  },
  {
    question: "Do you offer pre-construction services?",
    answer:
      "Yes, we provide comprehensive pre-construction services including budgeting, scheduling, cost sensitivity, and constructability reviews. These services help identify potential challenges early and establish a solid foundation for project success.",
  },
  {
    question: "What geographic areas do you serve?",
    answer:
      "Cambridge Building Group serves the Southeastern United States. We have the capacity to take on projects throughout Tennessee, Georgia.",
  },
  {
    question: "How do you ensure quality and safety on your projects?",
    answer:
      "Quality and safety are core values at Cambridge Building Group. We maintain rigorous quality control processes, comprehensive safety protocols, regular inspections, and ongoing training for all team members. Our impressive safety record and quality outcomes reflect our unwavering commitment to excellence.",
  },
];

// Active FAQ
const activeFaq = ref(null);

function toggleFaq(index) {
  activeFaq.value = activeFaq.value === index ? null : index;
}

// Form submission handler
function submitForm() {
  isSubmitting.value = true;

  // Simulate form submission delay
  setTimeout(() => {
    isSubmitting.value = false;
    isSubmitted.value = true;

    // Reset form
    form.value = {
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      budget: "",
      timeframe: "",
      message: "",
      privacy: false,
    };
  }, 1500);
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <section
      class="relative flex justify-center items-center bg-slate-800 h-[40vh]"
    >
      <div
        class="z-0 absolute inset-0 bg-[url('/contact-header.jpg')] bg-cover bg-center opacity-30"
      ></div>
      <div class="z-10 relative px-8 text-center">
        <h1 class="mb-4 font-bold text-slate-300 text-5xl md:text-6xl">
          Contact Us
        </h1>
        <p class="mx-auto max-w-3xl text-slate-300 text-xl">
          Let's discuss your project and transform your vision into reality.
        </p>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="bg-white px-8 2xl:px-60 py-16">
      <div class="mx-auto container">
        <div class="gap-12 grid grid-cols-1 lg:grid-cols-2">
          <!-- Contact Details -->
          <div>
            <h2 class="mb-6 font-bold text-navy text-4xl">Get In Touch</h2>
            <p class="mb-8 text-slate-700 text-lg">
              Whether you're ready to start a new project, need information
              about our services, or have questions about working with us, we're
              here to help. Contact us today to schedule a consultation with our
              team.
            </p>

            <div class="space-y-6 mb-8">
              <div class="flex items-start">
                <MapPinIcon class="flex-shrink-0 mt-1 mr-4 size-6 text-navy" />
                <div>
                  <h3 class="mb-1 font-semibold text-navy text-lg">
                    Main Office
                  </h3>
                  <p class="text-slate-700">
                    PO Box: 160036, Nashville, TN 37216
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <PhoneIcon class="flex-shrink-0 mt-1 mr-4 size-6 text-navy" />
                <div>
                  <h3 class="mb-1 font-semibold text-navy text-lg">Phone</h3>
                  <p class="text-slate-700">(615) 747-7007</p>
                </div>
              </div>

              <div class="flex items-start">
                <EnvelopeIcon
                  class="flex-shrink-0 mt-1 mr-4 size-6 text-navy"
                />
                <div>
                  <h3 class="mb-1 font-semibold text-navy text-lg">Email</h3>
                  <p class="text-slate-700">info@cambridgebg.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <ClockIcon class="flex-shrink-0 mt-1 mr-4 size-6 text-navy" />
                <div>
                  <h3 class="mb-1 font-semibold text-navy text-lg">Hours</h3>
                  <p class="text-slate-700">Monday-Friday: 8am-5pm CST</p>
                </div>
              </div>
            </div>

            <!-- Services Quick Links -->
            <div class="bg-slate-100 p-6 border-navy border-l-4">
              <h3 class="mb-4 font-bold text-navy text-xl">Our Services</h3>
              <div class="gap-4 grid grid-cols-1 sm:grid-cols-2">
                <div class="flex items-center">
                  <BuildingOfficeIcon class="mr-3 size-5 text-navy" />
                  <NuxtLink
                    to="/services/commercial"
                    class="text-slate-700 hover:text-navy"
                  >
                    Commercial Construction
                  </NuxtLink>
                </div>
                <div class="flex items-center">
                  <HomeModernIcon class="mr-3 size-5 text-navy" />
                  <NuxtLink
                    to="/services/residential"
                    class="text-slate-700 hover:text-navy"
                  >
                    Luxury Residential
                  </NuxtLink>
                </div>
                <div class="flex items-center">
                  <BuildingStorefrontIcon class="mr-3 size-5 text-navy" />
                  <NuxtLink
                    to="/services/renovation"
                    class="text-slate-700 hover:text-navy"
                  >
                    Historic Renovation
                  </NuxtLink>
                </div>
                <div class="flex items-center">
                  <WrenchScrewdriverIcon class="mr-3 size-5 text-navy" />
                  <NuxtLink
                    to="/services/design-build"
                    class="text-slate-700 hover:text-navy"
                  >
                    Design-Build Solutions
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-slate-100 shadow-lg p-8 border-navy border-t-4">
            <h2 class="mb-6 font-bold text-navy text-2xl">
              Request a Consultation
            </h2>

            <!-- Success Message -->
            <div
              v-if="isSubmitted"
              class="bg-green-100 mb-6 p-4 border-green-500 border-l-4 text-green-700"
            >
              <p class="font-medium">Thank you for contacting us!</p>
              <p>
                We've received your inquiry and will get back to you within 24
                hours.
              </p>
            </div>

            <!-- Form -->
            <form v-else @submit.prevent="submitForm" class="space-y-6">
              <!-- Name -->
              <div>
                <label
                  for="name"
                  class="block mb-1 font-medium text-slate-700 text-sm"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy w-full"
                  placeholder="Your Name"
                />
              </div>

              <!-- Email & Phone -->
              <div class="gap-6 grid grid-cols-1 md:grid-cols-2">
                <div>
                  <label
                    for="email"
                    class="block mb-1 font-medium text-slate-700 text-sm"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    class="p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy w-full"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    class="block mb-1 font-medium text-slate-700 text-sm"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    class="p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy w-full"
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>

              <!-- Company -->
              <div>
                <label
                  for="company"
                  class="block mb-1 font-medium text-slate-700 text-sm"
                >
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  v-model="form.company"
                  class="p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy w-full"
                  placeholder="Your Company Name"
                />
              </div>

              <!-- Project Type & Budget -->
              <div class="gap-6 grid grid-cols-1 md:grid-cols-2">
                <div>
                  <label
                    for="projectType"
                    class="block mb-1 font-medium text-slate-700 text-sm"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    v-model="form.projectType"
                    class="p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy w-full"
                  >
                    <option value="" disabled selected>
                      Select Project Type
                    </option>
                    <option
                      v-for="type in projectTypes"
                      :key="type.value"
                      :value="type.value"
                    >
                      {{ type.label }}
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    for="budget"
                    class="block mb-1 font-medium text-slate-700 text-sm"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    v-model="form.budget"
                    class="p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy w-full"
                  >
                    <option value="" disabled selected>
                      Select Budget Range
                    </option>
                    <option
                      v-for="budget in budgetRanges"
                      :key="budget.value"
                      :value="budget.value"
                    >
                      {{ budget.label }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Timeframe -->
              <div>
                <label
                  for="timeframe"
                  class="block mb-1 font-medium text-slate-700 text-sm"
                >
                  Project Timeframe
                </label>
                <select
                  id="timeframe"
                  v-model="form.timeframe"
                  class="p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy w-full"
                >
                  <option value="" disabled selected>Select Timeframe</option>
                  <option
                    v-for="time in timeframeOptions"
                    :key="time.value"
                    :value="time.value"
                  >
                    {{ time.label }}
                  </option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label
                  for="message"
                  class="block mb-1 font-medium text-slate-700 text-sm"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="4"
                  class="p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy w-full"
                  placeholder="Tell us about your project and any specific requirements"
                ></textarea>
              </div>

              <!-- Privacy Policy -->
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="privacy"
                    type="checkbox"
                    v-model="form.privacy"
                    required
                    class="border-slate-300 focus:ring-navy w-4 h-4 text-navy"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="privacy" class="text-slate-700">
                    I agree to the
                    <NuxtLink
                      to="/privacy-policy"
                      class="text-navy hover:underline"
                      target="_blank"
                    >
                      Privacy Policy
                    </NuxtLink>
                    and consent to being contacted about my inquiry.
                  </label>
                </div>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="flex justify-center items-center bg-navy hover:bg-transparent disabled:opacity-70 shadow px-4 py-3 border-2 border-navy w-full font-semibold text-slate-300 hover:text-navy transition duration-200 disabled:cursor-not-allowed"
              >
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Submit Request</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Office Locations -->
    <section class="bg-slate-100 px-8 2xl:px-60 py-16">
      <div class="mx-auto container">
        <h2 class="mb-8 font-bold text-navy text-3xl text-center">
          Our Office
        </h2>
        <div class="flex justify-center gap-8">
          <div
            v-for="(office, index) in officeLocations"
            :key="index"
            class="bg-white shadow-md p-6 border-navy border-t-4 w-1/3"
          >
            <h3 class="mb-4 font-bold text-navy text-xl">{{ office.city }}</h3>
            <div class="space-y-3">
              <div class="flex items-start">
                <MapPinIcon class="flex-shrink-0 mt-1 mr-3 size-5 text-navy" />
                <p class="text-slate-700">{{ office.address }}</p>
              </div>
              <div class="flex items-start">
                <PhoneIcon class="flex-shrink-0 mt-1 mr-3 size-5 text-navy" />
                <p class="text-slate-700">{{ office.phone }}</p>
              </div>
              <div class="flex items-start">
                <EnvelopeIcon
                  class="flex-shrink-0 mt-1 mr-3 size-5 text-navy"
                />
                <p class="text-slate-700">{{ office.email }}</p>
              </div>
              <div class="flex items-start">
                <ClockIcon class="flex-shrink-0 mt-1 mr-3 size-5 text-navy" />
                <p class="text-slate-700">{{ office.hours }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-slate-100 px-8 2xl:px-60 py-16">
      <div class="mx-auto container">
        <h2 class="mb-8 font-bold text-navy text-3xl text-center">
          Frequently Asked Questions
        </h2>
        <div class="mx-auto max-w-3xl">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
            <button
              @click="toggleFaq(index)"
              class="flex justify-between items-center bg-white shadow-md hover:shadow-lg p-4 w-full text-left transition duration-200"
            >
              <h3 class="font-semibold text-navy text-lg">
                {{ faq.question }}
              </h3>
              <svg
                class="w-5 h-5 text-navy transition-transform duration-200 transform"
                :class="{ 'rotate-180': activeFaq === index }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              v-if="activeFaq === index"
              class="bg-white shadow-md p-4 border-slate-100 border-t"
            >
              <p class="text-slate-700">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Outreach -->
    <SectionsCommunityOutreach />
  </div>
</template>
