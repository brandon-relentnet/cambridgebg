import { ScrollReveal } from '@/components/ScrollReveal'
import { services } from '@/data/siteData'
import { scrollToNextSection } from '@/utils/autoScroll'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

interface ServicesProvidedProps {
  showButton?: boolean
}

export function ServicesProvided({ showButton = false }: ServicesProvidedProps) {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section
      id="services-provided"
      className="relative px-8 2xl:px-60 py-section bg-slate-100 bg-dots"
    >
      <div className="container mx-auto py-block">
        <ScrollReveal>
          <div className="w-full md:w-1/2 mb-12">
            <h2 className="font-display text-5xl font-bold text-navy mb-4">Services Provided</h2>
            <p className="text-lg text-slate-700 mb-6">
              Cambridge Building Group offers a comprehensive suite of construction services
              tailored to meet the diverse needs of our clients. From concept to completion, we
              apply our expertise at every stage of the building process.
            </p>
            <div className="flex">
              {showButton && (
                <button
                  type="button"
                  onClick={() => scrollToNextSection('markets-we-serve')}
                  className="bg-navy group text-slate-300 font-semibold px-4 py-2 border-2 border-navy shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
                >
                  Markets We Serve
                  <ChevronRightIcon className="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200" />
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className="relative overflow-hidden group border-2 border-slate-300 transition-all duration-300 hover:border-navy bg-white shadow-md"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="p-6 z-10 relative h-full">
                    <Icon className="size-12 text-navy mb-4" />
                    <h3 className="text-2xl font-bold text-navy mb-3">{service.title}</h3>
                    <p className="text-slate-700">{service.description}</p>
                  </div>
                  <div
                    className={`absolute inset-0 bg-navy transition-opacity duration-300 z-0 ${
                      hoveredService === service.id ? 'opacity-5' : 'opacity-0'
                    }`}
                  />
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
