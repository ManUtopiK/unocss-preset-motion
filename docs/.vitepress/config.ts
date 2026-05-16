import unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'unocss-preset-motion',
  description: 'UnoCSS preset for View Transitions and Scroll-Driven Animations',
  base: '/unocss-preset-motion/',
  lastUpdated: true,
  cleanUrls: true,

  vite: {
    plugins: [unocss({ configFile: '../../uno.config.ts' })],
  },

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Utilities', link: '/utilities/view-transitions' },
      { text: 'Examples', link: '/examples/scroll-reveal' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting started', link: '/guide/getting-started' },
            { text: 'Options', link: '/guide/options' },
            { text: 'Theme integration', link: '/guide/theme' },
            { text: 'Reduced motion', link: '/guide/reduced-motion' },
          ],
        },
      ],
      '/utilities/': [
        {
          text: 'View Transitions',
          items: [
            { text: 'view-transition-name', link: '/utilities/view-transitions' },
            { text: 'Pseudo-element variants', link: '/utilities/variants' },
          ],
        },
        {
          text: 'Scroll-Driven Animations',
          items: [
            { text: 'animation-timeline', link: '/utilities/animation-timeline' },
            { text: 'Timeline names & scope', link: '/utilities/timeline-names' },
            { text: 'Timeline axis & inset', link: '/utilities/timeline-axis' },
            { text: 'animation-range', link: '/utilities/animation-range' },
          ],
        },
      ],
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Scroll reveal', link: '/examples/scroll-reveal' },
            { text: 'Scroll progress bar', link: '/examples/scroll-progress' },
            { text: 'Horizontal gallery', link: '/examples/horizontal-gallery' },
            { text: 'View transition list/detail', link: '/examples/view-transition' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ManUtopiK/unocss-preset-motion' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/unocss-preset-motion' },
    ],

    editLink: {
      pattern: 'https://github.com/ManUtopiK/unocss-preset-motion/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 ManUtopiK',
    },

    search: {
      provider: 'local',
    },
  },
})
