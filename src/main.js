// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

//由于不是vue的方法也不是vue的插件不能直接注册，所以必须把axios注册到Vue全局上
//下次使用就可以直接this.$http.get()来请求axios请求
Vue.prototype.$http = axios;
Vue.config.productionTip = false
axios.defaults.baseURL = process.env.API_ROOT;
// console.log(axios.defaults.baseURL)

/* eslint-disable no-new */
// 将浏览器所有默认设置清空 
import 'reset-css';
//导入字体库
import 'font-awesome/css/font-awesome.css';
import mixins from '@/mixins/mixins'
import '@/assets/dist/css/bootstrap.css'
import Vuex from 'vuex';
import store from './vuex/Store'
import '@/drectives/random'
Vue.use(Vuex);

Vue.mixin(mixins);

new Vue({
  el: '#app',
  show:true,
  router,
  store,
  components: { App },
  template: '<App/>'
})
