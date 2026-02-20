import { tradeCategories } from '@/data/siteData'
import { BuildingStorefrontIcon } from '@heroicons/react/24/solid'
import { useMemo, useState } from 'react'

interface TradePartnersProps {
  showButton?: boolean
}

export function TradePartners({ showButton: _showButton = false }: TradePartnersProps) {
  const [activeCategory, setActiveCategory] = useState(tradeCategories[0]?.id ?? 1)

  const currentCategory = useMemo((): (typeof tradeCategories)[number] => {
    return (tradeCategories.find((category) => category.id === activeCategory) ??
      tradeCategories[0]) as (typeof tradeCategories)[number]
  }, [activeCategory])

  return (
    <section
      id="trade-partners"
      className="relative bg-slate-800 px-8 2xl:px-60 py-section text-slate-300"
    >
      <div className="py-block mx-auto container">
        <div className="items-start gap-12 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="flex items-center mb-4">
              <BuildingStorefrontIcon className="mr-4 size-10 text-slate-300" />
              <h2 className="mb-4 font-bold text-5xl">Trade Partners</h2>
            </div>
            <p className="mb-6 text-lg">
              Cambridge Building Group has established strong relationships with best-in-class
              subcontractors and suppliers across every specialty. Our carefully vetted trade
              partners share our commitment to quality, safety, and client satisfaction.
            </p>
            <div className="my-8 pl-4 border-slate-400 border-l-2">
              <p className="text-lg italic">
                &ldquo;The strength of our trade partner network allows us to assemble the perfect
                team for each project, ensuring specialized expertise and consistent quality across
                all aspects of construction.&rdquo;
              </p>
            </div>
          </div>

          <div className="bg-navy shadow-lg p-6 border-slate-400 border-l-4">
            <h3 className="mb-6 pb-3 border-slate-600 border-b font-bold text-2xl">
              Our Trusted Network
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {tradeCategories.map((category) => (
                <button
                  type="button"
                  key={`nav-${category.id}`}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1 rounded-full font-medium text-sm transition duration-200 cursor-pointer ${
                    activeCategory === category.id
                      ? 'bg-slate-300 text-navy'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-xl">{currentCategory.name}</h4>
              <ul className="space-y-3">
                {currentCategory.partners.map((partner) => (
                  <li key={partner} className="flex items-center">
                    <span className="bg-slate-300 mr-3 rounded-full w-2 h-2" />
                    <span>{partner}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-medium text-slate-400">
                * All partners undergo rigorous qualification and maintain our high standards for
                quality and safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
