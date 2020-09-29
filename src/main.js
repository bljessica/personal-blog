// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import animate from 'animate.css';
// import { Message } from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/iconfont.css';

import router from './router';
import store from './store/index';

Vue.use(animate);
Vue.use(ElementUI);
Vue.prototype.GLOBAL = global;//挂载全局变量
Vue.config.productionTip = false;

//路由守卫
router.beforeEach((to, from, next) => {
  //判断该路由是否需要登陆权限
  if(to.meta.requireAuth){
    //登录了
    if(store.getters.logined){
      next();
    }
    else {
      next({
        path: '/login'
      });
    }
  }
  else {
    next();
  }
});

//跳转路由后回到顶部
router.afterEach((to, from, next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  // next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
