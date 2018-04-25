//引入并安装vue-router插件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入index.vue和hello.vue组件
import App from './App.vue'
import index from './views/demo/index'
import hello from './views/demo/hello'
import home from './views/layout/home'
import formValidator from './views/demo/formValidator'
import list from './views/demo/list'
import list1 from './views/demo/list1'
import form from './views/demo/form'
import table from './views/demo/table'
import amap from './views/demo/amap'
import menu from './views/demo/menu'
import map from './views/demo/map'

import './assets/css/common.css'
import './assets/css/home.css'
import './styles/mixin.scss'
import 'font-awesome/css/font-awesome.min.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import $ from 'jquery'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

/*// 引入vue-amap
import VueAMap from 'vue-amap'
Vue.use(VueAMap)*/


// 引入mockjs
require('./utils/mock')

/*// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 申请的高德key
  key: '98274cd2cabcf1f95db68268eb2ba068',
  plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor'], // 插件集合
  uiVersion: '1.0', // ui库版本，不配置不加载
  v: '1.4.4'
});*/

//定义和配置路由
const routes = [
  {
    path:'/',
    component:home
  },
  {
    path:'/home',
    component:home,
    name:'home',
    children:[
      {
        path:'/',
        name:'App',
        component:App
      },
      {
        path:'form',
        name:'form',
        component:form
      },
      {
        path:'index',
        name:'index',
        component:index
      },
      {
        path:'hello',
        name:'hello',
        component:hello
      },
      {
        path:'formValidator',
        name:'formValidator',
        component:formValidator
      },
      {
        path:'list',
        name:'list',
        component:list
      },
      {
        path:'table',
        name:'table',
        component:table
      },
      {
        path:'amap',
        name:'amap',
        component:amap
      },
      {
        path:'map',
        name:'map',
        component:map
      },
      {
        path:'menu',
        name:'menu',
        component:menu
      },
      {
        path: 'list1',
        name: 'list1',
        component: list1,
        meta:{
          msg:'展示数据'
        }
      },
    ]
  },
]

//创建 router 实例，然后传 routes 配置
const router=new VueRouter({
  routes
});

//创建和挂载根实例。通过 router 配置参数注入路由，从而让整个应用都有路由功能
new Vue({
  el:"#app",
  router,
  $
});


router.beforeEach((to, from, next) => {
    NProgress.start();
    next()
});

router.afterEach(() => {
    NProgress.done();
});

