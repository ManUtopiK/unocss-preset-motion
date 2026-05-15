import { describe, expect, it } from 'vitest'
import { generate } from './helpers'

describe('view-transition pseudo variants', () => {
  it('vt-old variant', async () => {
    const css = await generate('vt-old-[hero]:opacity-0')
    expect(css).toContain('::view-transition-old(hero)')
    expect(css).toContain('opacity:0')
  })

  it('vt-new variant', async () => {
    const css = await generate('vt-new-[hero]:opacity-100')
    expect(css).toContain('::view-transition-new(hero)')
  })

  it('vt-group variant with wildcard', async () => {
    const css = await generate('vt-group-[*]:duration-300')
    expect(css).toContain('::view-transition-group(*)')
  })

  it('vt-image-pair variant', async () => {
    const css = await generate('vt-image-pair-[card]:opacity-50')
    expect(css).toContain('::view-transition-image-pair(card)')
  })
})
