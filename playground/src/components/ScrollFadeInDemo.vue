<script setup lang="ts">
const items = Array.from({ length: 8 }, (_, i) => `Item ${i + 1}`)
</script>

<template>
  <div class="space-y-4">
    <div
      v-for="item in items"
      :key="item"
      class="p-6 rounded-lg bg-blue-100 opacity-0 translate-y-8 animate-fade-up animate-fill-mode-both timeline-view anim-range-entry"
    >
      {{ item }}
    </div>
  </div>
</template>
