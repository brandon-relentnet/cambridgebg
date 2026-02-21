import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import { MotionConfig, motion } from 'motion/react'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout(): React.ReactElement {
  const key = useRouterState({ select: (s) => s.location.pathname })

  return (
    <MotionConfig reducedMotion="user">
      <div>
        <Navbar />
        <main>
          <div className="bg-stone">
            <motion.div
              key={key}
              initial={{ opacity: 0, transform: 'translateY(12px)' }}
              animate={{ opacity: 1, transform: 'translateY(0px)' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <Outlet />
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
