import { createRouter, createWebHistory } from 'vue-router'
import CharacterView from '../views/CharactersView.vue'
import CharacterDetail from '../views/CharacterDetail.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: CharacterView,
    props: true
  },
  {
    path: '/:id',
    component: CharacterDetail,
    name: "detail",
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
