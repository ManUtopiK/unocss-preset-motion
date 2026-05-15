import type { Rule } from '@unocss/core'
import { unescapeValue } from '../utils'

const RANGE_KEYWORDS = [
  'entry',
  'exit',
  'cover',
  'contain',
  'entry-crossing',
  'exit-crossing',
] as const

export const animationRangeRules: Rule[] = [
  // animation-range shorthand
  ...RANGE_KEYWORDS.map<Rule>(kw => [
    `anim-range-${kw}`,
    { 'animation-range': kw },
  ]),
  [/^anim-range-\[(.+)\]$/, ([, value]) => ({
    'animation-range': unescapeValue(value!),
  })],

  // animation-range-start
  ...RANGE_KEYWORDS.map<Rule>(kw => [
    `anim-range-start-${kw}`,
    { 'animation-range-start': kw },
  ]),
  [/^anim-range-start-\[(.+)\]$/, ([, value]) => ({
    'animation-range-start': unescapeValue(value!),
  })],

  // animation-range-end
  ...RANGE_KEYWORDS.map<Rule>(kw => [
    `anim-range-end-${kw}`,
    { 'animation-range-end': kw },
  ]),
  [/^anim-range-end-\[(.+)\]$/, ([, value]) => ({
    'animation-range-end': unescapeValue(value!),
  })],
]
