import { profile } from '../data/cv'

// No email here on purpose: a mailto on a public page gets harvested by spam
// bots. Reach-out goes through LinkedIn instead.
const links = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
]

function LocationPin() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3.5 shrink-0"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function SidePanel() {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      {/* Below lg the panel is a two-row card (photo + text, then links);
          from lg it becomes the stacked right-hand column. */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-4 rounded-2xl border border-zinc-200 p-5 lg:flex-col lg:items-start lg:gap-0 dark:border-zinc-800">
        <img
          src="/img/ernesto.jpg"
          alt={profile.name}
          width={224}
          height={224}
          className="size-20 shrink-0 rounded-xl object-cover object-top lg:mb-5 lg:size-full lg:rounded-2xl"
        />
        <div className="min-w-0 flex-1 lg:w-full lg:flex-none">
          <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Hi, I&rsquo;m {profile.shortName}
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{profile.role}</p>
          <p className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
            <LocationPin />
            {profile.location}
          </p>
        </div>
        <div className="flex w-full gap-2 lg:mt-5 lg:flex-col">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-lg border border-zinc-200 px-3 py-1.5 text-center text-sm text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900 lg:flex-none dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-400 dark:hover:text-zinc-100"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
