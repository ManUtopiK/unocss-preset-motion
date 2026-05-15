import { describe, expect, it } from 'vitest'
import { generate } from './helpers'

describe('respectReducedMotion option', () => {
  it('wraps utilities in prefers-reduced-motion media query', async () => {
    const css = await generate('vt-name-hero', { respectReducedMotion: true })
    expect(css).toContain('@media (prefers-reduced-motion: no-preference)')
    expect(css).toContain('view-transition-name:hero')
  })

  it('does not wrap when disabled', async () => {
    const css = await generate('vt-name-hero')
    expect(css).not.toContain('prefers-reduced-motion')
  })
})

describe('prefix option', () => {
  it('prefixes static utilities', async () => {
    const css = await generate('mo-vt-name-none', { prefix: 'mo-' })
    expect(css).toContain('view-transition-name:none')
  })

  it('prefixes dynamic utilities', async () => {
    const css = await generate('mo-timeline-hero', { prefix: 'mo-' })
    expect(css).toContain('animation-timeline:--hero')
  })
})
