import { ScrollReveal } from '@/components/ScrollReveal'
import { clients, testimonials, tradeCategories } from '@/data/siteData'
import { BuildingStorefrontIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import { useMemo, useState } from 'react'

interface NetworkProps {
  showButton?: boolean
}

export function Network({ showButton: _showButton = false }: NetworkProps): React.ReactElement {
  const [activeCategory, setActiveCategory] = useState(tradeCategories[0]?.id ?? 1)

  const currentCategory = useMemo((): (typeof tradeCategories)[number] => {
    return (tradeCategories.find((c) => c.id === activeCategory) ??
      tradeCategories[0]) as (typeof tradeCategories)[number]
  }, [activeCategory])

  return (
    <section id="network" className="relative bg-stone bg-dots px-8 2xl:px-60 py-section">
      <div className="py-block mx-auto container">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="font-display font-bold text-navy text-5xl mb-4">
              Our <span className="text-amber">Network</span>
            </h2>
            <p className="max-w-2xl text-lg text-slate-700">
              Strong relationships with best-in-class partners and valued clients drive the quality
              and reliability of every Cambridge project.
            </p>
          </div>
        </ScrollReveal>

        <div className="items-start gap-12 grid grid-cols-1 lg:grid-cols-2">
          {/* Trade Partners */}
          <ScrollReveal direction="left">
            <div>
              <div className="flex items-center mb-6">
                <BuildingStorefrontIcon className="mr-3 text-amber size-7" />
                <h3 className="font-display font-bold text-navy text-2xl">Trade Partners</h3>
              </div>

              <div className="border-l-2 border-amber pl-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {tradeCategories.map((category) => (
                    <button
                      type="button"
                      key={`nav-${category.id}`}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-3 py-1.5 rounded-full font-medium text-sm transition duration-200 cursor-pointer ${
                        activeCategory === category.id
                          ? 'bg-amber text-navy'
                          : 'bg-slate-300/50 text-slate-700 hover:bg-slate-300'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                <h4 className="mb-4 font-semibold text-navy text-lg">{currentCategory.name}</h4>
                <ul className="space-y-3">
                  {currentCategory.partners.map((partner) => (
                    <li key={partner} className="flex items-center text-slate-700">
                      <span className="bg-amber mr-3 rounded-full w-2 h-2" />
                      <span>{partner}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-slate-500 text-sm">
                  * All partners undergo rigorous qualification and maintain our high standards for
                  quality and safety.
                </p>
              </div>

              <div className="my-8 pl-4 border-amber border-l-2">
                <p className="text-slate-600 italic">
                  &ldquo;The strength of our trade partner network allows us to assemble the perfect
                  team for each project, ensuring specialized expertise and consistent
                  quality.&rdquo;
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Clients & Testimonials */}
          <ScrollReveal direction="right" delay={0.15}>
            <div>
              <div className="flex items-center mb-6">
                <UserGroupIcon className="mr-3 text-amber size-7" />
                <h3 className="font-display font-bold text-navy text-2xl">
                  Clients &amp; Testimonials
                </h3>
              </div>

              {/* Client names */}
              <div className="gap-4 grid grid-cols-2 mb-8">
                {clients.map((client) => (
                  <div key={`logo-${client.id}`} className="border-l-2 border-amber pl-4 py-3">
                    <p className="font-bold text-navy">{client.name}</p>
                  </div>
                ))}
              </div>

              {/* Testimonials */}
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.id} className="border-l-2 border-amber pl-6 py-2">
                  <div className="flex gap-0.5 mb-3 text-amber">
                    {Array.from({ length: testimonial.rating }, (_, i) => `star-${i}`).map(
                      (starKey) => (
                        <svg
                          key={starKey}
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ),
                    )}
                  </div>
                  <p className="mb-3 text-slate-700 text-lg leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <footer className="text-slate-500 text-sm">
                    &mdash; {testimonial.author}, {testimonial.title}
                  </footer>
                </blockquote>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
