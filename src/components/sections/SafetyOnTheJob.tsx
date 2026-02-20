import { safetyMetrics, safetyPractices } from '@/data/siteData'
import { scrollToNextSection } from '@/utils/autoScroll'
import { ChevronRightIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'

interface SafetyOnTheJobProps {
  showButton?: boolean
}

export function SafetyOnTheJob({ showButton = false }: SafetyOnTheJobProps) {
  return (
    <section
      id="safety-on-the-job"
      className="relative px-8 2xl:px-60 py-section bg-slate-800 text-slate-300"
    >
      <div className="container mx-auto py-block">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="w-full md:w-2/3 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <ShieldCheckIcon className="size-12 text-slate-300 mr-4" />
              <h2 className="text-5xl font-bold">Safety on the Job Site</h2>
            </div>
            <p className="text-xl">
              At Cambridge Building Group, safety isn&apos;t just a priority&mdash;it&apos;s a core
              value ingrained in every aspect of our operations. We maintain an unwavering
              commitment to creating and maintaining safe work environments for our team members,
              clients, and communities.
            </p>
          </div>
          {showButton && (
            <button
              type="button"
              onClick={() => scrollToNextSection('industry-awards')}
              className="bg-slate-300 group text-navy font-semibold px-4 py-2 border-2 border-slate-300 shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
            >
              Our Achievements
              <ChevronRightIcon className="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {safetyMetrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-navy p-6 shadow-lg border-l-4 border-slate-500 text-center"
            >
              <ShieldCheckIcon className="size-12 text-slate-300 mx-auto mb-4" />
              <p className="text-5xl font-bold mb-2">{metric.value}</p>
              <p className="text-lg text-slate-400">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {safetyPractices.map((practice) => (
            <div key={practice.id} className="bg-slate-700 p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-3 border-b border-slate-600 pb-3">
                {practice.title}
              </h3>
              <p className="text-slate-300">{practice.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-navy p-10 shadow-lg border-l-4 border-slate-300">
          <blockquote className="text-2xl italic font-light">
            &ldquo;Our perfect safety record isn&apos;t achieved by chance&mdash;it&apos;s the
            result of rigorous standards, continuous improvement, and a culture where every team
            member is empowered to prioritize safety above all else.&rdquo;
          </blockquote>
          <p className="text-right mt-4 text-slate-400">
            &mdash; Terry Gilley, Director of Safety Operations
          </p>
        </div>
      </div>
    </section>
  )
}
