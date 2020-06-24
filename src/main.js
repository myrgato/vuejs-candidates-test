import '@/assets/scss/main.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import '@/plugins/fontawesome'
import '@/plugins/bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
