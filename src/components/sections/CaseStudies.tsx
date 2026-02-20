import { caseStudies } from '@/data/siteData'
import { scrollToNextSection } from '@/utils/autoScroll'
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'

interface CaseStudiesProps {
  showButton?: boolean
}

export function CaseStudies({ showButton = false }: CaseStudiesProps) {
  const hasCaseStudies = caseStudies && caseStudies.length > 0
  const [activeStudy, setActiveStudy] = useState(
    hasCaseStudies ? (caseStudies[0]?.id ?? null) : null,
  )

  const getActiveStudy = useMemo(() => {
    if (!hasCaseStudies) return null
    return caseStudies.find((study) => study.id === activeStudy) ?? caseStudies[0]
  }, [activeStudy, hasCaseStudies])

  if (!hasCaseStudies) return null

  return (
    <section
      id="case-studies"
      className="relative px-8 2xl:px-60 py-section bg-slate-800 text-slate-300"
    >
      <div className="container mx-auto py-block">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-5xl font-bold mb-4">Case Studies</h2>
            <p className="text-lg">
              Explore our featured projects to see how Cambridge Building Group transforms
              challenges into successful outcomes through expertise, innovation, and dedication to
              excellence.
            </p>
          </div>
          {showButton && (
            <button
              type="button"
              onClick={() => scrollToNextSection('past-clients')}
              className="bg-slate-300 group text-navy font-semibold px-4 py-2 border-2 border-slate-300 shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
            >
              Our Clients
              <ChevronRightIcon className="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200" />
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-4 mb-10">
          {caseStudies.map((study) => (
            <button
              type="button"
              key={`nav-${study.id}`}
              onClick={() => setActiveStudy(study.id)}
              className={`px-4 py-2 text-sm font-semibold transition duration-200 border-b-2 cursor-pointer ${
                activeStudy === study.id
                  ? 'border-slate-300 text-slate-300'
                  : 'border-transparent text-slate-500 hover:text-slate-300 hover:border-slate-500'
              }`}
            >
              {study.title}
            </button>
          ))}
        </div>
        {getActiveStudy && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="order-2 lg:order-1">
              <div className="bg-navy p-6 shadow-lg border-l-4 border-slate-400 h-full">
                <div className="inline-block bg-slate-600 text-slate-300 px-3 py-1 text-sm font-semibold mb-4">
                  {getActiveStudy.category}
                </div>
                <h3 className="text-3xl font-bold mb-4">{getActiveStudy.title}</h3>
                <p className="text-lg mb-6">{getActiveStudy.description}</p>

                <h4 className="text-xl font-semibold mb-3">Project Highlights:</h4>
                <ul className="list-none space-y-3 mb-6">
                  {getActiveStudy.highlights.map((highlight: string) => (
                    <li key={highlight} className="flex items-start">
                      <ArrowRightIcon className="size-5 text-slate-300 mr-2 mt-1 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/portfolio"
                  className="inline-block text-slate-300 font-semibold mt-4 group"
                >
                  View Full Case Study
                  <ArrowRightIcon className="size-5 inline-block ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 h-80 lg:h-auto overflow-hidden bg-slate-700">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                <span className="text-lg">Project Image: {getActiveStudy.title}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
