import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import store from './store'
=======
import store from './store/index'
import "./static/css/reset.css"
import "./utils/mixin.styl"
import "./static/fonts/iconfonts/style.styl"
>>>>>>> dcdf8ce5da792a47ec9c880aadc7ddfb92e93057

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
