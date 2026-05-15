import type { Rule } from '@unocss/core'
import { unescapeValue } from '../utils'

export const timelineNameRules: Rule[] = [
  [/^view-timeline-\[(.+)\]$/, ([, value]) => ({
    'view-timeline-name': unescapeValue(value!),
  })],
  [/^view-timeline-([\w-]+)$/, ([, name]) => {
    // Reserved: axis utilities and inset utility start with these.
    if (name === 'axis' || name === 'inset' || name?.startsWith('axis-') || name?.startsWith('inset-'))
      return
    return { 'view-timeline-name': `--${name}` }
  }],

  [/^scroll-timeline-\[(.+)\]$/, ([, value]) => ({
    'scroll-timeline-name': unescapeValue(value!),
  })],
  [/^scroll-timeline-([\w-]+)$/, ([, name]) => {
    if (name === 'axis' || name?.startsWith('axis-'))
      return
    return { 'scroll-timeline-name': `--${name}` }
  }],
]
