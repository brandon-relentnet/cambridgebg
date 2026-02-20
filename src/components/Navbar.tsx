import { navItems } from '@/data/siteData'
import { Bars3Icon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from '@tanstack/react-router'
import { useCallback, useEffect, useState } from 'react'

export function Navbar(): React.ReactElement {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev
      document.body.style.overflow = next ? 'hidden' : ''
      return next
    })
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = ''
  }, [])

  useEffect(() => {
    function handleScroll(): void {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <nav
        className={`top-0 left-0 z-50 fixed w-full h-20 transition-all duration-500 ${
          isScrolled
            ? 'bg-slate-100/90 backdrop-blur-lg shadow-[0_1px_0_rgba(11,27,37,0.08)] shadow-md'
            : 'bg-slate-100 shadow-none'
        }`}
      >
        <div className="flex justify-between items-center mx-auto px-6 h-full container">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <img
              src="/cbg-logo-transparent.png"
              alt="Cambridge Building Group Logo"
              className="w-auto h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex justify-center items-center gap-x-6 font-bold text-navy uppercase">
              {Object.values(navItems).map((item) => (
                <li key={item.title} className="group relative">
                  <Link
                    to={item.link}
                    className="relative py-2 hover:text-slate-500 transition-colors duration-300"
                  >
                    {item.title}
                    <span className="bottom-0 left-0 absolute bg-navy w-0 group-hover:w-full h-0.5 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="flex items-center bg-navy hover:bg-transparent shadow px-4 py-2 border border-navy font-semibold text-slate-300 hover:text-navy transition duration-200"
            >
              <PhoneIcon className="mr-2 size-4" /> Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden focus:outline-none text-navy"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <XMarkIcon className="size-8" /> : <Bars3Icon className="size-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          role="button"
          tabIndex={0}
          className="z-40 fixed inset-0 bg-slate-900/50"
          onClick={closeMobileMenu}
          onKeyDown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter') closeMobileMenu()
          }}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`top-20 right-0 bottom-0 z-50 fixed bg-slate-100 w-4/5 max-w-sm overflow-y-auto transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-6 py-8">
          <ul className="space-y-6">
            {Object.values(navItems).map((item) => (
              <li key={item.title}>
                <Link
                  to={item.link}
                  className="block font-bold text-navy hover:text-slate-500 text-xl transition duration-200"
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 pt-6 border-slate-300 border-t">
            <Link
              to="/contact"
              className="block bg-navy hover:bg-slate-700 shadow px-4 py-3 w-full font-semibold text-slate-300 text-center transition duration-200"
              onClick={closeMobileMenu}
            >
              Get a Free Quote
            </Link>
            <div className="space-y-4 mt-8">
              <div className="flex items-center">
                <PhoneIcon className="mr-3 size-5 text-navy" />
                <a href="tel:6155557890" className="text-navy">
                  (615) 747-7007
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to offset fixed navbar */}
      <div className="h-20" />
    </header>
  )
}
