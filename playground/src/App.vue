<script setup lang="ts">
import ScrollFadeInDemo from './components/ScrollFadeInDemo.vue'
import ScrollProgressDemo from './components/ScrollProgressDemo.vue'
import NamedTimelineDemo from './components/NamedTimelineDemo.vue'
</script>

<template>
  <ScrollProgressDemo />

  <main class="max-w-3xl mx-auto p-8 space-y-16">
    <header>
      <h1 class="text-4xl font-bold vt-name-[page-title]">unocss-preset-motion</h1>
      <p class="text-gray-600 mt-2">View Transitions + Scroll-Driven Animations demos</p>
    </header>

    <RouterView />

    <section>
      <h2 class="text-2xl font-semibold mb-4">Scroll fade-in</h2>
      <ScrollFadeInDemo />
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">Named timeline</h2>
      <NamedTimelineDemo />
    </section>
  </main>
</template>
