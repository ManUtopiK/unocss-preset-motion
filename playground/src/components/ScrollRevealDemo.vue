<script setup lang="ts">
const items = [
  { title: 'Reveal one', body: 'Slides up from below and fades in as it enters the viewport.' },
  { title: 'Reveal two', body: 'Each card runs its own scroll-driven animation independently.' },
  { title: 'Reveal three', body: 'No JavaScript: pure CSS animation-timeline: view().' },
  { title: 'Reveal four', body: 'Tweak anim-range-[…] to control how the timing feels.' },
]
</script>

<template>
  <div class="space-y-12">
    <p class="text-sm text-gray-600">
      Each card fades and translates up as it enters the viewport. The effect runs from when the card
      first appears at the bottom until it has fully entered — driven entirely by
      <code>timeline-view</code> + <code>anim-range-[entry_0%_cover_25%]</code>.
    </p>

    <div
      v-for="item in items"
      :key="item.title"
      class="p-8 rounded-xl bg-white shadow-lg border border-gray-100
             opacity-0 translate-y-24
             animate-fade-up animate-fill-mode-both
             timeline-view anim-range-[entry_0%_cover_25%]"
    >
      <h3 class="text-xl font-semibold text-gray-900">{{ item.title }}</h3>
      <p class="mt-2 text-gray-600">{{ item.body }}</p>
    </div>
  </div>
</template>
