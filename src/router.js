import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Test from './views/Test.vue';
import Products from './views/Proucts_new.vue';
import Edit from './views/Edit.vue';
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";



Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/new',
      name: 'products',
      component: Products
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: "/signup", 
      name: "signup", 
      component: Signup 
    },
    { path: "/login",
      name: "login", 
      component: Login 
    },
    { path: "/logout",
      name: "logout", 
      component: Logout 
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
