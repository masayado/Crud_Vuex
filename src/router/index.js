import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    redirect: '/login',
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      authenticated:true,
    },
  },
  {
    path:'/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    meta:{
      authenticated:true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//implementando guardias: guards
router.beforeEach((to, from, next)=>{
  let user = firebase.auth().currentUser;
  console.log(user);
  //console.log(to, 'en route');
  let private_route = to.matched.some((record)=>record.meta.authenticated)

  if(private_route && !user){
    next({name:'Login'})
  }
  else if(!private_route && user){
    next('/home')
  }
  else next()
});

export default router
