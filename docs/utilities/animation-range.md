# `animation-range`

Controls which portion of the timeline drives the animation. The most important utility to **tune the feel** of a scroll-driven effect.

## Range keywords

| Keyword            | Meaning                                                                          |
| ------------------ | -------------------------------------------------------------------------------- |
| `entry`            | From the moment the element starts entering the viewport to fully entered.       |
| `exit`             | From fully visible to fully out.                                                 |
| `cover`            | Entire traversal — entry + visible + exit.                                       |
| `contain`          | The window during which the element is fully inside the viewport.                |
| `entry-crossing`   | The element's *bottom* crossing the viewport's *bottom*.                         |
| `exit-crossing`    | The element's *top* crossing the viewport's *top*.                               |

## Shorthand

| Class                            | CSS                                |
| -------------------------------- | ---------------------------------- |
| `anim-range-<keyword>`           | `animation-range: <keyword>`       |
| `anim-range-[<value>]`           | `animation-range: <value>`         |

## Start / End

| Class                                | CSS                                       |
| ------------------------------------ | ----------------------------------------- |
| `anim-range-start-<keyword>`         | `animation-range-start: <keyword>`        |
| `anim-range-end-<keyword>`           | `animation-range-end: <keyword>`          |
| `anim-range-start-[<value>]`         | arbitrary                                 |
| `anim-range-end-[<value>]`           | arbitrary                                 |

## Two-value syntax

For fine control, use the arbitrary form with both ends in one declaration. Underscores become spaces:

```html
<!-- animate from "entry starts" to "25% into cover" → a slow, comfortable reveal -->
<div class="… timeline-view anim-range-[entry_0%_cover_25%]" />
```

## Picking the right range

| Goal                                              | Recommended range                          |
| ------------------------------------------------- | ------------------------------------------ |
| Snap as soon as the element appears               | `anim-range-entry`                         |
| Slow, dramatic reveal over more scroll distance   | `anim-range-[entry_0%_cover_30%]`          |
| Progress bar across the whole page                | `anim-range-cover` on a `timeline-scroll`  |
| Fade-out as the element leaves                    | `anim-range-exit`                          |
| Animation runs only while element is fully shown  | `anim-range-contain`                       |
