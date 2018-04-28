import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/demo/index.vue';
import hello from '../views/demo/hello.vue';
import home from '../views/layout/Home.vue';
import formValidator from '../views/demo/formValidator.vue';
import list from '../views/demo/list.vue';
import list1 from '../views/demo/list1.vue';
import form from '../views/demo/form.vue';
import table from '../views/demo/table.vue';
import amap from '../views/demo/amap.vue';
import menu from '../views/demo/menu.vue';
import map from '../views/demo/map.vue';
import NotFound from '../views/404.vue';
const _import = require('./_import_component');
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: home,
      redirect:'/index',
      name: 'Index',
      children:[{path: 'index', component:  _import('/demo/index')}]
    },
    {
      path:'/home',
      component:home,
      name:'home',
      children:[
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
        {
          path: '/web404', /* 404页面 */
          component: NotFound,
          name: 'web404'
        }
      ]
    },
  ]
});

/*
router.beforeEach((to, from, next) => {// 注册一个全局前置守卫
  if (to.matched.some(m => m.meta.auth)) {// 判断是否需要校验
    if (store.state.isLogin) {// 获取
      next();// 校验通过，正常跳转到你设置好的页面
    } else {
      next({// 校验失败，跳转至登录界面
        path: '/login',
        query: {
          redirect: to.fullPath
        }// 将跳转的路由path作为参数，用于在登录成功后获取并跳转到该路径
      });
    }
  } else {
    next();// 不需要校验，直接跳转
  }
});
*/


export default router;

/*
  $route.path 字符串，等于当前路由对象的路径，会被解析为绝对路径，如 "/home/news" 。
  $route.params 对象，包含路由中的动态片段和全匹配片段的键值对
  $route.query 对象，包含路由中查询参数的键值对。例如，对于 /home/news/detail/01?favorite=yes ，会得到$route.query.favorite == 'yes' 。
  $route.router 路由规则所属的路由器（以及其所属的组件）。
  $route.matched 数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。它会将嵌套它的父路由都匹配出来。
  $route.name  当前路径的名字，如果没有使用具名路径，则名字为空。
*/


