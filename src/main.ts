import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
// import './node_modules/amfe-flexible/index.js'
// import Vant from 'vant';
import '@vant/touch-emulator';
import 'vant/lib/index.css';
import './libs/rem.js';
import initVantComponent from '@/vant-ui/vant-ui';//按需引入减少代码体积
// 导入vant组件
initVantComponent();

Vue.config.productionTip = false
// Vue.use(Vant);


/**
 * 重写路由的push方法--->这个是vue-cli4.x以上的坑，不然的话，你是跳转不了的
 */
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

