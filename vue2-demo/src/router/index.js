// import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
