import { describe, expect, it } from 'vitest'
import { generate } from './helpers'

describe('animation-range', () => {
  it('keyword utilities', async () => {
    const css = await generate('anim-range-entry anim-range-exit anim-range-cover anim-range-contain anim-range-entry-crossing anim-range-exit-crossing')
    expect(css).toContain('animation-range:entry')
    expect(css).toContain('animation-range:exit')
    expect(css).toContain('animation-range:cover')
    expect(css).toContain('animation-range:contain')
    expect(css).toContain('animation-range:entry-crossing')
    expect(css).toContain('animation-range:exit-crossing')
  })

  it('start/end variants', async () => {
    const css = await generate('anim-range-start-entry anim-range-end-exit')
    expect(css).toContain('animation-range-start:entry')
    expect(css).toContain('animation-range-end:exit')
  })

  it('arbitrary two-value', async () => {
    const css = await generate('anim-range-[entry_0%_exit_100%]')
    expect(css).toContain('animation-range:entry 0% exit 100%')
  })

  it('arbitrary start and end', async () => {
    const css = await generate('anim-range-start-[entry_25%] anim-range-end-[exit_75%]')
    expect(css).toContain('animation-range-start:entry 25%')
    expect(css).toContain('animation-range-end:exit 75%')
  })
})
