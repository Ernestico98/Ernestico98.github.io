import { Section } from '../components/Section'
import { profile } from '../data/cv'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'GitHub', value: 'github.com/ernestico98', href: profile.github },
  { label: 'LinkedIn', value: 'in/ernestodavidph', href: profile.linkedin },
  { label: 'Location', value: profile.location },
]

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <dl className="space-y-3">
        {channels.map((channel) => (
          <div key={channel.label} className="flex gap-6">
            <dt className="w-24 shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
              {channel.label}
            </dt>
            <dd className="text-sm">
              {channel.href ? (
                <a
                  href={channel.href}
                  target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400"
                >
                  {channel.value}
                </a>
              ) : (
                channel.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
