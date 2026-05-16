# Theme integration

The preset extends the UnoCSS theme with a `motion` namespace where you can declare reusable named timelines.

## Define timelines

```ts [uno.config.ts]
import { defineConfig, presetWind3 } from 'unocss'
import presetMotion from 'unocss-preset-motion'

export default defineConfig({
  presets: [presetWind3(), presetMotion()],
  theme: {
    motion: {
      timelines: {
        hero: 'view()',
        footer: 'scroll()',
        gallery: 'scroll(self inline)',
      },
    },
  },
})
```

## Use them

Once defined, `timeline-<name>` resolves to the value from the theme rather than the default `--<name>` named reference:

```html
<!-- compiles to: animation-timeline: view() -->
<div class="animate-fade-up timeline-hero anim-range-cover" />

<!-- compiles to: animation-timeline: scroll(self inline) -->
<div class="scroll-x-auto timeline-gallery" />
```

This is handy when you want to centralize timeline definitions and refer to them by domain-meaningful names instead of repeating `view()` / `scroll()` everywhere.

## TypeScript

If you author your config in TypeScript, the `motion` namespace is type-augmented automatically via module declaration merging — no extra import required.
