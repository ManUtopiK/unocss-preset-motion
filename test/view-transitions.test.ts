import { describe, expect, it } from 'vitest'
import { generate } from './helpers'

describe('view-transitions', () => {
  it('static utilities', async () => {
    const css = await generate('vt-name-none vt-name-auto')
    expect(css).toContain('view-transition-name:none')
    expect(css).toContain('view-transition-name:auto')
  })

  it('named identifier', async () => {
    const css = await generate('vt-name-hero vt-name-my-card')
    expect(css).toContain('view-transition-name:hero')
    expect(css).toContain('view-transition-name:my-card')
  })

  it('arbitrary value', async () => {
    const css = await generate('vt-name-[card-1]')
    expect(css).toContain('view-transition-name:card-1')
  })

  it('arbitrary value with underscore to space', async () => {
    const css = await generate('vt-class-[card_featured]')
    expect(css).toContain('view-transition-class:card featured')
  })

  it('view-transition-class identifier', async () => {
    const css = await generate('vt-class-hero')
    expect(css).toContain('view-transition-class:hero')
  })
})
