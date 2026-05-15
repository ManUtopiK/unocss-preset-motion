import { defineConfig, presetWind } from 'unocss'
import presetMotion from 'unocss-preset-motion'

export default defineConfig({
  presets: [
    presetWind(),
    presetMotion(),
  ],
  theme: {
    animation: {
      keyframes: {
        'fade-up': '{from{opacity:0;transform:translateY(2rem)}to{opacity:1;transform:translateY(0)}}',
        'fade-in': '{from{opacity:0}to{opacity:1}}',
        'fade-out': '{from{opacity:1}to{opacity:0}}',
        'grow-x': '{from{transform:scaleX(0)}to{transform:scaleX(1)}}',
        'slide-in-right': '{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}',
        'slide-out-left': '{from{transform:translateX(0);opacity:1}to{transform:translateX(-100%);opacity:0}}',
      },
      durations: {
        'fade-up': '1s',
        'fade-in': '500ms',
        'fade-out': '500ms',
        'grow-x': '1s',
        'slide-in-right': '400ms',
        'slide-out-left': '400ms',
      },
      timingFns: {
        'fade-up': 'ease-out',
        'fade-in': 'ease',
        'fade-out': 'ease',
        'grow-x': 'linear',
      },
      counts: {
        'fade-up': '1',
        'fade-in': '1',
        'grow-x': '1',
      },
    },
  },
})
