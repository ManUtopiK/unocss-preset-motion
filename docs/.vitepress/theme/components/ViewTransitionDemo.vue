<script setup lang="ts">
import { onMounted, ref } from 'vue'

const cards = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Card ${i + 1}`,
  hue: (i * 60) % 360,
}))

const selected = ref<number | null>(null)
const supports = ref(true)

onMounted(() => {
  supports.value = typeof (document as any).startViewTransition === 'function'
})

function open(id: number) {
  const cb = () => (selected.value = id)
  const doc = document as Document & {
    startViewTransition?: (cb: () => void | Promise<void>) => unknown
  }
  if (doc.startViewTransition)
    doc.startViewTransition(cb)
  else
    cb()
}

function close() {
  const cb = () => (selected.value = null)
  const doc = document as Document & {
    startViewTransition?: (cb: () => void | Promise<void>) => unknown
  }
  if (doc.startViewTransition)
    doc.startViewTransition(cb)
  else
    cb()
}
</script>

<template>
  <div class="demo">
    <p class="demo-hint">
      Click a card to expand it. The image and title morph smoothly via the View Transitions API.
    </p>

    <p v-if="!supports" class="demo-hint text-orange-600">
      Your browser doesn't expose <code>document.startViewTransition</code>. Effect will appear instant.
    </p>

    <div v-if="selected === null" class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      <button
        v-for="card in cards"
        :key="card.id"
        class="rounded-lg overflow-hidden text-left bg-white shadow hover:shadow-md transition cursor-pointer border-0 p-0"
        @click="open(card.id)"
      >
        <div
          class="h-24"
          :style="{ background: `hsl(${card.hue} 70% 60%)`, viewTransitionName: `demo-card-${card.id}-image` }"
        />
        <div class="p-3 text-gray-900" :style="{ viewTransitionName: `demo-card-${card.id}-title` }">
          {{ card.title }}
        </div>
      </button>
    </div>

    <div v-else class="rounded-lg overflow-hidden bg-white shadow-lg">
      <button class="text-blue-600 underline m-3 cursor-pointer bg-transparent border-0 p-0" @click="close">
        ← Back
      </button>
      <div
        class="h-48"
        :style="{ background: `hsl(${(selected - 1) * 60 % 360} 70% 60%)`, viewTransitionName: `demo-card-${selected}-image` }"
      />
      <div
        class="p-4 text-xl font-semibold text-gray-900"
        :style="{ viewTransitionName: `demo-card-${selected}-title` }"
      >
        Card {{ selected }}
      </div>
      <p class="px-4 pb-4 mt-0 text-gray-600">
        The colored block and title morph smoothly thanks to <code>view-transition-name</code>.
      </p>
    </div>
  </div>
</template>
