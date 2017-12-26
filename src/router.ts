import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/index';
// Pages
import Home from './components/Home.vue';
import Schedule from './components/Schedule.vue';
import Message from './components/Message.vue';
import MyPage from './components/MyPage.vue';
import Evaluation from './components/Evaluation.vue';
import Login from './components/Login.vue';
import Error404 from './components/Error404.vue';


Vue.use(VueRouter);

export const appRouter = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home }, // Default
    { path: '/home', component: Home },
    { path: '/schedule', component: Schedule },
    { path: '/message', component: Message },
    { path: '/mypage', component: MyPage, meta: { requiresAuth: true } },
    { path: '/evaluation', component: Evaluation },
    { path: '/login', component: Login },
    { path: '*', component: Error404 }, // Not found
  ],
});

appRouter.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.isLogin) {
    next({ path: '/', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default appRouter;
