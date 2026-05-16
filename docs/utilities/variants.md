# Pseudo-element variants

During a transition, the browser exposes pseudo-elements you can style — they live at the document root and represent the old/new snapshots.

| Variant                  | Selector                                  |
| ------------------------ | ----------------------------------------- |
| `vt-old-[<name>]:`       | `::view-transition-old(<name>)`           |
| `vt-new-[<name>]:`       | `::view-transition-new(<name>)`           |
| `vt-group-[<name>]:`     | `::view-transition-group(<name>)`         |
| `vt-image-pair-[<name>]:`| `::view-transition-image-pair(<name>)`    |

Wildcard is supported — target every snapshot at once:

```html
<div class="vt-group-[*]:duration-300" />
```

## Example

```html
<div
  class="vt-old-[hero]:animate-fade-out
         vt-new-[hero]:animate-fade-in"
/>
```

Generated CSS (simplified):

```css
::view-transition-old(hero) { animation: fade-out … }
::view-transition-new(hero) { animation: fade-in  … }
```

::: tip
Because these pseudo-elements live at the document root, the variant **replaces** the element selector — it does not nest under it. The element on which you write the class is just where UnoCSS sees the utility; the CSS itself targets the global pseudo-element.
:::

## Combining with utilities

Any utility your other presets generate can be paired with these variants — durations, easings, animations, transforms, opacity, all work:

```html
<div class="vt-group-[hero]:duration-500
            vt-group-[hero]:ease-in-out" />
```
