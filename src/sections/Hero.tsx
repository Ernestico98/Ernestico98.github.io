import { profile } from '../data/cv'

const links = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
]

export function Hero() {
  return (
    <section id="about" className="scroll-mt-20 pt-16 pb-14">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        {profile.name}
      </h1>
      <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
        {profile.role}
        <span className="mx-2 text-zinc-300 dark:text-zinc-700">·</span>
        <span className="text-zinc-500 dark:text-zinc-500">{profile.location}</span>
      </p>
      <p className="mt-6 max-w-2xl leading-relaxed">{profile.summary}</p>
      <div className="mt-7 flex flex-wrap gap-3">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
            className="rounded-full border border-zinc-300 px-4 py-1.5 text-sm text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-400 dark:hover:text-zinc-100"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}
