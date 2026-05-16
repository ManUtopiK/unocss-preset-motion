# Horizontal gallery with progress bar

A horizontally-scrollable gallery whose scroll position drives a progress bar that lives **outside** the scroller. This is the canonical use case for **named timelines** + `timeline-scope`.

## Live demo

<HorizontalGalleryDemo />

```html
<div class="timeline-scope-gallery space-y-4">
  <!-- the scroller becomes the timeline source -->
  <div class="scroll-timeline-gallery scroll-timeline-axis-x
              overflow-x-auto flex gap-4 p-4 bg-gray-100 rounded-lg">
    <div v-for="i in 8" :key="i"
         class="shrink-0 w-64 h-40 rounded-lg"
         :style="{ background: `hsl(${i * 40} 70% 55%)` }" />
  </div>

  <!-- sibling, driven by the gallery's timeline name -->
  <div class="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
    <div class="h-full w-full bg-purple-500 origin-left scale-x-0
                animate-grow-x animate-fill-mode-both
                timeline-gallery anim-range-cover" />
  </div>
</div>
```

## Why each utility is here

| Class                                  | Role                                                                                  |
| -------------------------------------- | ------------------------------------------------------------------------------------- |
| `timeline-scope-gallery` (parent)      | Make the `--gallery` name visible to **siblings**, not just descendants.              |
| `scroll-timeline-gallery` (scroller)   | Declare the timeline name on the scrollable element.                                  |
| `scroll-timeline-axis-x`               | Drive the timeline by horizontal scroll, not vertical.                                |
| `timeline-gallery` (progress bar)      | Consume the named timeline — even though the bar is outside the scroller.             |
| `anim-range-cover`                     | Run the animation across the full scroll range.                                       |

::: tip
Without `timeline-scope`, the `--gallery` name would only be reachable by descendants of the scroller. `timeline-scope` on the common ancestor is what enables the sibling layout pattern.
:::
