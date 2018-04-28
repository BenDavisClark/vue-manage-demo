//引入并安装vue-router插件
import Vue from 'vue'
import router from './router' // 路由相关配置
import store from './store'
import App from './App'
import './assets/css/common.css'
import './assets/css/home.css'
import './styles/mixin.scss'
import 'font-awesome/css/font-awesome.min.css'
import $ from 'jquery'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

// 引入mockjs
require('./utils/mock')

//创建和挂载根实例。通过 router 配置参数注入路由，从而让整个应用都有路由功能
new Vue({
  $,
  router,
  store,
  el: '#app', //  相当于 new Vue({}).$mount('#app');
  template: '<App/>', // 1、可以通过在 #app 内加入<app></app>替代 2、或者 通过 render: h => h(App) 渲染一个视图，然后提供给el挂载
  components: { // vue2中可以通过 render: h => h(App) 渲染一个视图，然后提供给el挂载
    App
  }
});

