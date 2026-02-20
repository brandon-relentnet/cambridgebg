import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout(): React.ReactElement {
  return (
    <div>
      <Navbar />
      <main>
        <div className="bg-slate-100">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
