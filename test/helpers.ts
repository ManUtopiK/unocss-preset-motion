import { createGenerator } from '@unocss/core'
import presetMini from '@unocss/preset-mini'
import { presetMotion, type PresetMotionOptions } from '../src'

export async function generate(input: string, options: PresetMotionOptions = {}): Promise<string> {
  const uno = await createGenerator({
    presets: [presetMini(), presetMotion(options)],
    preflights: false,
  })
  const { css } = await uno.generate(input, { preflights: false })
  return css
}
