import { useState } from 'react'
import { Section } from '../components/Section'
import { awards, moreAwards, type Award } from '../data/cv'

function AwardRow({ award }: { award: Award }) {
  return (
    <li className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
      <div>
        <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{award.title}</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{award.detail}</p>
      </div>
      <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{award.year}</span>
    </li>
  )
}

export function Recognition() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Section id="recognition" title="Recognition">
      <ul className="space-y-4">
        {awards.map((award) => (
          <AwardRow key={`${award.title}-${award.year}`} award={award} />
        ))}
      </ul>

      <div id="more-awards" hidden={!expanded}>
        <ul className="mt-4 space-y-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
          {moreAwards.map((award) => (
            <AwardRow key={`${award.title}-${award.year}`} award={award} />
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls="more-awards"
        className="mt-5 inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        {expanded ? 'Show less' : `Show ${moreAwards.length} more`}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`size-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </Section>
  )
}
