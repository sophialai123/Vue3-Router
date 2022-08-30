import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import PageNotFound from '../views/PageNotFound.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  //jobs view router
  {
    path:"/jobs",
    name:"jobs",
    component:JobsView
  },
  // jobsdetails router nested inside of jobs router
  { 
    // router Params
    path:"/jobs/:id",
    name: "JobDetails",
    component:JobDetails,
    //accept a props as pramas id
    props:true
  },

  //redirect router
  {
    //old router path
    path:"/all-jobs",
   //redirect router or path
    redirect:'/jobs'

  },
  //404 page not found router
  {
    //catch all not found router,
    //use regax path
    path: "/:catchAll(.*)",
    name:'PageNotFound',
    component:PageNotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
