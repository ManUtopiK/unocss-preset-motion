# Scroll reveal

Fade-and-translate-up effect as the element enters the viewport — the canonical "scroll reveal".

## Live demo

```html
<div class="opacity-0 translate-y-12
            animate-fade-up animate-fill-mode-both
            timeline-view anim-range-[entry_0%_cover_25%]">
  Reveal me.
</div>
```

<ScrollRevealDemo />

```ts [uno.config.ts]
import { defineConfig, presetWind3 } from 'unocss'
import presetMotion from 'unocss-preset-motion'

export default defineConfig({
  presets: [presetWind3(), presetMotion()],
  theme: {
    animation: {
      keyframes: {
        'fade-up': '{from{opacity:0;transform:translateY(3rem)}to{opacity:1;transform:translateY(0)}}',
      },
      durations: { 'fade-up': '1s' },
      timingFns: { 'fade-up': 'ease-out' },
      counts: { 'fade-up': '1' },
    },
  },
})
```

## How it works

| Class                                | Role                                                                                  |
| ------------------------------------ | ------------------------------------------------------------------------------------- |
| `opacity-0 translate-y-12`           | The **static state** — visible to users who opt out of motion.                        |
| `animate-fade-up`                    | The keyframes definition (declared in the theme).                                     |
| `animate-fill-mode-both`             | Keep the final state after the animation reaches 100%.                                |
| `timeline-view`                      | Drive the animation by the element's own viewport position, not by time.              |
| `anim-range-[entry_0%_cover_25%]`    | Spread the animation across more scroll distance for a softer effect.                 |

## Variations

```html
<!-- Punchier: animation snaps during entry only -->
<div class="… timeline-view anim-range-entry" />

<!-- Slower fade-in across the whole traversal -->
<div class="… timeline-view anim-range-cover" />
```
