import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Schedule from './components/Schedule.vue';
import Message from './components/Message.vue';
import MyPage from './components/MyPage.vue';
import Error404 from './components/Error404.vue';

Vue.use(VueRouter);

export const AppRouter = new VueRouter({
  mode: "history",
  routes: [
    { path: '/', component: Home }, // Default
    { path: '/home', component: Home },
    { path: '/schedule', component: Schedule },
    { path: '/message', component: Message },
    { path: '/mypage', component: MyPage },
    { path: '*', component: Error404 } // Not found
  ]
});

export default AppRouter;