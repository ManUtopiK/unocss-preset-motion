<script setup lang="ts">
const items = Array.from({ length: 8 }, (_, i) => i + 1)
</script>

<template>
  <div class="demo">
    <p class="demo-hint">
      Scroll the gallery horizontally. The bar below fills based on the gallery's scroll progress —
      it is a sibling, not a descendant.
    </p>

    <div class="timeline-scope-gallery space-y-3">
      <div class="scroll-timeline-gallery scroll-timeline-axis-x overflow-x-auto flex gap-3 p-3 bg-gray-100 rounded-lg">
        <div
          v-for="i in items"
          :key="i"
          class="shrink-0 w-48 h-28 rounded-lg flex items-center justify-center text-xl font-bold text-white"
          :style="{ background: `hsl(${i * 40} 70% 55%)` }"
        >
          {{ i }} / {{ items.length }}
        </div>
      </div>

      <div class="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          class="h-full w-full bg-purple-500 origin-left scale-x-0
                 animate-grow-x animate-fill-mode-both
                 timeline-gallery anim-range-cover"
        />
      </div>
    </div>
  </div>
</template>
