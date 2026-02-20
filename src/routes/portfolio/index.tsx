import { ContactCTA } from '@/components/sections/ContactCTA'
import { IndustryAwards } from '@/components/sections/IndustryAwards'
import { categories, projects } from '@/data/portfolioData'
import { ArrowsPointingOutIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Link, createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'

export const Route = createFileRoute('/portfolio/')({
  component: PortfolioPage,
})

function PortfolioPage(): React.ReactElement {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    let filtered = projects

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter((project) => project.category === activeCategory)
    }

    // Filter by search query
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
      // Sort featured projects first
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1

      // Then sort by year (newest first)
      return Number.parseInt(b.year) - Number.parseInt(a.year)
    })
  }, [filteredProjects])

  return (
    <div>
      {/* Page Header */}
      <section className="relative h-[40vh] flex items-center justify-center bg-slate-800">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('/portfolio-header.jpg')] bg-cover bg-center" />
        <div className="relative z-10 text-center px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-300 mb-4">Our Portfolio</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore our diverse collection of projects that showcase our expertise, innovation, and
            dedication to excellence.
          </p>
        </div>
      </section>

      {/* Portfolio Controls */}
      <section className="py-8 px-8 2xl:px-60 bg-white border-b border-slate-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition duration-200 ${
                    activeCategory === category.id
                      ? 'bg-navy text-slate-300'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MagnifyingGlassIcon className="size-5 text-slate-500" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-64 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                placeholder="Search projects..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-8 2xl:px-60 bg-slate-100">
        <div className="container mx-auto">
          {sortedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProjects.map((project) => (
                <div key={project.id} className="bg-white shadow-md overflow-hidden group">
                  {/* Project Image */}
                  <div className="h-56 bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      <span className="text-lg">Project Image: {project.title}</span>
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-0 right-0 bg-navy text-slate-300 px-3 py-1 text-sm font-semibold">
                        Featured
                      </div>
                    )}

                    {/* View details button */}
                    <div className="absolute inset-0 bg-navy bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <Link
                        to="/portfolio/$id"
                        params={{ id: String(project.id) }}
                        className="flex items-center text-slate-300 font-semibold px-4 py-2 border-2 border-slate-300 hover:bg-slate-300 hover:text-navy transition duration-200"
                      >
                        View Details
                        <ArrowsPointingOutIcon className="size-4 ml-2" />
                      </Link>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-navy">{project.title}</h3>
                      <span className="text-sm text-slate-500">{project.year}</span>
                    </div>
                    <p className="text-slate-700 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">
                        <span className="font-semibold">Location:</span> {project.location}
                      </span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                        {categories.find((c) => c.id === project.category)?.name ??
                          project.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                className="px-4 py-2 bg-navy text-slate-300 font-medium hover:bg-opacity-90 transition duration-200"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Awards */}
      <IndustryAwards />

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}
