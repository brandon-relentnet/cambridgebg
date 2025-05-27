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
    address: "1234 Construction Way, Nashville, TN 37203",
    phone: "(615) 555-7890",
    email: "nashville@cambridgeconstruction.com",
    hours: "Monday-Friday: 8am-5pm CST",
  },
  {
    city: "Atlanta",
    address: "4567 Peachtree Street, Atlanta, GA 30308",
    phone: "(404) 555-1234",
    email: "atlanta@cambridgeconstruction.com",
    hours: "Monday-Friday: 8am-5pm EST",
  },
  {
    city: "Dallas",
    address: "7890 Mockingbird Lane, Dallas, TX 75201",
    phone: "(214) 555-5678",
    email: "dallas@cambridgeconstruction.com",
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
      "Yes, we provide comprehensive pre-construction services including budgeting, scheduling, value engineering, and constructability reviews. These services help identify potential challenges early and establish a solid foundation for project success.",
  },
  {
    question: "What geographic areas do you serve?",
    answer:
      "Cambridge Building Group serves the Southeast and South Central United States, with offices in Nashville, Atlanta, and Dallas. We have the capacity to take on projects throughout Tennessee, Georgia, Texas, and neighboring states.",
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
      class="relative h-[40vh] flex items-center justify-center bg-slate-800"
    >
      <div
        class="absolute inset-0 z-0 opacity-30 bg-[url('/contact-header.jpg')] bg-cover bg-center"
      ></div>
      <div class="relative z-10 text-center px-8">
        <h1 class="text-5xl md:text-6xl font-bold text-slate-300 mb-4">
          Contact Us
        </h1>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto">
          Let's discuss your project and transform your vision into reality.
        </p>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="py-16 px-8 2xl:px-60 bg-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Details -->
          <div>
            <h2 class="text-4xl font-bold text-navy mb-6">Get In Touch</h2>
            <p class="text-lg text-slate-700 mb-8">
              Whether you're ready to start a new project, need information
              about our services, or have questions about working with us, we're
              here to help. Contact us today to schedule a consultation with our
              team.
            </p>

            <div class="space-y-6 mb-8">
              <div class="flex items-start">
                <MapPinIcon class="size-6 text-navy mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 class="text-lg font-semibold text-navy mb-1">
                    Main Office
                  </h3>
                  <p class="text-slate-700">
                    1234 Construction Way, Nashville, TN 37203
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <PhoneIcon class="size-6 text-navy mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 class="text-lg font-semibold text-navy mb-1">Phone</h3>
                  <p class="text-slate-700">(615) 555-7890</p>
                </div>
              </div>

              <div class="flex items-start">
                <EnvelopeIcon
                  class="size-6 text-navy mr-4 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 class="text-lg font-semibold text-navy mb-1">Email</h3>
                  <p class="text-slate-700">info@cambridgeconstruction.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <ClockIcon class="size-6 text-navy mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 class="text-lg font-semibold text-navy mb-1">Hours</h3>
                  <p class="text-slate-700">Monday-Friday: 8am-5pm CST</p>
                </div>
              </div>
            </div>

            <!-- Services Quick Links -->
            <div class="bg-slate-100 p-6 border-l-4 border-navy">
              <h3 class="text-xl font-bold text-navy mb-4">Our Services</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex items-center">
                  <BuildingOfficeIcon class="size-5 text-navy mr-3" />
                  <NuxtLink
                    to="/services/commercial"
                    class="text-slate-700 hover:text-navy"
                  >
                    Commercial Construction
                  </NuxtLink>
                </div>
                <div class="flex items-center">
                  <HomeModernIcon class="size-5 text-navy mr-3" />
                  <NuxtLink
                    to="/services/residential"
                    class="text-slate-700 hover:text-navy"
                  >
                    Luxury Residential
                  </NuxtLink>
                </div>
                <div class="flex items-center">
                  <BuildingStorefrontIcon class="size-5 text-navy mr-3" />
                  <NuxtLink
                    to="/services/renovation"
                    class="text-slate-700 hover:text-navy"
                  >
                    Historic Renovation
                  </NuxtLink>
                </div>
                <div class="flex items-center">
                  <WrenchScrewdriverIcon class="size-5 text-navy mr-3" />
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
          <div class="bg-slate-100 p-8 shadow-lg border-t-4 border-navy">
            <h2 class="text-2xl font-bold text-navy mb-6">
              Request a Consultation
            </h2>

            <!-- Success Message -->
            <div
              v-if="isSubmitted"
              class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6"
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
                  class="block text-sm font-medium text-slate-700 mb-1"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                  placeholder="Your Name"
                />
              </div>

              <!-- Email & Phone -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    class="w-full p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    class="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    class="w-full p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>

              <!-- Company -->
              <div>
                <label
                  for="company"
                  class="block text-sm font-medium text-slate-700 mb-1"
                >
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  v-model="form.company"
                  class="w-full p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                  placeholder="Your Company Name"
                />
              </div>

              <!-- Project Type & Budget -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    for="projectType"
                    class="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    v-model="form.projectType"
                    class="w-full p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
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
                    class="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    v-model="form.budget"
                    class="w-full p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
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
                  class="block text-sm font-medium text-slate-700 mb-1"
                >
                  Project Timeframe
                </label>
                <select
                  id="timeframe"
                  v-model="form.timeframe"
                  class="w-full p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
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
                  class="block text-sm font-medium text-slate-700 mb-1"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
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
                    class="h-4 w-4 text-navy border-slate-300 focus:ring-navy"
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
                class="w-full bg-navy text-slate-300 font-semibold py-3 px-4 border-2 border-navy shadow transition duration-200 hover:bg-transparent hover:text-navy disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
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
    <section class="py-16 px-8 2xl:px-60 bg-slate-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-navy mb-8 text-center">
          Our Offices
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(office, index) in officeLocations"
            :key="index"
            class="bg-white p-6 shadow-md border-t-4 border-navy"
          >
            <h3 class="text-xl font-bold text-navy mb-4">{{ office.city }}</h3>
            <div class="space-y-3">
              <div class="flex items-start">
                <MapPinIcon class="size-5 text-navy mr-3 mt-1 flex-shrink-0" />
                <p class="text-slate-700">{{ office.address }}</p>
              </div>
              <div class="flex items-start">
                <PhoneIcon class="size-5 text-navy mr-3 mt-1 flex-shrink-0" />
                <p class="text-slate-700">{{ office.phone }}</p>
              </div>
              <div class="flex items-start">
                <EnvelopeIcon
                  class="size-5 text-navy mr-3 mt-1 flex-shrink-0"
                />
                <p class="text-slate-700">{{ office.email }}</p>
              </div>
              <div class="flex items-start">
                <ClockIcon class="size-5 text-navy mr-3 mt-1 flex-shrink-0" />
                <p class="text-slate-700">{{ office.hours }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section Placeholder -->
    <section class="py-16 px-8 2xl:px-60 bg-white">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-navy mb-8 text-center">Find Us</h2>
        <div class="bg-slate-200 h-96 w-full flex items-center justify-center">
          <p class="text-slate-700 text-lg">Map would be displayed here</p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 px-8 2xl:px-60 bg-slate-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-navy mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div class="max-w-3xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
            <button
              @click="toggleFaq(index)"
              class="w-full text-left bg-white p-4 flex justify-between items-center shadow-md hover:shadow-lg transition duration-200"
            >
              <h3 class="text-lg font-semibold text-navy">
                {{ faq.question }}
              </h3>
              <svg
                class="w-5 h-5 text-navy transform transition-transform duration-200"
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
              class="bg-white p-4 shadow-md border-t border-slate-100"
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
