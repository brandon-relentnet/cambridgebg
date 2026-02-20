import { companyInfo, footerLinks, socialLinks } from '@/data/siteData'
import { ClockIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { Link } from '@tanstack/react-router'

const currentYear = new Date().getFullYear()

export function Footer(): React.ReactElement {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="px-8 2xl:px-60 pt-16 pb-12">
        <div className="mx-auto container">
          <div className="gap-12 grid grid-cols-1 lg:grid-cols-5">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <img
                src="/cbg-logo-transparent-inverted.png"
                alt="Cambridge Building Group Logo"
                className="mb-6 w-auto h-16"
              />
              <p className="mb-6">{companyInfo.tagline}</p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="flex-shrink-0 mt-1 mr-3 size-5 text-amber" />
                  <p>{companyInfo.address}</p>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="flex-shrink-0 mt-1 mr-3 size-5 text-amber" />
                  <p>{companyInfo.phone}</p>
                </div>
                <div className="flex items-start">
                  <EnvelopeIcon className="flex-shrink-0 mt-1 mr-3 size-5 text-amber" />
                  <p>{companyInfo.email}</p>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="flex-shrink-0 mt-1 mr-3 size-5 text-amber" />
                  <p>{companyInfo.hours}</p>
                </div>
              </div>
            </div>

            {/* About Links */}
            <div>
              <h3 className="mb-6 font-bold text-slate-300 text-xl">About</h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <Link to={link.url} className="hover:text-slate-300 transition duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="mb-6 font-bold text-slate-300 text-xl">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link to={link.url} className="hover:text-slate-300 transition duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Links & Social */}
            <div>
              <h3 className="mb-6 font-bold text-slate-300 text-xl">Connect</h3>
              <ul className="space-y-3">
                {footerLinks.connect.map((link) => (
                  <li key={link.name}>
                    <Link to={link.url} className="hover:text-slate-300 transition duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <h4 className="mb-4 font-semibold text-slate-300 text-lg">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-200 hover:bg-slate-400 p-3 rounded-full text-slate-300 transition duration-200"
                      aria-label={social.name}
                    >
                      <span className="sr-only">{social.name}</span>
                      <img
                        src={social.icon}
                        alt={social.name}
                        className="w-6 h-6"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 px-8 2xl:px-60 py-6">
        <div className="flex md:flex-row flex-col justify-between items-center mx-auto container">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} {companyInfo.name}{' '}
            <span className="ml-2 italic">All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
