import { impactStats, initiatives } from '@/data/siteData'
import { ChevronRightIcon, HeartIcon } from '@heroicons/react/24/solid'
import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

interface CommunityOutreachProps {
  showButton?: boolean
}

interface AnimatedStat {
  id: number
  value: number
  target: number
  label: string
}

export function CommunityOutreach({ showButton: _showButton = false }: CommunityOutreachProps) {
  const [stats, setStats] = useState<AnimatedStat[]>(
    impactStats.map((stat) => ({ ...stat, value: 0 })),
  )

  // biome-ignore lint/correctness/useExhaustiveDependencies: animation runs once on mount
  useEffect(() => {
    const duration = 2000
    const intervals: ReturnType<typeof setInterval>[] = []

    for (const [index, stat] of stats.entries()) {
      const increment = stat.target / (duration / 50)

      const interval = setInterval(() => {
        setStats((prev) =>
          prev.map((s, i) => {
            if (i !== index) return s
            const next = s.value + increment
            if (next >= s.target) {
              clearInterval(interval)
              return { ...s, value: s.target }
            }
            return { ...s, value: next }
          }),
        )
      }, 50)

      intervals.push(interval)
    }

    return () => {
      for (const interval of intervals) clearInterval(interval)
    }
  }, [])

  function formatValue(value: number): string {
    return Math.floor(value).toLocaleString()
  }

  return (
    <section id="community-outreach" className="relative bg-slate-100 px-8 2xl:px-60 py-section">
      <div className="py-block mx-auto container">
        <div className="mx-auto mb-12 w-full md:w-2/3 text-center">
          <div className="flex justify-center items-center mb-4">
            <HeartIcon className="mr-4 size-10 text-navy" />
            <h2 className="font-bold text-navy text-5xl">Community Impact</h2>
          </div>
          <p className="text-slate-700 text-xl">
            At Cambridge Building Group, we believe in building more than structures&mdash;we build
            communities. Our commitment to social responsibility drives us to give back to the
            communities where we live and work.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white shadow-lg p-8 border-navy border-b-4 text-center"
            >
              <p className="mb-3 font-bold text-navy text-5xl">{formatValue(stat.value)}</p>
              <p className="text-slate-700 text-xl">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Community Initiatives */}
        <h3 className="mb-8 font-bold text-navy text-3xl text-center">Our Community Initiatives</h3>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 mb-16">
          {initiatives.map((initiative) => {
            const Icon = initiative.icon
            return (
              <div
                key={initiative.id}
                className="group relative bg-white shadow-lg p-6 border-navy border-t-4 overflow-hidden"
              >
                {/* Icon background */}
                <Icon className="-right-6 -bottom-6 absolute opacity-50 size-40 text-slate-200 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 transform" />

                <div className="z-10 relative">
                  <span className="inline-block bg-slate-200 mb-3 px-3 py-1 font-semibold text-navy text-sm">
                    {initiative.category}
                  </span>
                  <h4 className="mb-3 font-bold text-navy text-2xl">{initiative.title}</h4>
                  <p className="mb-4 text-slate-700">{initiative.description}</p>
                  <div className="mt-4 pt-3 border-slate-200 border-t">
                    <p className="font-semibold text-navy">Impact: {initiative.impact}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="flex md:flex-row flex-col justify-between items-center bg-white shadow-lg p-8 border-navy border-l-4">
          <div className="mb-6 md:mb-0">
            <h3 className="mb-2 font-bold text-navy text-2xl">Join Us in Making a Difference</h3>
            <p className="text-slate-700 text-lg">
              Learn more about our community initiatives and how you can get involved.
            </p>
          </div>
          <Link
            to="/about"
            className="group flex items-center bg-navy shadow-lg px-6 py-3 border-2 border-navy font-semibold text-slate-300 hover:scale-115 transition duration-200"
          >
            Community Programs
            <ChevronRightIcon className="ml-2 size-5 transition-transform group-hover:translate-x-1 duration-200" />
          </Link>
        </div>
      </div>
    </section>
  )
}
