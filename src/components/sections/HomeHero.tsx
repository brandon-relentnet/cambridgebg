import { scrollToNextSection } from '@/utils/autoScroll'
import { ChevronRightIcon, DocumentCheckIcon } from '@heroicons/react/24/solid'
import { Link } from '@tanstack/react-router'
import { motion, useScroll, useTransform } from 'motion/react'
import { useState } from 'react'

interface HomeHeroProps {
  showButton?: boolean
}

export function HomeHero({ showButton: _showButton = false }: HomeHeroProps) {
  const [imageVisible, setImageVisible] = useState(false)
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, (v) => -v * 0.3)

  return (
    <section>
      <div className="relative flex justify-center items-center h-[92vh] text-navy">
        <motion.div
          className={`z-0 absolute inset-0 transition-transform duration-700 ease-out ${
            imageVisible
              ? 'translate-y-[76vh] sm:translate-y-[66vh] md:translate-y-[59vh] lg:translate-y-[49vh] xl:translate-y-[39vh] 2xl:translate-y-[29vh] opacity-100'
              : 'translate-y-[100vh] opacity-0'
          }`}
          style={{ y: parallaxY }}
        >
          <img
            src="/nashville-skyline.svg"
            alt="Nashville Skyline"
            className="opacity-70 w-full h-auto"
            onLoad={() => setImageVisible(true)}
          />
        </motion.div>

        <motion.div
          className="z-2 relative flex flex-col justify-center items-center gap-y-4 mx-auto p-6 px-6 md:px-12 pb-50 text-center container"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src="/cbg-secondary-logo.png"
            alt="Logo"
            className="w-[275px] md:w-[400px] lg:w-[450px]"
          />
          <div className="gap-x-4 grid grid-cols-2">
            <button
              type="button"
              onClick={() => scrollToNextSection('who-is-cambridge-construction')}
              className="group bg-navy shadow-lg px-4 py-2 border-2 border-navy font-semibold text-slate-300 hover:scale-115 transition duration-200 cursor-pointer"
            >
              Learn More{' '}
              <ChevronRightIcon className="inline-block -mt-0.5 size-5 group-hover:rotate-90 transition duration-200" />
            </button>
            <Link
              to="/contact"
              className="group flex justify-center items-center shadow-lg px-4 py-2 border-2 border-navy font-semibold text-navy hover:scale-115 transition duration-200"
            >
              Free Quote{' '}
              <DocumentCheckIcon className="inline-block ml-2 size-5 transition duration-200" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
