import { Section } from '../components/Section'
import { stack } from '../data/cv'

export function Stack() {
  return (
    <Section id="stack" title="Stack">
      <dl className="space-y-5">
        {stack.map((group) => (
          <div key={group.group} className="sm:flex sm:gap-6">
            <dt className="mb-2 shrink-0 text-sm text-zinc-500 sm:mb-0 sm:w-40 dark:text-zinc-400">
              {group.group}
            </dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-zinc-100 px-2.5 py-1 font-mono text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
