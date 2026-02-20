import { ScrollReveal } from '@/components/ScrollReveal'
import { advantages, safetyMetrics, safetyPractices } from '@/data/siteData'
import { scrollToNextSection } from '@/utils/autoScroll'
import { ChevronRightIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'
import { useMemo, useState } from 'react'

import type { Advantage } from '@/data/siteData'

interface WhyCambridgeProps {
  showButton?: boolean
}

interface SafetyAdvantage extends Advantage {
  isSafety: true
}

type AdvantageItem = Advantage | SafetyAdvantage

const safetyAdvantage: SafetyAdvantage = {
  id: 99,
  title: 'Safety Excellence',
  description:
    "Safety isn't just a priority — it's a core value ingrained in every aspect of our operations. We maintain an unwavering commitment to creating safe work environments for our team, clients, and communities.",
  icon: ShieldCheckIcon,
  isSafety: true,
}

function isSafetyAdvantage(item: AdvantageItem): item is SafetyAdvantage {
  return 'isSafety' in item && item.isSafety === true
}

export function WhyCambridge({ showButton = false }: WhyCambridgeProps): React.ReactElement {
  const allAdvantages: AdvantageItem[] = useMemo(() => [...advantages, safetyAdvantage], [])
  const [activeId, setActiveId] = useState(allAdvantages[0]?.id ?? 1)

  const activeAdvantage = useMemo((): AdvantageItem => {
    return (allAdvantages.find((a) => a.id === activeId) ?? allAdvantages[0]) as AdvantageItem
  }, [activeId, allAdvantages])

  const ActiveIcon = activeAdvantage.icon

  return (
    <section
      id="why-cambridge"
      className="relative bg-graphite px-8 2xl:px-60 py-section text-slate-300 bg-grid"
    >
      <div className="absolute inset-0 bg-noise" />
      <div className="relative py-block mx-auto container">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column */}
          <ScrollReveal direction="left">
            <div className="w-full lg:w-1/3">
              <h2 className="font-display font-bold text-5xl mb-4">
                Why <span className="text-amber">Cambridge</span>
              </h2>
              <p className="text-lg mb-6">
                What sets Cambridge Building Group apart is our unwavering commitment to excellence,
                innovation, and client satisfaction.
              </p>
              <div className="my-8 pl-4 border-amber border-l-2">
                <p className="text-lg italic text-slate-400">
                  &ldquo;Building with Cambridge means partnering with a team that doesn&apos;t just
                  meet industry standards&mdash;we exceed them.&rdquo;
                </p>
              </div>
              {showButton && (
                <button
                  type="button"
                  onClick={() => scrollToNextSection('leadership')}
                  className="group bg-amber shadow-lg px-6 py-2.5 font-semibold text-navy hover:scale-105 transition duration-200 cursor-pointer mt-4"
                >
                  Leadership
                  <ChevronRightIcon className="inline-block -mt-0.5 group-hover:rotate-90 transition duration-200 size-5" />
                </button>
              )}
            </div>
          </ScrollReveal>

          {/* Right column — tabs + content */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="w-full lg:w-2/3">
              {/* Tab buttons */}
              <div className="gap-3 grid grid-cols-2 md:grid-cols-4 mb-6">
                {allAdvantages.map((adv) => {
                  const Icon = adv.icon
                  return (
                    <button
                      type="button"
                      key={adv.id}
                      onClick={() => setActiveId(adv.id)}
                      className={`py-3 px-3 text-left border-b-2 transition duration-200 flex items-center cursor-pointer text-sm ${
                        activeId === adv.id
                          ? 'border-amber text-amber font-semibold'
                          : 'border-slate-600 text-slate-400 hover:border-slate-400 hover:text-slate-300'
                      }`}
                    >
                      <Icon
                        className={`size-4 mr-2 shrink-0 ${
                          activeId === adv.id ? 'text-amber' : 'text-slate-500'
                        }`}
                      />
                      <span className="truncate">{adv.title}</span>
                    </button>
                  )
                })}
              </div>

              {/* Content panel */}
              <div className="bg-navy shadow-lg p-8 border-amber border-l-4 relative overflow-hidden">
                <ActiveIcon className="-right-6 -bottom-6 absolute text-slate-800 opacity-[0.06] size-48" />
                <div className="z-10 relative">
                  <div className="flex items-center mb-6">
                    <ActiveIcon className="mr-4 text-amber size-10" />
                    <h3 className="font-bold text-3xl">{activeAdvantage.title}</h3>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">{activeAdvantage.description}</p>

                  {/* Safety-specific content */}
                  {isSafetyAdvantage(activeAdvantage) && (
                    <div className="space-y-6">
                      {/* Metrics */}
                      <div className="gap-4 grid grid-cols-2 md:grid-cols-4">
                        {safetyMetrics.map((metric) => (
                          <div
                            key={metric.id}
                            className="bg-graphite p-4 border-b-2 border-amber text-center"
                          >
                            <p className="font-bold text-amber text-2xl mb-1">{metric.value}</p>
                            <p className="text-slate-400 text-xs uppercase tracking-wide">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Practices */}
                      <div className="gap-3 grid grid-cols-1 md:grid-cols-2">
                        {safetyPractices.slice(0, 4).map((practice) => (
                          <div key={practice.id} className="bg-graphite p-4">
                            <h4 className="font-semibold text-sm mb-1">{practice.title}</h4>
                            <p className="text-slate-400 text-sm">{practice.description}</p>
                          </div>
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="pt-4 border-slate-600 border-t text-slate-400 italic">
                        &ldquo;Our safety record is the result of rigorous standards, continuous
                        improvement, and a culture where every team member prioritizes safety above
                        all else.&rdquo;
                        <footer className="mt-2 text-sm not-italic text-slate-500">
                          &mdash; Terry Gilley, Founder &amp; President
                        </footer>
                      </blockquote>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
