# Getting started

`unocss-preset-motion` adds utilities for two modern CSS motion APIs:

1. **View Transitions API** — smooth, browser-orchestrated transitions between DOM states.
2. **Scroll-Driven Animations** — CSS animations whose progress is tied to scroll position or viewport visibility.

Both APIs are exposed as composable, on-demand utilities that play nicely with `presetWind3` / `presetWind4`.

## Install

::: code-group

```bash [pnpm]
pnpm add -D unocss-preset-motion
```

```bash [npm]
npm i -D unocss-preset-motion
```

```bash [yarn]
yarn add -D unocss-preset-motion
```

:::

## Register the preset

```ts [uno.config.ts]
import { defineConfig, presetWind3 } from 'unocss'
import presetMotion from 'unocss-preset-motion'

export default defineConfig({
  presets: [
    presetWind3(), // or presetWind4()
    presetMotion(),
  ],
})
```

## Your first transition

```html
<!-- mark this element so the browser knows to morph it between routes -->
<img src="/hero.jpg" class="vt-name-[hero]" />

<!-- run a custom animation on the leaving snapshot -->
<div class="vt-old-[hero]:animate-slide-out-left
            vt-new-[hero]:animate-slide-in-right" />
```

## Your first scroll-driven animation

```html
<div class="opacity-0 translate-y-8
            animate-fade-up animate-fill-mode-both
            timeline-view anim-range-entry">
  Reveal me on scroll.
</div>
```

- `timeline-view` — bind the animation to the element's viewport position.
- `anim-range-entry` — play only during the entry phase.
- `animate-fill-mode-both` — keep the final state after the animation ends.

## Next steps

- Browse all [utilities](/utilities/view-transitions)
- Check the [examples](/examples/scroll-reveal)
- Configure [options](/guide/options)
