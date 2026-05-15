import { describe, expect, it } from 'vitest'
import { generate } from './helpers'

describe('timeline', () => {
  it('static timeline utilities', async () => {
    const css = await generate('timeline-view timeline-scroll timeline-scroll-x timeline-scroll-y timeline-scroll-root timeline-scroll-self timeline-scroll-nearest')
    expect(css).toContain('animation-timeline:view()')
    expect(css).toContain('animation-timeline:scroll()')
    expect(css).toContain('animation-timeline:scroll(x)')
    expect(css).toContain('animation-timeline:scroll(y)')
    expect(css).toContain('animation-timeline:scroll(root)')
    expect(css).toContain('animation-timeline:scroll(self)')
    expect(css).toContain('animation-timeline:scroll(nearest)')
  })

  it('named timeline reference', async () => {
    const css = await generate('timeline-hero')
    expect(css).toContain('animation-timeline:--hero')
  })

  it('arbitrary timeline value', async () => {
    const css = await generate('timeline-[view(block_20%)]')
    expect(css).toContain('animation-timeline:view(block 20%)')
  })
})
