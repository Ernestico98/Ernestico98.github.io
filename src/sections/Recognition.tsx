import { Section } from '../components/Section'
import { awards } from '../data/cv'

export function Recognition() {
  return (
    <Section id="recognition" title="Recognition">
      <ul className="space-y-4">
        {awards.map((award) => (
          <li
            key={award.title}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5"
          >
            <div>
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{award.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{award.detail}</p>
            </div>
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{award.year}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
