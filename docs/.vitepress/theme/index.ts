import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HorizontalGalleryDemo from './components/HorizontalGalleryDemo.vue'
import ScrollProgressDemo from './components/ScrollProgressDemo.vue'
import ScrollRevealDemo from './components/ScrollRevealDemo.vue'
import ViewTransitionDemo from './components/ViewTransitionDemo.vue'
import 'virtual:uno.css'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ScrollRevealDemo', ScrollRevealDemo)
    app.component('ScrollProgressDemo', ScrollProgressDemo)
    app.component('HorizontalGalleryDemo', HorizontalGalleryDemo)
    app.component('ViewTransitionDemo', ViewTransitionDemo)
  },
} satisfies Theme
