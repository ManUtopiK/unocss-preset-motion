<script setup lang="ts">
import { useRouter } from 'vue-router'
import { startViewTransition } from '../use-view-transition'

const router = useRouter()
const cards = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Card ${i + 1}`,
  hue: (i * 60) % 360,
}))

function navigate(id: number) {
  startViewTransition(() => router.push(`/card/${id}`))
}
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">View Transition list → detail</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <button
        v-for="card in cards"
        :key="card.id"
        class="rounded-lg overflow-hidden text-left bg-white shadow-md hover:shadow-lg hover:scale-105 transition"
        @click="navigate(card.id)"
      >
        <div
          class="h-32"
          :style="{ background: `hsl(${card.hue} 70% 60%)`, viewTransitionName: `card-${card.id}-image` }"
        />
        <div class="p-3 bg-white" :style="{ viewTransitionName: `card-${card.id}-title` }">
          {{ card.title }}
        </div>
      </button>
    </div>
  </section>
</template>
