import { Section } from '../components/Section'
import { experience } from '../data/cv'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{job.role}</h3>
              <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{job.period}</span>
            </div>
            <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
              {job.companyUrl ? (
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400"
                >
                  {job.company}
                </a>
              ) : (
                job.company
              )}
              <span className="mx-2 text-zinc-300 dark:text-zinc-700">·</span>
              {job.location}
            </p>
            <ul className="mt-3 space-y-1.5">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="relative pl-5 text-sm leading-relaxed">
                  <span className="absolute left-0 top-2 size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
