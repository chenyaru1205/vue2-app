import Vue from 'vue';
import Router from 'vue-router';
 
//左侧菜单
import Home from "../views/HomeView.vue"
import About from "../views/AboutView.vue"

 
 
Vue.use(Router);
 
const base = window.__POWERED_BY_QIANKUN__ ? '/vue2-app' : '、'  // qiankun环境配置基路由personalCenter
console.log(9999999, base)
export default new Router({
  base,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home11',
      component: Home,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    }
  ]
});
 
 