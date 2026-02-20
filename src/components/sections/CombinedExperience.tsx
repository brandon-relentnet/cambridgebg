import { ScrollReveal } from '@/components/ScrollReveal'
import { scrollToNextSection } from '@/utils/autoScroll'
import { ChartPieIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

interface CombinedExperienceProps {
  showButton?: boolean
}

export function CombinedExperience({ showButton = false }: CombinedExperienceProps) {
  const [years, setYears] = useState(0)
  const [projects, setProjects] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const target = 120
  const projectsTarget = 350
  const duration = 2000

  useEffect(() => {
    if (!isInView) return

    const yearsIncrement = target / (duration / 50)
    const projectsIncrement = projectsTarget / (duration / 50)

    const yearsInterval = setInterval(() => {
      setYears((prev) => {
        const next = prev + yearsIncrement
        if (next >= target) {
          clearInterval(yearsInterval)
          return target
        }
        return next
      })
    }, 50)

    const projectsInterval = setInterval(() => {
      setProjects((prev) => {
        const next = prev + projectsIncrement
        if (next >= projectsTarget) {
          clearInterval(projectsInterval)
          return projectsTarget
        }
        return next
      })
    }, 50)

    return () => {
      clearInterval(yearsInterval)
      clearInterval(projectsInterval)
    }
  }, [isInView])

  return (
    <section
      id="combined-experience"
      className="relative px-8 2xl:px-60 py-section bg-slate-800 text-slate-300 bg-grid"
    >
      <div ref={sectionRef} className="container mx-auto py-block">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <h2 className="font-display text-5xl font-bold mb-4">Combined Experience</h2>
              <p className="text-lg mb-6">
                At Cambridge Building Group, our team brings decades of expertise to every project.
                Our combined knowledge and experience ensure each build benefits from time-tested
                wisdom and innovative approaches.
              </p>
              <div className="border-l-2 border-slate-400 pl-4 mt-8">
                <p className="text-lg mb-4">
                  Our leadership team includes seasoned project managers, master builders,
                  award-winning architects, and specialized engineers, creating a powerhouse of
                  construction knowledge under one roof.
                </p>
                <p className="text-lg">
                  From historic renovations to cutting-edge commercial spaces, our collective
                  expertise allows us to tackle any challenge with confidence and precision.
                </p>
              </div>
              {showButton && (
                <button
                  type="button"
                  onClick={() => scrollToNextSection('services-provided')}
                  className="bg-slate-300 group text-navy font-semibold px-4 py-2 border-2 border-slate-300 shadow-lg transition duration-200 hover:scale-115 cursor-pointer mt-8"
                >
                  Our Services
                  <ChevronRightIcon className="size-5 -mt-0.5 group-hover:rotate-90 inline-block transition duration-200" />
                </button>
              )}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-navy p-8 shadow-lg border-l-4 border-slate-500 relative overflow-hidden">
                <ChartPieIcon className="size-20 text-slate-600 absolute -bottom-2 -right-2 opacity-30" />
                <h3 className="text-2xl font-bold mb-2">Years of Experience</h3>
                <p className="text-6xl font-bold mb-2">{Math.floor(years)}+</p>
                <p className="text-slate-400">Combined industry expertise</p>
              </div>
              <div className="bg-navy p-8 shadow-lg border-l-4 border-slate-500 relative overflow-hidden">
                <ChartPieIcon className="size-20 text-slate-600 absolute -bottom-2 -right-2 opacity-30" />
                <h3 className="text-2xl font-bold mb-2">Projects Completed</h3>
                <p className="text-6xl font-bold mb-2">{Math.floor(projects)}+</p>
                <p className="text-slate-400">Successful builds nationwide</p>
              </div>
              <div className="bg-navy p-8 shadow-lg border-l-4 border-slate-500">
                <h3 className="text-2xl font-bold mb-2">Certifications</h3>
                <ul className="list-disc list-inside">
                  <li>LEED Certified Professionals</li>
                  <li>Licensed Master Builders</li>
                  <li>Certified Project Managers</li>
                </ul>
              </div>
              <div className="bg-navy p-8 shadow-lg border-l-4 border-slate-500">
                <h3 className="text-2xl font-bold mb-2">Industry Expertise</h3>
                <ul className="list-disc list-inside">
                  <li>Commercial Construction</li>
                  <li>Luxury Residential</li>
                  <li>Industrial &amp; Manufacturing</li>
                  <li>Historic Renovation</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
