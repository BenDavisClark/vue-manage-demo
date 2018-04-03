//引入并安装vue-router插件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入index.vue和hello.vue组件
import App from './App.vue'
import index from './components/index'
import hello from './components/hello'
import home from './components/home'
import formValidator from './components/formValidator'
import list from './components/list'
import form from './components/form'
import table from './components/table'
import amap from './components/amap'
import menu from './components/menu'
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


// 引入vue-amap
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 申请的高德key
  key: '98274cd2cabcf1f95db68268eb2ba068',
  plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor'], // 插件集合
  uiVersion: '1.0', // ui库版本，不配置不加载
  v: '1.4.4'
});

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
        path:'menu',
        name:'menu',
        component:menu
      }
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

