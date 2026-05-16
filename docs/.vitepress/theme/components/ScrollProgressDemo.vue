<script setup lang="ts">
import { ref, onMounted } from 'vue'

const supports = ref(true)
onMounted(() => {
  supports.value = CSS.supports('animation-timeline: scroll()')
})
</script>

<template>
  <div class="demo">
    <p class="demo-hint">
      Scroll the box below. The bar at the top fills based on the scroll progress of
      <em>this scroller</em>, driven by a named scroll-timeline.
    </p>

    <!-- timeline-scope exposes the timeline name to the sibling bar -->
    <div class="timeline-scope-progress relative h-64 border border-gray-200 rounded-lg bg-white overflow-hidden">
      <div
        class="absolute top-0 left-0 h-1 w-full bg-blue-500 origin-left scale-x-0
               animate-grow-x animate-fill-mode-both
               timeline-progress anim-range-cover z-10"
      />
      <div class="h-full overflow-y-auto scroll-timeline-progress">
        <div class="p-6 space-y-4 text-gray-900">
          <p v-for="i in 20" :key="i" class="m-0">
            Line {{ i }} — scroll inside this box to fill the bar above.
          </p>
        </div>
      </div>
    </div>

    <p v-if="!supports" class="demo-hint mt-3 text-orange-600">
      Your browser does not support Scroll-Driven Animations. Try Chrome 115+.
    </p>
  </div>
</template>
