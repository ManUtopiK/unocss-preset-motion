import type { Variant } from '@unocss/core'

function createPseudoVariant(prefix: string, pseudo: string): Variant {
  const re = new RegExp(`^${prefix}-\\[([^\\]]+)\\]:`)
  return {
    name: `motion-${prefix}`,
    match(matcher) {
      const m = matcher.match(re)
      if (!m)
        return
      return {
        matcher: matcher.slice(m[0].length),
        selector: () => `::view-transition-${pseudo}(${m[1]})`,
      }
    },
  }
}

export const viewTransitionVariants: Variant[] = [
  createPseudoVariant('vt-old', 'old'),
  createPseudoVariant('vt-new', 'new'),
  createPseudoVariant('vt-group', 'group'),
  createPseudoVariant('vt-image-pair', 'image-pair'),
]
