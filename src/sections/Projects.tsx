import { Section } from '../components/Section'
import { projects } from '../data/cv'

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="rounded-xl border border-zinc-200 p-5 transition hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer" className="hover:underline">
                  {project.name}
                  <span aria-hidden="true" className="ml-1 text-zinc-400">
                    ↗
                  </span>
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
