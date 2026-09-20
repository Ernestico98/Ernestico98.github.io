import { Nav } from './components/Nav'
import { SidePanel } from './components/SidePanel'
import { profile } from './data/cv'
import { useHashScroll } from './hooks/useHashScroll'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Recognition } from './sections/Recognition'
import { Stack } from './sections/Stack'

export default function App() {
  useHashScroll()

  return (
    <>
      <Nav />
      {/* Panel comes first in the DOM so it sits on top on mobile; on lg the
          order flips it back to the right-hand column. */}
      <div className="mx-auto grid max-w-5xl gap-10 px-6 pt-10 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div className="min-w-0 lg:order-2">
          <SidePanel />
        </div>
        <main className="min-w-0 lg:order-1">
          <Hero />
          <Experience />
          <Education />
          <Stack />
          <Recognition />
        </main>
      </div>
      <footer className="mx-auto max-w-5xl px-6 py-8 text-sm text-zinc-400 dark:text-zinc-600">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}
