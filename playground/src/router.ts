import { createRouter, createWebHistory } from 'vue-router'
import DetailView from './views/DetailView.vue'
import ListView from './views/ListView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ListView },
    { path: '/card/:id', component: DetailView, props: true },
  ],
})
