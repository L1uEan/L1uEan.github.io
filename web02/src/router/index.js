import Vue from 'vue'
import Router from 'vue-router'
// 五个导航首位
import Home from '../view/Home'
// import Home from "../view/Home"
import KeCheng from '../view/KeCheng';
import LianXi from '../view/LianXi';
import Me from '../view/Me';
import YueKe from '../view/YueKe';
import Index from '../view/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name:'Home',
      component:Home,
      redirect:'/home/index',
      children:[
        {
          path:'index',
          name:'Index',
          component:Index
        },
        {
          path:'lianxi',
          name:'LianXi',
          component:LianXi
        },
        {
          path:'kecheng',
          name:'KeCheng',
          component:KeCheng
        },
        {
          path:'me',
          name:'Me',
          component:Me
        },
        {
          path:'YueKe',
          name:'YueKe',
          component:YueKe
        },
      ]
    }
  ]
})
