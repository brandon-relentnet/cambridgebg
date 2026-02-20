import { ScrollReveal } from '@/components/ScrollReveal'
import { advantages } from '@/data/siteData'
import { scrollToNextSection } from '@/utils/autoScroll'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useMemo, useState } from 'react'

interface CompetitiveAdvantageProps {
  showButton?: boolean
}

export function CompetitiveAdvantage({ showButton = false }: CompetitiveAdvantageProps) {
  const [activeAdvantage, setActiveAdvantage] = useState(1)

  const getActiveAdvantage = useMemo((): (typeof advantages)[number] => {
    return (advantages.find((adv) => adv.id === activeAdvantage) ??
      advantages[0]) as (typeof advantages)[number]
  }, [activeAdvantage])

  const ActiveIcon = getActiveAdvantage.icon

  return (
    <section id="competitive-advantage" className="relative px-8 2xl:px-60 py-section">
      <div className="container mx-auto py-block">
        <div className="flex flex-col lg:flex-row gap-12">
          <ScrollReveal direction="left">
            <div className="w-full lg:w-1/3">
              <h2 className="font-display text-5xl font-bold text-navy mb-4">
                Our Competitive Advantage
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                What sets Cambridge Building Group apart is our unwavering commitment to excellence,
                innovation, and client satisfaction. Our competitive advantages drive successful
                outcomes for every project we undertake.
              </p>
              <div className="border-l-2 border-navy pl-4 my-8">
                <p className="text-lg text-slate-700 italic">
                  &ldquo;Building with Cambridge means partnering with a team that doesn&apos;t just
                  meet industry standards&mdash;we exceed them. Our competitive edge translates
                  directly to value and satisfaction for our clients.&rdquo;
                </p>
              </div>
              {showButton && (
                <button
                  type="button"
                  onClick={() => scrollToNextSection('safety-on-the-job')}
                  className="bg-navy group text-slate-300 font-semibold px-4 py-2 border-2 border-navy shadow-lg transition duration-200 hover:scale-115 cursor-pointer mt-4"
                >
                  Safety First
                  <ChevronRightIcon className="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200" />
                </button>
              )}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.15}>
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {advantages.slice(0, 3).map((advantage) => {
                  const Icon = advantage.icon
                  return (
                    <button
                      type="button"
                      key={advantage.id}
                      onClick={() => setActiveAdvantage(advantage.id)}
                      className={`py-3 px-4 text-left border-b-2 transition duration-200 flex items-center cursor-pointer ${
                        activeAdvantage === advantage.id
                          ? 'border-navy text-navy font-semibold'
                          : 'border-slate-300 text-slate-600 hover:border-slate-500'
                      }`}
                    >
                      <Icon
                        className={`size-5 mr-2 ${
                          activeAdvantage === advantage.id ? 'text-navy' : 'text-slate-500'
                        }`}
                      />
                      {advantage.title}
                    </button>
                  )
                })}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {advantages.slice(3).map((advantage) => {
                  const Icon = advantage.icon
                  return (
                    <button
                      type="button"
                      key={advantage.id}
                      onClick={() => setActiveAdvantage(advantage.id)}
                      className={`py-3 px-4 text-left border-b-2 transition duration-200 flex items-center cursor-pointer ${
                        activeAdvantage === advantage.id
                          ? 'border-navy text-navy font-semibold'
                          : 'border-slate-300 text-slate-600 hover:border-slate-500'
                      }`}
                    >
                      <Icon
                        className={`size-5 mr-2 ${
                          activeAdvantage === advantage.id ? 'text-navy' : 'text-slate-500'
                        }`}
                      />
                      {advantage.title}
                    </button>
                  )
                })}
              </div>
              <div className="bg-slate-100 p-8 shadow-lg border-l-4 border-navy relative overflow-hidden">
                <ActiveIcon className="size-36 text-slate-200 absolute -bottom-6 -right-6 opacity-30" />
                <h3 className="text-3xl font-bold text-navy mb-4">{getActiveAdvantage.title}</h3>
                <p className="text-lg text-slate-700 relative z-10">
                  {getActiveAdvantage.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
