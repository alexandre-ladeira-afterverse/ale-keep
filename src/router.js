import Vue from 'vue'
import Router from 'vue-router'
import AppCards from './components/AppCards.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appCards',
      component: AppCards
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})