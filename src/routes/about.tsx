import { CommunityOutreach } from '@/components/sections/CommunityOutreach'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { CoreValues } from '@/components/sections/CoreValues'
import { LeadershipBios } from '@/components/sections/LeadershipBios'
import { Milestones } from '@/components/sections/Milestones'
import { WhoIsCC } from '@/components/sections/WhoIsCC'
import { BoltIcon, HandRaisedIcon, UsersIcon } from '@heroicons/react/24/solid'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const missionVision = {
  mission:
    'To transform the built environment through exceptional craftsmanship, innovative solutions, and unwavering integrity.',
  vision:
    'To be the most trusted name in construction, recognized for creating spaces that inspire, endure, and enhance the communities we serve.',
}

const companyStats = [
  { label: 'Years in Business', value: '10' },
  { label: 'Completed Projects', value: '350+' },
]

function AboutPage(): React.ReactElement {
  return (
    <div>
      {/* Page Header */}
      <section className="relative h-[50vh] flex items-end bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/about-header.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-800 via-slate-800/60 to-transparent" />
        <div className="relative z-10 px-8 2xl:px-60 pb-12 w-full">
          <p className="font-display text-slate-400 text-lg tracking-widest uppercase mb-2">
            Who We Are
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-slate-300 mb-4">About Us</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Building excellence through innovation, integrity, and dedicated craftsmanship since
            2015.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-8 2xl:px-60 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-navy mb-6">
                Our Mission &amp; Vision
              </h2>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-navy mb-3 flex items-center">
                  <BoltIcon className="size-6 text-navy mr-2" />
                  Mission
                </h3>
                <p className="text-lg text-slate-700 border-l-4 border-navy pl-4 py-2 bg-slate-50">
                  {missionVision.mission}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-navy mb-3 flex items-center">
                  <HandRaisedIcon className="size-6 text-navy mr-2" />
                  Vision
                </h3>
                <p className="text-lg text-slate-700 border-l-4 border-navy pl-4 py-2 bg-slate-50">
                  {missionVision.vision}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {companyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-100 p-6 text-center border-t-4 border-navy"
                >
                  <p className="text-4xl font-bold text-navy mb-2">{stat.value}</p>
                  <p className="text-slate-700">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who is Cambridge Building Group */}
      <WhoIsCC />

      {/* Core Values */}
      <CoreValues />

      {/* Milestones */}
      <Milestones />

      {/* Community Outreach */}
      <CommunityOutreach />

      {/* Leadership Team */}
      <LeadershipBios />

      {/* Company Culture */}
      <section className="py-16 px-8 2xl:px-60 bg-slate-100">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <UsersIcon className="size-10 text-navy mr-4" />
            <h2 className="font-display text-4xl font-bold text-navy">Our Company Culture</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-slate-700 mb-6">
                At Cambridge Building Group, our culture is built on collaboration, respect, and a
                passion for excellence. We believe that our people are our greatest asset, and we
                invest in their growth and well-being.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                We foster an environment where innovation thrives, ideas are valued, and continuous
                improvement is pursued. Our team members are empowered to contribute their unique
                perspectives and talents to every project.
              </p>
              <p className="text-lg text-slate-700">
                Safety is paramount in our culture. We maintain rigorous standards and provide
                comprehensive training to ensure everyone returns home safely each day. This
                commitment to safety extends to our clients, partners, and communities.
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg border-l-4 border-navy">
              <h3 className="text-2xl font-bold text-navy mb-4">Our Core Principles</h3>
              <ul className="space-y-4">
                {[
                  {
                    num: 1,
                    title: 'People First',
                    text: 'We prioritize the well-being, development, and safety of our team members and everyone we work with.',
                  },
                  {
                    num: 2,
                    title: 'Collaborative Spirit',
                    text: 'We believe in the power of teamwork and partnership to achieve exceptional results.',
                  },
                  {
                    num: 3,
                    title: 'Continuous Learning',
                    text: 'We embrace opportunities to learn, grow, and evolve both as individuals and as an organization.',
                  },
                  {
                    num: 4,
                    title: 'Community Connection',
                    text: 'We actively engage with and contribute to the communities where we live and work.',
                  },
                ].map((principle) => (
                  <li key={principle.num} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-navy text-slate-300 flex items-center justify-center rounded-full mr-3 mt-1">
                      {principle.num}
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold text-navy">{principle.title}</h4>
                      <p className="text-slate-700">{principle.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}
