import { profile } from '../data/cv'

export function Hero() {
  return (
    <section id="about" className="scroll-mt-24 pb-12">
      <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
        About
      </h2>
      <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">{profile.summary}</p>
    </section>
  )
}
