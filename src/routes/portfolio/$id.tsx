import { ContactCTA } from '@/components/sections/ContactCTA'
import { getProjectById, getRelatedProjects } from '@/data/portfolioData'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  CalendarDaysIcon,
  ClockIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'
import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio/$id')({
  component: ProjectDetailPage,
})

function ProjectDetailPage(): React.ReactElement {
  const { id } = Route.useParams()
  const projectId = Number(id)
  const project = getProjectById(projectId)
  const relatedProjects = project ? getRelatedProjects(projectId) : []

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold text-navy mb-4">Project Not Found</h2>
          <p className="text-slate-700 mb-6">
            The project you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link
            to="/portfolio"
            className="px-6 py-3 bg-navy text-slate-300 font-semibold hover:bg-opacity-90 transition duration-200"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Project Hero */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-800">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('/riverfront-plaza.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-70" />
        <div className="relative z-10 text-center px-8 mt-16">
          <div className="inline-block bg-navy px-4 py-1 text-sm text-slate-300 font-medium mb-4">
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-300 mb-4">{project.title}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">{project.description}</p>
        </div>
      </section>

      {/* Navigation Bar */}
      <section className="sticky top-20 z-30 bg-white shadow-md py-4 px-8 2xl:px-60">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/portfolio" className="flex items-center text-navy font-medium hover:underline">
            <ArrowLeftIcon className="size-4 mr-2" />
            Back to Portfolio
          </Link>
          <div className="flex space-x-4">
            {projectId > 1 && (
              <Link
                to="/portfolio/$id"
                params={{ id: String(projectId - 1) }}
                className="text-navy font-medium hover:underline"
              >
                Previous Project
              </Link>
            )}
            <Link
              to="/portfolio/$id"
              params={{ id: String(projectId + 1) }}
              className="text-navy font-medium hover:underline"
            >
              Next Project
            </Link>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-8 2xl:px-60 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project Details */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-navy mb-6">Project Overview</h2>
                <div
                  className="prose prose-lg max-w-none text-slate-700"
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static content from data file
                  dangerouslySetInnerHTML={{
                    __html: project.fullDescription,
                  }}
                />
              </div>

              {/* Sustainable Features */}
              <div className="bg-slate-100 p-6 border-l-4 border-navy mb-8">
                <h3 className="text-xl font-bold text-navy mb-4">Sustainable Features</h3>
                <ul className="space-y-2">
                  {project.sustainableFeatures.map((feature: string) => (
                    <li key={feature} className="flex items-start">
                      <span className="w-2 h-2 bg-navy rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Outcomes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-navy mb-4">Challenges</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge: string) => (
                      <li key={challenge} className="flex items-start">
                        <span className="w-2 h-2 bg-navy rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-4">Outcomes</h3>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome: string) => (
                      <li key={outcome} className="flex items-start">
                        <span className="w-2 h-2 bg-navy rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-navy p-8 shadow-lg mb-8">
                <blockquote className="text-xl font-light italic text-slate-300 mb-6">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-navy font-bold text-xl mr-4">
                    {project.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-slate-300 font-semibold">{project.testimonial.author}</p>
                    <p className="text-slate-400">{project.testimonial.title}</p>
                  </div>
                </div>
              </div>

              {/* Project Gallery */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-6">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.galleryImages.map((image: { id: number; title: string }) => (
                    <div
                      key={image.id}
                      className="bg-slate-200 h-48 relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                        <span className="text-lg">{image.title}</span>
                      </div>
                      <div className="absolute inset-0 bg-navy bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                        <span className="text-slate-300 font-semibold">{image.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Sidebar */}
            <div>
              <div className="bg-slate-100 p-6 shadow-md mb-8">
                <h3 className="text-xl font-bold text-navy mb-4">Project Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPinIcon className="size-5 text-navy mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-500">Location</p>
                      <p className="text-slate-700 font-medium">{project.location}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CalendarDaysIcon className="size-5 text-navy mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-500">Completion Year</p>
                      <p className="text-slate-700 font-medium">{project.year}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="size-5 text-navy mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-500">Project Duration</p>
                      <p className="text-slate-700 font-medium">{project.duration}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CurrencyDollarIcon className="size-5 text-navy mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-500">Project Budget</p>
                      <p className="text-slate-700 font-medium">{project.budget}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <UserGroupIcon className="size-5 text-navy mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-500">Client</p>
                      <p className="text-slate-700 font-medium">{project.client}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <BuildingOfficeIcon className="size-5 text-navy mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-500">Status</p>
                      <p className="text-slate-700 font-medium">{project.status}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-100 p-6 shadow-md mb-8">
                <h3 className="text-xl font-bold text-navy mb-4">Project Team</h3>
                <ul className="space-y-3">
                  {project.teamMembers.map((member: { name: string; role: string }) => (
                    <li
                      key={member.name}
                      className="border-b border-slate-200 last:border-b-0 pb-2 last:pb-0"
                    >
                      <p className="font-semibold text-navy">{member.name}</p>
                      <p className="text-sm text-slate-600">{member.role}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy mb-4">Request Similar Project</h3>
                <p className="text-slate-700 mb-4">
                  Interested in creating a similar project? Contact us to discuss your vision.
                </p>
                <Link
                  to="/contact"
                  className="block w-full bg-navy text-slate-300 text-center font-semibold py-3 px-4 transition duration-200 hover:bg-opacity-90"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 px-8 2xl:px-60 bg-slate-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map(
              (relatedProject: {
                id: number
                title: string
                description: string
                category: string
                location: string
                year: string
              }) => (
                <div key={relatedProject.id} className="bg-white shadow-md overflow-hidden group">
                  {/* Project Image */}
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      <span className="text-lg">Project Image: {relatedProject.title}</span>
                    </div>

                    {/* View details button */}
                    <div className="absolute inset-0 bg-navy bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <Link
                        to="/portfolio/$id"
                        params={{ id: String(relatedProject.id) }}
                        className="flex items-center text-slate-300 font-semibold px-4 py-2 border-2 border-slate-300 hover:bg-slate-300 hover:text-navy transition duration-200"
                      >
                        View Details
                        <ArrowRightIcon className="size-4 ml-2" />
                      </Link>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-navy">{relatedProject.title}</h3>
                      <span className="text-sm text-slate-500">{relatedProject.year}</span>
                    </div>
                    <p className="text-slate-700 mb-4 line-clamp-2">{relatedProject.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">
                        <span className="font-semibold">Location:</span> {relatedProject.location}
                      </span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                        {relatedProject.category.charAt(0).toUpperCase() +
                          relatedProject.category.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}
