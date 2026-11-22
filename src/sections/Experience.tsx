import { BulletList, CollapsibleCard, MetaLink } from '../components/CollapsibleCard'
import { Section } from '../components/Section'
import { experience } from '../data/cv'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ul className="space-y-3">
        {experience.map((job) => (
          <CollapsibleCard
            key={`${job.company}-${job.period}`}
            id={`exp-${job.company}`}
            title={job.company}
            subtitle={job.role}
            meta={job.period}
            logo={job.logo}
            details={
              <>
                {job.location}
                {job.companyUrl && (
                  <>
                    {' · '}
                    <MetaLink href={job.companyUrl}>website ↗</MetaLink>
                  </>
                )}
              </>
            }
          >
            <BulletList bullets={job.bullets} />
          </CollapsibleCard>
        ))}
      </ul>
    </Section>
  )
}
