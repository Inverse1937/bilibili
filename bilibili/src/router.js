import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'home',
          component: Home
      },
      {
          path: '/hot',
          name: 'hot',
          component: () => import('./views/Hot.vue')
      },
      {
          path: '/tothem',
          name: 'tothem',
          component: () => import('./views/ToThem.vue')
      },
      {
          path: '/thegen',
          name: 'thegen',
          component: () => import('./views/TheGen.vue')
      },
      {
          path: '/music',
          name: 'music',
          component: () => import('./views/Music.vue')
      },
      {
        path: '/shousuo',
        name: 'shousuo',
        component: () => import('./views/ShouSuo.vue')
    },
    {
        path: '/video',
        name: 'video',
        component: () => import('./views/Video.vue')
    }
  ],
  linkActiveClass: 'link-active'
})
