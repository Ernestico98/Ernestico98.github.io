import { Nav } from './components/Nav'
import { useHashScroll } from './hooks/useHashScroll'
import { profile } from './data/cv'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Recognition } from './sections/Recognition'
import { Stack } from './sections/Stack'

export default function App() {
  useHashScroll()

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6">
        <Hero />
        <Experience />
        <Education />
        <Recognition />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <footer className="mx-auto max-w-3xl border-t border-zinc-200 px-6 py-8 text-sm text-zinc-400 dark:border-zinc-800 dark:text-zinc-600">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}
