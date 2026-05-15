# unocss-preset-motion

[![npm version](https://img.shields.io/npm/v/unocss-preset-motion.svg)](https://npmjs.com/package/unocss-preset-motion)
[![npm downloads](https://img.shields.io/npm/dm/unocss-preset-motion.svg)](https://npmjs.com/package/unocss-preset-motion)
[![license](https://img.shields.io/npm/l/unocss-preset-motion.svg)](./LICENSE)

UnoCSS preset for modern CSS motion APIs — **View Transitions** and **Scroll-Driven Animations**, in a single tree-shakeable package.

## Install

```bash
pnpm add -D unocss-preset-motion
# or
npm i -D unocss-preset-motion
# or
yarn add -D unocss-preset-motion
```

## Quick start

```ts
// uno.config.ts
import { defineConfig, presetWind3 } from 'unocss'
import presetMotion from 'unocss-preset-motion'

export default defineConfig({
  presets: [
    presetWind3(), // or presetWind4()
    presetMotion(),
  ],
})
```

```html
<h1 class="vt-name-[page-title]">Welcome</h1>

<div class="opacity-0 translate-y-8 animate-fade-up timeline-view anim-range-entry">
  Fades in as it enters the viewport.
</div>

<div
  class="fixed top-0 left-0 h-1 w-full bg-blue-500 origin-left scale-x-0
         animate-grow-x timeline-scroll anim-range-cover"
/>

<div class="vt-old-[page-title]:animate-slide-out-left
            vt-new-[page-title]:animate-slide-in-right" />
```

## Utilities

### View Transitions

| Class | CSS |
|---|---|
| `vt-name-<ident>` | `view-transition-name: <ident>` |
| `vt-name-[<value>]` | `view-transition-name: <value>` |
| `vt-name-none` / `vt-name-auto` | corresponding keyword |
| `vt-class-<ident>` | `view-transition-class: <ident>` |
| `vt-class-[card_featured]` | `view-transition-class: card featured` |

### Scroll-Driven Animations — `animation-timeline`

| Class | CSS |
|---|---|
| `timeline-view` | `animation-timeline: view()` |
| `timeline-scroll` | `animation-timeline: scroll()` |
| `timeline-scroll-x` / `-y` / `-root` / `-self` / `-nearest` | corresponding `scroll(<scroller>)` |
| `timeline-<name>` | `animation-timeline: --<name>` |
| `timeline-[<value>]` | arbitrary |

### `view-timeline-*` / `scroll-timeline-*`

| Class | CSS |
|---|---|
| `view-timeline-<name>` | `view-timeline-name: --<name>` |
| `scroll-timeline-<name>` | `scroll-timeline-name: --<name>` |
| `view-timeline-axis-x` (`-y`, `-block`, `-inline`) | `view-timeline-axis: <axis>` |
| `scroll-timeline-axis-x` (etc.) | `scroll-timeline-axis: <axis>` |
| `view-timeline-inset-[<value>]` | `view-timeline-inset: <value>` |

### `animation-range`

Range keywords: `entry`, `exit`, `cover`, `contain`, `entry-crossing`, `exit-crossing`.

| Class | CSS |
|---|---|
| `anim-range-<kw>` | `animation-range: <kw>` |
| `anim-range-start-<kw>` | `animation-range-start: <kw>` |
| `anim-range-end-<kw>` | `animation-range-end: <kw>` |
| `anim-range-[entry_0%_exit_100%]` | `animation-range: entry 0% exit 100%` |

### `timeline-scope`

| Class | CSS |
|---|---|
| `timeline-scope-<name>` | `timeline-scope: --<name>` |
| `timeline-scope-[<value>]` | arbitrary |

### Variants — `::view-transition-*` pseudo-elements

| Variant | Selector |
|---|---|
| `vt-old-[<name>]:` | `::view-transition-old(<name>)` |
| `vt-new-[<name>]:` | `::view-transition-new(<name>)` |
| `vt-group-[<name>]:` | `::view-transition-group(<name>)` |
| `vt-image-pair-[<name>]:` | `::view-transition-image-pair(<name>)` |

Wildcard supported: `vt-group-[*]:duration-300`.

## Options

```ts
presetMotion({
  // Wrap view-transition utilities in
  // `@media (prefers-reduced-motion: no-preference)`.
  respectReducedMotion: false,

  // Default animation duration applied to ::view-transition-* pseudos.
  // Set to false to disable the preflight.
  defaultDuration: '300ms',

  // Prefix all utilities.
  prefix: '',
})
```

## Theme integration

```ts
defineConfig({
  presets: [presetMotion()],
  theme: {
    motion: {
      timelines: {
        hero: 'view()',
        footer: 'scroll()',
      },
    },
  },
})
```

`timeline-hero` then resolves to `animation-timeline: view()`.

## Browser support

- **View Transitions API**: supported in all evergreen browsers for same-document transitions. See [caniuse](https://caniuse.com/view-transitions).
- **Scroll-Driven Animations**: Chrome 115+. Firefox and Safari behind flags as of writing. See [caniuse](https://caniuse.com/css-scroll-timeline).

## Playground

```bash
pnpm i
pnpm play
```

## Contributing

PRs welcome. Run `pnpm test` and `pnpm lint` before opening one.

## License

[MIT](./LICENSE) © ManUtopiK
