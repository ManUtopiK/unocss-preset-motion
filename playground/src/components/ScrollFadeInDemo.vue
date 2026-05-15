<script setup lang="ts">
const items = Array.from({ length: 8 }, (_, i) => `Item ${i + 1}`)
</script>

<template>
  <div class="space-y-4">
    <div
      v-for="item in items"
      :key="item"
      class="h-40 flex items-center justify-center text-xl font-semibold rounded-lg bg-blue-100 opacity-0 translate-y-16 animate-fade-up animate-fill-mode-both timeline-view anim-range-[cover_0%_cover_50%]"
    >
      {{ item }}
    </div>
  </div>
</template>
