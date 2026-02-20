import { CommunityOutreach } from '@/components/sections/CommunityOutreach'
import {
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  ClockIcon,
  EnvelopeIcon,
  HomeModernIcon,
  MapPinIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid'
import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

const projectTypes = [
  { value: 'commercial', label: 'Commercial Construction' },
  { value: 'residential', label: 'Luxury Residential' },
  { value: 'renovation', label: 'Historic Renovation' },
  { value: 'design-build', label: 'Design-Build Project' },
  { value: 'tenant-improvements', label: 'Tenant Improvements' },
  { value: 'pre-construction', label: 'Pre-Construction Services' },
  { value: 'other', label: 'Other/Not Sure' },
]

const budgetRanges = [
  { value: 'under-500k', label: 'Under $500K' },
  { value: '500k-1m', label: '$500K - $1M' },
  { value: '1m-5m', label: '$1M - $5M' },
  { value: '5m-10m', label: '$5M - $10M' },
  { value: 'over-10m', label: 'Over $10M' },
  { value: 'not-sure', label: 'Not Sure Yet' },
]

const timeframeOptions = [
  { value: 'immediate', label: 'Immediate (1-3 months)' },
  { value: 'soon', label: 'Soon (3-6 months)' },
  { value: 'planning', label: 'Planning Phase (6-12 months)' },
  { value: 'future', label: 'Future Consideration (1+ years)' },
  { value: 'not-sure', label: 'Not Sure Yet' },
]

const officeLocations = [
  {
    city: 'Nashville (Headquarters)',
    address: 'PO Box: 160036, Nashville, TN 37216',
    phone: '(615) 747-7007',
    email: 'nashville@cambridgebg.com',
    hours: 'Monday-Friday: 8am-5pm CST',
  },
]

const faqs = [
  {
    question: 'What types of projects does Cambridge Building Group handle?',
    answer:
      'Cambridge Building Group specializes in commercial construction, luxury residential projects, historic renovations, design-build solutions, and tenant improvements. Our experienced team can handle projects of various sizes and complexities across multiple sectors.',
  },
  {
    question: 'How do I request a quote for my project?',
    answer:
      'You can request a quote by filling out our contact form on this page, calling our main office, or sending an email with your project details. Our team will get back to you within 24 hours to discuss your project requirements and schedule an initial consultation.',
  },
  {
    question: 'Do you offer pre-construction services?',
    answer:
      'Yes, we provide comprehensive pre-construction services including budgeting, scheduling, cost sensitivity, and constructability reviews. These services help identify potential challenges early and establish a solid foundation for project success.',
  },
  {
    question: 'What geographic areas do you serve?',
    answer:
      'Cambridge Building Group serves the Southeastern United States. We have the capacity to take on projects throughout Tennessee, Georgia.',
  },
  {
    question: 'How do you ensure quality and safety on your projects?',
    answer:
      'Quality and safety are core values at Cambridge Building Group. We maintain rigorous quality control processes, comprehensive safety protocols, regular inspections, and ongoing training for all team members. Our impressive safety record and quality outcomes reflect our unwavering commitment to excellence.',
  },
]

interface ContactFormState {
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  budget: string
  timeframe: string
  message: string
  privacy: boolean
}

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  budget: '',
  timeframe: '',
  message: '',
  privacy: false,
}

function ContactPage(): React.ReactElement {
  const [form, setForm] = useState<ContactFormState>(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ): void {
    const { id, value, type } = e.target
    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        [id]: (e.target as HTMLInputElement).checked,
      }))
    } else {
      setForm((prev) => ({ ...prev, [id]: value }))
    }
  }

  function submitForm(e: React.FormEvent): void {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setForm(initialFormState)
    }, 1500)
  }

  function toggleFaq(index: number): void {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <div>
      {/* Page Header */}
      <section className="relative flex items-end bg-slate-800 h-[50vh] overflow-hidden">
        <div className="z-0 absolute inset-0 bg-[url('/contact-header.jpg')] bg-cover bg-center opacity-20" />
        <div className="z-0 absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/60 to-transparent" />
        <div className="z-10 relative px-8 2xl:px-60 pb-12 w-full">
          <p className="font-display text-slate-400 text-lg tracking-widest uppercase mb-2">
            Get in Touch
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-slate-300 mb-4">Contact Us</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Let&apos;s discuss your project and transform your vision into reality.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white px-8 2xl:px-60 py-16">
        <div className="mx-auto container">
          <div className="gap-12 grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Details */}
            <div>
              <h2 className="font-display mb-6 font-bold text-navy text-4xl">Get In Touch</h2>
              <p className="mb-8 text-slate-700 text-lg">
                Whether you&apos;re ready to start a new project, need information about our
                services, or have questions about working with us, we&apos;re here to help. Contact
                us today to schedule a consultation with our team.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPinIcon className="flex-shrink-0 mt-1 mr-4 size-6 text-navy" />
                  <div>
                    <h3 className="mb-1 font-semibold text-navy text-lg">Main Office</h3>
                    <p className="text-slate-700">PO Box: 160036, Nashville, TN 37216</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <PhoneIcon className="flex-shrink-0 mt-1 mr-4 size-6 text-navy" />
                  <div>
                    <h3 className="mb-1 font-semibold text-navy text-lg">Phone</h3>
                    <p className="text-slate-700">(615) 747-7007</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <EnvelopeIcon className="flex-shrink-0 mt-1 mr-4 size-6 text-navy" />
                  <div>
                    <h3 className="mb-1 font-semibold text-navy text-lg">Email</h3>
                    <p className="text-slate-700">info@cambridgebg.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <ClockIcon className="flex-shrink-0 mt-1 mr-4 size-6 text-navy" />
                  <div>
                    <h3 className="mb-1 font-semibold text-navy text-lg">Hours</h3>
                    <p className="text-slate-700">Monday-Friday: 8am-5pm CST</p>
                  </div>
                </div>
              </div>

              {/* Services Quick Links */}
              <div className="bg-slate-100 p-6 border-navy border-l-4">
                <h3 className="mb-4 font-bold text-navy text-xl">Our Services</h3>
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex items-center">
                    <BuildingOfficeIcon className="mr-3 size-5 text-navy" />
                    <Link to="/services" className="text-slate-700 hover:text-navy">
                      Commercial Construction
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <HomeModernIcon className="mr-3 size-5 text-navy" />
                    <Link to="/services" className="text-slate-700 hover:text-navy">
                      Luxury Residential
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <BuildingStorefrontIcon className="mr-3 size-5 text-navy" />
                    <Link to="/services" className="text-slate-700 hover:text-navy">
                      Historic Renovation
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <WrenchScrewdriverIcon className="mr-3 size-5 text-navy" />
                    <Link to="/services" className="text-slate-700 hover:text-navy">
                      Design-Build Solutions
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-100 shadow-lg p-8 border-navy border-t-4">
              <h2 className="mb-6 font-bold text-navy text-2xl">Request a Consultation</h2>

              {/* Success Message */}
              {isSubmitted ? (
                <div className="bg-green-100 mb-6 p-4 border-green-500 border-l-4 text-green-700">
                  <p className="font-medium">Thank you for contacting us!</p>
                  <p>We&apos;ve received your inquiry and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={submitForm} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium text-slate-700 text-sm">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy w-full"
                      placeholder="Your Name"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-1 font-medium text-slate-700 text-sm"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy w-full"
                        placeholder="Your Email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-1 font-medium text-slate-700 text-sm"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy w-full"
                        placeholder="Your Phone Number"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block mb-1 font-medium text-slate-700 text-sm"
                    >
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={form.company}
                      onChange={handleChange}
                      className="p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy w-full"
                      placeholder="Your Company Name"
                    />
                  </div>

                  {/* Project Type & Budget */}
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block mb-1 font-medium text-slate-700 text-sm"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className="p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy w-full"
                      >
                        <option value="" disabled>
                          Select Project Type
                        </option>
                        {projectTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="block mb-1 font-medium text-slate-700 text-sm"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy w-full"
                      >
                        <option value="" disabled>
                          Select Budget Range
                        </option>
                        {budgetRanges.map((budget) => (
                          <option key={budget.value} value={budget.value}>
                            {budget.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Timeframe */}
                  <div>
                    <label
                      htmlFor="timeframe"
                      className="block mb-1 font-medium text-slate-700 text-sm"
                    >
                      Project Timeframe
                    </label>
                    <select
                      id="timeframe"
                      value={form.timeframe}
                      onChange={handleChange}
                      className="p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy w-full"
                    >
                      <option value="" disabled>
                        Select Timeframe
                      </option>
                      {timeframeOptions.map((time) => (
                        <option key={time.value} value={time.value}>
                          {time.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-1 font-medium text-slate-700 text-sm"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="p-3 border border-slate-300 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy w-full"
                      placeholder="Tell us about your project and any specific requirements"
                    />
                  </div>

                  {/* Privacy Policy */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        type="checkbox"
                        checked={form.privacy}
                        onChange={handleChange}
                        required
                        className="border-slate-300 focus:ring-navy w-4 h-4 text-navy"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacy" className="text-slate-700">
                        I agree to the{' '}
                        <Link
                          to="/privacy-policy"
                          className="text-navy hover:underline"
                          target="_blank"
                        >
                          Privacy Policy
                        </Link>{' '}
                        and consent to being contacted about my inquiry.
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex justify-center items-center bg-navy hover:bg-transparent disabled:opacity-70 shadow px-4 py-3 border-2 border-navy w-full font-semibold text-slate-300 hover:text-navy transition duration-200 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-slate-100 px-8 2xl:px-60 py-16">
        <div className="mx-auto container">
          <h2 className="font-display mb-8 font-bold text-navy text-3xl text-center">Our Office</h2>
          <div className="flex justify-center gap-8">
            {officeLocations.map((office) => (
              <div
                key={office.city}
                className="bg-white shadow-md p-6 border-navy border-t-4 w-1/3"
              >
                <h3 className="mb-4 font-bold text-navy text-xl">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPinIcon className="flex-shrink-0 mt-1 mr-3 size-5 text-navy" />
                    <p className="text-slate-700">{office.address}</p>
                  </div>
                  <div className="flex items-start">
                    <PhoneIcon className="flex-shrink-0 mt-1 mr-3 size-5 text-navy" />
                    <p className="text-slate-700">{office.phone}</p>
                  </div>
                  <div className="flex items-start">
                    <EnvelopeIcon className="flex-shrink-0 mt-1 mr-3 size-5 text-navy" />
                    <p className="text-slate-700">{office.email}</p>
                  </div>
                  <div className="flex items-start">
                    <ClockIcon className="flex-shrink-0 mt-1 mr-3 size-5 text-navy" />
                    <p className="text-slate-700">{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-100 px-8 2xl:px-60 py-16">
        <div className="mx-auto container">
          <h2 className="font-display mb-8 font-bold text-navy text-3xl text-center">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl">
            {faqs.map((faq, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: index used for active state tracking
              <div key={index} className="mb-4">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center bg-white shadow-md hover:shadow-lg p-4 w-full text-left transition duration-200"
                >
                  <h3 className="font-semibold text-navy text-lg">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-navy transition-transform duration-200 transform ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Toggle</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeFaq === index && (
                  <div className="bg-white shadow-md p-4 border-slate-100 border-t">
                    <p className="text-slate-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Outreach */}
      <CommunityOutreach />
    </div>
  )
}
