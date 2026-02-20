import { ScrollReveal } from '@/components/ScrollReveal'
import { advantages, safetyMetrics, safetyPractices } from '@/data/siteData'
import { scrollToNextSection } from '@/utils/autoScroll'
import { ChevronRightIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

interface WhyCambridgeProps {
  showButton?: boolean
}

export function WhyCambridge({ showButton = false }: WhyCambridgeProps): React.ReactElement {
  const [activeId, setActiveId] = useState(advantages[0]?.id ?? 1)

  const activeAdvantage = advantages.find((a) => a.id === activeId) ?? advantages[0]
  const ActiveIcon = activeAdvantage?.icon

  return (
    <section
      id="why-cambridge"
      className="relative bg-graphite px-8 2xl:px-60 py-section text-slate-300 bg-grid"
    >
      <div className="absolute inset-0 bg-noise" />
      <div className="relative py-block mx-auto container">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="mb-6 md:mb-0 w-full md:w-1/2">
              <h2 className="font-display font-bold text-5xl mb-4">
                Why <span className="text-amber">Cambridge</span>
              </h2>
              <p className="text-lg text-slate-400">
                What sets Cambridge Building Group apart is our unwavering commitment to excellence,
                innovation, and client satisfaction.
              </p>
            </div>
            {showButton && (
              <button
                type="button"
                onClick={() => scrollToNextSection('leadership')}
                className="group inline-flex items-center gap-2 bg-amber shadow-lg px-6 py-2.5 font-semibold text-navy hover:scale-105 transition duration-200 cursor-pointer"
              >
                Leadership
                <ChevronRightIcon className="group-hover:rotate-90 transition duration-200 size-4" />
              </button>
            )}
          </div>
        </ScrollReveal>

        {/* Advantage tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8">
            {advantages.map((adv) => {
              const Icon = adv.icon
              return (
                <button
                  type="button"
                  key={adv.id}
                  onClick={() => setActiveId(adv.id)}
                  className={`inline-flex items-center gap-2 py-2.5 px-4 transition duration-200 cursor-pointer border ${
                    activeId === adv.id
                      ? 'bg-amber/10 border-amber text-amber font-semibold'
                      : 'border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className="size-4 shrink-0" />
                  {adv.title}
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Advantage content panel */}
        <ScrollReveal delay={0.2}>
          {ActiveIcon && (
            <div className="bg-navy shadow-lg p-8 md:p-10 border-amber border-l-4 relative overflow-hidden">
              <ActiveIcon className="-right-6 -bottom-6 absolute text-slate-800 opacity-[0.06] size-48" />
              <div className="z-10 relative">
                <div className="flex items-center mb-6">
                  <ActiveIcon className="mr-4 text-amber size-8" />
                  <h3 className="font-bold text-2xl">{activeAdvantage.title}</h3>
                </div>
                <p className="text-lg leading-relaxed max-w-3xl">{activeAdvantage.description}</p>
              </div>
            </div>
          )}
        </ScrollReveal>

        {/* Safety Excellence — always visible, separate from tabs */}
        <ScrollReveal delay={0.25}>
          <div className="mt-12">
            <div className="flex items-center mb-8">
              <ShieldCheckIcon className="mr-4 text-amber size-8" />
              <h3 className="font-display font-bold text-3xl">Safety Excellence</h3>
            </div>
            <p className="text-lg leading-relaxed max-w-3xl mb-8 text-slate-400">
              Safety isn&apos;t just a priority &mdash; it&apos;s a core value ingrained in every
              aspect of our operations. We maintain an unwavering commitment to creating safe work
              environments for our team, clients, and communities.
            </p>

            {/* Metrics */}
            <div className="gap-4 grid grid-cols-2 md:grid-cols-4 mb-8">
              {safetyMetrics.map((metric) => (
                <div key={metric.id} className="bg-navy p-5 border-b-2 border-amber text-center">
                  <p className="font-bold text-amber text-2xl mb-1">{metric.value}</p>
                  <p className="text-slate-400 text-xs uppercase tracking-wide">{metric.label}</p>
                </div>
              ))}
            </div>

            {/* Practices */}
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mb-8">
              {safetyPractices.slice(0, 4).map((practice) => (
                <div key={practice.id} className="bg-navy p-5">
                  <h4 className="font-semibold mb-1">{practice.title}</h4>
                  <p className="text-slate-400 text-sm">{practice.description}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="pl-5 border-amber border-l-2 text-slate-400 italic">
              &ldquo;Our safety record is the result of rigorous standards, continuous improvement,
              and a culture where every team member prioritizes safety above all else.&rdquo;
              <footer className="mt-2 text-sm not-italic text-slate-500">
                &mdash; Terry Gilley, Founder &amp; President
              </footer>
            </blockquote>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
