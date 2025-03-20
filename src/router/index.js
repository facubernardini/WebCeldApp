import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',

      component: () => import('../views/MainView.vue'),
    },
    {
      path: '/manual',
      name: 'userManual',

      component: () => import('../views/UserManualView.vue'),
    }    
  ],
})

export default router