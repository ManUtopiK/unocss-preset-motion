<script setup lang="ts">
const items = Array.from({ length: 8 }, (_, i) => i + 1)
</script>

<template>
  <div class="timeline-scope-gallery space-y-4">
    <p class="text-sm text-gray-600">
      Scroll the gallery horizontally → the progress bar below is driven by the gallery's <code>scroll-timeline</code>,
      not by its own viewport position. <code>timeline-scope</code> on the parent exposes the timeline name to the sibling.
    </p>

    <div class="scroll-timeline-gallery scroll-timeline-axis-x overflow-x-auto flex gap-4 p-4 bg-gray-100 rounded-lg">
      <div
        v-for="i in items"
        :key="i"
        class="shrink-0 w-64 h-40 rounded-lg flex items-center justify-center text-2xl font-bold text-white"
        :style="{ background: `hsl(${i * 40} 70% 55%)` }"
      >
        {{ i }} / {{ items.length }}
      </div>
    </div>

    <div class="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
      <div
        class="h-full w-full bg-purple-500 origin-left scale-x-0 animate-grow-x animate-fill-mode-both timeline-gallery anim-range-cover"
      />
    </div>
  </div>
</template>
