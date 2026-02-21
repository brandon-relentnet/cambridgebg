import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import { motion } from 'motion/react'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout(): React.ReactElement {
  const key = useRouterState({ select: (s) => s.location.pathname })

  return (
    <div>
      <Navbar />
      <main>
        <div className="bg-stone">
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Outlet />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
