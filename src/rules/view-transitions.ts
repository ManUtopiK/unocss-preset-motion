import type { Rule } from '@unocss/core'
import { unescapeValue } from '../utils'

export const viewTransitionRules: Rule[] = [
  ['vt-name-none', { 'view-transition-name': 'none' }],
  ['vt-name-auto', { 'view-transition-name': 'auto' }],

  [/^vt-name-\[(.+)\]$/, ([, value]) => ({
    'view-transition-name': unescapeValue(value!),
  })],
  [/^vt-name-([\w-]+)$/, ([, ident]) => {
    if (ident === 'none' || ident === 'auto')
      return
    return { 'view-transition-name': ident }
  }],

  [/^vt-class-\[(.+)\]$/, ([, value]) => ({
    'view-transition-class': unescapeValue(value!),
  })],
  [/^vt-class-([\w-]+)$/, ([, ident]) => ({
    'view-transition-class': ident,
  })],
]
