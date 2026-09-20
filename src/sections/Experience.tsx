import { useState } from 'react'
import { CompanyLogo } from '../components/CompanyLogo'
import { Section } from '../components/Section'
import { experience } from '../data/cv'

function ExperienceCard({ job }: { job: (typeof experience)[number] }) {
  const [open, setOpen] = useState(false)
  const panelId = `exp-${job.company.replace(/\W+/g, '-').toLowerCase()}`

  return (
    <li className="rounded-xl border border-zinc-200 transition hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center gap-4 p-4 text-left"
      >
        <CompanyLogo name={job.company} logo={job.logo} />
        <span className="min-w-0 flex-1">
          <span className="block font-medium text-zinc-900 dark:text-zinc-100">{job.company}</span>
          <span className="block truncate text-sm text-zinc-500 dark:text-zinc-400">{job.role}</span>
        </span>
        <span className="hidden font-mono text-xs text-zinc-400 sm:block dark:text-zinc-500">
          {job.period}
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`size-4 shrink-0 text-zinc-400 transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div id={panelId} className="border-t border-zinc-100 px-4 pb-4 pt-3 dark:border-zinc-800">
          <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
            <span className="sm:hidden">{job.period} · </span>
            {job.location}
            {job.companyUrl && (
              <>
                {' · '}
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400"
                >
                  website ↗
                </a>
              </>
            )}
          </p>
          <ul className="mt-3 space-y-1.5">
            {job.bullets.map((bullet) => (
              <li key={bullet} className="relative pl-5 text-sm leading-relaxed">
                <span className="absolute left-0 top-2 size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ul className="space-y-3">
        {experience.map((job) => (
          <ExperienceCard key={`${job.company}-${job.period}`} job={job} />
        ))}
      </ul>
    </Section>
  )
}
