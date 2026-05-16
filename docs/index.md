---
layout: home

hero:
  name: unocss-preset-motion
  text: Modern CSS motion, declaratively.
  tagline: A single UnoCSS preset for View Transitions and Scroll-Driven Animations.
  actions:
    - theme: brand
      text: Get started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/ManUtopiK/unocss-preset-motion

features:
  - icon: 🎬
    title: View Transitions API
    details: "First-class utilities for view-transition-name, view-transition-class, and the full set of ::view-transition-* pseudo-element variants."
  - icon: 📜
    title: Scroll-Driven Animations
    details: "Cover the entire spec — animation-timeline, named view/scroll timelines, animation-range, timeline-scope, axis controls."
  - icon: 🌿
    title: Tree-shakeable
    details: Utilities are generated on demand. Only what you use ends up in your CSS.
  - icon: 🧩
    title: Wind3 / Wind4 compatible
    details: "Drop it next to presetWind3() or presetWind4() — no conflicts, no overrides."
  - icon: 🎛
    title: Theme integration
    details: "Define reusable named timelines in your uno.config.ts and reference them with timeline-<name>."
  - icon: ♿
    title: Reduced-motion aware
    details: "Opt-in respectReducedMotion wraps motion utilities in a prefers-reduced-motion media query."
---
