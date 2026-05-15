import { describe, expect, it } from 'vitest'
import { generate } from './helpers'

describe('timeline-name', () => {
  it('view-timeline-name', async () => {
    const css = await generate('view-timeline-hero')
    expect(css).toContain('view-timeline-name:--hero')
  })

  it('scroll-timeline-name', async () => {
    const css = await generate('scroll-timeline-main')
    expect(css).toContain('scroll-timeline-name:--main')
  })

  it('view-timeline axis', async () => {
    const css = await generate('view-timeline-axis-x view-timeline-axis-y view-timeline-axis-block view-timeline-axis-inline')
    expect(css).toContain('view-timeline-axis:x')
    expect(css).toContain('view-timeline-axis:y')
    expect(css).toContain('view-timeline-axis:block')
    expect(css).toContain('view-timeline-axis:inline')
  })

  it('scroll-timeline axis', async () => {
    const css = await generate('scroll-timeline-axis-x scroll-timeline-axis-block')
    expect(css).toContain('scroll-timeline-axis:x')
    expect(css).toContain('scroll-timeline-axis:block')
  })

  it('view-timeline-inset arbitrary', async () => {
    const css = await generate('view-timeline-inset-[10%_20%]')
    expect(css).toContain('view-timeline-inset:10% 20%')
  })

  it('timeline-scope', async () => {
    const css = await generate('timeline-scope-main')
    expect(css).toContain('timeline-scope:--main')
  })
})
