import type { Rule } from '@unocss/core'
import { unescapeValue } from '../utils'

export const timelineScopeRules: Rule[] = [
  [/^timeline-scope-\[(.+)\]$/, ([, value]) => ({
    'timeline-scope': unescapeValue(value!),
  })],
  [/^timeline-scope-([\w-]+)$/, ([, name]) => ({
    'timeline-scope': `--${name}`,
  })],
]
