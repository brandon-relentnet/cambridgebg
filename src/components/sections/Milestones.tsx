import { milestones } from '@/data/siteData'
import { scrollToNextSection } from '@/utils/autoScroll'
import { CalendarDateRangeIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { Link } from '@tanstack/react-router'

interface MilestonesProps {
  showButton?: boolean
}

export function Milestones({ showButton = false }: MilestonesProps) {
  return (
    <section className="relative px-8 md:px-20 py-section" id="milestones">
      <div className="container mx-auto py-block">
        <div className="text-left md:text-center mb-12">
          <h2 className="text-5xl mb-4 font-bold text-navy">The Building Blocks</h2>
          <p className="text-lg text-slate-700">
            Discover the milestones that have shaped our journey and built the foundation of our
            success.
          </p>
        </div>
        <ol className="items-start lg:flex border-s-2 lg:border-none border-slate-700">
          {milestones.map((milestone) => (
            <li key={milestone.id} className="relative mb-6 lg:mb-0 group cursor-pointer">
              <Link to={milestone.link} className="flex items-center lg:block">
                <div className="flex items-center -ml-5 mr-2 lg:mr-0 lg:ml-0">
                  <div className="z-10 flex items-center justify-center size-10 rounded-full bg-slate-100 group-hover:bg-navy border-2 border-navy shrink-0 transition duration-200 ring-8 ring-slate-100">
                    <CalendarDateRangeIcon className="size-5 text-navy group-hover:text-slate-300 transition duration-200" />
                  </div>
                  <div className="hidden lg:flex w-full h-0.5 bg-slate-700" />
                </div>
                <div className="mt-3 lg:pe-2 border-2 group-hover:border-slate-700 p-4 border-transparent transition duration-200 mr-2">
                  <ChevronRightIcon className="size-5 hidden group-hover:block text-navy transition duration-200 absolute lg:top-18 top-8 right-6" />
                  <h3 className="text-lg font-semibold text-navy">{milestone.title}</h3>
                  <time className="block mb-2 text-md font-normal italic leading-none text-slate-500">
                    {milestone.year}
                  </time>
                  <p className="text-base font-normal text-slate-700">{milestone.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
        <div className="flex justify-center items-center">
          {showButton && (
            <button
              type="button"
              onClick={() => scrollToNextSection('combined-experience')}
              className="bg-navy group text-slate-300 font-semibold px-4 py-2 border-2 border-navy shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
            >
              Milestones
              <ChevronRightIcon className="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
