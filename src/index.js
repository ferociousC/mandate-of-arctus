import Vue from 'vue';
import Hello from './app/Hello.vue';
import Interface from './app/Interface.vue';
import Data from './app/Data.vue';
import './index.scss';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Hello
      }
    },
    {
      path: '/Interface',
      components: {
        default: Interface
      }
    },
    {
      path: '/Data',
      components: {
        default: Data
      }
    }
  ]
});

export default new Vue({
  el: '#root',
  router,
  render: h => h('router-view')
});
