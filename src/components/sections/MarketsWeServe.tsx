import { ScrollReveal } from '@/components/ScrollReveal'
import { markets } from '@/data/siteData'
import { scrollToNextSection } from '@/utils/autoScroll'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

interface MarketsWeServeProps {
  showButton?: boolean
}

export function MarketsWeServe({ showButton = false }: MarketsWeServeProps) {
  const [activeMarket, setActiveMarket] = useState<number | null>(null)

  function toggleMarket(id: number) {
    setActiveMarket(activeMarket === id ? null : id)
  }

  return (
    <section
      id="markets-we-serve"
      className="relative px-8 2xl:px-60 py-section bg-slate-800 text-slate-300 bg-grid"
    >
      <div className="container mx-auto py-block">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h2 className="font-display text-5xl font-bold mb-4">Markets We Serve</h2>
              <p className="text-lg">
                Cambridge Building Group delivers specialized expertise across diverse industry
                sectors, understanding the unique challenges and requirements of each market.
              </p>
            </div>
            {showButton && (
              <button
                type="button"
                onClick={() => scrollToNextSection('competitive-advantage')}
                className="bg-slate-300 group text-navy font-semibold px-4 py-2 border-2 border-slate-300 shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
              >
                Our Advantage
                <ChevronRightIcon className="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200" />
              </button>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {markets.map((market) => (
              <div
                key={market.id}
                className={`${market.bgClass} relative overflow-hidden shadow-lg cursor-pointer group`}
                style={{ alignSelf: 'flex-start' }}
              >
                <button
                  type="button"
                  className="p-6 z-10 relative w-full text-left"
                  onClick={() => toggleMarket(market.id)}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-navy mb-1">{market.title}</h3>
                    <div className="bg-navy text-slate-300 px-2 py-1 text-sm font-semibold whitespace-nowrap">
                      {market.projects} projects
                    </div>
                  </div>
                  <div
                    className={`h-1 bg-navy mt-3 transition-all duration-300 ${
                      activeMarket === market.id ? 'w-full' : 'w-12'
                    }`}
                  />
                </button>
                {activeMarket === market.id && (
                  <div className="px-6 pb-6 z-10 relative">
                    <p className="text-slate-700 transition-all duration-300">
                      {market.description}
                    </p>
                  </div>
                )}
                <div
                  className={`absolute top-0 right-0 opacity-10 transition-transform duration-500 ${
                    activeMarket === market.id ? 'scale-110' : ''
                  }`}
                >
                  <ChevronRightIcon className="size-24 text-navy transform rotate-45" />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
