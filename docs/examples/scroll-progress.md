# Scroll progress bar

A thin bar fixed to the top of the page that fills as the user scrolls.

## Live demo

<ScrollProgressDemo />

```html
<div class="fixed top-0 left-0 z-50 h-1 w-full bg-blue-500
            origin-left scale-x-0
            animate-grow-x animate-fill-mode-both
            timeline-scroll anim-range-cover" />
```

```ts [uno.config.ts]
export default defineConfig({
  theme: {
    animation: {
      keyframes: {
        'grow-x': '{from{transform:scaleX(0)}to{transform:scaleX(1)}}',
      },
      durations: { 'grow-x': '1s' }, // ignored when bound to a timeline
      timingFns: { 'grow-x': 'linear' },
      counts: { 'grow-x': '1' },
    },
  },
})
```

## Notes

- `timeline-scroll` uses the nearest scroller; for a page-wide bar this is the document.
- `anim-range-cover` makes the animation span the entire scrollable range.
- `origin-left` ensures `scaleX` grows from the leading edge.

## Per-section progress

Pair with a named view timeline to show a bar that tracks **one specific section**:

```html
<section class="view-timeline-article">
  …
</section>

<div class="fixed top-0 inset-x-0 h-1 origin-left scale-x-0
            animate-grow-x animate-fill-mode-both
            timeline-article anim-range-cover" />
```
