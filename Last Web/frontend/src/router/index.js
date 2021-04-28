import Vue from 'vue'
import VueRouter from 'vue-router'
import pathIndex from '../views/index.vue'
import pathUser from '../views/User.vue'
import pathAdmin from '../views/Admin.vue'
import pathLogin from '../views/login.vue'
import pathRegister from '../views/register.vue'
import pathForum from '../views/forum.vue'
import pathReportform from '../views/reportform.vue'
import pathTrackingstatus from '../views/trackingstatus.vue'
import pathForgot from '../views/forgotPassword.vue'
import pathmanageacc from '../views/manage_acc.vue'
import pathmanageReport from '../views/manageReport.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: pathIndex 
  },
  {
    path: '/user',
    name: 'User',
    component: pathUser 
  },
  {
    path: '/admin',
    name: 'Admin',
    component: pathAdmin 
  },
  {
    path: '/login',
    name: 'Login',
    component: pathLogin 
  },
  {
    path: '/forum',
    name: 'Forum',
    component: pathForum 
  },
  {
    path: '/reportform',
    name: 'Reportform',
    component: pathReportform
  },
  {
    path: '/trackingstatus',
    name: 'Tracking',
    component: pathTrackingstatus 
  },
  {
    path: '/register',
    name: 'Register',
    component: pathRegister 
  },
  {
    path: '/forgotpassword',
    name: 'Forgot',
    component: pathForgot 
  },
  {
    path: '/manageUser',
    name: 'Manage_acc',
    component: pathmanageacc 
  },
  {
    path: '/manageReport',
    name: 'manageReport',
    component: pathmanageReport 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router