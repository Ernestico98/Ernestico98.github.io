/**
 * Company mark. Logos sit on a light tile so dark wordmarks stay legible in
 * both themes; companies without a logo file get an initial-letter monogram.
 */
export function CompanyLogo({ name, logo }: { name: string; logo?: string }) {
  return (
    <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-700">
      {logo ? (
        <img src={logo} alt="" aria-hidden="true" className="size-7 object-contain" />
      ) : (
        <span className="text-sm font-semibold text-zinc-400">{name.charAt(0)}</span>
      )}
    </span>
  )
}
