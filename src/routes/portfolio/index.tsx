import { ContactCTA } from '@/components/sections/ContactCTA'
import { categories, projects } from '@/data/portfolioData'
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { createFileRoute } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'motion/react'
import { useMemo, useState } from 'react'

export const Route = createFileRoute('/portfolio/')({
  component: PortfolioPage,
})

function PortfolioPage(): React.ReactElement {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    let filtered = projects

    if (activeCategory !== 'all') {
      filtered = filtered.filter((project) => project.category === activeCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.location.toLowerCase().includes(query) ||
          project.category.toLowerCase().includes(query),
      )
    }

    return filtered
  }, [activeCategory, searchQuery])

  const sortedProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return Number.parseInt(b.year) - Number.parseInt(a.year)
    })
  }, [filteredProjects])

  return (
    <div>
      {/* Page Header */}
      <section className="relative h-[50vh] flex items-end bg-graphite overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute inset-0 z-0 opacity-15 bg-[url('/portfolio-header.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-graphite via-graphite/60 to-transparent" />
        <div className="relative z-10 px-8 2xl:px-60 pb-12 w-full">
          <motion.p
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="font-display text-amber text-lg tracking-widest uppercase mb-2"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="font-display text-5xl md:text-7xl text-stone mb-4"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-xl text-slate-400 max-w-2xl"
          >
            Explore our diverse collection of projects that showcase our expertise, innovation, and
            dedication to excellence.
          </motion.p>
        </div>
      </section>

      {/* ── LIGHT: Controls + Portfolio Grid ──────────── */}
      <div className="slant-bottom">
        <section className="py-6 px-8 2xl:px-60 bg-stone border-b border-amber/20">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer border ${
                      activeCategory === category.id
                        ? 'border-amber text-amber font-semibold'
                        : 'border-slate-300 text-slate-600 hover:border-amber hover:text-navy'
                    }`}
                  >
                    {activeCategory === category.id && (
                      <motion.span
                        layoutId="portfolio-filter"
                        className="absolute inset-0 bg-amber/10"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{category.name}</span>
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MagnifyingGlassIcon className="size-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full md:w-64 bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent text-navy"
                  placeholder="Search projects..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-section px-8 2xl:px-60 bg-stone bg-dots">
          <div className="py-block mx-auto container">
            {sortedProjects.length > 0 ? (
              <AnimatePresence mode="popLayout">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sortedProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                      whileHover={{ y: -4 }}
                      className="bg-white shadow-lg overflow-hidden group"
                    >
                      {/* Project Image */}
                      <div className="h-56 bg-slate-200 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                          <span className="text-sm">Project Image: {project.title}</span>
                        </div>

                        {project.featured && (
                          <div className="absolute top-0 right-0 bg-amber px-3 py-1 text-sm font-semibold text-navy">
                            Featured
                          </div>
                        )}
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-navy">{project.title}</h3>
                          <span className="text-sm text-slate-500 shrink-0 ml-3">
                            {project.year}
                          </span>
                        </div>
                        <p className="text-slate-700 mb-4 line-clamp-2 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="flex items-center text-sm text-slate-600">
                            <MapPinIcon className="size-4 text-amber mr-1 shrink-0" />
                            {project.location}
                          </span>
                          <span className="px-3 py-1 bg-amber/10 text-amber text-xs font-medium">
                            {categories.find((c) => c.id === project.category)?.name ??
                              project.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-navy mb-2">No Projects Found</h3>
                <p className="text-slate-700 mb-6">Try adjusting your filters or search query.</p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('all')
                    setSearchQuery('')
                  }}
                  className="inline-flex items-center gap-2 bg-navy px-6 py-2.5 font-semibold text-stone hover:scale-105 transition duration-200 cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* ── DARK: Contact CTA ──────────── */}
      <div className="slant-top">
        <ContactCTA />
      </div>
    </div>
  )
}
