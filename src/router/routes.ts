import {RouteConfig} from 'vue-router'
import BaseLayout from 'layouts/default.vue'
import Index from 'pages/Index.vue'
import Login from 'pages/Login.vue'
import Evaluation from 'pages/Evaluation.vue'
import Message from 'pages/Message.vue'
import E404 from 'pages/404.vue'

const routes : RouteConfig[] = [
  {
    path: "/",
    component: BaseLayout,
    meta: { requiresAuth: true },
    children: [
      { path: "", component: Index},
    ]
  },
  { path: '/login', component: Login },
  { path: '*', component: E404 }
]
export default routes