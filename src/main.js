import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import firebase from 'firebase'

Vue.config.productionTip = false

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDhKkCbbH8zAou1DiB58pYf09bIT8qEaNc",
    authDomain: "desafio-auth-login.firebaseapp.com",
    databaseURL: "https://desafio-auth-login.firebaseio.com",
    projectId: "desafio-auth-login",
    storageBucket: "desafio-auth-login.appspot.com",
    messagingSenderId: "489902870653",
    appId: "1:489902870653:web:1677beefee22524cf42114"
  };

  Vue.use(BootstrapVue)
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(function(){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })
