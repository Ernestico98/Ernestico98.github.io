import { useState, type ReactNode } from 'react'
import type { Bullet } from '../data/cv'
import { CompanyLogo } from './CompanyLogo'

type Props = {
  /** Base for the panel's DOM id; sanitised here so any name is safe. */
  id: string
  title: string
  subtitle: string
  /** Right-hand meta (dates, year); moves into the panel on narrow screens. */
  meta: string
  logo?: string
  /** Mono line at the top of the panel (location, stack, links). */
  details: ReactNode
  children: ReactNode
}

/**
 * The card shared by Experience and Projects: one line while collapsed, the
 * details on demand. Keeping it in one place keeps the two sections identical.
 */
export function CollapsibleCard({ id, title, subtitle, meta, logo, details, children }: Props) {
  const [open, setOpen] = useState(false)
  const panelId = id.replace(/\W+/g, '-').toLowerCase()

  return (
    <li className="rounded-xl border border-zinc-200 transition hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center gap-4 p-4 text-left"
      >
        <CompanyLogo name={title} logo={logo} />
        <span className="min-w-0 flex-1">
          <span className="block font-medium text-zinc-900 dark:text-zinc-100">{title}</span>
          <span className="block truncate text-sm text-zinc-500 dark:text-zinc-400">{subtitle}</span>
        </span>
        <span className="hidden font-mono text-xs text-zinc-400 sm:block dark:text-zinc-500">{meta}</span>
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
            <span className="sm:hidden">{meta} · </span>
            {details}
          </p>
          {children}
        </div>
      )}
    </li>
  )
}

/** Link styling for the panels' meta line. */
export function MetaLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400"
    >
      {children}
    </a>
  )
}

export function BulletList({ bullets }: { bullets: Bullet[] }) {
  return (
    <ul className="mt-3 space-y-1.5">
      {bullets.map((bullet) => (
        <li key={typeof bullet === 'string' ? bullet : bullet.lead} className="relative pl-5 text-sm leading-relaxed">
          <span className="absolute left-0 top-2 size-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          {typeof bullet === 'string' ? (
            bullet
          ) : (
            <>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">{bullet.lead}:</span> {bullet.text}
            </>
          )}
        </li>
      ))}
    </ul>
  )
}
