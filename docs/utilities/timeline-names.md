# Timeline names & scope

Declare a timeline on an element so other elements can consume it via `timeline-<name>`.

## `view-timeline-name`

| Class                       | CSS                                  |
| --------------------------- | ------------------------------------ |
| `view-timeline-<name>`      | `view-timeline-name: --<name>`       |
| `view-timeline-[<value>]`   | arbitrary value                      |

The element is the timeline source; its **viewport visibility** drives the animation of any descendant (or in-scope sibling) that uses `timeline-<name>`.

## `scroll-timeline-name`

| Class                         | CSS                                    |
| ----------------------------- | -------------------------------------- |
| `scroll-timeline-<name>`      | `scroll-timeline-name: --<name>`       |
| `scroll-timeline-[<value>]`   | arbitrary value                        |

The element must be a scroller. Its **scroll progress** drives animations elsewhere.

## `timeline-scope` {#timeline-scope}

| Class                         | CSS                                   |
| ----------------------------- | ------------------------------------- |
| `timeline-scope-<name>`       | `timeline-scope: --<name>`            |
| `timeline-scope-[<value>]`    | arbitrary value                       |

Names declared via `view-timeline-name` / `scroll-timeline-name` are normally only visible to descendants. `timeline-scope` on a common ancestor exposes the name to **siblings** of the timeline source — which is the only way to drive an animation on an element that sits next to (not inside) the scroller.

## Putting it together

```html
<!-- The parent declares the scope so the sibling progress bar can see the name. -->
<div class="timeline-scope-gallery">
  <div class="scroll-timeline-gallery scroll-timeline-axis-x overflow-x-auto flex gap-4">
    <div class="shrink-0 w-64">…</div>
    <div class="shrink-0 w-64">…</div>
    <div class="shrink-0 w-64">…</div>
  </div>

  <!-- Sibling, not descendant. -->
  <div class="h-2 bg-purple-500 origin-left scale-x-0
              animate-grow-x animate-fill-mode-both
              timeline-gallery anim-range-cover" />
</div>
```

The progress bar fills as the gallery scrolls horizontally, even though the bar lives outside the scroller.
