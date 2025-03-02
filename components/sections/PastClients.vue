<script setup>
import { ref, onMounted } from "vue";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import { scrollToNextSection } from "~/utils/autoScroll";
import { clients, testimonials } from "~/data/siteData";

const props = defineProps({
  showButton: {
    type: Boolean,
    default: false
  }
});

const keenSlider = ref(null);

onMounted(async () => {
  try {
    const KeenSlider = await import(
      "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm"
    ).then((m) => m.default);

    setTimeout(() => {
      const sliderElement = document.getElementById("keen-slider");
      if (sliderElement) {
        keenSlider.value = new KeenSlider(sliderElement, {
          loop: true,
          slides: {
            origin: "center",
            perView: 1.25,
            spacing: 16,
          },
          breakpoints: {
            "(min-width: 1024px)": {
              slides: {
                origin: "auto",
                perView: 2.5,
                spacing: 32,
              },
            },
          },
        });

        const keenSliderPrevious = document.getElementById(
          "keen-slider-previous"
        );
        const keenSliderNext = document.getElementById("keen-slider-next");

        if (keenSliderPrevious && keenSliderNext) {
          keenSliderPrevious.addEventListener("click", () =>
            keenSlider.value.prev()
          );
          keenSliderNext.addEventListener("click", () =>
            keenSlider.value.next()
          );
        }
      }
    }, 100);
  } catch (error) {
    console.error("Error initializing KeenSlider:", error);
  }
});
</script>

<template>
  <section
    id="past-clients"
    class="relative px-8 2xl:px-60 py-section bg-slate-100"
  >
    <link
      href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css"
      rel="stylesheet"
    />

    <div class="container mx-auto py-block">
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
      >
        <div class="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 class="text-5xl font-bold text-navy mb-4">Our Valued Clients</h2>
          <p class="text-lg text-slate-700">
            Cambridge Construction has built lasting partnerships with industry
            leaders across diverse sectors. We take pride in our clients'
            satisfaction and their continued trust in our services.
          </p>
        </div>
        <button
          v-if="showButton"
          @click="scrollToNextSection('trade-partners')"
          class="bg-navy group text-slate-300 font-semibold px-4 py-2 border-2 border-navy shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
        >
          Trade Partners
          <ChevronRightIcon
            class="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200"
          />
        </button>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
        <div
          v-for="client in clients"
          :key="`logo-${client.id}`"
          class="bg-white p-6 shadow-md flex items-center justify-center h-24"
        >
          <p class="text-navy font-bold text-center">{{ client.name }}</p>
        </div>
      </div>
      <div
        class="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8 mb-8"
      >
        <h3 class="text-3xl font-bold text-navy">Client Testimonials</h3>

        <div class="mt-8 flex gap-4 lg:mt-0">
          <button
            aria-label="Previous testimonial"
            id="keen-slider-previous"
            class="rounded-full border border-navy p-3 text-navy transition hover:bg-navy hover:text-slate-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5 rtl:rotate-180"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            aria-label="Next testimonial"
            id="keen-slider-next"
            class="rounded-full border border-navy p-3 text-navy transition hover:bg-navy hover:text-slate-300"
          >
            <svg
              class="size-5 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
        <div id="keen-slider" class="keen-slider">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="keen-slider__slide"
          >
            <blockquote
              class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 lg:p-12 border-t-4 border-navy"
            >
              <div>
                <div class="flex gap-0.5 text-navy">
                  <svg
                    v-for="star in testimonial.rating"
                    :key="star"
                    class="size-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>

                <div class="mt-4">
                  <p class="text-2xl font-bold text-navy sm:text-3xl">
                    {{ testimonial.company }}
                  </p>

                  <p class="mt-4 leading-relaxed text-slate-700">
                    "{{ testimonial.text }}"
                  </p>
                </div>
              </div>

              <footer class="mt-4 text-sm font-medium text-slate-700 sm:mt-6">
                &mdash; {{ testimonial.author }}, {{ testimonial.title }}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.keen-slider {
  position: relative;
  overflow: visible;
}

.keen-slider__slide {
  min-height: 300px;
}

.keen-slider__slide blockquote {
  height: 100%;
}

.keen-slider__slide blockquote {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.keen-slider__slide blockquote:hover {
  transform: translateY(-5px);
}
</style>
