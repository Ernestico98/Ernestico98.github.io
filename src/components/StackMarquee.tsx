import { stackLogos } from '../data/cv'

/**
 * Infinite logo ticker. The list is rendered twice and the track is translated
 * by exactly half its width, so the loop restarts on an identical frame and the
 * seam is invisible.
 *
 * Two things keep that half-width stable, and both matter:
 *  - every logo sits in a fixed-size slot, so the track measures the same
 *    before and after the images decode;
 *  - the images load eagerly. With loading="lazy" the clipped ones never
 *    entered the viewport, so they stayed unloaded at zero width and popped in
 *    mid-scroll — which changed the track width, and with it the -50% the
 *    animation translates by, making the row lurch. They are 19KB in total.
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
      <ul className="marquee-track flex w-max items-center gap-4 sm:gap-8">
        {[0, 1].map((copy) => (
          <li key={copy} className="flex shrink-0 items-center gap-4 sm:gap-8" aria-hidden={copy === 1}>
            {stackLogos.map(({ name, file }) => (
              <span key={name} className="flex h-9 w-14 shrink-0 items-center justify-center sm:w-16">
                <img
                  src={`/logos/stack/${file}`}
                  alt={name}
                  title={name}
                  className="max-h-full max-w-full object-contain transition duration-300 hover:scale-110"
                />
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}
