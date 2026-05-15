import type { Rule } from '@unocss/core'
import type { MotionTheme } from '../types'
import { unescapeValue } from '../utils'

export const timelineRules: Rule<MotionTheme>[] = [
  ['timeline-view', { 'animation-timeline': 'view()' }],
  ['timeline-scroll', { 'animation-timeline': 'scroll()' }],
  ['timeline-scroll-x', { 'animation-timeline': 'scroll(x)' }],
  ['timeline-scroll-y', { 'animation-timeline': 'scroll(y)' }],
  ['timeline-scroll-root', { 'animation-timeline': 'scroll(root)' }],
  ['timeline-scroll-self', { 'animation-timeline': 'scroll(self)' }],
  ['timeline-scroll-nearest', { 'animation-timeline': 'scroll(nearest)' }],

  [/^timeline-\[(.+)\]$/, ([, value]) => ({
    'animation-timeline': unescapeValue(value!),
  })],

  [/^timeline-([\w-]+)$/, ([, name], { theme }) => {
    // Skip static keys already covered above.
    if (
      name === 'view' || name === 'scroll'
      || name === 'scroll-x' || name === 'scroll-y'
      || name === 'scroll-root' || name === 'scroll-self' || name === 'scroll-nearest'
    ) {
      return
    }
    const fromTheme = theme.motion?.timelines?.[name!]
    if (fromTheme)
      return { 'animation-timeline': fromTheme }
    return { 'animation-timeline': `--${name}` }
  }],
]
