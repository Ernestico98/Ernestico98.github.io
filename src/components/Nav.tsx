import { useEffect, useState } from 'react'
import { profile, sections } from '../data/cv'
import { ThemeToggle } from './ThemeToggle'

export function Nav() {
  const [active, setActive] = useState<string>(sections[0].id)

  // Highlight the section currently closest to the top of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )

    for (const { id } of sections) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav className="mx-auto flex max-w-3xl items-center gap-4 px-6 py-3">
        <a href="#about" className="font-mono text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {profile.shortName}
        </a>
        <ul className="ml-auto hidden items-center gap-5 sm:flex">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={
                  active === id
                    ? 'text-sm text-indigo-600 dark:text-indigo-400'
                    : 'text-sm text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="ml-auto sm:ml-0">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
