# `animation-timeline`

Bind an animation to a scroll position or to an element's visibility within its scroller.

## Static utilities

| Class                       | CSS                                        |
| --------------------------- | ------------------------------------------ |
| `timeline-view`             | `animation-timeline: view()`               |
| `timeline-scroll`           | `animation-timeline: scroll()`             |
| `timeline-scroll-x`         | `animation-timeline: scroll(x)`            |
| `timeline-scroll-y`         | `animation-timeline: scroll(y)`            |
| `timeline-scroll-root`      | `animation-timeline: scroll(root)`         |
| `timeline-scroll-self`      | `animation-timeline: scroll(self)`         |
| `timeline-scroll-nearest`   | `animation-timeline: scroll(nearest)`      |

## Named reference

| Class                    | CSS                                |
| ------------------------ | ---------------------------------- |
| `timeline-<name>`        | `animation-timeline: --<name>`     |
| `timeline-[<value>]`     | arbitrary value                    |

```html
<!-- consume a timeline defined elsewhere -->
<div class="timeline-hero animate-fade-in anim-range-cover" />
```

If `theme.motion.timelines.hero` is set in your config, `timeline-hero` resolves to that value instead of `--hero`. See [Theme integration](/guide/theme).

## Which to choose

- `view()` — the animation progresses based on the element's own position in the viewport. Use for reveal-on-scroll effects.
- `scroll()` — the animation progresses based on the nearest scroller's position. Use for global progress indicators or full-page effects.
- Named (`--hero`) — the animation is driven by **another element's** declared timeline. Use when the trigger and the target are different elements (combine with [`timeline-scope`](/utilities/timeline-names#timeline-scope) to expose the name to siblings).
