import Vue from 'vue'
import Router from 'vue-router'
import '../../static/iconfont.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/index.vue')
    },
    {
      path: '/label',
      name: 'label',
      component: () => import('@/components/label.vue')
    }
  ]
})
