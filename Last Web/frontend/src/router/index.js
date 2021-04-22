import Vue from 'vue'
import VueRouter from 'vue-router'
import pathIndex from '../views/index.vue'
import pathHome from '../views/Home.vue'
import pathAdmin from '../views/Admin.vue'
import pathLogin from '../views/login.vue'
import pathRegister from '../views/register.vue'
import pathForum from '../views/forum.vue'
import pathReportform from '../views/reportform.vue'
import pathTrackingstatus from '../views/trackingstatus.vue'
import pathForgot from '../views/forgotPassword.vue'
import pathmanageacc from '../views/manage_acc.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: pathIndex // set index as path '/'
  },
  {
    path: '/user',
    name: 'User',
    component: pathHome // set home as path '/user'
  },
  {
    path: '/admin',
    name: 'Admin',
    component: pathAdmin // set admin as path '/admin'
  },
  {
    path: '/login',
    name: 'Login',
    component: pathLogin // set login as path '/login'
  },
  {
    path: '/forum',
    name: 'Forum',
    component: pathForum // set login as path '/'
  },
  {
    path: '/reportform',
    name: 'Reportform',
    component: pathReportform // set login as path '/'
  },
  {
    path: '/trackingstatus',
    name: 'Tracking',
    component: pathTrackingstatus // set login as path '/'
  },
  {
    path: '/register',
    name: 'Register',
    component: pathRegister // set register as path '/'
  },
  {
    path: '/forgotpassword',
    name: 'Forgot',
    component: pathForgot // set forgot password as path '/forgotpassword'
  },
  {
    path: '/manageuser',
    name: 'Manage_acc',
    component: pathmanageacc // set forgot password as path '/forgotpassword'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router