# Options

```ts
presetMotion({
  respectReducedMotion: false,
  defaultDuration: '300ms',
  prefix: '',
})
```

## `respectReducedMotion`

- **Type**: `boolean`
- **Default**: `false`

When `true`, every motion utility is wrapped in `@media (prefers-reduced-motion: no-preference)`, so users who request reduced motion receive a static experience automatically.

```ts
presetMotion({ respectReducedMotion: true })
```

See [Reduced motion](/guide/reduced-motion) for the full story.

## `defaultDuration`

- **Type**: `string | false`
- **Default**: `'300ms'`

Injects a preflight that sets a default animation duration on all `::view-transition-old(*)` and `::view-transition-new(*)` pseudo-elements. Useful when you want a consistent base duration without specifying one per element.

Set to `false` to disable the preflight.

```ts
presetMotion({ defaultDuration: '500ms' })
// → ::view-transition-old(*), ::view-transition-new(*) { animation-duration: 500ms }
```

## `prefix`

- **Type**: `string`
- **Default**: `''`

Prefix every utility. Useful if a class name collides with another preset.

```ts
presetMotion({ prefix: 'mo-' })
```

```html
<!-- without prefix -->
<div class="vt-name-hero timeline-view" />

<!-- with prefix: 'mo-' -->
<div class="mo-vt-name-hero mo-timeline-view" />
```
