import type { Rule } from '@unocss/core'
import { animationRangeRules } from './animation-range'
import { timelineRules } from './timeline'
import { timelineAxisRules } from './timeline-axis'
import { timelineNameRules } from './timeline-name'
import { timelineScopeRules } from './timeline-scope'
import { viewTransitionRules } from './view-transitions'

export const allRules: Rule[] = [
  ...viewTransitionRules,
  ...timelineRules as Rule[],
  ...timelineNameRules,
  ...timelineAxisRules,
  ...animationRangeRules,
  ...timelineScopeRules,
]
