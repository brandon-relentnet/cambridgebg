import { ScrollReveal } from '@/components/ScrollReveal'
import { services } from '@/data/siteData'
import { scrollToNextSection } from '@/utils/autoScroll'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

interface ServicesProvidedProps {
  showButton?: boolean
}

export function ServicesProvided({
  showButton = false,
}: ServicesProvidedProps): React.ReactElement {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section id="services-provided" className="relative bg-stone bg-dots px-8 2xl:px-60 py-section">
      <div className="py-block mx-auto container">
        <ScrollReveal>
          <div className="mb-12 w-full md:w-1/2">
            <h2 className="font-display font-bold text-navy text-5xl mb-4">Services Provided</h2>
            <p className="mb-6 text-slate-700 text-lg">
              Cambridge Building Group offers a comprehensive suite of construction services
              tailored to meet the diverse needs of our clients. From concept to completion, we
              apply our expertise at every stage of the building process.
            </p>
            {showButton && (
              <button
                type="button"
                onClick={() => scrollToNextSection('markets-we-serve')}
                className="group bg-navy shadow-lg px-6 py-2.5 border-2 border-navy font-semibold text-slate-300 hover:scale-105 transition duration-200 cursor-pointer"
              >
                Markets We Serve
                <ChevronRightIcon className="inline-block -mt-0.5 group-hover:rotate-90 transition duration-200 size-5" />
              </button>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className={`group relative overflow-hidden bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    hoveredService === service.id
                      ? 'border-t-4 border-amber'
                      : 'border-t-4 border-slate-300'
                  }`}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="z-10 relative p-6 h-full">
                    <div className="bg-amber/10 mb-4 p-3 rounded-full w-fit">
                      <Icon className="text-amber size-8" />
                    </div>
                    <h3 className="mb-3 font-bold text-navy text-2xl">{service.title}</h3>
                    <p className="text-slate-700">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
