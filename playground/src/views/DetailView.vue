<script setup lang="ts">
import { useRouter } from 'vue-router'
import { startViewTransition } from '../use-view-transition'

const props = defineProps<{ id: string }>()
const router = useRouter()
const hue = (Number.parseInt(props.id) - 1) * 60 % 360

function back() {
  startViewTransition(() => router.push('/'))
}
</script>

<template>
  <section>
    <button class="text-blue-600 underline mb-4" @click="back">
      ← Back
    </button>
    <div
      class="h-64 rounded-lg"
      :style="{ background: `hsl(${hue} 70% 60%)`, viewTransitionName: `card-${id}-image` }"
    />
    <div class="p-4 bg-white rounded-b-lg text-2xl font-semibold" :style="{ viewTransitionName: `card-${id}-title` }">
      Card {{ id }}
    </div>
    <p class="mt-4 text-gray-600">
      The image and title morph smoothly thanks to <code>view-transition-name</code>.
    </p>
  </section>
</template>
