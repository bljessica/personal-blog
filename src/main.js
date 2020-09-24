// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import animate from 'animate.css';
// import { Message } from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/iconfont.css';
import global from './utils/global.vue'

Vue.use(animate);
Vue.use(ElementUI);
// Message.install = function(Vue, options) {
//   Vue.prototype.$message = Message;
// }
// Vue.use(Message);
Vue.prototype.GLOBAL = global;//挂载全局变量
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
