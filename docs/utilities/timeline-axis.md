# Timeline axis & inset

## Axis

Pick which axis of the scroller drives the timeline.

| Class                          | CSS                                |
| ------------------------------ | ---------------------------------- |
| `view-timeline-axis-x`         | `view-timeline-axis: x`            |
| `view-timeline-axis-y`         | `view-timeline-axis: y`            |
| `view-timeline-axis-block`     | `view-timeline-axis: block`        |
| `view-timeline-axis-inline`    | `view-timeline-axis: inline`       |
| `scroll-timeline-axis-x`       | `scroll-timeline-axis: x`          |
| `scroll-timeline-axis-y`       | `scroll-timeline-axis: y`          |
| `scroll-timeline-axis-block`   | `scroll-timeline-axis: block`      |
| `scroll-timeline-axis-inline`  | `scroll-timeline-axis: inline`     |

`block` and `inline` follow the document's writing mode. Use them when you want the behavior to flip automatically for RTL or vertical writing.

## Inset

Shrink (or pad out) the active region of a view timeline.

| Class                              | CSS                                       |
| ---------------------------------- | ----------------------------------------- |
| `view-timeline-inset-[<value>]`    | `view-timeline-inset: <value>`            |

Accepts any valid CSS length, percentage, or pair. Underscores become spaces inside arbitrary values.

```html
<!-- start tracking 10% before the element enters, stop 20% before it leaves -->
<div class="view-timeline-hero view-timeline-inset-[10%_20%]" />
```
