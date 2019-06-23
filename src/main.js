import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import "./static/css/reset.css"
import "./utils/mixin.styl"
import "./static/fonts/iconfonts/style.styl"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
