<script setup lang="ts">
const items = [
  { title: 'Reveal one', body: 'Slides up from below and fades in as it enters the viewport.' },
  { title: 'Reveal two', body: 'Each card runs its own scroll-driven animation independently.' },
  { title: 'Reveal three', body: 'No JavaScript — pure CSS animation-timeline: view().' },
  { title: 'Reveal four', body: 'Tune anim-range-[…] to shape the timing.' },
]
</script>

<template>
  <div class="demo">
    <p class="demo-hint">
      Scroll past the cards below to see the effect.
    </p>
    <div class="space-y-6">
      <div
        v-for="item in items"
        :key="item.title"
        class="p-6 rounded-xl bg-white text-gray-900 shadow border border-gray-100
               opacity-0 translate-y-16
               animate-fade-up animate-fill-mode-both
               timeline-view anim-range-[entry_0%_cover_25%]"
      >
        <h4 class="text-lg font-semibold m-0">
          {{ item.title }}
        </h4>
        <p class="mt-2 mb-0 text-gray-600">
          {{ item.body }}
        </p>
      </div>
    </div>
  </div>
</template>
