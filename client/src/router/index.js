import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import Maincontent from '@/components/Maincontent'
import Article from '@/components/Article'
import Login from '@/components/Login'
import Admin from '@/components/Adminpage'
import Update from '@/components/Update'
import nav from './nav'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: nav.globalNav
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      beforeEnter: nav.authNav
    },
    {
      path: '/blog',
      component: Blog,
      children: [
        {
          path: '',
          name: 'Blog',
          component: Maincontent
        },
        {
          path: ':id',
          component: Article,
          props: true
        }
      ]
    },
    {
      path: '/update/:id',
      name: 'Update',
      component: Update,
      beforeEnter: nav.authNav
    }
  ]
})
