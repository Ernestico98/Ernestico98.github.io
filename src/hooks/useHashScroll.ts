import { useEffect } from 'react'

/**
 * Deep links such as /#projects don't work on first load: the browser tries to
 * scroll before React has rendered the target element. Re-apply the hash once
 * the tree is mounted.
 */
export function useHashScroll() {
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    const target = document.getElementById(id)
    if (!target) return

    // Wait one frame so layout (fonts, sticky header) has settled.
    const frame = requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'auto', block: 'start' })
    })
    return () => cancelAnimationFrame(frame)
  }, [])
}
