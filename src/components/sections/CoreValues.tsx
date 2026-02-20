import { ScrollReveal } from '@/components/ScrollReveal'
import { coreValues } from '@/data/siteData'
import { scrollToNextSection } from '@/utils/autoScroll'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useMemo, useState } from 'react'

interface CoreValuesProps {
  showButton?: boolean
}

export function CoreValues({ showButton = false }: CoreValuesProps): React.ReactElement {
  const [activeValue, setActiveValue] = useState(coreValues[0]?.id ?? 1)

  const getActiveValue = useMemo((): (typeof coreValues)[number] => {
    return (coreValues.find((val) => val.id === activeValue) ??
      coreValues[0]) as (typeof coreValues)[number]
  }, [activeValue])

  const ActiveIcon = getActiveValue.icon

  return (
    <section
      id="core-values"
      className="relative bg-graphite px-8 2xl:px-60 py-section text-slate-300 bg-grid"
    >
      <div className="absolute inset-0 bg-noise" />
      <div className="relative py-block mx-auto container">
        <ScrollReveal>
          <div className="mx-auto mb-12 w-full md:w-1/3 text-left md:text-center">
            <h2 className="font-display font-bold text-5xl mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-400">
              The guiding principles that shape our work and define our legacy.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-5">
            {/* Values Navigation - Sidebar */}
            <div className="lg:col-span-1 flex flex-col space-y-2">
              {coreValues.map((value) => {
                const Icon = value.icon
                return (
                  <button
                    type="button"
                    key={`nav-${value.id}`}
                    onClick={() => setActiveValue(value.id)}
                    className={`flex items-center p-4 text-left transition-all duration-200 border-l-4 cursor-pointer ${
                      activeValue === value.id
                        ? 'bg-navy border-amber shadow-md'
                        : 'bg-transparent border-transparent hover:border-slate-600 hover:bg-slate-700/50'
                    }`}
                  >
                    <Icon
                      className={`size-5 mr-3 ${
                        activeValue === value.id ? 'text-amber' : 'text-slate-500'
                      }`}
                    />
                    <span
                      className={`font-semibold ${
                        activeValue === value.id ? 'text-slate-200' : 'text-slate-400'
                      }`}
                    >
                      {value.title}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Active Value Content */}
            <div className="lg:col-span-4">
              <div className="relative bg-navy shadow-lg p-8 border-amber border-l-4 h-full overflow-hidden">
                {/* Background Icon */}
                <ActiveIcon className="-right-10 -bottom-10 absolute text-slate-800 opacity-[0.06] size-60" />

                {/* Content */}
                <div className="z-10 relative">
                  <div className="flex items-center mb-6">
                    <ActiveIcon className="mr-4 text-amber size-10" />
                    <div>
                      <h3 className="font-bold text-3xl">{getActiveValue.title}</h3>
                      <p className="text-slate-400 text-xl italic">{getActiveValue.tagline}</p>
                    </div>
                  </div>

                  <div
                    className="text-lg leading-relaxed"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static content from data file
                    dangerouslySetInnerHTML={{ __html: getActiveValue.description }}
                  />

                  <div className="mt-8 pt-6 border-slate-700 border-t">
                    <h4 className="mb-3 font-semibold text-xl">How We Apply This Value:</h4>
                    <div className="flex items-start">
                      <span className="bg-amber/20 mr-3 p-1 rounded-full">
                        <ChevronRightIcon className="text-amber size-4" />
                      </span>
                      <p className="text-slate-300">
                        {getActiveValue.application ||
                          'This core value guides our approach to every project, influencing how we interact with clients, collaborate with partners, and deliver our services.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {showButton && (
          <div className="flex justify-center items-center mt-12">
            <button
              type="button"
              onClick={() => scrollToNextSection('track-record')}
              className="group bg-amber shadow-lg px-6 py-2.5 font-semibold text-navy hover:scale-105 transition duration-200 cursor-pointer"
            >
              Track Record
              <ChevronRightIcon className="inline-block -mt-0.5 group-hover:rotate-90 transition duration-200 size-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
