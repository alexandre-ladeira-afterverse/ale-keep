import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AppCards from './components/AppCards.vue'
import AppHeader from './components/AppHeader.vue'
import SideMenu from './components/SideMenu.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLightbulb)
library.add(faBell)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('app-cards', AppCards)
Vue.component('app-header', AppHeader)
Vue.component('side-menu', SideMenu)

Vue.config.productionTip = false

export const bus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
