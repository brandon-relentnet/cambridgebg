import { ScrollReveal } from '@/components/ScrollReveal'
import { clients, testimonials } from '@/data/siteData'
import { scrollToNextSection } from '@/utils/autoScroll'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useRef } from 'react'

interface PastClientsProps {
  showButton?: boolean
}

export function PastClients({ showButton = false }: PastClientsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  function scrollPrev() {
    scrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth' })
  }

  function scrollNext() {
    scrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' })
  }

  return (
    <section
      id="past-clients"
      className="relative px-8 2xl:px-60 py-section bg-slate-800 text-slate-300 bg-grid"
    >
      <div className="container mx-auto py-block">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h2 className="font-display text-5xl font-bold text-slate-300 mb-4">
                Our Valued Clients
              </h2>
              <p className="text-lg text-slate-300">
                Cambridge Building Group has built lasting partnerships with industry leaders across
                diverse sectors. We take pride in our clients&apos; satisfaction and their continued
                trust in our services.
              </p>
            </div>
            {showButton && (
              <button
                type="button"
                onClick={() => scrollToNextSection('trade-partners')}
                className="bg-slate-300 group text-navy font-semibold px-4 py-2 border-2 border-slate-300 shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
              >
                Trade Partners
                <ChevronRightIcon className="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200" />
              </button>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {clients.map((client) => (
              <div
                key={`logo-${client.id}`}
                className="bg-navy p-6 shadow-md flex items-center justify-center h-24 border border-slate-600"
              >
                <p className="text-slate-300 font-bold text-center">{client.name}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8 mb-8">
          <h3 className="text-3xl font-bold text-slate-300">Client Testimonials</h3>

          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={scrollPrev}
              className="rounded-full border border-slate-400 p-3 text-slate-300 transition hover:bg-slate-300 hover:text-navy"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 rtl:rotate-180"
              >
                <title>Previous</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={scrollNext}
              className="rounded-full border border-slate-400 p-3 text-slate-300 transition hover:bg-slate-300 hover:text-navy"
            >
              <svg
                className="size-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Next</title>
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 lg:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="snap-center shrink-0 w-[85%] lg:w-[40%]">
                <blockquote className="flex h-full flex-col justify-between bg-navy p-6 shadow-md sm:p-8 lg:p-12 border-t-4 border-slate-400 hover:-translate-y-1 transition-transform duration-300">
                  <div>
                    <div className="flex gap-0.5 text-slate-300">
                      {Array.from({ length: testimonial.rating }, (_, i) => `star-${i}`).map(
                        (starKey) => (
                          <svg
                            key={starKey}
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ),
                      )}
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-slate-300 sm:text-3xl">
                        {testimonial.company}
                      </p>

                      <p className="mt-4 leading-relaxed text-slate-300">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-slate-400 sm:mt-6">
                    &mdash; {testimonial.author}, {testimonial.title}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
