export interface PresetMotionOptions {
  /**
   * Wrap view-transition utilities in
   * `@media (prefers-reduced-motion: no-preference)`.
   * @default false
   */
  respectReducedMotion?: boolean

  /**
   * Default animation duration applied to `::view-transition-*` pseudos
   * when no explicit duration is set. Set to `false` to disable.
   * @default '300ms'
   */
  defaultDuration?: string | false

  /**
   * Prefix all utilities.
   * @default ''
   */
  prefix?: string
}

export interface MotionTheme {
  motion?: {
    timelines?: Record<string, string>
    durations?: Record<string, string>
  }
}
