# Reduced motion

Some users configure their OS to request reduced motion. You can opt into automatic handling with one option:

```ts
presetMotion({ respectReducedMotion: true })
```

## What it does

Every motion utility (`vt-*`, `timeline-*`, `view-timeline-*`, `scroll-timeline-*`, `anim-range-*`) is wrapped in `@media (prefers-reduced-motion: no-preference)`. Users with `prefers-reduced-motion: reduce` simply never receive the motion rules — they see the static fallback state of your element.

## Pattern

Author your markup so the **static state** is the meaningful one:

```html
<!-- starts opacity-100 by default; animation slides it in -->
<div class="opacity-100 timeline-view anim-range-entry animate-slide-in-left">
  …
</div>
```

In this example, users who opt out of motion still see fully visible content. The animation is purely additive.

## Manual approach

If you'd rather wrap only specific blocks (not every motion utility globally), use UnoCSS's media-query variants and keep `respectReducedMotion: false`:

```html
<div class="motion-safe:timeline-view motion-safe:anim-range-entry animate-fade-up">
  …
</div>
```

(`motion-safe:` and `motion-reduce:` ship with `presetWind3` / `presetWind4`.)
