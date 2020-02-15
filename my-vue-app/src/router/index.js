import Vue from 'vue'
import Router from 'vue-router'
import gam from '@/components/gam.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'gam',
      component: gam,
    }
  ]
})
