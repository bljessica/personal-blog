import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// 解决重复点击导航路由报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index.vue')
    },
    {
      path: '/label:label',
      name: 'label',
      component: () => import('@/views/label.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/views/mine.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/kind/:kind',
      name: 'kind',
      component: () => import('@/views/kind.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about.vue')
    },
    {
      path: '/leaveMsg',
      name: 'leaveMsg',
      component: () => import('@/views/leave-msg.vue')
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: () => import('@/views/blog.vue')
    }
  ]
})
