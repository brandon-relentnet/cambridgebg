import { ScrollReveal } from '@/components/ScrollReveal'
import { coreValues } from '@/data/siteData'
import { scrollToNextSection } from '@/utils/autoScroll'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useMemo, useState } from 'react'

interface CoreValuesProps {
  showButton?: boolean
}

export function CoreValues({ showButton = false }: CoreValuesProps) {
  const [activeValue, setActiveValue] = useState(coreValues[0]?.id ?? 1)

  const getActiveValue = useMemo((): (typeof coreValues)[number] => {
    return (coreValues.find((val) => val.id === activeValue) ??
      coreValues[0]) as (typeof coreValues)[number]
  }, [activeValue])

  const ActiveIcon = getActiveValue.icon

  return (
    <section
      id="core-values"
      className="relative px-8 2xl:px-60 py-section bg-slate-800 text-slate-300 bg-grid"
    >
      <div className="container mx-auto py-block">
        <ScrollReveal>
          <div className="w-full md:w-1/3 text-left md:text-center mx-auto mb-12">
            <h2 className="font-display text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg">
              The guiding principles that shape our work and define our legacy.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Values Navigation - Sidebar */}
            <div className="lg:col-span-1 flex flex-col space-y-2">
              {coreValues.map((value) => {
                const Icon = value.icon
                return (
                  <button
                    type="button"
                    key={`nav-${value.id}`}
                    onClick={() => setActiveValue(value.id)}
                    className={`flex items-center p-4 text-left transition-all duration-200 border-l-4 ${
                      activeValue === value.id
                        ? 'bg-navy border-slate-300 shadow-md'
                        : 'bg-transparent border-transparent hover:border-slate-600 hover:bg-slate-700'
                    }`}
                  >
                    <Icon
                      className={`size-5 mr-3 ${
                        activeValue === value.id ? 'text-slate-300' : 'text-slate-400'
                      }`}
                    />
                    <span
                      className={`font-semibold ${
                        activeValue === value.id ? 'text-slate-300' : 'text-slate-400'
                      }`}
                    >
                      {value.title}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Active Value Content - Main Content */}
            <div className="lg:col-span-4">
              <div className="bg-navy shadow-lg border-l-4 border-slate-400 p-8 h-full relative overflow-hidden">
                {/* Background Icon */}
                <ActiveIcon className="absolute -bottom-10 -right-10 size-60 text-slate-800 opacity-10" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <ActiveIcon className="size-10 text-slate-300 mr-4" />
                    <div>
                      <h3 className="text-3xl font-bold">{getActiveValue.title}</h3>
                      <p className="text-xl text-slate-400 italic">{getActiveValue.tagline}</p>
                    </div>
                  </div>

                  <div
                    className="text-lg leading-relaxed"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static content from data file
                    dangerouslySetInnerHTML={{ __html: getActiveValue.description }}
                  />

                  {/* Example of how the value is applied */}
                  <div className="mt-8 pt-6 border-t border-slate-700">
                    <h4 className="text-xl font-semibold mb-3">How We Apply This Value:</h4>
                    <div className="flex items-start">
                      <span className="bg-slate-700 p-1 rounded-full mr-3">
                        <ChevronRightIcon className="size-4 text-slate-300" />
                      </span>
                      <p>
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

        <div className="flex justify-center items-center mt-12">
          {showButton && (
            <button
              type="button"
              onClick={() => scrollToNextSection('milestones')}
              className="bg-slate-300 group text-navy font-semibold px-4 py-2 border-2 border-slate-300 shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
            >
              Milestones
              <ChevronRightIcon className="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
