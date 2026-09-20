import { stackLogos } from '../data/cv'

/**
 * Infinite logo ticker. The list is rendered twice and the track is translated
 * by exactly half its width, so the loop restarts on an identical frame and the
 * seam is invisible.
 */
export function StackMarquee() {
  return (
    <div
      className="group relative overflow-hidden py-2"
      // Fade both edges so logos appear and vanish instead of being clipped.
      style={{
        maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
      }}
    >
      <ul className="marquee-track flex w-max items-center gap-10 group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <li key={copy} className="flex shrink-0 items-center gap-10" aria-hidden={copy === 1}>
            {stackLogos.map(({ name, file }) => (
              <img
                key={name}
                src={`/logos/stack/${file}`}
                alt={name}
                title={name}
                loading="lazy"
                className="h-9 w-auto max-w-[5.5rem] object-contain transition duration-300 hover:scale-110"
              />
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}
