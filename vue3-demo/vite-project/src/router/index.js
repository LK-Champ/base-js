import {
  createRouter,
  createWebHashHistory
} from "vue-router";

import Home from "../pages/home.vue";
import About from "../pages/about.vue";
import Width from "../pages/width.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/width',
    name: 'Width',
    component: Width
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

