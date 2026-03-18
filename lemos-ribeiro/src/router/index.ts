import { createRouter, createWebHistory } from 'vue-router'
import LandPage from '@/view/LandPage.vue'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: LandPage,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router