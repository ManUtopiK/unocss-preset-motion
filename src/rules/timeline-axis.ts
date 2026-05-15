import type { Rule } from '@unocss/core'

const AXES = ['x', 'y', 'block', 'inline'] as const

export const timelineAxisRules: Rule[] = [
  ...AXES.map<Rule>(axis => [
    `view-timeline-axis-${axis}`,
    { 'view-timeline-axis': axis },
  ]),
  ...AXES.map<Rule>(axis => [
    `scroll-timeline-axis-${axis}`,
    { 'scroll-timeline-axis': axis },
  ]),

  // view-timeline-inset (arbitrary only — values are lengths/percentages)
  [/^view-timeline-inset-\[(.+)\]$/, ([, value]) => ({
    'view-timeline-inset': value!.replace(/_/g, ' '),
  })],
]
