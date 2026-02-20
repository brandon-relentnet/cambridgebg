import { awards } from '@/data/siteData'
import { scrollToNextSection } from '@/utils/autoScroll'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

interface IndustryAwardsProps {
  showButton?: boolean
}

export function IndustryAwards({ showButton = false }: IndustryAwardsProps) {
  const featuredAwards = awards.filter((award) => award.featured)
  const otherAwards = awards.filter((award) => !award.featured)

  return (
    <section id="industry-awards" className="relative px-8 2xl:px-60 py-section bg-slate-100">
      <div className="container mx-auto py-block">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-5xl font-bold text-navy mb-4">Industry Recognition</h2>
            <p className="text-lg text-slate-700">
              Cambridge Building Group&apos;s commitment to excellence has been recognized through
              numerous prestigious industry awards, reflecting our dedication to quality,
              innovation, and client satisfaction.
            </p>
          </div>
          {showButton && (
            <button
              type="button"
              onClick={() => scrollToNextSection('case-studies')}
              className="bg-navy group text-slate-300 font-semibold px-4 py-2 border-2 border-navy shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
            >
              Case Studies
              <ChevronRightIcon className="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200" />
            </button>
          )}
        </div>

        {/* Featured Awards */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-navy mb-8 border-b-2 border-slate-300 pb-2">
            Featured Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAwards.map((award) => (
              <div
                key={award.id}
                className="bg-white shadow-lg border-t-4 border-navy relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-navy text-slate-300 px-4 py-1 text-sm font-semibold">
                  {award.year}
                </div>
                <div className="p-6 pt-10">
                  <h4 className="text-xl font-bold text-navy mb-2">{award.title}</h4>
                  <p className="text-slate-600 italic mb-4">{award.organization}</p>
                  <p className="text-navy font-semibold mb-2">Project: {award.project}</p>
                  <p className="text-slate-700">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Awards */}
        {otherAwards.length > 0 && (
          <div>
            <h3 className="text-3xl font-bold text-navy mb-8 border-b-2 border-slate-300 pb-2">
              Additional Recognition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherAwards.map((award) => (
                <div key={award.id} className="bg-white p-4 shadow-md flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-navy">{award.title}</h4>
                    <span className="bg-slate-200 text-navy px-2 py-1 text-xs">{award.year}</span>
                  </div>
                  <p className="text-slate-600 text-sm italic mb-2">{award.organization}</p>
                  <p className="text-slate-700 text-sm">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
