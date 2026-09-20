import { Section } from '../components/Section'
import { education } from '../data/cv'

export function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="space-y-6">
        {education.map((item) => (
          <li key={item.degree}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{item.degree}</h3>
              <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{item.period}</span>
            </div>
            <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
              {item.school}
              <span className="mx-2 text-zinc-300 dark:text-zinc-700">·</span>
              {item.location}
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
