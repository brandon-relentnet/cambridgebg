import { CompetitiveAdvantage } from '@/components/sections/CompetitiveAdvantage'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { MarketsWeServe } from '@/components/sections/MarketsWeServe'
import {
  ArrowRightIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  ClipboardDocumentIcon,
  CogIcon,
  CubeIcon,
  HomeModernIcon,
  SwatchIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import type React from 'react'

type HeroIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

interface ServiceItem {
  id: number
  icon: HeroIcon
  title: string
  description: string
  details: string[]
}

interface AdditionalServiceItem {
  id: number
  icon: HeroIcon
  title: string
  description: string
}

const services: ServiceItem[] = [
  {
    id: 1,
    icon: BuildingOfficeIcon,
    title: 'Commercial Construction',
    description:
      'From office buildings to retail spaces, we deliver commercial properties that balance functionality, aesthetics, and long-term value. Our approach encompasses everything from ground-up construction to tenant improvements.',
    details: [
      'Office Buildings & Corporate Campuses',
      'Light Industrial',
      'Retail & Restaurant Spaces',
      'Medical Facilities & Healthcare Centers',
      'Hospitality & Entertainment Venues',
      'Financial Institutions & Banks',
    ],
  },
  {
    id: 2,
    icon: HomeModernIcon,
    title: 'Luxury Residential',
    description:
      'We create distinctive homes that reflect the unique vision and lifestyle of each client. Our attention to detail and commitment to quality craftsmanship ensures residential spaces that are both beautiful and enduring.',
    details: [
      'Custom Luxury Homes',
      'Executive Estates & Properties',
      'High-End Multi-Family Developments',
      'Vacation & Second Homes',
      'Residential Community Planning',
    ],
  },
  {
    id: 3,
    icon: BuildingLibraryIcon,
    title: 'Historic Renovation',
    description:
      'Our specialized team expertly blends preservation techniques with modern functionality to breathe new life into historic structures while maintaining their architectural integrity and cultural significance.',
    details: [
      'Landmark Building Restoration',
      'Adaptive Reuse Projects',
      'Historical Facade Preservation',
      'Period Detail Reconstruction',
      'Heritage Building Modernization',
    ],
  },
  {
    id: 4,
    icon: WrenchScrewdriverIcon,
    title: 'Design-Build Solutions',
    description:
      'Our integrated design-build approach streamlines the construction process, reducing costs and timelines while maintaining superior quality through collaborative problem-solving and unified vision.',
    details: [
      'Single-Source Project Delivery',
      'Integrated Design & Construction Teams',
      'Early Cost Certainty & Budgeting',
      'Accelerated Project Timelines',
      'Collaborative Problem-Solving',
    ],
  },
  {
    id: 5,
    icon: BuildingStorefrontIcon,
    title: 'Tenant Improvements',
    description:
      'We transform existing commercial spaces to meet the unique needs of businesses, creating environments that enhance productivity, reflect brand identity, and optimize operational efficiency.',
    details: [
      'Office Space Reconfigurations',
      'Retail & Restaurant Buildouts',
      'Commercial Interior Renovations',
      'Workspace Modernization',
      'Brand-Aligned Design Implementation',
    ],
  },
  {
    id: 6,
    icon: CogIcon,
    title: 'Pre-Construction Services',
    description:
      'Our comprehensive pre-construction services include budgeting, scheduling, value engineering, and constructability reviews to identify potential challenges early and establish a solid foundation for project success.',
    details: [
      'Project Feasibility Analysis',
      'Comprehensive Budget Development',
      'Cost Optimization',
      'Schedule Development & Planning',
      'Constructability & Risk Assessment',
    ],
  },
]

const additionalServices: AdditionalServiceItem[] = [
  {
    id: 7,
    icon: SwatchIcon,
    title: 'Sustainable Construction',
    description:
      'Environmentally responsible building practices that reduce operational costs and environmental impact while creating healthier spaces.',
  },
  {
    id: 8,
    icon: BuildingOffice2Icon,
    title: 'Industrial & Manufacturing',
    description:
      'Specialized construction for manufacturing facilities, warehouses, and industrial spaces optimized for operational efficiency.',
  },
  {
    id: 9,
    icon: CubeIcon,
    title: 'Modular & Prefabrication',
    description:
      'Innovative off-site construction methods that improve quality control, reduce waste, and accelerate project timelines.',
  },
  {
    id: 10,
    icon: ClipboardDocumentIcon,
    title: 'Construction Management',
    description:
      'Expert oversight of all aspects of the construction process, ensuring quality, timeliness, and cost-effectiveness.',
  },
]

const processSteps = [
  {
    num: 1,
    title: 'Initial Consultation',
    text: 'We begin by understanding your vision, requirements, and objectives. This collaborative discussion forms the foundation for our partnership.',
  },
  {
    num: 2,
    title: 'Planning & Design',
    text: 'Our team develops detailed plans and designs that align with your goals, timeline, and budget, incorporating your feedback throughout the process.',
  },
  {
    num: 3,
    title: 'Preconstruction',
    text: 'We conduct thorough site assessments, obtain necessary permits, finalize budgets, and establish detailed schedules to prepare for construction.',
  },
  {
    num: 4,
    title: 'Construction',
    text: 'Our Skilled Project Managers and Trade Partners execute the plan with precision, maintaining constant communication and providing regular updates.',
  },
  {
    num: 5,
    title: 'Project Completion',
    text: 'We conduct thorough quality inspections, address any final details, and ensure your complete satisfaction before formal project handover.',
  },
  {
    num: 6,
    title: 'Ongoing Support',
    text: 'Our relationship continues beyond project completion with warranties, maintenance support, and assistance for future needs.',
  },
]

function ServicesPage(): React.ReactElement {
  const [activeService, setActiveService] = useState<number | null>(null)

  function toggleService(id: number): void {
    setActiveService(activeService === id ? null : id)
  }

  return (
    <div>
      {/* Page Header */}
      <section className="relative h-[50vh] flex items-end bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/services-header.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-800 via-slate-800/60 to-transparent" />
        <div className="relative z-10 px-8 2xl:px-60 pb-12 w-full">
          <p className="font-display text-slate-400 text-lg tracking-widest uppercase mb-2">
            What We Do
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-slate-300 mb-4">Our Services</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Comprehensive construction solutions tailored to your unique vision and requirements.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-8 2xl:px-60 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-navy mb-6">What We Offer</h2>
            <p className="text-lg text-slate-700">
              Cambridge Building Group provides a full spectrum of construction services, from
              initial concept and planning through completion and beyond. Our integrated approach
              ensures seamless project delivery and exceptional results.
            </p>
          </div>

          {/* Main Services Accordion */}
          <div className="space-y-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className="bg-slate-100 shadow-md overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    className="w-full p-6 cursor-pointer text-left"
                    onClick={() => toggleService(service.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Icon className="size-8 text-navy mr-4" />
                        <h3 className="text-2xl font-bold text-navy">{service.title}</h3>
                      </div>
                      <ArrowRightIcon
                        className={`size-5 text-navy transition-transform duration-300 ${
                          activeService === service.id ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </button>
                  {activeService === service.id && (
                    <div className="px-6 pb-6 border-t border-slate-300">
                      <p className="text-slate-700 mb-6 mt-4">{service.description}</p>
                      <div className="bg-white p-4 border-l-4 border-navy">
                        <h4 className="text-lg font-semibold text-navy mb-3">Key Features:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.details.map((detail) => (
                            <li key={detail} className="flex items-center">
                              <span className="w-2 h-2 bg-navy rounded-full mr-2" />
                              <span className="text-slate-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-8 2xl:px-60 bg-slate-100">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-8 text-center">
            Additional Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.id} className="bg-white p-6 shadow-md border-t-4 border-navy">
                  <Icon className="size-8 text-navy mb-4" />
                  <h3 className="text-xl font-bold text-navy mb-2">{service.title}</h3>
                  <p className="text-slate-700">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 px-8 2xl:px-60 bg-white">
        <div className="container mx-auto">
          <h2 className="font-display text-4xl font-bold text-navy mb-8 text-center">
            Our Service Process
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-navy" />

              {/* Process steps */}
              <div className="space-y-12">
                {processSteps.map((step) => (
                  <div key={step.num} className="relative pl-12">
                    <div className="absolute left-0 top-0 w-8 h-8 bg-navy text-slate-300 rounded-full flex items-center justify-center">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                    <p className="text-slate-700">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Markets We Serve */}
      <MarketsWeServe />

      {/* Competitive Advantage */}
      <CompetitiveAdvantage />

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}
