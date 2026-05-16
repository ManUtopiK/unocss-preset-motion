# View transition list → detail

Click a card in a list, navigate to its detail page, and watch the image + title smoothly morph into place.

## Live demo

<ViewTransitionDemo />

## Mark the morphing pieces

Each shared element gets a **unique** `view-transition-name` on both pages. The browser matches names between snapshots to know what to morph.

::: tip
For dynamic values like `card-${id}-image`, prefer binding via `:style` because UnoCSS can't statically extract template-literal class names.
:::

```vue [ListView.vue]
<button v-for="card in cards" :key="card.id" @click="navigate(card.id)">
  <div class="h-32" :style="{
        background: `hsl(${card.hue} 70% 60%)`,
        viewTransitionName: `card-${card.id}-image`,
      }" />
  <div class="p-3 bg-white" :style="{ viewTransitionName: `card-${card.id}-title` }">
    {{ card.title }}
  </div>
</button>
```

```vue [DetailView.vue]
<div class="h-64 rounded-lg" :style="{
      background: `hsl(${hue} 70% 60%)`,
      viewTransitionName: `card-${id}-image`,
    }" />
<div class="p-4 text-2xl font-semibold" :style="{ viewTransitionName: `card-${id}-title` }">
  Card {{ id }}
</div>
```

## Trigger the transition

```ts [use-view-transition.ts]
export function startViewTransition(cb: () => void | Promise<void>) {
  const doc = document as Document & {
    startViewTransition?: (cb: () => void | Promise<void>) => unknown
  }
  if (typeof doc.startViewTransition === 'function')
    doc.startViewTransition(cb)
  else
    cb()
}
```

```ts
import { startViewTransition } from './use-view-transition'

function navigate(id: number) {
  startViewTransition(() => router.push(`/card/${id}`))
}
```

## Customize the snapshot animations

Use the [pseudo-element variants](/utilities/variants) to override the default cross-fade with something more expressive:

```html
<div
  class="vt-old-[page-title]:animate-slide-out-left
         vt-new-[page-title]:animate-slide-in-right"
/>
```
