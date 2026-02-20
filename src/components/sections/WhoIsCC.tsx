import { ScrollReveal } from '@/components/ScrollReveal'
import { scrollToNextSection } from '@/utils/autoScroll'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

interface WhoIsCCProps {
  showButton?: boolean
}

export function WhoIsCC({ showButton = false }: WhoIsCCProps): React.ReactElement {
  return (
    <section
      className="scroll-m-20 xl:scroll-m-70 relative mt-15 sm:mt-25 md:mt-10 lg:mt-15 xl:mt-20 2xl:mt-20 3xl:mt-30 4xl:mt-100 px-8 md:px-20 pb-section"
      id="who-is-cambridge-construction"
    >
      <div className="mx-auto px-6 2xl:px-54 py-block container flex flex-col lg:flex-row items-center gap-12">
        <ScrollReveal direction="left">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="top-0 left-0 absolute bg-amber w-1 h-full" />
              <img
                src="/cambridge-team.jpg"
                alt="Cambridge Building Group Team"
                className="shadow-left rounded-sm w-full"
              />
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.15}>
          <div className="w-full lg:w-1/2">
            <h2 className="font-display font-bold text-navy text-5xl mb-4">
              <span className="text-amber italic">Who is</span> Cambridge Building Group?
            </h2>
            <div className="pl-4 border-amber border-l-2">
              <p className="mb-4 text-slate-700 text-lg">
                Cambridge Building Group is a premier building company renowned for its innovative
                designs and unwavering commitment to quality. With decades of combined experience,
                our team of experts transforms visions into structures that inspire and endure.
              </p>
              <p className="mb-4 text-slate-700 text-lg">
                From modern commercial developments to timeless residential masterpieces, we
                prioritize safety, sustainability, and community enrichment. Our approach blends
                cutting&#8209;edge technology with traditional craftsmanship to deliver projects
                that not only meet but exceed expectations.
              </p>
              {showButton && (
                <button
                  type="button"
                  onClick={() => scrollToNextSection('core-values')}
                  className="group bg-navy shadow-lg px-6 py-2.5 border-2 border-navy font-semibold text-slate-300 hover:scale-105 transition duration-200 cursor-pointer"
                >
                  Our Values
                  <ChevronRightIcon className="inline-block -mt-0.5 group-hover:rotate-90 transition duration-200 size-5" />
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
