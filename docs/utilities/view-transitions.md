# View Transitions

Mark elements that should morph between DOM states.

## `view-transition-name`

| Class                 | CSS                                |
| --------------------- | ---------------------------------- |
| `vt-name-<ident>`     | `view-transition-name: <ident>`    |
| `vt-name-[<value>]`   | `view-transition-name: <value>`    |
| `vt-name-none`        | `view-transition-name: none`       |
| `vt-name-auto`        | `view-transition-name: auto`       |

```html
<h1 class="vt-name-[page-title]">Welcome</h1>
<img class="vt-name-hero" src="/hero.jpg" />
```

## `view-transition-class` (Chrome 125+)

Lets you target several transitions with one class name in CSS.

| Class                  | CSS                                       |
| ---------------------- | ----------------------------------------- |
| `vt-class-<ident>`     | `view-transition-class: <ident>`          |
| `vt-class-[<value>]`   | `view-transition-class: <value>`          |

Underscores in arbitrary values become spaces, so you can pass multiple class tokens:

```html
<!-- view-transition-class: card featured -->
<article class="vt-class-[card_featured]" />
```

## Triggering a transition

The preset only handles the **CSS side**. To start a transition, call `document.startViewTransition()` around your DOM update:

```ts
function navigate() {
  document.startViewTransition(() => {
    // mutate the DOM, swap routes, etc.
    router.push('/detail')
  })
}
```

Combine with [pseudo-element variants](/utilities/variants) to fully customize the old/new snapshots.
