import * as Vue from 'vue';
import App from './App';
import router from './router';

/* eslint-disable no-new */
window.$vueApp = Vue.createApp(App);
window.$vueApp.config.globalProperties.routerAppend = (path, pathToAppend) => path + (path.endsWith('/') ? '' : '/') + pathToAppend;
window.$vueApp.use(router);
window.$vueApp.mount('#app');
