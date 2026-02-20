import { ScrollReveal } from '@/components/ScrollReveal'
import { leadershipTeam } from '@/data/siteData'
import { ChevronRightIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useMemo, useState } from 'react'

interface LeadershipBiosProps {
  showButton?: boolean
}

export function LeadershipBios({ showButton: _showButton = false }: LeadershipBiosProps) {
  const [activeLeader, setActiveLeader] = useState<number | null>(null)

  const featuredLeaders = useMemo(() => leadershipTeam.filter((leader) => leader.featured), [])
  const otherLeaders = useMemo(() => leadershipTeam.filter((leader) => !leader.featured), [])

  function toggleLeader(id: number) {
    setActiveLeader(activeLeader === id ? null : id)
  }

  return (
    <section id="leadership-bios" className="relative bg-slate-100 px-8 2xl:px-60 py-section">
      <div className="py-block mx-auto container">
        <ScrollReveal>
          <div className="flex md:flex-row flex-col justify-between items-start md:items-end mb-12">
            <div className="mb-6 md:mb-0 w-full md:w-1/2">
              <div className="flex items-center mb-4">
                <UserCircleIcon className="mr-4 size-10 text-navy" />
                <h2 className="font-display font-bold text-navy text-5xl">Our Leadership</h2>
              </div>
              <p className="text-slate-700 text-lg">
                Cambridge Building Group is led by a team of experienced industry professionals
                combining diverse expertise and a shared commitment to excellence, innovation, and
                ethical business practices.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Featured Leadership (Desktop) */}
        <ScrollReveal delay={0.1}>
          <div className="hidden gap-8 md:grid md:grid-cols-2 mb-12">
            {featuredLeaders.map((leader) => (
              <div
                key={`desktop-${leader.id}`}
                className="bg-white shadow-lg p-6 border-navy border-t-4 overflow-hidden"
              >
                <div className="flex justify-center items-center bg-slate-200 h-80">
                  <img
                    src={leader.image}
                    alt={`${leader.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 font-bold text-navy text-2xl">{leader.name}</h3>
                  <p className="mb-4 font-medium text-slate-600">{leader.title}</p>
                  <p className="mb-4 text-slate-700">{leader.bio}</p>
                  <h4 className="mb-2 font-semibold text-navy text-lg">Education</h4>
                  <p className="mb-4 text-slate-600">{leader.education}</p>
                  <h4 className="mb-2 font-semibold text-navy text-lg">Experience</h4>
                  <ul className="text-slate-600">
                    {leader.experience.map((item) => (
                      <li key={item} className="mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Other Leadership (Desktop) */}
        {otherLeaders.length > 0 && (
          <div className="hidden gap-6 md:grid md:grid-cols-3">
            {otherLeaders.map((leader) => (
              <div
                key={`desktop-other-${leader.id}`}
                className="bg-white shadow-md p-6 border-navy border-l-4"
              >
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center bg-slate-200 mr-4 rounded-full w-12 h-12 font-bold text-navy text-xl">
                    {leader.name.split(' ')[0]?.charAt(0) ?? ''}
                    {leader.name.split(' ')[1]?.charAt(0) ?? ''}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-xl">{leader.name}</h3>
                    <p className="text-slate-600">{leader.title}</p>
                  </div>
                </div>
                <p className="mb-3 text-slate-700">{leader.bio}</p>
                <p className="text-slate-600 text-sm italic">{leader.education}</p>
              </div>
            ))}
          </div>
        )}

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {leadershipTeam.map((leader) => (
            <div key={`mobile-${leader.id}`} className="bg-white shadow-md overflow-hidden">
              <button
                type="button"
                className="flex items-center p-4 cursor-pointer w-full text-left"
                onClick={() => toggleLeader(leader.id)}
              >
                <div className="flex justify-center items-center bg-slate-200 mr-4 rounded-full w-12 h-12 font-bold text-navy text-xl">
                  {leader.name.split(' ')[0]?.charAt(0) ?? ''}
                  {leader.name.split(' ')[1]?.charAt(0) ?? ''}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-navy text-xl">{leader.name}</h3>
                  <p className="text-slate-600">{leader.title}</p>
                </div>
                <ChevronRightIcon
                  className={`size-5 text-navy transition-transform duration-200 ${
                    activeLeader === leader.id ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {activeLeader === leader.id && (
                <div className="p-4 pt-0 border-slate-200 border-t">
                  <p className="mb-4 text-slate-700">{leader.bio}</p>
                  <h4 className="mb-2 font-semibold text-navy text-lg">Education</h4>
                  <p className="mb-4 text-slate-600">{leader.education}</p>
                  <h4 className="mb-2 font-semibold text-navy text-lg">Experience</h4>
                  <ul className="text-slate-600">
                    {leader.experience.map((item) => (
                      <li key={item} className="mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
