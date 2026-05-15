import type { Postprocessor, Preset, Rule } from '@unocss/core'
import type { MotionTheme, PresetMotionOptions } from './types'
import { allRules } from './rules'
import { allVariants } from './variants'

export * from './types'

const REDUCED_MOTION_PARENT = '@media (prefers-reduced-motion: no-preference)'

const MOTION_CLASS_RE = /^(?:vt-|timeline-|view-timeline|scroll-timeline|anim-range)/

/**
 * UnoCSS preset for View Transitions and Scroll-Driven Animations.
 */
export function presetMotion(options: PresetMotionOptions = {}): Preset<MotionTheme> {
  const {
    respectReducedMotion = false,
    defaultDuration = '300ms',
    prefix = '',
  } = options

  let rules: Rule<MotionTheme>[] = allRules as Rule<MotionTheme>[]

  if (prefix) {
    const prefixEsc = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    rules = rules.map<Rule<MotionTheme>>((rule) => {
      const [pattern, handler, meta] = rule as [string | RegExp, unknown, unknown]
      if (typeof pattern === 'string')
        return [`${prefix}${pattern}`, handler, meta] as Rule<MotionTheme>
      const source = pattern.source.startsWith('^')
        ? `^${prefixEsc}${pattern.source.slice(1)}`
        : `${prefixEsc}${pattern.source}`
      return [new RegExp(source, pattern.flags), handler, meta] as Rule<MotionTheme>
    })
  }

  const motionRe = prefix
    ? new RegExp(`(?:^|:)${prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?:vt-|timeline-|view-timeline|scroll-timeline|anim-range)`)
    : MOTION_CLASS_RE

  const postprocess: Postprocessor[] = []
  if (respectReducedMotion) {
    postprocess.push((util) => {
      // Strip the leading dot and any variant selector prefix to inspect the class.
      const className = util.selector.replace(/^\./, '').split(/[ >:~+]/)[0]
      if (className && motionRe.test(className))
        util.parent = util.parent ?? REDUCED_MOTION_PARENT
    })
  }

  const preflightCss = defaultDuration
    ? `::view-transition-old(*),\n::view-transition-new(*) {\n  animation-duration: ${defaultDuration};\n}`
    : ''

  return {
    name: 'unocss-preset-motion',
    rules,
    variants: allVariants,
    postprocess,
    theme: {
      motion: {
        timelines: {},
        durations: {},
      },
    } as MotionTheme,
    preflights: preflightCss
      ? [{
          getCSS: () => preflightCss,
        }]
      : [],
  }
}

export default presetMotion
