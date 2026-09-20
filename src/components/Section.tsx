import type { ReactNode } from 'react'

export function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-zinc-200 py-14 dark:border-zinc-800">
      <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
        {title}
      </h2>
      {children}
    </section>
  )
}
