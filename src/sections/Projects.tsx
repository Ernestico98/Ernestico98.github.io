import { BulletList, CollapsibleCard, MetaLink } from '../components/CollapsibleCard'
import { Section } from '../components/Section'
import { projects } from '../data/cv'

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="space-y-3">
        {projects.map((project) => (
          <CollapsibleCard
            key={project.name}
            id={`project-${project.name}`}
            title={project.name}
            subtitle={project.tagline}
            meta={project.year}
            details={
              <>
                {project.tech.join(' · ')}
                {project.links.map(({ label, href }) => (
                  <span key={href}>
                    {' · '}
                    <MetaLink href={href}>{label} ↗</MetaLink>
                  </span>
                ))}
              </>
            }
          >
            <BulletList bullets={project.bullets} />
          </CollapsibleCard>
        ))}
      </ul>
    </Section>
  )
}
