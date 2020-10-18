import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {firebaseApp} from './firebase/firebaseInit.js'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"


Vue.config.productionTip = false

  // Initialize Firebase
  const firebase = firebaseApp

  Vue.use(BootstrapVue)

  firebase.auth().onAuthStateChanged(function(){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })
