import { ScrollReveal } from '@/components/ScrollReveal'
import { markets } from '@/data/siteData'
import { scrollToNextSection } from '@/utils/autoScroll'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

interface MarketsWeServeProps {
  showButton?: boolean
}

export function MarketsWeServe({ showButton = false }: MarketsWeServeProps): React.ReactElement {
  const [activeMarket, setActiveMarket] = useState<number | null>(null)

  function toggleMarket(id: number): void {
    setActiveMarket(activeMarket === id ? null : id)
  }

  return (
    <section id="markets-we-serve" className="relative bg-stone bg-dots px-8 2xl:px-60 py-section">
      <div className="py-block mx-auto container">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="mb-6 md:mb-0 w-full md:w-1/2">
              <h2 className="font-display font-bold text-navy text-5xl mb-4">Markets We Serve</h2>
              <p className="text-lg text-slate-700">
                Cambridge Building Group delivers specialized expertise across diverse industry
                sectors, understanding the unique challenges and requirements of each market.
              </p>
            </div>
            {showButton && (
              <button
                type="button"
                onClick={() => scrollToNextSection('why-cambridge')}
                className="group bg-navy shadow-lg px-6 py-2.5 border-2 border-navy font-semibold text-slate-300 hover:scale-105 transition duration-200 cursor-pointer"
              >
                Our Advantage
                <ChevronRightIcon className="inline-block -mt-0.5 group-hover:rotate-90 transition duration-200 size-5" />
              </button>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {markets.map((market) => (
              <div
                key={market.id}
                className="group bg-white relative shadow-lg overflow-hidden cursor-pointer"
                style={{ alignSelf: 'flex-start' }}
              >
                <button
                  type="button"
                  className="z-10 relative p-6 w-full text-left cursor-pointer"
                  onClick={() => toggleMarket(market.id)}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-navy text-lg">{market.title}</h3>
                    <div className="bg-amber px-2 py-1 font-semibold text-navy text-sm whitespace-nowrap">
                      {market.projects} projects
                    </div>
                  </div>
                  <div
                    className={`h-0.5 bg-amber mt-3 transition-all duration-300 ${
                      activeMarket === market.id ? 'w-full' : 'w-10'
                    }`}
                  />
                </button>
                {activeMarket === market.id && (
                  <div className="z-10 relative px-6 pb-6">
                    <p className="text-slate-700 text-sm">{market.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
