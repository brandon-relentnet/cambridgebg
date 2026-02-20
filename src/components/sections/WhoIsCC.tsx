import { ScrollReveal } from '@/components/ScrollReveal'
import { scrollToNextSection } from '@/utils/autoScroll'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

interface WhoIsCCProps {
  showButton?: boolean
}

export function WhoIsCC({ showButton = false }: WhoIsCCProps) {
  return (
    <section
      className="scroll-m-20 xl:scroll-m-70 relative mt-15 sm:mt-25 md:mt-10 lg:mt-15 xl:mt-20 2xl:mt-20 3xl:mt-30 4xl:mt-100 px-8 md:px-20 pb-section"
      id="who-is-cambridge-construction"
    >
      <div className="container mx-auto px-6 2xl:px-54 flex flex-col lg:flex-row items-center gap-12 py-block">
        <ScrollReveal direction="left">
          <div className="w-full lg:w-1/2">
            <img
              src="/cambridge-team.jpg"
              alt="Cambridge Building Group Team"
              className="w-full shadow-left rounded-sm"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.15}>
          <div className="w-full lg:w-1/2">
            <h2 className="font-display text-5xl font-bold text-navy mb-4">
              <span className="italic">Who is</span> Cambridge Building Group?
            </h2>
            <div className="border-l-2 border-slate-700 pl-4">
              <p className="text-lg text-slate-700 mb-4">
                Cambridge Building Group is a premier building company renowned for its innovative
                designs and unwavering commitment to quality. With decades of combined experience,
                our team of experts transforms visions into structures that inspire and endure.
              </p>
              <p className="text-lg text-slate-700 mb-4">
                From modern commercial developments to timeless residential masterpieces, we
                prioritize safety, sustainability, and community enrichment. Our approach blends
                cutting&#8209;edge technology with traditional craftsmanship to deliver projects
                that not only meet but exceed expectations.
              </p>
              {showButton && (
                <button
                  type="button"
                  onClick={() => scrollToNextSection('core-values')}
                  className="bg-navy group text-slate-300 font-semibold px-4 py-2 border-2 border-navy shadow-lg transition duration-200 hover:scale-115 cursor-pointer"
                >
                  Our Values
                  <ChevronRightIcon className="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200" />
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
